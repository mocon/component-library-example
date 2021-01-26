import React, { FC, forwardRef, useRef } from 'react'
import clsx from 'clsx'
import { TextStyled, TextStyledProps } from './styled'
import useCombinedRefs from '../../utils/useCombinedRefs'

export type TextProps = TextStyledProps

export const Text: FC<TextProps> = forwardRef<FC, any>(({ as = 'p', children, ...other }, ref) => {
  const innerRef = useRef()
  const resolvedRef = useCombinedRefs(ref, innerRef)

  return (
    <TextStyled as={as} className={clsx('Text')} ref={resolvedRef} {...other}>
      {children}
    </TextStyled>
  )
})
