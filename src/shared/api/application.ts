import { API_URL } from 'shared/config/environment-variables'

interface Application {
  name: string
  email: string
  phone: string
  company?: string
  projectType?: string | string[]
  budget?: string
  comment?: string
}

export const confirmApplication = (data: Application) =>
  fetch(`${API_URL}/application`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data, null, 2),
    mode: 'no-cors', // Добавлен параметр mode
  })
