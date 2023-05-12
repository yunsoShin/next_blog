import moment from 'moment';

export default function PostDate({ dateString }) {
  const date = moment(dateString);
  const formattedDate = date.format('LLLL d, yyyy');

  return <time dateTime={dateString}>{formattedDate}</time>;
}