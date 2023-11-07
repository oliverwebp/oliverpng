import "./ParalText.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import React from "react";

function ParallaxText({name1, baseVelocity = 20 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 6], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -40, v)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  const img1url = './' + name1 + '.png';
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
      <span><img src={img1url} className='smolIMG' alt=""></img> </span>
      <span><img src={img1url} className='smolIMG' alt=""></img> </span>
      <span><img src={img1url} className='smolIMG' alt=""></img> </span>
      <span><img src={img1url} className='smolIMG' alt=""></img> </span>

      <span><img src={img1url} className='smolIMG' alt=""></img> </span>
      


      </motion.div>
    </div>
  );
}

export default function App(props) {
  return (
    <section>
      <ParallaxText name1={props.name1} baseVelocity={.5}></ParallaxText>
    </section>
  );
}
