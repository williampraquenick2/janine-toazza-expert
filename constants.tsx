import React from 'react';
import { ExpertInfo, ImageAsset } from './types';
import { CheckCircle, Award, Clock, Heart, ShieldCheck, UserCheck } from 'lucide-react';

export const EXPERT: ExpertInfo = {
  name: "Dra. Janine Toazza",
  profession: "Cirurgiã-Dentista | Harmonização Orofacial e Clínica Geral",
  address: "Av. Cristóvão Colombo, 1081 - Moinhos de Vento, Porto Alegre - RS",
  whatsappLink: "https://api.whatsapp.com/message/Y2F7ALRNFX42D1?autoload=1&app_absent=0&utm_source=ig",
  instagramLink: "https://www.instagram.com/drajaninetoazza/",
};

export const HERO_IMAGE: ImageAsset = {
  src: "https://i.imgur.com/gs8pMZV.png",
  alt: "Dra. Janine Toazza Sorrindo",
  category: "hero"
};

export const AUTHORITY_IMAGE: ImageAsset = {
  src: "https://i.imgur.com/NPPpo4Q.png",
  alt: "Dra. Janine Toazza Atendendo",
  category: "authority"
};

export const RESULTS_GALLERY: ImageAsset[] = [
  { src: "https://i.imgur.com/jYXPsO5.png", alt: "Resultado de Tratamento 1" },
  { src: "https://i.imgur.com/aw8LqHX.png", alt: "Resultado de Tratamento 2" },
  { src: "https://i.imgur.com/C4b0Q5l.png", alt: "Resultado de Tratamento 3" },
  { src: "https://i.imgur.com/5CxwVYK.png", alt: "Resultado de Tratamento 4" },
  { src: "https://i.imgur.com/xpn0v4X.png", alt: "Resultado de Tratamento 5" },
  { src: "https://i.imgur.com/y7D0gbR.png", alt: "Resultado de Tratamento 6" },
  { src: "https://i.imgur.com/tNUP0zh.png", alt: "Resultado de Tratamento 7" },
];

export const DIFFERENTIALS = [
  {
    id: 1,
    title: "Atendimento Personalizado",
    description: "Você não é apenas um número. Eu cuido de cada detalhe do seu caso pessoalmente.",
    icon: <UserCheck className="w-6 h-6 text-primary" />
  },
  {
    id: 2,
    title: "Avaliação Honesta",
    description: "Transparência total sobre o que você realmente precisa, sem excessos.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />
  },
  {
    id: 3,
    title: "Mão Leve e Cuidado",
    description: "Técnicas modernas para minimizar desconforto e garantir uma experiência tranquila.",
    icon: <Heart className="w-6 h-6 text-primary" />
  },
  {
    id: 4,
    title: "Ambiente Acolhedor",
    description: "Um espaço pensado para você se sentir bem, no coração do Moinhos de Vento.",
    icon: <Clock className="w-6 h-6 text-primary" />
  }
];

export const STEPS = [
  {
    step: "01",
    title: "Toque no Botão",
    description: "Clique no botão do WhatsApp para iniciar a conversa."
  },
  {
    step: "02",
    title: "Agendamento Rápido",
    description: "Minha equipe vai encontrar o melhor horário para você."
  },
  {
    step: "03",
    title: "Avaliação Gratuita",
    description: "Venha ao consultório, tomamos um café e planejamos seu sorriso."
  }
];