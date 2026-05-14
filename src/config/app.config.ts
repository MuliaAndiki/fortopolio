import React from 'react';

import ActivityIcon from '@/components/atoms/icons/ActivityIcon';
import ChatIcon from '@/components/atoms/icons/ChatIcon';
import DashboardIcon from '@/components/atoms/icons/DashboardIcon';
import FireIcon from '@/components/atoms/icons/FireIcon';
import InfoCircleIcon from '@/components/atoms/icons/InfoCircleIcon';
import NotebookIcon from '@/components/atoms/icons/NotebookIcon';
import TrophyIcon from '@/components/atoms/icons/TrophyIcon';
import UsersIcon from '@/components/atoms/icons/UsersIcon';
import { SidebarContentType } from '@/types/app/core-types';

interface AppConfig {
  name: string;
  description: string;
  logo: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    image: string;
  };
  social_media: {
    twitter: {
      url: string;
      icon: string;
    };
    instagram: {
      url: string;
      icon: string;
    };
    linkedin: {
      url: string;
      icon: string;
    };
    youtube: {
      url: string;
      icon: string;
    };
    tiktok: {
      url: string;
      icon: string;
    };
  };
}

export const appConfig: AppConfig = {
  name: 'App',
  description: 'App',
  logo: '/images/logo.png',
  metadata: {
    title: 'App',
    description: 'App',
    keywords: ['App'],
    author: 'App',
    image: 'App',
  },
  social_media: {
    twitter: {
      url: 'https://twitter.com/app',
      icon: 'hugeicons:new-twitter-rectangle',
    },
    instagram: {
      url: 'https://instagram.com/app',
      icon: 'basil:instagram-outline',
    },
    linkedin: {
      url: 'https://linkedin.com/app',
      icon: 'tabler:brand-linkedin',
    },
    youtube: {
      url: 'https://youtube.com/app',
      icon: 'mingcute:youtube-line',
    },
    tiktok: {
      url: 'https://tiktok.com/app',
      icon: 'hugeicons:tiktok',
    },
  },
};

interface NavigationMenuConfig {
  items: {
    title: string;
    href: string;
    icon?: React.ReactNode;
    description?: string;
    children?: NavigationMenuConfig['items'];
  }[];
}

export const navigationMenuConfig: NavigationMenuConfig = {
  items: [
    {
      title: 'Home',
      href: '/',
      description: 'Home',
    },
  ],
};

export const SidebarMenuConfig: SidebarContentType[] = [
  {
    title: 'Home',
    url: '/home',
    icon: ActivityIcon,
  },
  {
    title: 'About',
    icon: InfoCircleIcon,
    url: '/about',
  },
  {
    title: 'Achievements',
    icon: TrophyIcon,
    url: '/achievements',
  },
  {
    title: 'Projects',
    icon: NotebookIcon,
    url: '/projects',
  },
  {
    title: 'Dashboard',
    icon: DashboardIcon,
    url: '/dashboards',
  },
  {
    title: 'Chat Room',
    icon: ChatIcon,
    url: '/chat-room',
  },
  {
    title: 'Contact',
    icon: UsersIcon,
    url: '/contacts',
  },
  {
    title: 'Smart Talk',
    icon: FireIcon,
    url: '/smart-talks',
  },
];
