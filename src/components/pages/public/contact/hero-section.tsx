'use client';

import React, { useState } from 'react';

import { NeoButton } from '@/components/atoms/NeoButton';
import { NeoCard } from '@/components/atoms/NeoCard';

import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/constant/portfolio';
import { SectionProps, SosialLinks } from '@/types';

const ContactHeroSection: React.FC<SectionProps> = ({ title = 'Get In Touch', desc = '' }) => {
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

  const socialLinks: SosialLinks[] = [
    {
      name: 'GITHUB',
      image: '/images/svg/github.svg',
      url: profile.github,
      desc: 'SOURCE CODE',
    },
    {
      name: 'LINKEDIN',
      image: '/images/svg/linkedin.svg',
      url: profile.linkedin,
      desc: 'PROFESSIONAL NETWORK',
    },
    {
      name: 'EMAIL',
      image: '/images/svg/gmail.svg',
      url: `mailto:${profile.email}`,
      desc: 'DIRECT TRANSMISSION',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-neo-white p-4 md:p-8 pt-24 pb-16">
      <div className="max-w-full mx-auto">
        <div className="mb-16 border-b-8 border-neo-black pb-8">
          <h1 className="text-6xl md:text-9xl font-black text-neo-black mb-4 uppercase leading-none italic">
            {title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neo-black max-w-3xl">{desc}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <NeoCard shadow="lg" className="p-10 md:p-16 bg-neo-white border-neo-black">
              <h2 className="text-4xl font-black text-neo-black mb-10 uppercase border-b-4 border-neo-black pb-2 inline-block leading-none">
                ENCRYPTED MESSAGE
              </h2>

              <div className="space-y-10">
                <div className="group">
                  <label className="text-xs font-black text-neo-black block mb-2 uppercase tracking-widest">
                    SENDER NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ENTER_NAME_IDENTIFIER"
                    className="w-full px-6 py-5 border-[6px] border-neo-black font-black text-xl focus:outline-none focus:bg-neo-yellow transition-colors placeholder:text-neo-black/20 uppercase"
                  />
                </div>

                <div className="group">
                  <label className="text-xs font-black text-neo-black block mb-2 uppercase tracking-widest">
                    SENDER_EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL@ENDPOINT.COM"
                    className="w-full px-6 py-5 border-[6px] border-neo-black font-black text-xl focus:outline-none focus:bg-neo-cyan transition-colors placeholder:text-neo-black/20 uppercase"
                  />
                </div>

                <div className="group">
                  <label className="text-xs font-black text-neo-black block mb-2 uppercase tracking-widest">
                    TRANSMISSION CONTENT
                  </label>
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

          <div className="space-y-8 lg:sticky lg:top-28">
            <h2 className="text-4xl text-center font-black text-neo-black uppercase italic">
              DIRECT LINKS
            </h2>

            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <NeoCard
                  shadow="lg"
                  className={` ${'text-neo-black'} p-8 flex items-center justify-center flex-col hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer transform group-hover:-rotate-3`}
                >
                  <Image alt="icons" src={link.image} width={60} height={60} />
                  <h3 className="text-3xl font-black mb-2 uppercase">{link.name}</h3>
                  <p className="text-xs font-black opacity-60 uppercase tracking-widest">
                    {link.desc}
                  </p>
                </NeoCard>
              </Link>
            ))}

            <NeoCard shadow="md" className="p-8 bg-neo-white text-center">
              <p className="text-xs font-black text-neo-black/40 uppercase tracking-widest mb-2">
                CONTACT
              </p>
              <p className="text-lg font-black text-neo-black leading-tight mb-2">{profile.phone}</p>
              <p className="text-sm font-bold text-neo-black/70">{profile.location}</p>
            </NeoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
