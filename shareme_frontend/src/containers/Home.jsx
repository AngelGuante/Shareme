import React, { useState, useEffect } from 'react'
import { Sidebar } from '../components'
import { HiMenu } from 'react-icons/hi'
import { AiFillAlipayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { userQuery } from '../utils/Sanity/Querys/userQuery'
import sanityClientApi from '../utils/Sanity/sanityClienteApi'

import logo from '../assets/logo.png'

const Home = () => {
    const [toggleSlidebar, setToggleSlidebar] = useState(false)
    const [user, setUser] = useState(null)

    const userInfo = localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()

    useEffect(() => {
        const query = userQuery(userInfo?.sub)

        sanityClientApi.fetch(query)
            .then(data =>
                setUser(data[0])
            )
    }, [])

    return (
        <div className='flex bg-gray-50 md:flex-col h-screen transition-height duration-75 ease-out'>
            <div className='hidden md:flex h-screen flex-initial'>
                <Sidebar user={user && user} />
            </div>
            <div className='flex flex-row md:hidden'>
                <HiMenu className='cursor-pointer'
                    fontSize={40}
                    onClick={() => setToggleSlidebar(true)} />
                <Link to="/">
                    <img src={logo}
                        alt='logo'
                        className='w-28' />
                </Link>
                <Link to={`user-profile/${user?._id}`}>
                    <img src={user?.image}
                        alt='logo'
                        className='w-28' />
                </Link>
                {
                    toggleSlidebar && (
                        <div className='fix w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
                            <div className='absolute w-full flex justify-end items-center p-2'>
                                <AiFillAlipayCircle fontSize={30}
                                    className='cursor-pointer'
                                    onClick={() => setToggleSlidebar(false)} />
                            </div>
                            <Sidebar user={user && user}
                                closeToggle={setToggleSlidebar} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Home