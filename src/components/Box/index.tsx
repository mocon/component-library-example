import React, { FC, HTMLAttributes, ReactNode, forwardRef, useRef } from 'react'
import clsx from 'clsx'
import { BoxStyled } from './styled'
import useCombinedRefs from '../../utils/useCombinedRefs'

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: string
  children?: ReactNode
}

export const Box: FC<BoxProps> = forwardRef<FC, BoxProps>(
  ({ as = 'div', children, ...other }, ref) => {
    const innerRef = useRef()
    const resolvedRef = useCombinedRefs(ref, innerRef)

    return (
      // @ts-ignore
      <BoxStyled as={as} className={clsx('Box')} ref={resolvedRef} {...other}>
        {children}
      </BoxStyled>
    )
  },
)
