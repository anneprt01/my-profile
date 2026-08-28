import { useEffect, useState } from 'react'
import { TIPS } from '../data/tips.js'

const ROTATE_MS = 5000

export default function TipBanner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TIPS.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <p className="tip-banner">
      <span className="tip-banner__label">Astuce de turf</span>
      <span className="tip-banner__text">{TIPS[index]}</span>
    </p>
  )
}
