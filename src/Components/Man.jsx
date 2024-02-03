import React from 'react'
import '../style/Man.css'
import { useState } from 'react';
function Man() {
    // аккардион 
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    const [isOpen2, setIsOpen2] = useState(false)
    const toggleAccordion2 = ()=> {
        setIsOpen2(!isOpen2);
    };
    const [isOpen3, setIsOpen3] = useState(false)
    const toggleAccordion3 = ()=>{
        setIsOpen3(!isOpen3)
    }
  return (
    <section className='man'>
        <div className='man__bg'></div>
            <div className='container'>
                <div className='men__warpper'>
                <div className='man__content'>
                    <div className='man__content__title'>
                        <h3>
                            What’s so special?
                        </h3>
                        <h1>
                            Features
                        </h1>
                    </div>
                    <div className='man__wrapper'>
                    <div className='man__content__text' >
                    <h2 onClick={toggleAccordion}>SURVIVE AT ALL COSTS</h2>
                            {isOpen && (
                                <div>
                                <p>You have 30 minutes to find a relic, signal for extraction, and grab
                                one of three spots on the rescue chopper.</p>
                                </div>
                            )}
                    </div>
                    <div className='man__content__text'>
                    <h2 onClick={toggleAccordion2}>CREATE ALLIES AND ENEMIES</h2>
                            {isOpen2 && (
                                <div>
                                <p>You have 30 minutes to find a relic, signal for extraction, and grab
                                one of three spots on the rescue chopper.</p>
                                </div>
                            )}
                    </div>
                    <div className='man__content__text'>
                    <h2 onClick={toggleAccordion3}>IMPRESS THE AUDIENCE</h2>
                            {isOpen3 && (
                                <div>
                                <p>You have 30 minutes to find a relic, signal for extraction, and grab
                                one of three spots on the rescue chopper.</p>
                                </div>
                            )}
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
  )
}

export default Man;