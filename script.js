let tl = gsap.timeline()

tl.from(".nav .firstli",{
    y : -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.3
})


tl.from(".secondli h4",{
    y : -20,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3
})

tl.from("#img1",{
    y: 90,
    x: 350,
    opacity:0,
})
tl.from("#img2",{
    y: 90,
    x: -350,
    opacity:0,
})
tl.from("#img3",{
    y: 90,
    x: 350,
    opacity:0,
})
tl.from("#img4",{
    y: 90,
    x: -350,
    opacity:0,
    duration: 0.5
})

tl.from("h1",{
    x: -1000,
    opacity:0
})

tl.to("#img1",{
    rotate:10,
    duration: 0.6,
})

tl.to("#img2",{
    rotate:20,
    duration: 0.4,

})
tl.to("#img3",{
    rotate:30,
    duration: 0.2,

})



