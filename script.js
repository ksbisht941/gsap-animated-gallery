document.addEventListener("DOMContentLoaded", () => {
    const imgPlaceholder1 = document.querySelector('.img-placeholder-1');
    const imgPlaceholder2 = document.querySelector('.img-placeholder-2');
    const imgPlaceholder3 = document.querySelector('.img-placeholder-3');
    const imgPlaceholder4 = document.querySelector('.img-placeholder-4');

    let bgImgs = ["pic_1.jpg", "pic_2.jpg", "pic_3.jpg", "pic_4.jpg"];

    hoverEffectFn(bgImgs[0], 'img-placeholder-1');
    hoverEffectFn(bgImgs[1], 'img-placeholder-2');
    hoverEffectFn(bgImgs[2], 'img-placeholder-3');
    hoverEffectFn(bgImgs[3], 'img-placeholder-4');

    // let canvas = imgPlaceholder1.querySelectorAll("canvas");
    // imgPlaceholder1.appendChild(canvas[0]);
    // distortionAnimations[prevIdx].previous();

    function hoverEffectFn(img, selector) {
        return new hoverEffect({
            parent: document.querySelector(`.${selector}`),
            intensity: 0.3,
            imagesRatio: 450 / 600,
            image1: `./assets/${img}`,
            image2: `./assets/${img}`,
            displacementImage: "./assets/distortion/6.jpeg",
            hover: true
        });
    }

    // Mousemove Animation
    document.querySelectorAll('.figure').forEach(img => {
        // img.addEventListener('mousemove', (e) => move(e, img));
    });



});