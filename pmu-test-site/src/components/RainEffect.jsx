import { useMemo } from 'react'
import { RAIN_PORTRAITS } from '../data/rainPortraits.js'
import SafeImage from './SafeImage.jsx'

const DROP_COUNT = 24

// Pluie de portraits pixel art des fondateurs, déclenchée ~1.5s au clic sur
// un PMU testé. Pioche aléatoirement dans RAIN_PORTRAITS : ajouter un
// portrait dans data/rainPortraits.js suffit à le voir apparaître ici.
export default function RainEffect({ active }) {
  const drops = useMemo(() => {
    if (!active) return []
    return Array.from({ length: DROP_COUNT }, (_, i) => {
      const portrait = RAIN_PORTRAITS[Math.floor(Math.random() * RAIN_PORTRAITS.length)]
      return {
        key: `${i}-${Math.random()}`,
        portrait,
        left: Math.random() * 100,
        delay: Math.random() * 0.4,
        duration: 1.1 + Math.random() * 0.6,
        rotation: Math.random() * 70 - 35,
        size: 56 + Math.random() * 40,
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  if (!active) return null

  return (
    <div className="rain-effect" aria-hidden="true">
      {drops.map((drop) => (
        <SafeImage
          key={drop.key}
          src={drop.portrait?.src}
          alt=""
          fallback="🏇"
          className="rain-effect__drop"
          style={{
            left: `${drop.left}%`,
            width: drop.size,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            '--rotation': `${drop.rotation}deg`,
          }}
        />
      ))}
    </div>
  )
}
