import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserCircle2, ArrowLeft, Trophy, Clock, Target, 
  BookOpen, Brain, Award, TrendingUp, Star, Zap,
  Crown, Shield, Medal, Flame, Sparkles, Lock, Check
} from 'lucide-react';
import { UserContext } from '../App';

// Avatar definitions with level requirements
const avatars = [
  {
    id: 'novice',
    name: 'Novice Explorer',
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=novice&backgroundColor=b6e3f4',
    level: 1,
    unlocked: true,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'intermediate',
    name: 'Knowledge Seeker',
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=intermediate&backgroundColor=c1f4b6',
    level: 5,
    unlocked: true,
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'advanced',
    name: 'Wisdom Master',
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=advanced&backgroundColor=e3b6f4',
    level: 10,
    unlocked: true,
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'expert',
    name: 'Quiz Champion',
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=expert&backgroundColor=f4e3b6',
    level: 15,
    unlocked: false,
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    id: 'master',
    name: 'Grand Master',
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=master&backgroundColor=f4b6b6',
    level: 20,
    unlocked: false,
    color: 'from-red-400 to-red-600'
  },
  {
    id: 'legendary',
    name: 'Legendary Scholar',
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=legendary&backgroundColor=f4d6b6',
    level: 25,
    unlocked: false,
    color: 'from-orange-400 to-orange-600'
  }
];

export default function Profile() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  // Example stats data
  const stats = {
    quizzesTaken: 25,
    averageScore: 85,
    totalTime: '15 hours',
    streakDays: 7,
    level: 12 // Current user level
  };

  const recentActivity = [
    { subject: 'General Knowledge', score: 90, date: '2024-03-15' },
    { subject: 'Technology', score: 85, date: '2024-03-14' },
    { subject: 'Logical Thinking', score: 95, date: '2024-03-13' }
  ];

  const badges = [
    {
      title: 'Knowledge Sovereign',
      description: 'Complete 100 quizzes with 90%+ accuracy',
      icon: Crown,
      level: 'Legendary',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Wisdom Seeker',
      description: 'Achieve a 30-day learning streak',
      icon: Sparkles,
      level: 'Epic',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Mind Maestro',
      description: 'Score 100% in 5 different categories',
      icon: Brain,
      level: 'Elite',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Quiz Champion',
      description: 'Win 10 competitive quizzes',
      icon: Trophy,
      level: 'Master',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      title: 'Speed Demon',
      description: 'Complete 20 quizzes under record time',
      icon: Zap,
      level: 'Expert',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  if (!userData) {
    navigate('/login');
    return null;
  }

  const AvatarModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#212121]">Choose Your Avatar</h3>
          <button 
            onClick={() => setShowAvatarModal(false)}
            className="text-[#212121]/70 hover:text-[#212121] transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {avatars.map((avatar) => {
            const isUnlocked = stats.level >= avatar.level;
            return (
              <div 
                key={avatar.id}
                className={`relative group rounded-xl overflow-hidden ${
                  isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-75'
                } bg-gradient-to-r ${avatar.color} p-4`}
                onClick={() => {
                  if (isUnlocked) {
                    setSelectedAvatar(avatar);
                    setShowAvatarModal(false);
                  }
                }}
              >
                <img 
                  src={avatar.image}
                  alt={avatar.name}
                  className="w-full h-48 object-contain"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isUnlocked ? 'from-black/70' : 'from-black/90'
                } to-transparent transition-opacity`}>
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        <Lock size={32} className="text-white/80" />
                        <p className="text-white/80 text-sm mt-2">
                          Unlocks at Level {avatar.level}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">{avatar.name}</h4>
                  <p className="text-white/80 text-sm">
                    {isUnlocked ? 'Available' : `Requires Level ${avatar.level}`}
                  </p>
                </div>
                {avatar.id === selectedAvatar.id && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full 
                    flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] to-white">
      {showAvatarModal && <AvatarModal />}
      
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => navigate('/dashboard')}
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <div className={`w-24 h-24 rounded-full overflow-hidden cursor-pointer
                  ring-4 ring-offset-2 ring-[#007BFF] transition-all duration-300
                  hover:ring-[#00BCD4] bg-gradient-to-r ${selectedAvatar.color} p-2`}
                  onClick={() => setShowAvatarModal(true)}
                >
                  <img 
                    src={selectedAvatar.image}
                    alt="Profile Avatar"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm font-medium">Change Avatar</p>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#007BFF] text-white text-xs font-bold
                  px-2 py-1 rounded-full">
                  Lvl {stats.level}
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#212121]">{userData.name}</h1>
                <p className="text-[#212121]/70">{userData.email}</p>
                <p className="text-sm text-[#007BFF]">Member since March 2024</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Trophy, label: 'Quizzes Taken', value: stats.quizzesTaken },
              { icon: Target, label: 'Average Score', value: `${stats.averageScore}%` },
              { icon: Clock, label: 'Total Time', value: stats.totalTime },
              { icon: BookOpen, label: 'Day Streak', value: stats.streakDays }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#00BCD4] 
                    flex items-center justify-center">
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#212121]/70">{stat.label}</p>
                    <p className="text-xl font-bold text-[#212121]">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Level Progress */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#212121]">Level Progress</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#212121]/70">Progress to Level {stats.level + 1}</span>
                <span className="text-[#007BFF] font-medium">75%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#007BFF] to-[#00BCD4] 
                  rounded-full transform origin-left transition-transform duration-1000" />
              </div>
              <p className="text-sm text-[#212121]/70">
                Complete more quizzes to level up and unlock new avatars!
              </p>
            </div>
          </div>

          {/* Badges Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#212121]">Achievement Badges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/10 to-[#00BCD4]/10 
                    rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-white rounded-xl p-4 border border-[#007BFF]/10
                    transform hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${badge.color}
                        flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                        <badge.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#212121] mb-1">{badge.title}</h3>
                        <p className="text-sm text-[#212121]/70 mb-2">{badge.description}</p>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium
                          bg-gradient-to-r from-[#007BFF]/10 to-[#00BCD4]/10 text-[#007BFF]">
                          {badge.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#212121]">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg 
                  bg-gradient-to-r hover:from-[#007BFF]/5 hover:to-[#00BCD4]/5 transition-colors">
                  <div>
                    <h3 className="font-medium text-[#212121]">{activity.subject}</h3>
                    <p className="text-sm text-[#212121]/70">{activity.date}</p>
                  </div>
                  <div className="text-[#007BFF] font-bold">{activity.score}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}