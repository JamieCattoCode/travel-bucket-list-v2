import axios from 'axios';

const deleteFavourite = async (userId, placeXid) => {
  try {
    const response = await axios.delete(`http://localhost:3001/favourites/?userid=${userId}&placexid=${placeXid}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default deleteFavourite;
