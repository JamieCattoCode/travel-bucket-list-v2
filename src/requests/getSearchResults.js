import axios from 'axios';
import apiTools from '../assets/external-api-tools.json';

const getCoordinates = (placeName) => {
  const url = `${apiTools['url-start']}/places/geoname?name=${placeName}&apikey=${apiTools['api-key']}`;

  if (!placeName) {
    return Promise.resolve([]);
  }
  return axios
    .get(url)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => err);
};
const removeFeaturesWithoutName = (features) => features.filter((feature) => feature.name);

const removeDuplicateFeatures = (features) => {
  const namesSeen = [];
  const featuresWithoutDuplicates = [];

  features.map((feature) => {
    if (!namesSeen.includes(feature.name)) {
      featuresWithoutDuplicates.push(feature);
      namesSeen.push(feature.name);
    }
    return feature;
  });

  return featuresWithoutDuplicates;
};

const formatFeatures = (features) => removeDuplicateFeatures(removeFeaturesWithoutName(features));

const getPlacesToVisit = (placeData) => {
  const params = {
    lon_min: (placeData.lon) - 0.005,
    lon_max: (placeData.lon) + 0.005,
    lat_min: (placeData.lat) - 0.005,
    lat_max: (placeData.lat) + 0.005,
  };
  const queries = `?lon_min=${params.lon_min}&lon_max=${params.lon_max}&lat_min=${params.lat_min}&lat_max=${params.lat_max}`;
  const url = `${apiTools['url-start']}/places/bbox${queries}&apikey=${apiTools['api-key']}`;

  if (!placeData) {
    return Promise.resolve([]);
  }
  return axios
    .get(url)
    .then((response) => {
      let { features } = response.data;
      features = features.map((feature) => feature.properties);
      features = formatFeatures(features);
      return features;
    })
    .catch((err) => err);
};

const getSearchResults = (query, searchLimit) => {
  if (!query) {
    return Promise.resolve([]);
  }

  return getCoordinates(query)
    .then(getPlacesToVisit)
    .then((response) => response.slice(0, searchLimit))
  // .then(getFeatureDetails)
  // .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export default getSearchResults;
