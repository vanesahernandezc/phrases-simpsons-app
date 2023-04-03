import styled from "styled-components";

export default function Container({ children }: any) {
  return <Content>{children}</Content>;
}

const Content = styled.div`
  max-width: 1000px;
  padding: 40px;
  margin: 0 auto;
`;
