// eslint-disable-next-line no-unused-vars
import React from 'react'
import banner from "../../assets/banner.png";
export default function Banner() {
  return ( 
     <section className="w-full rounded-md mt-6">
     <img src={banner} className="w-full h-[600px] object-cover" />
   </section>
  )
}
