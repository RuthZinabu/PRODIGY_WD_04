"use client"

import   { useState } from 'react'
 

const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] =useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState([]); 

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
      
        const res = await fetch("api/contact", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            message,
          }),
        });
      
        
        if (!res.ok) {
          setError(error);
          return;
        }
      
        // Safely handle cases where the response might be empty
        const text = await res.text();
        const data = text ? JSON.parse(text) : null;
      
        if (data && data.msg) {
          setError(data.msg);
        } else {
          setError(error);
        }
      };

      
      
    
  return (
    <> 
       <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8
                        rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id="contact">
          

               <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
                <h2 className='text-5xl font-bold text-[#66FCF1] mb-4'>Let&aposs connect</h2>
                <p className='text-white/70 mb-6'>Send me a message and lets schedule a call!</p>


                <form
                 onSubmit={handleSubmit}
                  className='space-y-4'>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#66FCF1]'
                               placeholder='First Name'
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                                name='name'
                                type='text'/>
                         <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#66FCF1]'
                               placeholder='Last Name'
                               onChange={(e) => setLastName(e.target.value)} 
                               value={lastName}
                               name='name' 
                               type='text' />
                         <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#66FCF1]'
                                placeholder='Email' 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email}
                                name='email' 
                                type='email'/>
                         <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#66FCF1]'
                                placeholder='Phone'
                                onChange={(e) => setPhone(e.target.value)} 
                                value={phone}
                                name='phone'
                                type='number'/>
                    </div>
                    <textarea className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#66FCF1]'
                    placeholder='Your Message' 
                    onChange={(e) => setMessage(e.target.value)} 
                    value={message}
                    />
                    <button className='bg-[#3184d1] hover:bg-[#66FCF1] text-white px-6 py-2 w-full font-semibold text-xl rounded-xl '>
                        Send Message</button>
                </form>
                <div className='bg-black flex flex-col mt-5  rounded-xl'>
  {
    Array.isArray(error) && error.length > 0 && (
      error.map((e, index) => (
        <div key={index} className='text-red-600 px-5 py-2'>
          {e}
        </div>
      ))
    )
  }
</div>


               </div>
       </div>
    </>
  )
}

export default Contact

