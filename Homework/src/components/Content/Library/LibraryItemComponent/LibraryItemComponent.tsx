import { ImageField, Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './LibraryItemComponent.module.scss';
import React, { useState } from 'react';

type LibraryItemProps = ComponentProps & {
  fields: {
    title: Field<string>;
    price: Field<number>;
    image: ImageField;
    saleLabel?: Field<string>;
  };
};

const LibraryItemComponent = ({ fields }: LibraryItemProps): JSX.Element => {
  const [isPriceHovered, setIsPriceHovered] = useState(false);
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  const itemImage =
    typeof fields.image.value === 'string' ? fields.image.value : fields.image.value?.src;

  return (
    <div className={styles.libraryItem}>
      <div className={styles.libraryItemWrapper}>
        {/* Item Image */}
        <div className={styles.itemImage}>
          <img src={itemImage} alt={fields.title?.value} />
          {fields.saleLabel?.value && <span className={styles.onsale}>{fields.saleLabel.value}</span>}
        </div>

        {/* Item Content */}
        <div className={styles.itemContent}>
          {/* Clickable Title with Hover Effect */}
          <h4>
            <a
              href="/details"
              className={`${styles.titleText} ${isTitleHovered ? styles.hovered : ''}`}
              onMouseEnter={() => setIsTitleHovered(true)}
              onMouseLeave={() => setIsTitleHovered(false)}
            >
              <Text field={fields.title} />
            </a>
          </h4>

          {/* Price Button with Hover Effect */}
          <a
            href="/"
            className={`${styles.priceText} ${isPriceHovered ? styles.hovered : ''}`}
            onMouseEnter={() => setIsPriceHovered(true)}
            onMouseLeave={() => setIsPriceHovered(false)}
          >
            {isPriceHovered ? 'ADD TO CART' : <Text field={fields.price} />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LibraryItemComponent;
