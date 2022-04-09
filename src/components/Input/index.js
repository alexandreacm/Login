import React from 'react';

import { StyledInput } from './styles';

import Error from '../Error';

export default function Input({
  value,
  onChangeText,
  error,
  errorMessage,
  ...rest
}) {
  return (
    <>
      <StyledInput value={value} onChangeText={onChangeText} {...rest} />
      {error && <Error>{errorMessage}</Error>}
    </>
  );
}
