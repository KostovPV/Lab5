import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './FooterSingleBlockData2Component.module.scss';

type FooterSingleBlockData2ComponentProps = ComponentProps & {
  fields: {
    phone: Field<string>;
    email: Field<string>;
    webpage: Field<string>;
    adress: Field<string>;
  };
};

const FooterSingleBlockData2Component = (props: FooterSingleBlockData2ComponentProps): JSX.Element => (
  <div className={styles.footerContact}>
    <p className={styles.contactItem}><strong></strong> <Text field={props.fields.phone} /></p>
    <p className={styles.contactItem}><strong></strong> <Text field={props.fields.email} /></p>
    <p className={styles.contactItem}><strong></strong> <Text field={props.fields.webpage} /></p>
    <p className={styles.contactItem}><strong></strong> <Text field={props.fields.adress} /></p>
  </div>
);

export default withDatasourceCheck()<FooterSingleBlockData2ComponentProps>(FooterSingleBlockData2Component);