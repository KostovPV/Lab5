import { Field, ImageField, LinkField, Text, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './NewsCardComponent.module.scss';

// Import Material Icons
import { CalendarToday, Visibility, Comment } from '@mui/icons-material';

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
  const newsImage =
    typeof fields.image.value === 'string'
      ? fields.image.value
      : fields.image.value?.src;

  return (
    <div className={styles.newsCard}>
      <div className={styles.imageWrapper}>
        <img src={newsImage} alt={fields.title.value} />
      </div>
      <div className={styles.contentWrapper}>
        <Text tag="h3" field={fields.title} className={styles.title} />

        {/* Meta Section with Icons */}
        <div className={styles.meta}>
          <span>
            <CalendarToday className={styles.icon} fontSize="small" /> {fields.date.value}
          </span>
          <span>
            <Visibility className={styles.icon} fontSize="small" /> {fields.views.value}
          </span>
          <span>
            <Comment className={styles.icon} fontSize="small" /> {fields.comments.value}
          </span>
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
