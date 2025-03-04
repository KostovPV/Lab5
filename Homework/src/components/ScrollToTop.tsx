// import { useEffect, useState } from 'react';
// import styles from './ScrollToTop.module.scss';
// import { ArrowUpward } from '@mui/icons-material';

// const ScrollToTop = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <button className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
//       <ArrowUpward fontSize="large" />
//     </button>
//   );
// };

// export default ScrollToTop;


import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const startPosition = window.scrollY;
    const duration = 800; 
    let start: number | null = null;

    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const animateScroll = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / duration;

      if (progress < 1) {
        const easedProgress = easeInOutQuad(progress);
        window.scrollTo(0, startPosition * (1 - easedProgress));
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, 0);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
      <KeyboardArrowUpIcon fontSize="large" />
    </button>
  );
};

export default ScrollToTop;
