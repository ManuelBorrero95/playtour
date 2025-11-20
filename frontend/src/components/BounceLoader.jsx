import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BounceLoader() {
  const ballRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    tlRef.current = gsap.to(ballRef.current, {
      y: 200,
      duration: 1,
      ease: "bounce.out",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div
          ref={ballRef}
          className="w-10 h-10 rounded-full bg-[#C2C719]"
        />
        <p className="text-sm text-gray-500 tracking-wide">
          loading
        </p>
      </div>
    </div>
  );
}
