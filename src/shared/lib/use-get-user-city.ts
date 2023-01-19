import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { IPINFO_TOKEN, IPINFO_URL } from 'shared/config/environment-variables'

const CITY_COOKIE_KEY = 'city'
export const useGetUserCity = () => {
  const [city, setCity] = useState<string>(
    Cookies.get(CITY_COOKIE_KEY)
      ? (Cookies.get(CITY_COOKIE_KEY) as string)
      : 'Detecting...',
  )

  useEffect(() => {
    Cookies.set(CITY_COOKIE_KEY, city, { expires: 1 })
  }, [city])

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
