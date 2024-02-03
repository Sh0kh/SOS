import React from 'react'
import '../style/Form.css'
import form__foto from '../img/form__bg1.png'
import form__foto2 from '../img/form__bg2.png'
function Form() {
  return (
    <section className='form'>
        <div className='container'>
            <div className='form__wrapper'>
                <div className='form__foto'>
                    <img src={form__foto} alt="foto" />
                    <img className='form__bg' src={form__foto2} alt="foto" />
                </div>
                <div className='form__content'>
                    <h3>
                        Want to stay in touch?
                    </h3>
                    <h1>
                        Newsletter SUBSCRIBE 
                    </h1>
                    <p>
                    In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.
                    </p>
                    <form >
                        <input placeholder='Your email address' type="email" name="" id="" required />
                        <button className='form__btn' type="submit">
                            Subscribe now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Form