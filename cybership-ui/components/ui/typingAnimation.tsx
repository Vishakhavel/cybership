// components/TypingAnimation.tsx
import React from "react";

const TypingAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="inline-block border-r-2 border-black overflow-hidden whitespace-nowrap animate-typing animate-blink">
        This text is being typed out!
      </p>
    </div>
  );
};

export default TypingAnimation;
