# markup과 css 실무

## markup & css TIP
- markup은 의미있는 구조와 접근성을 고려해서 구성
- w3.org의 Nu Html Checker로 마크업 체크가 가능
- 구글 웹개발자도구 audits의 Accessibility로 마크업 체크가 가능
-
- normalize css cdn (https://cdnjs.com/libraries/normalize/) 링크로 손쉽게 common css 세팅
- Spoqa Han Sans (https://spoqa.github.io/spoqa-han-sans/en-US/) 본고딕 폰트 적용
- 특수문자는 Entities로 작성 (https://www.w3schools.com/html/html_entities.asp)
-
- css에서 영역 크기 계산방식에는 content-box 방식과 border-box 방식이 있음
- border-box 형식을 가져가기 위해서는 box-sizing 설정을 해주면 됨
- content-box 방식과 border-box 방식의 차이는 content-box는 패딩과 라인 가로값을 다 합해서 계산하고 border-box는 패딩과 라인값을 가로값에 포함해서 계산
```
width:100px; padding:10px; border:1px; margin:10px; 일때
content-box 영역 사이즈는 144px
border-box 영역 사이즈는 120px
```
-
- sass와 less의 활용. 국내에서는 less의 접근성 때문에 less를 많이 사용하지만 활용도가 높은것은 sass
- 
- css 레이아웃 스타일로 flex, grid 유용
- css position 절대값을 쓸때 상위 영역 기준으로 절대값을 주고싶다면 상위 영역에 relative를 써야함
- color에서 상위것을 상속하려면 inherit를 사용해 준다. 예로 li안에 a 가 칼라 상속을 못받는 현상을 inherit 쓰면 따로 a에 설정 안해줄 수 있음
```
a {color:inherit;}
```
-
- flex와 grid는 레이아웃 css로 정렬이 용이함. flex는 메인정렬과 교차정렬 개념을 가져야하는데, 페이지를 구성하는 큰 레이아웃은 grid 세부 레이아웃은 flex 쓰면 좋을듯
```
flex는 justify-content와 align-item으로 메인정렬, 교차정렬을 한다. 하위 속성으로는 아래것들이 있음.

space-around
space-between
flex-end
flex-start
```
-
```
grid는 반응형 페이지 레이아웃을 잡을때 용이하다.
display:grid; 를 해주고 column과 row로 레이아웃을 설정해줌. (http://cssgridgarden.com/ 에서 테스트 가능)
grid-column {}
grid-row {} ...
```
-
- 

##### ARIA는 기존구조에서 웹표준화 준수를 위한 보조 기술로 네이티브로 가능한 부분이 있으면 그부분을 적극 활용하는것이 좋다
```
EX) 
<img src="" alt=""> --- O
<img src="" aria-lable=""> --- X
aria-lable 은 모든 객체에 사용할 수 있지만 alt의 접근성이 더 좋기 때문에 alt로 마크업이 되어있다면 구지 aria로 바꿔줄 이유는 없음
```