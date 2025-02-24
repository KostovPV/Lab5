import { Text, Field, ImageField, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './InfoComponent.module.scss';
import { useState, useEffect, useRef } from 'react';

type InfoComponentProps = ComponentProps & {
  fields: {
    infoBox1Label: Field<string>;
    infoBox1Count: Field<number>;
    infoBox2Label: Field<string>;
    infoBox2Count: Field<number>;
    infoBox3Label: Field<string>;
    infoBox3Count: Field<number>;
    infoBox4Label: Field<string>;
    infoBox4Count: Field<number>;
    backgroundImage: ImageField;
  };
};

const InfoComponent = ({ fields }: InfoComponentProps): JSX.Element => {
  const backgroundImage =
    typeof fields.backgroundImage.value === 'string'
      ? fields.backgroundImage.value
      : fields.backgroundImage.value?.src;

  const [infoBox1Count, setInfoBox1Count] = useState(0);
  const [infoBox2Count, setInfoBox2Count] = useState(0);
  const [infoBox3Count, setInfoBox3Count] = useState(0);
  const [infoBox4Count, setInfoBox4Count] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const animateCounter = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < target) {
        start += 1;
        setter(start);
      } else {
        clearInterval(interval);
      }
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setInfoBox1Count(0);
          setInfoBox2Count(0);
          setInfoBox3Count(0);
          setInfoBox4Count(0);
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
      animateCounter(fields.infoBox1Count?.value || 0, setInfoBox1Count);
      animateCounter(fields.infoBox2Count?.value || 0, setInfoBox2Count);
      animateCounter(fields.infoBox3Count?.value || 0, setInfoBox3Count);
      animateCounter(fields.infoBox4Count?.value || 0, setInfoBox4Count);
    }
  }, [
    isVisible,
    fields.infoBox1Count?.value,
    fields.infoBox2Count?.value,
    fields.infoBox3Count?.value,
    fields.infoBox4Count?.value,
  ]);

  return (
    <div
      ref={containerRef}
      className={styles.infoContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className={styles.infoContainerWrapper}>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2>
                <span className="counter">{infoBox1Count}</span>+
              </h2>
              <h4>
                <Text field={fields.infoBox1Label} />
              </h4>
            </div>
          </div>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2>
                <span className="counter">{infoBox2Count}</span>+
              </h2>
              <h4>
                <Text field={fields.infoBox2Label} />
              </h4>
            </div>
          </div>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2>
                <span className="counter">{infoBox3Count}</span>+
              </h2>
              <h4>
                <Text field={fields.infoBox3Label} />
              </h4>
            </div>
          </div>
          <div className={styles.infoContainerBox}>
            <div className={styles.infoContainerContent}>
              <h2>
                <span className="counter">{infoBox4Count}</span>+
              </h2>
              <h4>
                <Text field={fields.infoBox4Label} />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<InfoComponentProps>(InfoComponent);
