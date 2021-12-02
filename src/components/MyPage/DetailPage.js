import React, { useEffect, useState } from 'react';
import { SSCButton } from '../Calendar/styles';
import ScrapItem from './ScrapItem';
import { SLeft, SText, SLinkButton, STitle, STableHead } from './styles';

const DetailPage = () => {
  const [scrapList, setScrapList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}/`)
      .then((res) => res.json())
      .then((res) => {
        setScrapList(res.data);
      });
  }, []);

  return (
    <>
      <SLeft>
        <STitle>Detail Page</STitle>
        <SText>개인 정보 수정하기</SText>
        <SLinkButton to="/mypage/auth">개인정보 수정</SLinkButton>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <SText>스크랩한 행사</SText>

        <thead>
          <tr>
            <STableHead>No.</STableHead>
            <STableHead>행사</STableHead>
            <STableHead>일시</STableHead>
            <STableHead>주관</STableHead>
            <STableHead>삭제</STableHead>
          </tr>
        </thead>

        <tbody></tbody>
      </SLeft>
    </>
  );
};

export default DetailPage;
