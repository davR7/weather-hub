import moment from 'moment-timezone';

export const formatTimeZone = (offsetSeconds: number) => {
  const offsetHours = offsetSeconds / 3600;
  const dateTime = moment().utcOffset(offsetHours).format('DD/MM/YY | h:mm:ss a');
  const [date, time] = dateTime.split('|');
  return { date, time };
};
