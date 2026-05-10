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
      name: 'GITHUB',
      emoji: '⌨️',
      url: 'https://github.com/muliaandiki',
      bg: 'bg-neo-yellow',
      desc: 'SOURCE_CODE_REPOS',
    },
    {
      name: 'LINKEDIN',
      emoji: '👔',
      url: 'https://linkedin.com/in/muliaandiki',
      bg: 'bg-neo-blue',
      textColor: 'text-neo-white',
      desc: 'PROFESSIONAL_NETWORK',
    },
    {
      name: 'EMAIL',
      emoji: '📧',
      url: 'mailto:muliaandiki@proton.me',
      bg: 'bg-neo-pink',
      desc: 'DIRECT_TRANSMISSION',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-neo-green p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 border-b-8 border-neo-black pb-8">
          <h1 className="text-6xl md:text-9xl font-black text-neo-black mb-4 uppercase leading-none italic">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-3xl">
            {desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <NeoCard shadow="lg" className="p-10 md:p-16 bg-neo-white border-neo-black">
              <h2 className="text-4xl font-black text-neo-black mb-10 uppercase border-b-4 border-neo-black pb-2 inline-block leading-none">
                ENCRYPTED_MESSAGE
              </h2>

              <div className="space-y-10">
                {/* Name */}
                <div className="group">
                  <label className="text-xs font-black text-neo-black block mb-2 uppercase tracking-widest">SENDER_NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ENTER_NAME_IDENTIFIER"
                    className="w-full px-6 py-5 border-[6px] border-neo-black font-black text-xl focus:outline-none focus:bg-neo-yellow transition-colors placeholder:text-neo-black/20 uppercase"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="text-xs font-black text-neo-black block mb-2 uppercase tracking-widest">SENDER_EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL@ENDPOINT.COM"
                    className="w-full px-6 py-5 border-[6px] border-neo-black font-black text-xl focus:outline-none focus:bg-neo-cyan transition-colors placeholder:text-neo-black/20 uppercase"
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label className="text-xs font-black text-neo-black block mb-2 uppercase tracking-widest">TRANSMISSION_CONTENT</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="DESCRIBE_COLLABORATION_DETAILS..."
                    rows={6}
                    className="w-full px-6 py-5 border-[6px] border-neo-black font-black text-xl focus:outline-none focus:bg-neo-pink transition-colors placeholder:text-neo-black/20 resize-none uppercase"
                  ></textarea>
                </div>

                <NeoButton
                  variant="primary"
                  size="lg"
                  onClick={handleSubmit}
                  className="w-full bg-neo-black text-neo-white py-8 text-3xl font-black uppercase italic hover:bg-neo-yellow hover:text-neo-black border-4"
                >
                  SEND TRANSMISSION
                </NeoButton>
              </div>
            </NeoCard>
          </div>

          {/* Sticky Notes */}
          <div className="space-y-8 lg:sticky lg:top-28">
            <h2 className="text-4xl font-black text-neo-black uppercase italic">DIRECT_LINKS</h2>

            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <NeoCard
                  shadow="lg"
                  className={`${link.bg} ${link.textColor || 'text-neo-black'} p-8 text-center hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer transform group-hover:-rotate-3`}
                >
                  <p className="text-6xl mb-4 group-hover:scale-125 transition-transform">{link.emoji}</p>
                  <h3 className="text-3xl font-black mb-2 uppercase">{link.name}</h3>
                  <p className="text-xs font-black opacity-60 uppercase tracking-widest">{link.desc}</p>
                </NeoCard>
              </a>
            ))}

            <NeoCard shadow="md" className="p-8 bg-neo-white text-center">
              <p className="text-xs font-black text-neo-black/40 uppercase tracking-widest mb-2">AVAILABILITY</p>
              <p className="text-2xl font-black text-neo-black leading-none">MON-FRI: 09:00 - 17:00 WIB</p>
            </NeoCard>
          </div>
        </div>
      </div>
    </section>
  );

};

export default ContactHeroSection;
