// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      text: string
      background: string
    }
    fontFamilies: {
      heading: string
      body: string
    }
    fontSizes: Array
    space: Array
  }
}
