import { StoryFn, Meta } from '@storybook/react';
import { BlogBody } from '.';

export default {
  title: 'Atoms/BlogBody',
  component: BlogBody,
} as Meta<typeof BlogBody>;

const Template: StoryFn<typeof BlogBody> = (args) => <BlogBody {...args} />;

export const Default = Template.bind({});

Default.args = {
  body: '블로그 글',
};
