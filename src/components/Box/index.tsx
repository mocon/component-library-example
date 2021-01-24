import React, { ReactNode, FC, forwardRef, useRef } from 'react'
import clsx from 'clsx'
import { BoxStyled } from './styled'
import useCombinedRefs from '../../utils/useCombinedRefs'

type BoxProps = {
  as: string
  children?: ReactNode
}

const Box = forwardRef<FC, BoxProps>(({ as = 'div', children, ...other }, ref) => {
  const innerRef = useRef()
  const resolvedRef = useCombinedRefs(ref, innerRef)

  return (
    <BoxStyled as={as} className={clsx('Box')} ref={resolvedRef} {...other}>
      {children}
    </BoxStyled>
  )
})

export type { BoxProps }

export { Box }
