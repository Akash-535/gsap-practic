const tl = gsap.timeline();
const mm = gsap.matchMedia();


mm.add("(min-width:1536.98px)", () => {
    gsap.set(".side-image", {
        left: '-60%',
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
    gsap.set(".heading-text", {
        y: 500,
        opacity: 0
    })
    ScrollTrigger.create({
        trigger: ".my-section",
        start: "top top",
        end: "300%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".heading-text", {
        y: 500,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 5
    }).fromTo(".side-image", {
        left: "-60%"
    }, {
        left: "1%",
        duration: 8,
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
        bottom: "80px",
        duration: 70
    }, {
        bottom: "70%",
        duration: 70
    }, 25)
});

mm.add("(min-width:1279.98px) and (max-width:1536.98px)", () => {
    gsap.set(".side-image", {
        left: '-60%',
    });
    gsap.set(".heading-text", {
        y: 500,
        opacity: 0
    })
    gsap.set(".text-div", {
        opacity: 0,
        top: "48%",
        left: '47%',
    });
    gsap.set(".text-div-two", {
        opacity: 0,
        top: "48%",
        left: '47%',
    });
    gsap.set(".text-div-three", {
        opacity: 0,
        top: "48%",
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


    tl.fromTo(".heading-text", {
        y: 500,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 5
    }).fromTo(".side-image", {
        left: "-60%"
    }, {
        left: "1%",
        duration: 8,
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
        left: "1.5%",
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
        left: "1.5%"
    }, {
        left: "3%",
        duration: 23,
    }).fromTo(".text-div-three", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    }).fromTo(".arrow-text", {
        bottom: "80px",
        duration: 70
    }, {
        bottom: "70%",
        duration: 70
    }, 25)
});

mm.add("(min-width:1023.98px) and (max-width:1280.98px)", () => {
    gsap.set(".side-image", {
        left: '-60%',
    });
    gsap.set(".text-div", {
        opacity: 0,
        top: "55%",
        left: '48%',
    });
    gsap.set(".text-div-two", {
        opacity: 0,
        top: "55%",
        left: '48%',
    });
    gsap.set(".text-div-three", {
        opacity: 0,
        top: "55%",
        left: '48%',
    });
    gsap.set(".heading-text", {
        y: 500,
        opacity: 0
    })
    ScrollTrigger.create({
        trigger: ".my-section",
        start: "top top",
        end: "300%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".heading-text", {
        y: 500,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 5
    }).fromTo(".side-image", {
        left: "-60%"
    }, {
        left: "1%",
        duration: 8,
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
        left: "1.5%",
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
        left: "1.5%"
    }, {
        left: "3%",
        duration: 23,
    }).fromTo(".text-div-three", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 25,
    }).fromTo(".arrow-text", {
        bottom: "80px",
        duration: 70
    }, {
        bottom: "70%",
        duration: 70
    }, 25)
});

mm.add("(min-width:678.98px) and (max-width:1023.98px)", () => {
    gsap.set(".text-div", {
        opacity: 0,
        top: "28%",
        left: '-60%',
    });
    gsap.set(".text-div-two", {
        opacity: 0,
        top: "56%",
        right: '-60%',
    });
    gsap.set(".text-div-three", {
        opacity: 0,
        top: "84%",
        left: '-60%',
    });
    gsap.set(".heading-text", {
        y: 500,
        opacity: 0
    })
    ScrollTrigger.create({
        trigger: ".my-section",
        start: "top top",
        end: "300%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".heading-text", {
        y: 500,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 5
    }).fromTo(".text-div", {
        opacity: 0,
        left: "-60%"
    }, {
        opacity: 1,
        duration: 3,
        left: "21%"
    }).fromTo(".text-div-two", {
        opacity: 0,
        right: "-60%"
    }, {
        opacity: 1,
        duration: 15,
        right: "18%"
    }).fromTo(".text-div-three", {
        opacity: 0,
        left: "-60%"
    }, {
        opacity: 1,
        duration: 25,
        left: "21%"
    }).fromTo(".arrow-text", {
        bottom: "80px",
        duration: 70
    }, {
        bottom: "60%",
        duration: 70
    }, 2)
});

mm.add("(max-width:678.98px)", () => {
    gsap.set(".text-div", {
        opacity: 0,
        top: "26%",
        left: '-60%',
    });
    gsap.set(".text-div-two", {
        opacity: 0,
        top: "52%",
        right: '-60%',
    });
    gsap.set(".text-div-three", {
        opacity: 0,
        top: "80%",
        left: '-60%',
    });
    gsap.set(".heading-text", {
        y: 500,
        opacity: 0
    })
    ScrollTrigger.create({
        trigger: ".my-section",
        start: "top top",
        end: "300%",
        pin: true,
        animation: tl,
        scrub: 2,
    });


    tl.fromTo(".heading-text", {
        y: 500,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 5
    }).fromTo(".text-div", {
        opacity: 0,
        left: "-60%"
    }, {
        opacity: 1,
        duration: 3,
        left: "10%"
    }).fromTo(".text-div-two", {
        opacity: 0,
        right: "-60%"
    }, {
        opacity: 1,
        duration: 15,
        right: "2%"
    }).fromTo(".text-div-three", {
        opacity: 0,
        left: "-60%"
    }, {
        opacity: 1,
        duration: 25,
        left: "7%"
    })
});