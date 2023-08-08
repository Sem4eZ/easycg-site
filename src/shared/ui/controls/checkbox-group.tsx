import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import { styled } from '@mui/material/styles'
import { ChangeEvent, forwardRef, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { CheckIcon } from 'shared/icons/check'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'

import { ExplanationFont, ModalTitle } from '../typography'

interface Props {
  type: string
  label: React.ReactNode
  options: {
    value: string | number
    label: string
    labelExplanation?: string
  }[]
}

const getState = (options: Props['options'], values: string) => {
  const state: { [key: string]: boolean } = {}
  options.forEach(
    option => (state[option.value] = values.includes(String(option.value))),
  )
  return state
}

export const CheckboxGroup = forwardRef(
  ({ type, label, options, ...rest }: Props, ref) => {
    const { setValue, watch } = useFormContext()
    const value = watch(type)

    const [state, setState] = useState(getState(options, value))

    const onChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setState(prevState => ({ ...prevState, [e.target.value]: checked }))
    }

    useEffect(() => {
      setValue(
        type,
        Object.entries(state)
          .filter(([key, value]) => value)
          .map(([key, value]) => key)
          .join(', '),
      )
    }, [state])

    return (
      <FormControl fullWidth>
        <FormLabel id={`${type}-label`}>
          <Label>{label}</Label>
        </FormLabel>
        <FormGroupStyled ref={ref} aria-labelledby={`${type}-label`} {...rest}>
          {options.map(option => (
            <FormControlLabelStyled
              key={option.label}
              value={option.value}
              checked={state[option.value]}
              control={
                <CheckboxStyled
                  onChange={onChange}
                  checkedIcon={
                    <Check>
                      <CheckIcon />
                    </Check>
                  }
                />
              }
              label={
                <>
                  <b>{option.label}</b>
                  {option.labelExplanation && (
                    <ExplanationFont variant="caption">
                      {option.labelExplanation}
                    </ExplanationFont>
                  )}
                </>
              }
            />
          ))}
        </FormGroupStyled>
      </FormControl>
    )
  },
)

const Label = styled(ModalTitle)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

const FormGroupStyled = styled(FormGroup)(({ theme }) => ({
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [32, 18, 32, 18, 32, null, 18, null, null, 32],
  }),
}))

const FormControlLabelStyled = styled(FormControlLabel)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    borderBottom: [
      `1px solid ${theme.palette.text.disabled}`,
      null,
      null,
      'unset',
    ],
  }),
}))

const CheckboxStyled = styled(Checkbox)(({ theme }) => ({
  padding: pxToRem(4),
  transition: 'color .2s',
  height: 28,
  '& .MuiSvgIcon-root': {
    opacity: 0,
  },
  '~.MuiTypography-root': {
    color: theme.palette.text.secondary,
    transition: 'color .2s',
  },
  '&.Mui-checked': {
    color: theme.palette.text.primary,
    '~.MuiTypography-root': {
      color: theme.palette.text.primary,
    },
  },
  ...getBreakpointsStylesByArray(theme, {
    marginRight: [40, null, null, null, null, null, 117],
  }),
}))

const Check = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '24px',
  svg: {
    ...getBreakpointsStylesByArray(theme, {
      width: [16, null, null, null, null, null, 21],
    }),
  },
}))
