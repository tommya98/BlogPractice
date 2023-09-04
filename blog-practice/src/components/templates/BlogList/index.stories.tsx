import { StoryFn, Meta } from '@storybook/react';
import { BlogList } from '.';

export default {
  title: 'Templates/BlogList',
  component: BlogList,
} as Meta<typeof BlogList>;

const Template: StoryFn<typeof BlogList> = (args) => <BlogList {...args} />;

export const Default = Template.bind({});

export const WidhData = Template.bind({});
WidhData.args = {
  posts: [
    { id: 1, title: 'blog title 1', body: 'blog body 1' },
    { id: 2, title: 'blog title 2', body: 'blog body 2' },
    { id: 3, title: 'blog title 3', body: 'blog body 3' },
  ],
};
