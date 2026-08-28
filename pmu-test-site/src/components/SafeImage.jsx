import { useState } from 'react'

// <img> qui bascule sur un placeholder si le fichier n'existe pas encore.
// Utile tant que les vrais assets (horse_final.png, anne_rain_final.png,
// photos de fiches...) n'ont pas été déposés dans public/assets/.
export default function SafeImage({ src, alt, fallback, className = '', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <span className={`safe-image-fallback ${className}`} role="img" aria-label={alt}>
        {fallback}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
