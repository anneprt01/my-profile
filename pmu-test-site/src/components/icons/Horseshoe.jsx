// Icône fer à cheval dessinée à la main en SVG : sert à la fois pour la
// notation (à la place d'étoiles) et pour les marqueurs sur la carte.
export default function Horseshoe({ filled = false, size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`horseshoe-icon ${filled ? 'is-filled' : 'is-empty'} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M7 3
           C4.5 3 3 5.2 3 8.2
           C3 12 5 14.5 5 18
           C5 19.7 6 21 7.4 21
           C8.7 21 9.5 20 9.5 18.4
           C9.5 15.6 8.2 13.6 8.2 10.6
           C8.2 8.3 9 6.8 12 6.8
           C15 6.8 15.8 8.3 15.8 10.6
           C15.8 13.6 14.5 15.6 14.5 18.4
           C14.5 20 15.3 21 16.6 21
           C18 21 19 19.7 19 18
           C19 14.5 21 12 21 8.2
           C21 5.2 19.5 3 17 3
           C14.7 3 13.3 4.4 12 4.4
           C10.7 4.4 9.3 3 7 3 Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="6.4" cy="9.4" r="0.9" fill={filled ? '#1a1a1a' : 'currentColor'} />
      <circle cx="17.6" cy="9.4" r="0.9" fill={filled ? '#1a1a1a' : 'currentColor'} />
    </svg>
  )
}
