import '../css/Footer.css';
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { RiLinkedinFill } from 'react-icons/ri'
import { FiMail } from 'react-icons/fi'
import {Link} from 'react-router-dom'
 

function Footer() {
    return (
        <div>
            <footer>
                
                <div className="footer_container">
                    <div className="f_logo_container">
                        <img src="https://firebasestorage.googleapis.com/v0/b/flight-booking-d4fcf.appspot.com/o/footer_logo.png?alt=media&token=6cd2e361-a00e-40e2-8321-edd8bba1a776"/>
                        <div className="f_icon_container">
                            <a href="#" target="_blank"><FaFacebookF className="f_icon"/></a>
                            <a href="#" target="_blank"><BsInstagram className="f_icon" /></a>
                            <a href="#" target="_blank"><RiLinkedinFill className="f_icon" /></a>
                            <a href="#" target="_black"><FiMail className="f_icon" /></a>
                        </div>
                    </div>

                    <div className="item_conteiner" >
                        <div className="f_item_1" >
                            <ul>
                                <li>Company</li>
                                <li><a href="#" target="_blank">About Us</a></li>
                                <li><a href="#" target="_blank">Careers</a></li>
                            </ul>
                        </div>

                        <div className="f_item_1" >
                            <ul>
                                <li>Our services</li>
                                <li><a href="#" target="_blank">Flight Tickets</a></li>
                                <li><a href="#" target="_blank">Indian Hotels</a></li>
                            </ul>
                        </div>

                        <div className="f_item_1" >
                            <ul>
                                <li>Quick Links</li>
                                <li><a href="#" target="_blank">Blog</a></li>
                                <li><a href="#" target="_blank">Support</a></li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="footer_line">
                    <hr></hr>
                </div>
                
                




                <div className="copy_rights">
                    <p>copyright © 2022 Skynoveau Technology</p>
                    <p>All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer