// Ziraat Bankası Uzman Yardımcılığı İngilizce Hazırlık Platformu
// Temel Uygulama Motoru & Durum Yönetimi

const APP_STATE = {
  currentTab: 'dashboard',
  activeExamKey: null,
  activeExamData: null,
  currentQuestionIndex: 0,
  userAnswers: {},       // questionId -> 'A' | 'B' | ...
  flaggedQuestions: {},  // questionId -> true | false
  timerInterval: null,
  timeRemaining: 45 * 60, // 45 dakika (saniye cinsinden)
  isExamSubmitted: false,
  
  // Flashcards state
  currentVocabIndex: 0,
  filteredVocab: [],
  vocabFilter: 'All',
  vocabSearch: '',
  isCardFlipped: false,

  // Lessons state
  activeLessonId: 'lesson_tenses',
  lessonSearchQuery: '',

  // Passage zoom state
  passageFontSize: 16
};


// LocalStorage Yardımcıları
const Storage = {
  getMistakes() {
    return JSON.parse(localStorage.getItem('zb_mistakes') || '[]');
  },
  saveMistake(questionId) {
    const list = this.getMistakes();
    if (!list.includes(questionId)) {
      list.push(questionId);
      localStorage.setItem('zb_mistakes', JSON.stringify(list));
    }
  },
  removeMistake(questionId) {
    let list = this.getMistakes();
    list = list.filter(id => id !== questionId);
    localStorage.setItem('zb_mistakes', JSON.stringify(list));
  },
  getLearnedWords() {
    return JSON.parse(localStorage.getItem('zb_learned_words') || '[]');
  },
  toggleLearnedWord(wordId) {
    let list = this.getLearnedWords();
    if (list.includes(wordId)) {
      list = list.filter(id => id !== wordId);
    } else {
      list.push(wordId);
    }
    localStorage.setItem('zb_learned_words', JSON.stringify(list));
    return list.includes(wordId);
  },
  getExamHistory() {
    return JSON.parse(localStorage.getItem('zb_exam_history') || '[]');
  },
  saveExamResult(result) {
    const history = this.getExamHistory();
    history.push(result);
    localStorage.setItem('zb_exam_history', JSON.stringify(history));
  }
};

// Sayfa Yüklendiğinde Başlat
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initDashboard();
  initLessons();
  initTactics();
  initFlashcards();
  initCategoryDrills();
});

// Tab Yönetimi
function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      switchTab(target);
    });
  });
}

function switchTab(tabId) {
  APP_STATE.currentTab = tabId;
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-content').forEach(c => {
    c.classList.toggle('active', c.id === `tab-${tabId}`);
  });

  if (tabId === 'dashboard') updateDashboardStats();
  if (tabId === 'lessons') initLessons();
  if (tabId === 'flashcards') renderFlashcard();
}


// DASHBOARD
function initDashboard() {
  updateDashboardStats();
}

function updateDashboardStats() {
  const history = Storage.getExamHistory();
  const learnedWords = Storage.getLearnedWords();

  document.getElementById('dash-exams-count').textContent = history.length;
  
  if (history.length > 0) {
    const lastExam = history[history.length - 1];
    document.getElementById('dash-last-score').textContent = `${lastExam.correct} / 40 (${Math.round((lastExam.correct / 40) * 100)}%)`;
    const passedCount = history.filter(h => h.passed).length;
    document.getElementById('dash-pass-rate').textContent = `${Math.round((passedCount / history.length) * 100)}%`;
  } else {
    document.getElementById('dash-last-score').textContent = 'Henüz Çözülmedi';
    document.getElementById('dash-pass-rate').textContent = '0%';
  }

  document.getElementById('dash-words-count').textContent = `${learnedWords.length} / ${VOCAB_DATA.length}`;
}


// SINAV SİMÜLATÖRÜ (MOCK EXAMS)
function startMockExam(examKey) {
  APP_STATE.activeExamKey = examKey;
  APP_STATE.activeExamData = EXAM_DATA[examKey];
  APP_STATE.currentQuestionIndex = 0;
  APP_STATE.userAnswers = {};
  APP_STATE.flaggedQuestions = {};
  APP_STATE.isExamSubmitted = false;
  APP_STATE.timeRemaining = 45 * 60; // 45 dakika

  // UI hazırla
  document.getElementById('mock-selection-view').style.display = 'none';
  document.getElementById('mock-scorecard-view').style.display = 'none';
  document.getElementById('mock-active-view').style.display = 'block';

  document.getElementById('exam-active-title').textContent = APP_STATE.activeExamData.title;

  startTimer();
  renderQuestionNavPalette();
  renderCurrentQuestion();
}

function startTimer() {
  clearInterval(APP_STATE.timerInterval);
  updateTimerDisplay();
  
  APP_STATE.timerInterval = setInterval(() => {
    APP_STATE.timeRemaining--;
    updateTimerDisplay();
    
    if (APP_STATE.timeRemaining <= 0) {
      clearInterval(APP_STATE.timerInterval);
      alert('Süreniz doldu! Sınav otomatik olarak sonlandırılıyor.');
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(APP_STATE.timeRemaining / 60);
  const seconds = APP_STATE.timeRemaining % 60;
  const timerElem = document.getElementById('exam-timer');
  timerElem.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  if (APP_STATE.timeRemaining < 300) { // 5 dakikadan az
    timerElem.parentElement.classList.add('warning');
  } else {
    timerElem.parentElement.classList.remove('warning');
  }
}

function renderQuestionNavPalette() {
  const container = document.getElementById('question-palette');
  container.innerHTML = '';
  const questions = APP_STATE.activeExamData.questions;

  questions.forEach((q, index) => {
    const btn = document.createElement('button');
    btn.className = 'q-btn';
    btn.textContent = index + 1;
    btn.dataset.index = index;

    if (index === APP_STATE.currentQuestionIndex) btn.classList.add('active');
    
    if (APP_STATE.isExamSubmitted) {
      const userAns = APP_STATE.userAnswers[q.id];
      if (userAns === q.answer) {
        btn.classList.add('correct');
      } else if (userAns) {
        btn.classList.add('wrong');
      }
    } else {
      if (APP_STATE.userAnswers[q.id]) btn.classList.add('answered');
      if (APP_STATE.flaggedQuestions[q.id]) btn.classList.add('flagged');
    }

    btn.addEventListener('click', () => {
      APP_STATE.currentQuestionIndex = index;
      renderQuestionNavPalette();
      renderCurrentQuestion();
    });

    container.appendChild(btn);
  });
}

function renderCurrentQuestion() {
  const q = APP_STATE.activeExamData.questions[APP_STATE.currentQuestionIndex];
  const container = document.getElementById('active-question-card');
  const totalQ = APP_STATE.activeExamData.questions.length;

  let passageHtml = '';
  if (q.passage) {
    passageHtml = `
      <div class="passage-box">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid rgba(0,0,0,0.06); padding-bottom:6px;">
          <strong style="color:var(--text-main); font-size:0.95rem;">📖 Okuma Parçası</strong>
          <div style="display:flex; align-items:center; gap:6px;">
            <button class="btn btn-sm btn-secondary" onclick="zoomOutPassage()" title="Metni Küçült" style="padding:3px 9px; font-size:0.78rem; font-weight:700;">A-</button>
            <button class="btn btn-sm btn-secondary" onclick="zoomInPassage()" title="Metni Büyüt" style="padding:3px 9px; font-size:0.78rem; font-weight:700;">A+</button>
          </div>
        </div>
        <div style="font-size:${APP_STATE.passageFontSize}px; line-height:1.75;">${q.passage}</div>
      </div>
    `;
  }

  const selectedAnswer = APP_STATE.userAnswers[q.id];
  const isFlagged = APP_STATE.flaggedQuestions[q.id];

  let optionsHtml = '';
  ['A', 'B', 'C', 'D', 'E'].forEach(letter => {
    if (!q.options[letter]) return;
    
    let optClass = 'option-item';
    if (!APP_STATE.isExamSubmitted) {
      if (selectedAnswer === letter) optClass += ' selected';
    } else {
      if (letter === q.answer) optClass += ' correct';
      else if (selectedAnswer === letter) optClass += ' wrong';
    }

    optionsHtml += `
      <div class="${optClass}" onclick="selectAnswer('${q.id}', '${letter}')">
        <span class="option-letter">${letter}</span>
        <span class="option-text">${q.options[letter]}</span>
      </div>
    `;
  });

  let explanationHtml = '';
  if (APP_STATE.isExamSubmitted) {
    explanationHtml = `
      <div class="explanation-box">
        <div class="explanation-title">
          <span>💡 Soru Çözüm Analizi:</span> (Doğru Cevap: <strong>${q.answer}</strong>)
        </div>
        <p>${q.explanation}</p>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="question-header">
      <div>
        <span style="font-weight:800; color:var(--text-main); font-size:1.1rem;">Soru ${APP_STATE.currentQuestionIndex + 1} / ${totalQ}</span>
        <span class="category-tag" style="margin-left:10px;">${q.category}</span>
        <span class="category-tag" style="background:#eff6ff; color:#1d4ed8; border-color:#bfdbfe;">${q.tag || ''}</span>
      </div>
      <div>
        ${!APP_STATE.isExamSubmitted ? `
          <button class="btn btn-sm btn-secondary" onclick="toggleFlag('${q.id}')">
            ${isFlagged ? '🚩 İşareti Kaldır' : '🏳️ Sonra Bak'}
          </button>
        ` : ''}
      </div>
    </div>
    
    ${passageHtml}

    <div class="question-text">${q.question}</div>

    <div class="options-list">
      ${optionsHtml}
    </div>

    ${explanationHtml}

    <div style="display:flex; justify-content:space-between; margin-top:2rem; align-items:center;">
      <button class="btn btn-secondary" onclick="prevQuestion()" ${APP_STATE.currentQuestionIndex === 0 ? 'disabled' : ''}>
        ⬅ Önceki Soru
      </button>
      <span style="font-size:0.88rem; color:var(--text-muted); font-weight:500;">
        ${APP_STATE.isExamSubmitted ? 'İnceleme Modu' : 'Cevaplamak için seçeneğe tıklayın'}
      </span>
      <button class="btn btn-primary" onclick="nextQuestion()" ${APP_STATE.currentQuestionIndex === totalQ - 1 ? 'disabled' : ''}>
        Sonraki Soru ➡
      </button>
    </div>
  `;
}

function zoomInPassage() {
  if (APP_STATE.passageFontSize < 24) {
    APP_STATE.passageFontSize += 2;
    renderCurrentQuestion();
  }
}

function zoomOutPassage() {
  if (APP_STATE.passageFontSize > 13) {
    APP_STATE.passageFontSize -= 2;
    renderCurrentQuestion();
  }
}

function selectAnswer(questionId, letter) {
  if (APP_STATE.isExamSubmitted) return;
  APP_STATE.userAnswers[questionId] = letter;
  renderQuestionNavPalette();
  renderCurrentQuestion();
}

function toggleFlag(questionId) {
  APP_STATE.flaggedQuestions[questionId] = !APP_STATE.flaggedQuestions[questionId];
  renderQuestionNavPalette();
  renderCurrentQuestion();
  if (APP_STATE.flaggedQuestions[questionId]) {
    showToast('Soru "Sonra Bak" olarak işaretlendi (Sarı)', '🚩');
  } else {
    showToast('Soru işareti kaldırıldı', '🏳️');
  }
}


function prevQuestion() {
  if (APP_STATE.currentQuestionIndex > 0) {
    APP_STATE.currentQuestionIndex--;
    renderQuestionNavPalette();
    renderCurrentQuestion();
  }
}

function nextQuestion() {
  const totalQ = APP_STATE.activeExamData.questions.length;
  if (APP_STATE.currentQuestionIndex < totalQ - 1) {
    APP_STATE.currentQuestionIndex++;
    renderQuestionNavPalette();
    renderCurrentQuestion();
  }
}

function confirmSubmitExam() {
  const answeredCount = Object.keys(APP_STATE.userAnswers).length;
  const totalCount = APP_STATE.activeExamData.questions.length;
  const emptyCount = totalCount - answeredCount;

  let msg = `Sınavı bitirmek üzeresiniz.\n\nToplam Soru: ${totalCount}\nCevaplanan: ${answeredCount}\nBoş Bırakılan: ${emptyCount}\n\n`;
  if (emptyCount > 0) {
    msg += `⚠️ DİKKAT: Ziraat Bankası sınavında YANLIŞ DOĞRUYU GÖTÜRMEZ! Boş bıraktığınız sorular puan kazandırmaz. Yine de bitirmek istiyor musunuz?`;
  } else {
    msg += `Sınavı tamamlamak istediğinize emin misiniz?`;
  }

  if (confirm(msg)) {
    submitExam();
  }
}

function submitExam() {
  clearInterval(APP_STATE.timerInterval);
  APP_STATE.isExamSubmitted = true;

  const questions = APP_STATE.activeExamData.questions;
  let correctCount = 0;
  let wrongCount = 0;
  let emptyCount = 0;

  questions.forEach(q => {
    const userAns = APP_STATE.userAnswers[q.id];
    if (!userAns) {
      emptyCount++;
      Storage.saveMistake(q.id); // Boşları da hata defterine ekle
    } else if (userAns === q.answer) {
      correctCount++;
    } else {
      wrongCount++;
      Storage.saveMistake(q.id); // Yanlışları kaydet
    }
  });

  const percentage = Math.round((correctCount / questions.length) * 100);
  const passed = correctCount >= 24; // %60 barajı = 24 doğru

  // Skoru kaydet
  Storage.saveExamResult({
    examKey: APP_STATE.activeExamKey,
    examTitle: APP_STATE.activeExamData.title,
    correct: correctCount,
    wrong: wrongCount,
    empty: emptyCount,
    percentage: percentage,
    passed: passed,
    date: new Date().toLocaleDateString('tr-TR')
  });

  // Scorecard Görünümünü Göster

  document.getElementById('mock-active-view').style.display = 'none';
  document.getElementById('mock-scorecard-view').style.display = 'block';

  const badgeElem = document.getElementById('score-threshold-badge');
  if (passed) {
    badgeElem.className = 'threshold-badge pass';
    badgeElem.innerHTML = `🎉 TEBRİKLER! %60 BARAJINI GEÇTİNİZ! (${correctCount} / 40 Doğru)`;
  } else {
    badgeElem.className = 'threshold-badge fail';
    badgeElem.innerHTML = `⚠️ BARAJIN ALTINDASINIZ! (${correctCount} / 40 Doğru - En az 24 doğru gerekli)`;
  }

  document.getElementById('score-correct').textContent = correctCount;
  document.getElementById('score-wrong').textContent = wrongCount;
  document.getElementById('score-empty').textContent = emptyCount;
  document.getElementById('score-pct').textContent = `%${percentage}`;

  document.getElementById('score-exam-title').textContent = APP_STATE.activeExamData.title;
}

function reviewExamAnswers() {
  document.getElementById('mock-scorecard-view').style.display = 'none';
  document.getElementById('mock-active-view').style.display = 'block';
  APP_STATE.currentQuestionIndex = 0;
  renderQuestionNavPalette();
  renderCurrentQuestion();
}

function exitExam() {
  clearInterval(APP_STATE.timerInterval);
  document.getElementById('mock-active-view').style.display = 'none';
  document.getElementById('mock-scorecard-view').style.display = 'none';
  document.getElementById('mock-selection-view').style.display = 'block';
  updateDashboardStats();
}

// FLASHCARDS MOTORU
function initFlashcards() {
  APP_STATE.filteredVocab = [...VOCAB_DATA];
  APP_STATE.currentVocabIndex = 0;
  renderFlashcard();
}

function filterVocab(category) {
  APP_STATE.vocabFilter = category;
  document.querySelectorAll('.vocab-filter-btn').forEach(btn => {
    btn.classList.toggle('btn-primary', btn.dataset.cat === category);
    btn.classList.toggle('btn-secondary', btn.dataset.cat !== category);
  });
  applyVocabFilters();
}

function searchVocab(query) {
  APP_STATE.vocabSearch = query.toLowerCase().trim();
  applyVocabFilters();
}

function applyVocabFilters() {
  APP_STATE.filteredVocab = VOCAB_DATA.filter(item => {
    const matchesCat = APP_STATE.vocabFilter === 'All' || item.category.toLowerCase().includes(APP_STATE.vocabFilter.toLowerCase());
    const matchesQuery = !APP_STATE.vocabSearch || 
      item.word.toLowerCase().includes(APP_STATE.vocabSearch) || 
      item.meaning.toLowerCase().includes(APP_STATE.vocabSearch);
    return matchesCat && matchesQuery;
  });

  APP_STATE.currentVocabIndex = 0;
  renderFlashcard();
}

function renderFlashcard() {
  const container = document.getElementById('flashcard-display');
  const countElem = document.getElementById('vocab-card-count');
  
  if (APP_STATE.filteredVocab.length === 0) {
    container.innerHTML = `
      <div class="card" style="text-align:center; padding:3rem;">
        <span style="font-size:2.5rem;">🔍</span>
        <h3 style="margin-top:1rem; color:var(--text-main);">Aramanıza uygun kelime bulunamadı.</h3>
        <p style="color:var(--text-muted); margin-top:0.5rem;">Farklı bir arama terimi deneyin veya kategori filtresini değiştirin.</p>
      </div>
    `;
    countElem.textContent = '0 / 0';
    return;
  }

  const v = APP_STATE.filteredVocab[APP_STATE.currentVocabIndex];
  const isLearned = Storage.getLearnedWords().includes(v.id);
  countElem.textContent = `${APP_STATE.currentVocabIndex + 1} / ${APP_STATE.filteredVocab.length}`;

  container.innerHTML = `
    <div class="flashcard-3d" id="flashcard-3d-card" onclick="flipFlashcard()">
      <!-- Ön Yüz (Front) -->
      <div class="flashcard-face flashcard-front">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="category-tag">${v.category}</span>
            <button class="audio-btn" onclick="event.stopPropagation(); playPronunciation('${v.word}')" title="Telaffuz Dinle">
              🔊
            </button>
          </div>
          <div class="flashcard-word" style="margin-top:1.5rem;">${v.word}</div>
          <span class="category-tag" style="background:#eff6ff; color:#1d4ed8; font-weight:700; margin-top:6px;">${v.pos}</span>
        </div>

        <div>
          <div class="flashcard-sentence">
            "${v.sentence}"
          </div>
          <div class="flip-hint">👆 Anlamını, Çevirisini ve Tüyoları Görmek İçin Tıklayın (3D Çevir)</div>
        </div>
      </div>

      <!-- Arka Yüz (Back) -->
      <div class="flashcard-face flashcard-back">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="category-tag" style="background:#dbeafe; color:#1e40af;">Türkçe Açıklama & Detay</span>
            <span style="font-weight:800; color:var(--ziraat-red); font-size:1.15rem;">${v.word}</span>
          </div>
          <div class="flashcard-meaning">${v.meaning}</div>
          <div class="flashcard-sentence-tr"><strong>Türkçe Çevirisi:</strong> ${v.sentenceTr}</div>
          <div style="margin-top:0.85rem; font-size:0.92rem; color:var(--text-muted);">
            <strong>Eş Anlamlılar:</strong> ${v.synonyms || '-'}
          </div>
        </div>

        <div>
          <div class="flashcard-tip">
            💡 <strong>Sınav Tüyosu:</strong> ${v.tip}
          </div>
          <div class="flip-hint">👆 Ön Yüze Dönmek İçin Tekrar Tıklayın</div>
        </div>
      </div>
    </div>
  `;

  // Öğrenildi butonu durumunu güncelle
  const learnBtn = document.getElementById('btn-vocab-learn');
  if (learnBtn) {
    learnBtn.innerHTML = isLearned ? '✓ Öğrenildi (İşareti Kaldır)' : '☆ Öğrendim Olarak İşaretle';
    learnBtn.className = isLearned ? 'btn btn-success' : 'btn btn-secondary';
  }
}

function flipFlashcard() {
  const card = document.getElementById('flashcard-3d-card');
  if (card) {
    card.classList.toggle('flipped');
  }
}

function prevFlashcard() {
  if (APP_STATE.currentVocabIndex > 0) {
    APP_STATE.currentVocabIndex--;
    renderFlashcard();
  }
}

function nextFlashcard() {
  if (APP_STATE.currentVocabIndex < APP_STATE.filteredVocab.length - 1) {
    APP_STATE.currentVocabIndex++;
    renderFlashcard();
  }
}

function toggleCurrentVocabLearned() {
  if (APP_STATE.filteredVocab.length === 0) return;
  const v = APP_STATE.filteredVocab[APP_STATE.currentVocabIndex];
  const isNowLearned = Storage.toggleLearnedWord(v.id);
  renderFlashcard();
  updateDashboardStats();
  if (isNowLearned) {
    showToast(`"${v.word}" öğrenildi olarak kaydedildi!`, '🌟');
  } else {
    showToast(`"${v.word}" tekrar listesine alındı.`, 'ℹ️');
  }
}

function showToast(message, icon = '✓') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span style="font-size:1.15rem;">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 3000);
}


function playPronunciation(word) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Tarayıcınız sesli okumayı desteklemiyor.');
  }
}

// TACTICS (REHBER)
function initTactics() {
  const container = document.getElementById('tactics-list');
  container.innerHTML = '';

  TACTICS_DATA.forEach((t, idx) => {
    const card = document.createElement('div');
    card.className = `tactic-card ${idx === 0 ? 'open' : ''}`;
    card.innerHTML = `
      <div class="tactic-header" onclick="this.parentElement.classList.toggle('open')">
        <div>
          <span style="font-weight:700; font-size:1.05rem; color:var(--primary);">${t.title}</span>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">${t.summary}</p>
        </div>
        <span class="tab-badge" style="background:#0f172a;">${t.badge}</span>
      </div>
      <div class="tactic-body">
        ${t.content}
      </div>
    `;
    container.appendChild(card);
  });
}

// KATEGORİ ALIŞTIRMALARI (CATEGORY DRILLS)
let currentDrillList = [];
let currentDrillIndex = 0;

function initCategoryDrills() {
  loadCategoryDrill('phrasal');
}

function loadCategoryDrill(categoryKey) {
  document.querySelectorAll('.cat-tab-btn').forEach(btn => {
    btn.classList.toggle('btn-primary', btn.dataset.drill === categoryKey);
    btn.classList.toggle('btn-secondary', btn.dataset.drill !== categoryKey);
  });

  currentDrillList = CATEGORY_DRILLS[categoryKey] || [];
  currentDrillIndex = 0;
  renderCategoryDrill();
}

function renderCategoryDrill() {
  const container = document.getElementById('category-drill-container');
  if (!currentDrillList || currentDrillList.length === 0) {
    container.innerHTML = '<p>Bu kategoride soru bulunamadı.</p>';
    return;
  }

  const q = currentDrillList[currentDrillIndex];
  let optionsHtml = '';
  ['A', 'B', 'C', 'D', 'E'].forEach(letter => {
    if (!q.options[letter]) return;
    optionsHtml += `
      <div class="option-item" id="drill-opt-${letter}" onclick="checkDrillAnswer('${letter}', '${q.answer}')">
        <span class="option-letter">${letter}</span>
        <span>${q.options[letter]}</span>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="question-card">
      <div class="question-header">
        <span style="font-weight:700;">Pratik Soru ${currentDrillIndex + 1} / ${currentDrillList.length}</span>
        <span class="category-tag">${q.category}</span>
      </div>
      <div class="question-text">${q.question}</div>
      <div class="options-list">${optionsHtml}</div>
      <div id="drill-explanation-container"></div>

      <div style="display:flex; justify-content:space-between; margin-top:1.5rem;">
        <button class="btn btn-secondary" onclick="prevDrill()" ${currentDrillIndex === 0 ? 'disabled' : ''}>⬅ Önceki</button>
        <button class="btn btn-primary" onclick="nextDrill()" ${currentDrillIndex === currentDrillList.length - 1 ? 'disabled' : ''}>Sonraki ➡</button>
      </div>
    </div>
  `;
}

function checkDrillAnswer(chosen, correct) {
  const isCorrect = chosen === correct;
  ['A', 'B', 'C', 'D', 'E'].forEach(letter => {
    const el = document.getElementById(`drill-opt-${letter}`);
    if (el) {
      el.onclick = null; // Tıklamayı kapat
      if (letter === correct) el.classList.add('correct');
      else if (letter === chosen) el.classList.add('wrong');
    }
  });

  if (isCorrect) {
    showToast('Tebrikler! Doğru cevap.', '🎉');
  } else {
    showToast('Yanlış cevap. Çözüm açıklamasını inceleyin.', '❌');
  }

  const q = currentDrillList[currentDrillIndex];
  const expBox = document.getElementById('drill-explanation-container');
  expBox.innerHTML = `
    <div class="explanation-box" style="margin-top:1.25rem;">
      <div class="explanation-title">💡 Soru Açıklaması: (Doğru Cevap: ${correct})</div>
      <p>${q.explanation}</p>
    </div>
  `;
}


function prevDrill() {
  if (currentDrillIndex > 0) {
    currentDrillIndex--;
    renderCategoryDrill();
  }
}

function nextDrill() {
  if (currentDrillIndex < currentDrillList.length - 1) {
    currentDrillIndex++;
    renderCategoryDrill();
  }
}



// KONU ANLATIMI (LESSONS) MOTORU
function initLessons() {
  if (typeof LESSONS_DATA === 'undefined' || LESSONS_DATA.length === 0) return;
  if (!APP_STATE.activeLessonId) {
    APP_STATE.activeLessonId = LESSONS_DATA[0].id;
  }
  renderLessonsNav();
  renderLessonDetail(APP_STATE.activeLessonId);
}

function renderLessonsNav() {
  const container = document.getElementById('lessons-nav-list');
  if (!container) return;

  const query = (APP_STATE.lessonSearchQuery || '').toLowerCase().trim();
  const filtered = LESSONS_DATA.filter(l => {
    return !query || 
      l.title.toLowerCase().includes(query) || 
      l.summary.toLowerCase().includes(query) || 
      l.content.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem; padding:0.5rem;">Aramanıza uygun konu bulunamadı.</p>';
    return;
  }

  container.innerHTML = filtered.map(l => {
    const isActive = l.id === APP_STATE.activeLessonId;
    return `
      <div class="lesson-nav-item ${isActive ? 'active' : ''}" onclick="selectLesson('${l.id}')">
        <span class="lesson-nav-title">${l.title}</span>
        <div class="lesson-nav-meta">
          <span>${l.category}</span>
          <span style="color:var(--ziraat-red); font-weight:700;">${l.badge}</span>
        </div>
      </div>
    `;
  }).join('');
}

function selectLesson(lessonId) {
  APP_STATE.activeLessonId = lessonId;
  renderLessonsNav();
  renderLessonDetail(lessonId);
  if (window.innerWidth <= 900) {
    const detailCard = document.getElementById('lesson-detail-card');
    if (detailCard) detailCard.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderLessonDetail(lessonId) {
  const container = document.getElementById('lesson-detail-card');
  if (!container) return;

  const lesson = LESSONS_DATA.find(l => l.id === lessonId);
  if (!lesson) {
    container.innerHTML = '<p>Ders seçilmedi.</p>';
    return;
  }

  container.innerHTML = `
    <div class="lesson-header-box">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
        <span class="category-tag">${lesson.category}</span>
        <span class="tab-badge" style="background:#0f172a;">${lesson.badge}</span>
      </div>
      <h2>${lesson.title}</h2>
      <p style="color:var(--text-muted); font-size:0.95rem;">${lesson.summary}</p>
    </div>
    <div class="lesson-body">
      ${lesson.content}
    </div>
  `;
}

function filterLessons(query) {
  APP_STATE.lessonSearchQuery = query;
  renderLessonsNav();
}

