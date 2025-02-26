import { Field, ImageField, LinkField, Text, DateField, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './NewsCardComponent.module.scss';

type NewsCardProps = ComponentProps & {
  fields: {
    title: Field<string>;
    description: Field<string>;
    image: ImageField;
    date: Field<string>;
    views: Field<number>;
    comments: Field<number>;
    readMoreLink: LinkField;
  };
};

const NewsCardComponent = ({ fields }: NewsCardProps): JSX.Element => {


  const courseImage =
    typeof fields.image.value === 'string'
      ? fields.image.value
      : fields.image.value?.src;

  return (
    <div className={styles.newsCard}>
    <div className={styles.imageWrapper}>
      <img src={courseImage} alt={fields.title.value} />
    </div>
    <div className={styles.contentWrapper}>
      <Text tag="h3" field={fields.title} className={styles.title} />
      <div className={styles.meta}>
        <DateField field={fields.date} render={(date) => <span>{date?.toLocaleDateString()}</span>} />
        <span>{fields.views.value} views</span>
        <span>{fields.comments.value} comments</span>
      </div>
      <Text tag="p" field={fields.description} className={styles.description} />
      <div className={styles.buttonWrapper}>
        <Link field={fields.readMoreLink} className={styles.newsButton} />
      </div>
    </div>
  </div>
  
  );
};

export default NewsCardComponent;
