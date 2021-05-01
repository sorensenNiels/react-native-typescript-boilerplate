import styled from 'styled-components/native';

export const TitleText = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
`;

export const FrontText = styled.Text`
  color: white;
  font-size: 35px;
  font-weight: bold;
  position: absolute;
`;

export const BackText = styled.Text`
  color: grey;
  font-size: 80px;
  letter-spacing: 1px;
  font-weight: bold;
  line-height: 86px;
  z-index: -1;
`;
