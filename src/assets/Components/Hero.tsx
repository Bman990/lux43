import '../StyleSheets/Hero.css';
import { motion } from 'framer-motion';

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
    <section className="heroContainer">
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
        </motion.div>
      </div>
    </section>
  );
};