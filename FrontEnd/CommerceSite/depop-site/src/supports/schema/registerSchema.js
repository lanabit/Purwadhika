import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required('Firstname is required'),
  lastName: Yup.string().required('Lastname is required'),
  email: Yup.string().email('Email must be valid').required('Email is required'),
  username: Yup.string().min(6,'Username must have at least 6 characters').required('Username is required'),
  password: Yup.string().min(8,'Password must have at least 8 characters').required('Password is required'),
})

export const loginSchema = Yup.object().shape({
  email: Yup.string().required('Email or username is required'),
  password: Yup.string().required('Password is required'),
})