import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";



const Footer = () => {
  return (
    <footer className='fadeInUp-animation'>
        <div className='footer-container'>
            <div className='footer-list-container'>
                <div className='col1'>
                   <ul>
                        <div style={{display:"flex",columnGap:"1rem"}}>
                        <img src='https://tiimg.tistatic.com/images/l/0/logo_15678.gif' style={{borderRadius:"1rem",width:"4rem",objectFit:"fill"}}/>
                        <div>
                        <li style={{listStyleType:"none"}}>Bharat Auto Industries</li>
                        <li style={{listStyleType:"none"}}><i>GST : 27AAGFB0728C1ZY</i></li>
                        </div>
                        </div>
                   </ul>
                </div>
                <div className="col2">
                    <ul>
                        <li><FaLocationDot style={{paddingRight:"2px"}}/>Plot No.75/77, Shri Laxmi Sahakari Aoudyogik Vasahat Ltd.,</li>
                        <li>&emsp;Hatkanangale, Kolhapur - 416109, Maharashtra, India</li>
                    </ul>
                </div>
                <div className="col3">
                    <ul>
                    <li><IoIosCall style={{paddingRight:"2px"}}/><a href='tel:+9108045475247'>+91&nbsp;08045475247</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-base-container'> 
            ⓒ 2024 Bharat Auto Industries
        </div>
        </div>

    </footer>
  )
}

export default Footer