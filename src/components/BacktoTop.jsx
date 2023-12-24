// components/BackToTopButton.js
import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Sayfanın yukarı kaydırılma miktarını kontrol et
    const scrollY = window.scrollY;

    // Belirli bir scroll miktarından sonra butonu görünür yap
    if (scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Sayfa scroll olayını dinle
    window.addEventListener('scroll', handleScroll);

    // Temizlik işlemleri
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-4 rounded-full right-4  from-slate-400 to-slate-700 bg-gradient-to-r bg-clip-text text-transparent hover:brightness-200"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
