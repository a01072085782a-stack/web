# 📱 포트폴리오 웹사이트

현대적이고 아름다운 포트폴리오 웹사이트. HTML5, CSS3, JavaScript로 구현된 완전한 프론트엔드 프로젝트입니다.

## ✨ 주요 기능
test
- 🎨 **모던 UI/UX 디자인** - 그래디언트, 애니메이션, 호버 효과
- 📱 **완벽한 반응형 디자인** - 모든 기기에서 최적화됨
- ⚡ **부드러운 스크롤** - Intersection Observer를 활용한 스크롤 애니메이션
- 🔗 **네비게이션** - 고정 헤더와 스무스 스크롤
- 👨‍💼 **섹션 구성**:
  - 히어로 섹션 (소개)
  - About (통계 포함)
  - Projects (6개의 프로젝트 카드)
  - Skills (기술 스택)
  - Contact (연락처 및 소셜 링크)

## 🚀 빠른 시작

### 요구사항
- 웹 브라우저 (Chrome, Firefox, Safari, Edge 등)
- Python 3.x (로컬 서버 실행용) 또는 다른 HTTP 서버

### 설치 및 실행

#### 방법 1: Python HTTP 서버
```bash
cd project
python -m http.server
```
브라우저에서 `http://localhost:8000` 접속

#### 방법 2: Node.js HTTP 서버
```bash
npx http-server
```

#### 방법 3: 직접 파일 열기
`index.html` 파일을 브라우저에 드래그 앤 드롭하거나 더블클릭

## 📁 파일 구조

```
project/
├── index.html        # 메인 HTML 파일
├── styles.css        # 스타일시트 (모든 CSS)
├── script.js         # JavaScript (애니메이션 및 상호작용)
└── README.md         # 프로젝트 문서
```

## 🛠️ 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - 그래디언트, 플렉스박스, 그리드, 애니메이션
- **JavaScript (Vanilla)** - 상호작용 및 애니메이션
- **Font Awesome 6** - 아이콘

### 주요 CSS 기능
- CSS Grid & Flexbox
- CSS 그래디언트
- CSS 애니메이션 및 트랜지션
- 미디어 쿼리 (반응형)
- Backdrop filter (흐림 효과)

### 주요 JS 기능
- 부드러운 앵커 스크롤
- Intersection Observer API (스크롤 애니메이션)
- 동적 네비게이션 효과

## 🎨 커스터마이징

### 개인 정보 수정
`index.html`에서 다음 부분을 수정하세요:

1. **이름 및 제목 변경**
   ```html
   <h1 class="hero-title">안녕하세요, 저는 [이름]입니다</h1>
   <p class="hero-subtitle">직업 | 직무</p>
   ```

2. **소개 텍스트 수정**
   ```html
   <p>저는 현대적이고 사용자 친화적인...</p>
   ```

3. **프로젝트 추가/수정**
   - 프로젝트 카드 복사 후 수정
   - `project-image`의 그래디언트 색상 변경 가능

4. **기술 스택 수정**
   - skill-items 아래의 skill-item 추가/제거

5. **연락처 정보**
   ```html
   <a href="mailto:your.email@example.com">your.email@example.com</a>
   ```

### 색상 테마 변경
`styles.css`에서 주요 색상:
```css
#667eea  /* 기본 보라색 */
#764ba2  /* 그래디언트 보라색 */
```

이 색상들을 찾아 바꾸면 전체 테마가 변경됩니다.

## 📊 브라우저 호환성

| 브라우저 | 버전 | 호환성 |
|---------|------|--------|
| Chrome | 최신 | ✅ |
| Firefox | 최신 | ✅ |
| Safari | 최신 | ✅ |
| Edge | 최신 | ✅ |
| IE | 미지원 | ❌ |

## 🚀 성능 최적화

- 경량 파일 구조 (HTML, CSS, JS만 사용)
- 외부 라이브러리 최소화 (Font Awesome CDN 제외)
- CSS 애니메이션 사용 (JavaScript 애니메이션보다 효율적)
- 최적화된 이미지 그래디언트

## 📱 반응형 디자인

- **데스크탑** (1200px+): 풀 레이아웃
- **태블릿** (768px-1199px): 최적화된 레이아웃
- **모바일** (768px 이하): 스택형 레이아웃

## 🎯 향후 개선 사항

- [ ] 다크 모드 추가
- [ ] 언어 선택 (다국어 지원)
- [ ] Contact form 백엔드 연동
- [ ] 블로그 섹션 추가
- [ ] 프로젝트 상세 페이지
- [ ] 이미지 갤러리
- [ ] 다운로드 가능한 이력서

## 📝 라이선스

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

## 💡 팁과 트릭

### 부드러운 스크롤에서 무시하기
특정 링크를 부드러운 스크롤에서 제외하려면:
```html
<a href="#" class="no-smooth-scroll">링크</a>
```

### 새로운 섹션 추가
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">새로운 섹션</h2>
        <!-- 컨텐츠 -->
    </div>
</section>
```

그 후 CSS에 스타일 추가:
```css
.new-section {
    padding: 80px 20px;
    background: white;
}
```

## 🤝 기여

이 프로젝트를 개선하고 싶으신가요? 자유롭게 수정하고 배포하세요!

## 📞 연락처

- 📧 이메일: your.email@example.com
- 🔗 GitHub: [github.com/username](https://github.com/username)
- 💼 LinkedIn: [linkedin.com/in/username](https://linkedin.com/in/username)

---

**마지막 업데이트:** 2024년 4월 19일  
**버전:** 1.0.0