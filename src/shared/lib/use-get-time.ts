import { useEffect, useState } from 'react'

export const useGetUserTime = () => {
  const [time, setTime] = useState(new Date())
  const [timezone, setTimezone] = useState(-(time.getTimezoneOffset() / 60))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
      setTimezone(-(new Date().getTimezoneOffset() / 60))
    }, 30000)
    return () => {
      clearInterval(interval)
    }
  })

  return {
    timezone: timezone > 0 ? `+${timezone}` : timezone,
    time,
  }
}
