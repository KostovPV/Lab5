import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ExampleComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    description: Field<string>;
  };
};

const ExampleComponent = (props: ExampleComponentProps): JSX.Element => {
  return (
    <div>
      <Text tag="h1" field={props.fields.heading} />
      <Text tag="p" field={props.fields.description} />
    </div>
  );
};

export default withDatasourceCheck()<ExampleComponentProps>(ExampleComponent);
