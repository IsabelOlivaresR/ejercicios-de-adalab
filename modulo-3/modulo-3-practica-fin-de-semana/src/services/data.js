const getDataFromApi = (filterText) => {
  return fetch(`http://api.tvmaze.com/search/shows?q=girls`)
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    });
};

export default getDataFromApi;
