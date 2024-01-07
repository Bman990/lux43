// import '../StyleSheets/InfoSlider.css'


// export const InfoSlider: React.FC = () => {
//     return(
//         <section className="infoSliderSection">
//             <div className="infoSliderContent">
//                 <h1>Designing Your Perfect Home Interior</h1>
//                 <p>At our design studio, your satisfaction is paramount. We understand that personal preferences may evolve. That's why we offer a complimentary interior <span className='policyStyle'>redo policy</span>, ensuring your home reflects your evolving taste. No extra charges, just the flexibility to refine your space until it's a perfect match for your vision. </p>
//             </div>
//         </section>
//     )
// }

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../StyleSheets/InfoSlider.css';

export const InfoSlider: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-70px 0px', // Adjust this value to change the trigger point
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="infoSliderSection"
    >
      <div className="infoSliderContent">
        <h1>Designing Your Perfect Home Interior</h1>
        <p>
          At our design studio, your satisfaction is paramount. We understand
          that personal preferences may evolve. That's why we offer a
          complimentary interior{' '}
          <span className='policyStyle'>redo policy</span>, ensuring your home
          reflects your evolving taste. No extra charges, just the flexibility
          to refine your space until it's a perfect match for your vision.
        </p>
      </div>
    </motion.section>
  );
};
