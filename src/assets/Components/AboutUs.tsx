
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pic from "/interiorHomepic.jpg";
import '../StyleSheets/AboutUs.css';

export const AboutUs: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="aboutUsContainer" id="about-us">
      <div className="aboutUsContent" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className='aboutUsHeaderDiv'
        >
          <h1 className='headerTitle'>Crafting Dream Spaces for Over a Decade</h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className='aboutUsInfoDiv'
        >
          <div className='aboutUsInfoContent'>
            <motion.div
              variants={itemVariants}
              className='infoTextDiv'
            >
              <p className='infoText'>For over a decade, we have been <span className='infoTextSpan'>passionately</span> dedicated to the art of crafting dream spaces. Our team of experts brings a wealth of <span className='infoTextSpan'>experience</span> and <span className='infoTextSpan'>creativity</span> to every project, transforming houses into personalized havens. </p>
              <p className='infoText'>Our team of <span className='infoTextSpan'>seasoned</span> experts, with years of collective experience, approaches each project with a unique blend of <span className='infoTextSpan'>passion</span> and precision. We go beyond the ordinary, delving into the intricacies of design to create not just houses but bespoke sanctuaries — spaces that encapsulate the individual <span className='infoTextSpan'>dreams</span> and <span className='infoTextSpan'>lifestyles</span> of our clients.</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='infoPictureDiv'
            >
              <img src={pic} alt="Interior Home" className='infoPicStyle' />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

