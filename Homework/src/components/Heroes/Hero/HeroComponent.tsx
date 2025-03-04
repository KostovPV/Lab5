import { useState, useEffect } from 'react';
import {
  Text,
  Field,
  Link,
  withDatasourceCheck,
  RichText,
  ImageField,
  LinkFieldValue,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './HeroComponent.module.scss';

type HeroComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    ctaLink: LinkFieldValue;
    backgroundImages: ImageField[];
  };
  params: {
    hideHeading?: string;
    buttonStyleClass?: string;
  };
};

const HeroComponent = (props: HeroComponentProps): JSX.Element => {
  const backgroundImages =
    props.fields.backgroundImages && props.fields.backgroundImages.length > 0
      ? props.fields.backgroundImages
          .map((img) => (typeof img.value === 'string' ? img.value : ''))
          .filter((url) => url)
      : ['/media/img/heroImage.webp', '/media/img/infoComponentBackground.webp'];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 800); // Matches animation duration
    }, 20000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      setIsTransitioning(false);
    }, 800);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);
      setIsTransitioning(false);
    }, 800);
  };

  const backgroundImage = backgroundImages[currentImageIndex] || backgroundImages[0];

  const hideHeading = props.params.hideHeading === '1';
  const buttonStyleValue =
    ['primary', 'danger', 'warning'].includes(props.params.buttonStyleClass ?? '')
      ? props.params.buttonStyleClass!
      : 'primary';

  return (
    <div className={styles.heroContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isTransitioning ? styles.fadeOutUp : styles.fadeInDown}`}>
          {!hideHeading && <Text tag="h1" field={props.fields.heading} className={styles.heading} />}
          <RichText field={props.fields.description} className={styles.description} />
          <Link field={props.fields.ctaLink} className={styles[buttonStyleValue]} />
        </div>
      </div>

      {/* 🚀 Static Navigation Buttons (NO Animation) */}
      <button className={styles.prevButton} onClick={prevImage}>‹</button>
      <button className={styles.nextButton} onClick={nextImage}>›</button>
    </div>
  );
};

export default withDatasourceCheck()<HeroComponentProps>(HeroComponent);
