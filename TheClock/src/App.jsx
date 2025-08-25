import "./App.css";
import { cn } from "./utils/cn";
import Title from "./components/Title";
import SecondButton from "./components/SecondButton";
import Clock from "./components/Clock";
import ThemeButton from "./components/ThemeButton";
import MainBg from "./assets/main-bg.jpg";

function App() {
  return (
    <div
      className={cn(
        // Layout
        "h-screen flex justify-center items-center p-4",
        // Background
        "bg-cover bg-center bg-no-repeat bg-fixed",
        // Scroll prevention
        "overflow-hidden"
      )}
      style={{ backgroundImage: `url(${MainBg})` }}
    >
      {/* Main Clock Card */}
      <div
        className={cn(
          // Border & Shape
          "border-2 border-white/30 rounded-xl",
          // Spacing
          "px-2 md:px-32 py-8",
          // Background & Effects
          "bg-black/20 backdrop-blur-md shadow-2xl",
          // Size
          "max-w-4xl w-full"
        )}
      >
        <div
          className={cn("flex flex-col justify-center items-center", "gap-12")}
        >
          {/* Header Section */}
          <header
            className={cn(
              "flex justify-between items-center",
              "w-full px-2" // 양옆 패딩 추가
            )}
          >
            <Title />
            <ThemeButton />
          </header>

          {/* Clock Section */}
          <Clock />

          {/* Controls Section */}
          <div className={cn("w-full max-w-sm", "px-2")}>
            <SecondButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
