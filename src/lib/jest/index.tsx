/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactElement } from 'react'

// Libraries
import { RenderOptions, render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

// Misc
import theme from 'lib/styled-components/theme'

const AllTheProviders: FC<any> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  })

export * from '@testing-library/react'

export { customRender as render }
