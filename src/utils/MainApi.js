class MainApi {
    constructor(options) {
      this._url = options.baseUrl;
      this._headers = options.headers;
    }
    _getResponseData(res) {
        if (res.ok) {
          return res.json();
        }
        console.log(res)
        return Promise.reject(new Error(`Ошибка: ${res.statusText}`));
      }
      updateUser(data) {
        return fetch(`${this._url}/users/me`, {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify(data),
        }).then(this._getResponseData);
      }
    register(data) {
      console.log(data);
      return fetch(`${this._url}/signup`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data),
      }).then(this._getResponseData);
    }
    login(data) {
      return fetch(`${this._url}/signin`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data),
      }).then(this._getResponseData);
    }
    saveMovie(data) {
      return fetch(`${this._url}/movies`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(data),
      }).then(this._getResponseData);
    }
    deleteMovie(id) {
      return fetch(`${this._url}/movies/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
          
        },
      }).then(this._getResponseData);
    }
    getMovies() {
      return fetch(`${this._url}/movies`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,          
        },
      }).then(this._getResponseData);
    }
    getInfo() {
      return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      }).then(this._getResponseData);
    }
  }

  const mainApi = new MainApi({
    baseUrl: "https://api.hop-hey.students.nomoredomains.monster",
    headers: {
      "Content-Type": "application/json",
    },
  });
  export default mainApi