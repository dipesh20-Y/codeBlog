import React,{useId} from 'react'
import { forwardRef } from 'react'


function Input({
    label,
    className,
    type,
    placeholder,
    ...props
}, ref) {

    const id=useId()
  if (type=='textarea') {
    return (
        <div  className='flex flex-col my-4 gap-2 '>
    {label && <label 
    htmlFor={id}
    className=' text-lg'>{label}</label>}
    <textarea
    id={id}
    ref={ref}
    placeholder={placeholder}
    type={type}
    className={` border py-2 px-3 rounded-lg focus:border-blue-500 text-lg focus:outline-double min-h-60 resize-none `}
    {...props}
    />
   </div>
    )
  }else{
    return(
        <div className='flex flex-col my-4 gap-2 '>
    {label && <label className=' text-lg'>{label}</label>}
    <input
    id={id}
    ref={ref}
    placeholder={placeholder}
    type={type}
    className={`border py-2 px-3 rounded-lg focus:border-blue-500 text-lg focus:outline-none`}
    {...props}
    />
   </div>
    )
  }
}

export default forwardRef(Input)
