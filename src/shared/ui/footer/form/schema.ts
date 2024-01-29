import { object, string } from 'yup'

export const ProjectFormSchema = object({
  name: string().required('name is required'),
  company: string().required('name is required'),
  // phone: string().required('Phone is required'),
  email: string()
    .required('e-mail required')
    .email('incorrect e-mail')
    .lowercase('email must be lowercase'),
})
