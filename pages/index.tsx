import { Layout } from '@/components/layouts'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <h1>Cookie Master</h1>
    </Layout>
  )
}
