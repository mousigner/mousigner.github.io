# markup과 css 실무

### ARIA는 기존구조에서 웹표준화 준수를 위한 보조 기술로 네이티브로 가능한 부분이 있으면 그부분을 적극 활용하는것이 좋다
```
EX) 
<img src="" alt=""> --- O
<img src="" aria-lable=""> --- X
aria-lable 은 모든 객체에 사용할 수 있지만 alt의 접근성이 더 좋기 때문에 alt로 마크업이 되어있다면 구지 aria로 바꿔줄 이유는 없음
```
-
### JQUERY 활용도 높은 메서드
- toggleClass
- addClass
- removeClass
-
- find
- siblings
- attr
-
- focusin
- focusout