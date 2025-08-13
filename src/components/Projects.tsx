import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, BookOpen, GraduationCap, Brain, Cpu, Lightbulb } from 'lucide-react';
import { UserContext } from '../App';

const subjects = [
  {
    id: 'general-knowledge',
    title: 'General Knowledge',
    description: 'Explore history, geography, science, and current affairs',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800',
    icon: BookOpen,
    questions: 150,
    difficulty: 'All Levels'
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Learn about educational systems, theories, and modern trends',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    icon: GraduationCap,
    questions: 120,
    difficulty: 'Intermediate'
  },
  {
    id: 'logical-thinking',
    title: 'Logical and Analytical Thinking',
    description: 'Develop problem-solving and critical thinking skills',
    image: 'https://images.unsplash.com/photo-1416339684178-3a239570f315?auto=format&fit=crop&q=80&w=800',
    icon: Brain,
    questions: 100,
    difficulty: 'Advanced'
  },
  {
    id: 'technology',
    title: 'Technology and Innovation',
    description: 'Stay updated with latest tech trends and innovations',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    icon: Cpu,
    questions: 130,
    difficulty: 'Mixed'
  },
  {
    id: 'career',
    title: 'Career and Academics',
    description: 'Guide your academic and professional development',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    icon: Lightbulb,
    questions: 110,
    difficulty: 'All Levels'
  }
];

export default function Projects() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  const handleQuizClick = (subjectId: string) => {
    // Always store the intended destination
    sessionStorage.setItem('redirectAfterLogin', `/subject/${subjectId}`);

    // If user is not logged in, redirect to login first
    if (!userData) {
      navigate('/login');
      return;
    }

    // If user is logged in but hasn't provided their name, redirect to name collection
    if (!userData.name) {
      navigate('/name-collection');
      return;
    }

    // If user is fully authenticated with name, proceed to subject
    navigate(`/subject/${subjectId}`);
  };

  return (
    <section className="py-20 bg-[#E0F7FA]" id="quizzes">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#007BFF]">
          Available Quiz Categories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <div 
                key={subject.id} 
                className="bg-white rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                onClick={() => handleQuizClick(subject.id)}
              >
                <div className="relative group">
                  <img 
                    src={subject.image} 
                    alt={subject.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-[#007BFF]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-2 bg-[#FF5722] text-white rounded-full flex items-center gap-2 hover:bg-[#FF5722]/90 transition-colors">
                      <Play size={20} />
                      Start Quiz
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#007BFF]/10 flex items-center justify-center">
                      <Icon size={24} className="text-[#007BFF]" />
                    </div>
                    <h3 className="text-xl font-medium text-[#212121]">{subject.title}</h3>
                  </div>
                  <p className="text-[#212121]/70 mb-4">{subject.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#007BFF] flex items-center gap-1">
                      <BookOpen size={16} />
                      {subject.questions} Questions
                    </span>
                    <span className="text-[#FF5722]">{subject.difficulty}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}