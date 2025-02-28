import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './CopyriteComponent.module.scss';

type CopyriteComponentProps = ComponentProps & {
  fields: {
    copyrightText: Field<string>;
    createdByText: Field<string>;
    createdByLink: Field<string>;
    privacyTermsText: Field<string>;
  };
};

const CopyriteComponent = ({ fields }: CopyriteComponentProps): JSX.Element => {
  return (
    <div className={styles.footerArea}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.leftColumn}>
            <span>
              <Text field={fields.copyrightText} />
              {' '}
              <Text field={fields.createdByText} />
              {' '}
              <a href={fields.createdByLink?.value} target="_blank" rel="noopener noreferrer">
                {fields.createdByLink?.value}
              </a>
            </span>
          </div>
          <div className={styles.rightColumn}>
            <span>
              <Text field={fields.privacyTermsText} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<CopyriteComponentProps>(CopyriteComponent);
