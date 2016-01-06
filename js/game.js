
$(document).ready(function() {
    FastClick.attach(document.body);
    
    gotoPage(1)
    
      
      //setTimeout(function(){
      //      $("#scene01-ele02").fadeIn();
      //      $("#scene01-ele02").addClass("pulse")
      //}, 1500);
     

});




function blockMove() {
      event.preventDefault() ;
}
$("#input01").change(function() {
    checkINPUT()
});
function checkINPUT() {
      
      
      var bTest = false;
      
      
      if (isNaN($("#input02").val()) != true) {
            alert('Yêu cầu nhập vào số tuổi')            
            bTest = true;
      }
      
      if (bTest) {
            $("#btn-next").hide();
            return;
      }
      if ($("#input01").val() != '') {
            $("#btn-next").show();
            $("#btn-next").addClass('animated infinite pulse')
      }
}



function gotoPage(id) {

    $(".page").hide();
    $(".page[bsq-id=" + id + "]").fadeIn(300);

    current = id;
}





function nextBUTTON() {

    $(window).scrollTop(0);
    current += 1;
    gotoPage(current);

}

function wrong() {
    $(window).scrollTop(0);
    current += 2;
    gotoPage(current);
}


function restartApp() {
      location.reload();
}