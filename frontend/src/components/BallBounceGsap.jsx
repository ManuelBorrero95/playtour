import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BallBounceGsap() {
  const ballRef = useRef(null);

  useEffect(() => {
    gsap.to(ballRef.current, {
      y: 200,            // quanto scende
      duration: 1,       // velocità
      ease: "bounce.out",// effetto rimbalzo
      repeat: -1,        // loop infinito
      yoyo: true         // risale e riscende
    });
  }, []);

  return (
    <div style={styles.container}>
      <div ref={ballRef} style={styles.ball}></div>
    </div>
  );
}

const styles = {
  container: {
    height: 300,
    background: "#f2f2f2",
    borderRadius: "6px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  ball: {
    width: 40,
    height: 40,
    background: "#C2C719",
    borderRadius: "50%",
  },
};
