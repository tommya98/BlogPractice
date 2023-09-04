import { StoryFn, Meta } from '@storybook/react';
import { RegisterBlogDialog } from '.';

export default {
  title: 'Molecules/RegisterBlogDialog',
  component: RegisterBlogDialog,
} as Meta<typeof RegisterBlogDialog>;

const Template: StoryFn<typeof RegisterBlogDialog> = (args) => <RegisterBlogDialog {...args} />;

export const Default = Template.bind({});
