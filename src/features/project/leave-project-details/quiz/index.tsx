import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useRef, useState } from 'react'
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form'

import { ArrowFatIcon } from 'shared/icons/arrow-fat'
import { SnowflakeIcon } from 'shared/icons/snowflake'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceArr } from 'shared/theme'
import { Modal } from 'shared/ui/modal/default'

import { LeaveProjectsDetailsInputs, getQuiz } from './quiz'
import { leaveProjectDetailsSchema } from './schema'

interface Props {
  buttonText: string
}

export const LeaveProjectDetails = ({ buttonText }: Props) => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const formMethods = useForm<LeaveProjectsDetailsInputs>({
    mode: 'onChange',
    resolver: yupResolver(leaveProjectDetailsSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      companyName: '',
    },
  })

  const {
    handleSubmit,
    setError,
    register,
    watch,
    reset,
    formState: { isValid, errors }, //errors need for autocomplete validation
  } = formMethods

  const onSubmit: SubmitHandler<LeaveProjectsDetailsInputs> = async data => {
    handleNext()
    alert(`Отправка данных на сервер: ${JSON.stringify(data, null, 2)}`)
  }

  const onErrors: SubmitErrorHandler<LeaveProjectsDetailsInputs> = () => {
    handleNext()
  }

  const [page, setPage] = useState(0)

  const questionRef = useRef<HTMLDivElement | null>(null)

  const quiz = getQuiz({ register, errors })

  const handleNext = () => {
    console.log('hanle next')

    setPage(prevPage => {
      if (prevPage === quiz.length - 2) {
        if (isValid) {
          return prevPage + 1
        }
        return prevPage
      }
      return prevPage + 1
    })
  }

  const handleBack = () => {
    if (page === 0) return
    setPage(prevPage => prevPage - 1)
  }

  useEffect(() => {
    setPage(0)
    reset()
  }, [open])

  useEffect(() => {
    const question = questionRef.current
    if (!question) return
    question.scrollTo({ top: 0 })
  }, [page])

  const showStepper = page !== 0 && page !== quiz.length - 1
  const showNextButton = page !== quiz.length - 1
  const showBackButton = page !== 0 && page !== 1 && page !== quiz.length - 1

  return (
    <>
      <Button onClick={openModal}>{buttonText}</Button>

      <ModalStyled
        title="Project details"
        hideTitle
        open={open}
        onClose={closeModal}
        hideLanguage>
        <FormProvider {...formMethods}>
          <FormStyled onSubmit={handleSubmit(onSubmit, onErrors)}>
            <Stepper show={showStepper}>
              {quiz.slice(1, quiz.length - 1).map((_page, i) => (
                <Icon key={i} active={i <= page - 1}>
                  <SnowflakeIcon />
                </Icon>
              ))}
            </Stepper>

            <Question ref={questionRef}>{quiz[page]}</Question>

            <Buttons showBackButton={showBackButton}>
              {showNextButton && <Button type="submit">next</Button>}
              {page === quiz.length - 1 && (
                <Button onClick={closeModal}>close</Button>
              )}
              <BackButton
                endIcon=""
                startIcon={<ArrowFatIcon />}
                type="button"
                onClick={handleBack}
                show={showBackButton}>
                back
              </BackButton>
            </Buttons>
          </FormStyled>
        </FormProvider>
      </ModalStyled>
    </>
  )
}

const ModalStyled = styled(Modal)(({ theme }) => ({
  '& .MuiDialog-paper': {
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
    ...getBreakpointsStylesByArray(theme, {
      paddingBottom: [27],
      height: ['100%', null, null, null, null, null, 1117],
      width: ['100%', null, null, null, null, null, 871],
      maxHeight: ['unset', null, null, null, null, null, '90vh'],
    }),
  },
  '& .MuiDialogContent-root': {
    padding: 0,
  },
}))

const Stepper = styled('div')<{ show: boolean }>(({ theme, show }) => ({
  display: 'flex',
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [16, null, 40, null, 64, null, 80],
    gap: [56, null, null, null, 80, null, 156],
    display: [show ? 'flex' : 'none', null, null, null, 'flex'],
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
  }),
  opacity: show ? '1' : '0',
}))

const Icon = styled('div')<{ active: boolean }>(({ theme, active }) => ({
  display: 'flex',
  ...getBreakpointsStylesByArray(theme, {
    height: [16, null, 24],
  }),
  color: active ? theme.palette.accent : theme.palette.text.disabled,
  transition: 'color .2s',
  '& svg': {
    height: '100%',
    width: 'auto',
  },
}))

const Question = styled('div')(({ theme }) => ({
  overflowY: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
  }),
}))

const Buttons = styled('div')<{ showBackButton: boolean }>(
  ({ theme, showBackButton }) => ({
    display: 'flex',
    maxWidth: '100%',
    overflowX: 'hidden',
    paddingTop: 40,
    paddingBottom: 24,
    gap: 24,
    ...getBreakpointsStylesByArray(theme, {
      flexDirection: ['row-reverse', null, null, null, null, null, 'column'],
      justifyContent: [showBackButton ? 'space-between' : 'end'],
      alignItems: ['flex-end'],
      paddingLeft: spaceArr,
      paddingRight: spaceArr,
    }),
  }),
)

const BackButton = styled(Button)<{ show: boolean }>(({ theme, show }) => ({
  color: theme.palette.text.secondary,
  opacity: show ? 1 : 0,
}))

const FormStyled = styled('form')(({ theme }) => ({
  display: 'grid',
  height: '100%',
  gridTemplateRows: 'auto 1fr auto',
}))
