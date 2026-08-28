import Mascot from "./Mascot";
import "./ReactionBubble.css";

/**
 * Encart de réaction flottant (horse_head.png + bulle de dialogue), utilisé
 * comme accent arcade dans la marge gauche du corps principal.
 */
export default function ReactionBubble({ text, className = "" }) {
  return (
    <div className={`reaction-bubble ${className}`}>
      <div className="reaction-bubble__head">
        <Mascot variant="horse-head" alt="" compact />
      </div>
      <p className="reaction-bubble__text">{text}</p>
    </div>
  );
}
