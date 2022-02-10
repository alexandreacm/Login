import styled from 'styled-components/native';
import { colors } from '../../theme';

const StyledKeyBoardAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.PRIMARY};
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background: ${colors.SUCCESS};
`;

const StyledText = styled.Text`
  color: ${colors.WHITE};
  font-size: 18px;
`;

const StyledContainerLogo = styled.View`
  flex: 1;
  justify-content: center;
`;

const StyledContainer = styled.View`
  flex: 1;
  width: 90%;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  opacity: ${({ opacity }) => opacity};
  transform: translateY(${({ offset }) => offset.y});
`;

const StyledInput = styled.TextInput`
  width: 100%;
  background-color: ${colors.WHITE};
  margin-bottom: 15px;
  color: ${colors.TEXT_COLOR};
  font-size: 17px;
  border-radius: 7px;
  padding: 10px;
`;

const StyledRegister = styled.View`
  margin-top: 10px;
`;

const StyledRegisterText = styled.Text`
  color: ${colors.WHITE};
  font-size: 14px;
`;

export {
  StyledKeyBoardAvoidView,
  StyledTouchableOpacity,
  StyledText,
  StyledContainerLogo,
  StyledContainer,
  StyledInput,
  StyledRegister,
  StyledRegisterText,
};
