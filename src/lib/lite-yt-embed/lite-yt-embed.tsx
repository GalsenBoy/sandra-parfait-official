/** Custom component version of lite-youtube_embed 
 * from https://github.com/paulirish/lite-youtube-embed
 * */
import React, { useState, useEffect, useRef } from 'react';

interface LiteYTEmbedProps {
  videoId: string;
  playLabel?: string;
  title?: string;
  params?: Record<string, string>;
  jsApi?: boolean;
}

const LiteYTEmbed: React.FC<LiteYTEmbedProps> = ({
  videoId,
  playLabel = 'Play',
  title = '',
  params = {},
  jsApi = false,
}) => {
  const [activated, setActivated] = useState(false);
  const [needsYTApi, setNeedsYTApi] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const createIframeSrc = () => {
    const paramString = new URLSearchParams({
      autoplay: '1',
      playsinline: '1',
      ...params,
    }).toString();
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?${paramString}`;
  };

  const activate = () => {
    if (!activated) {
      setActivated(true);
      if (jsApi || /Apple|Mobi/.test(navigator.vendor + navigator.userAgent)) {
        setNeedsYTApi(true);
      }
    }
  };

  useEffect(() => {
    if (needsYTApi) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [needsYTApi]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activate();
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`lite-youtube relative block cursor-pointer max-w-[840px] w-full bg-cover aspect-video rounded-lg before:content-[attr(data-title)] before:block before:absolute before:top-0 before:h-[99px] before:w-full before:bg-gradient-to-b before:from-[rgba(0,0,0,0.67)] before:via-[rgba(0,0,0,0.15)] before:to-transparent before:p-[25px] before:text-white before:text-[18px] before:whitespace-nowrap before:text-ellipsis before:overflow-hidden`}
      style={{ backgroundImage: `url(https://i.ytimg.com/vi_webp/${videoId}/sddefault.webp)` }}
      onClick={activate}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={playLabel}
      data-title={title}
    >
      {!activated && (
        <>
          <button className="lty-playbtn">
            <span className="sr-only">{playLabel}</span>
          </button>
          <noscript>
            <iframe
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              title={title} frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              src={createIframeSrc()}
            />
          </noscript>
        </>
      )}
      {activated && (
        <iframe
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        title={title} frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        src={createIframeSrc()}
        />
      )}
    </div>
  );
};

export default LiteYTEmbed;


