import { yupResolver } from '@hookform/resolvers/yup'
import { FormHelperText } from '@mui/material'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { confirmApplication } from 'shared/api/application'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { ButtonRipple } from 'shared/ui/button-ripple'
import { ConfirmingApplicationModal } from 'shared/ui/confirming-application-modal'
import { PhoneInput } from 'shared/ui/controls/phone-input'

import { ProjectFormSchema } from './schema'

interface ProjectFormInputs {
  name: string
  company: string
  phone: string
  email: string
  comment: string
}

const defaultValues: ProjectFormInputs = {
  name: '',
  company: '',
  phone: '',
  email: '',
  comment: '',
}

export const ProjectForm = () => {
  const { isMobileS } = useGetDevice()
  const formMethods = useForm<ProjectFormInputs>({
    mode: 'all',
    resolver: yupResolver(ProjectFormSchema),
    defaultValues,
  })

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  const {
    handleSubmit,
    setError,
    register,
    reset,
    formState: { isValid, errors }, //errors need for autocomplete validation
    control,
  } = formMethods

  const onSubmit: SubmitHandler<ProjectFormInputs> = async data => {
    confirmApplication(data)

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
              label="What’s your name?"
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
              id="company"
              label="Company’s name"
              variant="standard"
              {...register('company')}
              error={Boolean(errors?.company)}
            />
            {Boolean(errors?.company) && (
              <FormHelperText>{errors.company?.message}</FormHelperText>
            )}
          </label>

          <PhoneInput name="phone" />

          <label>
            <TextField
              id="email"
              type="email"
              label="E-mail"
              variant="standard"
              {...register('email')}
              error={Boolean(errors?.email)}
            />
            {Boolean(errors?.email) && (
              <FormHelperText>{errors.email?.message}</FormHelperText>
            )}
          </label>

          <label>
            <TextField
              id="comment"
              label="Comment (Optional)"
              variant="standard"
              {...register('comment')}
              error={Boolean(errors?.comment)}
            />
          </label>
        </FieldsContainer>

        <ButtonRipple
          fullWidth={isMobileS}
          style={{ justifySelf: 'start' }}
          type="submit"
          variant="contained">
          Sent us a message
        </ButtonRipple>
      </Form>

      <ConfirmingApplicationModal open={isOpen} onClose={closeModal} />
    </FormProvider>
  )
}

const Form = styled('form')(({ theme }) => ({
  width: '100%',
  ...getBreakpointsStylesByArray(theme, {
    paddingBottom: [146, 142, 240, null, 222, null, 247, null, 274],
  }),
}))

const FieldsContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [24, null, null, null, 40, 48, null, null, 64],
    paddingBottom: [48, null, 96, null, null, null, 104, 112, null],
  }),

  '& label>div': {
    width: '100%',
  },
}))
