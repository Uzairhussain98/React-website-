import React from 'react'
import './Part.css'
import Video1 from './Moon.mp4'

const Part = () => {
  return (
    <div className="part">
        <div className="video__part">
    <video className="video" loop="true" autoplay="autoplay"  muted>
    <source src={Video1} type="video/mp4"/>
        </video>
        </div>
        <div className="text3">
            <div className="second">
       <h1>Explore endless design options.</h1>
       <h3>
Our website builder makes it easy to customize your site and add the tools you need to grow your business.
</h3>
</div>
        </div>


      
    </div>
  )
}

export default Part 
