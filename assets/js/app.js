const tl = gsap.timeline();
const mm = gsap.matchMedia();


mm.add("(min-width:1280.98px)", () => {
    gsap.set(".side-image", {
        left: '-40%',
    });
    gsap.set(".text-div", {
        opacity: 0,
        top: "58%",
        left: '47%',
    });
    gsap.set(".text-div-two", {
        opacity: 0,
        top: "58%",
        left: '47%',
    });
    gsap.set(".text-div-three", {
        opacity: 0,
        top: "58%",
        left: '47%',
    });
    ScrollTrigger.create({
        trigger: ".my-section",
        start: "top top",
        end: "300%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".side-image", {
        left: "-40%"
    }, {
        left: "1%",
        duration: 3,
    }).fromTo(".text-div", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 3,
    }).fromTo(".text-div", {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 10,
    }).fromTo(".side-image", {
        left: "1%"
    }, {
        left: "3%",
        duration: 13,
    }).fromTo(".text-div-two", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 15,
    }).fromTo(".text-div-two", {
        opacity: 1,

    }, {
        opacity: 0,
        duration: 20,
    }).fromTo(".side-image", {
        left: "3%"
    }, {
        left: "5%",
        duration: 23,
    }).fromTo(".text-div-three", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    }).fromTo(".arrow-text", {
        bottom: "80px"
    }, {
        bottom: "50%",
        duration: 80
    }, 25)
});