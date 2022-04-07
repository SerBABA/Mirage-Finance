import { FieldAttributes, useField } from 'formik';
import { Input, InputWrapper, InputError } from './InputField.elements';

type InputFieldProps = { type: string; style?: React.CSSProperties } & FieldAttributes<{}>;

export const InputField = ({ placeholder, type, style, ...rest }: InputFieldProps) => {
  const [field, meta] = useField<{}>(rest);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <InputWrapper>
      <Input
        {...field}
        error={!!errorText}
        placeholder={placeholder}
        type={type}
        style={style}
        as={Input}
      />
      <InputError show={!!errorText}>{!!errorText ? <div>{errorText}</div> : null}</InputError>
    </InputWrapper>
  );
};
