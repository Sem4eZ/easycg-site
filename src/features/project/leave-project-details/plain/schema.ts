import { object, string } from 'yup'

export const leaveProjectDetailsSchema = object({
  name: string().required('name is required'),
  email: string()
    .required('e-mail required')
    .email('incorrect e-mail')
    .lowercase('email must be lowercase'),
  // phone: string().required('Phone is required'),
})
