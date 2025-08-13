import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, Check, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const syllabusData = {
  'general-knowledge': {
    title: 'General Knowledge',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000',
    sections: [
      {
        title: 'Ancient History',
        topics: [
          'Prehistoric Period in India',
          'Indus Valley Civilization',
          'Vedic Period',
          'Rise of Buddhism and Jainism'
        ]
      },
      {
        title: 'Geography',
        topics: [
          'Physical Geography of India',
          'Climate and Weather Patterns',
          'Natural Resources',
          'Environmental Conservation'
        ]
      },
      {
        title: 'Indian Politics',
        topics: [
          'Indian Constitution',
          'Parliamentary System',
          'State and Central Government',
          'Electoral Process'
        ]
      }
    ]
  }
};

const ancientHistoryContent = {
  title: 'Ancient History of India',
  periods: [
    {
      title: 'Prehistoric Period',
      timespan: 'Up to 2500 BCE',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80&w=1000',
      sections: [
        {
          subtitle: 'Paleolithic Age (Old Stone Age)',
          date: '2.5 million years – 10,000 BCE',
          points: [
            'Early humans were hunter-gatherers and lived in caves',
            'Used stone tools made of flint, bone, and wood',
            'Discovery of fire (approx. 500,000 BCE)',
            'Famous sites: Bhimbetka rock shelters (MP), Bori (Maharashtra)'
          ]
        },
        {
          subtitle: 'Mesolithic Age (Middle Stone Age)',
          date: '10,000 BCE – 8,000 BCE',
          points: [
            'Transition to early domestication and farming',
            'Bow and arrows were used for hunting',
            'Famous sites: Adamgarh (MP), Bagor (Rajasthan)'
          ]
        },
        {
          subtitle: 'Neolithic Age (New Stone Age)',
          date: '8,000 BCE – 3,000 BCE',
          points: [
            'Started agriculture and permanent settlements',
            'Domestication of animals',
            'Pottery making and weaving began',
            'Famous sites: Mehrgarh (Pakistan), Burzahom (J&K)'
          ]
        }
      ]
    },
    {
      title: 'Indus Valley Civilization',
      timespan: '2500 BCE – 1500 BCE',
      videoUrl: 'https://www.youtube.com/embed/n7ndRwqJYDM',
      thumbnail: 'https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80&w=1000',
      sections: [
        {
          subtitle: 'Key Cities',
          points: [
            'Harappa (Punjab, Pakistan) – Granary, Citadel, Great Bath',
            'Mohenjo-Daro (Sindh, Pakistan) – Well-planned streets',
            'Dholavira (Gujarat, India) – Water conservation',
            'Lothal (Gujarat, India) – First dockyard'
          ]
        },
        {
          subtitle: 'Culture and Achievements',
          points: [
            'Town Planning: Well-laid streets, drainage system',
            'Economy: Agriculture, trade with Mesopotamia',
            'Script: Undeciphered pictographic script',
            'Religion: Mother Goddess, Pashupati, animals'
          ]
        }
      ]
    }
  ]
};

const VideoPlayer = ({ videoUrl, thumbnail }: { videoUrl: string; thumbnail: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group">
      <div className="aspect-video bg-black">
        <iframe
          src={`${videoUrl}?autoplay=${isPlaying ? 1 : 0}&mute=${isMuted ? 1 : 0}&controls=0`}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center
              hover:bg-white transition-colors"
          >
            {isPlaying ? (
              <Pause className="text-black" size={20} />
            ) : (
              <Play className="text-black" size={20} />
            )}
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center
              hover:bg-white transition-colors"
          >
            {isMuted ? (
              <VolumeX className="text-black" size={20} />
            ) : (
              <Volume2 className="text-black" size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const HistoryTimeline = ({ period }: { period: typeof ancientHistoryContent.periods[0] }) => (
  <div className="space-y-6">
    <div className="border-l-4 border-[#007BFF] pl-6 space-y-8">
      {period.sections.map((section, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-[#007BFF]" />
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-[#007BFF] mb-2">{section.subtitle}</h3>
            {section.date && (
              <p className="text-[#212121]/70 mb-4">{section.date}</p>
            )}
            <ul className="space-y-2">
              {section.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#007BFF]/10 flex-shrink-0 
                    flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-[#007BFF]" />
                  </div>
                  <span className="text-[#212121]/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function SubjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showVideo, setShowVideo] = useState(false);
  const subject = syllabusData[id as keyof typeof syllabusData];

  if (!subject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] to-white flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h1 className="text-2xl font-bold text-[#007BFF] mb-4">Subject Not Found</h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2 text-[#007BFF] hover:text-[#007BFF]/80 transition-colors mx-auto"
          >
            <ArrowLeft size={24} />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>
    );
  }

  const isHistorySubject = id === 'general-knowledge';
  const currentContent = isHistorySubject ? ancientHistoryContent : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] to-white">
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
          {/* Subject Header with Image */}
          <div className="relative h-64 rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src={subject.image}
              alt={subject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-bold text-white mb-2">{subject.title} Syllabus</h1>
              <div className="flex items-center space-x-4 text-white/90">
                <div className="flex items-center">
                  <BookOpen size={20} className="mr-2" />
                  <span>{subject.sections.length} Sections</span>
                </div>
                <div className="flex items-center">
                  <Brain size={20} className="mr-2" />
                  <span>Interactive Learning</span>
                </div>
              </div>
            </div>
          </div>

          {showVideo && isHistorySubject && currentContent && (
            <div className="mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-[#007BFF] mb-6">{currentContent.title}</h2>
                {currentContent.periods.map((period, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold text-[#212121] mb-4">
                      {period.title} ({period.timespan})
                    </h3>
                    <VideoPlayer videoUrl={period.videoUrl} thumbnail={period.thumbnail} />
                    <div className="mt-6">
                      <HistoryTimeline period={period} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!showVideo && (
            <>
              {/* Syllabus Sections */}
              <div className="space-y-6">
                {subject.sections.map((section, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden 
                    transform hover:scale-[1.02] transition-all duration-300">
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-[#007BFF] mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-full bg-[#007BFF]/10 flex items-center justify-center mr-3 text-[#007BFF]">
                          {index + 1}
                        </span>
                        {section.title}
                      </h2>
                      <div className="space-y-3">
                        {section.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} 
                            className="flex items-start space-x-3 p-3 rounded-lg
                            hover:bg-gradient-to-r hover:from-[#007BFF]/5 hover:to-[#00BCD4]/5 
                            transition-all duration-300 group cursor-pointer">
                            <div className="w-6 h-6 rounded-full bg-[#007BFF]/10 flex-shrink-0 
                              flex items-center justify-center group-hover:bg-[#007BFF] transition-colors">
                              <Check size={14} className="text-[#007BFF] group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-[#212121]/80 flex-1">{topic}</p>
                            <ChevronRight size={20} className="text-[#007BFF]/30 group-hover:text-[#007BFF] 
                              transform group-hover:translate-x-1 transition-all" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Start Learning Button */}
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setShowVideo(true)}
                  className="relative group px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#00BCD4] text-white 
                    rounded-full font-semibold text-lg shadow-lg transform hover:translate-y-[-2px] 
                    transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Start Learning</span>
                    <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}