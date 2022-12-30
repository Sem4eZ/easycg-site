import { useEffect, useState } from 'react'

import { IPINFO_TOKEN, IPINFO_URL } from 'shared/config/environment-variables'

export const useGetUserCity = () => {
  const [city, setCity] = useState('Almaty')

  useEffect(() => {
    const fetchInfo = async () => {
      const url = `${IPINFO_URL}?token=${IPINFO_TOKEN}`
      const response = await fetch(url)
      const data = await response.json()

      if (data) {
        setCity(data.city)
      }
    }

    fetchInfo()
  }, [])

  return {
    city,
  }
}
