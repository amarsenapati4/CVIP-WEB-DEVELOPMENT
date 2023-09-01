import React from 'react'
import logo from "../../logo.png"
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
import {IoIosNotificationsOutline} from 'react-icons/io'

const Header = () => {
  return (
    <nav className="h-24 bg-[#101010] flex items-center p-8 box-border justify-between">
    <img src={logo} alt="" className='h-full ' />
    <div className='w-full ml-[4vmax] text-white font-thin'>
        <Link to="/" className='font-bold'>Home</Link>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/newpopular">New & Popular</Link>
        <Link to="/mylist">My List</Link>
        <Link to="/language">Browse by Languages </Link>
    </div>
    <div className='flex items-center justify-between text-white w-[10%]'>
    <ImSearch className='cursor-pointer text-[1.5rem]'/>
    <Link to="/Children" className='font-thin'>Children</Link>
    <IoIosNotificationsOutline className='cursor-pointer text-[1.5rem]'/>
    </div>
    </nav>
  )
}

export default Header