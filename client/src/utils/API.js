import axios from 'axios';

export default {
  callNYT: function (query) {
    return axios.get('/api/article/call', { params: { q: query } });
  },

  getSaved: function () {
    return axios.get('/api/saved');
  },

  deleteArticle: function (id) {
    return axios.delete('/api/saved/' + id)
  },

  saveArticle: function (article) {
    return axios.post('/api/saved', article)
  }
};