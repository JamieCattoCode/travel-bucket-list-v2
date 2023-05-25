import axios from 'axios';

const postFavourite = async (userId, placeXid) => {
  try {
    const response = await axios.post('http://localhost:3001/favourites', {
      UserId: userId,
      placeXid,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default postFavourite;
