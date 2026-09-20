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

  // =========================
  // NORMAL
  // =========================

  {
    text: "I am happiest when life is simple, familiar, and reasonably predictable.",
    weights: {
      Normal: 1,
      Ground: 0.20,
      Rock: 0.15
    }
  },

  {
    text: "I usually choose the sensible option over the flashy or dramatic one.",
    weights: {
      Normal: 1,
      Ground: 0.25,
      Rock: 0.15,
      Steel: 0.10
    }
  },

  {
    text: "I tend to keep the peace and cooperate rather than make everything into a confrontation.",
    weights: {
      Normal: 1,
      Water: 0.25,
      Fairy: 0.10
    }
  },

  {
    text: "A steady routine feels more satisfying to me than constantly chasing novelty.",
    weights: {
      Normal: 1,
      Grass: 0.20,
      Ground: 0.15
    }
  },

  {
    text: "I rarely feel a need to stand out; being ordinary, capable, and comfortable is enough for me.",
    weights: {
      Normal: 1,
      Water: 0.10,
      Grass: 0.15
    }
  },


  // =========================
  // WATER
  // =========================

  {
    text: "I can blend into very different groups without feeling like I need to control the atmosphere.",
    weights: {
      Water: 1,
      Fairy: 0.15,
      Normal: 0.15
    }
  },

  {
    text: "When plans change suddenly, I would rather adapt than force things back to the original plan.",
    weights: {
      Water: 1,
      Flying: 0.20,
      Electric: 0.10
    }
  },

  {
    text: "I often bend my approach to fit the people and situation around me.",
    weights: {
      Water: 1,
      Psychic: 0.15,
      Poison: 0.10
    }
  },

  {
    text: "I dislike feeling boxed in by rigid expectations and prefer room to move with circumstances.",
    weights: {
      Water: 1,
      Flying: 0.25,
      Dark: 0.10
    }
  },


  // =========================
  // FIRE
  // =========================

  {
    text: "When I care about something, my feelings are obvious and intense.",
    weights: {
      Fire: 1,
      Dragon: 0.25,
      Fairy: 0.10
    }
  },

  {
    text: "I speak my mind quickly when something gets under my skin.",
    weights: {
      Fire: 1,
      Dark: 0.20,
      Fighting: 0.15
    }
  },

  {
    text: "I would rather act with passion and risk overdoing it than stay emotionally restrained.",
    weights: {
      Fire: 1,
      Dragon: 0.20,
      Electric: 0.15
    }
  },

  {
    text: "In an argument, I can become heated fast if I feel strongly about the issue.",
    weights: {
      Fire: 1,
      Fighting: 0.20,
      Dark: 0.10
    }
  },


  // =========================
  // GRASS
  // =========================

  {
    text: "I like to move carefully, giving people and projects time to grow properly.",
    weights: {
      Grass: 1,
      Normal: 0.15,
      Ground: 0.15
    }
  },

  {
    text: "I feel best when my life has calm structure, healthy habits, and room to breathe.",
    weights: {
      Grass: 1,
      Normal: 0.20,
      Ground: 0.10
    }
  },

  {
    text: "I naturally notice what needs tending, improving, or nurturing over time.",
    weights: {
      Grass: 1,
      Fairy: 0.15,
      Steel: 0.10
    }
  },

  {
    text: "I would rather make slow, deliberate progress than rush toward an exciting result.",
    weights: {
      Grass: 1,
      Ground: 0.20,
      Rock: 0.10
    }
  },


  // =========================
  // ELECTRIC
  // =========================

  {
    text: "I get restless when nothing new, exciting, or stimulating is happening.",
    weights: {
      Electric: 1,
      Flying: 0.20,
      Fire: 0.10
    }
  },

  {
    text: "I often do things on impulse simply because they sound fun in the moment.",
    weights: {
      Electric: 1,
      Fairy: 0.20,
      Flying: 0.15
    }
  },

  {
    text: "People tend to experience me as lively, animated, or full of restless energy.",
    weights: {
      Electric: 1,
      Fire: 0.15,
      Fairy: 0.15
    }
  },

  {
    text: "I would rather have an unpredictable adventure than a perfectly organized day.",
    weights: {
      Electric: 1,
      Flying: 0.25,
      Dark: 0.10
    }
  },


  // =========================
  // ICE
  // =========================

  {
    text: "When emotions run high, I instinctively step back and analyze what is actually happening.",
    weights: {
      Ice: 1,
      Psychic: 0.20,
      Steel: 0.10
    }
  },

  {
    text: "I value clear reasoning more than cushioning the truth to make it easier to hear.",
    weights: {
      Ice: 1,
      Rock: 0.20,
      Steel: 0.15
    }
  },

  {
    text: "I am comfortable appearing detached if it helps me stay objective.",
    weights: {
      Ice: 1,
      Psychic: 0.20,
      Poison: 0.10
    }
  },

  {
    text: "I prefer precise, efficient explanations over emotional or overly personal ones.",
    weights: {
      Ice: 1,
      Steel: 0.20,
      Rock: 0.10
    }
  },


  // =========================
  // BUG
  // =========================

  {
    text: "I can become intensely knowledgeable about interests that other people barely notice.",
    weights: {
      Bug: 1,
      Psychic: 0.15,
      Steel: 0.10
    }
  },

  {
    text: "I often keep a low profile while quietly observing details around me.",
    weights: {
      Bug: 1,
      Ghost: 0.15,
      Poison: 0.10
    }
  },

  {
    text: "My interests or thought patterns can be unusual enough that people do not always know what to expect from me.",
    weights: {
      Bug: 1,
      Ghost: 0.20,
      Flying: 0.10
    }
  },

  {
    text: "I would rather be quietly fascinating than obviously impressive.",
    weights: {
      Bug: 1,
      Ghost: 0.15,
      Psychic: 0.10
    }
  },


  // =========================
  // FLYING
  // =========================

  {
    text: "My mind naturally drifts toward possibilities, adventures, and what could exist beyond the obvious.",
    weights: {
      Flying: 1,
      Fairy: 0.15,
      Psychic: 0.10
    }
  },

  {
    text: "I hate feeling trapped by routines, rules, or expectations that limit my freedom.",
    weights: {
      Flying: 1,
      Dark: 0.20,
      Water: 0.15
    }
  },

  {
    text: "I am willing to leap into unfamiliar experiences because the possibility excites me.",
    weights: {
      Flying: 1,
      Electric: 0.20,
      Fire: 0.10
    }
  },

  {
    text: "I tend to follow big ideas and ideals even when they are not the most practical option.",
    weights: {
      Flying: 1,
      Psychic: 0.15,
      Dragon: 0.10
    }
  },


  // =========================
  // FIGHTING
  // =========================

  {
    text: "When someone I care about is threatened, my first instinct is to step in and defend them.",
    weights: {
      Fighting: 1,
      Rock: 0.15,
      Fire: 0.15
    }
  },

  {
    text: "I respect discipline, courage, and facing difficult things directly.",
    weights: {
      Fighting: 1,
      Rock: 0.20,
      Steel: 0.15
    }
  },

  {
    text: "Even under pressure, I try to act according to a personal code of fairness or honor.",
    weights: {
      Fighting: 1,
      Ground: 0.15,
      Rock: 0.15
    }
  },

  {
    text: "I would rather confront a problem openly than avoid it because it might be difficult.",
    weights: {
      Fighting: 1,
      Fire: 0.15,
      Rock: 0.20
    }
  },


  // =========================
  // PSYCHIC
  // =========================

  {
    text: "I am drawn to hidden meanings, abstract ideas, symbolism, or things that are difficult to explain.",
    weights: {
      Psychic: 1,
      Ghost: 0.20,
      Bug: 0.10
    }
  },

  {
    text: "I often understand the mood or direction of a situation before anyone says it directly.",
    weights: {
      Psychic: 1,
      Poison: 0.15,
      Fairy: 0.10
    }
  },

  {
    text: "I prefer influencing a situation subtly rather than overpowering it.",
    weights: {
      Psychic: 1,
      Poison: 0.15,
      Fairy: 0.10
    }
  },

  {
    text: "I spend a lot of time thinking beneath the surface of things.",
    weights: {
      Psychic: 1,
      Ice: 0.15,
      Ghost: 0.15
    }
  },

  {
    text: "People sometimes come to me because I can see patterns or implications they have not noticed yet.",
    weights: {
      Psychic: 1,
      Ice: 0.15,
      Bug: 0.10
    }
  },


  // =========================
  // GROUND
  // =========================

  {
    text: "I believe rules and structure usually exist for a reason and should not be discarded casually.",
    weights: {
      Ground: 1,
      Normal: 0.15,
      Steel: 0.15
    }
  },

  {
    text: "I trust proven experience more than exciting theories with no practical track record.",
    weights: {
      Ground: 1,
      Rock: 0.20,
      Normal: 0.15
    }
  },

  {
    text: "When a group lacks direction, I am comfortable setting expectations and taking charge.",
    weights: {
      Ground: 1,
      Dragon: 0.15,
      Steel: 0.10
    }
  },

  {
    text: "I prefer dependable systems, clear responsibilities, and realistic plans.",
    weights: {
      Ground: 1,
      Steel: 0.20,
      Normal: 0.15
    }
  },


  // =========================
  // ROCK
  // =========================

  {
    text: "I would rather hear a blunt truth than a comforting half-truth.",
    weights: {
      Rock: 1,
      Ice: 0.20,
      Fighting: 0.10
    }
  },

  {
    text: "Once I decide that something matters, I can endure a great deal without giving up.",
    weights: {
      Rock: 1,
      Steel: 0.20,
      Fighting: 0.15
    }
  },

  {
    text: "I respect people who are straightforward, tough, and dependable.",
    weights: {
      Rock: 1,
      Ground: 0.15,
      Fighting: 0.10
    }
  },

  {
    text: "I tend to meet hardship with stubborn determination rather than changing course quickly.",
    weights: {
      Rock: 1,
      Steel: 0.15,
      Dragon: 0.10
    }
  },


  // =========================
  // GHOST
  // =========================

  {
    text: "I have a strong attachment to memories, old places, old stories, or the emotional atmosphere of the past.",
    weights: {
      Ghost: 1,
      Psychic: 0.10,
      Fairy: 0.10
    }
  },

  {
    text: "My humor can be strange, dark, teasing, or difficult for people to predict.",
    weights: {
      Ghost: 1,
      Dark: 0.15,
      Bug: 0.15
    }
  },

  {
    text: "I enjoy keeping parts of myself mysterious rather than making everything about me easy to read.",
    weights: {
      Ghost: 1,
      Psychic: 0.15,
      Poison: 0.15
    }
  },

  {
    text: "When someone hurts me deeply, I can hold onto the memory for a very long time.",
    weights: {
      Ghost: 1,
      Poison: 0.15,
      Dark: 0.10
    }
  },


  // =========================
  // POISON
  // =========================

  {
    text: "I notice social weak points, hidden motives, and shifts in power very quickly.",
    weights: {
      Poison: 1,
      Psychic: 0.20,
      Dark: 0.10
    }
  },

  {
    text: "I am willing to be strategic with people if that is what it takes to protect my interests.",
    weights: {
      Poison: 1,
      Dark: 0.15,
      Psychic: 0.10
    }
  },

  {
    text: "I keep my guard up until I am sure another person is safe to trust.",
    weights: {
      Poison: 1,
      Ghost: 0.15,
      Ice: 0.10
    }
  },

  {
    text: "Security matters enough to me that I sometimes calculate several moves ahead.",
    weights: {
      Poison: 1,
      Ground: 0.10,
      Steel: 0.15
    }
  },


  // =========================
  // STEEL
  // =========================

  {
    text: "I can obsess over small flaws because I want the final result to be as close to perfect as possible.",
    weights: {
      Steel: 1,
      Ice: 0.15,
      Dragon: 0.10
    }
  },

  {
    text: "I am willing to work far longer than most people if that is what mastery requires.",
    weights: {
      Steel: 1,
      Rock: 0.20,
      Dragon: 0.15
    }
  },

  {
    text: "I dislike leaving important outcomes to chance when careful preparation can control them.",
    weights: {
      Steel: 1,
      Ground: 0.20,
      Ice: 0.10
    }
  },

  {
    text: "Competition motivates me to sharpen my skills and outperform my previous best.",
    weights: {
      Steel: 1,
      Dragon: 0.20,
      Fighting: 0.10
    }
  },


  // =========================
  // DARK
  // =========================

  {
    text: "I am willing to break social rules when I think those rules deserve to be challenged.",
    weights: {
      Dark: 1,
      Flying: 0.15,
      Fire: 0.10
    }
  },

  {
    text: "Being seen as intimidating does not bother me if it stops people from pushing me around.",
    weights: {
      Dark: 1,
      Dragon: 0.20,
      Poison: 0.10
    }
  },

  {
    text: "I sometimes test boundaries just to see who or what will actually stop me.",
    weights: {
      Dark: 1,
      Electric: 0.15,
      Fire: 0.10
    }
  },

  {
    text: "In a serious conflict, I care more about winning than appearing polite or respectable.",
    weights: {
      Dark: 1,
      Dragon: 0.15,
      Poison: 0.15
    }
  },


  // =========================
  // DRAGON
  // =========================

  {
    text: "I want to be exceptional, not merely competent.",
    weights: {
      Dragon: 1,
      Steel: 0.20,
      Fire: 0.10
    }
  },

  {
    text: "I naturally project confidence and expect to be taken seriously.",
    weights: {
      Dragon: 1,
      Ground: 0.15,
      Dark: 0.10
    }
  },

  {
    text: "I set demanding standards for myself and can become impatient with mediocrity.",
    weights: {
      Dragon: 1,
      Steel: 0.20,
      Rock: 0.10
    }
  },

  {
    text: "When I pursue an important goal, I want to dominate the challenge rather than simply survive it.",
    weights: {
      Dragon: 1,
      Dark: 0.15,
      Fighting: 0.10
    }
  },


  // =========================
  // FAIRY
  // =========================

  {
    text: "I like creating a bright, charming atmosphere that makes people feel drawn in.",
    weights: {
      Fairy: 1,
      Electric: 0.15,
      Water: 0.10
    }
  },

  {
    text: "I often use humor, warmth, or charm to steer a situation without making the influence obvious.",
    weights: {
      Fairy: 1,
      Psychic: 0.15,
      Poison: 0.10
    }
  },

  {
    text: "I enjoy being playful, whimsical, or theatrically sweet even when I am thinking several steps ahead.",
    weights: {
      Fairy: 1,
      Ghost: 0.15,
      Poison: 0.10
    }
  },

  {
    text: "I am good at making people feel comfortable while still keeping a clever edge underneath.",
    weights: {
      Fairy: 1,
      Water: 0.15,
      Psychic: 0.10
    }
  },

  {
    text: "I can be genuinely caring and sweet while also enjoying the power that charm gives me.",
    weights: {
      Fairy: 1,
      Poison: 0.15,
      Psychic: 0.10
    }
  }

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
