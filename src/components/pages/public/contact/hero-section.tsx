'use client';

import React, { useState } from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

interface Props {
  title?: string;
  desc?: string;
}

const ContactHeroSection: React.FC<Props> = ({ title = 'Get In Touch', desc = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      emoji: '🐙',
      url: 'https://github.com',
      bg: 'bg-yellow-300',
      desc: 'Check out my code',
    },
    {
      name: 'LinkedIn',
      emoji: '💼',
      url: 'https://linkedin.com',
      bg: 'bg-cyan-300',
      desc: 'Connect with me',
    },
    {
      name: 'Email',
      emoji: '✉️',
      url: 'mailto:hello@muliaandiki.com',
      bg: 'bg-pink-400',
      desc: 'Send me a message',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-lime-400 p-4 md:p-8 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-black mb-4">{title}</h1>
          <p className="text-xl font-bold text-black">{desc || 'Let\'s collaborate on something amazing'}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <NeoCard shadow="xl" className="p-8 md:p-12 bg-white">
              <h2 className="text-3xl font-black text-black mb-8">SEND ME A MESSAGE</h2>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="text-sm font-black text-black block mb-2">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300 bg-gray-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-black text-black block mb-2">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300 bg-gray-50"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="text-sm font-black text-black block mb-2">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300 bg-gray-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-black text-black block mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me everything..."
                    rows={6}
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-300 bg-gray-50 resize-none"
                  ></textarea>
                </div>

                <NeoButton
                  variant="destructive"
                  size="lg"
                  onClick={handleSubmit}
                  className="w-full"
                >
                  SEND MESSAGE
                </NeoButton>
              </div>
            </NeoCard>
          </div>

          {/* Social Links - Sticky Note Style */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-black">ALSO FIND ME ON</h2>

            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeoCard
                  shadow="lg"
                  className={`${link.bg} p-6 text-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer transform hover:-rotate-1`}
                >
                  <p className="text-5xl mb-3">{link.emoji}</p>
                  <h3 className="text-2xl font-black text-black mb-2">{link.name}</h3>
                  <p className="text-sm font-bold text-black">{link.desc}</p>
                </NeoCard>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Info */}
        <NeoCard shadow="lg" className="p-8 bg-white">
          <h2 className="text-3xl font-black text-black mb-6">QUICK INFO</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-r-4 border-black pr-6">
              <p className="text-sm font-bold text-gray-600 mb-2">EMAIL</p>
              <p className="text-lg font-black text-black">hello@muliaandiki.com</p>
            </div>
            <div className="border-r-4 border-black pr-6">
              <p className="text-sm font-bold text-gray-600 mb-2">PHONE</p>
              <p className="text-lg font-black text-black">+62 821 1234 5678</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-600 mb-2">TIMEZONE</p>
              <p className="text-lg font-black text-black">WIB (UTC+7)</p>
            </div>
          </div>
        </NeoCard>

        {/* Response Time */}
        <div className="mt-8 text-center">
          <NeoCard shadow="md" className="inline-block px-8 py-4 bg-yellow-300">
            <p className="text-base font-black text-black">⚡ USUALLY REPLIES WITHIN 24 HOURS ⚡</p>
          </NeoCard>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
