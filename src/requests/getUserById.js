import axios from 'axios';

const getUserById = async (userId) => {
  if ((!userId) || userId === undefined) {
    return 'Error: try again with a valid user id';
  }
  try {
    const { data } = await axios.get(`http://localhost:3001/users/${userId}`);
    const { id, email, username } = data;
    return { id, username, email };
  } catch (err) {
    console.log(err);
  }
};

export default getUserById;
