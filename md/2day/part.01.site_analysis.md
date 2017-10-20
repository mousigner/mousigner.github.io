# 웹사이트 분석

## 구조
> header, main, footer를 그루핑해서 markup
- html5는 시멘틱 마크업이 있지만 그 이하에서는 div로 그룹핑
- div 그룹핑 말고 사용할 수 있는 방법이 ARIA의 role 속성
- header = div.class = aria role="banner"
- main = div.class = aria role="main"
- footer = div.class = aria role="contentinfo" 
- article, section html의 독립적인 그룹
- article = rss 예를들어 블로그에 포스팅할때 하나의 포스팅 

## 역할모델
> ARIA
- ARIA의 role로 div, span 등에 역할 설정을 부여하여 접근성을 개선가능 
- html5와 혼용하는것은 옳지 않음
```
<header role="banner"> --- X
<div class="header" role="banner"> --- O
```
- 대체텍스트는 aria-label로 설정 가능
```
<div class="gnb" role="navigation" aria-label="메인 메뉴">
```

## 접근성 검사 TIP
> 1. chrome inspector aria on
> 2. 개발자툴(F12) 에서 audits 에서 체크 : run audit