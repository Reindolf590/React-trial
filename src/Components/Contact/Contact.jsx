import './Contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react';



const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ffa7d03f-b0f3-48c8-9c28-bf43162fa878");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  } 
    return (
    <div className='contact'>
        <div className='col'>
            <h3>Send us a message <img src={msg_icon}/></h3>
            <p>Feel free to reach out through contact form or
                find our contact information below. Your feedback,
                questions, and suggestions are important to us as we
                strive to provide exceptional service to our university community.
            </p>
            <ul>
                <li><img src={mail_icon}/>nanaampem590@gmail.com</li>
                <li><img src={phone_icon}/>0552468046</li>
                <li><img src={location_icon}/>Kentinkrono-Nsenie <br/> AK-213-24</li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name="name" placeholder='Enter your name'
            required></input>
            <label>Phone number</label>
            <input type='tel' name="phone" placeholder='Enter your mobile number'
            required></input>
            <label>Write your message here</label>
            <textarea name='message' row='6' placeholder='Enter your message'
            required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now
              <img src={white_arrow}/>
            </button>
            <span>{result}</span>
          </form>
        </div>
      
    </div>
  )
}

export default Contact
