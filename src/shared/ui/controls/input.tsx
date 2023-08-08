import { FormHelperText, TextField, TextFieldProps } from '@mui/material'
import { ChangeEventHandler } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = TextFieldProps & {
  id: string
  name: string
}

export const Input = ({ name, ...rest }: Props) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext()
  const value = watch(name)

  const onChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    setValue(name, e.target.value, { shouldValidate: true })
  }

  const error = errors?.[name]

  return (
    <label>
      <TextField
        variant="standard"
        value={value}
        onChange={onChange}
        error={Boolean(errors?.[name])}
        {...rest}
      />
      {Boolean(error) && (
        <FormHelperText>{String(error?.message)}</FormHelperText>
      )}
    </label>
  )
}
