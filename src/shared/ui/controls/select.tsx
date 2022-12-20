import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import BaseSelect from '@mui/material/Select'

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
}: Props) => {
  return (
    <FormControl fullWidth error={Boolean(error)}>
      <InputLabel id={`${field}-label`}>
        {label} {explanation && <span>{explanation}</span>}
      </InputLabel>
      <BaseSelect labelId={`${field}-label`} id={field} variant="standard">
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
            {option.labelExplanation}
          </MenuItem>
        ))}
      </BaseSelect>
      <FormHelperText>Error</FormHelperText>
    </FormControl>
  )
}
