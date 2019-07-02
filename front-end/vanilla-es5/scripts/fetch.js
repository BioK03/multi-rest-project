var fetch = {
  host: "http://localhost",
  port: 9000,
  fetchUrl: function(method, url, callback, body) {
    fetch.fetchExternalUrl(method, fetch.host + ":" + fetch.port + url, callback, body);
  },
  fetchExternalUrl: function(method, url, callback, body) {
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(oReq.responseText);
      }
    };

    console.log(url);

    oReq.open(method, url, true);
    if (body != null) {
      oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }
    oReq.send(body);
  }
};
