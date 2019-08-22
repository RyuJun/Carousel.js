# Carousel.js
[Demo   : https://ryujun.github.io/demos/JavaScript/Carousel/](https://ryujun.github.io/demos/JavaScript/Carousel/)<br>
[Github : https://github.com/RyuJun/Carousel.js](https://github.com/RyuJun/Carousel.js)
> Carousel.js는 es6++ 문법으로 작성된 Carousel module이다. 
> slider, fade등의 기능들을 지원하며, 사이트의 배너 관리를 위하여 제작

## 지원
> chrome, firefox, while 등등의 모던브라우저 및 ie9 버전 이상에서 지원함
> ( ie9 에서는 transition이 적용 되지 않아서, Motion등이 default로 적용됨 )

## 설치 및 사용방법

### 일반 웹 페이지

웹 페이지에서 사용하려면 html파일 `<head>`테그 사이에 `carousel.js` 파일과 `carousel.css` 파일을 링크 한다.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Carousel</title>
  <link href="./carousel.css" rel="stylesheet"> <!--추가-->
  <script src="./carousel.min.js" type="text/javascript"></script><!--추가-->
</head>
<body>
...

```
`carousel.js`는 es6++문법으로 작성되어 `ie`에서 작동하지 않는다.<br>
`carousel.min.js`은 트렌스 파일링이 완료된 파일로써 이를 사용하면 `ie9`버전과 모던브라우저 둘 다 지원이 가능하다.<br>


자바스크립트 코드에서 생성자 new Carousel( element )를 사용하여 접근할 수 있다.
```js
new Carousel(document.querySelector('#carousel-banner'));
```

### Exmaple

```html
<div class="carousel" id="carousel-banner">
  <div class="carousel-wrapper">
    <div class="carousel-item">
      <img src="./images/20190808_133759.png">
    </div>
    <div class="carousel-item">
      <img src="./images/20190808_133645.png">
    </div>
    <div class="carousel-item">
      <img src="./images/20190808_133836.png">
    </div>
    <div class="carousel-item">
      <img src="./images/20190808_133850.png">
    </div>
  </div>
  <div class="navi-wrapper"></div>
</div>
<script>
  new Carousel(document.querySelector('#carousel-banner'));
</script>

```
위와같이 html파일 내에 carousel element를 만들어준 뒤 `JavaScript` 코드를 작성해준다.


### 옵션 명세
```html
<script>
  new Carousel(document.querySelector('#carousel-banner'), {
    CarouselMotion: 'default',
    naviPosition: 'bottom',
    naviStyle: 'dot',
    autoMove: true,
    autoMoveTime: 2000
  });
</script>
```
위와같이 생성자 `Carousel` 함수에 1번째 인자에 `Element`를<br>
두번째 인자에 `options`를 넣어준다.

- CarouselMotion   : String(default, slide, prev, fade) &nbsp;&nbsp;`default : default`
- naviPosition     : String(top, left, right, bottom) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`default : bottom`
- naviStyle        : String(dot, arrow) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`default : dot`
- autoMove         : boolen &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`default : false`
- autoMoveTime     : Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`default : 3000`



#### CarouselMotion
해당 옵션은 어떠한 모션으로 Carousel이 동작할지를 판단해주며, default 값은 default 이다.
```html
<script>
 new Carousel(document.querySelector('#carousel-banner'), {
    CarouselMotion: 'default' // --> slide / prev / fade
 });
</script>
``` 
 - `default` : 가장 기본적인 모션으로 클릭시 화면변화없이 다음 화면으로 넘어간다.
 - `slide` : 보통 알고 있는 `slide` 이다. 왼쪽 오른쪽으로 넘어가는 듯한 Motion이다.
 - `prev` : `slide`와 비슷한 방식의 Motion 이지만 끝쪽에 다음 컨텐츠가 미리 조금 보인다.
 - `fade` : 현재 컨텐츠가 없어지면서, 다음 컨텐츠가 나오는 듯한 Motion이다.
 
#### naviStyle
해당 옵션은 `navigation`의 Style일을 지정해주는 옵션이며, `dot`, `arrow` 두가지의 Style이 존재한다. default 값은 `dot`이다.

```html
<script>
 new Carousel(document.querySelector('#carousel-banner'), {
    naviStyle: 'dot' // --> arrow
 });
</script>
``` 
 - `dot` : `navigation`의 조작을 `dot`형식으로 조작한다.
 - `arrow` : `navigation`의 조작을 `arrow`형식으로 조작한다.

#### naviPosition
해당 옵션은 naviStyle이 `dot`일 때 `Navigation`의 포지션을 선택해주는 옵션이며,
default 값은 `bottom` 이다.
```html
<script>
 new Carousel(document.querySelector('#carousel-banner'), {
    naviPosition: 'bottom' // --> top / left / right
 });
</script>
``` 
 - `bottom` : 화면 아래쪽에 `Navigation`이 위치한다.
 - `top` : 화면 위쪽에 `Navigation`이 위치한다.
 - `left` : 화면 왼쪽에 `Navigation`이 위치한다.
 - `right` : 화면 오른쪽에 `Navigation`이 위치한다.

#### autoMove
해당 옵션은 주어진 시간만큼의 시간마다 자동으로 `slider`를 넘기는 기능을 사용할것인지에 대한
`true false` 옵션이다. default값은 `false`

```html
<script>
 new Carousel(document.querySelector('#carousel-banner'), {
    autoMove: false // --> true
 });
</script>
``` 
 - `true` : 자동 넘기기 기능을 사용한다.
 - `false` : 자동 넘기기 기능을 사용하지 않는다.

#### autoMoveTime
해당 옵션은 위에서 설정한 `autoMove` option이 `true`일 때 사용 가능 하며,
시간값을 setting 해준다. default값은 `3000`

```html
<script>
 new Carousel(document.querySelector('#carousel-banner'), {
    autoMoveTime: 3000
 });
</script>
``` 