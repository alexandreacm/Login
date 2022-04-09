import styled from 'styled-components/native';
import { colors } from '../../theme';

const StyledInput = styled.TextInput`
  width: 100%;
  background-color: ${colors.WHITE};
  margin-bottom: 15px;
  color: ${colors.TEXT_COLOR};
  font-size: 17px;
  border-radius: 7px;
  padding: 10px;
`;

export { StyledInput };
