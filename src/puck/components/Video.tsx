import React from "react";

export interface VideoProps {
  url: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

export const Video: React.FC<VideoProps> = ({
  url = "https://www.w3schools.com/html/mov_bbb.mp4",
  autoplay = false,
  muted = true,
  loop = false,
  controls = true,
}) => {
  const isYoutube = url.includes("youtube.com") || url.includes("youtu.be");
  const isVimeo = url.includes("vimeo.com");

  if (isYoutube || isVimeo) {
    let embedUrl = url;
    if (isYoutube) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        embedUrl = `https://www.youtube.com/embed/${match[2]}`;
      }
    } else if (isVimeo) {
      const regExp = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
      const match = url.match(regExp);
      if (match) {
        embedUrl = `https://player.vimeo.com/video/${match[1]}`;
      }
    }

    return (
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <video
      src={url}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      controls={controls}
      className="w-full"
    />
  );
};
