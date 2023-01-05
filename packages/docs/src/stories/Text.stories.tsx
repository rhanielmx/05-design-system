import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui-rhaniel/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatum, cumque velit praesentium corporis eaque, doloribus nesciunt obcaecati animi veniam quibusdam molestias tempore hic temporibus. Saepe maiores quibusdam et quas!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong',
    as: 'strong',
  },
}
