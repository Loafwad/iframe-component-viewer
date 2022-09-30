import React from "react";
import lottie from "lottie-web";
import animation from "../../../public/lottie/data.json";

const LottieControl = () => {
  const lottieRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad: true,
      },
      animationData: animation,
    });

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="flex my-auto lg:p-24 h-full overflow-visible">
      <div id="parent" className="h-[700vh] mx-auto w-full xl:h-[520vh] ">
        <div className="pt-72 lg:pt-12 xl:pt-48" style={{ position: "sticky", top: "0px" }} ref={lottieRef}></div>
      </div>
    </div>
  );
};

export default LottieControl;
