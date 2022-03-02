// main.js
$(function () {
  // 패럴랙스 배경 스크롤
  $.stellar({
    horizontalScrolling: false,
    verticalScrolling: true,
    verticalOffset: 50,
  });

})

$(function () {

  $('#toggle').click(function () {
    $('#gnb > ul').toggleClass('on');
  });

  // 윈도우 크기(폭) 채크
  $(window).resize(function () {
    var w = window.innerWidth; // 윈도우 width값
    console.log(w);
    if (w < 768) {
      $('header > nav > ul').removeClass('on');
    }
  })

});

// 반응형 네비 처리
function matchNav() {
  const pc = window.matchMedia('screen and (min-width: 768px)');
  const mobile = window.matchMedia('screen and (max-width: 767px)');
  // pc용
  if (pc.matches) {
    console.log('pc: ', pc.matches)
    // 2단계 목록 초기화
    $('#gnb .depth2').removeClass('on');

    $('#gnb > ul > li').hover(
      function () {
        $(this).children().addClass('on')
      },
      function () {
        $(this).children().removeClass('on');
      }
    )
  } else {
    // pc hover 이벤트 꺼야됨
    $('#gnb > ul > li').off();
  }

  // mobile 용
  if (mobile.matches) {
    console.log('mobile')
    $('#gnb > ul > li').on('click', function () {
      $('#gnb > ul > li')
        .not($(this))
        .children()
        .removeClass('on');
      $(this).children().toggleClass('on');
    });
  }
}

window.onresize = function () {
  matchNav();
} // onresize

$(function(){
  matchNav();
})