import React from 'react'
import 'tailwindcss/tailwind.css';
// import { RxDashboard } from "react-icons/rx";
// import { MdStars } from "react-icons/md";
// import { PiCalculator } from "react-icons/pi";
// import { TbBasketStar } from "react-icons/tb";
// import { RiTeamLine } from "react-icons/ri";
// import { MdContactMail } from "react-icons/md";
// import { MdAirplay } from "react-icons/md";
// import { MdOutlineForum } from "react-icons/md";
// import { BsPersonCheck } from "react-icons/bs";
import { FaBook } from "react-icons/fa";




const Sidebar = () => {
  return (
    <>
        <div style={{height : '123vh', width : '5%' , position : 'absolute', background : '#711217' , color : 'white'}}>
        <div style={{display : 'flex' , justifyContent : 'space-evenly'}}>
          <div className="ml-2.5">
            
          
          </div>
          <br />
          <div>
            {/* <h1 className="mainheading">Felix ITs</h1> */}
          </div>
        </div>
        <br /> <br />
        <div className="choosecontent">
          <div className="profilelogo"> <a href="Home page"><FaBook /></a>
          
          </div>
          <div>
            <h3 className="formatchange"> <a href="About us">About us</a></h3>
            <h4 className="formatchange1"> <a href="Contact us">Contact Us</a> </h4>
            
          </div>
        </div>


        
      </div>
    </>
  )
}

export default Sidebar
