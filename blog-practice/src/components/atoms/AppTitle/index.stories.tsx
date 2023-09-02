import { StoryFn, Meta } from '@storybook/react';
import { AppTitle } from '.';

export default {
  title: 'Atoms/AppTitle',
  component: AppTitle,
} as Meta<typeof AppTitle>;

const Template: StoryFn<typeof AppTitle> = () => <AppTitle />;

export const Default = Template.bind({});
