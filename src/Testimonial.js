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
                Nazneen <br/>
                3rd Year CSE
               
            </p>
        </div>

        <div className='t_card'>
            <div className='t_card_image cr-2'></div>
            <p>CS Space addresses the most overlooked problem in every college.
            <br/>
                <i class="fa-solid fa-quote-left"></i>
                <br/>
                K. Siva <br/>
                3rd Year CR CSE
            </p>
        </div>

        <div className='t_card'>
            <div className='t_card_image cr-3'></div>
            <p>CS Space has personally helped me a lot in acing semester exams.
            <br/>
                <i class="fa-solid fa-quote-left"></i>
                <br/>
                P. Bhargav <br/>
                2nd Year CSE
            </p>
        </div>

     </section>

    </div>
  )
}

export default Testimonial