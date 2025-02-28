import { withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './FooterMainInfoComponent.module.scss';

type FooterMainInfoComponentProps = ComponentProps & {};

const FooterMainInfoComponent = (props: FooterMainInfoComponentProps): JSX.Element => (
  <div className={styles.footerMainInfo}>
    <div className={styles.container}>
      <div className={styles.column}>
        <Placeholder name="footer-single-block-1" rendering={props.rendering} />
      </div>
      {/* <div className={styles.column}>
        <Placeholder name="footer-single-block-2" rendering={props.rendering} />
      </div>
      <div className={styles.column}>
        <Placeholder name="footer-single-block-3" rendering={props.rendering} />
      </div>
      <div className={styles.column}>
        <Placeholder name="footer-single-block-4" rendering={props.rendering} />
      </div> */}
    </div>
  </div>
);

export default withDatasourceCheck()<FooterMainInfoComponentProps>(FooterMainInfoComponent);