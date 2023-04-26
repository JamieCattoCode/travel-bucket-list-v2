import axios from 'axios';

const getLoginResponse = async (details) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/auth/login',
      details,
      { withCredentials: true },
    );
    if (response.status === 201) {
      return { success: true, data: response.data };
    }
    console.log('Returning form getLoginResponse');

    return { success: false, message: response.data.message, response };
  } catch (err) {
    console.log('Returning from getLoginResponse catch block');
    return { success: false, message: err.response.data, error: err };
  }
};

const login = (details) => getLoginResponse(details);

export default login;
