import styled from 'styled-components'

export const Header = styled.h1`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  padding: 24px 0;
`
