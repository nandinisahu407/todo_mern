import React from 'react'
import './Home.css';
import Lottie from 'react-lottie';
import animationData from './home_anim2.json'

const Home = () => {
  return (
    <>

    <div className="main-screen">
        <div className="container">
            <h1>
                Organize your <br />work and life,finally!!
            </h1>
            <p>Become focused,organised and calm with <br />todo app.The world's #1 Task manager app</p>
            <button className='home-btn'><a href="/todo">Make Todo List</a></button>
            

        </div>
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
      </div>
    </>
  )
}

export default Home
