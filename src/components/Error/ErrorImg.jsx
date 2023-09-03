import React from 'react';
import errImg from '../../images/popcorn-box-svgrepo-com.png';

import { ErrorBackdrop, ErrorImage, ErrorText } from './ErrorImgStyled';

export const ErrorImg = ({ text }) => {
  return (
    <ErrorBackdrop>
      <ErrorText>{text}</ErrorText>
      <ErrorImage src={errImg} alt="popcorn" />
    </ErrorBackdrop>
  );
};
