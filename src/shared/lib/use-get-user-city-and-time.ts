import { useEffect, useState } from 'react'

export const useGetUserCityAndTime = () => {
  const [city, setCity] = useState('Almaty')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (...args) => {
          console.log('success navigator', args)
        },
        () => {
          console.log('error navigator')
        },
      )
    }
  }, [])

  return {
    city,
  }
}
