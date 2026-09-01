# 박성현 Backend Developer Portfolio — Strategy

## 1. 전체 전략

- 목표: 신입 Java/Spring 백엔드 채용 담당자와 개발자가 짧은 시간 안에 **직접 담당 범위, 기술 선택 이유, 문제 해결 과정, 운영/성능 관점**을 확인하도록 구성한다.
- 톤: Minimal / Professional / Technical / Calm / Structured.
- 핵심 메시지: **기능 구현에서 끝나지 않고 운영 환경, 외부 시스템 연동, 캐싱, 성능 테스트와 문제 해결까지 확인하는 백엔드 개발자.**
- Source of Truth: 첨부 프로젝트 정리 Markdown만 사용. 수치·기여도·링크는 자료에 없으면 추가하지 않는다.

## 2. 콘텐츠 우선순위

### High
- Ait: 사용자 행동 기반 부하테스트 → Redis 캐싱 → 동일 조건 재측정 → 700/800 VU 확장 → 새 포화 구간 확인.
- Ait: NFC 정규화 + Levenshtein Distance + 10% 변경 기준 + 비동기 분석으로 AI 재분석 정책 최적화.
- Ait: LiveKit Container → Docker Host → Nginx → Spring Boot 구간별 Webhook Timeout 분석.
- Ait: 개인 구현 범위와 비담당 범위의 명확한 분리.
- BRIX: JWT/Redis 인증, Redis TTL 이메일 인증, S3 Object Key/생명주기, 인기 상품 캐싱.

### Medium
- Ait: 스터디 세션 상태와 상호평가 완결성 연결.
- Ait: Nginx API/WebSocket/정적 파일 라우팅, HTTPS.
- BRIX: 리뷰 권한/중복 검증, 과일 등급 결과 서비스 연계.

### Low
- 일반 CRUD의 세부 API 목록.
- AI/프론트 기술의 세부 설명.
- Jetson Nano 세부 제어 로직.

## 3. Information Architecture

1. Intro
2. Profile
3. Technical Skills
4. Content Priority
5. Project 01 — Ait
   - Overview
   - My Role
   - Architecture
   - Key Implementations
   - Performance
   - Troubleshooting 4건
6. Project 02 — BRIX
   - My Role
   - Architecture
   - Key Implementations
   - Troubleshooting 3건
7. Missing Information / Links

## 4. Text Wireframe

```text
[STICKY NAV]
박성현 · Backend Portfolio     About / Skills / Ait / BRIX / Print

[INTRO]
PORTFOLIO · BACKEND DEVELOPER
박성현
Backend Developer
기능 구현에서 끝나지 않고 ... 성능 병목까지 확인하는 ...

Target / Email / GitHub / Education

------------------------------------------------------------
01 PROFILE
기능을 만드는 것에서 끝내지 않고, 운영 흐름까지 확인합니다.
[2 columns: summary | target/interest/recent experience]

------------------------------------------------------------
02 SKILLS
[Backend]            Java / Spring ...
[Database / Cache]   MySQL / Redis ...
[Infrastructure]     EC2 / Docker / Nginx ...
...

------------------------------------------------------------
PROJECT 01 · Ait                         2026.07.06—08.10
AIT                                      [Team / Role / Core]
AI 맞춤형 모의면접 및 실시간 화상 스터디

Overview
My Role
Architecture
Client → Nginx → Spring Boot → MySQL / Redis
Spring Boot ↔ GMS / FastAPI
Client ↔ LiveKit → Webhook → Nginx → Spring Boot

Key Implementations
01 문서 저장/AI 분석 책임 분리
02 변경률 기반 재분석 정책
03 LiveKit 환경 구축
04 실시간 상태 연계
05 평가 데이터 완결성

Performance
87.8% → 63.0% / 24.8%p / 800 VU
[small table] [two simple line charts]

Troubleshooting
Problem → Analysis → Decision → Implementation → Result → What I learned

------------------------------------------------------------
PROJECT 02 · BRIX
...
```

## 5. Visual System

- Content width: 1180px.
- Reading measure: 760px.
- Grid: desktop 2-column and label/content grid, mobile 1-column.
- Background: #FFFFFF.
- Text: #101114 / muted #6B6F76.
- Divider: #DEDFE3, stronger #B9BBC1.
- Accent: #3157D5, 성능 차트의 보조 선 등 극히 제한적으로만 사용.
- Font: Pretendard/Noto Sans KR/system fallback. 외부 웹폰트 의존 없음.
- Typography: 이름/프로젝트명은 큰 크기, section label은 12–14px, 본문 16px.
- Spacing: section 96–108px, project body 52–72px.
- Visual hierarchy: typography + whitespace + divider + grid. 카드/그림자/그라데이션 없음.
- Breakpoints: 900px, 640px.

## 6. 구현 선택

정적 콘텐츠 중심 포트폴리오이므로 React/Next.js를 사용하지 않고 **HTML/CSS + 최소 JavaScript**로 구현한다. 빌드 도구는 Node 표준 라이브러리만 사용해 외부 의존성을 없앴다. 콘텐츠 데이터는 `src/content.mjs`로 분리하고 `build.mjs`가 정적 HTML을 생성한다.

## 7. 실행

```bash
npm run build
npm run serve
# http://localhost:4173
```

또는 `dist/`를 정적 호스팅에 그대로 배포한다.

## 8. 배포

- GitHub Pages: `dist/`를 Pages 배포 브랜치/액션에 게시.
- Vercel/Netlify: 프로젝트 Root를 연결하고 Build Command를 `npm run build`, Output Directory를 `dist`로 설정.
- 별도 서버: `dist/` 정적 파일을 Nginx document root로 배포.

## 9. Print / PDF

- 상단 navigation과 print button은 인쇄 시 숨김.
- A4 margin과 font scale을 별도로 정의.
- 각 프로젝트는 인쇄 시 새 페이지에서 시작.
- case/architecture/chart 영역에 `break-inside: avoid` 적용.
- 브라우저의 Print → Save as PDF로 제출용 PDF 생성 가능.

## 10. 자체 검수

### Recruiter Review
- 첫 화면에서 이름/직무/개발 방향 확인 가능.
- Ait이 가장 큰 비중을 차지하며 최근성·직무 연관성이 분명함.
- 담당하지 않은 AI/Frontend/GitHub App 영역이 구분됨.

### Backend Engineer Review
- 기술 나열보다 문제→가설→결정→구현→결과가 먼저 보임.
- 성능 개선은 600 VU 재측정과 700/800 VU 확장 결과까지 포함.
- BRIX는 정량 성능 수치를 만들지 않고 설계 의도로 설명.

### UI Review
- white/black/gray 중심, 장식 최소.
- 카드형 Landing Page 대신 divider와 grid 기반.
- reference image의 큰 이름, 작은 label, 넓은 whitespace 분위기만 반영.

### Mobile Review
- 900px 이하에서 주요 2-column을 1-column으로 변환.
- 640px 이하에서 architecture flow를 vertical로 변환.
- 성능 표는 horizontal scroll로 정보 손실 방지.

### Print/PDF Review
- A4 print CSS 제공.
- 프로젝트 페이지 분리와 주요 블록 page-break 방지.

## 11. 추가 정보 필요

- Email
- GitHub URL
- Education
- Ait GitHub / Demo / 관련 문서 링크
- BRIX GitHub / Demo / 관련 문서 링크
