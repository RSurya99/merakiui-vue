// Alert.stories.js

import Alert from './Alert.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Input/Alert',
  component: Alert,
};

export const Default = () => ({
  components: { Alert },
  template: '<Alert type="success" text="Hey, this is a success alert!" />',
});