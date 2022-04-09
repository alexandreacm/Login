import styled from 'styled-components/native';
import { colors } from '../../theme';

const StyledKeyBoardAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.PRIMARY};
`;

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 35px;
  color: #FFF;
`;

export { StyledKeyBoardAvoidView, StyledContainer, StyledText };
