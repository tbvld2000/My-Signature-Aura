document.addEventListener('DOMContentLoaded', () => {
    // --- Data: Questions & Aura Types ---
    const questions = [
        {
            id: 1,
            question: "오랜만에 찾아온 여유로운 주말 아침, 당신의 첫 행동은?",
            options: [
                { text: "커튼 사이로 들어오는 햇살을 보며 5분 더 밍기적거린다", score: { rose: 2, lavender: 1 } },
                { text: "오늘 할 일을 머릿속으로 정리하며 바로 일어난다", score: { mint: 2, ocean: 1 } },
                { text: "일단 폰을 켜서 친구들의 SNS 업데이트를 확인한다", score: { peach: 2, amethyst: 1 } },
                { text: "포근한 이불 속에서 좋아하는 플레이리스트를 튼다", score: { lavender: 2, rose: 1 } }
            ]
        },
        {
            id: 2,
            question: "새로 생긴 카페에 갔다. 가장 먼저 눈에 들어오는 것은?",
            options: [
                { text: "인스타그램에 올리기 딱 좋은 감성적인 인테리어", score: { peach: 2, amethyst: 1 } },
                { text: "창밖으로 보이는 여유로운 풍경이나 화분들", score: { ocean: 2, mint: 1 } },
                { text: "은은하게 흐르는 커피 향과 따뜻한 조명", score: { rose: 2, lavender: 1 } },
                { text: "메뉴판에 있는 이곳만의 시그니처 음료들", score: { amethyst: 2, peach: 1 } }
            ]
        },
        {
            id: 3,
            question: "친구의 갑작스러운 '오늘 볼래?'라는 연락, 당신의 속마음은?",
            options: [
                { text: "나 마침 심심했는데! '어디서 볼까?' 바로 답장한다", score: { peach: 2, rose: 1 } },
                { text: "보고 싶긴 한데... 이미 눕기 직전이라 살짝 고민한다", score: { lavender: 2, ocean: 1 } },
                { text: "오늘 계획이 있었는데... 스케줄을 빠르게 재조정해본다", score: { mint: 2, ocean: 1 } },
                { text: "가고 싶지만 내 에너지가 충분한지 체크해본다", score: { amethyst: 2, lavender: 1 } }
            ]
        },
        {
            id: 4,
            question: "중요한 프로젝트나 시험을 끝낸 후, 당신만의 보상은?",
            options: [
                { text: "그동안 못 봤던 넷플릭스 몰아서 정주행하기", score: { rose: 2, lavender: 1 } },
                { text: "친한 친구들과 맛있는 음식을 먹으며 수다 떨기", score: { peach: 2, ocean: 1 } },
                { text: "혼자 교외로 드라이브를 가거나 조용한 전시회 방문", score: { ocean: 2, amethyst: 1 } },
                { text: "평소 사고 싶었던 예쁜 쓰레(?)나 쇼핑하기", score: { amethyst: 2, peach: 1 } }
            ]
        },
        {
            id: 5,
            question: "업무나 공부 중에 집중이 안 될 때, 당신이 하는 행동은?",
            options: [
                { text: "책상 위를 깨끗하게 정리하며 마음을 가다듬는다", score: { mint: 2, ocean: 1 } },
                { text: "달콤한 간식이나 커피 한 잔으로 당 충전을 한다", score: { peach: 2, rose: 1 } },
                { text: "창밖을 보거나 잠시 산책하며 머리를 비운다", score: { ocean: 2, lavender: 1 } },
                { text: "좋아하는 유튜브나 숏폼을 딱 10분만(?) 본다", score: { amethyst: 2, rose: 1 } }
            ]
        },
        {
            id: 6,
            question: "낯선 사람들과 함께하는 모임에 참석했다. 당신의 모습은?",
            options: [
                { text: "먼저 말을 건네며 분위기를 부드럽게 만든다", score: { peach: 2, rose: 1 } },
                { text: "조용히 경청하며 다른 사람들의 태도를 살핀다", score: { ocean: 2, lavender: 2 } },
                { text: "어색함을 깨기 위해 리액션을 활발하게 해준다", score: { rose: 2, mint: 1 } },
                { text: "공통 관심사가 나오면 그때부터 적극적으로 대화한다", score: { amethyst: 2, mint: 1 } }
            ]
        },
        {
            id: 7,
            question: "길을 걷다 정말 예쁜 하늘을 발견했다. 당신이 가장 먼저 하는 일은?",
            options: [
                { text: "일단 멈춰서 가장 예쁜 각도로 사진을 찍는다", score: { amethyst: 2, peach: 1 } },
                { text: "잠시 멍하니 하늘을 보며 깊게 숨을 들이마신다", score: { ocean: 2, lavender: 2 } },
                { text: "소중한 사람에게 '하늘 좀 봐'라며 톡을 보낸다", score: { rose: 2, peach: 1 } },
                { text: "사진 한 장 찍고 바로 다시 내 갈 길을 간다", score: { mint: 2, ocean: 1 } }
            ]
        },
        {
            id: 8,
            question: "당신이 생각하는 이상적인 '갓생'의 모습은?",
            options: [
                { text: "매일 한 줄이라도 기록을 남기는 꾸준한 삶", score: { mint: 2, lavender: 1 } },
                { text: "주말마다 새로운 영감을 찾아 떠나는 열정적인 삶", score: { peach: 2, amethyst: 1 } },
                { text: "내 마음의 평온을 지키며 사람들에게 다정한 삶", score: { rose: 2, ocean: 1 } },
                { text: "하나를 하더라도 확실하게 성과를 내는 효율적인 삶", score: { mint: 2, ocean: 1 } }
            ]
        },
        {
            id: 9,
            question: "사소한 일로 스트레스를 받았을 때, 당신의 해소법은?",
            options: [
                { text: "좋아하는 향초를 켜고 반신욕이나 힐링타임", score: { lavender: 2, rose: 1 } },
                { text: "노트나 일기장에 솔직한 감정을 쏟아붓는다", score: { ocean: 2, amethyst: 1 } },
                { text: "자극적이고 매운 음식을 먹으며 스트레스를 푼다", score: { peach: 2, mint: 1 } },
                { text: "잠을 푹 자거나 생각 없이 단순 노동(?)을 한다", score: { mint: 2, lavender: 1 } }
            ]
        },
        {
            id: 10,
            question: "여행을 계획할 때, 당신이 가장 중요하게 생각하는 것은?",
            options: [
                { text: "어디서 무엇을 할지 꼼꼼하게 짠 동선과 계획", score: { mint: 2, ocean: 1 } },
                { text: "여행지 특유의 분위기를 느낄 수 있는 숙소와 맛집", score: { peach: 2, amethyst: 1 } },
                { text: "발길 닿는 대로 즐기는 여유와 뜻밖의 만남", score: { ocean: 2, lavender: 2 } },
                { text: "함께 가는 사람과 쌓을 소중한 추억과 사진들", score: { rose: 2, peach: 1 } }
            ]
        }
    ];

    // 64-Result Aura System: 8 Types × 8 Intensity Brackets
    const auraTypes = {
        lavender: {
            name: "Melody Lavender",
            color: "#E0C3FC",
            emoji: "🌸",
            baseTag: "#섬세한_몽상가",
            baseDesc: "물 흐르듯 유연하고 섬세한 감성을 가진 당신.",
            baseTraits: [
                "작은 것에서도 의미를 찾는 예민한 감수성",
                "타인의 감정을 민감하게 캐치하지만 때론 지치기도 함",
                "혼자만의 시간과 기록을 소중히 여기는 내향형"
            ],
            baseBadge: "감성 예술가",
            soulmate: "Cosmic Mint",
            notMatch: "Peach Fizz"
        },
        peach: {
            name: "Peach Fizz",
            color: "#FFD194",
            emoji: "🍑",
            baseTag: "#비타민_에너지",
            baseDesc: "어디서나 기분 좋은 에너지를 만드는 밝은 오라.",
            baseTraits: [
                "주변 사람들에게 긍정 에너지를 전파하는 비타민",
                "새로운 경험과 만남을 즐기지만 가끔 산만함",
                "솔직하고 당당한 표현력, 때론 너무 직설적"
            ],
            baseBadge: "에너지 메이커",
            soulmate: "Rose Radiance",
            notMatch: "Amethyst Glow"
        },
        mint: {
            name: "Cosmic Mint",
            color: "#96E6A1",
            emoji: "🌿",
            baseTag: "#현명한_가이드",
            baseDesc: "혼란 속에서도 중심을 잃지 않는 명쾌함.",
            baseTraits: [
                "복잡한 상황을 단순하고 명확하게 정리하는 능력",
                "꾸준함에서 오는 단단한 내면, 하지만 융통성 부족",
                "효율적이고 이성적이지만 감정 표현은 서툴 수 있음"
            ],
            baseBadge: "냉철한 전략가",
            soulmate: "Melody Lavender",
            notMatch: "Oceanic Bliss"
        },
        ocean: {
            name: "Oceanic Bliss",
            color: "#89F7FE",
            emoji: "🌊",
            baseTag: "#깊은_공감자",
            baseDesc: "깊고 넓은 바다처럼 타인을 품어주는 따뜻한 오라.",
            baseTraits: [
                "말하지 않아도 마음을 알아주는 깊은 통찰력",
                "안정감 있는 침착함, 하지만 결정이 느릴 수 있음",
                "진심 어린 소통을 중요시하며 가식을 싫어함"
            ],
            baseBadge: "공감의 대가",
            soulmate: "Amethyst Glow",
            notMatch: "Cosmic Mint"
        },
        rose: {
            name: "Rose Radiance",
            color: "#FECFEF",
            emoji: "🌹",
            baseTag: "#다정한_낭만파",
            baseDesc: "세상의 아름다운 것들을 사랑하는 다정한 영혼.",
            baseTraits: [
                "작은 다정함에도 크게 감동하는 따뜻한 마음",
                "주변을 편안하게 만드는 포근함, 때론 눈치를 봄",
                "사랑과 관심에 민감하며 외로움을 잘 타는 편"
            ],
            baseBadge: "낭만주의자",
            soulmate: "Peach Fizz",
            notMatch: "Oceanic Bliss"
        },
        amethyst: {
            name: "Amethyst Glow",
            color: "#BBADFF",
            emoji: "💎",
            baseTag: "#유니크한_천재성",
            baseDesc: "당신만의 독특한 세계관과 뚜렷한 색깔.",
            baseTraits: [
                "취향이 확고하고 독립적인 사고방식의 소유자",
                "창의적이고 자유로우나 때론 외로울 수 있음",
                "자신만의 속도로 나아가며 타협을 잘 안 함"
            ],
            baseBadge: "독창적 창조자",
            soulmate: "Oceanic Bliss",
            notMatch: "Peach Fizz"
        },
        amber: {
            name: "Amber Flame",
            color: "#FF9A56",
            emoji: "🔥",
            baseTag: "#열정_리더",
            baseDesc: "타오르는 열정으로 주변을 이끄는 카리스마.",
            baseTraits: [
                "열정적으로 목표를 추구하는 추진력",
                "주변 사람들을 이끄는 타고난 리더십",
                "도전을 두려워하지 않는 용기, 가끔 무모함"
            ],
            baseBadge: "열정 리더",
            soulmate: "Jade Serenity",
            notMatch: "Melody Lavender"
        },
        jade: {
            name: "Jade Serenity",
            color: "#7EE8AF",
            emoji: "🍃",
            baseTag: "#평온한_중재자",
            baseDesc: "고요한 숲처럼 평화로운 기운을 전달하는 조화의 달인.",
            baseTraits: [
                "평온함으로 갈등을 중재하는 능력",
                "조화로운 관계를 만드는 섬세한 배려",
                "차분하고 신중한 판단력, 때론 우유부단"
            ],
            baseBadge: "평화 중재자",
            soulmate: "Amber Flame",
            notMatch: "Peach Fizz"
        }
    };

    // 8 intensity brackets
    const INTENSITY_BRACKETS = [
        { min: 0, max: 12, strength: 45, rarity: 35, modifier: "온화한", keyword: "#발현중" },
        { min: 13, max: 25, strength: 58, rarity: 28, modifier: "은은한", keyword: "#성장중" },
        { min: 26, max: 38, strength: 68, rarity: 22, modifier: "안정적인", keyword: "#균형형" },
        { min: 39, max: 50, strength: 76, rarity: 16, modifier: "명확한", keyword: "#확립형" },
        { min: 51, max: 63, strength: 84, rarity: 11, modifier: "강렬한", keyword: "#진화형" },
        { min: 64, max: 76, strength: 91, rarity: 7, modifier: "압도적인", keyword: "#숙련형" },
        { min: 77, max: 88, strength: 96, rarity: 4, modifier: "절대적인", keyword: "#전문가" },
        { min: 89, max: 100, strength: 99, rarity: 2, modifier: "전설적인", keyword: "#마스터" }
    ];

    function getAuraResult(baseType, score) {
        const typeData = auraTypes[baseType];
        // Ensure score is 0-100
        const safeScore = Math.max(0, Math.min(100, score));
        const bracket = INTENSITY_BRACKETS.find(b => safeScore >= b.min && safeScore <= b.max) || INTENSITY_BRACKETS[0];

        return {
            name: typeData.name,
            color: typeData.color,
            tag: `${typeData.baseTag} ${bracket.keyword}`,
            desc: `${bracket.modifier} ${typeData.baseDesc}`,
            traits: typeData.baseTraits,
            rarity: bracket.rarity, // Allows dynamic rarity based on strength
            strength: safeScore, // Use the actual calculated score
            badge: `${typeData.emoji} ${typeData.baseBadge}`,
            soulmate: typeData.soulmate,
            notMatch: typeData.notMatch
        };
    }

    // --- State ---
    let userName = "";
    let currentStep = 0;
    let scores = { lavender: 0, peach: 0, mint: 0, ocean: 0, rose: 0, amethyst: 0 };

    // --- DOM Elements ---
    const app = document.getElementById('app');
    const startBtn = document.getElementById('start-btn');
    const nameView = document.getElementById('name-view');
    const landingView = document.getElementById('landing-view');
    const quizView = document.getElementById('quiz-view');
    const resultView = document.getElementById('result-view');
    const nameInput = document.getElementById('user-name-input');
    const confirmNameBtn = document.getElementById('confirm-name-btn');
    const magneticCursor = document.getElementById('magnetic-cursor');

    // --- Utility Functions ---
    const manageFocus = (element) => {
        if (!element) return;
        // Small delay to ensure element is visible
        setTimeout(() => {
            element.focus();
            // Scroll into view if needed
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    const updateAriaDisabled = (button, disabled) => {
        button.disabled = disabled;
        button.setAttribute('aria-disabled', disabled.toString());
    };

    // --- Ultimate Sensory: Sound Synthesis ---
    let audioCtx;
    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
        console.warn('AudioContext not supported:', e);
    }
    const playSound = (freq, type, duration, vol = 0.1) => {
        if (!audioCtx) return; // Skip if AudioContext not available
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(vol, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            console.warn('Sound playback failed:', e);
        }
    };

    const sfx = {
        tick: () => playSound(800, 'sine', 0.1, 0.05),
        chime: () => {
            playSound(600, 'triangle', 1.5, 0.1);
            setTimeout(() => playSound(800, 'triangle', 1.5, 0.05), 100);
        },
        pulse: () => playSound(200, 'sine', 0.5, 0.1)
    };

    // --- Functions ---
    const updateParticipantCount = () => {
        const countEl = document.getElementById('participant-count');
        if (!countEl) return;

        let count = 12402;
        setInterval(() => {
            count += Math.floor(Math.random() * 3) + 1;
            countEl.innerText = count.toLocaleString();
            countEl.style.transition = 'color 0.3s ease';
            countEl.style.color = '#fff';
            setTimeout(() => countEl.style.color = 'var(--aura-lavender)', 300);
        }, 3000);
    };

    updateParticipantCount();

    const triggerHaptic = (ms = 10) => {
        if (navigator.vibrate) {
            navigator.vibrate(ms);
        }
    };

    // Magnetic Cursor Logic - DISABLED for cleaner UX
    // document.addEventListener('mousemove', (e) => {
    //     magneticCursor.style.opacity = '1';
    //     magneticCursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
    // }, { passive: true });

    const showView = (viewName) => {
        [landingView, quizView, resultView, nameView].forEach(view => {
            if (view) {
                view.style.display = 'none';
                view.classList.remove('active');
            }
        });

        let target;
        if (viewName === 'name') target = nameView;
        else if (viewName === 'quiz') target = quizView;
        else if (viewName === 'result') target = resultView;
        else target = landingView;

        target.style.display = 'flex';
        setTimeout(() => {
            target.classList.add('active');
            // Focus management for accessibility
            const focusTarget = target.querySelector('button:not([disabled]), input, [tabindex="0"]');
            if (focusTarget) manageFocus(focusTarget);
        }, 10);
    };

    const updateBackgroundAura = () => {
        const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const winningColor = auraTypes[winner].color;
        document.documentElement.style.setProperty('--accent', winningColor);

        // Dynamic blob shifting
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, i) => {
            blob.style.transition = 'background 2s ease-in-out';
            if (i === 2) blob.style.background = winningColor;
        });
    };

    const renderQuestion = () => {
        const q = questions[currentStep];
        const progress = ((currentStep + 1) / questions.length) * 100;

        quizView.innerHTML = `
            <div class="card quiz-card">
                <div class="progress-bar" role="progressbar" aria-valuenow="${currentStep + 1}" aria-valuemin="0" aria-valuemax="${questions.length}" aria-label="퀴즈 진행률">
                    <div class="progress-inner" style="width: ${progress}%"></div>
                </div>
                <div class="step-counter" aria-hidden="true">STEP ${currentStep + 1} / ${questions.length}</div>
                <h2>${q.question}</h2>
                <div class="options-container" role="radiogroup" aria-label="답변 선택">
                    ${q.options.map((opt, idx) => `
                        <button class="option-btn" data-idx="${idx}" role="radio" aria-checked="false">${opt.text}</button>
                    `).join('')}
                </div>
            </div>
        `;

        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach((btn, idx) => {
            btn.style.animationDelay = `${idx * 0.1}s`;

            // Click handler
            btn.addEventListener('click', (e) => {
                sfx.tick();
                triggerHaptic(15);
                handleOptionClick(e);
            });

            // Keyboard handler
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    sfx.tick();
                    triggerHaptic(15);
                    handleOptionClick(e);
                }
                // Arrow key navigation
                else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault();
                    const nextBtn = optionButtons[Math.min(idx + 1, optionButtons.length - 1)];
                    nextBtn.focus();
                }
                else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prevBtn = optionButtons[Math.max(idx - 1, 0)];
                    prevBtn.focus();
                }
            });
        });

        // Focus first option
        if (optionButtons.length > 0) {
            manageFocus(optionButtons[0]);
        }
    };

    const handleOptionClick = (e) => {
        const optionIdx = e.target.getAttribute('data-idx');
        if (!optionIdx) return;

        const selectedOption = questions[currentStep].options[optionIdx];
        for (const [type, score] of Object.entries(selectedOption.score)) {
            scores[type] += score;
        }

        updateBackgroundAura();
        currentStep++;

        const card = document.querySelector('.quiz-card');
        card.style.opacity = '0';
        card.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            if (currentStep < questions.length) {
                renderQuestion();
            } else {
                showCalculating();
            }
        }, 300);
    };

    const showCalculating = () => {
        sfx.pulse();
        const analysisSteps = [
            `${userName}님의 고유 주파수를 스캔하는 중...`,
            "내면의 빛깔을 겹쳐보고 있어요...",
            `${userName}님에게 가장 잘 어울리는 오라를 매핑 중...`,
            "거의 다 됐어요! 최고의 아우라가 보입니다..."
        ];

        quizView.innerHTML = `
            <div class="card calculating-card">
                <div class="loader"></div>
                <h2 id="analysis-text" style="margin-top: 2rem; min-height: 4.5rem; word-break: keep-all;">${analysisSteps[0]}</h2>
                <div class="progress-bar" style="margin-top: 2rem; height: 4px;">
                    <div class="progress-inner liquid-progress" id="calc-progress" style="width: 0%"></div>
                </div>
            </div>
        `;

        const textEl = document.getElementById('analysis-text');
        const progressEl = document.getElementById('calc-progress');

        let step = 0;
        const interval = setInterval(() => {
            step++;
            if (step < analysisSteps.length) {
                textEl.style.opacity = '0';
                setTimeout(() => {
                    textEl.innerText = analysisSteps[step];
                    textEl.style.opacity = '1';
                }, 300);
                progressEl.style.width = `${(step / analysisSteps.length) * 100}%`;
            }
        }, 800);

        setTimeout(() => {
            clearInterval(interval);
            showResult();
        }, 3500);
    };

    const generateConstellationSVG = (scores, color) => {
        const keys = Object.keys(scores);
        const max = Math.max(...Object.values(scores)) || 1;
        const points = keys.map((key, i) => {
            const angle = (i / keys.length) * Math.PI * 2;
            const r = (scores[key] / max) * 50 + 10;
            return `${50 + Math.cos(angle) * r},${50 + Math.sin(angle) * r}`;
        }).join(' ');

        return `
            <svg viewBox="0 0 100 100" class="constellation-map">
                <polygon points="${points}" fill="${color}33" stroke="${color}" stroke-width="0.5" />
                ${keys.map((_, i) => {
            const angle = (i / keys.length) * Math.PI * 2;
            return `<line x1="50" y1="50" x2="${50 + Math.cos(angle) * 60}" y2="${50 + Math.sin(angle) * 60}" stroke="rgba(255,255,255,0.05)" stroke-width="0.2" />`;
        }).join('')}
                <circle cx="50" cy="50" r="2" fill="${color}" />
            </svg>
        `;
    };

    const showResult = () => {
        sfx.chime();
        const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        // Calculate aura strength (0-100%)
        const totalScore = Object.values(scores).reduce((sum, val) => sum + val, 0);
        const winnerScore = scores[winner];
        // Calculate raw percentage then apply curve
        let strength = Math.min(100, Math.round((winnerScore / totalScore) * 150));

        // Use the new dynamic result system
        const result = getAuraResult(winner, strength);

        // Rarity message based on dynamic rarity
        const getRarityMessage = (rarity) => {
            if (rarity <= 5) return '🌟 전설적인 아우라!';
            if (rarity <= 12) return '✨ 매우 희귀한 아우라!';
            if (rarity <= 25) return '💫 희귀한 아우라!';
            return '⭐ 특별한 아우라!';
        };

        // Rarity message
        const getRarityMessage = (rarity) => {
            if (rarity <= 10) return '🌟 초희귀 아우라!';
            if (rarity <= 15) return '✨ 매우 희귀한 아우라!';
            if (rarity <= 20) return '💫 희귀한 아우라!';
            return '⭐ 특별한 아우라!';
        };

        document.documentElement.style.setProperty('--accent', result.color);

        showView('result');
        resultView.innerHTML = `
            <div class="result-container">
                <div class="card result-card compact" id="capture-area">
                    <!-- Rarity Badge -->
                    <div class="rarity-badge" style="background: linear-gradient(135deg, ${result.color}, ${result.color}CC);">
                        ${getRarityMessage(result.rarity)} 상위 ${result.rarity}%
                    </div>
                    
                    <!-- Compact Header with Aura Circle -->
                    <div class="result-compact-header">
                        <div class="aura-circle" style="--aura-color: ${result.color}">
                            <div class="aura-ring ring-1"></div>
                            <div class="aura-ring ring-2"></div>
                            <div class="aura-ring ring-3"></div>
                            <div class="aura-core">
                                <span class="aura-emoji">${getAuraEmoji(winner)}</span>
                            </div>
                        </div>
                        <h1 class="aura-name-compact">${result.name}</h1>
                        <span class="aura-tag-compact">${result.tag}</span>
                        
                        <!-- Special Badge -->
                        <div class="special-badge" style="color: ${result.color};">
                            ${result.badge}
                        </div>
                    </div>
                    
                    <!-- User Name Badge with Strength -->
                    <div class="user-badge" style="background: linear-gradient(135deg, ${result.color}33, ${result.color}11);">
                        <span style="color: ${result.color};">✦</span> ${userName}님의 아우라
                    </div>
                    
                    <!-- Aura Strength Bar -->
                    <div class="strength-meter">
                        <div class="strength-label">
                            <span>아우라 강도</span>
                            <span class="strength-value" style="color: ${result.color};">${strength}%</span>
                        </div>
                        <div class="strength-bar">
                            <div class="strength-fill" style="width: ${strength}%; background: linear-gradient(90deg, ${result.color}, ${result.color}CC);"></div>
                        </div>
                    </div>
                    
                    <!-- Description -->
                    <p class="aura-desc-compact">${result.desc}</p>
                    
                    <!-- Traits - Compact Grid -->
                    <div class="traits-grid">
                        ${result.traits.map(t => `
                            <div class="trait-item">
                                <span class="trait-icon" style="color: ${result.color};">●</span>
                                <span class="trait-text">${t}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <!-- Match Info - Horizontal -->
                    <div class="match-compact">
                        <div class="match-item good">
                            <span class="match-label">궁합 GOOD</span>
                            <span class="match-value">${result.soulmate}</span>
                        </div>
                        <div class="match-divider"></div>
                        <div class="match-item bad">
                            <span class="match-label">거리두기</span>
                            <span class="match-value">${result.notMatch}</span>
                        </div>
                    </div>
                </div>
                
                <!-- Action Buttons: Centered -->
                <div class="btn-group" style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-top: 1.5rem;">
                    <button class="btn btn-outline" onclick="location.reload()" style="flex: 0 1 120px;">다시하기</button>
                    <button class="btn btn-secondary" id="download-btn" style="flex: 1; min-width: 140px; max-width: 200px;">📥 이미지 저장</button>
                    <button class="btn btn-primary" id="share-btn" style="flex: 1; min-width: 140px; max-width: 200px;">🔗 링크 공유</button>
                </div>
                
                <!-- Toast notification -->
                <div id="toast" class="toast"></div>
            </div>
        `;

        const card = document.querySelector('.result-card');
        addTiltEffect(card);

        // Download button handler
        document.getElementById('download-btn').addEventListener('click', () => {
            downloadImage(result, strength);
        });

        // Share button handler
        document.getElementById('share-btn').addEventListener('click', () => {
            shareLink();
        });
    };

    // Helper function to get emoji for each aura type
    const getAuraEmoji = (type) => {
        const emojis = {
            lavender: '🌸',
            peach: '🍑',
            mint: '🌿',
            ocean: '🌊',
            rose: '🌹',
            amethyst: '💎'
        };
        return emojis[type] || '✨';
    };

    const addTiltEffect = (element) => {
        const handleMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = (e.clientX || e.touches[0].clientX) - rect.left;
            const y = (e.clientY || e.touches[0].clientY) - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 40;
            const rotateY = (x - centerX) / 40;
            element.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };
        const handleReset = () => {
            element.style.transform = `perspective(2000px) rotateX(0deg) rotateY(0deg)`;
        };
        element.addEventListener('mousemove', handleMove);
        element.addEventListener('mouseleave', handleReset);
        element.addEventListener('touchmove', handleMove);
        element.addEventListener('touchend', handleReset);
    };

    const showToast = (message, duration = 3000) => {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    };

    const downloadImage = (result, strength) => {
        const area = document.getElementById('capture-area');
        const btn = document.getElementById('download-btn');
        const originalText = btn.innerHTML;

        btn.innerHTML = '⏳ 생성 중...';
        btn.disabled = true;

        html2canvas(area, {
            backgroundColor: '#0F1123',
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: true,
            foreignObjectRendering: false,
            imageTimeout: 0,
            removeContainer: true
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');

            // Create and show modal
            const modal = document.createElement('div');
            modal.className = 'image-modal-overlay';
            modal.innerHTML = `
                <div class="image-modal-content">
                    <p class="image-modal-tip">✨ 이미지를 꾹 눌러서 저장하세요!</p>
                    <img src="${imgData}" class="image-modal-img" alt="나의 아우라 결과">
                    <button class="image-modal-close">닫기</button>
                </div>
            `;

            document.body.appendChild(modal);

            // Prevent body scroll
            document.body.style.overflow = 'hidden';

            // Close handler
            const closeBtn = modal.querySelector('.image-modal-close');
            const closeHandler = () => {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
            };

            closeBtn.onclick = closeHandler;
            modal.onclick = (e) => {
                if (e.target === modal) closeHandler();
            };

            btn.innerHTML = '✅ 생성 완료!';
            showToast('👆 이미지를 꾹 눌러서 저장하세요!');
            triggerHaptic(50);

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);

        }).catch(err => {
            console.error('Capture failed:', err);
            btn.innerHTML = '❌ 실패';
            showToast('이미지 생성에 실패했습니다.');
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        });
    };

    const shareLink = () => {
        const btn = document.getElementById('share-btn');
        const originalText = btn.innerHTML;
        const siteUrl = 'https://my-signature-aura.vercel.app/';

        btn.innerHTML = '🔗 공유 준비 중...';
        btn.disabled = true;

        const shareData = {
            title: '나만의 시그니처 아우라 테스트',
            text: '✨ 나의 아우라를 확인해보세요!\n당신의 시그니처 컬러는 무엇일까요?',
            url: siteUrl
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => {
                    btn.innerHTML = '✅ 공유 완료!';
                    showToast('🔗 링크가 공유되었습니다!');

                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                    }, 2000);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        // User cancelled
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        return;
                    }
                    // Share failed, try clipboard
                    copyToClipboard(siteUrl, btn, originalText);
                });
        } else {
            // No share API, use clipboard
            copyToClipboard(siteUrl, btn, originalText);
        }
    };

    const copyToClipboard = (text, btn, originalText) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    btn.innerHTML = '✅ 복사 완료!';
                    showToast('📋 링크가 클립보드에 복사되었습니다!');

                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                    }, 2000);
                })
                .catch(err => {
                    console.error('Copy failed:', err);
                    btn.innerHTML = '❌ 실패';
                    showToast('링크 복사에 실패했습니다.');
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                    }, 2000);
                });
        } else {
            // Fallback for older browsers
            btn.innerHTML = '❌ 지원 안 됨';
            showToast('이 브라우저는 링크 복사를 지원하지 않습니다.');
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        }
    };

    // --- Interaction Logic ---
    startBtn.addEventListener('click', () => {
        sfx.pulse();
        showView('name');
    });

    nameInput.addEventListener('input', (e) => {
        userName = e.target.value.trim();
        const isValid = userName.length > 0;
        updateAriaDisabled(confirmNameBtn, !isValid);
    });

    confirmNameBtn.addEventListener('click', () => {
        if (!userName) return;
        sfx.pulse();
        if (audioCtx) audioCtx.resume(); // Ensure audio context is started after interaction
        showView('quiz');
        renderQuestion();
    });

    // Keyboard support for name input
    nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && userName.length > 0) {
            e.preventDefault();
            confirmNameBtn.click();
        }
    });
});

