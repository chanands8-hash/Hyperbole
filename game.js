const gameData = {
  home: {
    title: "歡迎來到誇誇星王國！",
    subtitle: "一起學習誇張法，找回會發光的誇張星。",
    intro1: "灰霧怪偷走了誇張星，句子都失去光芒了！",
    intro2: "快跟小狐狸誇誇一起出發，找出最誇張的說法吧！"
  },
  howToPlay: [
    "先看情境提示和插圖。",
    "選出最誇張的說法。",
    "答對可得到誇張星。",
    "完成世界後可解鎖下一個世界。",
    "如果答錯，之後可以進入錯題重溫模式。"
  ],
  assets: {
    audio: {
      bgm: "assets/audio/bgm.mp3",
      correct: "assets/audio/correct.mp3",
      wrong: "assets/audio/wrong.mp3",
      worldClear: "assets/audio/world-clear.mp3",
      finalClear: "assets/audio/final-clear.mp3"
    },
    ui: {
      feedbackStar: "assets/images/ui/result-star.png"
    }
  },
  worlds: [
    {
      id: "life-village",
      name: "生活村",
      shortIntro: "肚子餓、天氣熱、書包重，原來都可以說得很誇張！",
      introImage: "assets/images/worlds/life-village-card.png",
      stageImage: "assets/images/worlds/life-village-stage.png",
      mentorImage: "assets/images/characters/owl-teacher.png",
      completeText: "你救回了生活村的誇張星！",
      questions: [
        {
          id: "life-1",
          title: "生活村 第 1 關",
          prompt: "他很餓。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/life-1.png",
          options: ["他吃了一大碗白飯。", "他餓得可以吃下一頭牛。", "他現在很想快點吃飯。"],
          correctAnswer: 1,
          correctText: "答對了！這句說得真誇張！",
          explainText: "不是說真的吃牛，意思是非常餓。"
        },
        {
          id: "life-2",
          title: "生活村 第 2 關",
          prompt: "今天很熱。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/life-2.png",
          options: ["我今天一直流很多汗。", "熱得我快要整個人融化了。", "今天天上有很大的太陽。"],
          correctAnswer: 1,
          correctText: "你找到一顆誇張星！",
          explainText: "不是說真的融化，意思是非常熱。"
        },
        {
          id: "life-3",
          title: "生活村 第 3 關",
          prompt: "天氣很冷。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/life-3.png",
          options: ["我今天穿了厚厚外套。", "冷得我快要變成冰棒了。", "今天外面吹著很大冷風。"],
          correctAnswer: 1,
          correctText: "好厲害！這句很有畫面！",
          explainText: "不是變成冰棒，意思是非常冷。"
        },
        {
          id: "life-4",
          title: "生活村 第 4 關",
          prompt: "書包很重。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/life-4.png",
          options: ["書包裡面放了很多課本。", "書包重得像背著一座山。", "我一早就背起了書包。"],
          correctAnswer: 1,
          correctText: "答得好！誇張星發光了！",
          explainText: "不是山真的在書包裡，意思是書包非常重。"
        },
        {
          id: "life-5",
          title: "生活村 第 5 關",
          prompt: "功課很多。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/life-5.png",
          options: ["今天我要做好多功課。", "老師今天給了我一噸功課。", "今天有中文和數學功課。"],
          correctAnswer: 1,
          correctText: "太好了！你越來越會找誇張句！",
          explainText: "不是一噸真的那麼重，意思是功課很多。"
        },
        {
          id: "life-6",
          title: "生活村 第 6 關",
          prompt: "我很累。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/life-6.png",
          options: ["我現在真的很想休息。", "我累得連眼皮也抬不起來。", "我今天已經走了很多路。"],
          correctAnswer: 1,
          correctText: "生活村完成啦！",
          explainText: "意思是非常累，不是真的完全抬不起來。"
        }
      ]
    },
    {
      id: "action-forest",
      name: "動感森林",
      shortIntro: "跑步、跳高、笑聲和哭聲，通通變得超誇張！",
      introImage: "assets/images/worlds/action-forest-card.png",
      stageImage: "assets/images/worlds/action-forest-stage.png",
      mentorImage: "assets/images/characters/fox-guide.png",
      completeText: "你好叻！動感森林重新充滿笑聲了！",
      questions: [
        {
          id: "action-1",
          title: "動感森林 第 1 關",
          prompt: "他跑得很快。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/action-1.png",
          options: ["他跑得比大風吹更快。", "他今天一直在操場跑步。", "他很快就跑到前面去了。"],
          correctAnswer: 0,
          correctText: "風都追不到你！",
          explainText: "不是風真的在比賽，意思是跑得非常快。"
        },
        {
          id: "action-2",
          title: "動感森林 第 2 關",
          prompt: "她跳得很高。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/action-2.png",
          options: ["她剛才真的跳起來了。", "她跳得快要碰到白雲了。", "她跳起來的樣子很好看。"],
          correctAnswer: 1,
          correctText: "答對了！這句誇張得很精彩！",
          explainText: "不是真的碰到白雲，意思是跳得很高。"
        },
        {
          id: "action-3",
          title: "動感森林 第 3 關",
          prompt: "他笑得很開心。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/action-3.png",
          options: ["他笑得真的非常大聲。", "他笑得嘴巴快裂到耳邊。", "他今天感到十分開心呀。"],
          correctAnswer: 1,
          correctText: "哈哈！這句真誇張！",
          explainText: "不是嘴巴真的裂開，意思是笑得很開。"
        },
        {
          id: "action-4",
          title: "動感森林 第 4 關",
          prompt: "她哭得很厲害。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/action-4.png",
          options: ["她剛才一直不停地哭。", "她哭得像流出一條大河。", "她哭到眼睛都紅紅的了。"],
          correctAnswer: 1,
          correctText: "你成功救回一顆星！",
          explainText: "不是地上真的有河，意思是哭得很厲害。"
        },
        {
          id: "action-5",
          title: "動感森林 第 5 關",
          prompt: "教室很吵。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/action-5.png",
          options: ["教室裡很多同學在說話。", "教室吵得屋頂都快飛走了。", "今天班上真是十分熱鬧。"],
          correctAnswer: 1,
          correctText: "動感森林恢復活力了！",
          explainText: "不是屋頂真的飛走，意思是非常吵。"
        }
      ]
    },
    {
      id: "weather-city",
      name: "天氣夢幻城",
      shortIntro: "大雨、大風、太陽和星空，都藏著會發亮的誇張句。",
      introImage: "assets/images/worlds/weather-city-card.png",
      stageImage: "assets/images/worlds/weather-city-stage.png",
      mentorImage: "assets/images/characters/star-fairy.png",
      completeText: "太好了！天氣夢幻城的天空又亮起來了！",
      questions: [
        {
          id: "weather-1",
          title: "天氣夢幻城 第 1 關",
          prompt: "雨很大。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/weather-1.png",
          options: ["今天外面一直下著大雨。", "雨大得像天空倒水下來。", "我出門時記得帶了雨傘。"],
          correctAnswer: 1,
          correctText: "下得真誇張！",
          explainText: "不是天上真的倒水桶，意思是雨非常大。"
        },
        {
          id: "weather-2",
          title: "天氣夢幻城 第 2 關",
          prompt: "風很大。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/weather-2.png",
          options: ["今天外面吹著很大風。", "風大得快把我吹到月亮上。", "樹上的葉子一直在搖動。"],
          correctAnswer: 1,
          correctText: "你找到天空裡的誇張星！",
          explainText: "不是人真的飛上月亮，意思是風非常強。"
        },
        {
          id: "weather-3",
          title: "天氣夢幻城 第 3 關",
          prompt: "太陽很猛烈。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/weather-3.png",
          options: ["今天的太陽真的很大。", "太陽大得像要把大地烤熟。", "所以我出門時戴了帽子。"],
          correctAnswer: 1,
          correctText: "好耀眼！你答對了！",
          explainText: "不是地面真的被烤熟，意思是非常熱、非常曬。"
        },
        {
          id: "weather-4",
          title: "天氣夢幻城 第 4 關",
          prompt: "星星很多。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/weather-4.png",
          options: ["今晚天空有很多星星。", "天上的星星多得數不完。", "我剛才看到美麗的星空。"],
          correctAnswer: 1,
          correctText: "整片天空都亮起來了！",
          explainText: "意思是星星非常多。"
        },
        {
          id: "weather-5",
          title: "天氣夢幻城 第 5 關",
          prompt: "彩虹很亮、很美。",
          questionText: "哪一句最誇張？",
          image: "assets/images/questions/weather-5.png",
          options: ["天空出現了一道彩虹。", "彩虹亮得像天空在唱歌。", "現在的天空變得很漂亮。"],
          correctAnswer: 1,
          correctText: "恭喜！你完成天氣夢幻城！",
          explainText: "不是天空真的唱歌，意思是彩虹非常美、非常亮。"
        }
      ]
    }
  ]
};

const state = {
  currentWorldIndex: null,
  currentQuestionIndex: 0,
  totalStars: 0,
  worldScores: {},
  unlockedWorlds: 1,
  wrongQuestions: [],
  reviewMode: false,
  reviewQueue: [],
  musicOn: false,
  shuffledOptions: []
};

const el = {
  homeScreen: document.getElementById("homeScreen"),
  mapScreen: document.getElementById("mapScreen"),
  worldIntroScreen: document.getElementById("worldIntroScreen"),
  gameScreen: document.getElementById("gameScreen"),
  feedbackScreen: document.getElementById("feedbackScreen"),
  reviewScreen: document.getElementById("reviewScreen"),
  worldCompleteScreen: document.getElementById("worldCompleteScreen"),
  finalScreen: document.getElementById("finalScreen"),
  howModal: document.getElementById("howModal"),

  homeTitle: document.getElementById("homeTitle"),
  homeSubtitle: document.getElementById("homeSubtitle"),
  homeIntro1: document.getElementById("homeIntro1"),
  homeIntro2: document.getElementById("homeIntro2"),

  totalStarsText: document.getElementById("totalStarsText"),
  worldCards: document.getElementById("worldCards"),
  howList: document.getElementById("howList"),

  worldIntroImage: document.getElementById("worldIntroImage"),
  worldIntroTitle: document.getElementById("worldIntroTitle"),
  worldIntroDesc: document.getElementById("worldIntroDesc"),

  mentorImg: document.getElementById("mentorImg"),
  worldNameText: document.getElementById("worldNameText"),
  worldIntroText: document.getElementById("worldIntroText"),
  questionTitle: document.getElementById("questionTitle"),
  questionText: document.getElementById("questionText"),
  promptText: document.getElementById("promptText"),
  questionImage: document.getElementById("questionImage"),
  worldStageThumb: document.getElementById("worldStageThumb"),
  guideText: document.getElementById("guideText"),
  progressText: document.getElementById("progressText"),
  scoreText: document.getElementById("scoreText"),
  progressFill: document.getElementById("progressFill"),
  optionsWrap: document.getElementById("optionsWrap"),

  feedbackTag: document.getElementById("feedbackTag"),
  feedbackTitle: document.getElementById("feedbackTitle"),
  feedbackText: document.getElementById("feedbackText"),
  explainText: document.getElementById("explainText"),
  feedbackImage: document.getElementById("feedbackImage"),

  reviewSummary: document.getElementById("reviewSummary"),

  worldCompleteTitle: document.getElementById("worldCompleteTitle"),
  worldCompleteText: document.getElementById("worldCompleteText"),
  worldScoreText: document.getElementById("worldScoreText"),
  worldTotalStarsText: document.getElementById("worldTotalStarsText"),
  finalStarsText: document.getElementById("finalStarsText"),
  finalWorldsText: document.getElementById("finalWorldsText"),

  startBtn: document.getElementById("startBtn"),
  showHowBtn: document.getElementById("showHowBtn"),
  closeHowBtn: document.getElementById("closeHowBtn"),
  backHomeBtn: document.getElementById("backHomeBtn"),
  enterWorldBtn: document.getElementById("enterWorldBtn"),
  mapBtn: document.getElementById("mapBtn"),
  readBtn: document.getElementById("readBtn"),
  nextBtn: document.getElementById("nextBtn"),
  retryBtn: document.getElementById("retryBtn"),
  startReviewBtn: document.getElementById("startReviewBtn"),
  skipReviewBtn: document.getElementById("skipReviewBtn"),
  nextWorldBtn: document.getElementById("nextWorldBtn"),
  worldMapBtn: document.getElementById("worldMapBtn"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  finalHomeBtn: document.getElementById("finalHomeBtn"),
  musicToggleBtn: document.getElementById("musicToggleBtn"),

  bgm: document.getElementById("bgm"),
  sfxCorrect: document.getElementById("sfxCorrect"),
  sfxWrong: document.getElementById("sfxWrong"),
  sfxWorldClear: document.getElementById("sfxWorldClear"),
  sfxFinalClear: document.getElementById("sfxFinalClear")
};

function init() {
  setupAssets();
  setupText();
  bindEvents();
  validateQuestionOptions();
  preloadImages().then(() => {
    loadProgress();
    renderWorldMap();
    showScreen("homeScreen");
  });
}

function setupAssets() {
  if (el.bgm) el.bgm.src = gameData.assets.audio.bgm;
  if (el.sfxCorrect) el.sfxCorrect.src = gameData.assets.audio.correct;
  if (el.sfxWrong) el.sfxWrong.src = gameData.assets.audio.wrong;
  if (el.sfxWorldClear) el.sfxWorldClear.src = gameData.assets.audio.worldClear;
  if (el.sfxFinalClear) el.sfxFinalClear.src = gameData.assets.audio.finalClear;
  if (el.feedbackImage) el.feedbackImage.src = gameData.assets.ui.feedbackStar;
}

function setupText() {
  el.homeTitle.textContent = gameData.home.title;
  el.homeSubtitle.textContent = gameData.home.subtitle;
  el.homeIntro1.textContent = gameData.home.intro1;
  el.homeIntro2.textContent = gameData.home.intro2;

  el.howList.innerHTML = "";
  gameData.howToPlay.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    el.howList.appendChild(li);
  });
}

function bindEvents() {
  el.startBtn?.addEventListener("click", () => {
    renderWorldMap();
    showScreen("mapScreen");
    startAudio();
  });

  el.showHowBtn?.addEventListener("click", () => el.howModal.classList.remove("hidden"));
  el.closeHowBtn?.addEventListener("click", () => el.howModal.classList.add("hidden"));
  el.backHomeBtn?.addEventListener("click", () => showScreen("homeScreen"));

  el.enterWorldBtn?.addEventListener("click", () => {
    state.currentQuestionIndex = 0;
    state.reviewMode = false;
    renderQuestion();
    showScreen("gameScreen");
  });

  el.mapBtn?.addEventListener("click", () => {
    renderWorldMap();
    showScreen("mapScreen");
  });

  el.readBtn?.addEventListener("click", readCurrentQuestion);
  el.nextBtn?.addEventListener("click", handleNextStep);

  el.retryBtn?.addEventListener("click", () => {
    renderQuestion();
    showScreen("gameScreen");
  });

  el.startReviewBtn?.addEventListener("click", startReviewMode);
  el.skipReviewBtn?.addEventListener("click", () => {
    state.reviewMode = false;
    state.reviewQueue = [];
    completeWorld();
  });

  el.nextWorldBtn?.addEventListener("click", goNextWorld);
  el.worldMapBtn?.addEventListener("click", () => {
    renderWorldMap();
    showScreen("mapScreen");
  });

  el.playAgainBtn?.addEventListener("click", resetGame);
  el.finalHomeBtn?.addEventListener("click", () => showScreen("homeScreen"));
  el.musicToggleBtn?.addEventListener("click", toggleMusic);
}

function showScreen(id) {
  [
    el.homeScreen,
    el.mapScreen,
    el.worldIntroScreen,
    el.gameScreen,
    el.feedbackScreen,
    el.reviewScreen,
    el.worldCompleteScreen,
    el.finalScreen
  ].forEach(screen => screen?.classList.remove("active"));

  document.getElementById(id)?.classList.add("active");
}

function preloadImages() {
  const urls = [];

  gameData.worlds.forEach(world => {
    urls.push(world.introImage, world.stageImage, world.mentorImage);
    world.questions.forEach(q => urls.push(q.image));
  });

  urls.push(gameData.assets.ui.feedbackStar);

  const uniqueUrls = [...new Set(urls.filter(Boolean))];
  if (uniqueUrls.length === 0) return Promise.resolve();

  let loaded = 0;

  return new Promise(resolve => {
    uniqueUrls.forEach(url => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded += 1;
        if (loaded === uniqueUrls.length) resolve();
      };
      img.src = url;
    });
  });
}

function shuffleArray(array) {
  const arr = array.slice();

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function getCharCount(text) {
  return [...text.replace(/\s+/g, "")].length;
}

function validateQuestionOptions() {
  const problems = [];

  gameData.worlds.forEach(world => {
    world.questions.forEach(question => {
      question.options.forEach((option, index) => {
        if (getCharCount(option) < 8) {
          problems.push({
            world: world.name,
            questionId: question.id,
            optionIndex: index,
            optionText: option,
            length: getCharCount(option)
          });
        }
      });
    });
  });

  if (problems.length > 0) {
    console.warn("以下選項少於 8 字：", problems);
  } else {
    console.log("所有選項都符合最少 8 字要求。");
  }
}

function renderWorldMap() {
  el.totalStarsText.textContent = state.totalStars;
  el.worldCards.innerHTML = "";

  gameData.worlds.forEach((world, index) => {
    const unlocked = index < state.unlockedWorlds;
    const score = state.worldScores[world.id] ?? 0;

    const card = document.createElement("div");
    card.className = "world-card";
    card.innerHTML = `
      <img class="world-card-img" src="${world.introImage}" alt="${world.name}">
      <div class="world-meta">
        <span class="badge">${world.questions.length} 關</span>
        <span class="badge">⭐ ${score}</span>
      </div>
      <h3>${world.name}</h3>
      <p>${world.shortIntro}</p>
      <p>${unlocked ? "已解鎖" : "完成前一個世界後解鎖"}</p>
      <button class="${unlocked ? "primary-btn" : "ghost-btn"} enter-world-btn" type="button" ${unlocked ? "" : "disabled"}>
        ${unlocked ? `進入${world.name}` : "尚未解鎖"}
      </button>
    `;

    if (unlocked) {
      card.querySelector(".enter-world-btn").addEventListener("click", () => openWorldIntro(index));
    }

    el.worldCards.appendChild(card);
  });
}

function openWorldIntro(worldIndex) {
  state.currentWorldIndex = worldIndex;
  state.currentQuestionIndex = 0;
  state.reviewMode = false;
  state.reviewQueue = [];
  state.wrongQuestions = [];
  state.shuffledOptions = [];

  const world = getCurrentWorld();
  el.worldIntroImage.src = world.introImage;
  el.worldIntroTitle.textContent = world.name;
  el.worldIntroDesc.textContent = world.shortIntro;
  showScreen("worldIntroScreen");
}

function renderQuestion() {
  const world = getCurrentWorld();
  const question = getCurrentQuestion();
  const list = getQuestionList();

  if (!world || !question) return;

  el.mentorImg.src = world.mentorImage;
  el.worldNameText.textContent = world.name;
  el.worldIntroText.textContent = world.shortIntro;
  el.worldStageThumb.src = world.stageImage;
  el.questionTitle.textContent = question.title;
  el.questionText.textContent = question.questionText;
  el.promptText.textContent = question.prompt;
  el.questionImage.src = question.image;
  el.guideText.textContent = state.reviewMode
    ? "這是你剛才答錯的題目，再試一次！"
    : "請找出最誇張的說法！";

  el.progressText.textContent = `${state.currentQuestionIndex + 1} / ${list.length}`;
  el.scoreText.textContent = state.worldScores[world.id] ?? 0;
  el.progressFill.style.width = `${((state.currentQuestionIndex + 1) / list.length) * 100}%`;

  const optionObjects = question.options.map((text, index) => ({
    text,
    isCorrect: index === question.correctAnswer
  }));

  state.shuffledOptions = shuffleArray(optionObjects);

  el.optionsWrap.innerHTML = "";
  state.shuffledOptions.forEach((optionObj, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.type = "button";
    btn.textContent = optionObj.text;
    btn.addEventListener("click", () => checkAnswer(index, btn));
    el.optionsWrap.appendChild(btn);
  });
}

function checkAnswer(selectedIndex, selectedBtn) {
  const question = getCurrentQuestion();
  const world = getCurrentWorld();
  const selectedOption = state.shuffledOptions[selectedIndex];
  const correct = selectedOption.isCorrect;
  const buttons = [...el.optionsWrap.querySelectorAll(".option-btn")];

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (state.shuffledOptions[idx].isCorrect) {
      btn.classList.add("correct");
    }
  });

  if (!correct) {
    selectedBtn.classList.add("wrong");

    if (!state.reviewMode && !state.wrongQuestions.includes(question.id)) {
      state.wrongQuestions.push(question.id);
    }

    playSfx(el.sfxWrong);
    setTimeout(showWrongFeedback, 450);
    return;
  }

  if (!state.reviewMode) {
    state.worldScores[world.id] = (state.worldScores[world.id] ?? 0) + 1;
    state.totalStars += 1;
    saveProgress();
  }

  playSfx(el.sfxCorrect);
  setTimeout(() => showCorrectFeedback(question), 450);
}

function showCorrectFeedback(question) {
  el.feedbackTag.textContent = "誇張星回來了";
  el.feedbackTitle.textContent = "答對了！";
  el.feedbackText.textContent = question.correctText;
  el.explainText.textContent = question.explainText;
  el.nextBtn.classList.remove("hidden");
  el.retryBtn.classList.add("hidden");
  showScreen("feedbackScreen");
}

function showWrongFeedback() {
  el.feedbackTag.textContent = "再試一次";
  el.feedbackTitle.textContent = "再想一想！";
  el.feedbackText.textContent = "誇張法會把事情說得特別大、特別多、特別厲害。";
  el.explainText.textContent = "回到題目，再選一個最誇張的說法。";
  el.nextBtn.classList.add("hidden");
  el.retryBtn.classList.remove("hidden");
  showScreen("feedbackScreen");
}

function handleNextStep() {
  const list = getQuestionList();

  if (state.currentQuestionIndex >= list.length - 1) {
    if (!state.reviewMode && state.wrongQuestions.length > 0) {
      showReviewPrompt();
      return;
    }

    if (state.reviewMode) {
      state.reviewMode = false;
      state.reviewQueue = [];
      completeWorld();
      return;
    }

    completeWorld();
    return;
  }

  state.currentQuestionIndex += 1;
  renderQuestion();
  showScreen("gameScreen");
}

function showReviewPrompt() {
  el.reviewSummary.textContent = `你剛才有 ${state.wrongQuestions.length} 題答錯了，現在可以再挑戰一次。`;
  showScreen("reviewScreen");
}

function startReviewMode() {
  state.reviewMode = true;
  const world = getCurrentWorld();
  state.reviewQueue = world.questions.filter(q => state.wrongQuestions.includes(q.id));
  state.currentQuestionIndex = 0;
  state.shuffledOptions = [];
  renderQuestion();
  showScreen("gameScreen");
}

function completeWorld() {
  const world = getCurrentWorld();
  const score = state.worldScores[world.id] ?? 0;

  if (state.unlockedWorlds < gameData.worlds.length && state.currentWorldIndex === state.unlockedWorlds - 1) {
    state.unlockedWorlds += 1;
  }

  playSfx(el.sfxWorldClear);

  el.worldCompleteTitle.textContent = `${world.name}完成！`;
  el.worldCompleteText.textContent = world.completeText;
  el.worldScoreText.textContent = `${score} / ${world.questions.length}`;
  el.worldTotalStarsText.textContent = state.totalStars;

  saveProgress();

  const allDone = gameData.worlds.every(
    w => (state.worldScores[w.id] ?? 0) >= w.questions.length
  );

  el.nextWorldBtn.textContent =
    allDone || state.currentWorldIndex === gameData.worlds.length - 1
      ? "查看總成績"
      : "進入下一個世界";

  showScreen("worldCompleteScreen");
}

function goNextWorld() {
  const allDone = gameData.worlds.every(
    w => (state.worldScores[w.id] ?? 0) >= w.questions.length
  );

  if (allDone || state.currentWorldIndex === gameData.worlds.length - 1) {
    el.finalStarsText.textContent = state.totalStars;
    el.finalWorldsText.textContent = `${gameData.worlds.length} / ${gameData.worlds.length}`;
    playSfx(el.sfxFinalClear);
    showScreen("finalScreen");
    return;
  }

  openWorldIntro(state.currentWorldIndex + 1);
}

function getQuestionList() {
  if (state.reviewMode) return state.reviewQueue;
  return getCurrentWorld().questions;
}

function getCurrentWorld() {
  return gameData.worlds[state.currentWorldIndex];
}

function getCurrentQuestion() {
  const list = getQuestionList();
  return list[state.currentQuestionIndex];
}

function readCurrentQuestion() {
  const q = getCurrentQuestion();
  if (!q || !("speechSynthesis" in window)) return;

  const utter = new SpeechSynthesisUtterance(
    `${q.prompt} ${q.questionText} ${q.options.join("。")}`
  );
  utter.lang = "zh-HK";
  utter.rate = 0.93;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function playSfx(audioEl) {
  if (!audioEl) return;
  try {
    audioEl.currentTime = 0;
    audioEl.play().catch(() => {});
  } catch {}
}

function startAudio() {
  if (!el.bgm) return;
  state.musicOn = true;
  el.bgm.volume = 0.35;
  el.bgm.play().catch(() => {});
  el.musicToggleBtn.textContent = "🔊";
}

function toggleMusic() {
  if (!el.bgm) return;
  state.musicOn = !state.musicOn;

  if (state.musicOn) {
    el.bgm.play().catch(() => {});
    el.musicToggleBtn.textContent = "🔊";
  } else {
    el.bgm.pause();
    el.musicToggleBtn.textContent = "🔈";
  }
}

function saveProgress() {
  const data = {
    totalStars: state.totalStars,
    worldScores: state.worldScores,
    unlockedWorlds: state.unlockedWorlds
  };
  localStorage.setItem("hyperboleGameV3Progress", JSON.stringify(data));
}

function loadProgress() {
  const raw = localStorage.getItem("hyperboleGameV3Progress");
  if (!raw) return;

  try {
    const data = JSON.parse(raw);
    state.totalStars = data.totalStars ?? 0;
    state.worldScores = data.worldScores ?? {};
    state.unlockedWorlds = data.unlockedWorlds ?? 1;
  } catch {
    state.totalStars = 0;
    state.worldScores = {};
    state.unlockedWorlds = 1;
  }
}

function resetGame() {
  state.currentWorldIndex = null;
  state.currentQuestionIndex = 0;
  state.totalStars = 0;
  state.worldScores = {};
  state.unlockedWorlds = 1;
  state.wrongQuestions = [];
  state.reviewMode = false;
  state.reviewQueue = [];
  state.shuffledOptions = [];
  saveProgress();
  renderWorldMap();
  showScreen("homeScreen");
}

init();
