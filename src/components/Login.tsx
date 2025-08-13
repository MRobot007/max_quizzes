import React, { useState, useContext } from 'react';
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export default function Login() {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Store email in context and navigate to name collection
    setUserData({
      name: '',
      email: formData.email
    });

    // Get the redirect URL from sessionStorage or default to name collection
    const redirectUrl = sessionStorage.getItem('redirectAfterLogin') || '/name-collection';
    navigate('/name-collection');
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
          <Link to="/" className="inline-flex items-center text-[#007BFF] mb-8 hover:text-[#007BFF]/80 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>

          <div className="glass-card p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#007BFF] mb-2">
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </h2>
              <p className="text-[#212121]/70">
                {isLogin ? 'Sign in to continue your learning journey' : 'Join us and start learning today'}
              </p>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#212121]/70">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#007BFF]" size={20} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-white/50 border border-[#007BFF]/20 rounded-lg 
                      focus:ring-2 focus:ring-[#007BFF]/50 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#212121]/70">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#007BFF]" size={20} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-2 bg-white/50 border border-[#007BFF]/20 rounded-lg 
                      focus:ring-2 focus:ring-[#007BFF]/50 focus:border-transparent transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#007BFF]/70 
                      hover:text-[#007BFF] transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#212121]/70">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#007BFF]" size={20} />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-2 bg-white/50 border border-[#007BFF]/20 rounded-lg 
                        focus:ring-2 focus:ring-[#007BFF]/50 focus:border-transparent transition-all"
                      placeholder="Confirm your password"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-[#007BFF]" />
                    <span className="ml-2 text-[#212121]/70">Remember me</span>
                  </label>
                  <a href="#" className="text-[#007BFF] hover:text-[#007BFF]/80 transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full relative group px-8 py-3 bg-[#007BFF] text-white rounded-lg font-semibold
                  shadow-lg transform hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00BCD4] 
                  opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
                <span className="relative z-10">{isLogin ? 'Sign In' : 'Create Account'}</span>
              </button>

              <p className="text-center text-[#212121]/70">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#007BFF] hover:text-[#007BFF]/80 transition-colors"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}