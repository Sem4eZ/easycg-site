import { useEffect, useState } from 'react'

const getTimezoneDate = (offset: number) => {
  const d = new Date()

  const utc = d.getTime() + d.getTimezoneOffset() * 60000

  return new Date(utc + 3600000 * offset)
}

export const useGetTime = (offset: number) => {
  const [time, setTime] = useState(getTimezoneDate(offset))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimezoneDate(offset))
    }, 30000)
    return () => {
      clearInterval(interval)
    }
  })

  return {
    time,
  }
}
