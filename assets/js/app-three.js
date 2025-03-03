const tl = gsap.timeline();
gsap.set(".text-content-one", {
    opacity: 1,
})
gsap.set(".card-one", {
    opacity: 1
})
ScrollTrigger.create({
    trigger: ".animate-section",
    pin: true,
    start: "top top",
    end: "600%",
    scrub: 3,
    animation: tl,
})
tl.fromTo(".heading-text", {
    y: '-100%',
    opacity: 0,
    duration: 1
}, {
    y: 0,
    opacity: 1,
}).fromTo(".text-content-one", {
    opacity: 1,
}, {
    opacity: 0,
}, 0.4).fromTo(".text-content-two", {
    opacity: 0,
}, {
    opacity: 1,
}, 0.7).fromTo(".text-content-two", {
    opacity: 1,
}, {
    opacity: 0,
}, 1).fromTo(".text-content-three", {
    opacity: 0,
}, {
    opacity: 1,
}, 1.5).fromTo(".text-content-three", {
    opacity: 1,
}, {
    opacity: 0,
}, 2).fromTo(".text-content-four", {
    opacity: 0,
}, {
    opacity: 1,
}, 2.5).fromTo(".text-content-four", {
    opacity: 1,
}, {
    opacity: 0,
}, 3).fromTo(".text-content-five", {
    opacity: 0,
}, {
    opacity: 1,
}, 3.5).fromTo(".text-content-five", {
    opacity: 1,
}, {
    opacity: 0,
}, 4).fromTo(".text-content-six", {
    opacity: 0,
}, {
    opacity: 1,
}, 4.5).fromTo(".card-one", {
    opacity: 1
}, {
    opacity: 0
}, 5.5).fromTo(".card-two", {
    opacity: 0
}, {
    opacity: 1
}, 6.5).fromTo(".card-two", {
    opacity: 1
}, {
    opacity: 0
}, 7.5).fromTo(".card-three", {
    opacity: 0
}, {
    opacity: 1
}, 8.5)