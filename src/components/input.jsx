import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
},ref){
    const id = useId()
    return (
        <div className='w-full'>
            {
                label && <label className='inline-block mb-1 pl-1'
                htmlFor={id}>
                    {label}
                </label>
            }
            <input
            type='text'
            ref={ref}
            {...props}
            id={id}
            className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-grey-50 duration-200 border border-grey-200 w-full ${className}`}
            />
        </div>
    )
})
export default Input
