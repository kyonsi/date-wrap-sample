import { DateWrapper } from '../libs/date-wrapper'

export default function Home() {
    const date = new DateWrapper()
  return (
    <main>
    {date.getFullYear()}-{date.getMonth()+1}-{date.getDate()}
    </main>
  )
}
