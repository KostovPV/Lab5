import {  LinkField, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './FooterSingleBlockData3Component.module.scss';

type FooterSingleBlockData3ComponentProps = ComponentProps & {
  fields: {
    staff: LinkField;
    courses: LinkField;
    categories: LinkField;
    terms: LinkField;
    privacy: LinkField;
  };
};

const FooterSingleBlockData3Component = (props: FooterSingleBlockData3ComponentProps): JSX.Element => (
  <div className={styles.footerLinks}>
    <p><Link field={props.fields.staff} className={styles.link} /></p>
    <p><Link field={props.fields.courses} className={styles.link} /></p>
    <p><Link field={props.fields.categories} className={styles.link} /></p>
    <p><Link field={props.fields.terms} className={styles.link} /></p>
    <p><Link field={props.fields.privacy} className={styles.link} /></p>
  </div>
);

export default FooterSingleBlockData3Component;