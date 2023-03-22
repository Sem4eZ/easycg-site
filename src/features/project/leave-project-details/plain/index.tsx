import { yupResolver } from '@hookform/resolvers/yup'
import { FormHelperText } from '@mui/material'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { services } from 'entities/services/data'

import { confirmApplication } from 'shared/api/application'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { ButtonRipple } from 'shared/ui/button-ripple'
import { ConfirmingApplicationModal } from 'shared/ui/confirming-application-modal'
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

const defaultValues: LeaveProjectsDetailsInputs = {
  name: '',
  email: '',
  phone: '',
  projectType: [],
  message: '',
}

export const LeaveProjectDetailsPlain = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  const formMethods = useForm<LeaveProjectsDetailsInputs>({
    mode: 'all',
    resolver: yupResolver(leaveProjectDetailsSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    setError,
    register,
    reset,
    formState: { isValid, errors }, //errors need for autocomplete validation
    control,
  } = formMethods

  const onSubmit: SubmitHandler<LeaveProjectsDetailsInputs> = async ({
    message,
    projectType,
    ...data
  }) => {
    confirmApplication({
      ...data,
      projectType: projectType.toString(),
      comment: message,
    })

    openModal()
    reset(defaultValues)
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

        <ButtonRipple
          style={{ justifySelf: 'start' }}
          type="submit"
          variant="contained">
          send
        </ButtonRipple>
      </Form>

      <ConfirmingApplicationModal open={isOpen} onClose={closeModal} />
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
