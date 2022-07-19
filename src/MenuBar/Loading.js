import React from 'react';
import {Background,LoadingText} from './Styles'
import Spinner from './Spinner-1s-200px.gif'

export const Loading = () => {
  return <Background>
    <LoadingText>로딩중</LoadingText>
    <img src={Spinner} alt="로딩중" width="5%" />
</Background>;
};

export default Loading;