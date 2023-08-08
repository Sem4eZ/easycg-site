import { object, string } from 'yup'

export const ProjectFormSchema = object({
  name: string().required('Name is required'),
  company: string().required('Name is required'),
  phone: string().required('Phone is required'),
  email: string()
    .required('Email is required')
    .email('Wrong email')
    .lowercase('Email must be lowercase'),
})
