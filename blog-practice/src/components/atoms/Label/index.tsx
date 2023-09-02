import styled from '@emotion/styled';

interface Props {
  readonly text: string;
}

export const Label = ({ text }: Props) => {
  return <Container>{text}</Container>;
};

const Container = styled.div`
  font-size: 1.2rem;
`;
