import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ArrowRight } from 'lucide-react';
import { UserContext } from '../App';

export default function NameCollection() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  if (!userData) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update user data with name
    setUserData({
      ...userData,
      name: `${formData.firstName} ${formData.lastName}`.trim()
    });

    // Navigate to dashboard
    navigate('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Interactive Background */}
      <div className="fixed inset-0 wave-bg"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Bubbles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="bubble"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="shape"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: `${Math.random() * 40 + 30}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          <div className="glass-card p-8 rounded-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#007BFF] to-[#00BCD4] rounded-full 
                flex items-center justify-center mx-auto mb-4">
                <User size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#007BFF] mb-2">
                Tell us your name
              </h2>
              <p className="text-[#212121]/70">
                Please enter your name to complete your profile
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-[#212121]/70">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-[#007BFF]/20 rounded-lg 
                    focus:ring-2 focus:ring-[#007BFF]/50 focus:border-transparent transition-all"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-[#212121]/70">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-[#007BFF]/20 rounded-lg 
                    focus:ring-2 focus:ring-[#007BFF]/50 focus:border-transparent transition-all"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full relative group px-8 py-3 bg-[#007BFF] text-white rounded-lg font-semibold
                  shadow-lg transform hover:translate-y-[-2px] transition-all duration-300 
                  flex items-center justify-center space-x-2"
              >
                <span>Continue to Dashboard</span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}