import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Box } from '@ignite-ui-rhaniel/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    triggerText: '26',
    contentText: '26 de Outubro - Disponível',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const Unavaiable: StoryObj<TooltipProps> = {
  args: {
    triggerText: '26',
    contentText: '26 de Outubro - Indisponível',
  },
}
