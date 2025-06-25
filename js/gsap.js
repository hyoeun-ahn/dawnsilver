gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// header 초기 상태 숨김
gsap.set("header", { opacity: 0, y: -50 });

// intro 끝나면 header 보이기
ScrollTrigger.create({
  trigger: "#intro",
  start: "bottom top", // intro 다 지나간 시점
  onEnter: () => {
    gsap.to("header", {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  },
  onEnterBack: () => {
    gsap.to("header", {
      opacity: 0,
      y: -50,
      duration: 0.4,
      ease: "power2.in"
    });
  }
});

