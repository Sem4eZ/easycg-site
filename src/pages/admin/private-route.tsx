// admin/private-route.tsx
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, Outlet } from 'react-router-dom'

// Изменено на Outlet
import app from '../../shared/firebase'

const auth = getAuth(app)

const PrivateRoute: React.FC = () => {
  const [user, loading] = useAuthState(auth)

  if (loading) return <div>Loading...</div>

  return user ? (
    <Outlet /> // Используем Outlet для вложенных маршрутов
  ) : (
    <Navigate to="/admin/login" replace />
  )
}

export default PrivateRoute
