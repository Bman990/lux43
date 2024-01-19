import { useEffect, useState } from 'react';
import '../StyleSheets/Navbar.css';

export const CustomNavbar: React.FC = () => {
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
      </ul>
    </nav>
  );
};