(function navigo() {
    const observer = document.querySelector('.title'); //해더가 픽스될 요소
    const observerHeight = observer.clientHeight; //해더가 픽스될 요소의 높이
    document.addEventListener('scroll', onScroll, { passive: true }); //스크롤 이벤트
    function onScroll() {
        const scrollposition = pageYOffset; //햔제 스크롤 위치
        const FixHeader = document.querySelector('nav'); //해더 (네비게이션)
        if (observerHeight <= scrollposition) {
            //해더가 픽스될 요소의 높이가(.title) 스크롤위치와 작거나 같다면 실행.
            //즉, 요소가 시작되면 해더가 픽스됨.
            FixHeader.classList.add('reveal'); //reveal 클래스를 네비에 추가
        } else {
            FixHeader.classList.remove('reveal'); //reveal 클래스를 네비에서 제거
        }
    }
})();
