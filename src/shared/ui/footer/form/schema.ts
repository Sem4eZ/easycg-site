import { object, string } from 'yup'

export const ProjectFormSchema = object({
  name: string().required('Name is required'),
  company: string().required('Name is required'),
  // phone: string().required('Phone is required'),
  email: string()
    .required('e-mail required')
    .email('incorrect e-mail')
    .lowercase('Email must be lowercase'),
})
