# Aura Test - 나만의 시그니처 아우라 테스트

✨ 10개의 질문으로 당신의 고유한 아우라 컬러를 찾아보세요!

![Aura Test Preview](https://img.shields.io/badge/Aura-Test-E0C3FC?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

## 🌟 주요 기능

### 💎 희귀도 시스템
- 6가지 아우라 타입 (상위 9% ~ 25%)
- 동적 희귀도 메시지
- 빛나는 뱃지 애니메이션

### 📊 아우라 강도 미터
- 0-100% 강도 계산
- 애니메이션 프로그레스 바
- 펄스 효과로 생동감 표현

### 🏅 특별 뱃지 시스템
각 아우라 타입마다 고유한 칭호:
- 🌸 감성 예술가 (Lavender)
- 🍑 에너지 메이커 (Peach)
- 🌿 냉철한 전략가 (Mint)
- 🌊 공감의 대가 (Ocean)
- 🌹 낭만주의자 (Rose)
- 💎 독창적 창조자 (Amethyst)

### ✨ UX 최적화
- 완벽한 한글 텍스트 줄바꿈
- 키보드 네비게이션 지원
- WCAG 접근성 준수
- 모바일 반응형 디자인
- 컴팩트한 결과 카드 (공유 최적화)

## 🚀 시작하기

### 실행 방법

1. 저장소 클론
```bash
git clone https://github.com/YOUR_USERNAME/aura-test.git
cd aura-test
```

2. 브라우저에서 열기
```bash
# index.html 파일을 브라우저에서 직접 열기
```

또는 로컬 서버 실행:
```bash
# Python 3
python -m http.server 8000

# Node.js (live-server)
npx live-server
```

3. 브라우저에서 http://localhost:8000 접속

## 📁 프로젝트 구조

```
aura-test/
├── index.html                 # 메인 HTML
├── src/
│   ├── js/
│   │   └── main.js           # 메인 로직
│   └── styles/
│       ├── main.css          # 메인 스타일
│       └── accessibility.css # 접근성 스타일
├── debug.html                # 디버그 페이지
└── README.md
```

## 🎨 아우라 타입

| 타입 | 색상 | 희귀도 | 특징 |
|------|------|--------|------|
| **Melody Lavender** | #E0C3FC | 상위 18% | 섬세한 몽상가 |
| **Peach Fizz** | #FFD194 | 상위 25% | 비타민 에너지 |
| **Cosmic Mint** | #96E6A1 | 상위 15% | 현명한 가이드 |
| **Oceanic Bliss** | #89F7FE | 상위 12% | 깊은 공감자 |
| **Rose Radiance** | #FECFEF | 상위 22% | 다정한 낭만파 |
| **Amethyst Glow** | #BBADFF | 상위 9% | 유니크한 천재성 |

## 🛠️ 기술 스택

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Design**: Glassmorphism, Custom Animations
- **Libraries**: 
  - html2canvas (결과 이미지 생성)
  - Pretendard Font (한글 폰트)
  - Outfit Font (영문 폰트)
- **Accessibility**: ARIA labels, Semantic HTML
- **Features**: Web Share API, LocalStorage

## 💡 주요 특징

### 접근성 (Accessibility)
- ✅ ARIA 레이블 완벽 지원
- ✅ 키보드 네비게이션 (Tab, Enter, 화살표)
- ✅ 스크린 리더 지원
- ✅ 색상 대비 WCAG AA 준수
- ✅ 모션 감소 선호 지원

### 반응형 디자인
- ✅ 모바일 최적화 (320px~)
- ✅ 터치 타겟 최소 48px
- ✅ 가로 모드 지원
- ✅ 다양한 화면 크기 대응

### 성능 최적화
- ✅ GPU 가속 애니메이션
- ✅ Passive 이벤트 리스너
- ✅ 효율적인 DOM 조작
- ✅ 최소한의 외부 라이브러리

## 📱 공유 기능

결과 공유 시 자동으로 생성되는 메시지:
```
✨ 나는 희귀한 Oceanic Bliss!
🌊 공감의 대가 | 강도 87%
깊은 공감능력 보유 🎨

#아우라테스트 #성격테스트 #MBTI
```

## 🎯 브라우저 지원

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ 모바일 브라우저

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

## 🙏 크레딧

- 폰트: [Pretendard](https://github.com/orioncactus/pretendard), [Outfit](https://fonts.google.com/specimen/Outfit)
- 아이콘: Unicode Emoji
- 이미지 캡처: html2canvas

## 🚀 개발 로드맵

- [ ] 다국어 지원 (영어, 일본어)
- [ ] 다크모드 전환
- [ ] 결과 히스토리 저장
- [ ] 친구와 궁합 비교
- [ ] 소셜 로그인 연동

---

Made with ❤️ by [Your Name]
