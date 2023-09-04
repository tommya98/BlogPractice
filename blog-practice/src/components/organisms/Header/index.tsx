import styled from '@emotion/styled';
import { AppTitle } from 'components/atoms/AppTitle';

export const Header = () => {
  return (
    <Container>
      <AppTitle />
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: calc(100%-40px);
  margin-bottom: 20px;
`;
