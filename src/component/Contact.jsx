import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'motion/react';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "6f8d6fd0-07a8-409b-b01f-6f3c4d0e684e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Succesfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.success(data.message)
            setResult("");
        }
    };
  return (
      <motion.div initial={{opacity:0, x:-200 }} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once: true}}  className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact' >
          
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center' >Contact <span className='underline underline-offset-4 decoration-1 under font-light' >With Us </span></h1>
        <p className='text-center text-gray-500 mb-12 m-w-80 mx-auto' >Ready to Make a Move? Let's Build Your Future Together </p>
        
          <form  onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8' >
              <div className='flex flex-wrap' >
                  <div className='w-full md:w-1/2 text-left md:pl-4'  >
                        Your Name
                       <input  className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='text'  name='Name'  placeholder='Your Name  ' required />
                  </div>
                  <div className='w-full md:w-1/2 text-left md:pl-4'  >
                        Your Email
                       <input  className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='Email'  name='Email'  placeholder='Your Email  ' required />
                  </div>
                 
                 
              </div>
               <div className='my-6 text-left md:pl-4' >
                  Message
                  <textarea  className='w-full border border-gray-500 rounded py-3 px-4  mt-2 h-48 resize-none' name='Message' placeholder='Message' required >
                      
                  </textarea>
              </div>
              <button className='bg-blue-600 text-white py-2 px-12  rounded' >{ result ? result : "Send message"}</button>
          </form>



      </motion.div>
      
  )
}

export default Contact
