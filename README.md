# Carousel.js

> Carousel.js는 es6++ 문법으로 작성된 Carousel module이다. 
> slider, fade등의 기능들을 하며, 사이트의 배너 관리를 위하여 제작

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



>#### CarouselMotion
>해당 옵션은 어떠한 모션으로 Carousel이 동작할지를 판단해주며, default 값은 default 이다.
>```html
><script>
> new Carousel(document.querySelector('#carousel-banner'), {
>    CarouselMotion: 'default',
>    naviPosition: 'bottom',
>    naviStyle: 'dot',
>    autoMove: true,
>    autoMoveTime: 2000
> });
></script>
>``` 
>씨부럭탱