
import { redirect } from 'next/navigation'

export default function HomePage() {
  const isAuthenticated = true

  if (isAuthenticated) {
    redirect('/dashboard')
  }

  redirect('/login')
}