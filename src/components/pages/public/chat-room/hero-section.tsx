'use client';

import React, { useState } from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

interface Props {
  title?: string;
  desc?: string;
}

interface Message {
  id: number;
  author: string;
  message: string;
  timestamp: string;
  color: string;
}

const ChatRoomHeroSection: React.FC<Props> = ({ title = 'Global Chat Room', desc = '' }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      author: 'Designer_Max',
      message: 'Just launched a new design system! Check it out on GitHub',
      timestamp: '2:34 PM',
      color: 'bg-yellow-300',
    },
    {
      id: 2,
      author: 'CodeArtisan',
      message: 'Neo-brutalism is the future of web design 🔥',
      timestamp: '2:45 PM',
      color: 'bg-cyan-300',
    },
    {
      id: 3,
      author: 'DevJourney',
      message: 'Anyone else building with Tailwind? Performance is insane!',
      timestamp: '3:12 PM',
      color: 'bg-lime-400',
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        author: 'You',
        message: inputValue,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        color: 'bg-pink-400',
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const colors = ['bg-yellow-300', 'bg-cyan-300', 'bg-lime-400', 'bg-pink-400', 'bg-orange-400'];

  return (
    <section className="w-full min-h-screen bg-blue-400 p-4 md:p-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black text-black mb-2">{title}</h1>
          <p className="text-lg font-bold text-black">{desc || 'Leave a message for visitors around the world'}</p>
        </div>

        {/* Chat Container */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Messages Area */}
          <NeoCard
            shadow="lg"
            className="flex-1 overflow-y-auto bg-white p-6 mb-6 space-y-4 min-h-0"
          >
            {messages.map((msg, idx) => (
              <NeoCard
                key={msg.id}
                shadow="none"
                className={`${colors[idx % colors.length]} p-4 border-2 border-black`}
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="font-black text-black text-lg">{msg.author}</p>
                  <p className="text-xs font-bold text-gray-700">{msg.timestamp}</p>
                </div>
                <p className="text-base font-semibold text-black">{msg.message}</p>
              </NeoCard>
            ))}
          </NeoCard>

          {/* Input Area */}
          <div className="space-y-4">
            <NeoCard shadow="lg" className="p-6 bg-white">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message here..."
                    className="flex-1 px-4 py-3 border-4 border-black font-bold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 bg-gray-50"
                  />
                  <NeoButton
                    variant="destructive"
                    size="lg"
                    onClick={handleSend}
                    className="px-8 py-3 text-lg"
                  >
                    SEND
                  </NeoButton>
                </div>
                <p className="text-xs font-bold text-gray-500">
                  Total messages: {messages.length} • Active users: 147
                </p>
              </div>
            </NeoCard>

            {/* Online Users */}
            <div>
              <p className="text-sm font-bold text-black mb-3">ONLINE NOW (12)</p>
              <div className="flex flex-wrap gap-2">
                {['Designer_Max', 'CodeArtisan', 'DevJourney', 'PixelPusher', 'WebWizard'].map(
                  (user, idx) => (
                    <NeoCard
                      key={idx}
                      shadow="none"
                      className="px-3 py-2 bg-white border-2 border-black text-sm font-bold text-black"
                    >
                      • {user}
                    </NeoCard>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatRoomHeroSection;
