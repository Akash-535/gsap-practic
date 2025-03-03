const tl = gsap.timeline();
ScrollTrigger.create({
    trigger: ".animated-section",
    start: "top top",
    end: "600%",
    pin: true,
    scrub: 3,
    animation: tl
})
tl.fromTo(".scroll-line", {
    width: 0
}, {
    width: '100%',
    duration: 9,
    delay: .1
}).fromTo(".image-one", {
    opacity: '0'
}, {
    opacity: '1',
}, 0.2).fromTo(".image-one", {
    opacity: 1
}, {
    opacity: 0
}, 0.9).fromTo(".button-one", {
    rotate: 0,
}, {
    rotate: -5,
}, 1.1).fromTo(".image-two", {
    opacity: '0'
}, {
    opacity: '1',
}, 1.2).fromTo(".image-two", {
    opacity: 1
}, {
    opacity: 0
}, 1.9).fromTo(".button-one", {
    rotate: -5,
}, {
    rotate: 0,
}, 1.9).fromTo(".button-two", {
    rotate: 0,
}, {
    rotate: -5,
}, 2.1).fromTo(".image-three", {
    opacity: '0'
}, {
    opacity: '1',
}, 2.2).fromTo(".image-three", {
    opacity: 1
}, {
    opacity: 0
}, 2.9).fromTo(".button-two", {
    rotate: -5,
}, {
    rotate: 0
}, 2.9).fromTo(".button-three", {
    rotate: 0,
}, {
    rotate: -5,
}, 3.1).fromTo(".image-four", {
    opacity: '0'
}, {
    opacity: '1',
}, 3.4).fromTo(".image-four", {
    opacity: 1
}, {
    opacity: 0
}, 4.3).fromTo(".button-three", {
    rotate: -5,
}, {
    rotate: 0
}, 4.3).fromTo(".button-four", {
    rotate: 0,
}, {
    rotate: -5,
}, 4.6).fromTo(".image-five", {
    opacity: '0'
}, {
    opacity: '1',
}, 4.9).fromTo(".image-five", {
    opacity: 1
}, {
    opacity: 0
}, 5.7).fromTo(".image-six", {
    opacity: '0'
}, {
    opacity: '1',
}, 6.2).fromTo(".image-six", {
    opacity: 1
}, {
    opacity: 0
}, 7).fromTo(".button-four", {
    rotate: -5,
}, {
    rotate: 0
}, 7).fromTo(".button-five", {
    rotate: 0,
}, {
    rotate: -5,
}, 7.3).fromTo(".image-seven", {
    opacity: '0'
}, {
    opacity: '1',
}, 7.5)