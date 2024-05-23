import React, { useEffect } from 'react'
import { FaClipboard } from "react-icons/fa";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";



function Home() {
    const [text, setText] = useState('');
    const [wordCount, setwordCount] = useState(0);
    const [characterCount, setcharacterCount] = useState(0);
    const [timeTakenbytask, settimeTakenbytask] = useState(0);
    
    const removeExtraSpaces = ()=>{
        let nText = text;
        let newText = nText.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const wordCounter = () => {
        let nText = text;
        setwordCount(text.split(" ").filter(word => word !== "").length);
    }

    const characterCounter = () => {
        let nText = text;
        let a = nText.trim();
        let x = a.split(" ");
        let count = 0;
        for (let i = 0; i < x.length; i++) {
            count += x[i].length;
        }
        setcharacterCount(count);
    }
    useEffect(() => {
        wordCounter();
        characterCounter();
    },[text])

  return (
    <div className='flex flex-col items-center py-8'>
        <h1 className='px-4 text-3xl md:text-4xl font-semibold pb-8 text-center'>TextUtils - Word Counter, Charecter Counter, Remove Extra Space</h1>
        <div className='w-full flex h-[100vh] md:h-[50vh] gap-8 px-8 flex-col md:flex-row p-1 '>
            <div className='w-full md:w-[1/2] h-full '>
                <h1 className='text-2xl text-orange-500 font-semibold pl-4'>Enter your Text here </h1>
                <div className=' h-[80%] relative'>
                    <textarea placeholder='Enter your text here...' value={text} onChange={(e)=>{setText(e.target.value)}} className='border-2 rounded-xl border-blue-500 outline-none p-2 w-full h-[100%]'>
                        
                    </textarea>
                    <span onClick={()=>{setText("")}} className={`${text.length>0?'flex':'hidden'} hover:bg-[rgb(0,0,0,0.2)] items-center justify-center rounded-full h-[30px] w-[30px] hover:text-red-500 hover:cursor-pointer   absolute top-3 right-1`}>
                        <IoClose className='hover:scale-125 duration-300 text-2xl' />
                    </span>
                    <span onClick={()=>{navigator.clipboard.writeText(text); alert("Copied to clipboard")}} className= 'hover:cursor-pointer hover:scale-110 duration-300 rounded-full hover:bg-[rgb(0,0,0,0.2)] p-2 absolute bottom-4 right-2'>
                        <FaClipboard className='text-xl' />
                    </span>
                </div>
                <div className='flex gap-4 items-center px-2 py-1'>
                    <button className='rounded-lg hover:bg-blue-600 bg-blue-500 text-white font-semibold px-4 py-1' onClick={()=>{setText(text.toUpperCase())}}>UpperCase</button>
                    <button className='rounded-lg hover:bg-blue-600 bg-blue-500 text-white font-semibold px-4 py-1' onClick={()=>{setText(text.toLowerCase())}}>LowerCase</button>
                    <button className='rounded-lg hover:bg-blue-600 bg-blue-500 text-white font-semibold px-4 py-1 ' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    
                </div>      
            </div>
            <div className='w-full md:w-[1/2]  h-full'>
                <h1 className='text-2xl text-orange-500 font-semibold pl-4'>Preview Document</h1>
                <div id="displayContainer" className='h-[80%] p-2 border-2  rounded-xl border-blue-500 w-full'>
                    <span className='bg-yellow-200'>{text}</span>
                </div>
            </div>
        </div>
        <div className='h-[100%] w-[1px] bg-black'></div>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 flex-col '>
                <h2 className='text-4xl font-semibold'>Summary of your Text</h2>
                <p className='pl-4'>Number of words: {wordCount}</p>
                <p className='pl-4'>Number of Characters: {characterCount}</p>
                <p className='pl-4'>Reading Time: {0}s</p>
            </div>
            
        </div>
    
    
    </div>
  )
}

export default Home