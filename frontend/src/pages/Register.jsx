import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRegisterMutation } from '../app/services/userSlicer';

const Register = () => {
    const [register, {data, isLoading, error}] = useRegisterMutation();

    const [userInfo, setUserInfo] = useState({
        username: "", email: "", password: "", confirmPassword: "",
    });

    //destruct from userInfo
    const { username, email, password, confirmPassword } = userInfo;

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo, [e.target.name]: e.target.value,
        });
    }

    const canSave = Boolean(username && email && password && confirmPassword);//checkpoint for all fields
    const isPasswordSame = Boolean(password && confirmPassword && password === confirmPassword);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!canSave) {
            toast.error("Please fill in all fields.");
            return;
        }
    
        if (!isPasswordSame) {
            toast.error("Passwords do not match.");
            return;
        }
        try {
            const userInfo = {
                username, email, password   
               }
            const res = await register(userInfo)
            
            // Simulate success notification for testing
        toast.success("Registration successful!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
            
        } catch (error) {
            toast.error(error);
        }
        
        
    }

    useEffect(() => {
        console.log({data, isLoading, error})
    }, [data, isLoading, error])

  return (
    <form className='flex flex-col gap-8'>

        <div className='flex flex-col gap-2'>

            <label htmlFor="username" className='sr-only'>Username: </label>
            <input type="text" id="username" name='username' value={username} onChange={handleChange} placeholder='username' autoComplete='on' minLength={3} />

            <label htmlFor="email" className='sr-only'>Email: </label>
            <input type="text" id="email" name='email' value={email} onChange={handleChange} placeholder='email' autoComplete='on' />

            <label htmlFor="password" className='sr-only'>Password: </label>
            <input type="text" id="password" name='password' value={password} onChange={handleChange} placeholder='password' minLength={6} />

            <label htmlFor="confirmPassword" className='sr-only'>Confirm Password: </label>
            <input type="text" id="confirmPassword" name='confirmPassword' value={confirmPassword} onChange={handleChange} placeholder='confirm password' minLength={6} />

        </div>

        <button type="submit" onClick={handleSubmit} disabled={!canSave || isLoading} className={`${!canSave && "bg-black/50"}`} >Register</button>
        <ToastContainer />
    </form>
  )
}

export default Register