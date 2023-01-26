import React from "react"
import { GoogleOAuthProvider } from '@react-oauth/google'
import useNavigate from 'react-router-dom'
import FcLogo from 'react-icons/fc'
import logo from '../assets/logo.png'
import shareVideo from '../assets/share.mp4'

const Login = () => {
    return (
        <div className="flex justify-start items-center flex-col h-screem">
            <div className="relative w-full h-full">
                <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
        //     <GoogleOAuthProvider clientId="153407916024-9pb9u6kgbbciug3o74q8l0pprdh7ba6u.apps.googleusercontent.com">

        //     </GoogleOAuthProvider>
    )
}

export default Login