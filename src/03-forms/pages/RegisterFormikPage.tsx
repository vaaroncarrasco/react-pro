import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css'

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{ 
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={(values) => { console.log(values) }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Debe ser mínimo de 2 caracteres')
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Campo requerido'),
          email: Yup.string()
            .email('El correo no tiene un formato válido')
            .required('Requerido'),
          password1: Yup.string()
            .min(2, 'Contraseña minimo 6 caracteres')
            .required('Requerido'),
          password2: Yup.string()
            .oneOf([ Yup.ref('password1') ], 'Passwords dont match')
            .required('Requerido'),
        })}
      >
        {({ handleReset }) => (
            <Form>
              <MyTextInput
                label="Name"
                name="name"
                placeholder="Jon Doe"
              />

              <MyTextInput
                label="Email"
                name="email"
                placeholder="your@email.com"
                type="email"
              />

              <MyTextInput
                label="Password"
                name="password1"
                placeholder="******"
                type="password"
              />

              <MyTextInput
                label="Confirm Password"
                name="password2"
                placeholder="******"
                type="password"
              />

              <button type="submit">Submit</button>
              <button type="button" onClick={ handleReset } >Reset</button>
            </Form>
        )}
      </Formik>
    </div>
  )
}
