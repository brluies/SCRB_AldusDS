var CETEIcean = new CETEI()
const repo = 'https://raw.githubusercontent.com/brluies/SCRB_AldusDS/main/';
let href = window.location.href;
let base = href.replace(/\/$/gi,'');
let id = base.split('/').pop();
const URL = repo + id + '.xml';
CETEIcean.getHTML5(URL, function(data) {
  document.getElementById("content").appendChild(data)
});
