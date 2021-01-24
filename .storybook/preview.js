import React from 'react'
import { ThemeProvider } from 'styled-components'

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
}

// Entire app should be wrapped in <ThemeProvider theme={...} />
// See https://styled-system.com/theme-specification/#key-reference
export const decorators = [
  Story => (
    <ThemeProvider
      theme={{
        colors: {
          primary: '#1f4f46',
          text: '#2d2e2d',
          background: '#fafafa',
        },
        fontFamilies: {
          heading:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          body:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        },
        fontSizes: [12, 14, 16, 20, 24, 32],
        space: [0, 4, 8, 16, 32, 64],
      }}
    >
      <Story />
    </ThemeProvider>
  ),
]
