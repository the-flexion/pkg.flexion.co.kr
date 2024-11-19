# Release 배포

- 버전 확인

```
npm publish
```

# SCSS

## 기본 적용

```js
import "pkg.scss" from "@the-flexion/pkg";
```

### system(admin) 레이아웃 적용

```js
import "system.scss" from "@the-flexion/pkg";
```

## Variables

### Color Tone

👉 회색의 톤을 결정함. 기본값(미설정) 과 warm으로 선택할 수 있음.
👉 js에서 아래와 같이 설정(warm)

```js
// 기본값
document.documentElement.setAttribute('data-color-tone', '');

// warm 톤
document.documentElement.setAttribute('data-color-tone', 'warm');
```

### Dark Mode

👉 다크모드를 설정함. 기본값(자동, 브라우저 설정에 따름)과 'light', 'dark'를 선택할 수 있음.

```js
// 기본값(자동)
document.documentElement.setAttribute('data-color-mode', '');

// light 모드
document.documentElement.setAttribute('data-color-mode', 'light');

// dark 모드
document.documentElement.setAttribute('data-color-mode', 'dark');
```

### Font family

👉 font-family를 설정. css나 scss에서 덮어쓰기

```css
:root {
  --brand-font-family: 'Pretendard', sans-serif;
}
```

# 아이콘 생성

- 디자인 시스템 피그마에서 vector가 아닌 상태를 선택한 후 svg로 export 할 것
- /pkg/scss/\_icon/svg 경로에 svg 파일을 아이콘명에 맞춰 저장
- 쉘에서 아래 스크립트 실행

```sh
npm run font
```

- 스크립트 실행 후 /pkg/scss/\_icon/font 경로에 폰트 파일 생성
