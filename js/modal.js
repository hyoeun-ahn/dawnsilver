
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
