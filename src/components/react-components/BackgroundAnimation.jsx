import { useEffect, useRef } from "react";

import { gsap } from "gsap";

const BackgroundAnimation = () => {
  const box = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ repeat: -1 });
    tl.current.to(box.current, {
      duration: 20,
      backgroundPosition: `-1850px center`,
      ease: gsap.parseEase().Linear.easeNone,
    });

    return () => {
      tl.current.kill();
    };
  });

  return (
    <div
      ref={box}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: "0.15",
        zIndex: 1,
        mixBlendMode: "color-burn",
        backgroundImage: `url('/assets/pattern.jpg')`,
        backgroundPosition: "0 center",
      }}
    />
  );
};

export default BackgroundAnimation;
