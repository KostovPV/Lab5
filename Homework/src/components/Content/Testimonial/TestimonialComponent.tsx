import {
  Text,
  withDatasourceCheck,
  RichText,
  ImageField,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './TestimonialComponent.module.scss';

type TestimonialComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    author: Field<string>;
    image: ImageField;
    backgroundImage: ImageField;
  };
};

const TestimonialComponent = ({ fields }: TestimonialComponentProps): JSX.Element => {
  const imageUrl =
    typeof fields.image.value === 'string' ? fields.image.value : fields.image.value?.src;
  const backgroundImage =
    typeof fields.backgroundImage.value === 'string'
      ? fields.backgroundImage.value
      : fields.backgroundImage.value?.src;
  return (
    <div className={styles.testimonial} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.testimonialImage}>
        {fields.image?.value && <img src={imageUrl} alt="Testimonial image" />}
      </div>
      <div className={styles.right}>
        <div className={styles.testimonialContent}>
          <RichText field={fields.description} />
        </div>
        <div className={styles.author}>
          <Text field={fields.author} />
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<TestimonialComponentProps>(TestimonialComponent);
