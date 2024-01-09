// import React, { useEffect, useState } from 'react';
// import '../StyleSheets/Navbar.css';
// import { Link } from 'react-router-dom';

// export const Navbar: React.FC = () => {
//   const [showBackground, setShowBackground] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const scrollThreshold = 50;

//       setShowBackground(scrollY > scrollThreshold);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navBarContainer ${showBackground ? 'showBackground' : ''}`}>
//       <div className={`companyDiv ${showBackground ? 'centerCompany' : ''}`}>
//         <button className='companyBtn'>Lux 43</button>
//       </div>

//       <ul className={`navUL ${showBackground ? 'showList' : ''}`}>
//         <li>
//           <button className="liBtn">About Us</button>
//         </li>
//         <li>
//           <button className="liBtn">Projects</button>
//         </li>
//         <li>
//           <Link to='/lux43/contact' className="liBtn">Contact Us</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

import React, { useEffect, useState } from 'react';
import '../StyleSheets/Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 50;

      setShowBackground(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
  
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <nav className={`navBarContainer ${showBackground ? 'showBackground' : ''}`}>
      <div className={`companyDiv ${showBackground ? 'centerCompany' : ''}`}>
        <button className='companyBtn' onClick={() => scrollToSection('home')}>
          Lux 43
        </button>
      </div>

      <ul className={`navUL ${showBackground ? 'showList' : ''}`}>
        <li>
          <button className="liBtn" onClick={() => scrollToSection('about-us')}>
            About Us
          </button>
        </li>
        <li>
          <button className="liBtn" onClick={() => scrollToSection('projects')}>
            Projects
          </button>
        </li>
        <li>
          <Link to='/lux43/contact' className='liBtn'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};