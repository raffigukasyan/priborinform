import { useEffect } from 'react';
import axios from 'axios';
export default function Catalog({ match }) {
  useEffect(() => {
    console.log(match.url);
    axios.get(`http://localhost:5000${match.url}`).then((res) => console.log(res.data));
  }, []);
  return <div>Catalog dfffffffffffffffffffffffffffffffffff</div>;
}
