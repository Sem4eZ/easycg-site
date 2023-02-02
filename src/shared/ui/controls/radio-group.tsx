import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroupBase from '@mui/material/RadioGroup'
import { styled } from '@mui/material/styles'
import { ChangeEvent, forwardRef } from 'react'
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

export const RadioGroup = forwardRef(
  ({ type, label, options, ...rest }: Props, ref) => {
    const { watch, setValue } = useFormContext()
    const value = watch(type)

    const onChange = (e: ChangeEvent<HTMLInputElement>, value: string) => {
      setValue(type, value)
    }

    return (
      <FormControl fullWidth>
        <FormLabel id={`${type}-label`}>
          <Label>{label}</Label>
        </FormLabel>
        <RadioGroupBaseStyled
          ref={ref}
          aria-labelledby={`${type}-label`}
          {...rest}
          onChange={onChange}>
          {options.map(option => (
            <FormControlLabelStyled
              checked={value === option.value}
              key={option.label}
              value={option.value}
              control={
                <RadioStyled
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
        </RadioGroupBaseStyled>
      </FormControl>
    )
  },
)

const Label = styled(ModalTitle)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

const RadioGroupBaseStyled = styled(RadioGroupBase)(({ theme }) => ({
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

const RadioStyled = styled(Radio)(({ theme }) => ({
  display: 'flex',
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
