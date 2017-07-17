const searchModel = {
  cacheSearchResults: function(data) {
    const json = JSON.stringify(data);
    localStorage.setItem('data', json);
  },

  fetchCachedData: function() {
    return JSON.parse(localStorage.getItem('data'));
  }
}

export default searchModel;
