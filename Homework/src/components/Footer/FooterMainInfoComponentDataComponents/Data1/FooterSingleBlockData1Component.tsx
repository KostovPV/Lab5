import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './FooterSingleBlockData1Component.module.scss';

type FooterSingleBlockData1ComponentProps = ComponentProps & {
  fields: {
    description: Field<string>;
    socialIcon1?: { value: string } | string;
    socialIcon2?: { value: string } | string;
    socialIcon3?: { value: string } | string;
    socialIcon4?: { value: string } | string;
    socialIcon5?: { value: string } | string;
  };
};

const extractIcon = (icon?: { value: string } | string): string => {
  return typeof icon === 'string' ? icon : icon?.value || '';
};

const FooterSingleBlockData1Component = (props: FooterSingleBlockData1ComponentProps): JSX.Element => {
  return (
    <div className={styles.footerData}>
      <Text field={props.fields.description} />
      <div className={styles.socialIcons}>
        {props.fields.socialIcon1 && (
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className={`zmdi ${extractIcon(props.fields.socialIcon1)}`}></i>
          </a>
        )}
        {props.fields.socialIcon2 && (
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className={`zmdi ${extractIcon(props.fields.socialIcon2)}`}></i>
          </a>
        )}
        {props.fields.socialIcon3 && (
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className={`zmdi ${extractIcon(props.fields.socialIcon3)}`}></i>
          </a>
        )}
        {props.fields.socialIcon4 && (
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className={`zmdi ${extractIcon(props.fields.socialIcon4)}`}></i>
          </a>
        )}
        {props.fields.socialIcon5 && (
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className={`zmdi ${extractIcon(props.fields.socialIcon5)}`}></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default FooterSingleBlockData1Component;
