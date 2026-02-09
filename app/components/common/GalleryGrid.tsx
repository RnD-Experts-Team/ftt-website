'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';
import { shuffleArray } from '@/lib/utils/shuffle';

interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  shuffle?: boolean;
}

const gridSpans = [
  "row-span-2",
  "",
  "row-span-2",
  "",
  "",
  "md:col-span-2",
  "",
];

export default function GalleryGrid({ items, shuffle = false }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  const displayItems = useMemo(() => {
    return shuffle ? shuffleArray(items) : items;
  }, [items, shuffle]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const getCardAnimation = (index: number) => {
    const column = index % 3;
    
    return {
      hidden: {
        opacity: 0,
        x: column === 0 ? -80 : column === 1 ? 0 : 80,
        y: column === 1 ? 80 : 0,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
      },
    };
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
        {displayItems.map((item, index) => (
          <motion.div
            key={index}
            className={`group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-primary transition-all duration-300 cursor-pointer ${
              gridSpans[index] ?? ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={getCardAnimation(index)}
            onClick={() => setSelectedImage(item)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url('${item.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Semi-transparent dark background */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </motion.button>

            {/* Image container */}
            <motion.div
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <div className="relative w-full h-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl">
                {/* Main image */}
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />

                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Caption text at bottom-center */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg">
                    {selectedImage.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
