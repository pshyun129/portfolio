# 박성현 Backend Developer Portfolio

별도 빌드 과정이나 프레임워크 없이 실행되는 Vanilla HTML/CSS/JavaScript 정적 웹사이트입니다.

## 구조

```text
index.html   포트폴리오 마크업과 콘텐츠
styles.css  화면 및 PDF 인쇄 스타일
app.js      프로젝트 보기 전환과 PDF 출력 동작
img/        프로필 및 프로젝트 아키텍처 이미지
```

## 실행

`index.html`을 브라우저에서 직접 열면 됩니다. 로컬 HTTP 서버가 필요하면 다음 명령을 실행합니다.

```bash
python -m http.server 4173
```

이후 `http://localhost:4173`에 접속합니다.

## 배포

저장소 루트 전체를 GitHub Pages, Netlify, Vercel 또는 일반 정적 웹 서버에 배포합니다. 빌드 명령과 Output Directory 설정은 필요하지 않습니다.

## PDF 출력

페이지 상단의 `Print / PDF` 버튼이나 브라우저의 인쇄 기능을 사용합니다. PDF 스타일은 `styles.css`의 `@media print`에 포함되어 있습니다.
