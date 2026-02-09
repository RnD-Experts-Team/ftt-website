'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  videoSrc?: string;
  posterSrc?: string;
  title?: string;
  className?: string;
  showControls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  aspectRatio?: 'video' | 'square' | '4/3';
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export default function VideoPlayer({
  videoSrc = '/Shawn.mp4',
  posterSrc,
  title = 'Video',
  className = '',
  showControls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  aspectRatio = 'video',
  onPlayStateChange,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    '4/3': 'aspect-[4/3]',
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handleLoadedData = () => setIsLoaded(true);
    const handleLoadedMetadata = () => setIsLoaded(true);
    const handleCanPlay = () => setIsLoaded(true);
    const handlePlay = () => {
      setIsPlaying(true);
      onPlayStateChange?.(true);
    };
    const handlePause = () => {
      setIsPlaying(false);
      onPlayStateChange?.(false);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Fallback: Remove loading after 2 seconds if events don't fire
    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      clearTimeout(fallbackTimer);
    };
  }, [onPlayStateChange]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`relative ${aspectClasses[aspectRatio]} w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl border border-slate-200 dark:border-slate-800 group ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster={posterSrc}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

      {/* Play Button Overlay (shows when paused) */}
      {!isPlaying && isLoaded && (
        <motion.button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center transition-transform group-hover:scale-110 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center rounded-full size-20 bg-primary/90 text-white shadow-xl backdrop-blur-sm hover:bg-primary transition-colors">
            <span className="material-symbols-outlined text-4xl">
              play_arrow
            </span>
          </div>
        </motion.button>
      )}

      {/* Click to Play/Pause (invisible overlay) */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 w-full h-full z-5 cursor-pointer"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      />

      {/* Controls */}
      {showControls && isLoaded && (
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex flex-col gap-3 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {/* Progress Bar */}
          <div
            className="h-1.5 flex-1 rounded-full bg-white/20 overflow-hidden cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-primary rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Bottom Controls */}
          <div className="flex justify-between items-center">
            <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded backdrop-blur-md">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <div className="flex gap-4">
              <button
                onClick={togglePlay}
                className="text-white hover:text-primary transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                <span className="material-symbols-outlined text-lg">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !videoRef.current.muted;
                  }
                }}
                className="text-white hover:text-primary transition-colors"
                aria-label="Toggle mute"
              >
                <span className="material-symbols-outlined text-lg">
                  {muted ? 'volume_off' : 'volume_up'}
                </span>
              </button>
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.requestFullscreen();
                  }
                }}
                className="text-white hover:text-primary transition-colors"
                aria-label="Fullscreen"
              >
                <span className="material-symbols-outlined text-lg">
                  fullscreen
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {!isLoaded && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm z-30">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span className="text-white text-sm font-medium">Loading video...</span>
          </div>
        </div>
      )}
    </div>
  );
}
