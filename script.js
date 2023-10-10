let crsr = document.querySelector('.crsr')
let blurcrsr = document.querySelector('.blur-crsr')
// // let bdy= document.querySelector('body')
let btn = document.querySelector('#btn');
let dot = document.querySelector('.enime')
let dodo = document.querySelectorAll(".dodo")
let arr = [{img:"https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5-1002x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1"},{img:"https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-682x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1"},{img:"https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1-682x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1"}]

let dots = document.querySelectorAll('.dot')
let dot1 = document.querySelector('#dot1')
let dot2 = document.querySelector('#dot2')
let dot3 = document.querySelector('#dot3')
dots.forEach(function(dets,idx){
    let box = document.querySelector("#bobo1")

    dets.addEventListener("click",function(){
        if(idx===0){
            let a1 = arr[0].img;
        box.innerHTML = `<img src="${a1}" alt="">`
        // dots[0].computedStyleMap.color="white";
        dot1.style.color="#95c11e"
        dot2.style.color="white"
        dot3.style.color="white"
        }
        else if(idx===1){
            let a1 = arr[1].img;
        let box = document.querySelector("#bobo1")
        box.innerHTML = `<img src="${a1}" alt="">`
        // console.log(arr[0].img)
        dot1.style.color="white"
        dot2.style.color="#95c11e"
        dot3.style.color="white"
        }
        else{
            let a1 = arr[2].img;
        let box = document.querySelector("#bobo1")
        box.innerHTML = `<img src="${a1}" alt="">`
        // console.log(arr[0].img)
        dot1.style.color="white"
        dot2.style.color="white"
        dot3.style.color="#95c11e"
        }
    })
})






document.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        left:dets.x+30+"px",
        top:dets.y+"px"
    })
    gsap.to(blurcrsr,{
        left:dets.x-250+"px",
        top:dets.y-250+"px",
        duration:1
    })
    
    

})

let down = document.querySelector('#down');
let downcontainer = document.querySelector('.down-container');

downcontainer.addEventListener("mouseenter",function(){
    gsap.to(down,{
        backgroundColor:"#95c11e",
        scale:"1",
        fontSize:"20px"
    })
})
downcontainer.addEventListener("mouseleave",function(){
    gsap.to(down,{
        scale:"2",
        fontSize:"10px"
    })
})

let zoom = document.querySelectorAll('.zoom')

zoom.forEach(function(dets){
    dets.addEventListener("mouseenter",function(){
        gsap.to(crsr,{
            scale:3.5,
            backgroundColor:"transparent",
            border:"1px solid white",
            // scrub:2
        })
    })
    dets.addEventListener("mouseleave",function(){
        gsap.to(crsr,{
            scale:1,
            backgroundColor:"#95c11e",
            border:"0px solid transparent"
        })
    })
})


// btn.addEventListener("mouseenter",function(){
//     gsap.to(btn,{
//         backgroundColor:"#95c11e",
        
//     })
// })
// btn.addEventListener("mouseleave",function(){
//     gsap.to(btn,{
//         backgroundColor:"black",
        
//     })
// })


gsap.to("#nav",{
    backgroundColor:"black",
    // duration:0.2,
    height:"100px",
    
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -3%",
        stop:"top -5%",
        scrub:true
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -60%",
        scrub:2
    }
})

gsap.to("#colan1",{
    top:"120px",
    left:"170px",
    scrollTrigger:{
        trigger:"#colan1",
        scroller:"body",
        // markers:true,
        scrub:1
    }
})
gsap.to("#colan2",{
    bottom:"120px",
    right:"170px",
    scrollTrigger:{
        trigger:"#colan1",
        scroller:"body",
        // markers:true,
        scrub:1
    }
})


let card1 = document.querySelector('.back-img1')
let card2 = document.querySelector('.back-img2')
let card3 = document.querySelector('.back-img3')

let maincard1 = document.querySelector('#cds1')
let maincard2 = document.querySelector('#cds2')
let maincard3 = document.querySelector('#cds3')

let h1= document.querySelector("#hh1")
let h2= document.querySelector("#hh2")
let h3= document.querySelector("#hh3")

let wht = document.querySelector("#what")

maincard1.addEventListener("mouseenter",function(){
    gsap.to(card1,{
        opacity:1,
        backgroundSize:"400px"

    })
    gsap.to(h1,{
        color:"black",
        // scrub:2,
        duration:0.5
    })
    gsap.to(wht,{
        webkitTextStroke: "1px #95c11e",
        duration:0.1
    })
})
maincard1.addEventListener("mouseleave",function(){
    gsap.to(card1,{
        opacity:0,
        backgroundSize:"420px"


    })
    gsap.to(h1,{
        color:"white",
        // scrub:2,
        duration:0.5
    })
    gsap.to(wht,{
        webkitTextStroke: "1px white",
        duration:0.1
    })
})
maincard2.addEventListener("mouseenter",function(){
    gsap.to(card2,{
        opacity:1,
        backgroundSize:"400px"
        
    })
    gsap.to(h2,{
        color:"black",
        // scrub:2,
        duration:0.5
    })
    gsap.to(wht,{
        webkitTextStroke: "1px #95c11e",
        duration:0.1
    })
})
maincard2.addEventListener("mouseleave",function(){
    gsap.to(card2,{
        opacity:0,
        backgroundSize:"420px"
    })
    gsap.to(h2,{
        color:"white",
        // scrub:2,
        duration:0.5
    })
    gsap.to(wht,{
        webkitTextStroke: "1px white",
        duration:0.1
    })
})
maincard3.addEventListener("mouseenter",function(){
    gsap.to(card3,{
        opacity:1,
        backgroundSize:"400px"
    })
    gsap.to(h3,{
        color:"black",
        // scrub:2,
        duration:0.5
    })
    gsap.to(wht,{
        webkitTextStroke: "1px #95c11e",
        duration:0.1
    })
})
maincard3.addEventListener("mouseleave",function(){
    gsap.to(card3,{
        opacity:0,
        backgroundSize:"420px"
    })
    gsap.to(h3,{
        color:"white",
        // scrub:2,
        duration:0.5
    })
    gsap.to(wht,{
        webkitTextStroke: "1px white",
        duration:0.1
    })
})

gsap.from(wht,{
    top:"70px",
    duration:1,
    
    scrollTrigger:{
        scroller:"body",
        trigger:wht,
        // markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:1,
    }

})


let zommi = document.querySelectorAll(".zommo")

zommi.forEach(function(dets){
    dets.addEventListener("mouseenter",function(){
        gsap.to(dets,{
            color:"white"
        })
    })
    dets.addEventListener("mouseleave",function(){
        gsap.to(dets,{
            color:"black"
        })
    })
})

let logo = document.querySelectorAll(".logo")
logo.forEach(function(dets){
    dets.addEventListener("mouseenter",function(){
        gsap.to(dets,{
            scale:"0.9"
        })
    })
    dets.addEventListener("mouseleave",function(){
        gsap.to(dets,{
            scale:"1"
        })
    })
})


dodo.forEach(function(dets){
    dets.addEventListener("mouseenter",function(){
        gsap.to(dets,{
            color:"#95c11e"
        })
    })
    dets.addEventListener("mouseleave",function(){
        gsap.to(dets,{
            color:"white"
        })
    })
})