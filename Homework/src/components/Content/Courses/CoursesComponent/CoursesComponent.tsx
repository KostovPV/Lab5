import {
  Field,
  Text,
  RichText,
  Link,
  Placeholder,
  withDatasourceCheck,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './CoursesComponent.module.scss';

type CoursesComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
    ctaLink: Field<{ href: string; text: string; target?: string }>;
  };
  rendering: ComponentRendering;
};

const CoursesComponent = ({ fields, rendering }: CoursesComponentProps): JSX.Element => {
  const hasCourses = !!rendering?.placeholders?.['course-list']?.length;

  return (
    <section className={styles.courseSection}>
      <div className={styles.containerWrapper}>
        <Text tag="h3" field={fields.heading} className={styles.title} />
        <RichText field={fields.description} className={styles.description} />

        {hasCourses && (
          <div className={styles.courseContainer}>
            <Placeholder name="course-list" rendering={rendering} />
          </div>
        )}

        <div className={styles.buttonWrapper}>
          <Link field={fields.ctaLink} className="button-default" />
        </div>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<CoursesComponentProps>(CoursesComponent);
