import React from 'react'
import '../css/Navbar.css'
import { MdOutlineFlight } from 'react-icons/md'
import { RiHotelLine, RiPassportLine } from 'react-icons/ri'
import { TbDiscount2 } from 'react-icons/tb'
import { FiPhoneCall } from 'react-icons/fi'
import { IoIosContact } from 'react-icons/io'
import {MdFlight} from 'react-icons/md'


function Navbar() {
    return (
        <div>
            <div className='nav_main_cont'>
                <div className="nav_cont logo">
                    <h1><MdFlight className='logo_fli' />SkyTrip</h1>

                    <div className='i_cont'>
                        <div className='f_i_cont'>
                            <MdOutlineFlight className='n_icons' />
                            <p>Flights</p>
                        </div>
                        <div className='f_i_cont'>
                            <RiHotelLine className='n_icons' />
                            <p>Hotels</p>
                        </div>
                        <div className='f_i_cont'>
                            <RiPassportLine className='n_icons' />
                            <p>Passport</p>
                        </div>
                    </div>

                    <div className='i_cont'>
                        <div className='f_i_cont'>
                            <TbDiscount2 className='n_icons' />
                            <p>Offers</p>
                        </div>
                        <div className='f_i_cont '>
                            <FiPhoneCall className='n_icons cus_i' />
                            <p id="call_icon">Customer services</p>
                        </div>
                        <div className='f_i_cont login'>
                            <IoIosContact className='n_icons' />
                            <p>Login/SignUp</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar