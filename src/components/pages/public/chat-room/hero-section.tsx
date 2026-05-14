'use client';

import React, { useState } from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';
import { SectionProps } from '@/types';

interface Message {
  id: number;
  author: string;
  message: string;
  timestamp: string;
  color: string;
}

const ChatRoomHeroSection: React.FC<SectionProps> = ({ title = 'Global Chat Room', desc = '' }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      author: 'ADMIN MULIA',
      message: 'WELCOME TO THE VOID. CORE SYSTEMS ARE STABLE.',
      timestamp: '00:01',
      color: 'bg-neo-green',
    },
    {
      id: 2,
      author: 'GUEST X',
      message: 'THE INTERFACE IS AGGRESSIVE. I LOVE IT.',
      timestamp: '09:45',
      color: 'bg-neo-yellow',
    },
    {
      id: 3,
      author: 'VOXEL BOY',
      message: 'DEPLOYING NEUBRUTALISM TO ALL SECTORS...',
      timestamp: '14:22',
      color: 'bg-neo-pink',
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        author: 'ANONYMOUS_USER',
        message: inputValue.toUpperCase(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        color: 'bg-neo-cyan',
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16 font-mono">
      <div className="max-w-full mx-auto h-[80vh] flex flex-col">
        <div className="mb-8 flex justify-between items-end border-b-4 border-neo-orange pb-4">
          <div>
            <h1 className="text-4xl md:text-7xl font-black text-neo-orange mb-2 uppercase leading-none tracking-tighter">
              {title}
            </h1>
            <p className="text-sm font-bold text-neo-orange opacity-80 uppercase tracking-widest animate-pulse">
              {desc}
            </p>
          </div>
          <div className="hidden md:block text-neo-orange text-right">
            <p className="text-xs font-black">LOCAL TIME: {new Date().toLocaleTimeString()}</p>
            <p className="text-xs font-black">NODE ID: 0x882A</p>
          </div>
        </div>

        <NeoCard
          shadow="lg"
          className="flex-1 flex flex-col bg-neo-white border-8 border-neo-black overflow-hidden"
        >
          <div className="bg-neo-black p-2 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-neo-pink"></div>
              <div className="w-3 h-3 rounded-full bg-neo-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-neo-green"></div>
            </div>
            <p className="text-[10px] font-black text-neo-white uppercase tracking-[0.3em]">
              SECURE CONNECTION ESTABLISHED
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#f0f0f0] custom-scrollbar">
            {messages.map((msg) => (
              <div key={msg.id} className="flex flex-col gap-1 items-start group">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-black uppercase text-neo-black ${msg.color}`}
                  >
                    {msg.author}
                  </span>
                  <span className="text-[10px] font-bold text-neo-black/40 italic">
                    {msg.timestamp}
                  </span>
                </div>
                <div className="bg-neo-white neo-border-sm p-3 neo-shadow-sm group-hover:shadow-neo transition-all max-w-[80%]">
                  <p className="text-sm md:text-base font-black text-neo-black uppercase leading-tight">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
            <div className="h-1 animate-pulse bg-neo-black w-4"></div>
          </div>

          <div className="p-6 border-t-8 border-neo-black bg-neo-white">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-neo-black text-xl">
                  {'>'}
                </span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="INPUT_TRANSMISSION..."
                  className="w-full pl-10 pr-4 py-4 border-4 border-neo-black font-black text-lg focus:outline-none focus:bg-neo-yellow transition-colors uppercase placeholder:text-neo-black/30"
                />
              </div>
              <NeoButton
                variant="primary"
                size="lg"
                onClick={handleSend}
                className="bg-neo-green text-neo-black hover:bg-neo-yellow border-4 px-12 italic"
              >
                EXECUTE
              </NeoButton>
            </div>
          </div>
        </NeoCard>

        <div className="mt-4 flex flex-wrap gap-4 justify-between items-center text-[10px] font-black text-neo-orange uppercase tracking-widest">
          <div className="flex gap-4">
            <p>ACTIVE_NODES: 128</p>
            <p>PACKETS_SENT: 4,092</p>
          </div>
          <p className="animate-pulse">ENCRYPTION: AES-256-BIT</p>
        </div>
      </div>
    </section>
  );
};

export default ChatRoomHeroSection;
