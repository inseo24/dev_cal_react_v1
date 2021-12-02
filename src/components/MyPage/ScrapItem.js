import { React } from 'react';
import { SButton, STableNum, STableTime, STableTitle } from './styles';

const ScrapItem = (props) => {
  const { scrapId, event } = props.scrap;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  console.log(props.scrap);

  const cdate = new Date(event.start).toLocaleDateString(undefined, options);
  const unScrap = async () => {
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    headers.append('Authorization', 'Bearer ' + accessToken);

    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/scrap/` + event.eventId,
      {
        method: 'DELETE',
        headers: headers,
      },
    );

    if (response.ok) {
      const scrap = await response.json();
      alert('삭제되었습니다.');
      window.location.href = '/mypage';

      return { scrap };
    }
  };

  return (
    <>
      <tr>
        <STableNum>{scrapId}</STableNum>
        <STableTitle>{event.title}</STableTitle>
        <STableTime>{cdate}</STableTime>
        <STableTitle>{event.host}</STableTitle>
        <STableTitle>
          <SButton onClick={unScrap}>삭제</SButton>
        </STableTitle>
      </tr>
    </>
  );
};

export default ScrapItem;
