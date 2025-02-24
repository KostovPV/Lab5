import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './SubscribeComponent.module.scss';

type SubscribeComponentProps = ComponentProps & {
  fields: {
    title: Field<string>;
    subtitle: Field<string>;
    placeholderText: Field<string>;
    buttonText: Field<string>;
    formAction: Field<string>;
  };
};

const SubscribeComponent = ({ fields }: SubscribeComponentProps): JSX.Element => {
  return (
    <div className={styles.subscribeSection}>
      <div className={styles.additionalWrapper}>
        <div className={styles.subscribeInfo}>
          <div className={styles.subscribeInfoWrapper}>
            <h3>
              <Text field={fields.title} />
            </h3>
            <h2>
              <Text field={fields.subtitle} />
            </h2>
          </div>
        </div>
        <div className={styles.subscribeForm}>
          <form
            action={fields.formAction?.value}
            method="post"
            id="subscribeForm"
            name="subscribeForm"
            className="subscribeForm"
          >
            <div className={styles.subscribeFormIput}>
              <input
                id="mc-email"
                type="email"
                autoComplete="off"
                placeholder={fields.placeholderText?.value}
              />
              <button id="suscribeBtn" type="submit">
                <Text field={fields.buttonText} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<SubscribeComponentProps>(SubscribeComponent);
