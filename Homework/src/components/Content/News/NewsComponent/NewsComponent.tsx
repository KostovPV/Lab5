import { Field, Text, RichText, withDatasourceCheck, ComponentRendering, ImageField, LinkField, ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './NewsComponent.module.scss';
import NewsCardComponent from '../NewsCardComponent/NewsCardComponent';

// Type for individual news items
type NewsItemFields = {
  title: Field<string>;
  description: Field<string>;
  image: ImageField;
  date: Field<string>;
  views: Field<number>;
  comments: Field<number>;
  readMoreLink: LinkField;
};

// Type for a rendering that contains news fields
type NewsItemRendering = ComponentRendering & {
  fields: NewsItemFields;
  params?: ComponentParams;
};

// Type for the entire News Component
type NewsComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
  };
  rendering: ComponentRendering & {
    placeholders?: {
      'news-list'?: ComponentRendering[];
    };
  };
};

// Type guard to check if a rendering is a valid news item
const isValidNewsItem = (item: ComponentRendering | undefined): item is NewsItemRendering => {
  return (
    !!item?.fields &&
    'date' in item.fields &&
    typeof (item.fields.date as Field<string>).value === 'string'
  );
};

const parseDate = (dateField: Field<string> | undefined): number => {
  return dateField && typeof dateField.value === 'string'
    ? new Date(dateField.value).getTime()
    : 0;
};

const NewsComponent = ({ fields, rendering }: NewsComponentProps): JSX.Element => {
  if (!rendering?.placeholders?.['news-list']) {
    console.error("🚨 Error: 'news-list' placeholder is missing or undefined!");
    return <p className={styles.error}>No news items found.</p>;
  }

  // ✅ Extract valid news items
  const newsItems: NewsItemRendering[] = (rendering.placeholders['news-list'] ?? [])
    .filter(isValidNewsItem)
    .map((item) => item as NewsItemRendering);

  // console.log("📰 Valid News Items Before Sorting:", newsItems);

  // ✅ Sort news items in **descending** order by date (newest first)
  const sortedNewsItems = [...newsItems].sort((a, b) => parseDate(b.fields.date) - parseDate(a.fields.date));

  // console.log("📅 Sorted News Items (Newest First):", sortedNewsItems);

  return (
    <section className={styles.newsSection}>
      <div className={styles.containerWrapper}>
        <Text tag="h3" field={fields.heading} className={styles.title} />
        <RichText field={fields.description} className={styles.description} />

        {sortedNewsItems.length > 0 ? (
          <div className={styles.newsContainer}>
            {sortedNewsItems.map((newsItem, index) => (
              <NewsCardComponent 
                key={index} 
                fields={newsItem.fields} // ✅ Pass fields correctly
                rendering={newsItem} // ✅ Ensure rendering is passed
                params={newsItem.params || {}} // ✅ Provide empty object as fallback for `params`
              />
            ))}
          </div>
        ) : (
          <p className={styles.noNews}>No news available.</p>
        )}
      </div>
    </section>
  );
};

export default withDatasourceCheck()<NewsComponentProps>(NewsComponent);
