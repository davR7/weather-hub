import { useEffect, useState } from 'react';
import { formatTimeZone } from '../../utils';
import * as S from './style';

type TimeStampProps = {
  timezone: number;
};

const TimeStamp: React.FC<TimeStampProps> = ({ timezone }) => {
  const { date } = formatTimeZone(timezone);
  const [clock, setClock] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const { time } = formatTimeZone(timezone);
      setClock(time);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timezone]);

  return (
    <S.TimeStamp>
      <S.ClockSection>{clock}</S.ClockSection>
      <S.DateSection>{date}</S.DateSection>
    </S.TimeStamp>
  );
};

export default TimeStamp;
