import React from 'react'
import '../style/Comment.css'
import CommentCard from './CommentCard'
import commetn__foto1 from '../img/comment__card1.jpg'
import commetn__foto2 from '../img/comment__card2.jpg'
import commetn__foto3 from '../img/comment__card3.png'
function Commetn() {
  return (
    <section className='comment'>
        <div className='comment__bg2'></div>
        <div className='container'>
            <div className='comment__wrapper'>
                <div className='commetn__content'>
                    <h3 >
                     What people think?
                    </h3>
                    <h1>
                        Press quotes
                    </h1>
                    <p>
                    Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.
                    </p>
                    <button className='comment__btn'>
                         Read more testimonials
                    </button>
                </div>
                <div className='comment__card'>
                        <div className='top__card'><CommentCard foto={commetn__foto1} title='Evan Lahti' work='PC Gamer' text='“One of my gaming highlights of the year.”' data='October 18, 2018' /></div>
                        <div className='midle__card'><CommentCard foto={commetn__foto2} title='Jada Griffin ' work='Nerdreactor' text='“The next big thing in the world of streaming and survival games.”' data='December 21, 2018' /></div>
                        <div className='buttun__card'><CommentCard foto={commetn__foto3} title='Aaron Williams ' work='Uproxx' text='“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”' data='December 24, 2018' /></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Commetn