import React from 'react'
import { LuTimerReset } from "react-icons/lu";
import { MdPerson4 } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";

const ServicesData= [
  {
   id:1,
   heading:"Real Logo, Real Fast",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, suscipit beatae! Pariatur possimus velit deleniti. Dolore a, quibusdam ducimus sint debitis praesentium aliquid maxime, error ipsa, ex atque vel voluptates?",
  icon:<LuTimerReset/>,
  },
  {
   id:2,
   heading:"Do it yourself",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, suscipit beatae! Pariatur possimus velit deleniti. Dolore a, quibusdam ducimus sint debitis praesentium aliquid maxime, error ipsa, ex atque vel voluptates?",
  icon:<MdPerson4/>,
  },
  {
   id:3,
   heading:"Get website-ready Logos",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, suscipit beatae! Pariatur possimus velit deleniti. Dolore a, quibusdam ducimus sint debitis praesentium aliquid maxime, error ipsa, ex atque vel voluptates?",
  icon: <IoIosRocket/>,
  }
];
const Services = () => {
  return (
    <div>
        <div className="container">
          <h1>Services</h1>
            <div className="grid grid-cols-1
             sm:grid-cols-2 md:grid-cols-3">
              {ServicesData.map(({id,heading,text,icon})=>(
                <div key = {id}>
                  <div>{icon}</div>
                  <h2>{heading}</h2>
                  <p>{text}</p>
                </div>
                

              ))}
             </div>
        </div>
    </div>
  )
}

export default Services