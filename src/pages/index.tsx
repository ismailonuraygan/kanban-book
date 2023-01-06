import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header/Header'
import KanbanBoard from '../components/KanbanBoard/KanbanBoard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Before Sunset</title>
        <meta name="description" content="producter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      {/* Kanban Board */}
    </>
  )
}
