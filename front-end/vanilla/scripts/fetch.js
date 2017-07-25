var fetch = {
  fetchUrl(method, url, callback, body) {
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(oReq.responseText);
      }
    };
    oReq.open(method, url);
    oReq.send(body);
  }
}