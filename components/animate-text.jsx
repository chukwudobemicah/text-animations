// import gsap from "gsap";
// import { useEffect, useRef } from "react";

export default function AnimateText({ text }) {
  //   const textRef = useRef(null);

  //   useEffect(() => {
  //     const q = gsap.utils.selector(textRef);
  //     const el = q(".animated-text");
  //     console.log(el);
  //     const ctx = gsap.context(() => {
  //       gsap.from(el, {
  //         translateY: "25%",
  //         stagger: 0.1,
  //         duration: 0.5,
  //       });
  //     }, textRef);

  //     return () => ctx.revert();
  //   });

  return (
    <div className="uppercase animated-text-container">
      {[...text].map((letter, i) => (
        <span
          key={i}
          className="inline-block text-[13vw] md:text-[12vw] animated-text"
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
