import { useEffect } from 'react';
import axios from 'axios';

export default function Device({ match }) {
  return <div>{match.params.title}</div>;
}
