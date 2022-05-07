import React from 'react'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div 
      style={{ posation:"fixed"}}
      initial={{opacity:0 , x:0}}
      animate={{opacity:1 , x:100 ,transition:{duration:1}}}
      exit={{opacity:0 , x:0}}
    >
      <div>

        <h1 className='mt-5'>loren Learn about the programmes in other HSE campuses</h1>
      </div>
    </motion.div>
 
  )
}

export default Home