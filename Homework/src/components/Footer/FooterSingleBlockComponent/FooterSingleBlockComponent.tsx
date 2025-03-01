import { Text, Placeholder, Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './FooterSingleBlockComponent.module.scss';

type FooterSingleBlockComponentProps = ComponentProps & {
  fields: {
    title?: Field<string>;
    image?: ImageField;
  };
};

const FooterSingleBlockComponent = (props: FooterSingleBlockComponentProps): JSX.Element => {
  // console.log('Image Field:', props.fields.image);

  const imageSrc = typeof props.fields.image?.value === 'string' 
    ? props.fields.image.value 
    : props.fields.image?.value?.src || '';

  return (
    <div className={styles.footerSingleBlock}>
      {imageSrc ? (
        <img src={imageSrc} alt={'Footer Image'} className={styles.footerImage} />
      ) : (
        <h3 className={styles.title}>
          <Text field={props.fields.title} />
        </h3>
      )}
      <Placeholder name="footerSingleBlockData" rendering={props.rendering} />
    </div>
  );
};

export default FooterSingleBlockComponent;
