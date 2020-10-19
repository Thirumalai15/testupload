const tl = gsap.timeline({default: { ease: 'power1.out'}});

tl.to('.text', {y: "0%", duration: 1, stagger: 0.1})
tl.to('.slider', { y: "-100%", duration: 1.2});
tl.to('.intro', {y: "-100%", duration: 1}, "-=1");