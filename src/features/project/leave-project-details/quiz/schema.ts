import { object, string } from 'yup'

export const leaveProjectDetailsSchema = object({
  name: string(),
  email: string()
    .required('e-mail required')
    .email('incorrect e-mail')
    .lowercase('email must be lowercase'),
  phone: string(),
})
