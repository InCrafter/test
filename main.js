$('button').on('click',function(){
  openInNewTab('http://bootcoder.com');
});
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
