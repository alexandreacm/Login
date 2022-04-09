import React from 'react';

import { StyledViewError, StyledTextError } from './styles';

export default function Error({ children }) {
  return (
    <StyledViewError>
      <StyledTextError>{children}</StyledTextError>
    </StyledViewError>
  );
}
