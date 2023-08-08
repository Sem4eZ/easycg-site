import { object, string } from 'yup'

export const leaveProjectDetailsSchema = object({
  name: string(),
  email: string()
    .required('Email is required')
    .email('Wrong email')
    .lowercase('Email must be lowercase'),
  phone: string(),
})
