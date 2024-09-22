import React from 'react'
import './contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "651fe20a-19ea-404c-971b-eb003358f9cc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(result)
      event.target.reset();
     
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme}  alt=''/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>yup i am free right now</p>
            <div className="p-details">
                <div className="p-detail">
                  <img src={mail_icon} alt=''/><p>milanrawat027@gmail.com</p>
                </div>
                <div className="p-detail">
                <img src={call_icon} alt=''/><p>+91 8447324631</p>
                </div>
                <div className="p-detail">
                <img src={location_icon} alt=''/><p>455,chirag delhi,110017</p>
                </div>
            </div>
        </div>
        <form className='contact-right' onSubmit={onSubmit}>
          <label htmlFor=''>your name</label>
          <input type='text' placeholder='enter ur name' name='name'/>
          <label htmlFor=''>your Email</label>
          <input type='text' placeholder='enter ur email' name='email'/>
          <label htmlFor=''>write ur message</label>
          <textarea name='message' rows='5' placeholder='enter ur message'></textarea>
          <button className='contact-submit' type='submit'>submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
