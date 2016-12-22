(function() {

  var reqCounter = 0;
  var btn = document.querySelector('.portfolio-button');
  var loader = document.querySelector('.loader');

  //btn.addEventListener('click', ajaxReq);

  function ajaxReq(e) {
    e.preventDefault();
    var href = e.target.href;
    var xhr = new XMLHttpRequest();
    reqCounter++;
    loader.classList.add('loader-active');
    xhr.open("GET", href, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        reqCounter--;
        if (reqCounter == 0)
          loader.classList.remove('loader-active');
        if (xhr.status === 200) {
          console.log(xhr.responseText.title);
          document.querySelector('body').innerHTML = xhr.responseText;
          var btn = document.querySelector('.portfolio-button');
          btn.addEventListener('click', ajaxReq);
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
  }

})();