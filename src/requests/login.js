import axios from 'axios';

const getLoginResponse = async (details) => {
  const response = await axios.post(
    'http://localhost:3001/auth/login',
    details,
    { withCredentials: true },
  );
  if (response.status === 201) {
    return { success: true, data: response.data };
  }
  return { success: false, message: response.data.message, response };
};

const login = (details) => {
  try {
    return getLoginResponse(details);
  } catch (err) {
    return { success: false, message: err.response.data };
  }
};

export default login;
