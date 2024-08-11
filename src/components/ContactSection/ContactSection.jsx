import React from 'react'
import styles from './Contact.module.css'
function ContactSection() {
  return (
    <div className={`${styles.contact_section}`}>
       <h1>CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! 
           WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN 
           REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
           EMAIL, OR SOCIAL MEDIA.{" "} </p>
       </div>
    //    <div className='contact-data'>
    //     <div className='contact-form'>
    //         <div className='contact-btn'>
    //             <div className='support-call-btn'>
    //             <button className='support-chat'>
    //                 <img src="./images/message.png" alt="message"/>
    //                 VIA SUPPORT CHAT
    //             </button>
    //             <button className='call'>VIA CALL</button>
    //             </div>
               
    //             <button className='email-form'>VIA EMAIL FORM</button>
    //        </div>
    //         <div className='contact-field'>
    //             <div className='input-field'>
    //                 <input type="text" id="name" name="name"/>
    //                 <input type="text" id="email" name="email"/>
    //                 <input className='description-text' type="text" id="description" name="description"/>
    //             </div>
    //             <button className='submit'>Submit</button>  
    //         </div>
    //     </div>
    //     <div className='contact-image'>
    //         <img src="./images/character.png" alt="girl"/>
    //         {/* <img src="./images/bubble.png" alt="girl"/>
    //         <img src="./images/service.png" alt="girl"/>
    //         <img src="./images/Stopwatch.png" alt="girl"/> */}
    //     </div>

    //    </div>
  )
}

export default ContactSection
