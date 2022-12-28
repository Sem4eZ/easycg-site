import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroupbBase from '@mui/material/RadioGroup'
import { styled } from '@mui/material/styles'

import { CheckIcon } from 'shared/icons/check'
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
  gridRowGap: pxToRem(32),
  [theme.breakpoints.up('laptop')]: {
    gridRowGap: pxToRem(48),
  },
}))

const RadioStyled = styled(Radio)(({ theme }) => ({
  padding: pxToRem(4),
  marginRight: pxToRem(40),
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
  [theme.breakpoints.up('laptop')]: {
    marginRight: pxToRem(117),
  },
}))

const Check = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '24px',
  svg: {
    width: '16px',
    [theme.breakpoints.up('laptop')]: {
      width: '21px',
    },
  },
}))
