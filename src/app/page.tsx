import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
    <Link href="/for-server">
      For Server
    </Link>

    <Link href="/for-client">
      For Client
    </Link>
    </main>
  )
}
