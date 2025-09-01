import { ButtonLwc } from '../__example__'

export default {
  title: 'Main/Button',
  component: 'c-button',
  argTypes: {
    label: {
      control: 'text',
    },
  },
  args: {
    label: 'Button label',
  },
}

const BaseTemplate = (args) => ButtonLwc(args)

export const Base = BaseTemplate.bind({})
