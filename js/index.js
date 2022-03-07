$(function() {
    var cnt0 = 0;
    var cnt = parseInt(".num");

    counterFn();

    function counterFn() {

      id0 = setInterval(count0Fn, 100);

      function count0Fn() {
        cnt0++;
        if (cnt0 > 55) {
          clearInterval(id0);
        } else {
          $(".num").text(cnt0);
        }
      }
    }
  });

// 너무 느려서 답답하고, 정해진 수로만 가능 고치기

// jQuery(document).ready(function($) {
//     $('.num').counterUp({
//         delay: 10,
//         time: 1000
//     });
// });