import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../StyleSheets/DesignSection.css';

interface DesignSectionProps {
  className2: string;
  designName: string;
  designDesc: string;
  designButtonText: string;
  designBottomText: string;
  designImage: string;
  colorStyle: string;
  linkTo: string;
}

export const DesignSection: React.FC<DesignSectionProps> = ({
  className2,
  colorStyle,
  designName,
  designDesc,
  designButtonText,
  linkTo,
  designBottomText,
  designImage,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-80px 0px', // Adjust this value to change the trigger point
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerStyle = {
    backgroundColor: colorStyle,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={`designSectionContainer ${className2}`}
      style={containerStyle}
    >
      <div className="designSectionContent">
        <div className="leftSideDiv">
          <motion.div
            variants={itemVariants}
            className='textTitles'
          >
            <h1 className='textLeftHeader'>{designName}</h1>
            <p className='textLeftDesc'>{designDesc} </p>
            <Link to={linkTo} className='linkStyle'>
              {designButtonText}
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='bottomLeftDiv'
          >
            <p className='bottomLeftText'>{designBottomText}</p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="rightSideDiv"
        >
          <img src={designImage} alt={designName} className='imgStyleHolder' />
        </motion.div>
      </div>
    </motion.div>
  );
};
