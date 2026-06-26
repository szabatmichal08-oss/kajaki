import { useEffect, useRef } from 'react'
import {ReactComponent as SVG} from '../images/offer.svg'
import gsap from 'gsap';

const OfferSVG = () => {
    const wrapper = useRef(null)
    
    
    const showPatch = (river)=>{
        gsap.set(river, {visibility:"visible"});
        
    }
    const stopAnimation = (river)=>{
gsap.killTweensOf(river);
gsap.set(river, { strokeDashoffset: 0 });
        gsap.to(river, {strokeWidth:3})
    }
    
    useEffect(()=>{
        // const [elements] = wrapper.current.children;
        
        // const human = elements.getElementById('human')
        // const monitor = elements.getElementById('monitor')
        // const mouse = elements.getElementById('mouse')
        // const keyboard = elements.getElementById('keyboard')
        // const desk = elements.getElementById('desk')
        // const pcText = elements.getElementById('pcText')
        // const dot = elements.getElementById('dot')
        // const screen = elements.getElementById('screen')
        // const shoe = elements.getElementById('shoe')
        
        
        // gsap.set([monitor, human, mouse, keyboard, desk], {autoAlpha: 0});
        // gsap.set([pcText.children], {autoAlpha: 0})
        // const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});
        
        
        // tl.fromTo(desk, {x: '+=200'}, {x: '-=200', autoAlpha: 1, duration:1})
        // .fromTo(monitor, {y: '-=20'}, {y: '+=20', autoAlpha:1, duration: .5})
        // .to([keyboard, mouse], {autoAlpha: 1, duration: .5})
        // .fromTo(human, {x: '-=100'}, {x: '+=100', autoAlpha: 1, duration: .5})
        // .to(dot, {fill: "rgb(0,255, 0)" })
        // .fromTo(screen, {fill: "rgb(0,0, 0)" }, {fill: "rgb(255,255, 255)"})
        // .to([pcText.children], {autoAlpha: 1, duration:2, stagger: .3 , repeat: -1})
        // .to(shoe, {y: '-=1', repeat: -1, yoyo:true, duration: .5}, '-2')
        const item1 = document.querySelector('.offer__routesOption--1')
        const item2 = document.querySelector('.offer__routesOption--2')
        const item3 = document.querySelector('.offer__routesOption--3')
        const item4 = document.querySelector('.offer__routesOption--4')
        const item5 = document.querySelector('.offer__routesOption--5')
        const river1 = document.getElementById('river1')
        const river2 = document.getElementById('river2')
        const river3 = document.getElementById('river3')
        const river4 = document.getElementById('river4')
        const river5 = document.getElementById('river5')
        //desktop
        item1.addEventListener('mouseover',()=> showPatch(river1))
        item2.addEventListener('mouseover',()=> showPatch(river2))
        item3.addEventListener('mouseover',()=> showPatch(river3))
        item4.addEventListener('mouseover',()=> showPatch(river4))
        item5.addEventListener('mouseover',()=> showPatch(river5))

        item1.addEventListener('mouseout',()=> stopAnimation(river1))
        item2.addEventListener('mouseout',()=> stopAnimation(river2))
        item3.addEventListener('mouseout',()=> stopAnimation(river3))
        item4.addEventListener('mouseout',()=> stopAnimation(river4))
        item5.addEventListener('mouseout',()=> stopAnimation(river5))
        //phone
        item1.addEventListener('touchstart',()=> showPatch(river1))
        item2.addEventListener('touchstart',()=> showPatch(river2))
        item3.addEventListener('touchstart',()=> showPatch(river3))
        item4.addEventListener('touchstart',()=> showPatch(river4))
        item5.addEventListener('touchstart',()=> showPatch(river5))

        item1.addEventListener('touchend',()=> stopAnimation(river1))
        item2.addEventListener('touchend',()=> stopAnimation(river2))
        item3.addEventListener('touchend',()=> stopAnimation(river3))
        item4.addEventListener('touchend',()=> stopAnimation(river4))
        item5.addEventListener('touchend',()=> stopAnimation(river5))
        
        
    },[])
    


    
    
    return ( 
        <div ref={wrapper} className="wrapperTest">
            <SVG className="offer__SVG"></SVG>
        </div>
     );
    }
 
export default OfferSVG;