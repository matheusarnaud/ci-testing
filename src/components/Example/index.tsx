// React
import { FC } from 'react'

// Libraries
import styled from 'styled-components'

const TestStyled = styled.h1`
  background-color: ${({ theme }) => theme.colors.red};
`

const Example: FC = () => <TestStyled>Example 4</TestStyled>

export default Example
