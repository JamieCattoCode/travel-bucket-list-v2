import axios from 'axios';

const getUserById = async (userId) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/users/${userId}`);
    const { id, email, username } = data;
    return { id, username, email };
  } catch (err) {
    console.log(err);
  }
};

export default getUserById;
