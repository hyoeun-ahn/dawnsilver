/* $(document).ready(function(){

  //각 목록을 클릭했을 때 해당내용 나옴
  $(".item-list .item .manu").click(function(){

    pageNum =$(this).closest("li").index();

    $(".page-num span:nth-child(1)").text(pageNum+1); //오른쪽 상단 페이지번호
    $(".modal-content li").eq(pageNum).stop().fadeIn(); //각 목록의 내용
    $(".modal").stop().fadeIn(); //검정배경

  });




$(document).ready(function(){

  $(".menu").click(function(e){
    e.preventDefault();
    $(".modal").fadeIn();
    $("html").css("overflow", "hidden"); // 스크롤 막기
  });


  
  // 이전다음버튼
  $(".pre").click(function(){
    if(pageNum>0){
      $(".modal-content li").eq(pageNum).hide();
      pageNum--;
      $(".page-num span:nth-child(1)").text(pageNum+1);
      $(".modal-content li").eq(pageNum).stop().fadeIn();
    };
  });
  

  $(".next").click(function(){
    if(pageNum<13){
      $(".modal-content li").eq(pageNum).hide();
      pageNum++;
      $(".page-num span:nth-child(1)").text(pageNum+1);
      $(".modal-content li").eq(pageNum).stop().fadeIn();
    };
  });


   // close버튼과 검정배경영역을 클릭할때 닫힘
  $(".close, .modal").click(function(){
    $(".modal").fadeOut(); 
    $("html").css({"overflow-y":"auto"});
}); */






$(function(){
  let currentIndex = 0;
  const modal = $(".modal");
  const modalItems = $(".modal-content li");
  const total = modalItems.length;

  function showModal(index) {
    currentIndex = index;
    modal.fadeIn();
    $("body").css("overflow", "hidden");
    modalItems.removeClass("active").eq(index).addClass("active");
    $(".modal-content").scrollTop(0);
    updatePageNum();
  }

  function hideModal() {
    modal.fadeOut();
    $("body").css("overflow", "auto");
  }

  function updatePageNum(){
    $(".page-num span").first().text(currentIndex + 1);
    $(".page-num span").last().text(total);
  }

  // 항목 클릭 시
  $(".item").each(function(i){
    $(this).on("click", function(e){
      e.preventDefault();
      showModal(i);
    });
  });

  // 닫기 버튼
  $(".close").on("click", function(){
    hideModal();
  });

  // 이전 버튼
  $(".pre").on("click", function(){
    currentIndex = (currentIndex - 1 + total) % total;
    modalItems.removeClass("active").eq(currentIndex).addClass("active");
    $(".modal-content").scrollTop(0);
    updatePageNum();
  });

  // 다음 버튼
  $(".next").on("click", function(){
    currentIndex = (currentIndex + 1) % total;
    modalItems.removeClass("active").eq(currentIndex).addClass("active");
    $(".modal-content").scrollTop(0);
    updatePageNum();
  });

  // 모달 바깥 영역 클릭 시 닫기 (선택사항)
  // $(".modal").on("click", function(e){
  //   if ($(e.target).closest(".modal-box").length === 0) {
  //     hideModal();
  //   }
  // });

});
