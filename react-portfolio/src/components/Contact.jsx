import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#8a8d8c] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/1aK0LGbQ" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#d9cbb0]'>Contact</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-[#d9cbb0] border-2 hover:bg-[#d9cbb0] hover:border-[#d9cbb0] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
