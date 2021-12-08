import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { eventSearchAsync } from '../../app/slices/searchSlice';
import EventItem from './EventItem';
import {
  SButton,
  SDiv,
  SForm,
  SInput,
  SLabel,
  SSpan,
  STableHead,
} from './styles';

export default function Search() {
  let state = useSelector((state) => state.ui.menuOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [eventList, setEventList] = useState([]);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(
      eventSearchAsync({
        event: data.event,
      }),
    ).then((response) => {
      setEventList(response.payload.event.data);
    });
  };

  console.log(eventList);

  return (
    <>
      <SDiv>
        <SForm onSubmit={handleSubmit(onSubmit)}>
          <SLabel htmlFor="event"></SLabel>
          {!state && (
            <SInput
              id="event"
              {...register('event', {
                required: '컨퍼런스 이름을 입력해주세요.',
                maxLength: {
                  value: 30,
                  message: '30자 이내로 입력해주세요.',
                },
              })}
              type="text"
            />
          )}
          <SButton type="submit">검색</SButton>
        </SForm>
        {errors.event && <SSpan role="alert">{errors.event.message}</SSpan>}
      </SDiv>
      <SDiv>
        {eventList && eventList.length !== 0 && (
          <>
            <thead>
              <tr>
                <STableHead>행사</STableHead>
                <STableHead>일시</STableHead>
                <STableHead>주관</STableHead>
              </tr>
            </thead>
            <tbody>
              {eventList.map((event) => (
                <EventItem key={event.eventId} event={event} />
              ))}
            </tbody>
          </>
        )}
      </SDiv>
    </>
  );
}
