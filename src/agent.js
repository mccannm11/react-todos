import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000/api';

const responseBody = res => res.body;

const token = window.localStorage.getItem('token') // WAAAHOOO

const requests = {
  del: (url) =>
    superagent.del(`${API_ROOT}${url}`)
      .set('x-access-token', token)
      .then(responseBody),
  get: (url) =>
    superagent.get(`${API_ROOT}${url}`)
      .set('x-access-token', token)
      .then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body)
      .set('x-access-token', token)
      .then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body)
      .set('x-access-token', token)
      .then(responseBody)
};


const Auth = {
  login: (email, password) => 
    requests.post('/auth/login', { email, password } ),
  register: (name, email, password) =>
    requests.post('/auth/register', { name, email, password })
};

const Todos = {
  fetchAll: _ => 
    requests.get('/todos'),
  createTodo: title =>
    requests.post('/todos', { title }),
  updateTodo: (id, title, completed) =>
    requests.put('/todos/' + id, { title, completed }),
  deleteTodo: id =>
    requests.del('/todos/' + id)
};

export default {
  Auth,
  Todos
};