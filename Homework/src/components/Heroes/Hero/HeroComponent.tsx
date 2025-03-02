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
    backgroundImage: ImageField;
  };
  params: {
    hideHeading?: string;
    buttonStyleClass?: string;
  };
};

const HeroComponent = (props: HeroComponentProps): JSX.Element => {
  const backgroundImage =
    typeof props.fields.backgroundImage.value === 'string'
      ? props.fields.backgroundImage.value
      : props.fields.backgroundImage.value?.src;

  const hideHeading = props.params.hideHeading === '1';

  const allowedColors = ['primary', 'danger', 'warning'];
  const buttonStyleValue = allowedColors.includes(
    props.params.buttonStyleClass?.toLowerCase().trim() ?? ''
  )
    ? props.params.buttonStyleClass!.toLowerCase().trim()
    : 'primary';

  return (
    <div className={styles.heroContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.container}>
        <div className={styles.content}>
          {!hideHeading && <Text tag="h1" field={props.fields.heading} className={styles.heading} />}
          <RichText field={props.fields.description} className={styles.description} />
          <Link
            field={props.fields.ctaLink}
            className={styles[buttonStyleValue]}
          />
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<HeroComponentProps>(HeroComponent);
