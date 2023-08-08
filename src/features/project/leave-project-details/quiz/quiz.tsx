import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

import { services } from 'entities/services/data'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { RadioGroup } from 'shared/ui/controls'
import { CheckboxGroup } from 'shared/ui/controls/checkbox-group'
import { PhoneInput } from 'shared/ui/controls/phone-input'

import { Announcement } from './ui/announcement'
import { InputQuestion } from './ui/input-question'

const budget = ['less than 500$', '500-2K$', '2K-5K$', 'over 5K']

export interface LeaveProjectsDetailsInputs {
  name: string
  email: string
  phone: string
  projectType: string
  budget: string
  companyName: string
}

interface Props {
  register: UseFormRegister<LeaveProjectsDetailsInputs>
  errors: Partial<FieldErrorsImpl<LeaveProjectsDetailsInputs>>
}

export const getQuiz = ({ register, errors }: Props) => {
  return [
    <Announcement
      title={
        <>
          hi there! <br /> let's talk?
        </>
      }
      description={
        <>
          let us ask you a few questions <br />
          and we'll write you back
        </>
      }
    />,
    <InputQuestion
      title={
        <>
          may we have
          <br />
          your name?
        </>
      }
      content={
        <Input
          fullWidth
          id="name"
          label="type your name"
          variant="standard"
          {...register('name')}
        />
      }
    />,
    <InputQuestion
      content={
        <CheckboxGroup
          type="projectType"
          label={
            <>
              kind a project
              <br />
              you have in mind?
            </>
          }
          options={services.map(service => ({
            value: service.type,
            label: service.name,
            labelExplanation: service.nameExplanation,
          }))}
        />
      }
    />,
    <InputQuestion
      content={
        <RadioGroup
          type="budget"
          label={
            <>
              what budget
              <br />
              do you have?
            </>
          }
          options={budget.map(budgetItem => ({
            value: budgetItem,
            label: budgetItem,
          }))}
        />
      }
    />,
    <InputQuestion
      title={
        <>
          how we will
          <br />
          get in touch?
        </>
      }
      content={
        <GetInTouchQuestions>
          <label style={{ display: 'block' }}>
            <Input
              fullWidth
              id="name"
              type="email"
              label="type your email*"
              variant="standard"
              {...register('email')}
              error={Boolean(errors?.email)}
            />
            {Boolean(errors?.email) && (
              <InputError className="Mui-error">
                {errors?.email?.message}
              </InputError>
            )}
          </label>

          <PhoneInputStyled name="phone" />

          <Input
            id="name"
            label="company’s name"
            variant="standard"
            {...register('companyName')}
          />
        </GetInTouchQuestions>
      }
    />,
    <Announcement
      title={<>ready!</>}
      description={<>we will write you back</>}
    />,
  ]
}

const GetInTouchQuestions = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    gap: [40, 10, 40, 10, 40, null, 18],
  }),
}))

const PhoneInputStyled = styled(PhoneInput)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [16, null, null, null, 25],
      lineHeight: [19, null, null, null, 30],
    }),
  },
  '& .MuiInput-input': {
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [16, null, null, null, 25],
      lineHeight: [19, null, null, null, 30],
      paddingBottom: [8, null, null, null, 16],
    }),
  },
}))

const Input = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [16, null, null, null, 25],
      lineHeight: [19, null, null, null, 30],
    }),
  },
  '& .MuiInput-input': {
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [16, null, null, null, 25],
      lineHeight: [19, null, null, null, 30],
      paddingBottom: [8, null, null, null, 16],
    }),
  },
}))

const InputError = styled('div')(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: 16,
  lineHeight: '19px',
  marginTop: 8,
}))
