
import React from 'react'
import './Foot.css'
import logo from './logo.svg'
import { SocialIcon } from 'react-social-icons';
import useWebAnimations,  { heartBeat }  from "@wellyshen/use-web-animations";



const Foot= () => {


  const { keyframes, animationOptions } = heartBeat;
const { ref } = useWebAnimations({
  keyframes,
  animationOptions: {
    ...animationOptions,
    delay: 2000, // Delay 1s
    // duration: animationOptions.duration * 0.75, // Speed up the animation
    iterations:Infinity
  },
});

    // const { ref } = useWebAnimations({ ...heartBeat });

    // const { ref,} = useWebAnimations({
    //     keyframes: [
    //       { transform: 'rotate(0)' } ,
    //       { transform: 'rotate(360deg)' }
    //     ],
    //     timing: {
    //       duration: 500, // Run for 1000ms
    //       iterations: Infinity, // Repeat once
    //        direction:"alternate",// Run the animation forwards and then backwards
    //       easing: "ease-in-out", // Use a fancy timing function
    //   }}
    //     );










  return (
    <div className="footer">
        <img ref={ref} className="footer__logo" src={logo} alt="" loading="lazy"  />
        <h3>Embark on an exciting career with us to learn and grow alongside the best in the industry</h3>
        <hr/>
        
        <SocialIcon bgColor="rgb(45, 198, 245)"  style={{margin:'20px' }} url="http://linkedin.com/" />
        <SocialIcon bgColor="rgb(45, 198, 245)" url="http://facebook.com/" />


      
    </div>
  )
}

export default Foot