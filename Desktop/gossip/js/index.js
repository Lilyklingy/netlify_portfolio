gsap.registerPlugin(ScrollTrigger);

gsap.from(".back-img", {x:50, duration:1, opacity:0, yoyo:true});
gsap.from(".first-tittal", {y:-50,stager:1.5, opacity:0, delay:1.1, duration:1.5},"-=1")
gsap.from(".first-text", {y:-50,stager:2, opacity:0, delay:1.5, duration:2}, "-=1.5")

gsap.from(".background2", {scrollTrigger:{
    trigger:".one",
    start:"top center",
    endTrigger:".two",
    end: "bottom 80%",
    toggleActions:"restart pause reverse complete",
    scrub:1,
},x:-100, duration:3, opacity:0, delay:1.4, yoyo:true},"-=1");
gsap.from("#rose",{scrollTrigger:{
    trigger:".one",
    start:"top center",
    endTrigger:".two",
    end: "bottom 80%",
    toggleActions:"restart none none none",
    scrub:1,
}, y:100, duration:3, opacity:0, delay:1.9},"-=2")
gsap.from("#red",{scrollTrigger:{
    trigger:".one",
    start:"top center",
    endTrigger:".two",
    end: "bottom 80%",
    toggleActions:"restart none none none",
    scrub:1,
}, y:-100, duration:3, opacity:0, delay:1.9},"-=2")

gsap.from(".product", {scrollTrigger:{
    trigger:".two",
    start:"top center",
    endTrigger:".three",
    end: "bottom 80%",
    toggleActions:"restart none none none",
    scrub:1,
}, duration:3, opacity:0})

gsap.from(".background4", {scrollTrigger:{
    trigger:".three",
    start:"top center",
    endTrigger:".four",
    end: "bottom 80%",
    toggleActions:"restart pause reverse complete",
    scrub:1,
},x:-100, duration:3, opacity:0, delay:1.4, yoyo:true},"-=1");
gsap.from("#top",{scrollTrigger:{
    trigger:".three",
    start:"top center",
    endTrigger:".four",
    end: "bottom 80%",
    toggleActions:"restart none none none",
    scrub:1,
}, y:-100, duration:3, opacity:0, delay:1.9},"-=2")
gsap.from("#all",{scrollTrigger:{
    trigger:".three",
    start:"top center",
    endTrigger:".four",
    end: "bottom 80%",
    toggleActions:"restart none none none",
    scrub:1,
}, y:100, duration:3, opacity:0, delay:1.9},"-=2")

gsap.from(".background5", {scrollTrigger:{
    trigger:".four",
    start:"top center",
    endTrigger:".five",
    end: "bottom 80%",
    toggleActions:"restart pause reverse complete",
    scrub:1,
},x:100, duration:3, opacity:0, delay:1.4, yoyo:true},"-=1");
gsap.from("#us",{scrollTrigger:{
    trigger:".four",
    start:"top center",
    endTrigger:".five",
    end: "bottom 80%",
    toggleActions:"restart none none none",
    scrub:1,
}, x:-100, duration:3, opacity:0, delay:1.9},"-=2")

gsap.from(".background6", {scrollTrigger:{
    trigger:".five",
    start:"center bottom",
    endTrigger:".six",
    end: "bottom 80%",
    toggleActions:"restart pause reverse pause",
    scrub:2,
},x:-300, duration:2, opacity:0, delay:1, yoyo:true},"-=3");