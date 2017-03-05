import { TimelineMax, Power1 } from "gsap";

const getDirection = (direction, goingIn) => {
  switch (direction) {
    case 'left':
      return { x: goingIn ? '100%' : '-100%' }
    case 'right':
      return { x: goingIn ? '-100%' : '100%' }
    case 'up':
      return { y: goingIn ? '100%' : '-100%' }
    case 'down':
      return { y: goingIn ? '-100%' : '100%' }
    default:
      return { x: goingIn ? '-100%' : '100%' }
  }
}

const reveal = (box, children, options) => {
  const splitDuration = options.duration / 2
  const Reveal = new TimelineMax({ repeat: 0 });

  
  Reveal
  // move revealing box & content from 
  // outside of the overflow hidden container
  // to inside of it
  .from([box, ...children], splitDuration, 
    Object.assign({
      ease: Power1.easeOut,
      display: 'inline'
    }, getDirection(options.direction, true)))
  // set all children visible and display inline
  .set([ ...children], { 
    css: { opacity: true }
  })
  .set(children[0], { css: { display: 'inline' }})
  // move revailing box outside of the
  // overflow hidden container
  .to(box, splitDuration, 
    Object.assign({
      ease: Power1.easeOut,
      display: 'inline',
      delay: splitDuration
    }, getDirection(options.direction, false)))
  
    
  // start animation after initial delay
  Reveal.delay(options.delay)

  // setTimeout( () => {
  //   Reveal.reverse();
  // }, 5000)
}

export default reveal;