import { Field, Text, RichText, Placeholder, withDatasourceCheck, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './NewsComponent.module.scss';

type NewsComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
  };
  rendering: ComponentRendering;
};

const NewsComponent = ({ fields, rendering }: NewsComponentProps): JSX.Element => {
  const hasNewsItems = !!rendering?.placeholders?.['news-list']?.length;

  return (
    <section className={styles.newsSection}>
      <div className={styles.containerWrapper}>
        <Text tag="h3" field={fields.heading} className={styles.title} />
        <RichText field={fields.description} className={styles.description} />
        {hasNewsItems && (
          <div className={styles.newsContainer}>
            <Placeholder name="news-list" rendering={rendering} />
          </div>
        )}
      </div>
    </section>
  );
};

export default withDatasourceCheck()<NewsComponentProps>(NewsComponent);
