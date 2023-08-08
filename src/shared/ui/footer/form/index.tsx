import { yupResolver } from '@hookform/resolvers/yup'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { confirmApplication } from 'shared/api/application'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { ButtonRipple } from 'shared/ui/button-ripple'
import { ConfirmingApplicationModal } from 'shared/ui/confirming-application-modal'
import { Input } from 'shared/ui/controls'
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
          <Input id="name" label="What’s your name?" name="name" />

          <Input id="company" label="Company’s name" name="company" />

          <PhoneInput name="phone" />

          <Input id="email" type="email" label="E-mail" name="email" />

          <Input id="comment" label="Comment (Optional)" name="comment" />
        </FieldsContainer>

        <ButtonRipple
          fullWidth={isMobileS}
          style={{ justifySelf: 'start' }}
          type="submit"
          variant="contained">
          Send us a message
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
