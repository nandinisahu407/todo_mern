import React from 'react'
import './Home.css';
import Lottie from 'react-lottie';
import animationData from './home_anim2.json'

const Home = () => {
  return (
    <>
    <div className="animation-container">
            <Lottie
            options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
            }}
            height={700}
            width={600} 
            
            />

        </div>
    </>
  )
}

export default Home
