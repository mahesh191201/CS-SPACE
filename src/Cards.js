import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <div>
      <section className="container1 mt-5">
        <div className="card">
            <div className="card-image car-1"></div>
            <h2 className='text-center'>Founder</h2>
            {/* <p>Mahesh Rallabhandi is the founder of CS space who came up with this vision of creating a space for CS students. <br/>
            Email: rskmahesh5000@gmail.com
               
            </p> */}
            <p> Name: Mahesh Rallabhandi <br/>
                Email: rskmahesh5000@gmail.com
                </p>
          
        </div>
        <div className="card">
            <div className="card-image car-2"></div>
            <h2 className='text-center'>Tech Lead</h2>
            {/* <p>Aayush BK is the tech lead of this project who took responsibility to lead the team.<br/>
            Email: 20551a05i2.aayush@gmail.com
            </p> */}
            <p> Name: Aayush Bishokarma <br/>
                Email: 20551a05i2.aayush@gmail.com</p>
            
        </div>
        <div className="card">
            <div className="card-image car-3"></div>
            <h2 className='text-center'>Developer</h2>
            {/* <p>Shri Krishna Kumar Prajapati is the developer who played a vital role in translating the vision into reality <br/>
            Email: shreekrishnaprajapati5@gmail.com
            </p> */}
            <p>Name: Shree Krishna Kumar Prajapati <br/>
               Email: shreekrishnaprajapati5@gmail.com</p>
        </div>
        <div className="card">
            <div className="card-image car-4"></div>
            <h2 className='text-center'>Database</h2>
            {/* <p>B.Ashish is the database administrator who collected all the related as well as necessary data, stored and organized it. <br/>
            Email: baipalliashish@gmail.com</p> */}
            <p>Name: Baipalli Ashish <br/>
              Email: baipalliashish@gmail.com</p>
        </div>
      
    </section>
    </div>
  )
}

export default Cards