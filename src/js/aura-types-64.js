// 64-Result Aura System: 8 Types × 8 Intensity Brackets
// Natural variation through strength percentage, rarity tier, and keyword modifiers

const MAIN_AURA_TYPES = {
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

// 8 intensity brackets for score-based differentiation
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

// Function to get result based on type and score
function getAuraResult(baseType, score) {
    const typeData = MAIN_AURA_TYPES[baseType];
    const bracket = INTENSITY_BRACKETS.find(b => score >= b.min && score <= b.max) || INTENSITY_BRACKETS[0];

    return {
        name: typeData.name,
        color: typeData.color,
        tag: `${typeData.baseTag} ${bracket.keyword}`,
        desc: `${bracket.modifier} ${typeData.baseDesc}`,
        traits: typeData.baseTraits,
        rarity: bracket.rarity,
        strength: bracket.strength,
        badge: `${typeData.emoji} ${typeData.baseBadge}`,
        shareText: `${bracket.modifier} 오라 보유`,
        soulmate: typeData.soulmate,
        notMatch: typeData.notMatch
    };
}

// This creates 64 distinct results (8 types × 8 brackets)
