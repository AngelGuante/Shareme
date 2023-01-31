import React, { useState } from 'react'
import { Sidebar } from '../components'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const Home = () => {
    const [toggleSlidebar, setToggleSlidebar] = useState(false)

    return (
        <div className='flex bg-gray-50 md:flex-col h-screen transition-height duration-75 ease-out'>
            <div className='hidden md:flex h-screen flex-initial'>
                <Sidebar />
            </div>
            <div className='flex flex-row md:hidden'>
                <HiMenu className='cursor-pointer'
                    fontSize={40}
                    onClick={() => setToggleSlidebar(true)} />
                <Link to="/">
                    <img src={logo}
                        alt='logo'
                        className='w-28' />
                    <img src={logo}
                        alt='logo'
                        className='w-28' />
                </Link>
            </div>
        </div>
    )
}

export default Home