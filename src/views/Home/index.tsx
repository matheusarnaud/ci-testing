import { FC, useEffect, useState } from 'react'

// Models

// Libraries

// Misc

// Components
import { Container } from './styled'

// Assets

const Home: FC = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    state ? setState(true) : setState(false)
  }, [state])

  return <Container>Welcome to Homepage!</Container>
}

export default Home
