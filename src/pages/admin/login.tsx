// Login.js
import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'

import app from '../../shared/firebase'

// Импортируйте настроенный firebase

const auth = getAuth(app)

const AdminLoginPage = () => {
  const [user, setUser] = useState({ username: '', password: '' })

  const handleLogin = async () => {
    try {
      // Аутентификация пользователя с использованием логина и пароля
      await signInWithEmailAndPassword(auth, user.username, user.password)

      // Если аутентификация прошла успешно, вы можете перенаправить пользователя на страницу Dashboard
      window.location.href = '/admin/posts'
    } catch (error) {
      alert('Неправильный логин или пароль')
      console.error('Ошибка аутентификации', error)
      // Обработка ошибок аутентификации
    }
  }

  return (
    <Container component="main" maxWidth={'xs' as any}>
      <Paper
        elevation={3}
        style={{
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h5">Login</Typography>
        <form style={{ width: '50%', marginTop: 20, padding: 10 }}>
          <TextField
            placeholder="login"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={user.username}
            onChange={e => setUser({ ...user, username: e.target.value })}
          />
          <TextField
            placeholder="password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            fullWidth
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
            onClick={handleLogin}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default AdminLoginPage
