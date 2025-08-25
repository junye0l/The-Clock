import { cn } from "../utils/cn";

const SecondButton = ({ onClick, showSeconds = false }) => {
  return (
    <button
      className={cn(
        // Layout
        "border-2 border-gray-600 text-white rounded-lg w-full py-3",
        // hover
        "hover:border-white hover:bg-white/10 transition-all duration-200",
        // focus
        "focus:outline-none focus:ring-white/50",
        // active
        "active:scale-[0.98]"
      )}
      type="button"
      onClick={onClick}
    >
      {showSeconds ? "초 숨기기" : "초 보이기"}
    </button>
  );
};

export default SecondButton;
