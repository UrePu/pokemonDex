# Pokemondex

Pokemondex는 Redux를 활용한 포켓몬 도감 프로젝트입니다. 기본적으로 MOCK_DATA를 사용하여 포켓몬 정보를 표시하며, 전역 상태 관리를 통해 데이터 유지 및 페이지 간 상태 공유를 지원합니다.

## 주요 기능

- 포켓몬 리스트 조회
- 포켓몬 상세 정보 보기
- Redux를 이용한 전역 상태 관리
- 검색 및 필터링 기능
- 반응형 UI

## 기술 스택

- **Frontend**: React, Redux, Redux Toolkit, React Router
- **State Management**: Redux
- **Data**: MOCK_DATA 기반 JSON 데이터
- **Build Tool**: Vite

## 폴더 구조

```
📦 pokemondex
 ┣ 📂 src
 ┃ ┣ 📂 components  # UI 컴포넌트
 ┃ ┣ 📂 data        # 포켓몬 데이터 (MOCK_DATA 포함)
 ┃ ┣ 📂 pages       # 페이지 컴포넌트
 ┃ ┣ 📂 redux       # Redux 상태 관리 관련 코드
 ┃ ┣ 📂 shared      # 공통 유틸 및 훅
 ┃ ┣ 📂 styles      # 스타일 관련 파일
 ┃ ┣ 📜 App.jsx     # 메인 애플리케이션 파일
 ┃ ┗ 📜 main.jsx    # 진입점
 ┣ 📜 .gitignore    # Git 무시 파일 목록
 ┣ 📜 README.md     # 프로젝트 문서
 ┣ 📜 eslint.config.js # ESLint 설정 파일
 ┣ 📜 index.html    # 메인 HTML 파일
 ┣ 📜 package.json  # 프로젝트 종속성 및 스크립트
 ┣ 📜 vite.config.js # Vite 설정 파일
 ┗ 📜 yarn.lock     # 패키지 매니저 종속성 파일
```

## 설치 및 실행

1. 프로젝트 클론

```sh
git clone https://github.com/UrePu/pokemonDex.git
cd pokemonDex
```

2. 패키지 설치

```sh
yarn install # 또는 npm install
```

3. 프로젝트 실행

```sh
yarn dev # 또는 npm run dev
```

## Redux 상태 관리 개요

- **store.js**: 중앙 데이터 저장소
- **slices/**: Redux Toolkit을 활용한 개별 상태 슬라이스
- **dispatch/actions**: 포켓몬 데이터 로드 및 상태 업데이트 처리

## 데이터 사용 (MOCK_DATA)

이 프로젝트는 기본적으로 `data/MOCK_DATA.json`을 사용하여 포켓몬 정보를 불러옵니다. 필요 시 API 연동이 가능합니다.

## 라이선스

이 프로젝트는 [MIT License](./LICENSE)를 따릅니다.

## 문의

추가적인 문의사항이 있다면 [GitHub Issues](https://github.com/UrePu/pokemonDex/issues)에서 문의해 주세요.
