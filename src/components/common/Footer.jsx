import React from 'react'
import "../style/Footer.css"
import Photo from "../assets/Group 18.png"
import Photo1 from "../assets/Group 19.png"
import Logo from "../assets/Logo.png"
import Location from "../assets/Location.png"
import Message from "../assets/Message.png"
import Calling from "../assets/Calling.png"
import Payments from "../assets/image_17-removebg-preview.png"

import Facebook from "../assets/social/Facebook.png"
import Instagram from "../assets/social/Instagram.png"
import Twitter from "../assets/social/Twitter.png"
import linkedin from "../assets/social/linkedin.png"
import Union from "../assets/social/Union.png"

export default function Footer() {
  return (
    <div className='container'>
        <footer>
            <div style={{display: 'flex'}} className='footer-boxes'>
                <div className='footer-box1'>
                        <img src={Photo} alt="" className='footer-box1_photo1' />
                        <h2 className='footer-box1_title1'>Garden Care</h2>
                        <p className='footer-box1_desc1'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
               <div className='vertical-line'></div>
               <div className='footer-box1'>
                        <img src={Photo} alt="" className='footer-box1_photo1' />
                        <h2 className='footer-box1_title1'>Plant Renovation</h2>
                        <p className='footer-box1_desc1'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className='vertical-line'></div>
                <div className='footer-box1'>
                        <img src={Photo1} alt="" className='footer-box1_photo1' />
                        <h2 className='footer-box1_title1'>Watering Graden</h2>
                        <p className='footer-box1_desc1'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
            </div>    
            <div className='footer-contact'>
                <h1 className='footer-contact-title'>Would you like to join newsletters?</h1>
                <input className='footer-input' type="email" placeholder='enter your email address...' />
                <button className='footer-btn'>Join</button>
                <p className='footer-desc'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>    
        </footer>
        <div className='footer-green'>
            <img src={Logo} alt="" className='footer-logo' />
                <div style={{display:'flex'}} className='footer-green_boxes'>
                <div className='location'>
                <img src={Location} alt="" className='location'/>
                <p className='location-desc'>70 West Buckingham Ave. Farmingdale, NY 11735</p>
            </div>
            <div style={{display: 'flex'}} className='message'>
                <img src={Message} alt="" className='message1'/>
                <p className='message-contact'>contact@greenshop.com</p>
            </div>
            <div style={{display: 'flex'}} className='contact-me'>
                <img src={Calling} alt="" className='Calling' />
                <h2 className='Calling_desc'>+88 01911 717 490</h2>
            </div>
        </div>
        </div>
        <div className='about'>
        <div style={{display: 'flex'}} className='FAQ'>
        <div className='my_account'>
                    <h1 className='account-title'>My Account</h1>
                    <div className='account-nav'>
                    <p className='acc-item'>My Account </p>
                    <p  className='acc-item'>Our stores</p>
                    <p  className='acc-item'>Contact us</p>
                    <p  className='acc-item'>Career</p>
                    <p  className='acc-item'>Specials</p>
                    </div>
                </div>
                <div className='my_account1'>
                    <h1 className='account-title'>Help & Guide</h1>
                    <div className='account-nav'>
                    <p className='acc-item'>Help Center </p>
                    <p  className='acc-item'>How to Buy</p>
                    <p  className='acc-item'>Shipping & Delivery</p>
                    <p  className='acc-item'>Product Policy</p>
                    <p  className='acc-item'>How to Return</p>
                    </div>
                </div>
                <div className='my_account1'>
                    <h1 className='account-title'>Categories</h1>
                    <div className='account-nav'>
                    <p className='acc-item'>House Plants </p>
                    <p  className='acc-item'>Potter Plants</p>
                    <p  className='acc-item'>Seeds</p>
                    <p  className='acc-item'>Small Plants</p>
                    <p  className='acc-item'>Accessories</p>
                    </div>
                </div>
        </div>
        <div className='social-media'>
            <h1 className='soc'>Social Media</h1>
            <div className='social-icons'>
                <img src={Facebook} alt=""  className='social-items'/>
                <img src={Instagram} alt="" className='social-items' />
                <img src={Twitter} alt=""  className='social-items'/>
                <img src={linkedin} alt=""  className='social-items'/>
                <img src={Union} alt=""  className='social-items'/>
            </div>
        </div>
        <div className='we-accept'>
            <h1 className='we-accepct-title'>We Accept</h1>
            <img src={Payments} alt="" className='payment'/>
        </div>
        </div>
        <h1 className='accepts'>© 2021 GreenShop. All Rights Reserved.</h1>
    </div>
  )
}
