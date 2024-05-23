import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from 'react';

function About() {
    const [flag, setFlag] = useState(true);
    const toggle = () => {
        setFlag(!flag);
    }
  return (
    <div className = {`flex flex-col justify-center items-center duration-300 px-24 py-20`}>
        <h1 className = "text-4xl font-bold my-4">About us</h1>
        <div className = 'border-[1px] border-grey-300 w-full  duration-300'> 
            <div onClick = {toggle} className='hover:cursor-pointer border-b-[1px] py-3 duration-300 h-[40px] duration-500 border-grey-300 flex items-center justify-between px-4 w-full'>
                <span className="text-black font-bold">Analyse your text</span>
                <span>{flag?<FaAngleDown /> : <FaAngleUp />}</span>
            </div>
            <div className = {`${flag ? "flex" : "hidden"} py-3 duration-500 border-b-[1px] border-grey-300  items-center justify-between duration-300 px-4 w-full`}>
            Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.
            </div>
            
            <div onClick = {toggle} className='hover:cursor-pointer border-b-[1px] duration-300 py-3 border-grey-300 flex items-center justify-between px-4 w-full'>
                <span className="text-black font-bold">Free To Use</span>
                <span>{flag?<FaAngleDown />:<FaAngleUp />}</span>
            </div>
            <div className = {`${flag ? "flex" : "hidden"} duration-300 py-3 border-b-[1px] border-grey-300  items-center justify-between px-4 w-full`}>
            TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.</div>
            
            <div onClick = {toggle} className='hover:cursor-pointer border-b-[1px] duration-300 py-3 border-grey-300 flex items-center justify-between px-4 w-full'>
                <span className="text-black font-bold">Browser Compatible</span>
                <span>{flag?<FaAngleDown />:<FaAngleUp />}</span>
            </div>
            <div className = {`${flag ? "flex" : "hidden"} duration-300 py-3 border-b-[1px] border-grey-300  items-center justify-between px-4 w-full`}>
            This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.
            </div>
            

        </div>
    </div>
  )
}

export default About