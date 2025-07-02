$(function(){
  // 슬라이드형 모달__________________________
  let currentIndex = 0;
  const modal = $(".modal");
  const modalItems = $(".modal-content li");
  const total = modalItems.length;

  // 처음 로딩 시 첫 이미지 보여주기
  modalItems.removeClass("active").eq(0).addClass("active");

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

  // 모달 열기 (슬라이드형)
  $(".item").each(function(i){
    $(this).on("click", function(e){
      e.preventDefault();
      showModal(i);
    });
  });

  // 모달 닫기 (슬라이드형)
  $(".close, .modal").on("click", function(){
    hideModal();
  });

  // 이전/다음 버튼
  $(".pre").on("click", function(){
    currentIndex = (currentIndex - 1 + total) % total;
    modalItems.removeClass("active").eq(currentIndex).addClass("active");
    $(".modal-content").scrollTop(0);
    updatePageNum();
  });

  $(".next").on("click", function(){
    currentIndex = (currentIndex + 1) % total;
    modalItems.removeClass("active").eq(currentIndex).addClass("active");
    $(".modal-content").scrollTop(0);
    updatePageNum();
  });


  // 단일형 모달 (#modal-global)__________________
  $(".open-modal").on("click", function(e){
    e.preventDefault();
    const imgSrc = $(this).data("src");
    $("#modal-global .viewpage2").attr("src", imgSrc);
    $("#modal-global").fadeIn();
    $("body").css("overflow", "hidden");
    $('.modal-content2').scrollTop(0);
  });


  // 닫기 (배경 클릭 or 닫기버튼 클릭)
  $("#modal-global").on("click", function(e){
    // 배경 클릭 시 닫기
    if ($(e.target).is("#modal-global")) {
      $(this).fadeOut();
      $("body").css("overflow", "auto");
    }

    // 닫기버튼(.close2) 클릭 시 닫기
    if ($(e.target).closest(".close2").length > 0) {
      $(this).fadeOut();
      $("body").css("overflow", "auto");
    }
  });
});