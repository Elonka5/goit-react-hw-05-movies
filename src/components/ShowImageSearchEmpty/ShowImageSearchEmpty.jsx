import React from 'react';
import emptyimg from '../../images/scene-svgrepo-com.png';

import { ErrorBackdrop, ErrorImage, ErrorText } from '../Error/ErrorImgStyled';

export const ShowImageSearchEmpty = ({ text }) => {
  return (
    <ErrorBackdrop>
      <ErrorText>{text}</ErrorText>
      <ErrorImage src={emptyimg} alt="emptyimg" />
    </ErrorBackdrop>
  );
};
