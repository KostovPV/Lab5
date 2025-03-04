import {
  ImageField,
  Link,
  Field,
  RichText,
  LinkFieldValue,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './AboutComponent.module.scss';

type AboutComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    image: ImageField;
    ctaLink: LinkFieldValue;
    altText: Field<string>;
  };
  params: {
    imageLeftAlignment?: string; 
    ImageLeftAlignment?: string; 
  };
};

const AboutComponent = ({ fields, params }: AboutComponentProps): JSX.Element => {
  const imageUrl =
    typeof fields.image.value === 'string' ? fields.image.value : fields.image.value?.src;

    console.log("imageLeftAlignment:", params);
  // const imageLeft = params.imageLeftAlignment === '1' || params.ImageLeftAlignment === '1';
  const imageLeft = params?.imageLeftAlignment === 'true' || params?.ImageLeftAlignment === 'true';


  const textContent = (
    <div key="text" className={styles.aboutContainer}>
      <h3>
        <RichText field={fields.heading} />
      </h3>
      <RichText tag="p" field={fields.description} />
      <div>
        <Link field={fields.ctaLink} className="button-default" />
      </div>
    </div>
  );

  const imageContent = (
    <div key="image" className={styles.aboutImageArea}>
      {imageUrl && <img src={imageUrl} />}
    </div>
  );

  return (
    <section className={styles.aboutArea}>
      <div className="container">
        <div className={styles.row}>
          {imageLeft ? [imageContent, textContent] : [textContent, imageContent]}
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
