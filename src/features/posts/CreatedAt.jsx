import { parseISO, formatDistanceToNow } from 'date-fns';

const CreatedAt = ({ timestamp }) => {
  let createdAt = '';

  if (timestamp) {
    const timeAgo = formatDistanceToNow(parseISO(timestamp));
    createdAt = `${timeAgo} ago`;
  }

  return (
    <span timestamp={timestamp}>
      &nbsp; <i>{createdAt}</i>
    </span>
  );
}

export default CreatedAt;