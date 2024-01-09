import { FormHelperText, TextField } from '@mui/material'
import { ChangeEventHandler } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
  name: string
}

export const PhoneInput = ({ name, ...rest }: Props) => {
  const {
    watch,
    setValue,
    formState: { isValid, errors },
  } = useFormContext()
  const value = watch(name)

  const onChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    setValue(name, e.target.value.replaceAll(/[^\d.+()]/g, ''))
  }

  const error = errors?.[name]
  return (
    <label {...rest}>
      <TextField
        id="phone"
        type="tel"
        label="phone number"
        variant="standard"
        error={Boolean(error)}
        onChange={onChange}
        value={value}
        fullWidth></TextField>

      {Boolean(error) && (
        <FormHelperText>{String(error?.message)}</FormHelperText>
      )}
    </label>
  )
}

// import { FormHelperText, TextField } from '@mui/material'
// import { ChangeEventHandler } from 'react'
// import { useFormContext } from 'react-hook-form'

// interface Props {
//   name: string
// }

// export const PhoneInput = ({ name, ...rest }: Props) => {
//   const {
//     watch,
//     setValue,
//     formState: { errors },
//   } = useFormContext()
//   const value = watch(name)

//   const onChange: ChangeEventHandler<HTMLInputElement> = e => {
//     const cleanedValue = e.target.value.replace(/[^a-zA-Z0-9@. ]/g, '') // Разрешаем ввод букв, цифр, символов "@", ".", и пробелов
//     setValue(name, cleanedValue)
//   }

//   const error = errors?.[name]

//   return (
//     <label {...rest}>
//       <TextField
//         id="email"
//         type="text"
//         label="phone number or email"
//         variant="standard"
//         error={Boolean(error)}
//         onChange={onChange}
//         value={value}
//         fullWidth
//         inputProps={{
//           maxLength: 50, // Устанавливаем максимальное количество символов
//         }}
//       />

//       {Boolean(error) && (
//         <FormHelperText>{String(error?.message)}</FormHelperText>
//       )}
//     </label>
//   )
// }
