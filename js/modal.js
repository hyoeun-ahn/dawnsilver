$(document).ready(function(){

  //각 목록을 클릭했을때 내용이 나옴
  $(".menu").click(function(){ 
    $(this).next().fadeIn();
    //$("html").css({"overflow-y":"hidden"});
  });

  //close버튼과 검정배경영역을 클릭할때 닫힘
  $(".close, .modal").click(function(){
    $(".modal").fadeOut(); 
    //$("html").css({"overflow-y":"hidden"});
  });
  
});