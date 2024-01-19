import '../StyleSheets/Hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="heroContainer" id="home">
      <div className="heroContent">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='textDiv'
        >
          <motion.h1
            variants={itemVariants}
            animate
            className='textName'
          >
            Lux 43
          </motion.h1>

          <motion.p
            variants={itemVariants}
            animate
            className='textSlogan'
          >
            Transforming Spaces, Creating Homes
          </motion.p>

          <Link to='contact' className='heroBtn'>Contact Us</Link>
        </motion.div>
      </div>
    </section>
  );
};