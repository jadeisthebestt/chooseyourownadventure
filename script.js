document.addEventListener('click', function(e) {
  var e = window.e || e;

    if (e.target.tagName !== 'A')
        return;

    hashtag = new URL(e.target.href).hash.substring(1);
    document.getElementById(hashtag).style.display = "inline-block";
}, false);
