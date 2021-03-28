import { gsap, Linear } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as d3 from 'd3';

gsap.registerPlugin(ScrollTrigger);

class ScrollAma {
    init() {
        this.intro();
        this.autodidact();
        this.globe();
    }

    intro() {
        gsap.to('#heading', {
            scrollTrigger: {
                trigger: '#heading',
                start: 'top  top',
                scrub: true,
            },
            yPercent: -23.6,
            autoAlpha: 0,
            ease: Linear.easeNone,
        });
        gsap.to('#subheading', {
            scrollTrigger: {
                trigger: '#heading',
                start: '80% top',
                scrub: true,
            },
            yPercent: -14.5,
            autoAlpha: 0,
            ease: Linear.easeNone,
        });
        gsap.to('#slice-left', {
            scrollTrigger: {
                trigger: '#slice-left',
                start: '10% top',
                scrub: true,
            },
            yPercent: -38.2,
            autoAlpha: 0,
            ease: Linear.easeNone,
        });
        gsap.to('#slice-right', {
            scrollTrigger: {
                trigger: '#slice-right',
                start: 'top top',
                scrub: true,
            },
            yPercent: -61.8,
            autoAlpha: 0,
            ease: Linear.easeNone,
        });
    }
    autodidact() {
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#content',
                scrub: true,
                start: 'top center',
            },
        });
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#traveling',
                scrub: true,
                start: 'top center',
            },
        });
        gsap.set('#content', { y: -200 });
        tl1.fromTo(
            '#text-become-autodidact',
            { y: 200 },
            { y: 0, ease: Linear.easeNone, duration: 1 }
        );
        tl1.fromTo('#text-learn-from', { y: 200 }, { y: 0, ease: Linear.easeNone, duration: 1 });
        tl2.fromTo(
            '#traveling',
            { y: 180, autoAlpha: 0 },
            { y: 240, autoAlpha: 1, ease: Linear.easeNone, duration: 1 }
        );

        gsap.to('#text-become-autodidact', {
            scrollTrigger: {
                trigger: '#text-become-autodidact',
                star: 'top top',
                scrub: true,
            },
            autoAlpha: 0,
            ease: Linear.easeNone,
            duration: 0.5,
        });
        gsap.to('#text-learn-from', {
            scrollTrigger: {
                trigger: '#text-learn-from',
                star: 'top top',
                scrub: true,
            },
            autoAlpha: 0,
            ease: Linear.easeNone,
            duration: 0.5,
        });
    }
    globe() {
        const blur = d3.scale.linear().domain([375, 2560]).range([3, 6]);
        console.log('rdapp - ScrollAma - globe - blur', blur);
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#globe',
                start: 'top center',
                end: 'top top',
                scrub: true,
            },
        });

        tl1.from('#globe', {
            scale: Math.max(800, window.innerWidth) / window.globe.diameter,
        }).to('#globe', { scale: 1, y: 220, ease: Linear.easeNone });
        // tl1.to('#globe-container', {
        //     scrollTrigger: {
        //         trigger: '#globe-container',
        //         start: 'top  bottom',
        //         scrub: true,
        //     },
        //     '-webkit-filter': `blur(${blur(window.innerWidth)}px)`,
        // }).to('#globe-container', {
        //     scrollTrigger: {
        //         trigger: '#globe-container',
        //         start: 'top  bottom',
        //         scrub: true,
        //     },
        //     '-webkit-filter': 'blur(0)',
        // });
    }
}

export default ScrollAma;
