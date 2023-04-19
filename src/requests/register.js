import axios from 'axios';

const register = async (details) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/auth/register',
      details,
      { withCredentials: true },
    );
    console.log(response);
    if (response.status === 201) {
      return { success: true, data: response.data };
    }
    return { success: false, message: response.data.message, response };
  } catch (err) {
    return { success: false, message: err.response.data.message };
  }
};

export default register;
