import { useEffect, useState } from 'react'

export default function Greeting() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 0 && hour < 12) {
      setGreeting('Bom Dia! / Good Morning!')
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Boa Tarde! / Good afternoon!')
    } else {
      setGreeting('Boa Noite! / Good evening!')
    }
  }, [])

  return <h1 className='text-center'>{greeting}</h1>
}
