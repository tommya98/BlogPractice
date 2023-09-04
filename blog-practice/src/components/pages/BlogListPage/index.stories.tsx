import { StoryFn, Meta } from '@storybook/react';
import { BlogListPage } from '.';

export default {
  title: 'Pages/BlogListPage',
  component: BlogListPage,
} as Meta<typeof BlogListPage>;

const Template: StoryFn<typeof BlogListPage> = () => <BlogListPage />;

export const Default = Template.bind({});
