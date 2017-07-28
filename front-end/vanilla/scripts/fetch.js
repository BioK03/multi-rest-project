var fetch = {
  host: "http://localhost",
  port: 7500,
  fetchUrl(method, url, callback, body) {
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(oReq.responseText);
      }
    };

    oReq.open(method, fetch.host + ":" + fetch.port + url, true);
    if (body != null) {
      oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }
    oReq.send(body);
  }
}

function changePort(port) {
  fetch.port = port;
}

function getPortFromTechnology(tech) {
  if (tech == "JEE") {
    return 8080;
  }
  if (tech == "Symfony") {
    return 8000;
  }
  if (tech == "Express") {
    return 3000;
  }
  if (tech == "ASP.net") {
    return 56327;
  }
}