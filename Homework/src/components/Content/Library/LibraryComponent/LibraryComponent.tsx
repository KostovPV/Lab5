import {
  Field,
  Text,
  RichText,
  Placeholder,
  withDatasourceCheck,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './LibraryComponent.module.scss';

type LibraryComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
  };
  rendering: ComponentRendering;
};

const LibraryComponent = ({ fields, rendering }: LibraryComponentProps): JSX.Element => {
  const hasLibraryItems = !!rendering?.placeholders?.['library-items']?.length;

  return (
    <section className={styles.librarySection}>
      <div className={styles.containerWrapper}>
        <Text tag="h3" field={fields.heading} className={styles.title} />
        <RichText field={fields.description} className={styles.description} />

        {hasLibraryItems && (
          <div className={styles.libraryContainer}>
            <Placeholder name="library-items" rendering={rendering} />
          </div>
        )}
      </div>
    </section>
  );
};

export default withDatasourceCheck()<LibraryComponentProps>(LibraryComponent);
