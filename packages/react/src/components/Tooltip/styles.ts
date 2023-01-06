import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipTrigger = styled(Tooltip.Trigger, {
  backgroundColor: '$gray600',
  color: '$white',
  padding: '$4 $6',
  width: 'fit-content',
  borderRadius: '$sm',
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',
  padding: '$3 $4',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
