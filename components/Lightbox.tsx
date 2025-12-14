import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  useEffect(() => {
    if (src) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [src]);

  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
      >
        <X size={32} />
      </button>
      <img 
        src={src} 
        alt={alt} 
        className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
};