import React from "react";
import './Examspace.css';
import {useEffect, useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";



function Examspace() {
 
  const [loading, setLoading]=useState(false)
  useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
         setLoading(false)
     }, 1000)

 },[])   
    



  return (

  <>
  



        { loading?
       <ClipLoader className='spinner' color={'#D0021B'} loading={loading} size={50} />
       :
      <div>

       <h3 className="text-center py-5">
      Download the previous year question papers here <i class="fa-regular fa-hand-point-down"></i>
      </h3>
      <h6 className='text-center'>Note: All year papers may not be available. If you have any previous year papers kindly share with us.</h6>
      
    
    <div className="container mt-4">
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        1st Year
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="container text-center">
     
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1j-Y0ZyrIB1C8gtoHqQVPbtjLXep_fcGl">English</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1ux5cwUXju2FFKc8MOXo7UQkz7K1N6RnS">Maths-1</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1c9oy3uIejeQoTh83KxpBwGWq_Mms7Glf">Maths-2</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=d/1FCqu9gqsvG2k4YxtYI6FBhmZ2WY4gfda">Physics</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="">Chemistry</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1x9ZdS9lmiv83MmQoNFyD4PC0aMQFEZsT">FDE</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1LH-dCITSEfz3R73bhTaGTl56oLzwUIYX">Data Structures</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1PdbkL7A7fMxYhEqjanoCdFgYJ95oyk_1">C-Programming</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1LHIfjeC8oVkeXphA-Url05amgeYFbuvN">Python Programming</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1BAUs03WFKi_-5SmAf7OyaBcPdv-9vRbJ">Engineering Graphics</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1vviTptKd1MV8cB-7r4OiOKGWYhFNexSR">1st yr 1st sem 2020-21</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1z2-a1fRhFRMxmR9lxU6flx5pUxad7fU0">1st yr 2nd sem 2020-21</a> 
                </div>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        2nd Year
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1Fn6mI8uA1jylByY5OvDQmUDlZWYXms5N">Mathematical Foundation of Computer Science</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1gLu69YZNIFQZXxuYHtYHJFCubsu7HwNM">Design and analysis of algorithms</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1tQ_gTvaWEMpPJ3oJWXntSpEF0QKHePjk">Computer Organization</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1ZX5VTdJJ196keP3QKzimtOe4x5hQittY">Oops through JAVA</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1-q1IUIUCGnsQGsW7rqK_KECz-BnV1MwI">MEFA</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1YcxKFMh_VVYNimpEVo7sPSdDBZQIdJHa">Statistics with R</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1OqoDf919EEOz2aNEClqEYlDWjpxZzeye">Formal Languages and automata theory</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1kinw1sar_5Cu6Eal40MQLrIU7dP2gHxv">Operating System</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1TqD8o-ftw04UlF7v49b-NyrTRjkk3_n1">Database management systems</a> 
                </div>
                <div className="container text-center">
                <a className="hai" href="https://drive.google.com/uc?export=download&id=1_syXEGYwHZ4NRYK_Ph2x1Tl4ESH_KLku">Software Engineering</a> 
                </div>

      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        3rd Year
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div className="text-center">
            Working on it.

        </div>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        4th Year
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div className="text-center">
            Working on it.

        </div>
      </div>
    </div>
  </div>









</div>





    </div>
     
      </div>
 

  }
</>
  )
}

export default Examspace
