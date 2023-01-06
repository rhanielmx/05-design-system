import { ComponentProps } from 'react'
// import { TooltipRoot, TooltipTrigger } from './styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { Box } from '../Box'
import { TooltipContent, TooltipArrow, TooltipTrigger } from './styles'
import { Text } from '../Text'

export interface TooltipProps {
  triggerText: string
  contentText: string
}

export function Tooltip({ triggerText, contentText }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={500}>
      <TooltipPrimitive.Root>
        <TooltipTrigger asChild>
          <Box>
            <Text size="md">{triggerText}</Text>
          </Box>
        </TooltipTrigger>
        <TooltipPrimitive.Portal>
          <TooltipContent sideOffset={5}>
            <Text size="sm">{contentText}</Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
