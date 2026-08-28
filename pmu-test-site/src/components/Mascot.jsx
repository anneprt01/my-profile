import SafeImage from './SafeImage.jsx'

// Le cheval-jockey pixel art, mascotte unique du site. Tant que
// horse_final.png n'est pas déposé dans public/assets/mascot/, on retombe
// sur un émoji pour ne pas casser la mise en page.
export default function Mascot({ pose = 'default', size = 120, className = '' }) {
  return (
    <SafeImage
      src="/assets/mascot/horse_final.png"
      alt="Mascotte cheval-jockey du site, en plein saut avec un ticket à la main"
      fallback="🐎"
      className={`mascot mascot--${pose} ${className}`}
      style={{ width: size, height: 'auto' }}
    />
  )
}
