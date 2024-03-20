import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  username: Yup.string().min(6,'Username must have at least 6 characters').required('Username is required'),
  password: Yup.string().min(8,'Password must have at least 8 characters').required('Password is required'),
  type: Yup.string().required('Type is required'),
})

export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
})