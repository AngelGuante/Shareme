import React from "react"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logowhite.png'
import shareVideo from '../assets/share.mp4'
import jwt_decode from 'jwt-decode'
import sanityClientApi from '../utils/sanityClienteApi'

const Login = () => {
    const navidate = useNavigate()

    const btnGoogleAction = (respose, logged) => {
        if (logged) {
            const decoded = jwt_decode(respose.credential)
            const user = {
                _id: decoded['sub'],
                _type: 'user',
                userName: decoded['name'],
                image: decoded['picture']
            }

            console.log(user)
            sanityClientApi.createIfNotExists(user)
                .then(() => {
                    navidate('/', { replace: true })
                })
        }
    }

    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="w-full h-full">
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

            <div className="absolute flex flex-col justify-center top-0 right-0 left-0 bottom-0 items-center bg-blackOverlay">
                <img src={logo} width="130px" alt="logo" />
                <div className="p-5">
                    <GoogleOAuthProvider
                        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
                        <GoogleLogin
                            onSuccess={response => btnGoogleAction(response, true)}
                            onError={response => btnGoogleAction(response, false)} />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div >

    )
}

export default Login