var fetchService = {
  host: "http://localhost",
  port: 9000,
  fetchUrl(method, url, body) {
    return fetchService.fetchExternalUrl(method, fetchService.host + ":" + fetchService.port + url, body);
  },
  fetchExternalUrl(method, url, body) {
    let fetchObject = {
      method: method
    };

    if(method !== 'GET' && !!body) {
      fetchObject = {
        method: method,
        body: body,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };
    }

    return fetch(url, fetchObject)
      .then(response => response.json());
  }
};
