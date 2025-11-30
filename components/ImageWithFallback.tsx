import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [errorCount, setErrorCount] = useState(0);
  const [hasFinalError, setHasFinalError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setErrorCount(0);
    setHasFinalError(false);
  }, [src]);

  const handleError = () => {
    const originalPath = src.startsWith('/') ? src.slice(1) : src;
    // Basisname ohne Endung ermitteln (z.B. "image_1")
    const lastDotIndex = originalPath.lastIndexOf('.');
    const basePath = lastDotIndex > -1 ? originalPath.substring(0, lastDotIndex) : originalPath;
    const extension = lastDotIndex > -1 ? originalPath.substring(lastDotIndex + 1) : '';

    // Wir probieren nacheinander verschiedene Varianten, falls der genaue Name nicht stimmt
    if (errorCount === 0) {
      // Versuch 1: Ohne führenden Slash (oder mit, falls vorher ohne)
      if (src.startsWith('/')) {
        setCurrentSrc(src.slice(1));
      } else {
        setCurrentSrc('/' + src);
      }
      setErrorCount(1);
    } else if (errorCount === 1) {
      // Versuch 2: Großgeschriebene Endung (z.B. .JPG)
      setCurrentSrc(`${basePath}.${extension.toUpperCase()}`);
      setErrorCount(2);
    } else if (errorCount === 2) {
      // Versuch 3: Alternative Endung jpeg <-> jpg
      if (extension.toLowerCase() === 'jpg') {
        setCurrentSrc(`${basePath}.jpeg`);
      } else if (extension.toLowerCase() === 'jpeg') {
        setCurrentSrc(`${basePath}.jpg`);
      } else {
         // Keine offensichtliche Alternative mehr
         setHasFinalError(true);
         return;
      }
      setErrorCount(3);
    } else if (errorCount === 3) {
      // Letzter Versuch: Vielleicht ist es ein PNG?
      setCurrentSrc(`${basePath}.png`);
      setErrorCount(4);
    } else {
      setHasFinalError(true);
    }
  };

  if (hasFinalError) {
    return (
      <div className={`bg-stone-200 flex flex-col items-center justify-center text-stone-500 p-4 text-center min-h-[100px] ${className}`} role="img" aria-label={alt}>
        <ImageOff className="w-8 h-8 mb-2 opacity-50" />
        <span className="text-xs font-mono break-all text-stone-400">
          Bild fehlt:<br/>
          <span className="font-bold text-stone-600">{src}</span>
        </span>
        <span className="text-[10px] text-stone-400 mt-1 max-w-[150px] leading-tight">
          (Bitte prüfen: Liegt die Datei im Ordner "public"?)
        </span>
      </div>
    );
  }

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;