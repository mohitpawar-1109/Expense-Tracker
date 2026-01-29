import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

const Input = ({ value, onChange, label, placeholder, type }) => {
    const [ShowPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!ShowPassword);
    }
    return (
        <div>
            <label className='text-[13px] text-slate-800'>{label}</label>
            <div className="input-box">
                <input
                    type={type == 'password' ? ShowPassword ? 'text' : 'password' : type}
                    placeholder={placeholder}
                    className='w-full bg-transparent outline-none'
                    value={value}
                    onChange={(e) => onChange(e)}
                />
                {type === 'password' && (
                    <>
                        {ShowPassword ? (<FaRegEye
                            size={22}
                            className='text-primary cursor-pointer'
                                onClick={togglePasswordVisibility}
                                />) : (<FaRegEyeSlash
                            size={22}
                            className='text-slate-400 cursor-pointer'
                            onClick={togglePasswordVisibility}
                        />)}
                    </>
                )}
            </div>
        </div>
    )
}

export default Input