import { Field, Text, RichText, Placeholder, withDatasourceCheck, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './EventsComponent.module.scss';

type EventsComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
  };
  rendering: ComponentRendering;
};

const EventsComponent = ({ fields, rendering }: EventsComponentProps): JSX.Element => {
  const hasEventItems = !!rendering?.placeholders?.['events-list']?.length;

  return (
    <section className={styles.eventsSection}>
      <div className={styles.containerWrapper}>
        <Text tag="h3" field={fields.heading} className={styles.title} />
        <RichText field={fields.description} className={styles.description} />
        {hasEventItems && (
          <div className={styles.eventsContainer}>
            <Placeholder name="events-list" rendering={rendering} />
          </div>
        )}
      </div>
    </section>
  );
};

export default withDatasourceCheck()<EventsComponentProps>(EventsComponent);