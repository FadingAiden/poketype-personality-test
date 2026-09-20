// ============================================================
// TYPE COLORS
// ============================================================

const typeColors = {

    Normal: "#FFFFFF",

    Fire: "#ff6e00",

    Water: "#4498ff",

    Electric: "#eaff00",

    Grass: "#15ff00",

    Ice: "#03fff2",

    Fighting: "#d20700",

    Poison: "#cc00ff",

    Ground: "#926527",

    Flying: "#97a4d8",

    Psychic: "#F95587",

    Bug: "#c4de00",

    Rock: "#b6aa71",

    Ghost: "#693fa1",

    Dragon: "#6F35FC",

    Dark: "#000000",

    Steel: "#77bebf",

    Fairy: "#fa70ff"

};


// ============================================================
// TYPE DESCRIPTIONS
// ============================================================

const types = {

    Normal: {
        description:
            "You value balance, stability, and common sense. You tend to approach life in a grounded and practical way, preferring steady progress over unnecessary extremes. You are cooperative, dependable, and comfortable with familiar routines, and you often help create a sense of calm and normality around you."
    },

    Water: {
        description:
            "You are adaptable, receptive, and comfortable changing with your surroundings. You tend to read the room and adjust yourself to different people and situations, allowing you to fit into many environments. You value freedom and belonging, although having too many possibilities can sometimes make it difficult for you to settle firmly on one direction."
    },

    Fire: {
        description:
            "You experience life with intensity and passion. When something matters to you, you tend to throw yourself into it completely, expressing your feelings and opinions openly. You are assertive, driven, and willing to stand your ground, although your intensity can sometimes make you act before you have had time to cool down."
    },

    Grass: {
        description:
            "You are patient, grounded, and oriented toward growth. You prefer to cultivate things carefully rather than force them to happen immediately, and you tend to value harmony, mindfulness, and thoughtful preparation. You often notice details and consequences that others overlook, making you deliberate and conscientious in your actions."
    },

    Electric: {
        description:
            "You are energetic, playful, and drawn toward stimulation and new experiences. You enjoy movement, spontaneity, adventure, and the feeling that something interesting could happen at any moment. You bring energy into your surroundings and often prefer excitement and experimentation over predictable routines."
    },

    Ice: {
        description:
            "You approach the world through analysis, reason, and precision. You tend to value clarity over emotional comfort and prefer understanding how something works before deciding what to do about it. You are composed and intellectually independent, often remaining calm when others become overwhelmed."
    },

    Bug: {
        description:
            "You are observant, unconventional, and deeply curious about subjects that capture your attention. You may keep much of your inner world private, while developing surprisingly deep knowledge in areas that interest you. You tend to notice unusual connections and can approach problems from perspectives that others might not consider."
    },

    Flying: {
        description:
            "You are imaginative, optimistic, and drawn toward possibility. You naturally think beyond immediate limitations and enjoy exploring ideas, places, experiences, and futures that have not yet taken shape. Freedom and adventure are important to you, and you tend to be energized by dreams rather than constrained by convention."
    },

    Fighting: {
        description:
            "You are courageous, principled, and willing to confront difficult situations directly. You tend to believe that some things are worth standing up for, especially when fairness, loyalty, or the protection of others is involved. You can be disciplined and resolute, preferring to face challenges rather than avoid them."
    },

    Psychic: {
        description:
            "You are contemplative, perceptive, and naturally interested in what lies beneath the surface. You tend to notice subtle patterns, motives, and possibilities that are not immediately obvious. You enjoy reflection, abstract ideas, and mystery, and you often influence situations quietly rather than through force."
    },

    Ground: {
        description:
            "You value structure, reliability, practicality, and order. You tend to trust experience and established standards more than impulsive experimentation, and you often feel comfortable taking responsibility when something needs to be organized or controlled. You prefer knowing where things stand and tend to approach unfamiliar situations cautiously."
    },

    Rock: {
        description:
            "You are resilient, direct, realistic, and difficult to shake once you have made up your mind. You value honesty and straightforward communication, preferring clear facts over unnecessary complications. When circumstances become difficult, you tend to endure them rather than search for an easy way around them."
    },

    Ghost: {
        description:
            "You are imaginative, witty, mysterious, and strongly connected to memory and the past. You may have a playful or whimsical side alongside a darker and more reflective inner world. You enjoy unusual perspectives, clever humor, and emotional depth, and experiences that hurt you can sometimes remain with you for a very long time."
    },

    Poison: {
        description:
            "You are perceptive, guarded, pragmatic, and highly aware of social dynamics. You tend to protect yourself by understanding what people want and recognizing the hidden incentives within situations. Independence and security matter strongly to you, and you are willing to be calculating when you believe that doing so is necessary for your protection."
    },

    Steel: {
        description:
            "You are meticulous, disciplined, persistent, and strongly motivated by mastery. You tend to hold yourself to demanding standards and are willing to invest considerable effort into becoming exceptionally good at something. You notice imperfections easily and often feel most satisfied when you know you have pushed your abilities as far as they can go."
    },

    Dark: {
        description:
            "You are defiant, fearless, provocative, and resistant to conventional expectations. You tend to question rules that you consider arbitrary and are comfortable exploring territory that others might avoid. You value independence and personal freedom, and you may deliberately challenge boundaries simply to see what happens."
    },

    Dragon: {
        description:
            "You are ambitious, commanding, intense, and strongly oriented toward greatness. You tend to set high standards for yourself and others and are comfortable taking the lead when you believe you know where things should go. You are drawn toward achievement, authority, and becoming someone whose presence carries significant weight."
    },

    Fairy: {
        description:
            "You are charming, playful, emotionally perceptive, and drawn toward amusement. You enjoy creating memorable experiences and can often influence people through warmth, humor, charisma, or cleverness rather than direct force. Beneath a friendly or whimsical exterior, you may be considerably more strategic and observant than people initially realize."
    }

};

// ======================================================
// QUESTION HELPER
// ======================================================

// Main type always receives 1.00.
// Overlapping types receive much smaller factors.
function q(mainType, text, overlaps = {}) {
    return {
        mainType,
        text,
        weights: {
            [mainType]: 1,
            ...overlaps
        }
    };
}


// ======================================================
// 75 QUESTIONS
// ======================================================

const questions = [

    // ---------------- NORMAL ----------------

    q(
        "Normal",
        "I feel most comfortable when life has a steady, familiar rhythm.",
        { Grass: 0.20, Ground: 0.15 }
    ),

    q(
        "Normal",
        "I usually trust practical common sense more than dramatic or unusual approaches.",
        { Ground: 0.20, Rock: 0.15 }
    ),

    q(
        "Normal",
        "I would rather keep a group peaceful and cooperative than turn every disagreement into a confrontation.",
        { Water: 0.18, Grass: 0.12 }
    ),

    q(
        "Normal",
        "I prefer reliable progress over chasing something flashy just because it is exciting.",
        { Rock: 0.15, Steel: 0.10, Grass: 0.10 }
    ),

    q(
        "Normal",
        "I tend to choose what is sensible and workable rather than making life more complicated than it needs to be.",
        { Ground: 0.18, Rock: 0.12 }
    ),


    // ---------------- WATER ----------------

    q(
        "Water",
        "I can adjust my behavior easily when I enter a new social environment.",
        { Normal: 0.15, Fairy: 0.10 }
    ),

    q(
        "Water",
        "I am comfortable changing plans when circumstances shift.",
        { Flying: 0.12, Electric: 0.08 }
    ),

    q(
        "Water",
        "I often make room for other people's preferences rather than insisting on my own way.",
        { Normal: 0.15, Fairy: 0.10 }
    ),

    q(
        "Water",
        "I would rather stay flexible than lock myself into one rigid path.",
        { Flying: 0.15, Grass: 0.08 }
    ),

    q(
        "Water",
        "Belonging matters to me, but I still want enough freedom to move between different people and situations.",
        { Flying: 0.12, Fairy: 0.10 }
    ),


    // ---------------- FIRE ----------------

    q(
        "Fire",
        "When I care about something, my emotions become intense and hard to hide.",
        { Dragon: 0.15, Fairy: 0.08 }
    ),

    q(
        "Fire",
        "I speak my mind even when I know it may create conflict.",
        { Dark: 0.18, Fighting: 0.12 }
    ),

    q(
        "Fire",
        "I can become heated quickly when something important to me is challenged.",
        { Dragon: 0.12, Dark: 0.10 }
    ),

    q(
        "Fire",
        "Strong passion is one of the main forces that pushes me into action.",
        { Electric: 0.15, Dragon: 0.12 }
    ),

    q(
        "Fire",
        "I would rather act with conviction than stay emotionally detached.",
        { Fighting: 0.12, Dragon: 0.10 }
    ),


    // ---------------- GRASS ----------------

    q(
        "Grass",
        "I like creating routines that help me grow steadily over time.",
        { Normal: 0.18, Steel: 0.10 }
    ),

    q(
        "Grass",
        "I usually think carefully before acting instead of rushing into a decision.",
        { Ground: 0.15, Psychic: 0.12 }
    ),

    q(
        "Grass",
        "I naturally notice what people, projects, or environments need in order to flourish.",
        { Fairy: 0.12, Water: 0.10 }
    ),

    q(
        "Grass",
        "Balance, mindfulness, and a sense of inner harmony are important to me.",
        { Psychic: 0.12, Normal: 0.10 }
    ),


    // ---------------- ELECTRIC ----------------

    q(
        "Electric",
        "I get restless when life goes too long without something new or stimulating.",
        { Flying: 0.18, Fire: 0.10 }
    ),

    q(
        "Electric",
        "I often follow sudden bursts of excitement just to see where they lead.",
        { Flying: 0.15, Fairy: 0.08 }
    ),

    q(
        "Electric",
        "People often experience me as lively, playful, or full of energy.",
        { Fairy: 0.15, Fire: 0.10 }
    ),

    q(
        "Electric",
        "I would choose a spontaneous adventure over a carefully planned ordinary day.",
        { Flying: 0.18, Dark: 0.06 }
    ),


    // ---------------- ICE ----------------

    q(
        "Ice",
        "I can put my emotions aside when I need to analyze a situation clearly.",
        { Psychic: 0.20, Steel: 0.10 }
    ),

    q(
        "Ice",
        "I value precise reasoning even when the conclusion is uncomfortable.",
        { Rock: 0.15, Psychic: 0.12 }
    ),

    q(
        "Ice",
        "In tense situations, I usually become more controlled rather than more expressive.",
        { Psychic: 0.15, Steel: 0.10 }
    ),

    q(
        "Ice",
        "Efficiency and objective clarity matter more to me than softening every message.",
        { Steel: 0.15, Rock: 0.10 }
    ),


    // ---------------- BUG ----------------

    q(
        "Bug",
        "I can become deeply absorbed in subjects that most people barely notice.",
        { Psychic: 0.15, Steel: 0.06 }
    ),

    q(
        "Bug",
        "I often observe quietly before revealing what I really think.",
        { Ghost: 0.12, Psychic: 0.10 }
    ),

    q(
        "Bug",
        "My interests or thought patterns can be unusual enough to surprise people who do not know me well.",
        { Ghost: 0.12, Flying: 0.08 }
    ),

    q(
        "Bug",
        "I enjoy collecting detailed knowledge about niche or specialized topics.",
        { Steel: 0.10, Psychic: 0.10 }
    ),


    // ---------------- FLYING ----------------

    q(
        "Flying",
        "I spend a lot of time imagining possibilities beyond my current circumstances.",
        { Psychic: 0.10, Fairy: 0.10 }
    ),

    q(
        "Flying",
        "Freedom to explore matters more to me than having every part of life secured in advance.",
        { Water: 0.15, Electric: 0.10 }
    ),

    q(
        "Flying",
        "I am drawn to bold ideas even when they are not especially realistic yet.",
        { Dragon: 0.10, Electric: 0.08 }
    ),

    q(
        "Flying",
        "Optimism and imagination often make me willing to take a leap into the unknown.",
        { Electric: 0.12, Fairy: 0.10 }
    ),


    // ---------------- FIGHTING ----------------

    q(
        "Fighting",
        "I feel a strong responsibility to stand up for people who are being treated unfairly.",
        { Rock: 0.12, Ground: 0.08 }
    ),

    q(
        "Fighting",
        "When a challenge appears, my instinct is to face it directly rather than avoid it.",
        { Rock: 0.15, Dragon: 0.10 }
    ),

    q(
        "Fighting",
        "I try to follow a personal code even when breaking it would be easier.",
        { Ground: 0.12, Rock: 0.10 }
    ),

    q(
        "Fighting",
        "Courage means protecting what matters while still understanding the risks involved.",
        { Ground: 0.10, Dragon: 0.08 }
    ),


    // ---------------- PSYCHIC ----------------

    q(
        "Psychic",
        "I am naturally drawn to hidden meanings, abstract ideas, or things that are difficult to explain.",
        { Ghost: 0.15, Bug: 0.08 }
    ),

    q(
        "Psychic",
        "I often understand the mood or direction of a situation before anyone says it directly.",
        { Poison: 0.10, Fairy: 0.08 }
    ),

    q(
        "Psychic",
        "I prefer influencing a situation subtly rather than forcing people openly.",
        { Poison: 0.10, Water: 0.08 }
    ),

    q(
        "Psychic",
        "I enjoy long periods of thought simply because understanding something deeply is satisfying.",
        { Ice: 0.15, Bug: 0.10 }
    ),


    // ---------------- GROUND ----------------

    q(
        "Ground",
        "I am comfortable setting rules or expectations when a group needs structure.",
        { Steel: 0.12, Normal: 0.10 }
    ),

    q(
        "Ground",
        "Experience and proven methods usually carry more weight with me than impulse.",
        { Normal: 0.15, Rock: 0.12 }
    ),

    q(
        "Ground",
        "People can rely on me to keep practical responsibilities under control.",
        { Normal: 0.15, Steel: 0.10 }
    ),

    q(
        "Ground",
        "I become cautious when a situation is unfamiliar and the consequences are unclear.",
        { Rock: 0.10, Fighting: 0.08 }
    ),


    // ---------------- ROCK ----------------

    q(
        "Rock",
        "I would rather hear a difficult truth directly than have it softened until it becomes vague.",
        { Ice: 0.12, Ground: 0.08 }
    ),

    q(
        "Rock",
        "Once I decide that something matters, I can endure a great deal without giving up.",
        { Steel: 0.15, Fighting: 0.10 }
    ),

    q(
        "Rock",
        "I trust evidence and concrete reality more than wishful thinking.",
        { Ground: 0.12, Ice: 0.10 }
    ),

    q(
        "Rock",
        "I tend to meet problems head-on with persistence and straightforwardness.",
        { Fighting: 0.15, Dragon: 0.06 }
    ),


    // ---------------- GHOST ----------------

    q(
        "Ghost",
        "Nostalgia and memories have a powerful effect on my inner world.",
        { Psychic: 0.10, Fairy: 0.06 }
    ),

    q(
        "Ghost",
        "I enjoy humor that is strange, clever, eerie, or a little unsettling.",
        { Dark: 0.10, Bug: 0.10 }
    ),

    q(
        "Ghost",
        "People may find me playful one moment and difficult to read the next.",
        { Fairy: 0.12, Bug: 0.08 }
    ),

    q(
        "Ghost",
        "When someone hurts me deeply, I can hold onto the memory for a very long time.",
        { Poison: 0.10, Dark: 0.08 }
    ),


    // ---------------- POISON ----------------

    q(
        "Poison",
        "I pay close attention to people's motives because knowing them helps me protect myself.",
        { Psychic: 0.12, Dark: 0.08 }
    ),

    q(
        "Poison",
        "I am willing to use social leverage strategically when my security is at stake.",
        { Dark: 0.15, Psychic: 0.08 }
    ),

    q(
        "Poison",
        "Self-reliance matters to me because depending too much on others can feel risky.",
        { Ground: 0.08, Rock: 0.06 }
    ),

    q(
        "Poison",
        "I usually notice power dynamics and unspoken agendas in a group.",
        { Psychic: 0.12, Dark: 0.10 }
    ),


    // ---------------- STEEL ----------------

    q(
        "Steel",
        "I keep refining my work until small imperfections are corrected.",
        { Ice: 0.12, Grass: 0.08 }
    ),

    q(
        "Steel",
        "I can work for a long time on one skill because mastery matters more than quick praise.",
        { Rock: 0.12, Grass: 0.08 }
    ),

    q(
        "Steel",
        "Competition often motivates me to raise my standards even higher.",
        { Dragon: 0.12, Fighting: 0.08 }
    ),

    q(
        "Steel",
        "I feel more comfortable when details are controlled rather than left to chance.",
        { Ground: 0.15, Ice: 0.10 }
    ),


    // ---------------- DARK ----------------

    q(
        "Dark",
        "I am willing to challenge rules simply because I believe those rules deserve to be tested.",
        { Flying: 0.08, Fire: 0.08 }
    ),

    q(
        "Dark",
        "Being seen as intimidating does not bother me if it keeps others from pushing me around.",
        { Dragon: 0.15, Poison: 0.10 }
    ),

    q(
        "Dark",
        "I sometimes prefer provocative or unconventional tactics over playing by expectations.",
        { Poison: 0.12, Ghost: 0.08 }
    ),

    q(
        "Dark",
        "When someone tries to control me, my instinct is to push back hard.",
        { Fire: 0.12, Dragon: 0.10 }
    ),


    // ---------------- DRAGON ----------------

    q(
        "Dragon",
        "I naturally want to take command when I believe I can lead a situation better.",
        { Ground: 0.10, Steel: 0.08 }
    ),

    q(
        "Dragon",
        "I hold myself and other people to unusually high standards.",
        { Steel: 0.15, Rock: 0.08 }
    ),

    q(
        "Dragon",
        "I am strongly motivated by the idea of becoming exceptional rather than merely adequate.",
        { Steel: 0.12, Flying: 0.08 }
    ),

    q(
        "Dragon",
        "I can become forceful when something stands between me and an important ambition.",
        { Fire: 0.12, Dark: 0.10 }
    ),


    // ---------------- FAIRY ----------------

    q(
        "Fairy",
        "I enjoy creating a warm, playful atmosphere that draws people toward me.",
        { Electric: 0.12, Water: 0.08 }
    ),

    q(
        "Fairy",
        "Charm and emotional awareness are tools I naturally use in social situations.",
        { Psychic: 0.10, Water: 0.10 }
    ),

    q(
        "Fairy",
        "I like combining sweetness or beauty with a clever, unexpected edge.",
        { Ghost: 0.12, Poison: 0.06 }
    ),

    q(
        "Fairy",
        "Fun, wonder, and amusement are important parts of how I connect with life.",
        { Flying: 0.12, Electric: 0.10 }
    )
];


// ======================================================
// SCORING SYSTEM
// ======================================================

function answerToSupport(answer) {
    return (answer + 2) / 4;
}


function calculateScores() {

    const scores = {};

    Object.keys(types).forEach(type => {
        scores[type] = 0;
    });

    shuffledQuestions.forEach((question, index) => {

        const answer = answers[index];

        // Ignore unanswered questions just in case.
        if (typeof answer !== "number") {
            return;
        }

        const support = answerToSupport(answer);

        Object.entries(question.weights).forEach(
            ([type, weight]) => {

                scores[type] += support * weight;

            }
        );

    });

    return scores;
}


// ======================================================
// MAXIMUM POSSIBLE SCORE FOR EACH TYPE
// ======================================================

function calculateMaximumScores() {

    const maximumScores = {};

    Object.keys(types).forEach(type => {
        maximumScores[type] = 0;
    });

    questions.forEach(question => {

        Object.entries(question.weights).forEach(
            ([type, weight]) => {

                maximumScores[type] += weight;

            }
        );

    });

    return maximumScores;
}


// ======================================================
// TURN SCORES INTO PERCENTAGES
// ======================================================

function calculatePercentages(scores, maximumScores) {

    const percentages = {};

    Object.keys(types).forEach(type => {

        if (maximumScores[type] === 0) {

            percentages[type] = 0;
            return;

        }

        const percentage =
            (scores[type] / maximumScores[type]) * 100;

        percentages[type] = Math.round(
            Math.max(0, Math.min(100, percentage))
        );

    });

    return percentages;
}


// ======================================================
// QUESTION DESIGN AUDIT
// ======================================================

function auditQuestionDesign() {

    const mainTypeCounts = {};

    Object.keys(types).forEach(type => {
        mainTypeCounts[type] = 0;
    });

    let problems = [];

    questions.forEach((question, index) => {

        const questionNumber = index + 1;

        if (!types[question.mainType]) {
            problems.push(
                `Question ${questionNumber}: invalid main type "${question.mainType}".`
            );
        }

        if (question.weights[question.mainType] !== 1) {
            problems.push(
                `Question ${questionNumber}: main type must have weight 1.`
            );
        }

        if (mainTypeCounts[question.mainType] !== undefined) {
            mainTypeCounts[question.mainType]++;
        }

        Object.entries(question.weights).forEach(
            ([type, weight]) => {

                if (type !== question.mainType && weight > 0.20) {

                    problems.push(
                        `Question ${questionNumber}: ${type} overlap is too strong (${weight}).`
                    );

                }

            }
        );

    });

    console.log(`Question count: ${questions.length}`);

    console.table(mainTypeCounts);

    if (questions.length !== 75) {
        problems.push(
            `The test has ${questions.length} questions instead of 75.`
        );
    }

    if (problems.length === 0) {

        console.log(
            "✓ Question weighting audit passed."
        );

    } else {

        console.warn("Question weighting problems:");

        problems.forEach(problem => {
            console.warn(problem);
        });

    }
}


// Run the audit once when the page loads.
auditQuestionDesign();


// ============================================================
// ANSWER SCALE
// ============================================================

const answerScale = [

    {
        text: "Disagree",
        value: -2
    },

    {
        text: "Slightly Disagree",
        value: -1
    },

    {
        text: "Neutral",
        value: 0
    },

    {
        text: "Slightly Agree",
        value: 1
    },

    {
        text: "Agree",
        value: 2
    }

];


// ============================================================
// VARIABLES
// ============================================================

let randomizedQuestions = [];

let currentQuestion = 0;

let answers = {};

let isTransitioning = false;


// ============================================================
// DOM ELEMENTS
// ============================================================

const introScreen =
    document.getElementById("intro-screen");

const testScreen =
    document.getElementById("test-screen");

const resultScreen =
    document.getElementById("result-screen");

const startButton =
    document.getElementById("start-btn");

const backButton =
    document.getElementById("back-btn");

const restartButton =
    document.getElementById("restart-btn");

const questionNumber =
    document.getElementById("question-number");

const progressBar =
    document.getElementById("progress-bar");

const questionText =
    document.getElementById("question-text");

const answerButtons =
    document.getElementById("answer-buttons");

const resultMain =
    document.getElementById("result-main");

const resultAuxiliary =
    document.getElementById("result-auxiliary");

const resultTypes =
    document.getElementById("result-types");


// ============================================================
// SHUFFLE QUESTIONS
// ============================================================

function shuffle(array) {

    const shuffled = [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(Math.random() * (i + 1));

        [
            shuffled[i],
            shuffled[randomIndex]
        ] = [
            shuffled[randomIndex],
            shuffled[i]
        ];

    }

    return shuffled;

}


// ============================================================
// START TEST
// ============================================================

startButton.addEventListener(
    "click",
    startTest
);


function startTest() {

    randomizedQuestions =
        shuffle(questions);

    currentQuestion = 0;

    answers = {};

    isTransitioning = false;

    introScreen.classList.remove("active");

    resultScreen.classList.remove("active");

    testScreen.classList.add("active");

    showQuestion();

}


// ============================================================
// SHOW QUESTION
// ============================================================

function showQuestion() {

    const question =
        randomizedQuestions[currentQuestion];


    questionText.textContent =
        question.text;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${randomizedQuestions.length}`;


    const progress =
        ((currentQuestion + 1) /
        randomizedQuestions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    answerButtons.innerHTML = "";


    answerScale.forEach(answer => {

        const button =
            document.createElement("button");


        button.classList.add(
            "answer-btn"
        );


        button.textContent =
            answer.text;


        button.dataset.value =
            answer.value;


        if (
            answers[currentQuestion] !== undefined &&
            answers[currentQuestion] === answer.value
        ) {

            button.classList.add(
                "selected"
            );

        }


        button.addEventListener(
            "click",
            () => selectAnswer(answer.value)
        );


        answerButtons.appendChild(button);

    });


    backButton.disabled =
        currentQuestion === 0;

}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(value) {

    if (isTransitioning) {
        return;
    }


    isTransitioning = true;


    answers[currentQuestion] =
        value;


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        if (
            Number(button.dataset.value) === value
        ) {

            button.classList.add(
                "selected"
            );

        }

        button.disabled = true;

    });


    setTimeout(() => {

        if (
            currentQuestion <
            randomizedQuestions.length - 1
        ) {

            currentQuestion++;

            isTransitioning = false;

            showQuestion();

        } else {

            isTransitioning = false;

            showResults();

        }

    }, 250);

}


// ============================================================
// BACK BUTTON
// ============================================================

backButton.addEventListener(
    "click",
    goBack
);


function goBack() {

    if (
        currentQuestion === 0 ||
        isTransitioning
    ) {

        return;

    }


    currentQuestion--;

    showQuestion();

}


// ============================================================
// CALCULATE RAW SCORES
// ============================================================

function calculateScores() {

    const scores = {};


    Object.keys(types).forEach(type => {

        scores[type] = 0;

    });


    Object.keys(answers).forEach(
        questionIndex => {

            const question =
                randomizedQuestions[
                    questionIndex
                ];


            const answerValue =
                answers[questionIndex];


            Object.entries(
                question.weights
            ).forEach(
                ([type, weight]) => {

                    scores[type] +=
                        answerValue * weight;

                }
            );

        }
    );


    return scores;

}


// ============================================================
// CALCULATE MAXIMUM POSSIBLE SCORES
// ============================================================

function calculateMaximumScores() {

    const maximumScores = {};


    Object.keys(types).forEach(type => {

        maximumScores[type] = 0;

    });


    randomizedQuestions.forEach(
        question => {

            Object.entries(
                question.weights
            ).forEach(
                ([type, weight]) => {

                    maximumScores[type] +=
                        Math.abs(weight) * 2;

                }
            );

        }
    );


    return maximumScores;

}


// ============================================================
// CONVERT SCORES TO PERCENTAGES
// ============================================================

function calculatePercentages(
    scores,
    maximumScores
) {

    const percentages = {};


    Object.keys(types).forEach(type => {

        const max =
            maximumScores[type];


        if (max === 0) {

            percentages[type] = 0;

            return;

        }


        const percentage =
            (
                (scores[type] + max) /
                (2 * max)
            ) * 100;


        percentages[type] =
            Math.round(
                Math.max(
                    0,
                    Math.min(
                        100,
                        percentage
                    )
                )
            );

    });


    return percentages;

}


// ============================================================
// GET CSS TYPE CLASS
// ============================================================

function getTypeClass(type) {

    return `type-${type.toLowerCase()}`;

}


// ============================================================
// SHOW RESULTS
// ============================================================

function showResults() {

    const scores =
        calculateScores();


    const maximumScores =
        calculateMaximumScores();


    const percentages =
        calculatePercentages(
            scores,
            maximumScores
        );


    const sortedTypes =
        Object.entries(percentages)
            .sort(
                (a, b) => b[1] - a[1]
            );



    // --------------------------------------------------------
    // PRIMARY TYPE
    // --------------------------------------------------------

    const primaryType =
        sortedTypes[0][0];


    const primaryPercentage =
        sortedTypes[0][1];


    // --------------------------------------------------------
    // SECOND TYPE
    // --------------------------------------------------------

    const secondType =
        sortedTypes[1][0];


    const secondPercentage =
        sortedTypes[1][1];


    // --------------------------------------------------------
    // AUXILIARY RULE
    // --------------------------------------------------------

    const percentageDifference =
        primaryPercentage -
        secondPercentage;


    const hasAuxiliary =
        percentageDifference <= 10;


    // --------------------------------------------------------
    // PRIMARY RESULT
    // --------------------------------------------------------

    resultMain.className =
        "primary-result";


    resultMain.classList.add(
        getTypeClass(primaryType)
    );


    resultMain.style.setProperty(
        "--type-color",
        typeColors[primaryType]
    );


    resultMain.innerHTML = `

        <h2>
            ${primaryType}
        </h2>

        <p class="result-percentage">
            ${primaryPercentage}%
        </p>

        <p>
            ${types[primaryType].description}
        </p>

    `;


    // --------------------------------------------------------
    // AUXILIARY RESULT
    // --------------------------------------------------------

    resultAuxiliary.style.setProperty(
        "--auxiliary-color",
        typeColors[secondType]
    );


    if (hasAuxiliary) {

        resultAuxiliary.innerHTML = `

            <h3>
                Auxiliary Type
            </h3>

            <p>
                <strong>
                    ${secondType}
                </strong>
                ·
                ${secondPercentage}%
            </p>

            <p>
                Your second-highest type is only
                ${percentageDifference} percentage
                point${percentageDifference === 1 ? "" : "s"}
                below your primary type, so it counts
                as your auxiliary type.
            </p>

            <p>
                ${types[secondType].description}
            </p>

        `;

    } else {

        resultAuxiliary.style.setProperty(
            "--auxiliary-color",
            "#777b90"
        );


        resultAuxiliary.innerHTML = `

            <h3>
                No Auxiliary Type
            </h3>

            <p>
                Your second-highest type is
                <strong>
                    ${secondType}
                </strong>
                at
                <strong>
                    ${secondPercentage}%
                </strong>.
            </p>

            <p>
                It is ${percentageDifference}
                percentage points below your primary
                type, so it does not qualify as an
                auxiliary type.
            </p>

        `;

    }


    // --------------------------------------------------------
    // ALL 18 TYPES
    // --------------------------------------------------------

    resultTypes.innerHTML = "";


    sortedTypes.forEach(
        ([type, percentage]) => {

            const resultItem =
                document.createElement("div");


            resultItem.classList.add(
                "type-result",
                getTypeClass(type)
            );


            resultItem.style.setProperty(
                "--type-color",
                typeColors[type]
            );


            resultItem.innerHTML = `

                <div class="type-result-header">

                    <span class="type-result-name">
                        ${type}
                    </span>

                    <span class="type-result-percentage">
                        ${percentage}%
                    </span>

                </div>


                <div class="type-result-bar">

                    <div
                        class="type-result-fill"
                        style="width: ${percentage}%"
                    ></div>

                </div>

            `;


            resultTypes.appendChild(
                resultItem
            );

        }
    );


    // --------------------------------------------------------
    // SWITCH SCREENS
    // --------------------------------------------------------

    testScreen.classList.remove(
        "active"
    );


    resultScreen.classList.add(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ============================================================
// RESTART
// ============================================================

restartButton.addEventListener(
    "click",
    restartTest
);


function restartTest() {

    currentQuestion = 0;

    answers = {};

    randomizedQuestions = [];

    isTransitioning = false;


    resultMain.innerHTML = "";

    resultAuxiliary.innerHTML = "";

    resultTypes.innerHTML = "";


    resultScreen.classList.remove(
        "active"
    );


    introScreen.classList.add(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function testTypeCombinations(simulations = 100000) {
  const typeNames = Object.keys(types);

  const foundPairs = new Set();

  for (let simulation = 0; simulation < simulations; simulation++) {
    const fakeAnswers = questions.map(() => {
      return Math.floor(Math.random() * 5) - 2;
    });

    const scores = {};
    const maxScores = {};

    typeNames.forEach(type => {
      scores[type] = 0;
      maxScores[type] = 0;
    });

    questions.forEach((question, index) => {
      const answer = fakeAnswers[index];

      for (const [type, weight] of Object.entries(question.weights)) {
        scores[type] += answer * weight;
        maxScores[type] += Math.abs(weight) * 2;
      }
    });

    const percentages = {};

    typeNames.forEach(type => {
      if (maxScores[type] === 0) {
        percentages[type] = 50;
        return;
      }

      percentages[type] =
        ((scores[type] + maxScores[type]) /
          (2 * maxScores[type])) *
        100;
    });

    const sorted = typeNames.sort(
      (a, b) => percentages[b] - percentages[a]
    );

    const primary = sorted[0];
    const secondary = sorted[1];

    const difference =
      percentages[primary] - percentages[secondary];

    if (difference <= 10) {
      foundPairs.add(`${primary} + ${secondary}`);
    }
  }

  const possiblePairs = [];

  typeNames.forEach(primary => {
    typeNames.forEach(auxiliary => {
      if (primary !== auxiliary) {
        possiblePairs.push(`${primary} + ${auxiliary}`);
      }
    });
  });

  const missingPairs = possiblePairs.filter(
    pair => !foundPairs.has(pair)
  );

  console.log("Possible ordered combinations:", possiblePairs.length);
  console.log("Combinations found:", foundPairs.size);
  console.log("Missing combinations:", missingPairs.length);
  console.log(missingPairs);
}