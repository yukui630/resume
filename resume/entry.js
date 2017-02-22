

import './css/easy-responsive-tabs.css';
import './css/templatemo_style.css';

// import './js/easyResponsiveTabs.js';
// import './js/templatemo_custom.js';
require('./js/templatemo_custom.js');
require ('./js/easyResponsiveTabs.js');
function showhide(){
  var div = document.getElementById("newpost");
  if (div.style.display !== "none"){
    div.style.display = "none";
  }else{
    div.style.display = "block";
  }
}
$(document).ready(function () {
  $('#horizontalTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion
    width: 'auto', //auto or any width like 600px
    fit: true, // 100% fit in a container
    closed: 'accordion', // Start closed if in accordion view
    activate: function(event) { // Callback function if tab is switched
    var $tab = $(this);
    var $info = $('#tabInfo');
    var $name = $('span', $info);
    $name.text($tab.text());
    $info.show();    
  }
});
$('#ab').easyResponsiveTabs({
  type: 'vertical',
  width: 'auto',
  fit: true,
});
      
$('#cmt').easyResponsiveTabs({
  type: 'vertical',
  width: 'auto',
  fit: true,
  });
});