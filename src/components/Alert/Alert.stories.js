// Alert.stories.js

import Alert from './Alert.vue'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Input/Alert',
  component: Alert,
}

const Template = (args) => ({
  components: { Alert },
  setup() {
    return { args }
  },
  template: '<Alert v-bind="args" />',
})

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  title: 'Success',
  text: 'This is a success alert message.',
}

export const Info = Template.bind({})
Info.args = {
  type: 'info',
  title: 'Info',
  text: 'This is a info alert message.',
}
