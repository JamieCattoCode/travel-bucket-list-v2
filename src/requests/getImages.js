import axios from 'axios';

const removeUnwantedAttributes = (locationSearchResponse) => locationSearchResponse.map((location) => location.kinds);

const removeDuplicates = (listOfKinds) => {
  const seen = [];

  listOfKinds.map((kind) => {
    if (!(seen.includes(kind)) && kind !== 'unclassified_objects') {
      seen.push(kind);
      return kind;
    } return null;
  });

  return seen;
};

const getImageSearchQuery = (locationSearchResponse) => {
  let searchQueries = [];
  searchQueries = removeUnwantedAttributes(locationSearchResponse);
  searchQueries = searchQueries.join(',');
  searchQueries = searchQueries.split(',');
  searchQueries = removeDuplicates(searchQueries);
  searchQueries = searchQueries.join(' ');
  return searchQueries;
};

const getImages = async (originalQuery, locationSearchResponse) => {
  const query = getImageSearchQuery(locationSearchResponse);
  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: {
      q: originalQuery,
      pageNumber: '1',
      pageSize: '30',
      autoCorrect: 'true',
    },
    headers: {
      'X-RapidAPI-Key': '5b6e246c95msh491c5fc5937daa2p15d5dcjsn99894ed03744',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getImage = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: {
      q: query,
      pageNumber: '1',
      pageSize: '1',
      autoCorrect: 'false',
    },
    headers: {
      'X-RapidAPI-Key': '5b6e246c95msh491c5fc5937daa2p15d5dcjsn99894ed03744',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.value;
  } catch (error) {
    console.error(error);
  }
};

export { getImages, getImage };
