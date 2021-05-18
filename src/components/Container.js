import React from 'react'
import './Container.css'
import useWebAnimations,{bounce, heartBeat} from "@wellyshen/use-web-animations";


const Container = () => {

  const { keyframes, animationOptions } = heartBeat;
const { ref } = useWebAnimations({
  keyframes,
  animationOptions: {
    ...animationOptions,
    delay: 2000, // Delay 1s
    duration: 4000, // Speed up the animation
    iterations:Infinity
  },
});


  return (
    <div className="container">
        <div className="text1">
        <h1 ref={ref} >Turn your ideas into reality.</h1>

        </div>
      
    </div>
  )
}

export default Container
