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
    getMovies() {
      return fetch(`${this._url}`, {
        method: "GET",
      }).then(this._getResponseData);
    }
  }

  const mainApi = new MainApi({
    baseUrl: " https://api.nomoreparties.co/beatfilm-movies",
    headers: {
      "Content-Type": "application/json",
    },
  });
  export default mainApi