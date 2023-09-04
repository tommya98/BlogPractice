import styled from '@emotion/styled';
import { BlogBody } from 'components/atoms/BlogBody';
import { BlogTitle } from 'components/atoms/BlogTitle';

interface Props {
  readonly title: string;
  readonly body: string;
}

export const BlogItem = ({ title, body }: Props) => {
  return (
    <Container>
      <BlogTitle title={title} />
      <BlogBody body={body} />
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow:
    10px 10px 30px #d9d9d9,
    -10px -10px 30px #ffffff;
  width: 800px;
`;
