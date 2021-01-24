import React, { ReactChild, FC, forwardRef, useRef } from 'react'
import clsx from 'clsx'
import { TextStyled } from './styled'
import useCombinedRefs from '../../utils/useCombinedRefs'

type TextProps = {
  as: string
  children: string | ReactChild
}

const Text = forwardRef<FC, TextProps>(({ as = 'p', children, ...other }, ref) => {
  const innerRef = useRef()
  const resolvedRef = useCombinedRefs(ref, innerRef)

  return (
    <TextStyled as={as} className={clsx('Text')} ref={resolvedRef} {...other}>
      {children}
    </TextStyled>
  )
})

export type { TextProps }

export { Text }
