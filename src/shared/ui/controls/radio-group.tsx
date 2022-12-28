import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroupbBase from '@mui/material/RadioGroup'
import { styled } from '@mui/material/styles'

import { CheckIcon } from 'shared/icons/check'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'

import { ExplanationFont, XLFont } from '../typography'

interface Props {
  type: string
  label: string
  options: {
    value: string | number
    label: string
    labelExplanation?: string
  }[]
}

export const RadioGroup = ({ type, label, options }: Props) => {
  return (
    <FormControl>
      <FormLabel id={`${type}-label`}>
        <Label>{label}</Label>
      </FormLabel>
      <RadioGroupbBaseStyled aria-labelledby={`${type}-label`} name={type}>
        {options.map(option => (
          <FormControlLabel
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
      </RadioGroupbBaseStyled>
    </FormControl>
  )
}

const Label = styled(XLFont)(({ theme }) => ({
  marginBottom: pxToRem(64),
  color: theme.palette.text.primary,
}))

const RadioGroupbBaseStyled = styled(RadioGroupbBase)(({ theme }) => ({
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [32, null, null, null, null, null, 48],
  }),
}))

const RadioStyled = styled(Radio)(({ theme }) => ({
  padding: pxToRem(4),
  transition: 'color .2s',
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
    margniRight: [40, null, null, null, null, null, 117],
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
