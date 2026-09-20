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


// ============================================================
// ANSWER SCALE
// ============================================================

const answerScale = [

    {
        label: "Disagree",
        value: -2
    },

    {
        label: "Slightly Disagree",
        value: -1
    },

    {
        label: "Neutral",
        value: 0
    },

    {
        label: "Slightly Agree",
        value: 1
    },

    {
        label: "Agree",
        value: 2
    }

];



// ============================================================
// HTML ELEMENTS
// ============================================================

const introScreen =
    document.getElementById("intro-screen");

const testScreen =
    document.getElementById("test-screen");

const resultScreen =
    document.getElementById("result-screen");


const startBtn =
    document.getElementById("start-btn");

const backBtn =
    document.getElementById("back-btn");

const restartBtn =
    document.getElementById("restart-btn");


const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question-text");

const answerButtons =
    document.getElementById("answer-buttons");

const progressBar =
    document.getElementById("progress-bar");


const resultMain =
    document.getElementById("result-main");

const resultAuxiliary =
    document.getElementById("result-auxiliary");

const resultTypes =
    document.getElementById("result-types");



// ============================================================
// TEST STATE
// ============================================================

let shuffledQuestions = [];

let currentQuestion = 0;

let answers = [];



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

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffled[i],
            shuffled[j]
        ] = [
            shuffled[j],
            shuffled[i]
        ];

    }

    return shuffled;
}



// ============================================================
// START TEST
// ============================================================

function startTest() {

    shuffledQuestions =
        shuffle(questions);

    currentQuestion = 0;

    answers =
        new Array(
            shuffledQuestions.length
        ).fill(null);


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
        shuffledQuestions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${shuffledQuestions.length}`;


    questionText.textContent =
        question.text;


    const progress =
        ((currentQuestion + 1) /
            shuffledQuestions.length) *
        100;


    progressBar.style.width =
        `${progress}%`;


    answerButtons.innerHTML = "";


    answerScale.forEach(answerOption => {

        const button =
            document.createElement("button");


        button.classList.add(
            "answer-btn"
        );


        button.textContent =
            answerOption.label;


        if (
            answers[currentQuestion] ===
            answerOption.value
        ) {

            button.classList.add(
                "selected"
            );

        }


        button.addEventListener(
            "click",
            () => {

                selectAnswer(
                    answerOption.value
                );

            }
        );


        answerButtons.appendChild(
            button
        );

    });


    backBtn.disabled =
        currentQuestion === 0;

}



// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(value) {

    answers[currentQuestion] =
        value;


    if (
        currentQuestion <
        shuffledQuestions.length - 1
    ) {

        currentQuestion++;

        showQuestion();

    } else {

        showResults();

    }

}



// ============================================================
// BACK BUTTON
// ============================================================

function goBack() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

}



// ============================================================
// CALCULATE RAW SCORES
// ============================================================

function calculateScores() {

    const scores = {};


    Object.keys(types).forEach(type => {

        scores[type] = 0;

    });


    shuffledQuestions.forEach(
        (question, index) => {

            const answer =
                answers[index];


            if (answer === null) {
                return;
            }


            Object.entries(
                question.weights
            ).forEach(
                ([type, weight]) => {

                    if (
                        scores[type] !==
                        undefined
                    ) {

                        scores[type] +=
                            answer * weight;

                    }

                }
            );

        }
    );


    return scores;

}



// ============================================================
// CALCULATE MAXIMUM POSSIBLE SCORE
// FOR EACH TYPE
// ============================================================

function calculateMaximumScores() {

    const maximumScores = {};


    Object.keys(types).forEach(type => {

        maximumScores[type] = 0;

    });


    questions.forEach(question => {

        Object.entries(
            question.weights
        ).forEach(
            ([type, weight]) => {

                if (
                    maximumScores[type] !==
                    undefined
                ) {

                    maximumScores[type] +=
                        Math.abs(weight) * 2;

                }

            }
        );

    });


    return maximumScores;

}



// ============================================================
// CONVERT RAW SCORES TO PERCENTAGES
// ============================================================

function calculatePercentages(
    scores,
    maximumScores
) {

    const percentages = {};


    Object.keys(types).forEach(type => {

        const max =
            maximumScores[type];


        if (!max) {

            percentages[type] = 50;

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

function getResultDescription(typeName) {

    const description =
        types[typeName].description;


    if (Array.isArray(description)) {

        const firstParagraph =
            description.find(
                paragraph =>
                    paragraph.trim() !== ""
            );


        return firstParagraph || "";

    }


    return description || "";

}



// ============================================================
// ESCAPE HTML
// ============================================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        String(text);

    return div.innerHTML;

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
        Object.keys(percentages)
            .sort(
                (a, b) =>
                    percentages[b] -
                    percentages[a]
            );


    const primaryType =
        sortedTypes[0];

    const secondType =
        sortedTypes[1];


    const primaryPercentage =
        percentages[primaryType];

    const secondPercentage =
        percentages[secondType];


    const percentageDifference =
        primaryPercentage -
        secondPercentage;


    // Auxiliary qualifies when it is within
    // 10 percentage points of the primary type.

    const hasAuxiliary =
        percentageDifference <= 10;



    // ========================================================
    // PRIMARY RESULT
    // ========================================================

    resultMain.style.setProperty(
        "--type-color",
        typeColors[primaryType]
    );


    resultMain.innerHTML = `

        <p class="result-label">
            Primary Type
        </p>

        <h2>
            ${escapeHTML(primaryType)}
        </h2>

        <div class="result-percentage">
            ${primaryPercentage}%
        </div>

        <p class="result-description">
            ${escapeHTML(
                getResultDescription(
                    primaryType
                )
            )}
        </p>

    `;



    // ========================================================
    // AUXILIARY RESULT
    // ========================================================

    if (hasAuxiliary) {

        resultAuxiliary.style.display =
            "block";


        resultAuxiliary.style.setProperty(
            "--auxiliary-color",
            typeColors[secondType]
        );


        resultAuxiliary.innerHTML = `

            <p class="result-label">
                Auxiliary Type
            </p>

            <h2>
                ${escapeHTML(secondType)}
            </h2>

            <div class="result-percentage">
                ${secondPercentage}%
            </div>

            <p class="auxiliary-note">
                This type is ${percentageDifference}
                percentage point${percentageDifference === 1 ? "" : "s"}
                behind your primary type.
            </p>

            <p class="result-description">
                ${escapeHTML(
                    getResultDescription(
                        secondType
                    )
                )}
            </p>

        `;

    } else {

        resultAuxiliary.style.display =
            "block";


        resultAuxiliary.style.removeProperty(
            "--auxiliary-color"
        );


        resultAuxiliary.innerHTML = `

            <p class="result-label">
                Auxiliary Type
            </p>

            <h2>
                No Auxiliary Type
            </h2>

            <p class="auxiliary-note">
                Your second-highest type was
                ${escapeHTML(secondType)}
                at ${secondPercentage}%,
                which is ${percentageDifference}
                percentage points below your
                primary type.
            </p>

        `;

    }



    // ========================================================
    // ALL TYPE RESULTS
    // ========================================================

    resultTypes.innerHTML = "";


    sortedTypes.forEach(type => {

        const percentage =
            percentages[type];


        const row =
            document.createElement("div");


        row.classList.add(
            "type-result-row"
        );


        row.style.setProperty(
            "--type-color",
            typeColors[type]
        );


        row.innerHTML = `

            <div class="type-result-header">

                <span class="type-result-name">
                    ${escapeHTML(type)}
                </span>

                <span class="type-result-percentage">
                    ${percentage}%
                </span>

            </div>


            <div class="type-result-track">

                <div
                    class="type-result-fill"
                    style="width: ${percentage}%"
                ></div>

            </div>

        `;


        resultTypes.appendChild(
            row
        );

    });



    // ========================================================
    // SWITCH SCREEN
    // ========================================================

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
// RESTART TEST
// ============================================================

function restartTest() {

    shuffledQuestions = [];

    currentQuestion = 0;

    answers = [];


    resultScreen.classList.remove(
        "active"
    );


    testScreen.classList.remove(
        "active"
    );


    introScreen.classList.add(
        "active"
    );


    progressBar.style.width =
        "0%";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// ============================================================
// BUTTON EVENTS
// ============================================================

startBtn.addEventListener(
    "click",
    startTest
);


backBtn.addEventListener(
    "click",
    goBack
);


restartBtn.addEventListener(
    "click",
    restartTest
);
