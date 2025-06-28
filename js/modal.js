// $(document).ready(function(){

//   //각 목록을 클릭했을 때 해당내용 나옴
//   $(".graphic-set li a").click(function(){

//     pageNum =$(this).closest("li").index();

//     $(".page-num span:nth-child(1)").text(pageNum+1); //오른쪽 상단 페이지번호
//     $(".graphic-content li").eq(pageNum).stop().fadeIn(); //각 목록의 내용
//     $(".modal").stop().fadeIn(); //검정배경

//   });




$(document).ready(function(){

  $(".menu").click(function(e){
    e.preventDefault();
    $(".modal").fadeIn();
    $("html").css("overflow", "hidden"); // 스크롤 막기
  });


    //close버튼과 검정배경영역을 클릭할때 닫힘
  $(".close, .modal").click(function(){
    $(".modal").fadeOut(); 
    $("html").css({"overflow-y":"auto"});
  });

});