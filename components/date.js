import { parseISO, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import moment from 'moment';


export default function PostDate({ dateString }) {
  const date = moment(dateString);
  const formattedDate = date.format('LLLL d, yyyy');

  return <time dateTime={dateString}>{formattedDate}</time>;
}