class Carousel {
  constructor(elements) {
    this.elements = elements; // element
    this.carouselType = elements.getAttribute('data-carousel'); // Carousel type
    this.naviType = elements.getAttribute('data-navi') ? elements.getAttribute('data-navi') : null;
    this.contentList = [].slice.call(elements.children); // 현재창의 children들을 배열에 담는다.


    this.imageReady = this.contentList.filter((item) => item.getAttribute('src')); // img가 로드 후 Carousel이 시작되야 되기 때문에 tag 구분
    this.imageReady.length > 0
      ? this.imageReady[this.imageReady.length - 1].addEventListener('load', () => this._makeCarousel())
      : this._makeCarousel();
  }
  _makeCarousel() {  // class handdler
    if (this.carouselType === 'lolling') {
      this._insertElement();
    }
  }




  _insertElement() {
    let Content = `<div class="carousel-wrapper">
                      ${String(this.contentList.map((item) => `<div class="carousel-item">${item.outerHTML}</div>`)).replace(/,/g, '')}
                    </div>`;
    let Navi = `<div class="navi-wrapper">
                  ${String(this.contentList.map((item) => `<span></span>`)).replace(/,/g, '')}
                </div>`;
    let wrapperWidth = 0;


    this.contentList.forEach((item) => wrapperWidth += item.clientWidth);
    this.elements.innerHTML = Content + Navi;
    this.elements.style.overflow = 'hidden';
    this.elements.children[0].style.width = `${wrapperWidth}px`
    this.elements.children[1].children[0].setAttribute('class', 'navi-on');
  }

}






document.querySelectorAll('[data-carousel]').forEach((elements) => new Carousel(elements));
 
 
 


// function bannerRolling(bannerSelector) {
//   var crOnMouseOver = false;
//   var $crArea = $(bannerSelector);
//   var $bannerArea = $crArea.find('.banner_in');
//   var $bannerIndicator = $crArea.find('.banner_indicate');
//   var bannerArrLength = $bannerArea.children().length;

//   for (var iForBA = 1; iForBA < bannerArrLength; iForBA++) {
//     $bannerIndicator.append('<span></span> ');
//   }
//   // 클릭이벤트 추가
//   $bannerIndicator.find('span').click(function (e) {
//     var targetIdx = $(e.target).index();

//     $(e.target).siblings().removeClass('on');
//     $(e.target).addClass('on');

//     $crArea.find('.banner_in').children().removeClass('banner_on');
//     $($crArea.find('.banner_in').children()[targetIdx]).addClass('banner_on');
//   });

//   // 출력시 처음 배너를 활성상태로 변경
//   $bannerArea.find('.banner_item').eq(0).addClass('banner_on');

//   // 자동롤링, 배너가 한개면 안함
//   if (bannerArrLength > 1) {
//     setInterval(function () {
//       // 마우스오버시 자동롤링 안함
//       if (crOnMouseOver) return; class Carousel {

//       }

//       var $currentBanner = $bannerArea.find('.banner_item.banner_on');
//       var $currentBannerIndi = $bannerIndicator.find('span.on');
//       var $nextBanner = $currentBanner.next().length !== 0 ? $currentBanner.next() : $bannerArea.find('.banner_item').eq(0);
//       var $nextBannerIndi = $currentBannerIndi.next().length !== 0 ? $currentBannerIndi.next() : $bannerIndicator.find('span').eq(0);

//       $currentBanner.removeClass('banner_on');
//       $currentBannerIndi.removeClass('on');
//       $nextBanner.addClass('banner_on');
//       $nextBannerIndi.addClass('on');
//     }, 3000);

//     // 마우스오버, 아웃 체크
//     $bannerArea.mouseover(function () {
//       crOnMouseOver = true;
//     });
//     $bannerArea.mouseout(function () {
//       setTimeout(function () {
//         crOnMouseOver = false;
//       }, 3000);
//     });
//   }
// }

