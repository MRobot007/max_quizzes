import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle2, LogOut, Book, Lightbulb, Brain, Cpu, GraduationCap, ArrowLeft } from 'lucide-react';

const subjects = [
  {
    id: 'general-knowledge',
    title: 'General Knowledge',
    icon: Book,
    description: 'Explore history, geography, science, and current affairs',
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    description: 'Learn about educational systems, theories, and modern trends',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'logical-thinking',
    title: 'Logical and Analytical Thinking',
    icon: Brain,
    description: 'Develop problem-solving and critical thinking skills',
    color: 'from-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1416339684178-3a239570f315?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'technology',
    title: 'Technology and Innovation',
    icon: Cpu,
    description: 'Stay updated with latest tech trends and innovations',
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'career',
    title: 'Career and Academics',
    icon: Lightbulb,
    description: 'Guide your academic and professional development',
    color: 'from-yellow-500 to-amber-500',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] to-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-[#007BFF] hover:text-[#007BFF]/80 transition-all duration-300 
                  px-4 py-2 rounded-lg hover:bg-[#007BFF]/5 active:bg-[#007BFF]/10"
              >
                <ArrowLeft size={24} className="transition-transform group-hover:-translate-x-1" />
                <span>Back</span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-[2px] bg-gradient-to-b from-[#007BFF]/20 to-[#00BCD4]/20"></div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#007BFF] to-[#00BCD4] bg-clip-text text-transparent">
                  Max Quizzes
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-[#212121] 
                  hover:text-[#007BFF] hover:bg-[#007BFF]/5 active:bg-[#007BFF]/10 transition-all duration-300"
              >
                <UserCircle2 size={24} />
                <span>Profile</span>
              </button>
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-[#212121] 
                  hover:text-[#007BFF] hover:bg-[#007BFF]/5 active:bg-[#007BFF]/10 transition-all duration-300"
              >
                <LogOut size={24} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-[#212121]">Choose Your Subject</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <div
                key={subject.id}
                onClick={() => navigate(`/subject/${subject.id}`)}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                  transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Subject Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={subject.image}
                    alt={subject.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#007BFF] 
                      transition-colors duration-300">{subject.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00BCD4] 
                    flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <p className="text-[#212121]/70 mb-4">{subject.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#212121]/70">Progress</span>
                      <span className="text-[#007BFF]">25%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-gradient-to-r from-[#007BFF] to-[#00BCD4] 
                        transform origin-left group-hover:scale-x-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}