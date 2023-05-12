import { parseISO, format } from 'date-fns';
import { ko } from 'date-fns/locale';

export default function PostDate({ dateString }) {
  const Strdate = parseISO(dateString);
  return <time dateTime={dateString}>{format(Strdate, 'LLLL d, yyyy',{ locale: ko })}</time>;
}