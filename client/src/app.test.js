// import App from './App'
import LoginPage from './pages/LoginPage'
import LoginForm from './components/Login/LoginForm'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

test('check if text is rendered', () => {
  render(<LoginPage />, { wrapper: BrowserRouter })
  expect(screen.getByText(/welcome, admin bcr/i)).toBeInTheDocument()
})

test('check if element email input form is rendered', () => {
  render(<LoginForm />, { wrapper: BrowserRouter })
  expect(screen.getByRole('input-email')).toBeInTheDocument()
})

test('check if element password input form is rendered', () => {
  render(<LoginForm />, { wrapper: BrowserRouter })
  expect(screen.getByRole('input-password')).toBeInTheDocument()
})

test('check if element button is rendered', () => {
  render(<LoginForm />, { wrapper: BrowserRouter })
  expect(screen.getByRole('button-login')).toBeInTheDocument()
})
