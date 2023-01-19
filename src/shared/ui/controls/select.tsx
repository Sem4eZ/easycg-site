import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import BaseSelect from '@mui/material/Select'
import { styled } from '@mui/material/styles'

import { CheckIcon } from 'shared/icons/check'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

import { ExplanationFont } from '../typography'

interface Props {
  label: string
  explanation?: string
  field: string
  options: {
    value: string | number
    label: string
    labelExplanation?: string
  }[]
  error?: string
}

export const Select = ({
  label,
  explanation,
  field,
  options,
  error,
  ...rest
}: Props) => {
  return (
    <FormControl fullWidth error={Boolean(error)}>
      <InputLabel id={`${field}-label`}>
        {label}
        {explanation && (
          <LabelExplanatoin variant="caption">{explanation}</LabelExplanatoin>
        )}
      </InputLabel>
      <BaseSelect
        labelId={`${field}-label`}
        id={field}
        variant="standard"
        {...rest}>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            <CheckIconWrapper className="CheckIcon">
              <CheckIcon />
            </CheckIconWrapper>

            {option.label}
            <LabelExplanatoin variant="caption">
              {option.labelExplanation}
            </LabelExplanatoin>
          </MenuItem>
        ))}
      </BaseSelect>
      {error && <FormHelperText>Error</FormHelperText>}
    </FormControl>
  )
}

export const CheckIconWrapper = styled('div')(({ theme }) => ({
  width: '16px',
  marginRight: '24px',
  '& svg': {
    width: '100%',
  },
  ...getBreakpointsStylesByArray(theme, {
    width: [16, null, null, null, null, null, 22, null, 56],
  }),
}))

const LabelExplanatoin = styled(ExplanationFont)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))
