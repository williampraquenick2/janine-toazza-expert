import React from 'react';

export interface ExpertInfo {
  name: string;
  profession: string;
  address: string;
  whatsappLink: string;
  instagramLink: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  category?: 'hero' | 'result' | 'authority';
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}