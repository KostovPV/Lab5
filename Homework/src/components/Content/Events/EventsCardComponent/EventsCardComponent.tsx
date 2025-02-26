import { Field, ImageField, LinkField, Text, withDatasourceCheck, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './EventsCardComponent.module.scss';


type EventsCardProps = ComponentProps & {
  fields: {
    title: LinkField;
    description: Field<string>;
    image: ImageField;
    date: Field<string>;
    location: Field<string>;
    time: Field<string>;
    learnMoreLink: LinkField;
  };
};

const EventsCardComponent = ({ fields }: EventsCardProps): JSX.Element => {
  const eventImage =
    typeof fields.image.value === 'string'
      ? fields.image.value
      : fields.image.value?.src;

  return (
    <div className={styles.eventCard}>
      <div className={styles.imageWrapper}>
        <img src={eventImage} alt={fields.title.value?.text || 'Event Image'} />
        <span className={styles.eventDate}>{fields.date.value}</span>
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>
          <Link field={fields.title} />
        </h3>
        <div className={styles.meta}>
          <span>{fields.time.value}</span>
          <span>{fields.location.value}</span>
        </div>
        <Text tag="p" field={fields.description} className={styles.description} />
        <div className={styles.buttonWrapper}>
          <Link field={fields.learnMoreLink} className={styles.eventButton} />
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<EventsCardProps>(EventsCardComponent);