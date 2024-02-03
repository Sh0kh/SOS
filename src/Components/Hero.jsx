import React from 'react'
import '../style/Hero.css'
function Hero() {
  return (
    <section id='hero' className='hero'>
        <div className='hero__bg'>
            {/* <img src={hero__bg} alt="foto" /> */}
            <div className='hero__bg2'>
            </div>
        </div>
        <div className='container'>
            <h1>
                SURVIVE AT ALL COSTS
            </h1>
            <h3>
             Experience new social battle royale game
            </h3>
            <button>
                Buy Now on Steam | $14.99
            </button>
        </div>
    </section>
  )
}

export default Hero