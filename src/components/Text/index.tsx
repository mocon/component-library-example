import React, { FC, HTMLAttributes, ReactChild, forwardRef, useRef } from 'react'
import clsx from 'clsx'
import { TextStyled } from './styled'
import useCombinedRefs from '../../utils/useCombinedRefs'

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  as?: string
  children?: ReactChild | ReactChild[]
}

export const Text: FC<TextProps> = forwardRef<FC, TextProps>(
  ({ as = 'p', children, ...other }, ref) => {
    const innerRef = useRef()
    const resolvedRef = useCombinedRefs(ref, innerRef)

    return (
      // @ts-ignore
      <TextStyled as={as} className={clsx('Text')} ref={resolvedRef} {...other}>
        {children}
      </TextStyled>
    )
  },
)
