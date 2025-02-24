import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './FunFactorComponent.module.scss';
import { useState, useEffect, useRef } from 'react';

type FunFactorComponentProps = ComponentProps & {
  fields: {
    funCounter: Field<number>;
    funText: Field<string>;
  };
};

const FunFactorComponent = ({ fields }: FunFactorComponentProps): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const animateCounter = (target: number) => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < target) {
        start += 1;
        setCounter(start);
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setCounter(0);
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateCounter(fields.funCounter?.value || 0);
    }
  }, [isVisible, fields.funCounter?.value]);

  return (
    <div ref={containerRef} className={styles.funFactorContainer}>
      <h2 className={styles.counter}>{counter}+</h2>
      <h4 className={styles.text}>
        <Text field={fields.funText} />
      </h4>
    </div>
  );
};

export default withDatasourceCheck()<FunFactorComponentProps>(FunFactorComponent);
