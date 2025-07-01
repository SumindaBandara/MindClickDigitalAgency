import React from 'react'
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className='py-8 px-16'>
        <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#ffffff]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col justify-center p-16 gap-y-4"
        >
         <span className="block rounded-full px-2 py-1 text-xs  w-fit bg-[#febc26]">
            WEEKLY DISCOUNT
          </span> 
          <h2 className="text-6xl font-semibold">
          Elite Online Marketplace for Premium Items
          </h2>
          <p>
          Elevate Your Digital Lifestyle with Our Premium Accessories. Explore our range today and elevate your tech setup
          </p>
          
         </motion.div>
         <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="relative flex items-center justify-center"
        >
         <div className='relative flex'>
            <img
            src='/assets/hero/hero1.jpg'
            alt=''
            className='w-full h-full object-cover'
            />
          </div>
         </motion.div>
        </div>

    </section>
  )
}

export default Hero