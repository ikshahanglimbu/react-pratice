import React from 'react'
import { DiAndroid, DiCss3, DiFirebase, DiJava, DiJavascript, DiMongodb, DiNodejs, DiReact } from "react-icons/di";

const Tech = () => {
  return (
    <div className='mb-20'>


      <div className='hover:scale-110 ease-in transition-all duration-100
      hover:text-blue-900 '>

      <h1 className='text-4xl font-bold text-center mb-10 underline underline-offset-8
      decoration-red-600'>Technologies I use</h1>
      </div>

    
    <div className='grid grid-cols-4 place-items-center '>
      

     <DiReact size={130} className='hover:scale-110 ease-in transition-all duration-100 hover:text-pink-600'/>
     <DiJavascript size={130} className='hover:scale-110 ease-in transition-all duration-100 hover:text-yellow-500'/>
     <DiFirebase size={130} className='hover:scale-110 ease-in transition-all duration-100 hover:text-blue-900'/>
     <DiAndroid size={130} className='hover:scale-110 ease-in transition-all duration-100 hover:text-green-600 animate-bounce'/>
     <DiCss3 size={130} className='hover:scale-110 ease-in transition-all duration-100 hover:text-blue-900' />
     <DiMongodb size={130} className='hover:scale-110 ease-in transition-100 duraton-100 hover:text-green-500'/>
     <DiNodejs size={130} className='hover:scale-110 ease-in transition-all duration-100 hover:text-green-900'/>
     <DiJava size={130}className='hover:scale-110 ease-in transition-all duration-100 hover:text-red-600'/>



    </div>
    </div>
  )
}

export default Tech
