import React from 'react'
import '../style/Game.css'
import game__foto from  '../img/game__foto1.jpg'
function Game() {
  return (
    <section className='game'>
        <div className='game__bg1'>
            <div className='game__bg2'>
                <div className='container'>
                  <div className='game__wrapper'>
                      <div className='game__content'>
                          <div className='game__content__title'>
                            <h3>
                              What is SOS?
                            </h3>
                            <h1>
                              Social battle royale game
                            </h1>
                          </div>
                          <div className='game__contant__line'>

                          </div>
                          <div className='game__content__p'>
                          <p>
                          Each round, you and 15 other contestants compete to
                          escape a deadly island filled with monsters. The trick is: three people can survive. Will you run
                          solo or form friendships with others to escape? 



                          Making the right decisions could be the
                          difference between life and death.
                          </p>
                          </div>
                      </div>
                      <div className='game__swiper'>
                          <img src={game__foto} alt="foto" />
                      </div>
                  </div>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default Game