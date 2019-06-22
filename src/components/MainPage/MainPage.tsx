import React from 'react';
import { useSelector } from "react-redux";

import { Wrapper } from './MainPage.styles';

const MainPage: React.FC = () => {
  const example = useSelector(({ example }: { example: string }) => example)
  return <Wrapper>Placeholder</Wrapper>;
};

export default MainPage;


