import axios from 'axios';
import apiTools from '../assets/external-api-tools.json';

const getLocationByXid = async (xid) => {
  if (!xid) {
    return Promise.resolve([]);
  }
  const url = `${apiTools['url-start']}/places/xid/${xid}?apikey=${apiTools['api-key']}`;
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

export default getLocationByXid;
