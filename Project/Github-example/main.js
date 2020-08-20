(function(window, document){
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); //toggle 이라는 클래스를 가진 모든것을 선택해 담아줌
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });

    // window 는 열린 브라우저 화면을 의미한다고 생각하면 좋음
    window.addEventListener('resize', function() {
        if(window.innerWidth > 1024){
            //Off toggle element
            offElements()
        }
    });

    function toggleElements(){
        // toggle 클래스를 가진 요소의 개수가 바뀔수 있기 떄문에 반복해서 담아줌?
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)