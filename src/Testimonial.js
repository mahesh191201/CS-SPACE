import React from 'react'
import './Testimonial.css'

function Testimonial() {
  return (
    <div className='mt-3'>
     <section className='t_box'>
        <div className='t_card'>
            <div className='t_card_image cr-1'></div>
            <p>Very good initiative and much needed website for the faculty as well as for students. 
                <br/>
                <i class="fa-solid fa-quote-left"></i>
                <br/>
                Dr B.Sujatha <br/>
                HOD CSE Dept
               
            </p>
        </div>

        <div className='t_card'>
            <div className='t_card_image cr-2'></div>
            <p>lorem ipsum swodwqkjdowq
            </p>
        </div>

        <div className='t_card'>
            <div className='t_card_image cr-3'></div>
            <p>lorem ipsum swodwqkjdowq
            </p>
        </div>

     </section>

    </div>
  )
}

export default Testimonial