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

  const handleDownload = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    const downloadLink = document.createElement('a')
    downloadLink.href =
      'https://firebasestorage.googleapis.com/v0/b/easy-admin-28c89.appspot.com/o/terms_of_service.pdf?alt=media&token=aeefe42a-f799-41e3-8ba6-df75091b1084'
    downloadLink.download = 'Terms and Conditions'
    downloadLink.target = '_blank' // Открывает ссылку в новом окне или вкладке
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldsContainer>
          <Input id="name" label="what’s your name?" name="name" />

          <Input id="company" label="company’s name" name="company" />

          <PhoneInput name="phone" />

          <Input id="email" type="email" label="e-mail" name="email" />

          <Input id="comment" label="comment" name="comment" />
        </FieldsContainer>
        <ButtonRipple
          fullWidth={isMobileS}
          style={{
            justifySelf: 'start',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
          type="submit"
          variant="contained">
          send us a message
        </ButtonRipple>
      </Form>
      {/* <PrivacyPolicy>
        By sending this message you agree <br />
        to our <button onClick={handleDownload}>privacy policy</button> of
        personal data
      </PrivacyPolicy> */}

      <ConfirmingApplicationModal open={isOpen} onClose={closeModal} />
    </FormProvider>
  )
}

const Form = styled('form')(({ theme }) => ({
  width: '100%',
  ...getBreakpointsStylesByArray(theme, {
    paddingBottom: [20, 20, 20, null, 20, null, 20, null, 20],
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

const PrivacyPolicy = styled('div')(({ theme }) => ({
  marginTop: '10px',
  marginLeft: '1rem',
  '& button': {
    cursor: 'pointer',
    border: 'none',
    // fontWeight: 700,
    textDecoration: 'underline',
  },
}))
