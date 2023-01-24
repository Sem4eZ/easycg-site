import { yupResolver } from '@hookform/resolvers/yup'
import { FormHelperText } from '@mui/material'
import Button from '@mui/material/Button/Button'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { services } from 'entities/services/data'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { Select } from 'shared/ui/controls'
import { PhoneInput } from 'shared/ui/controls/phone-input'

import { leaveProjectDetailsSchema } from './schema'

interface LeaveProjectsDetailsInputs {
  name: string
  email: string
  phone: string
  projectType: string[]
  message: string
}

export const LeaveProjectDetailsPlain = () => {
  const formMethods = useForm<LeaveProjectsDetailsInputs>({
    mode: 'all',
    resolver: yupResolver(leaveProjectDetailsSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectType: [],
      message: '',
    },
  })

  const {
    handleSubmit,
    setError,
    register,
    formState: { isValid, errors }, //errors need for autocomplete validation
    control,
  } = formMethods

  const onSubmit: SubmitHandler<LeaveProjectsDetailsInputs> = async data => {
    alert(`Отправка данных на сервер: ${JSON.stringify(data, null, 2)}`)
  }

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldsContainer>
          <label>
            <TextField
              id="name"
              label="your name*"
              variant="standard"
              {...register('name')}
              error={Boolean(errors?.name)}
            />
            {Boolean(errors?.name) && (
              <FormHelperText>{errors.name?.message}</FormHelperText>
            )}
          </label>

          <label>
            <TextField
              id="email"
              type="email"
              label="e-mail*"
              variant="standard"
              {...register('email')}
              error={Boolean(errors?.email)}
            />
            {Boolean(errors?.email) && (
              <FormHelperText>{errors.email?.message}</FormHelperText>
            )}
          </label>

          <PhoneInput name="phone" />

          <Select
            label="select type of project"
            explanation="(you can chose few)"
            field="projectType"
            options={services.map(service => ({
              value: service.type,
              label: service.name,
              labelExplanation: service.nameExplanation,
            }))}
            {...register('projectType')}
            error={errors?.projectType?.message}
          />

          <label>
            <TextField
              id="message"
              label="write us a message"
              variant="standard"
              {...register('message')}
              error={Boolean(errors?.message)}
            />
          </label>
        </FieldsContainer>

        <Button style={{ justifySelf: 'start' }} type="submit">
          send
        </Button>
      </Form>
    </FormProvider>
  )
}

const Form = styled('form')(({ theme }) => ({
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [48, null, null, null, 80, 73, 110, null, 153, 148],
  }),
}))

const FieldsContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [24, null, null, null, 40, 48, 97, null, 80],
  }),
  '& label>div': {
    width: '100%',
  },
}))
