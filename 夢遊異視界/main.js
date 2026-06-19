// 測驗題目與情境資料 (由 user 提供之 quizScript)
const quizScript = [
  { 
    type: "intro", 
    text: "夜深了，你緩緩進入夢鄉。在朦朧的月光下，你發現自己站在一片寂靜的森林中。四周只有風穿過樹梢的聲音，空氣中瀰漫著一股神秘的氣息。\n忽然，前方的草叢中出現了一隻奇特的生物。\n牠的動作敏捷，模樣說不上來，似乎正回頭看了你一眼，接著迅速朝森林深處跑去。\n出於好奇，你毫不猶豫地跟了上去。" 
  },
  { 
    type: "question", 
    id: 1, 
    title: "1. 森林中的第一個幻象", 
    description: "月光下的身影忽遠忽近，就在牠消失在樹叢前的最後一刻——你看到牠的視線是：", 
    options: { A: "注視著前方", B: "往後注視著你" }, 
    logic: { A: "left", B: "right" } 
  },
  { 
    type: "transition", 
    text: "你遲疑了一秒，還是決定跟著進去。" 
  },
  { 
    type: "question", 
    id: 2, 
    title: "2. 真面目現身", 
    description: "樹洞裡一片漆黑。你小心翼翼地向前摸索，終於追上那隻生物。就在你想看清牠的樣子時——牠猛然轉過身來！你驚訝地望著眼前的身影，心裡第一個浮現的念頭是：", 
    options: { A: "鴨子", B: "兔子" }, 
    logic: { A: "left", B: "right" } 
  },
  { 
    type: "transition", 
    text: "那生物沒有理會你的震驚，只是繼續向前奔跑。" 
  },
  { 
    type: "question", 
    id: 3, 
    title: "3. 奇怪的大樹", 
    description: "不久後，你們來到一棵極其古怪的大樹前。當你抬頭凝視時，總覺得它看起來很像……", 
    options: { A: "一棵茂密的樹", B: "兩張相對的側臉" }, 
    logic: { A: "left", B: "right" } 
  },
  { 
    type: "transition", 
    text: "還來不及細想，那隻生物再次鑽進樹幹中突然出現的洞口。" 
  },
  { 
    type: "question", 
    id: 4, 
    title: "4. 通往未知的樓梯", 
    description: "你連忙跟了進去。樹洞裡出現了一座盤旋向下的樓梯。昏暗的燈光下，你的第一直覺樓梯是：", 
    options: { A: "往上", B: "往下" }, 
    logic: { A: "right", B: "left" } 
  },
  { 
    type: "transition", 
    text: "你沿著樓梯一路走著。" 
  },
  { 
    type: "question", 
    id: 5, 
    title: "5. 黑白士兵", 
    description: "接著來到了一座巨大的地下王國。前方，一整排士兵正在整齊巡邏。你第一眼看到的是:", 
    options: { A: "黑色士兵", B: "白色士兵" }, 
    logic: { A: "right", B: "left" } 
  },
  { 
    type: "transition", 
    text: "正當你努力辨認時——所有士兵突然同時轉身！他們將你包圍，帶往王宮深處。" 
  },
  { 
    type: "question", 
    id: 6, 
    title: "6. 神秘的拱門", 
    description: "你被押到一座高聳的拱門前。拱門上雕刻著兩種截然不同的圖案。你第一眼看到的是？", 
    options: { A: "兩個人", B: "一人的側臉" }, 
    logic: { A: "left", B: "right" } 
  },
  { 
    type: "transition", 
    text: "大門緩緩開啟。" 
  },
  { 
    type: "question", 
    id: 7, 
    title: "7. 棋盤地板之謎", 
    description: "城堡內，僕人們正忙著替地板重新上色。紅心皇后怒氣沖沖地質問：「為什麼棋盤格的顏色看起來不一樣？」她轉過頭，要求你給出答案。你認為顏色...", 
    options: { A: "相同", B: "不同" }, 
    logic: { A: "left", B: "right" } 
  },
  { 
    type: "transition", 
    text: "皇后沉思片刻，露出了謎樣的笑容。" 
  },
  { 
    type: "question", 
    id: 8, 
    title: "8. 皇后的裙子", 
    description: "紅心皇后轉了一圈，張開華麗的裙襬。「既然你這麼會觀察，那就告訴我——我的裙子究竟是什麼顏色？」", 
    options: { A: "藍色＋黑色", B: "白色＋金色" }, 
    logic: { A: "left", B: "right" } 
  },
  { 
    type: "transition", 
    text: "顯然，皇后並不滿意你的答案。她憤怒地對士兵大喊：「抓住他！」" 
  },
  { 
    type: "question", 
    id: 9, 
    title: "9. 森林中的巨大人臉", 
    description: "你轉身逃離城堡，沿著蜿蜒的小路衝進森林。跑著跑著，你看到了在森林中央...?", 
    options: { A: "巨大的人臉", B: "美麗的山景與樹林" }, 
    logic: { A: "right", B: "left" } 
  },
  { 
    type: "transition", 
    text: "就在這時，一個溫柔的聲音從身後傳來。" 
  },
  { 
    type: "question", 
    id: 10, 
    title: "10. 神秘的女子", 
    description: "你回過頭，看見一個人坐在木椅上。她的模樣是...?", 
    options: { A: "年輕女孩", B: "老太太" }, 
    logic: { A: "right", B: "left" } 
  },
  { 
    type: "outro", 
    text: "她靜靜看著你，微笑著說：「孩子，每個人看到的世界，都不一樣。」\n話音剛落，一陣強風吹過。四周景色迅速崩解，像紙片般飄散。",
    button: "夢醒時分"
  }
];

// 專案狀態變數
let currentIndex = 0;
let score = { left: 0, right: 0 };
let userAnswers = []; // 存每題 A 或 B 的回答
let isTyping = false; // 標記打字效果是否正在執行
let typingTimer = null; // 打字定時器

// DOM 元素選取
const homeSection = document.getElementById("home-section");
const quizSection = document.getElementById("quiz-section");
const transitionSection = document.getElementById("transition-section");
const resultSection = document.getElementById("result-section");

const progressFill = document.getElementById("progress-fill");
const quizImage = document.getElementById("quiz-image");
const quizTitle = document.getElementById("quiz-title");
const quizDesc = document.getElementById("quiz-desc");
const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");

const transitionText = document.getElementById("transition-text");
const clickHint = document.getElementById("click-hint");
const outroNextBtn = document.getElementById("outro-next-btn");

const leftPercentEl = document.getElementById("left-percent");
const rightPercentEl = document.getElementById("right-percent");
const resultTypeTitle = document.getElementById("result-type-title");
const resultTitleText = document.getElementById("result-title-text");
const resultDescText = document.getElementById("result-desc-text");

const startBtn = document.getElementById("start-btn");
const shareBtn = document.getElementById("share-btn");
const lotteryModal = document.getElementById("lottery-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const getCodeBtn = document.getElementById("get-code-btn");
const codeDisplay = document.getElementById("code-display");
const promoCode = document.getElementById("promo-code");

// 初始化背景裝飾與事件監聽
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundEffects();
  setupEventListeners();
  
  // 首頁載入 GSAP 動畫 (Stagger)
  gsap.fromTo("#home-section .section-header, .home-artwork-container, #home-section .title-container, .home-story-text, #start-btn", 
    { opacity: 0, y: 35, filter: "blur(12px)" },
    { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.15, ease: "power2.out" }
  );
});

// 設定事件監聽器
function setupEventListeners() {
  // 開始測驗（GSAP 轉場跳到第 0 步 - Intro 敘事）
  startBtn.addEventListener("click", () => {
    changeStateWithGSAP(() => {
      currentIndex = 0;
      renderState();
    });
  });

  // 選擇選項（觸發按鈕碎裂崩解，隨後 GSAP 轉場）
  optionA.addEventListener("click", (e) => handleAnswer("A", optionA));
  optionB.addEventListener("click", (e) => handleAnswer("B", optionB));

  // 情境敘事頁面（Intro, Transition, Outro）點擊畫面任意處繼續
  transitionSection.addEventListener("click", () => {
    // 如果當前是結尾頁且有顯示「夢醒時分」按鈕，則點擊背景無效，必須點擊按鈕
    const isOutroMode = !outroNextBtn.classList.contains("hidden");
    if (isOutroMode) return;
    
    // 只有在打字結束後點擊才有效
    if (!isTyping) {
      changeStateWithGSAP(() => {
        goToNextState();
      });
    }
  });

  // 結尾自訂按鈕點擊事件
  outroNextBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // 阻止事件冒泡到 transitionSection
    if (!isTyping) {
      changeStateWithGSAP(() => {
        goToNextState();
      });
    }
  });

  // 分享按鈕
  shareBtn.addEventListener("click", handleShare);

  // 關閉彈窗
  modalCloseBtn.addEventListener("click", () => {
    lotteryModal.classList.remove("active");
  });

  // 點擊背景關閉彈窗
  lotteryModal.addEventListener("click", (e) => {
    if (e.target === lotteryModal) {
      lotteryModal.classList.remove("active");
    }
  });

  // 獲取抽獎密令
  getCodeBtn.addEventListener("click", generateAndCopyLotteryCode);
}

// 動態背景效果
function initBackgroundEffects() {
  const particlesContainer = document.getElementById("bg-particles");
  const symbolsContainer = document.getElementById("floating-items");
  
  // 生成背景漂浮發光粒子
  const particleCount = 20;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "bg-particle";
    
    const size = Math.random() * 80 + 20; // 20px 到 100px
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = Math.random() * 15 + 10; // 10s 到 25s
    const opacity = Math.random() * 0.4 + 0.1; // 0.1 到 0.5
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.setProperty("--d", `${duration}s`);
    particle.style.setProperty("--op", opacity);
    
    particlesContainer.appendChild(particle);
  }

  // 生成愛麗絲主題漂浮元素
  const symbols = ['🗝️', '☕', '♠', '♥', '♦', '♣', '✨', '⏰', '🌹'];
  const symbolCount = 12;
  
  for (let i = 0; i < symbolCount; i++) {
    const sym = document.createElement("div");
    sym.className = "floating-symbol";
    sym.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    const left = Math.random() * 90 + 5; // 5% 到 95%
    const top = Math.random() * 80 + 10;
    const duration = Math.random() * 20 + 12; // 12s 到 32s
    const opacity = Math.random() * 0.3 + 0.15; // 0.15 到 0.45
    const fontSize = Math.random() * 1.2 + 0.8; // 0.8rem 到 2.0rem
    const blur = Math.random() * 3; // 0px 到 3px 模糊，做出前後景深感
    const delay = Math.random() * -20; // 負延遲使動畫立即開始在隨機進度
    
    sym.style.left = `${left}%`;
    sym.style.top = `${top}%`;
    sym.style.setProperty("--fs", `${fontSize}rem`);
    sym.style.setProperty("--d", `${duration}s`);
    sym.style.setProperty("--op", opacity);
    sym.style.setProperty("--bl", `${blur}px`);
    sym.style.setProperty("--ad", `${delay}s`);
    
    symbolsContainer.appendChild(sym);
  }
}

// GSAP 破碎模糊轉場機制
function changeStateWithGSAP(nextStateFn) {
  gsap.to(".glass-card", {
    scale: 0.9,
    opacity: 0,
    filter: "blur(20px)",
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: () => {
      // 執行實質切換與渲染
      nextStateFn();
      
      // 內容從底部輕微浮起、模糊對焦淡入
      gsap.fromTo(".glass-card", 
        { scale: 0.95, opacity: 0, filter: "blur(10px)", y: 20 },
        { scale: 1, opacity: 1, filter: "blur(0px)", y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  });
}

// 逐字浮現打字機特效
function typeText(element, text, callback) {
  // 清除未完成的打字定時器
  if (typingTimer) clearTimeout(typingTimer);
  
  element.innerHTML = "";
  clickHint.classList.add("hidden");
  outroNextBtn.classList.add("hidden"); // 同時隱藏按鈕
  isTyping = true;
  
  const chars = Array.from(text);
  let i = 0;
  
  function type() {
    if (i < chars.length) {
      const char = chars[i];
      if (char === "\n") {
        element.innerHTML += "<br>";
      } else {
        element.innerHTML += char;
      }
      i++;
      // 打字間隔：每字 45ms 速度適中易讀
      typingTimer = setTimeout(type, 45);
    } else {
      isTyping = false;
      if (callback) callback();
    }
  }
  
  type();
}

// 按鈕碎裂粒子崩解特效 (Button Particle Dissolve)
function dissolveButton(button, callback) {
  const rect = button.getBoundingClientRect();
  const container = document.body; // 加在 body 防止被卡片 overflow 裁切
  
  // 隨機噴散 30 個霓虹漸層粒子
  const particleCount = 30;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");
    particle.className = "dissolve-particle";
    
    // 從按鈕中心噴出
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    
    // 隨機大小 4px 到 12px
    const size = Math.random() * 8 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // 設定隨機運動參數 (X/Y 位移與旋轉)
    const dx = `${(Math.random() - 0.5) * 350}px`; // 扇形飛散
    const dy = `${(Math.random() - 0.3) * -250 - 50}px`; // 向上拋射並落回
    const dr = `${Math.random() * 720 - 360}deg`; // 旋轉
    const duration = `${Math.random() * 0.5 + 0.4}s`; // 隨機壽命
    
    particle.style.setProperty("--dx", dx);
    particle.style.setProperty("--dy", dy);
    particle.style.setProperty("--dr", dr);
    particle.style.setProperty("--d", duration);
    
    container.appendChild(particle);
    
    // 播放完自動刪除
    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
  
  // 對按鈕本體執行 GSAP 模糊縮小淡出
  gsap.to(button, {
    scale: 0.8,
    opacity: 0,
    filter: "blur(12px)",
    duration: 0.4,
    ease: "power2.out",
    onComplete: () => {
      // 復原按鈕樣式供後續回到題目使用
      button.style.transform = "";
      button.style.opacity = "";
      button.style.filter = "";
      if (callback) callback();
    }
  });
}

// 題目與描述文字崩解特效
function shatterText(element, callback) {
  if (!element) {
    if (callback) callback();
    return;
  }
  
  const text = element.innerText;
  element.innerHTML = "";
  
  const spans = Array.from(text).map(char => {
    const span = document.createElement("span");
    if (char === "\n") {
      span.innerHTML = "<br>";
      span.style.display = "block";
    } else {
      span.innerText = char;
      span.className = "shatter-char";
    }
    element.appendChild(span);
    return span;
  }).filter(span => span.className === "shatter-char");
  
  if (spans.length === 0) {
    element.innerText = text;
    if (callback) callback();
    return;
  }
  
  gsap.to(spans, {
    x: () => (Math.random() - 0.5) * 160,
    y: () => Math.random() * 200 + 80,
    rotation: () => (Math.random() - 0.5) * 360,
    opacity: 0,
    scale: 0.2,
    duration: 0.8,
    ease: "power2.in",
    stagger: {
      amount: 0.35,
      from: "random"
    },
    onComplete: () => {
      if (callback) callback();
    }
  });
}

function shatterQuestionArea(callback) {
  let completed = 0;
  const total = 3;
  
  function checkDone() {
    completed++;
    if (completed === total) {
      if (callback) callback();
    }
  }
  
  shatterText(quizTitle, checkDone);
  shatterText(quizDesc, checkDone);
  
  // 圖片縮小淡出與模糊
  gsap.to(".question-image-container", {
    scale: 0.9,
    opacity: 0,
    y: 25,
    filter: "blur(10px)",
    duration: 0.7,
    ease: "power2.in",
    onComplete: () => {
      checkDone();
    }
  });
}

// 處理選項點擊
function handleAnswer(choice, buttonElement) {
  const currentState = quizScript[currentIndex];
  
  if (currentState.type === "question") {
    // 紀錄答案
    userAnswers.push(choice);
    const side = currentState.logic[choice];
    score[side]++;
    
    // 禁用選項點擊以防止重複觸發
    optionA.style.pointerEvents = "none";
    optionB.style.pointerEvents = "none";
    
    // 觸發按鈕碎裂崩解
    dissolveButton(buttonElement);
    
    // 觸發文字崩解與圖片淡出，完畢後再 GSAP 模糊轉場
    shatterQuestionArea(() => {
      optionA.style.pointerEvents = "";
      optionB.style.pointerEvents = "";
      
      changeStateWithGSAP(() => {
        goToNextState();
      });
    });
  }
}

// 跳轉到下一個狀態
function goToNextState() {
  currentIndex++;
  if (currentIndex < quizScript.length) {
    renderState();
  } else {
    // 已經跑完所有內容，計算結果並顯示
    showResultPage();
  }
}

// 渲染當前狀態頁面
function renderState() {
  const state = quizScript[currentIndex];
  
  // 隱藏所有區段
  homeSection.classList.add("hidden");
  quizSection.classList.add("hidden");
  transitionSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  
  if (state.type === "intro") {
    // 情境第一頁：顯示敘事區並打字
    transitionSection.classList.remove("hidden");
    transitionSection.classList.add("active");
    typeText(transitionText, state.text, () => {
      clickHint.innerText = "── 點擊畫面任意處繼續 ──";
      clickHint.classList.remove("hidden");
      gsap.fromTo(clickHint, { opacity: 0, y: 5 }, { opacity: 0.7, y: 0, duration: 0.5 });
    });
  } 
  
  else if (state.type === "question") {
    // 測驗題目頁
    quizSection.classList.remove("hidden");
    quizSection.classList.add("active");
    
    // 重設圖片與文字容器的 GSAP 狀態以防殘留淡出與崩解效果
    gsap.set(".question-image-container", { scale: 1, opacity: 1, y: 0, filter: "blur(0px)" });
    gsap.set([quizTitle, quizDesc], { opacity: 1, scale: 1, x: 0, y: 0, rotation: 0 });
    
    // 設定題目內容
    quizTitle.innerText = state.title;
    quizDesc.innerText = state.description;
    
    // 選項內容
    optionA.innerText = `A: ${state.options.A}`;
    optionB.innerText = `B: ${state.options.B}`;
    
    // 計算進度條（只算 question 類型的進度，總共 10 題）
    const questionId = state.id; // 1 ~ 10
    const progressPercent = (questionId / 10) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    // 設定題目對應圖片，清空背景圖，使 style.css 的毛玻璃卡片得以顯現
    const imageMap = {
      1: "1.jpg",
      2: "2.jpg",
      3: "3.jpg",
      4: "4.jpg",
      5: "5.jpg",
      6: "6.jpg",
      7: "7.jpg",
      8: "8.jpg",
      9: "9.jpg",
      10: "10.jpg"
    };
    
    quizSection.style.backgroundImage = "";
    quizImage.src = `./${imageMap[questionId]}`;
    quizImage.alt = state.title;
  } 
  
  else if (state.type === "transition") {
    // 過場情境：打字呈現，結束後點擊繼續
    transitionSection.classList.remove("hidden");
    transitionSection.classList.add("active");
    typeText(transitionText, state.text, () => {
      clickHint.innerText = "── 點擊畫面任意處繼續 ──";
      clickHint.classList.remove("hidden");
      gsap.fromTo(clickHint, { opacity: 0, y: 5 }, { opacity: 0.7, y: 0, duration: 0.5 });
    });
  } 
  
  else if (state.type === "outro") {
    // 結尾情境：打字呈現
    transitionSection.classList.remove("hidden");
    transitionSection.classList.add("active");
    outroNextBtn.innerText = state.button || "夢醒時分";
    typeText(transitionText, state.text, () => {
      // 顯示並淡入自訂按鈕
      outroNextBtn.classList.remove("hidden");
      gsap.fromTo(outroNextBtn, { opacity: 0, y: 10, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" });
    });
  }
}

// 顯示測驗結果頁面
function showResultPage() {
  homeSection.classList.add("hidden");
  quizSection.classList.add("hidden");
  transitionSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  resultSection.classList.add("active");
  
  // 計算結果百分比
  const total = score.left + score.right;
  const leftPercent = total > 0 ? Math.round((score.left / total) * 100) : 50;
  const rightPercent = total > 0 ? Math.round((score.right / total) * 100) : 50;
  
  // 渲染大腦百分比文字
  leftPercentEl.innerText = `${leftPercent}%`;
  rightPercentEl.innerText = `${rightPercent}%`;
  
  // 決定結果類型與分析文案
  let resultType = "";
  let title = "";
  let description = "";
  
  if (score.left > score.right) {
    resultType = "左腦型";
    title = "邏輯編織的夢境觀測者";
    description = `依據您的視覺判讀結果，您擁有高度發展的左腦思維（理性比例佔 ${leftPercent}%）。在光怪陸離的夢境中，你依然試圖用理性去解析事物，善於看穿視錯覺背後的真相。在現實中，你是一個冷靜、務實、重視條理與細節的決策者，不容易被情緒或表象所左右。歡迎進入朝陽視傳系，一同沈浸視體驗。`;
  } else if (score.right > score.left) {
    resultType = "右腦型";
    title = "直覺支配的幻象旅行者";
    description = `依據您的視覺判讀結果，您擁有高度發展的右腦思維（感性比例佔 ${rightPercent}%）。在夢境中，你順應著奇異的視錯覺，感受色彩與直覺帶來的視覺共鳴。在現實中，你是一位天生的藝術家與直覺探索者，擁有豐富的想像力與同理心，善於從宏觀的角度感知世界，充滿創意與靈性。歡迎進入朝陽視傳系，一同沈浸視體驗。`;
  } else {
    resultType = "雙腦均衡型";
    title = "遊走於虛實邊界的創作者";
    description = `依據您的視覺判讀結果，您擁有左右腦均衡兼容的綜合思考型態（左腦 ${leftPercent}% / 右腦 ${rightPercent}%）。你能在邏輯與直覺之間取得完美的平衡，既能欣賞夢境的荒誕與美麗，又能冷靜地在現實與虛幻之間找到前行的道路，是一個偏向創意思維與直覺整合的創作者。歡迎進入朝陽視傳系，一同沈浸視體驗。`;
  }
  
  resultTypeTitle.innerText = resultType;
  resultTitleText.innerText = title;
  resultDescText.innerText = description;
  
  // 霓虹百分比進度條動態增長與跑數字
  const barLeftPercentEl = document.getElementById("bar-left-percent");
  const barRightPercentEl = document.getElementById("bar-right-percent");
  const barLeftFillEl = document.getElementById("bar-left-fill");
  const barRightFillEl = document.getElementById("bar-right-fill");
  
  // 重置進度條
  barLeftFillEl.style.width = "0%";
  barRightFillEl.style.width = "0%";
  barLeftPercentEl.innerText = "0%";
  barRightPercentEl.innerText = "0%";
  
  // 觸發寬度 transition 動畫
  setTimeout(() => {
    barLeftFillEl.style.width = `${leftPercent}%`;
    barRightFillEl.style.width = `${rightPercent}%`;
  }, 150);
  
  // 跑數字馬拉松動畫
  let countLeft = 0;
  let countRight = 0;
  const duration = 1500; // 動畫總時長 1.5s
  const stepTime = 30; // 每個 frame 的間隔時間 (30ms)
  const steps = duration / stepTime;
  const incrementLeft = leftPercent / steps;
  const incrementRight = rightPercent / steps;
  let currentStep = 0;
  
  const counterTimer = setInterval(() => {
    currentStep++;
    countLeft += incrementLeft;
    countRight += incrementRight;
    
    if (currentStep >= steps) {
      barLeftPercentEl.innerText = `${leftPercent}%`;
      barRightPercentEl.innerText = `${rightPercent}%`;
      clearInterval(counterTimer);
    } else {
      barLeftPercentEl.innerText = `${Math.round(countLeft)}%`;
      barRightPercentEl.innerText = `${Math.round(countRight)}%`;
    }
  }, stepTime);
}

// 處理結果分享與抽獎流程
function handleShare() {
  const shareData = {
    title: '夢遊異視界 - 沉浸式視錯覺心理測驗',
    text: `我在「夢遊異視界」測驗中獲得了「${resultTypeTitle.innerText} - ${resultTitleText.innerText}」！快來測測看你的左右腦思維傾向！`,
    url: window.location.href
  };

  // 優先使用原生分享 (Web Share API)
  if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    navigator.share(shareData)
      .then(() => {
        openLotteryModal();
      })
      .catch((error) => {
        console.log('分享失敗或已取消:', error);
        openLotteryModal();
      });
  } else {
    // Fallback: 複製連結並開啟抽獎活動彈窗
    copyLinkToClipboard();
  }
}

// 複製連結至剪貼簿
function copyLinkToClipboard() {
  const tempInput = document.createElement("input");
  tempInput.value = window.location.href;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
    alert("測驗網址已複製到您的剪貼簿！\n貼上分享至限時動態即可參與抽獎！");
  } catch (err) {
    console.error("無法複製網址", err);
  }
  document.body.removeChild(tempInput);
  
  // 打開抽獎彈窗
  openLotteryModal();
}

// 開氣抽獎彈窗
function openLotteryModal() {
  lotteryModal.classList.add("active");
  // 重設抽獎密令區塊為未點選狀態
  codeDisplay.classList.add("hidden");
  getCodeBtn.classList.remove("hidden");
}

// 生成與複製專屬抽獎密令
function generateAndCopyLotteryCode() {
  const randomHex = Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
  const code = `VCD-DREAM-${randomHex}`;
  
  promoCode.innerText = code;
  
  // 複製密令
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code)
      .then(() => {
        showCodeResult();
      })
      .catch(err => {
        fallbackCopyText(code);
      });
  } else {
    fallbackCopyText(code);
  }
}

function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  showCodeResult();
}

function showCodeResult() {
  getCodeBtn.classList.add("hidden");
  codeDisplay.classList.remove("hidden");
  alert("您的抽獎密令已成功複製！\n請截圖此頁面，並至 IG 限動 Tag 活動帳號參與抽獎！");
}
