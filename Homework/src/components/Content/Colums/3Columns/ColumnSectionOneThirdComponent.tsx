import { withDatasourceCheck, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './ColumnSectionOneThirdComponent.module.scss';

type ColumnSectionOneThirdComponentProps = ComponentProps & {};

const ColumnSectionOneThirdComponent = (
  props: ColumnSectionOneThirdComponentProps
): JSX.Element => (
  <div className={styles.columnSectionContainer}>
    <div className={styles.column}>
      <Placeholder name="column1" rendering={props.rendering} />
    </div>
    <div className={styles.column}>
      <Placeholder name="column2" rendering={props.rendering} />
    </div>
    <div className={styles.column}>
      <Placeholder name="column3" rendering={props.rendering} />
    </div>
  </div>
);

export default withDatasourceCheck()<ColumnSectionOneThirdComponentProps>(
  ColumnSectionOneThirdComponent
);
