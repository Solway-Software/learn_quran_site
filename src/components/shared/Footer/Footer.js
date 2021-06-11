import React from 'react';
import { MdPhone, MdEmail } from 'react-icons/md'
import { NavLink } from 'react-router-dom';


const Footer = () => (
    <div>
        <div className='footer-container'>
            <div className='footer__col1'>
                <h5 className='footer-col-title'>CONTACT US</h5>
                <div className='footer-co1__row'>
                    <img src='http://www.learnquran.com.au/vendor/local/imgs/icons/call.svg' />
                    <h6>UK: 44 20 8144 4409</h6>
                </div>
                <div className='footer-co1__row'>
                    <img src='http://www.learnquran.com.au/vendor/local/imgs/icons/whatsapp.svg' />
                    <h6>92 (306) 333 9999</h6>
                </div>
                <div className='footer-co1__row'>
                    <img src='http://www.learnquran.com.au/vendor/local/imgs/icons/mail.svg' />
                    <h6>info@learnquran.com.au</h6>
                </div>
                <div className='footer-col-title footer-col-margin'>LET'S GET SOCIAL!</div>
                <div className='footer-col__row'>
                    <a href='#' className='footer__social'>
                        <img src='http://www.learnquran.com.au/vendor/local/imgs/icons/skype.svg' />
                    </a>
                    <a href='#' className='footer__social'>
                        <img src='http://www.learnquran.com.au/vendor/local/imgs/icons/fb.svg' />
                    </a>
                    <a href='#' className='footer__social'>
                        <img src='http://www.learnquran.com.au/vendor/local/imgs/icons/twitter.svg' />
                    </a>
                    <a href='#' className='footer__social'>
                        <img src='http://www.learnquran.com.au/vendor/local/imgs/icons/yt.svg' />
                    </a>
                </div>
            </div>
            <div className='footer__col2'>
                <h5 className='footer-col-title'>QUICK LINKS</h5>
                <div className='footer-col'> 
                    <a src='/about' className='footer-col2-link'>About Us</a>
                    <a src='/' className='footer-col2-link'>Courses</a>
                    <a src='/packages' className='footer-col2-link'>Packages</a>
                    <a src='/' className='footer-col2-link'>WebPortal</a>
                    <a src='/' className='footer-col2-link'>Privacy Policy</a>
                    <a src='/' className='footer-col2-link'>Teacking Quality Assurance</a>
                    <a src='/' className='footer-col2-link'>FAQ's</a>
                </div>
                <div className='footer-col-title footer-col-margin'>LATEST ENROLLED STUDENTS</div>
                <div className='footer-col__row'>
                    <img src='https://live.staticflickr.com/65535/48172455632_923c3cc053_q.jpg' className='footer-col2-image-avater' />
                    <img src='https://live.staticflickr.com/65535/48172457612_861ecc911f_q.jpg' className='footer-col2-image-avater' />
                    <img src='https://live.staticflickr.com/65535/48172377191_8b8ce5ceae_q.jpg' className='footer-col2-image-avater' />
                </div>
            </div>
            <div className='footer__col3'>
                <h5 className='footer-col-title'>FREE DEMO CLASSES</h5>
                <form className='footer-col'>
                    <input type='text' placeholder='Your Name' className='footer-input-style' />
                    <input type='email' placeholder='Email Addres' className='footer-input-style' />
                    <input type='phone' placeholder='Phone Number' className='footer-input-style' />
                    <p>* For communication purposes only. We will never share your phone with anyone!</p>
                    <button className='footer-form-button'>SEND REQUEST</button>
                </form>
            </div>
        </div>
        <p className='copyright'>© Copyright 2019 Learn Quran Academy Australia. All Rights Reserved</p>
    </div>
)

export default Footer