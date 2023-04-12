var CETEIcean = new CETEI()
const repo = 'https://raw.githubusercontent.com/brluies/SCRB_AldusDS/main/';
const TEI = document.querySelector('html').getAttribute('id');
const URL = repo + TEI + '.xml';
CETEIcean.getHTML5(URL, function(data) {
  document.getElementById("content").appendChild(data)
});