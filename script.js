document.addEventListener("DOMContentLoaded", () => {
    const imgPlaceholder = document.querySelectorAll('.img-placeholder');
    const circular = document.querySelector(".circular-text");
    const circularText = document.querySelector(".circular-text .text");

    let bgImgs = ["pic_1.jpg", "pic_2.jpg", "pic_3.jpg", "pic_4.jpg"];

    hoverEffectFn(bgImgs[0], 'img-placeholder-1');
    hoverEffectFn(bgImgs[1], 'img-placeholder-2');
    hoverEffectFn(bgImgs[2], 'img-placeholder-3');
    hoverEffectFn(bgImgs[3], 'img-placeholder-4');

    circularText.innerHTML = circularText.innerText.split('').map((char, idx) => {
        return `<span style="transform: rotate(${idx * 15.5}deg)">${char}</span>`
    }).join(' ');

    function hoverEffectFn(img, selector) {
        return new hoverEffect({
            parent: document.querySelector(`.${selector}`),
            intensity: 0.3,
            imagesRatio: 450 / 600,
            image1: `./assets/${img}`,
            image2: `./assets/${img}`,
            displacementImage: "./assets/distortion.jpeg",
            hover: true
        });
    }

    imgPlaceholder.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            circular.style.left = e.pageX + 'px';
            circular.style.top = e.pageY + 'px';
        });

        el.addEventListener('mouseenter', () => {
            circular.style.opacity = 1;
            circular.style.transform = "scale(1)";
        });

        el.addEventListener('mouseleave', () => {
            circular.style.opacity = 0;
            circular.style.transform = "scale(0)";
        });
    });

});

    
// Section One 
gsap.to('.one .title', {
    y: -5,
    duration: 1,
    stagger: .3,
    scrollTrigger: {
        trigger: '.one .title',
        scrub: true,

        start: "top 70%",
        end: "bottom 5%",
    }
})

// Section Two
gsap.to('.two .title', {
    y: -5,
    duration: 1,
    stagger: .3,
    scrollTrigger: {
        trigger: '.two .title',
        scrub: true,

        start: "top 70%",
        end: "bottom 5%",
    }
})
    
// Section Three 
gsap.to('.three .title', {
    y: -5,
    duration: 1,
    stagger: .3,
    scrollTrigger: {
        trigger: '.three .title',
        scrub: true,

        start: "top 70%",
        end: "bottom 5%",
    }
})

// Section Four
gsap.to('.four .title', {
    y: -5,
    duration: 1,
    stagger: .3,
    scrollTrigger: {
        trigger: '.four .title',
        scrub: true,

        start: "top 70%",
        end: "bottom 5%",
    }
})
