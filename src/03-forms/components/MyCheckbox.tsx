import { ErrorMessage, useField } from "formik"

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any; // optional -> any key: any value
}

export const MyCheckbox = ({ label, ...props }: Props) => {

  const [ field ] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input type="checkbox" { ...field } { ...props } />
        { label }
      </label>
      <ErrorMessage name={ props.name } component="span" />
    </>
  )
}
