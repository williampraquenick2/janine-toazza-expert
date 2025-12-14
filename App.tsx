import React, { useState } from 'react';
import { EXPERT, HERO_IMAGE, AUTHORITY_IMAGE, RESULTS_GALLERY, DIFFERENTIALS, STEPS } from './constants';
import { Button } from './components/Button';
import { Lightbox } from './components/Lightbox';
import { MapPin, Instagram, Check, Star, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-primary/20 selection:text-primaryDark">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-white pb-12 lg:pb-20">
        <div className="container mx-auto px-4 pt-8 lg:pt-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            
            {/* Hero Text */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold tracking-wide mb-4 uppercase">
                Porto Alegre - RS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                Eu sou {EXPERT.name}, <span className="text-primary">sua Dentista</span> no Moinhos de Vento.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Resgate sua autoestima com tratamentos de Harmonização Orofacial e Clínica Geral. Cuidado humano, técnico e focado no seu bem-estar.
              </p>
              
              <div className="flex flex-col items-center lg:items-start gap-3">
                <Button href={EXPERT.whatsappLink} fullWidth className="md:w-auto">
                  Agendar primeira consulta gratuita
                </Button>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Resposta rápida • Sem compromisso
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
               <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                 <img 
                   src={HERO_IMAGE.src} 
                   alt={HERO_IMAGE.alt} 
                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white lg:hidden">
                    <p className="font-serif font-bold text-xl">Dra. Janine Toazza</p>
                    <p className="text-sm opacity-90">Cirurgiã-Dentista</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU (Authority) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Image */}
            <div className="w-full md:w-5/12">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={AUTHORITY_IMAGE.src} 
                  alt={AUTHORITY_IMAGE.alt} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-7/12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-slate-900">
                Muito prazer, eu cuido do seu sorriso.
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Minha missão é proporcionar saúde e beleza de forma integrada. Acredito que um sorriso saudável é a porta de entrada para uma vida mais feliz e confiante. 
                <br /><br />
                No meu consultório, você não encontrará um ambiente frio e impessoal. Aqui, cada paciente é tratado como família, com uma escuta ativa e soluções que respeitam sua individualidade.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Atendimento Adulto e Infantil",
                  "Especialista em Harmonização Orofacial",
                  "Clínica Geral Completa",
                  "Tecnologia e Conforto"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-800 font-medium">
                    <div className="bg-emerald-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-emerald-700" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS (Gallery) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Resultados Reais
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Confira algumas transformações realizadas no consultório.
              Toque nas imagens para ampliar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {RESULTS_GALLERY.map((img, index) => (
              <div 
                key={index} 
                className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 cursor-pointer shadow-sm hover:shadow-lg transition-all"
                onClick={() => openLightbox(img.src, img.alt)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 bg-white/90 p-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xs text-slate-400 mt-6 italic">
            *Resultados podem variar de pessoa para pessoa. As imagens são ilustrativas de casos clínicos reais.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR (Differentials) */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-900 mb-12">
            Por que agendar comigo?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIALS.map((diff) => (
              <div key={diff.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="mb-4 bg-emerald-50 w-12 h-12 flex items-center justify-center rounded-xl">
                  {diff.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{diff.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Ainda com dúvida se é o momento certo?
            </h2>
            <p className="text-emerald-50 text-lg mb-8">
              A avaliação inicial é gratuita justamente para que você possa tirar todas as suas dúvidas sem compromisso financeiro.
            </p>
            <Button 
              href={EXPERT.whatsappLink} 
              variant="secondary"
              className="w-full md:w-auto text-primary font-bold"
            >
              Quero tirar minhas dúvidas no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">
            Como funciona a Primeira Consulta
          </h2>
          
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10 transform -translate-y-1/2"></div>
            
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center bg-white p-4">
                <div className="w-12 h-12 bg-accent text-white font-bold text-lg rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
             <span className="inline-block bg-emerald-50 text-emerald-800 px-4 py-2 rounded-lg text-sm font-semibold">
               100% Gratuita e Sem Compromisso
             </span>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Star className="w-12 h-12 text-accent mx-auto mb-6 fill-current" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Vamos cuidar do seu sorriso?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Não adie mais o seu bem-estar. Estou te esperando no consultório para uma conversa tranquila sobre seus objetivos.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Button href={EXPERT.whatsappLink} className="text-xl px-8 py-5 shadow-emerald-500/20">
              Agendar Primeira Consulta Gratuita
            </Button>
            <p className="text-sm text-slate-400">
              Clique para falar diretamente com minha equipe
            </p>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-1">{EXPERT.name}</h3>
            <p className="text-sm mb-2 opacity-80">{EXPERT.profession}</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm mt-4">
              <MapPin size={16} />
              <span className="max-w-[250px]">{EXPERT.address}</span>
            </div>
          </div>

          <div className="flex gap-6">
             <a 
               href={EXPERT.instagramLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-white hover:text-accent transition-colors"
               aria-label="Instagram"
             >
               <Instagram size={28} />
             </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs opacity-50">
           &copy; {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados.
        </div>
      </footer>

      {/* Lightbox Component */}
      <Lightbox 
        src={lightboxImage?.src || null} 
        alt={lightboxImage?.alt || ''} 
        onClose={closeLightbox} 
      />
    </div>
  );
};

export default App;