import React from 'react'

function Contact() {
  return (
    <div className={`flex flex-col gap-5 h-[100vh] justify-center items-center text-black`}>
        <h1 className='text-3xl font-bold'>Contact Me</h1>
        <h2 className='font-semibold'>Created By <span className='text-red-500'>Anchit Julaniya</span></h2>
        <h2 className='font-semibold'>Email: <span className='text-blue-500 hover:cursor-pointer'>AnchitJulaniyaOfficial@gamil.com</span></h2>
        <h2 className='font-semibold'>Github Link:  <a className='text-blue-500' href="">Link</a></h2>
    </div>
  )
}

export default Contact