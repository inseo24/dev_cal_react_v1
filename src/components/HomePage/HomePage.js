import React from 'react';
import Search from './Search';
import { SHomePage, STitle } from './styles';

const HomePage = () => {
  return (
    <SHomePage>
      <STitle>
        이 달의 컨퍼런스
        <Search />
      </STitle>
    </SHomePage>
  );
};

export default HomePage;
