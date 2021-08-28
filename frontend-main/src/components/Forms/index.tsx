import { FieldAttributes, useField } from "formik";
import { Input, InputWrapper, InputError } from "./forms.elements";

type MyFieldProps = { type: string; style?: React.CSSProperties } & FieldAttributes<{}>;

export const MyField: React.FC<MyFieldProps> = ({ placeholder, type, style, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

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
