import axios from 'axios';

export const getAllUserFavourites = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3001/favourites/user/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error?.message;
  }
};

export const getFavourite = async (userId, placeXid) => {
  try {
    const response = await axios.get(`http://localhost:3001/favourites/single?userid=${userId}&placexid=${placeXid}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error?.message;
  }
};

export const getIsFavourite = async (userId, placeXid) => {
  const responseData = await getFavourite(userId, placeXid);
  if (responseData?.length >= 1) {
    return true;
  }
  return false;
};
