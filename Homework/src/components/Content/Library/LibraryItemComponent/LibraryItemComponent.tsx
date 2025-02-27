import { ImageField, Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './LibraryItemComponent.module.scss';

type LibraryItemProps = ComponentProps & {
  fields: {
    title: Field<string>;
    price: Field<number>;
    image: ImageField;
    saleLabel?: Field<string>;
  };
};

const LibraryItemComponent = ({ fields }: LibraryItemProps): JSX.Element => {
  const itemImage =
    typeof fields.image.value === 'string' ? fields.image.value : fields.image.value?.src;

  return (
    <div className={styles.libraryItem}>
      <div className={styles.libraryItemWrapper}>
        {/* Item Image */}
        <div className={styles.itemImage}>
          <img src={itemImage} alt={fields.title?.value} />
          {fields.saleLabel?.value && <span className={styles.saleLabel}>{fields.saleLabel.value}</span>}
        </div>

        {/* Item Content */}
        <div className={styles.itemContent}>
          <h4>
            <Text tag="span" field={fields.title} />
          </h4>
          <p>${fields.price?.value.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryItemComponent;
