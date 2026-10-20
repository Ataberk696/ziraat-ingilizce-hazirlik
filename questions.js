// Ziraat Bankası Uzman Yardımcılığı (Bilişim / Genel) İngilizce Soru Bankası
// Format: 40 Soru (İstanbul Üniversitesi AUZEF sınav standartlarına birebir uygun)
// Baraj: En az 24 Doğru (%60)

const EXAM_DATA = {
  // DENEME 1: STANDART ZİRAAT FORMATI (Dengeli Finans & Genel İngilizce)
  mock1: {
    title: "Deneme 1: Standart Ziraat Uzman Yrd. Formatı",
    description: "40 Soru - 45 Dakika. Klasik sınav dağılımı: 6 Kelime, 4 Phrasal Verb, 8 Gramer, 6 Bağlaç, 4 Cloze, 4 Cümle Tamamlama, 4 Çeviri, 4 Paragraf.",
    questions: [
      // 1-6 Vocabulary
      {
        id: "m1_q1",
        category: "Vocabulary",
        tag: "Finans & Bankacılık",
        question: "Due to unprecedented market volatility, the Central Bank was forced to intervene in order to maintain financial --------- and restore investor confidence.",
        options: {
          A: "stability",
          B: "fragility",
          C: "deficit",
          D: "expenditure",
          E: "inflation"
        },
        answer: "A",
        explanation: "Cümlede piyasadaki benzeri görülmemiş dalgalanma (volatility) nedeniyle Merkez Bankası'nın finansal 'istikrarı' (stability) korumak ve yatırımcı güvenini yeniden sağlamak için müdahale ettiği belirtiliyor. Diğer şıklar: fragility (kırılganlık), deficit (açık), expenditure (harcama/gider), inflation (enflasyon)."
      },
      {
        id: "m1_q2",
        category: "Vocabulary",
        tag: "Bilişim & Güvenlik",
        question: "Following the severe cyber attack, IT security specialists worked around the clock to patch the critical --------- in the core banking mainframe.",
        options: {
          A: "surplus",
          B: "vulnerability",
          C: "collateral",
          D: "dividend",
          E: "prosperity"
        },
        answer: "B",
        explanation: "'Patch the critical vulnerability' (kritik güvenlik açığını yamamak/kapatmak) yaygın bir bilişim ve bankacılık güvenliği kalıbıdır. Güvenlik açığı anlamına gelen 'vulnerability' doğru cevaptır. Diğerleri finans terimleridir: surplus (fazlalık/artı bakiye), collateral (teminat/ipotek), dividend (temettü/kâr payı), prosperity (refah)."
      },
      {
        id: "m1_q3",
        category: "Vocabulary",
        tag: "Bankacılık & Kredi",
        question: "Before extending a high-value commercial loan, the credit risk committee carefully evaluates whether the borrower has sufficient liquid assets to meet its short-term ---------.",
        options: {
          A: "exemptions",
          B: "obligations",
          C: "innovations",
          D: "discounts",
          E: "incentives"
        },
        answer: "B",
        explanation: "Bankacılıkta 'meet obligations' (yükümlülükleri / borçları yerine getirmek) standart bir terimdir. Kısa vadeli yükümlülükleri karşılamak için likit varlıklar incelenir. Diğer şıklar: exemptions (muafiyetler), innovations (yenilikler), discounts (indirimler), incentives (teşvikler)."
      },
      {
        id: "m1_q4",
        category: "Vocabulary",
        tag: "Akademik Kelime",
        question: "Commercial banks are required by regulatory authorities to allocate a substantial portion of their capital reserves to --------- potential credit losses during economic downturns.",
        options: {
          A: "accelerate",
          B: "mitigate",
          C: "provoke",
          D: "deteriorate",
          E: "prolong"
        },
        answer: "B",
        explanation: "'Mitigate' hafifletmek, azaltmak, etkisini düşürmek anlamına gelir. Cümlede potansiyel kredi zararlarını hafifletmek için sermaye rezervi ayrılmasından bahsedilmektedir ('mitigate risk / mitigate losses' sınavların en sevdiği kalıplardandır). Diğer şıklar: accelerate (hızlandırmak), provoke (kışkırtmak), deteriorate (kötüleşmek), prolong (uzatmak)."
      },
      {
        id: "m1_q5",
        category: "Vocabulary",
        tag: "Bilişim & Dönüşüm",
        question: "The newly adopted cloud infrastructure is expected to enhance operational efficiency and ensure --------- data synchronization across all branch terminals.",
        options: {
          A: "reluctant",
          B: "redundant",
          C: "seamless",
          D: "obsolete",
          E: "hostile"
        },
        answer: "C",
        explanation: "'Seamless' (kesintisiz, pürüzsüz, sorunsuz) sıfatı 'seamless data synchronization' (kesintisiz veri senkronizasyonu) tamlamasını oluşturur. Diğer şıklar: redundant (gereksiz, yedekli, fazlalık), obsolete (eski, çağdışı kalmış), reluctant (isteksiz), hostile (düşmanca)."
      },
      {
        id: "m1_q6",
        category: "Vocabulary",
        tag: "Finans & İktisat",
        question: "Despite aggressive monetary tightening, the country experienced an unprecedented --------- in consumer spending throughout the last fiscal quarter.",
        options: {
          A: "surge",
          B: "deprivation",
          C: "collapse",
          D: "rejection",
          E: "scarcity"
        },
        answer: "A",
        explanation: "'Despite' (rağmen) zıtlık bağlacı vardır. Parasal sıkılaşmaya rağmen tüketici harcamalarında 'surge' (ani artış, fırlama) yaşanmıştır. Diğer şıklar: deprivation (yoksunluk), collapse (çöküş), rejection (reddedilme), scarcity (kıtlık)."
      },

      // 7-10 Phrasal Verbs
      {
        id: "m1_q7",
        category: "Phrasal Verbs",
        tag: "Çıkmış Kalıp",
        question: "According to recent financial reports, online and mobile banking transactions now --------- more than 85 percent of all domestic payments in Turkey.",
        options: {
          A: "bring about",
          B: "account for",
          C: "look down on",
          D: "put up with",
          E: "run out of"
        },
        answer: "B",
        explanation: "Bankacılık sınavlarının en popüler phrasal verb'ü 'account for'dur. İki anlamı vardır: 1) Bir oranı/yüzdeyi oluşturmak, tekabül etmek (%85'ini oluşturmak), 2) Açıklamak. Doğru cevap B'dir. Bring about: sebep olmak; put up with: katlanmak; run out of: tükenmek."
      },
      {
        id: "m1_q8",
        category: "Phrasal Verbs",
        tag: "Bilişim & Proje",
        question: "The software engineering team had to --------- the scheduled system migration after discovering a severe database inconsistency during the dry run.",
        options: {
          A: "call off",
          B: "turn up",
          C: "figure out",
          D: "carry on",
          E: "make up"
        },
        answer: "A",
        explanation: "'Call off' iptal etmek demektir (cancel). Yazılım ekibi kritik bir tutarsızlık keşfedince planlanan geçişi iptal etmek zorunda kalmıştır. Diğer şıklar: turn up (çıkagelmek, sesini açmak), figure out (çözmek/anlamak), carry on (devam etmek), make up (uydurmak, barışmak, telafi etmek)."
      },
      {
        id: "m1_q9",
        category: "Phrasal Verbs",
        tag: "Finans & Regülasyon",
        question: "Financial auditors were instructed to --------- the suspicious wire transfers initiated from overseas shell companies.",
        options: {
          A: "look into",
          B: "give in",
          C: "take after",
          D: "get away with",
          E: "break out"
        },
        answer: "A",
        explanation: "'Look into' araştırmak, incelemek (investigate) demektir. Müfettişler şüpheli para transferlerini incelemekle görevlendirilmiştir. Give in (teslim olmak), take after (benzemek), get away with (yanına kâr kalmak), break out (patlak vermek)."
      },
      {
        id: "m1_q10",
        category: "Phrasal Verbs",
        tag: "Gelişim & Neden",
        question: "Economic analysts argue that the sudden drop in export revenues largely --------- the appreciation of the domestic currency.",
        options: {
          A: "relies on",
          B: "stems from",
          C: "counts on",
          D: "brings up",
          E: "gives up"
        },
        answer: "B",
        explanation: "'Stem from' -den kaynaklanmak, ileri gelmek demektir (originate from). İhracat gelirlerindeki düşüşün yerel para biriminin değer kazanmasından kaynaklandığı belirtilmiştir. Rely on (güvenmek/bağlı olmak), bring up (yetiştirmek, gündeme getirmek), give up (bırakmak)."
      },

      // 11-18 Grammar & Structures
      {
        id: "m1_q11",
        category: "Grammar",
        tag: "Tenses & Time",
        question: "By the time the new central banking regulation --------- into effect next January, our IT department --------- the entire core compliance framework.",
        options: {
          A: "came / updated",
          B: "comes / will have updated",
          C: "will come / has updated",
          D: "has come / had updated",
          E: "came / would update"
        },
        answer: "B",
        explanation: "'By the time + Simple Present (comes), Future Perfect (will have updated)' zaman kuralıdır. Gelecekte bir zamana kadar eylemin tamamlanmış olacağını ifade eder ('By the time ... next January' geleceğe işaret eder)."
      },
      {
        id: "m1_q12",
        category: "Grammar",
        tag: "Conditionals",
        question: "If the risk management unit --------- the unusual trading pattern earlier, the bank --------- such colossal financial losses last week.",
        options: {
          A: "noticed / won't suffer",
          B: "had noticed / would not have suffered",
          C: "notices / would not suffer",
          D: "has noticed / had not suffered",
          E: "would notice / was not suffering"
        },
        answer: "B",
        explanation: "Geçmişteki gerçekleşmemiş bir koşulu anlatan Type 3 Conditional yapısıdır: If + Past Perfect (had noticed), would/could/might + have V3 (would not have suffered). 'last week' geçmişe işaret eder."
      },
      {
        id: "m1_q13",
        category: "Grammar",
        tag: "Modals & Deduction",
        question: "The server crash cannot have been caused by an external DDoS attack; the logs indicate that an unauthorized internal script --------- by an inexperienced administrator.",
        options: {
          A: "must have been executed",
          B: "should execute",
          C: "can execute",
          D: "would have executed",
          E: "might execute"
        },
        answer: "A",
        explanation: "Geçmişe yönelik güçlü bir çıkarım (deduction) yapılmaktadır: 'must have been executed' (çalıştırılmış olmalı). Günlük kayıtları tecrübesiz bir yönetici tarafından betiğin çalıştırıldığını gösteriyor (edilgen + geçmiş çıkarım)."
      },
      {
        id: "m1_q14",
        category: "Grammar",
        tag: "Relative Clauses",
        question: "Ziraat Bank, --------- established in 1863 to support agricultural development, remains one of the largest public lending institutions in the region.",
        options: {
          A: "that was",
          B: "which was",
          C: "whom was",
          D: "whose was",
          E: "what was"
        },
        answer: "B",
        explanation: "İki virgül arasında ekstra bilgi veren Non-defining Relative Clause yapısında nesneler ve kurumlar için 'which' kullanılır. Non-defining cümlelerde 'that' ASLA kullanılamaz! Bu nedenle A seçeneği kesinlikle elenir."
      },
      {
        id: "m1_q15",
        category: "Grammar",
        tag: "Participle Reductions",
        question: "--------- the comprehensive penetration testing, the cyber defense team delivered their assessment report to the board.",
        options: {
          A: "Having completed",
          B: "To be completed",
          C: "Being completed",
          D: "Completed",
          E: "To complete"
        },
        answer: "A",
        explanation: "Kısaltma (reduction) sorusudur. Bir eylem diğerinden daha önce tamamlanıp bittiğinde aktif kısaltma olarak 'Having + V3' (Having completed) kullanılır: 'Kapsamlı sızma testini tamamladıktan sonra, siber savunma ekibi raporu yönetim kuruluna sundu'."
      },
      {
        id: "m1_q16",
        category: "Grammar",
        tag: "Gerund & Infinitive",
        question: "The board of directors considers --------- international sovereign bonds, but they avoid --------- any premature public statements.",
        options: {
          A: "to issue / to make",
          B: "issuing / making",
          C: "to issue / making",
          D: "issuing / to make",
          E: "issue / make"
        },
        answer: "B",
        explanation: "'Consider' fiilinden sonra gelen fiil Gerund (-ing) alır (considers issuing). 'Avoid' fiilinden sonra gelen fiil de her zaman Gerund (-ing) alır (avoid making). İki taraf da -ing olmalıdır."
      },
      {
        id: "m1_q17",
        category: "Grammar",
        tag: "Inversion (Devrik Cümle)",
        question: "Rarely --------- such rapid technological transformation in the banking sector as we have witnessed over the last decade.",
        options: {
          A: "we have seen",
          B: "have we seen",
          C: "we saw",
          D: "did we saw",
          E: "we had seen"
        },
        answer: "B",
        explanation: "Cümle başında 'Rarely, Seldom, Hardly, Scarcely, Never' gibi olumsuzluk veya kısıtlama bildiren zarflar yer aldığında cümle devrik (inverted) yapılır. Soru formunda yardımcı fiil özneden önce gelir: 'Rarely have we seen...'."
      },
      {
        id: "m1_q18",
        category: "Grammar",
        tag: "Passives & Causatives",
        question: "All high-frequency trading algorithms must --------- by the supervisory committee before they are deployed into live production environments.",
        options: {
          A: "validate",
          B: "be validated",
          C: "have validated",
          D: "been validating",
          E: "to be validated"
        },
        answer: "B",
        explanation: "Özne 'All high-frequency trading algorithms' cansızdır ve eylemi yapamaz; eyleme maruz kalır. Modal sonrası pasif yapı 'must + be + V3' (must be validated) şeklindedir."
      },

      // 19-24 Conjunctions & Transitions
      {
        id: "m1_q19",
        category: "Conjunctions",
        tag: "Zıtlık Bağlacı",
        question: "--------- traditional bank branches are scaling down their physical presence, digital customer engagement has reached an all-time peak.",
        options: {
          A: "While",
          B: "Because",
          C: "Unless",
          D: "In order that",
          E: "Therefore"
        },
        answer: "A",
        explanation: "'While / Whereas' zıtlık (contrast) bildirir ('-e karşın / -ken'). Fiziksel şubeler küçülürken, dijital müşteri etkileşiminin zirve yapması durumu zıtlığı gösterir."
      },
      {
        id: "m1_q20",
        category: "Conjunctions",
        tag: "Sebep & Sonuç",
        question: "The merger between the two fintech giants was delayed for six months --------- regulatory concerns regarding monopolistic market dominance.",
        options: {
          A: "even though",
          B: "owing to",
          C: "in contrast to",
          D: "as if",
          E: "so that"
        },
        answer: "B",
        explanation: "Boşluktan sonra tam bir cümle değil, bir isim tamlaması gelmiştir ('regulatory concerns...'). 'Owing to' / 'Due to' / 'Because of' arkasından isim öbeği alır ve sebep bildirir (-den dolayı). Even though arkasından tam cümle ister."
      },
      {
        id: "m1_q21",
        category: "Conjunctions",
        tag: "Zıtlık Bağlacı",
        question: "The global economy faced tremendous inflationary pressure; ---------, several major emerging markets managed to achieve moderate GDP growth.",
        options: {
          A: "consequently",
          B: "nevertheless",
          C: "furthermore",
          D: "otherwise",
          E: "namely"
        },
        answer: "B",
        explanation: "Noktalı virgül ve virgül arasında kullanılan geçiş zarfıdır (; nevertheless,). İlk cümlede enflasyon baskısı varken, ikinci cümlede büyüme kaydedildiği belirtilerek zıtlık ifade edilmiştir. Consequently (bu nedenle), furthermore (dahası), otherwise (aksi takdirde)."
      },
      {
        id: "m1_q22",
        category: "Conjunctions",
        tag: "Şart Bağlacı",
        question: "The bank will continue to disburse low-interest agricultural loans --------- the borrowers comply strictly with the environmental sustainability guidelines.",
        options: {
          A: "provided that",
          B: "although",
          C: "in spite of",
          D: "lest",
          E: "even if"
        },
        answer: "A",
        explanation: "'Provided that / Providing that / As long as' şart bildirir (-mesi koşuluyla, şartıyla). Çiftçilerin çevre kılavuzlarına uyması şartıyla kredilerin dağıtılmaya devam edeceği ifade edilmektedir."
      },
      {
        id: "m1_q23",
        category: "Conjunctions",
        tag: "Amaç Bağlacı",
        question: "Commercial lenders incorporate biometric authentication mechanisms --------- fraudulent identity theft can be completely prevented during online transactions.",
        options: {
          A: "in case",
          B: "so that",
          C: "despite",
          D: "unless",
          E: "whereas"
        },
        answer: "B",
        explanation: "'So that' (-sın diye, amacıyla) amaç bağlacıdır ve arkasından genellikle can/could/will/would içeren bir yan cümle alır. Biyometrik kimlik doğrulama, kimlik hırsızlığı önlenebilsin diye entegre edilmektedir."
      },
      {
        id: "m1_q24",
        category: "Conjunctions",
        tag: "Olumsuz Şart",
        question: "A bank cannot maintain its credit rating in international markets --------- it demonstrates transparent accounting and resilient risk buffers.",
        options: {
          A: "unless",
          B: "since",
          C: "if only",
          D: "because",
          E: "moreover"
        },
        answer: "A",
        explanation: "'Unless' = 'if not' (-medikçe / -mezse). Şeffaf muhasebe ve dirençli risk tamponları sergilemedikçe, bir banka uluslararası piyasalarda kredi notunu koruyamaz."
      },

      // 25-28 Cloze Test
      {
        id: "m1_q25",
        category: "Cloze Test",
        tag: "Cloze 1/4",
        passage: "Artificial Intelligence is rapidly revolutionizing the modern financial landscape. Today, predictive machine learning models are widely utilized to detect fraudulent card activities in real time. (25) --------- by massive data streams from interconnected banking systems, these algorithms can evaluate a customer's transaction history in milliseconds. (26) --------- flagging anomalies with high precision, they significantly reduce false alarms. However, financial institutions must (27) --------- adhere to ethical standards, as biased datasets could lead to discrimination against certain loan applicants. Consequently, regulators are preparing strict frameworks to ensure that AI deployments remain transparent and (28) --------- to audit.",
        question: "Choose the best option for blank (25):",
        options: {
          A: "Powering",
          B: "Powered",
          C: "To power",
          D: "Having powered",
          E: "Power"
        },
        answer: "B",
        explanation: "Pasif kısaltma (Passive Participle) gerekir: '(Being) Powered by massive data streams...' (Devasa veri akışlarıyla desteklenen/güçlendirilen bu algoritmalar...). By ile eylemi yapan belirtildiğinden V3 pasif kısaltması doğrudur."
      },
      {
        id: "m1_q26",
        category: "Cloze Test",
        tag: "Cloze 2/4",
        question: "Choose the best option for blank (26) (refer to passage):",
        options: {
          A: "Instead of",
          B: "In addition to",
          C: "In contrast to",
          D: "Regardless of",
          E: "On behalf of"
        },
        answer: "B",
        explanation: "'In addition to flagging anomalies...' (-e ek olarak). Algoritmalar yüksek hassasiyetle anomalileri işaretlemeye ek olarak yanlış alarmları da ciddi şekilde azaltır (paralel iki olumlu fayda)."
      },
      {
        id: "m1_q27",
        category: "Cloze Test",
        tag: "Cloze 3/4",
        question: "Choose the best option for blank (27) (refer to passage):",
        options: {
          A: "superficially",
          B: "rigorously",
          C: "reluctantly",
          D: "negligently",
          E: "recklessly"
        },
        answer: "B",
        explanation: "'Rigorously adhere to' (sıkı bir şekilde / titizlikle uymak). Finans kurumları etik standartlara titizlikle uymalıdır. Diğer şıklar: superficially (yüzeysel olarak), reluctantly (isteksizce), negligently (ihmalkarca), recklessly (dikkatsizce)."
      },
      {
        id: "m1_q28",
        category: "Cloze Test",
        tag: "Cloze 4/4",
        question: "Choose the best option for blank (28) (refer to passage):",
        options: {
          A: "susceptible",
          B: "open",
          C: "immune",
          D: "indifferent",
          E: "resistant"
        },
        answer: "B",
        explanation: "'Open to audit' (denetime açık). AI sistemlerinin şeffaf ve denetime açık olmasını sağlamak için düzenlemeler hazırlanıyor. Susceptible to: savunmasız, immune to: bağışık."
      },

      // 29-32 Sentence Completion
      {
        id: "m1_q29",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "Although blockchain architecture provides unprecedented decentralization and cryptographic immutability, --------- .",
        options: {
          A: "it completely eliminates the need for software updates and server maintenance",
          B: "it faces severe throughput limitations when handling millions of concurrent micro-transactions",
          C: "central banks have unanimously abandoned all research into digital fiat currencies",
          D: "every commercial bank in Europe had adopted it without any technical resistance",
          E: "it will instantly solve all macroeconomic problems related to inflation"
        },
        answer: "B",
        explanation: "'Although' (rağmen) ile başlayan yan cümle olumlu özellikler (ademi merkeziyetçilik, şifreli değişmezlik) saymaktadır. Temel cümlenin bir zorluk, sınırlılık veya tezat içermesi gerekir: 'milyonlarca eşzamanlı mikro işlemi yürütürken ciddi iş çıkarma (throughput) kısıtlamalarıyla karşılaşmaktadır'."
      },
      {
        id: "m1_q30",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "--------- because automated algorithmic models triggered massive stop-loss orders within fractions of a second.",
        options: {
          A: "The stock exchange suspended trading after the sudden flash crash",
          B: "Investors enjoyed steady and predictable dividend returns throughout the decade",
          C: "The regulatory board decided to loosen capital reserve standards",
          D: "Branch managers welcomed the expansion of customer credit lines",
          E: "Commercial interest rates have plummeted to historic lows"
        },
        answer: "A",
        explanation: "Sebep cümlesinde otomatik algoritmik modellerin saniyeden kısa sürede devasa zarar durdurma (stop-loss) emirlerini tetiklediği söyleniyor. Bu durumun mantıklı sonucu A şıkkıdır: 'Borsa, yaşanan ani ani çöküşün (flash crash) ardından işlemleri askıya aldı'."
      },
      {
        id: "m1_q31",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "In order to prevent unauthorized access to sensitive financial records, --------- .",
        options: {
          A: "commercial banks are mandated to enforce multi-factor authentication across all cloud services",
          B: "customers rarely check their monthly account summaries and credit scores",
          C: "the interest rate on personal consumer loans has been revised upwards",
          D: "international trade agreements were renegotiated between member states",
          E: "software developers abandoned the use of advanced cryptography protocols"
        },
        answer: "A",
        explanation: "'Hassas finansal kayıtlara yetkisiz erişimi engellemek amacıyla...' Bu amaca hizmet eden eylem A seçeneğidir: 'ticari bankaların tüm bulut servislerinde çok faktörlü kimlik doğrulamayı (MFA) zorunlu kılması gerekmektedir'."
      },
      {
        id: "m1_q32",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "Unless public and private financial institutions invest heavily in cyber defense, --------- .",
        options: {
          A: "they would have enjoyed total protection against zero-day exploits",
          B: "they will remain vulnerable to sophisticated ransomware and data extortion networks",
          C: "national payment infrastructures were entirely rebuilt from scratch",
          D: "cyber criminals had ceased all malicious phishing operations",
          E: "their stock value will automatically double in the next fiscal quarter"
        },
        answer: "B",
        explanation: "'Unless' (eğer yatırım yapmazlarsa) Type 1 koşul cümlesidir. Unless + Present (invest), Main Clause: Future (will remain vulnerable). Kurumlar fidye yazılımlarına ve veri şantajı ağlarına karşı savunmasız kalacaktır."
      },

      // 33-36 Translation
      {
        id: "m1_q33",
        category: "Translation",
        tag: "EN -> TR",
        question: "Ziraat Bank has accelerated its digital transformation investments so that rural agricultural producers can easily access micro-credit facilities via mobile applications.",
        options: {
          A: "Kırsal alandaki tarım üreticileri mobil uygulamalar üzerinden mikro kredi olanaklarına kolayca erişebilsin diye Ziraat Bankası dijital dönüşüm yatırımlarını hızlandırmıştır.",
          B: "Ziraat Bankası kırsal tarım üreticilerine mikro kredi vermek için dijital dönüşüm yatırımlarını tamamlamıştır.",
          C: "Mobil uygulamalar üzerinden tarım kredilerine erişen kırsal üreticiler, Ziraat Bankası'nın dijital dönüşüm yatırımlarını artırmasını sağlamıştır.",
          D: "Ziraat Bankası'nın dijital dönüşüm yatırımlarını hızlandırmasıyla birlikte tarım üreticileri mikro kredilere yalnızca mobil uygulamalarla erişebilmektedir.",
          E: "Kırsal kesimdeki üreticilerin mikro kredi olanaklarına erişebilmesi, Ziraat Bankası'nın dijital yatırımlarını tamamlamasına bağlıdır."
        },
        answer: "A",
        explanation: "Çeviri taktiği: Temel cümle yüklemi 'has accelerated' (hızlandırmıştır). 'so that' (...-ebilsin diye / amacıyla). 'rural agricultural producers' (kırsal alandaki tarım üreticileri). Birebir tam ve eksiksiz çeviri A şıkkıdır."
      },
      {
        id: "m1_q34",
        category: "Translation",
        tag: "EN -> TR",
        question: "Financial analysts emphasize that continuous inflation erodes consumer purchasing power, thereby dampening overall economic recovery.",
        options: {
          A: "Finansal analistler, sürekli enflasyonun tüketicinin satın alma gücünü aşındırdığını, böylece genel ekonomik toparlanmayı yavaşlattığını vurgulamaktadır.",
          B: "Genel ekonomik toparlanmanın yavaşlaması, finansal analistlere göre enflasyonun satın alma gücünü düşürmesinden kaynaklanır.",
          C: "Tüketicinin satın alma gücünü eriten enflasyon, finansal analistlerin vurguladığı üzere toparlanmayı imkansız kılmaktadır.",
          D: "Finansal analistlerin de belirttiği gibi, ekonomik toparlanma ancak satın alma gücündeki aşınmanın önlenmesiyle gerçekleşir.",
          E: "Sürekli enflasyon ve satın alma gücündeki düşüş, analistlere göre ekonomik toparlanmanın önündeki en büyük engeldir."
        },
        answer: "A",
        explanation: "Yüklem 'emphasize' (vurgulamaktadır). Yan cümle: 'continuous inflation erodes...' (sürekli enflasyonun tüketicinin satın alma gücünü aşındırdığını). 'thereby dampening' (böylece genel ekonomik toparlanmayı yavaşlattığını). Doğru cevap A'dır."
      },
      {
        id: "m1_q35",
        category: "Translation",
        tag: "TR -> EN",
        question: "Merkez bankalarının faiz artırım kararları, yalnızca enflasyonu dizginlemeyi değil, aynı zamanda ulusal para biriminin değerini korumayı da amaçlamaktadır.",
        options: {
          A: "Central banks' decisions to raise interest rates aim not only to curb inflation but also to protect the value of the national currency.",
          B: "Central banks increase interest rates so that they can stop inflation and restore national currency reserves.",
          C: "The interest rate policies of central banks are designed exclusively to protect the domestic currency against inflation.",
          D: "While raising interest rates curbs inflation, central banks also strive to appreciate foreign exchange values.",
          E: "To protect the national currency, central banks are forced to raise interest rates despite high inflation."
        },
        answer: "A",
        explanation: "Türkçe cümlede 'yalnızca ... değil, aynı zamanda ... da' (not only ... but also) kalıbı vardır. Özne: 'Merkez bankalarının faiz artırım kararları' (Central banks' decisions to raise interest rates). Yüklem: 'amaçlamaktadır' (aim). Doğru yapı A'dadır."
      },
      {
        id: "m1_q36",
        category: "Translation",
        tag: "TR -> EN",
        question: "Bulut bilişim mimarisi, bankalara büyük miktardaki verileri daha düşük maliyetle güvenli bir şekilde işleme ve depolama olanağı tanır.",
        options: {
          A: "Cloud computing architecture allows banks to process and store vast amounts of data securely at a lower cost.",
          B: "Banks use cloud computing infrastructure because processing large data has become increasingly expensive.",
          C: "Storing large amounts of financial data in the cloud provides banks with high security despite moderate costs.",
          D: "Cloud architecture enables banks to eliminate all infrastructure costs when processing customer transactions.",
          E: "Processing and storing sensitive data securely requires banks to migrate entirely to cloud systems."
        },
        answer: "A",
        explanation: "Özne: 'Bulut bilişim mimarisi' (Cloud computing architecture). Yüklem: 'olanağı tanır / imkan verir' (allows / enables). 'process and store vast amounts of data securely at a lower cost' (büyük miktardaki verileri daha düşük maliyetle güvenli bir şekilde işleme ve depolama). Tam karşılık A'dır."
      },

      // 37-40 Reading Comprehension
      {
        id: "m1_q37",
        category: "Reading",
        tag: "Paragraf 1/4",
        passage: "Central Bank Digital Currencies (CBDCs) represent one of the most transformative innovations in the history of sovereign monetary systems. Unlike decentralized cryptocurrencies such as Bitcoin, which suffer from notorious price volatility and lack official legal backing, CBDCs are digital representations of a nation's fiat currency issued directly by the monetary authority. Central banks are exploring CBDCs primarily to modernize national payment infrastructures, enhance the speed and cost-effectiveness of cross-border settlements, and foster financial inclusion for unbanked populations. However, widespread implementation introduces substantial technical and macroeconomic dilemmas. Chief among these is cybersecurity: a centralized ledger holding nationwide retail transactions would become a prime target for state-sponsored cyber warfare. Furthermore, commercial banking executives express deep apprehension that during economic panics, panicking depositors might instantly transfer their savings from commercial bank deposits into risk-free central bank accounts, thereby precipitating a systemic liquidity crisis.",
        question: "According to the passage, what is a fundamental difference between CBDCs and cryptocurrencies like Bitcoin?",
        options: {
          A: "CBDCs are exclusively used for cross-border black market settlements.",
          B: "Cryptocurrencies are backed directly by sovereign monetary authorities.",
          C: "CBDCs are official digital fiat currencies with legal backing and without extreme price volatility.",
          D: "Cryptocurrencies do not rely on cryptographic technology for transaction verification.",
          E: "CBDCs have already completely eliminated physical cash in every developing country."
        },
        answer: "C",
        explanation: "Metnin 2. cümlesinde açıkça belirtilmektedir: 'Unlike decentralized cryptocurrencies... which suffer from notorious price volatility and lack official legal backing, CBDCs are digital representations of a nation's fiat currency issued directly by the monetary authority.' Yani CBDC'ler resmi ve yasal desteğe sahip dijital paralardır."
      },
      {
        id: "m1_q38",
        category: "Reading",
        tag: "Paragraf 2/4",
        question: "Which of the following is NOT mentioned in the passage as an objective for central banks exploring CBDCs?",
        options: {
          A: "Modernizing the national payment rails and infrastructure.",
          B: "Accelerating the settlement speed of cross-border transactions.",
          C: "Encouraging financial inclusion among unbanked demographics.",
          D: "Lowering transaction costs for cross-border remittances.",
          E: "Replacing the stock exchange with automated smart contracts."
        },
        answer: "E",
        explanation: "Metinde CBDC'lerin borsayı akıllı sözleşmelerle değiştireceğinden hiç bahsedilmemiştir. A, B, C ve D şıkları metinde 'modernize national payment infrastructures, enhance the speed and cost-effectiveness of cross-border settlements, and foster financial inclusion' şeklinde birebir geçmektedir."
      },
      {
        id: "m1_q39",
        category: "Reading",
        tag: "Paragraf 3/4",
        question: "Commercial bank executives are particularly concerned about CBDCs because --------- .",
        options: {
          A: "it would force them to hire more branch tellers and physical personnel",
          B: "depositors might rapidly shift funds into central bank accounts during a panic, sparking a liquidity crisis",
          C: "CBDCs cannot be processed on modern cloud infrastructure",
          D: "it will permanently prevent central banks from raising interest rates",
          E: "foreign investors would completely boycott domestic financial markets"
        },
        answer: "B",
        explanation: "Metnin son cümlesine bakınız: 'commercial banking executives express deep apprehension that during economic panics, panicking depositors might instantly transfer their savings from commercial bank deposits into risk-free central bank accounts, thereby precipitating a systemic liquidity crisis.'"
      },
      {
        id: "m1_q40",
        category: "Reading",
        tag: "Paragraf 4/4",
        question: "The word 'apprehension' in the final sentence is closest in meaning to --------- .",
        options: {
          A: "enthusiasm",
          B: "anxiety",
          C: "indifference",
          D: "satisfaction",
          E: "clarity"
        },
        answer: "B",
        explanation: "'Apprehension' endişe, kaygı, tedirginlik (anxiety / worry / concern) anlamına gelir. Ticari banka yöneticileri derin bir kaygı (deep apprehension) duymaktadırlar. Diğer şıklar: enthusiasm (coşku), indifference (kayıtsızlık), satisfaction (memnuniyet), clarity (açıklık)."
      }
    ]
  },

  // DENEME 2: BİLİŞİM, YAPAY ZEKA VE SİBER GÜVENLİK ODAKLI ZİRAAT FORMATI
  mock2: {
    title: "Deneme 2: Bilişim & FinTech Odaklı Ziraat Sınavı",
    description: "40 Soru - 45 Dakika. Mühendislik ve Bilişim adayları için özel: Algoritmalar, Siber Güvenlik, Veri Tabanı Mimarisi, FinTech ve Bankacılık Hukuku bağlamlı sorular.",
    questions: [
      {
        id: "m2_q1",
        category: "Vocabulary",
        tag: "Bilişim & Finans",
        question: "To prevent unauthorized financial tampering, all transaction payloads must be encrypted using a --------- cryptographic standard.",
        options: {
          A: "robust",
          B: "fragile",
          C: "negligible",
          D: "tentative",
          E: "fraudulent"
        },
        answer: "A",
        explanation: "'Robust' (güçlü, sağlam, dirençli) kriptografik standartları tanımlamak için kullanılan en temel sıfattır ('robust security / robust cryptographic standard'). Fragile (kırılgan), negligible (ihmal edilebilir), tentative (geçici/kesin olmayan)."
      },
      {
        id: "m2_q2",
        category: "Vocabulary",
        tag: "Bilişim & Mimari",
        question: "The database architecture was designed with multiple geographic --------- to guarantee zero downtime in the event of an unexpected regional power outage.",
        options: {
          A: "redundancies",
          B: "sanctions",
          C: "liabilities",
          D: "deficits",
          E: "bankruptcies"
        },
        answer: "A",
        explanation: "Bilişimde 'redundancy' yedeklilik (sistem çökmesin diye aynı verinin/bileşenin kopyasını bulundurma) demektir. 'Geographic redundancies' coğrafi yedeklilik anlamında kullanılır. Sanctions (yaptırımlar), liabilities (yükümlülükler/borçlar)."
      },
      {
        id: "m2_q3",
        category: "Vocabulary",
        tag: "Bankacılık & Finans",
        question: "Due to high inflation, the bond yields suffered a marked decline, prompting institutional investors to --------- capital toward commodities.",
        options: {
          A: "divert",
          B: "deter",
          C: "condemn",
          D: "suppress",
          E: "postpone"
        },
        answer: "A",
        explanation: "'Divert capital' sermayeyi başka bir yöne aktarmak, yönlendirmek demektir. Deter (caydırıcı olmak), condemn (kınamak/mahkum etmek), suppress (bastırmak), postpone (ertelemek)."
      },
      {
        id: "m2_q4",
        category: "Vocabulary",
        tag: "Bilişim & Analitik",
        question: "The automated fraud detection software scans millions of records to uncover subtle --------- that human auditors might easily overlook.",
        options: {
          A: "anomalies",
          B: "endorsements",
          C: "settlements",
          D: "revenues",
          E: "dividends"
        },
        answer: "A",
        explanation: "'Anomalies' (anormallikler, sapmalar, olağandışı durumlar) fraud (dolandırıcılık) tespit algoritmalarının aradığı temel unsurdur. Endorsements (onaylar/cirolar), settlements (mutabakatlar/uzlaşmalar), revenues (gelirler)."
      },
      {
        id: "m2_q5",
        category: "Vocabulary",
        tag: "Finansal Terim",
        question: "When interest rates fluctuate unpredictably, corporate treasurers use derivative contracts to --------- against foreign exchange risk.",
        options: {
          A: "hedge",
          B: "gamble",
          C: "inflate",
          D: "default",
          E: "demolish"
        },
        answer: "A",
        explanation: "Finansın en temel terimlerinden biri 'hedge against risk'tir (riskten korunmak / riskten korunma işlemi yapmak). Gamble (kumar oynamak), default (temerrüde düşmek/borcunu ödeyememek)."
      },
      {
        id: "m2_q6",
        category: "Vocabulary",
        tag: "Bankacılık Denetim",
        question: "The regulatory inspection revealed a significant --------- between the internal general ledger balance and the physical cash in vault reserves.",
        options: {
          A: "discrepancy",
          B: "affinity",
          C: "harmony",
          D: "incentive",
          E: "collaboration"
        },
        answer: "A",
        explanation: "'Discrepancy' tutarsızlık, uyumsuzluk, fark anlamına gelir. Defter bakiyesi ile kasadaki nakit arasındaki uyumsuzluktan bahsedilmektedir. Affinity (yakınlık/benzerlik), harmony (uyum), incentive (teşvik)."
      },
      {
        id: "m2_q7",
        category: "Phrasal Verbs",
        tag: "Phrasal Verb",
        question: "The IT security operations center managed to --------- the zero-day ransomware attack before it could spread across the internal enterprise subnet.",
        options: {
          A: "fend off",
          B: "back out of",
          C: "look forward to",
          D: "give away",
          E: "stand for"
        },
        answer: "A",
        explanation: "'Fend off' savuşturmak, püskürtmek, defetmek anlamına gelir. Siber güvenlik ekibi saldırıyı diğer alt ağlara yayılmadan savuşturmuştur. Back out of (sözünden dönmek/vazgeçmek), stand for (temsil etmek/anlamına gelmek)."
      },
      {
        id: "m2_q8",
        category: "Phrasal Verbs",
        tag: "Phrasal Verb",
        question: "Legacy core banking mainframes are gradually being --------- in favor of agile, cloud-native microservices.",
        options: {
          A: "phased out",
          B: "taken up",
          C: "brought about",
          D: "held back",
          E: "put through"
        },
        answer: "A",
        explanation: "'Phase out' kademeli olarak kullanımdan kaldırmak, tedricen sonlandırmak demektir. Eski ana bilgisayarların (legacy mainframes) yerini bulut servislerine bırakması anlatılıyor. Taken up (başlanmak/üstlenilmek), put through (bağlamak/yaşatmak)."
      },
      {
        id: "m2_q9",
        category: "Phrasal Verbs",
        tag: "Phrasal Verb",
        question: "The business development team came up with an ingenious plan to --------- the loss of traditional retail banking foot traffic.",
        options: {
          A: "make up for",
          B: "look down upon",
          C: "fall out with",
          D: "do away with",
          E: "put up with"
        },
        answer: "A",
        explanation: "'Make up for' telafi etmek (compensate for) demektir. Fiziksel şube trafiğindeki kaybı telafi etmek için plan geliştirilmiştir. Do away with (yürürlükten kaldırmak), fall out with (arası bozulmak)."
      },
      {
        id: "m2_q10",
        category: "Phrasal Verbs",
        tag: "Phrasal Verb",
        question: "When applying for large syndicated loans, prospective corporate borrowers must be prepared to --------- rigorous financial audits.",
        options: {
          A: "go through",
          B: "break into",
          C: "drop out of",
          D: "look back on",
          E: "give up on"
        },
        answer: "A",
        explanation: "'Go through' geçirmek, maruz kalmak, tecrübe etmek (undergo / endure) demektir. 'Go through an audit' denetimden geçmek anlamına gelir. Break into (zorla girmek)."
      },
      {
        id: "m2_q11",
        category: "Grammar",
        tag: "Gramer - Tense",
        question: "Over the past five years, the volume of automated algorithmic transactions on Istanbul's financial exchange --------- exponentially.",
        options: {
          A: "has increased",
          B: "had increased",
          C: "will increase",
          D: "increases",
          E: "is increasing"
        },
        answer: "A",
        explanation: "'Over the past / last five years' (Son beş yıldır) zaman zarfı Present Perfect Tense (has increased) gerektirir. Süreç geçmişte başlayıp bugüne kadar devam etmiştir."
      },
      {
        id: "m2_q12",
        category: "Grammar",
        tag: "Gramer - Relative Clause",
        question: "The software architect, --------- innovative distributed ledger framework was patented last month, will deliver the keynote address at the banking summit.",
        options: {
          A: "whose",
          B: "whom",
          C: "which",
          D: "where",
          E: "that"
        },
        answer: "A",
        explanation: "Sahiplik bildiren Relative Pronoun 'whose' (framework'ün kime ait olduğunu belirtir: 'yenilikçi dağıtık defter çerçevesi geçen ay patentlenen yazılım mimarı'). Boşluktan sonra isim (innovative distributed ledger framework) geldiğinde 'whose' kullanılır."
      },
      {
        id: "m2_q13",
        category: "Grammar",
        tag: "Gramer - Inversion",
        question: "Under no circumstances --------- customer biometric data to third-party commercial vendors without explicit cryptographic consent.",
        options: {
          A: "may a bank disclose",
          B: "a bank may disclose",
          C: "discloses a bank",
          D: "a bank had disclosed",
          E: "disclosing a bank"
        },
        answer: "A",
        explanation: "'Under no circumstances' (Hiçbir koşulda) negatif zarf öbeği cümle başına geldiğinde devrik yapı (inversion) zorunludur: Yardımcı fiil (may) + Özne (a bank) + Asıl Fiil (disclose). Doğru cevap A'dır."
      },
      {
        id: "m2_q14",
        category: "Grammar",
        tag: "Gramer - Causative",
        question: "Following the compliance warning from the banking regulator, the financial institution had all of its customer data encryption protocols --------- by an independent security firm.",
        options: {
          A: "re-evaluated",
          B: "re-evaluating",
          C: "to re-evaluate",
          D: "re-evaluate",
          E: "having re-evaluated"
        },
        answer: "A",
        explanation: "'Have something done' (Ettirgen/Causative Pasif kuralı): have + object (its customer data encryption protocols) + V3 (re-evaluated). Bir işi başkasına yaptırmak."
      },
      {
        id: "m2_q15",
        category: "Grammar",
        tag: "Gramer - Modals",
        question: "You --------- the entire backup cluster manually; the system was already configured to trigger automated disaster recovery within thirty seconds.",
        options: {
          A: "needn't have restored",
          B: "must have restored",
          C: "could restore",
          D: "may restore",
          E: "would restore"
        },
        answer: "A",
        explanation: "'Needn't have V3' yapısı geçmişte yapılmasına gerek olmayan ama boş yere yapılmış bir eylemi ifade eder: 'Tüm yedek kümesini manuel olarak geri yüklemene gerek yoktu (ama yükledin); sistem zaten 30 saniyede otomatik felaket kurtarmayı tetikleyecek şekilde ayarlanmıştı'."
      },
      {
        id: "m2_q16",
        category: "Grammar",
        tag: "Gramer - As if",
        question: "The market reacted with intense turbulence as if a sovereign default --------- imminent, even though the treasury had just secured a multibillion-dollar swap line.",
        options: {
          A: "were",
          B: "is",
          C: "will be",
          D: "has been",
          E: "is being"
        },
        answer: "A",
        explanation: "'As if / As though' gerçek dışı durumları anlatırken 'Subjunctive' geçmiş zaman kullanılır. Tıpkı bir if clause gibi tekil öznelerle bile 'were' tercih edilir ('as if a sovereign default were imminent' - sanki temerrüt kaçınılmazmış gibi)."
      },
      {
        id: "m2_q17",
        category: "Grammar",
        tag: "Gramer - Conditionals",
        question: "Had the engineering department installed the latest security patch in time, the intrusion --------- so extensively into core banking records.",
        options: {
          A: "would not have penetrated",
          B: "will not penetrate",
          C: "does not penetrate",
          D: "had not penetrated",
          E: "was not penetrating"
        },
        answer: "A",
        explanation: "Devrik Type 3 Conditional (If'siz şart cümlesi): 'Had the department installed' = 'If the department had installed'. Sonuç cümlesi 'would not have + V3' (would not have penetrated) olmalıdır."
      },
      {
        id: "m2_q18",
        category: "Grammar",
        tag: "Gramer - Gerunds",
        question: "The CEO objected to --------- the merger without --------- thorough technical due diligence on the partner's legacy software stack.",
        options: {
          A: "approving / conducting",
          B: "approve / conduct",
          C: "to approve / having conducted",
          D: "approved / conducted",
          E: "approving / to conduct"
        },
        answer: "A",
        explanation: "'Object to' kalıbındaki 'to' bir edattır (preposition). Edatlardan sonra fiil her zaman Gerund (-ing) alır (object to approving). Benzer şekilde 'without' da bir edattır ve arkasından 'conducting' gelir."
      },
      {
        id: "m2_q19",
        category: "Conjunctions",
        tag: "Zıtlık Bağlacı",
        question: "--------- significant advancements in artificial intelligence models, human discretion remains indispensable in approving high-risk commercial credit portfolios.",
        options: {
          A: "Despite",
          B: "Although",
          C: "Because",
          D: "Since",
          E: "Unless"
        },
        answer: "A",
        explanation: "Boşluktan sonra tam bir cümle değil, isim tamlaması ('significant advancements...') gelmiştir. Zıtlık bildiren ve isimle kullanılan edat 'Despite' (veya In spite of) dir. Although arkasından özne+yüklem ister."
      },
      {
        id: "m2_q20",
        category: "Conjunctions",
        tag: "Zaman & Şart",
        question: "Once the new cryptographic key generation algorithm is deployed, --------- .",
        options: {
          A: "all interbank communication protocols will benefit from enhanced quantum-resistant security",
          B: "the IT director had rejected all cloud integration proposals",
          C: "several security analysts were dismissed from the operations center",
          D: "legacy transaction records would have been completely wiped out",
          E: "branch managers have received their previous quarterly commissions"
        },
        answer: "A",
        explanation: "'Once' (-ince / -diğinde) zaman bağlacıdır. Once + Present (is deployed), Main Clause: Future (will benefit). Anlam ve zaman uyumu kusursuz olan şık A'dır."
      },
      {
        id: "m2_q21",
        category: "Conjunctions",
        tag: "Sebep Bağlacı",
        question: "The commercial bank faced severe financial penalties --------- it persistently failed to report suspicious money laundering transactions to supervisory authorities.",
        options: {
          A: "inasmuch as",
          B: "even if",
          C: "nonetheless",
          D: "in spite of",
          E: "whereas"
        },
        answer: "A",
        explanation: "'Inasmuch as' = 'because / since / as' (çünkü / -dığı için) anlamına gelen resmi bir sebep bağlacıdır. Banka şüpheli işlemleri bildirmediği için ceza ile karşılaşmıştır."
      },
      {
        id: "m2_q22",
        category: "Conjunctions",
        tag: "Karşılaştırma Bağlacı",
        question: "The more complex a financial software architecture becomes, --------- .",
        options: {
          A: "the more challenging it is to audit and safeguard against zero-day exploits",
          B: "software developers were satisfied with the user interface",
          C: "the highest security levels had been permanently achieved",
          D: "regulatory authorities will grant automatic compliance certificates",
          E: "all customer complaints are immediately resolved without delay"
        },
        answer: "A",
        explanation: "'The more ..., the more ...' (Ne kadar ..., o kadar ...) karşılaştırma kalıbıdır: 'Bir finansal yazılım mimarisi ne kadar karmaşık hale gelirse, onu denetlemek ve sıfırıncı gün açıklarına karşı korumak o kadar zorlaşır'."
      },
      {
        id: "m2_q23",
        category: "Conjunctions",
        tag: "İkili Bağlaç",
        question: "The modern financial ecosystem requires institutions to possess --------- robust capital reserves --------- highly agile software capabilities.",
        options: {
          A: "not only / but also",
          B: "neither / or",
          C: "whether / nor",
          D: "such / that",
          E: "no sooner / than"
        },
        answer: "A",
        explanation: "'Not only ... but also ...' (Yalnızca ... değil, aynı zamanda ... da). Kurumların hem güçlü sermaye rezervlerine hem de çevik yazılım kabiliyetlerine sahip olması gerektiği ifade edilmektedir."
      },
      {
        id: "m2_q24",
        category: "Conjunctions",
        tag: "Amaç / Sakınma",
        question: "The database administrators duplicated all core customer records onto an offline cold storage medium --------- any ransomware attack should corrupt the active primary cluster.",
        options: {
          A: "lest",
          B: "unless",
          C: "even though",
          D: "so as to",
          E: "despite"
        },
        answer: "A",
        explanation: "'Lest' (... olmasın diye / korkusuyla / for fear that) arkasından should veya yalın fiil alan ve olumsuzluk bildiren klasik bir sınav bağlacıdır: 'Bir fidye yazılımı ana kümeyi bozar korkusuyla çevrimdışı ortama kopyaladılar'."
      },

      // 25-28 Cloze Test 2
      {
        id: "m2_q25",
        category: "Cloze Test",
        tag: "Cloze 1/4",
        passage: "Cloud-native computing has emerged as a cornerstone of modern financial engineering. By transitioning from monolithic legacy systems to containerized microservices, financial institutions can achieve unprecedented scalability. (25) --------- this transformation enables banks to deploy software updates in minutes rather than weeks, it also introduces novel operational hazards. Distributed environments drastically expand the potential attack surface. (26) --------- , an architectural vulnerability in a single shared API can compromise the integrity of interconnected transaction pipelines. Financial cybersecurity leaders are therefore (27) --------- adopting 'Zero Trust' paradigms, where identity is continuously verified regardless of network perimeter. Without rigorous continuous authentication, institutions remain (28) --------- to privilege escalation attacks.",
        question: "Choose the best option for blank (25):",
        options: {
          A: "While",
          B: "Because",
          C: "Unless",
          D: "In case",
          E: "Despite"
        },
        answer: "A",
        explanation: "'While' (her ne kadar ...-se de / -e karşın). Bu dönüşüm bankaların güncellemeleri dakikalar içinde dağıtmasını sağlasa da, yeni operasyonel tehlikeler de yaratmaktadır (zıtlık)."
      },
      {
        id: "m2_q26",
        category: "Cloze Test",
        tag: "Cloze 2/4",
        question: "Choose the best option for blank (26) (refer to passage):",
        options: {
          A: "For instance",
          B: "Nevertheless",
          C: "On the contrary",
          D: "In conclusion",
          E: "Otherwise"
        },
        answer: "A",
        explanation: "Önceki cümlede saldırı yüzeyinin genişlediği söylenmiş, ardından paylaşılan tek bir API açığının tüm boru hattını tehlikeye atabileceği somut bir örnek olarak sunulmuştur ('For instance' = örneğin)."
      },
      {
        id: "m2_q27",
        category: "Cloze Test",
        tag: "Cloze 3/4",
        question: "Choose the best option for blank (27) (refer to passage):",
        options: {
          A: "increasingly",
          B: "rarely",
          C: "reluctantly",
          D: "inaccurately",
          E: "casually"
        },
        answer: "A",
        explanation: "'Increasingly adopting' (giderek artan bir biçimde benimsemek). Siber güvenlik liderleri Zero Trust yaklaşımlarını gün geçtikçe daha çok benimsemektedirler."
      },
      {
        id: "m2_q28",
        category: "Cloze Test",
        tag: "Cloze 4/4",
        question: "Choose the best option for blank (28) (refer to passage):",
        options: {
          A: "susceptible",
          B: "immune",
          C: "indifferent",
          D: "inaccessible",
          E: "hostile"
        },
        answer: "A",
        explanation: "'Susceptible to' (...-e duyarlı / savunmasız / açık). Kesintisiz kimlik doğrulama olmazsa kurumlar yetki yükseltme saldırılarına karşı savunmasız kalır. Immune to: bağışık."
      },

      // 29-32 Sentence Completion
      {
        id: "m2_q29",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "Even if an organization deploys state-of-the-art cryptographic hardware, --------- .",
        options: {
          A: "it can still fall victim to social engineering attacks targeting employee negligence",
          B: "all external hackers would have abandoned their malicious intentions immediately",
          C: "the supervisory banking board has waived all mandatory annual security audits",
          D: "the costs of maintaining enterprise servers will completely vanish overnight",
          E: "customers are guaranteed to receive maximum interest returns on deposits"
        },
        answer: "A",
        explanation: "'Even if' (-se bile). Bir kurum en son teknoloji kriptografik donanım kullansa bile, çalışan ihmalini hedef alan sosyal mühendislik (oltalama) saldırılarına yine de kurban gidebilir."
      },
      {
        id: "m2_q30",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "--------- so that developers could test new payment microservices in an isolated sandbox environment.",
        options: {
          A: "The infrastructure engineering team provisioned simulated mock bank accounts and test databases",
          B: "Real customer credit cards were exposed to unencrypted live production traffic",
          C: "The financial institution shut down all digital transactions for an entire month",
          D: "Senior executives refused to allocate any budget for quality assurance",
          E: "Marketing analysts published the quarterly corporate revenue forecasts"
        },
        answer: "A",
        explanation: "'so that' (...-bilsinler diye). Geliştiriciler yeni ödeme mikro servislerini izole bir test ortamında test edebilsinler diye altyapı ekibi simüle edilmiş sahte banka hesapları ve test veritabanları tahsis etmiştir."
      },
      {
        id: "m2_q31",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "Since financial technology startups are unburdened by archaic legacy software stacks, --------- .",
        options: {
          A: "they can iterate and roll out customized financial products far more rapidly than established incumbents",
          B: "they completely ignore all national tax and anti-money laundering regulations",
          C: "their physical branch networks are expanding in every rural district",
          D: "they have experienced complete bankruptcy within their first month of operation",
          E: "traditional banks will cease to provide commercial mortgages altogether"
        },
        answer: "A",
        explanation: "'Fintech girişimleri eski yazılım yığınlarının yükünü taşımadığından dolayı...' Sonuç cümlesi onların esnekliğini ve hızını belirtir: 'köklü geleneksel bankalara kıyasla çok daha hızlı ürün geliştirip piyasaya sürebilirler'."
      },
      {
        id: "m2_q32",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "Rather than relying on subjective human evaluation for creditworthiness, --------- .",
        options: {
          A: "modern digital lenders utilize machine learning models that analyze thousands of real-time behavioral data points",
          B: "loan applicants were asked to submit physical notarized documents by mail",
          C: "central banks ordered commercial lenders to stop issuing retail loans entirely",
          D: "branch employees have taken over all computerized underwriting decisions",
          E: "interest rates are recalculated manually at the end of each fiscal calendar"
        },
        answer: "A",
        explanation: "'Rather than relying on subjective human evaluation...' (Kredi değerliliği için öznel insan değerlendirmesine dayanmak yerine...). Alternatif modern yöntem: 'modern dijital borç verenler binlerce gerçek zamanlı davranışsal veri noktasını analiz eden makine öğrenimi modelleri kullanmaktadır'."
      },

      // 33-36 Translation
      {
        id: "m2_q33",
        category: "Translation",
        tag: "EN -> TR",
        question: "Open banking regulations require commercial banks to share customer-permissioned financial data with licensed third-party fintech applications through secure APIs.",
        options: {
          A: "Açık bankacılık düzenlemeleri, ticari bankaların müşteri izinli finansal verileri güvenli API'ler aracılığıyla lisanslı üçüncü taraf fintech uygulamalarıyla paylaşmasını zorunlu kılmaktadır.",
          B: "Ticari bankalar, güvenli API'ler kullanarak müşteri verilerini lisanssız fintech uygulamalarından korumak zorundadır.",
          C: "Müşteri izinli finansal verilerin fintech uygulamaları tarafından paylaşılması açık bankacılık regülasyonlarını zorunlu kılmıştır.",
          D: "Açık bankacılık sayesinde ticari bankalar tüm finansal verileri üçüncü taraf kurumlarla izinsiz şekilde paylaşabilmektedir.",
          E: "Güvenli API sistemleri olmaksızın ticari bankaların açık bankacılık düzenlemelerine uyum sağlaması imkansızdır."
        },
        answer: "A",
        explanation: "Yüklem: 'require ... to share' (paylaşmasını zorunlu kılmaktadır / gerektirmektedir). Özne: 'Open banking regulations' (Açık bankacılık düzenlemeleri). 'through secure APIs' (güvenli API'ler aracılığıyla). Tam eşleşme A'dır."
      },
      {
        id: "m2_q34",
        category: "Translation",
        tag: "EN -> TR",
        question: "Machine learning algorithms can detect fraudulent card activities much faster than traditional rules-based monitoring systems.",
        options: {
          A: "Makine öğrenimi algoritmaları, sahte kart işlemlerini geleneksel kural tabanlı izleme sistemlerinden çok daha hızlı tespit edebilmektedir.",
          B: "Geleneksel kural tabanlı sistemler, kart dolandırıcılıklarını makine öğrenimi kadar hızlı tespit edememektedir.",
          C: "Sahte kart işlemlerini hızlı tespit etmek isteyen bankalar, kural tabanlı izleme sistemlerinden vazgeçmektedir.",
          D: "Makine öğrenimi teknolojisi ile geliştirilen algoritmalar, yalnızca sahte kart işlemlerini tespit etmek için kullanılır.",
          E: "Geleneksel sistemlerin yerini alan makine öğrenimi modelleri kart dolandırıcılığını tamamen ortadan kaldırmıştır."
        },
        answer: "A",
        explanation: "Yüklem: 'can detect' (tespit edebilmektedir). Karşılaştırma: 'much faster than...' (çok daha hızlı). Birebir tam çeviri A şıkkıdır."
      },
      {
        id: "m2_q35",
        category: "Translation",
        tag: "TR -> EN",
        question: "Bilişim güvenliği uzmanları, bankacılık sunucularına yönelik saldırıların çoğunun güncellenmemiş yazılımlardan kaynaklandığını belirtmektedir.",
        options: {
          A: "Cybersecurity experts state that most attacks on banking servers originate from unpatched software.",
          B: "IT specialists warned that unpatched banking servers had already been compromised by cyber criminals.",
          C: "Banking servers are frequently attacked because cybersecurity specialists fail to update internal systems.",
          D: "Most software updates on banking servers are carried out to eliminate malicious intrusions.",
          E: "According to IT auditors, updating banking software cannot guarantee complete security against attacks."
        },
        answer: "A",
        explanation: "Özne: 'Bilişim güvenliği uzmanları' (Cybersecurity experts). Yüklem: 'belirtmektedir' (state / emphasize). 'most attacks ... originate from unpatched software' (çoğunun güncellenmemiş yazılımlardan kaynaklandığını). Doğru cevap A'dır."
      },
      {
        id: "m2_q36",
        category: "Translation",
        tag: "TR -> EN",
        question: "Finansal kurumlar, siber saldırılara karşı dayanıklılıklarını artırmak amacıyla düzenli sızma testleri gerçekleştirmektedir.",
        options: {
          A: "Financial institutions conduct regular penetration tests in order to enhance their resilience against cyber attacks.",
          B: "Conducting regular penetration tests allows financial institutions to eliminate all cyber risks completely.",
          C: "Resilience against cyber attacks can only be achieved if financial institutions hire external ethical hackers.",
          D: "Because financial institutions face cyber attacks, they have upgraded their penetration testing protocols.",
          E: "In spite of regular penetration testing, financial institutions remain vulnerable to sophisticated intrusions."
        },
        answer: "A",
        explanation: "Özne: 'Finansal kurumlar' (Financial institutions). Yüklem: 'gerçekleştirmektedir' (conduct). Amaç: 'in order to enhance their resilience against cyber attacks' (dayanıklılıklarını artırmak amacıyla). Doğru cevap A'dır."
      },

      // 37-40 Reading Comprehension
      {
        id: "m2_q37",
        category: "Reading",
        tag: "Paragraf 1/4",
        passage: "The integration of Generative Artificial Intelligence (GenAI) into commercial banking operations marks a profound paradigm shift. Historically, automated banking tools were limited to deterministic, rule-based algorithms capable of executing only predefined tasks, such as rudimentary credit scoring or automated balance inquiries. In stark contrast, modern Large Language Models (LLMs) can comprehend ambiguous human prompts, synthesize complex financial prospectuses, and generate personalized wealth management advice in real time. In the software engineering division, bank developers utilize AI-assisted coding copilots to accelerate legacy mainframe modernization, reducing code refactoring timelines by up to forty percent. However, this transformative potential is counterbalanced by formidable governance and operational risks. LLMs are notoriously prone to 'hallucinations'—generating mathematically inaccurate financial data with high rhetorical confidence. If an algorithmic advisor provides erroneous financial guidance to retail customers, the bank faces severe regulatory penalties and reputational devastation. Consequently, tier-one banking institutions enforce a strict 'Human-in-the-Loop' architecture, stipulating that no AI-generated recommendation can be published or executed without mandatory review by a licensed human professional.",
        question: "According to the passage, how do modern LLMs differ fundamentally from historical automated banking tools?",
        options: {
          A: "Historical tools were far more adaptable to ambiguous customer inquiries than modern LLMs.",
          B: "Modern LLMs can comprehend ambiguous prompts and synthesize complex information rather than being restricted to rigid predefined tasks.",
          C: "Modern LLMs completely operate without consuming computational or cloud resources.",
          D: "Historical tools were capable of generating real-time personalized investment advice.",
          E: "Modern LLMs have completely eliminated the need for human software developers in banking."
        },
        answer: "B",
        explanation: "Metinde açıkça ifade edilmektedir: Eski araçlar önceden tanımlanmış kural tabanlı görevlerle sınırlıyken, modern LLM'ler karmaşık ve belirsiz insan girdilerini anlayıp finansal izahnameleri sentezleyebilmektedir."
      },
      {
        id: "m2_q38",
        category: "Reading",
        tag: "Paragraf 2/4",
        question: "The passage states that in bank software engineering divisions, AI copilots have --------- .",
        options: {
          A: "caused widespread database corruption in core ledger files",
          B: "curtailed code refactoring timelines by up to forty percent",
          C: "forced executives to abandon all mainframe modernization projects",
          D: "tripled the number of human developers needed for basic maintenance",
          E: "rendered all cybersecurity monitoring tools completely obsolete"
        },
        answer: "B",
        explanation: "Metindeki şu ifadeye bakınız: '...reducing code refactoring timelines by up to forty percent' (kod yeniden yapılandırma sürelerini %40'a varan oranda kısaltmıştır)."
      },
      {
        id: "m2_q39",
        category: "Reading",
        tag: "Paragraf 3/4",
        question: "Why do tier-one banks implement a 'Human-in-the-Loop' architecture?",
        options: {
          A: "To prevent AI hallucinations and erroneous outputs from reaching customers without professional validation.",
          B: "Because regulatory authorities have banned all computers from commercial banking branches.",
          C: "To lower employee wages across technical and wealth management departments.",
          D: "Because human professionals work faster than automated LLM algorithms.",
          E: "To avoid purchasing cloud computing servers from third-party tech vendors."
        },
        answer: "A",
        explanation: "Metnin son cümlelerinde LLM'lerin 'halüsinasyon' riskine ve hatalı finansal tavsiye üretme tehlikesine karşı, lisanslı bir uzman incelemesi olmadan hiçbir çıktının müşteriye sunulmaması için 'Human-in-the-Loop' zorunlu kılındığı belirtilmektedir."
      },
      {
        id: "m2_q40",
        category: "Reading",
        tag: "Paragraf 4/4",
        question: "The word 'formidable' in the passage is closest in meaning to --------- .",
        options: {
          A: "daunting",
          B: "trivial",
          C: "negligible",
          D: "attractive",
          E: "temporary"
        },
        answer: "A",
        explanation: "'Formidable' zorlu, ürkütücü, yenilmesi güç (daunting / imposing / challenging) anlamına gelir. Trivial (önemsiz), negligible (ihmal edilebilir)."
      }
    ]
  },

  // DENEME 3: İLERİ DÜZEY ÇELDİRİCİLİ DENEME (Zor Seviye Soru Kalıpları)
  mock3: {
    title: "Deneme 3: İleri Düzey Çeldiricili Deneme",
    description: "40 Soru - 45 Dakika. Yüksek hedefli adaylar için: Çeldirici şıklar, devrik yapılar, karmaşık zaman ilişkileri ve ileri düzey bankacılık/teknoloji metinleri.",
    questions: [
      {
        id: "m3_q1",
        category: "Vocabulary",
        tag: "İleri Düzey Kelime",
        question: "The central bank's unexpected decision to raise the reserve requirement ratio was intended to curb the --------- expansion of consumer credit.",
        options: {
          A: "rampant",
          B: "stagnant",
          C: "deficient",
          D: "negligent",
          E: "obsolete"
        },
        answer: "A",
        explanation: "'Rampant' kontrolsüzce yayılan, dizginlenemez, aşırı (uncontrolled / rampant inflation / rampant credit expansion). Diğer şıklar: stagnant (durgun), deficient (yetersiz/eksik), negligent (ihmalkar), obsolete (eski/demode)."
      },
      {
        id: "m3_q2",
        category: "Vocabulary",
        tag: "İleri Düzey Kelime",
        question: "Although several tech startups claimed to offer groundbreaking decentralized solutions, their actual business models proved largely --------- upon scrutiny.",
        options: {
          A: "spurious",
          B: "lucrative",
          C: "imperative",
          D: "resilient",
          E: "versatile"
        },
        answer: "A",
        explanation: "'Spurious' sahte, asılsız, temelsiz (false / bogus / ungrounded) demektir. İnceleme sonucunda iş modellerinin temelsiz/sahte olduğu ortaya çıkmıştır. Lucrative (kazançlı/kârlı), resilient (dayanıklı), versatile (çok yönlü)."
      },
      {
        id: "m3_q3",
        category: "Vocabulary",
        tag: "Finans & İktisat",
        question: "The treasury's long-term fiscal policy aims to foster sustainable economic expansion without --------- sovereign debt to unmanageable levels.",
        options: {
          A: "escalating",
          B: "diminishing",
          C: "rectifying",
          D: "alleviating",
          E: "scrutinizing"
        },
        answer: "A",
        explanation: "'Escalating' tırmandırmak, aşırı yükseltmek (increasing rapidly). Kamu borcunu yönetilemez seviyelere tırmandırmadan büyümeyi hedeflemektedir. Diminishing (azaltmak), rectifying (düzeltmek), alleviating (hafifletmek)."
      },
      {
        id: "m3_q4",
        category: "Vocabulary",
        tag: "Bilişim & Güvenlik",
        question: "Because cryptographic protocols must withstand potential decryption by future quantum supercomputers, researchers are actively testing --------- algorithms.",
        options: {
          A: "post-quantum",
          B: "archaic",
          C: "vulnerable",
          D: "redundant",
          E: "transient"
        },
        answer: "A",
        explanation: "Gelecekteki kuantum bilgisayarların şifre kırma gücüne karşı geliştirilen algoritmalara 'post-quantum' (kuantum sonrası) algoritmalar denir. Archaic (antik/eski), transient (geçici)."
      },
      {
        id: "m3_q5",
        category: "Vocabulary",
        tag: "Finansal Terim",
        question: "A company with high operational --------- is inherently more sensitive to macroeconomic shocks because its fixed costs constitute a large proportion of total expenses.",
        options: {
          A: "leverage",
          B: "subsidy",
          C: "collateral",
          D: "deficit",
          E: "charity"
        },
        answer: "A",
        explanation: "'Operational leverage' (operasyonel kaldıraç) finansal bir terimdir. Sabit giderlerin toplam giderler içindeki payının yüksekliğini ifade eder. Diğerleri: subsidy (devlet sübvansiyonu), collateral (teminat/ipotek)."
      },
      {
        id: "m3_q6",
        category: "Vocabulary",
        tag: "Hukuk & Finans",
        question: "The international financial tribunal ruled that the sovereign debt restructuring agreement was legally binding and therefore --------- on all creditor syndicates.",
        options: {
          A: "enforceable",
          B: "negligible",
          C: "rebuttable",
          D: "perishable",
          E: "voluntary"
        },
        answer: "A",
        explanation: "'Enforceable' yasal olarak uygulanabilir, icra edilebilir demektir ('legally binding and enforceable'). Diğer şıklar: rebuttable (aksı ispatlanabilir), perishable (çabuk bozulan), voluntary (gönüllü)."
      },
      {
        id: "m3_q7",
        category: "Phrasal Verbs",
        tag: "Phrasal Verb",
        question: "The executive committee decided to --------- the proposed branch merger until the antitrust authority issued its definitive market concentration report.",
        options: {
          A: "hold off on",
          B: "look down on",
          C: "come down with",
          D: "get away with",
          E: "make do with"
        },
        answer: "A",
        explanation: "'Hold off on' ertelemek, bekletmek, askıya almak (delay / postpone) demektir. Rapor çıkana kadar birleşmeyi bekletme kararı almışlardır. Come down with (hastalanmak), get away with (yanına kâr kalmak)."
      },
      {
        id: "m3_q8",
        category: "Phrasal Verbs",
        tag: "Phrasal Verb",
        question: "Due to persistent delays in chip manufacturing, the deployment of next-generation ATM terminals has been --------- by at least six months.",
        options: {
          A: "set back",
          B: "brought up",
          C: "taken after",
          D: "run out of",
          E: "turned down"
        },
        answer: "A",
        explanation: "'Set back' geciktirmek, aksatmak, ilerlemesini engellemek demektir. ATM dağıtımı 6 ay aksamıştır/gecikmiştir. Brought up (büyütmek/gündeme getirmek), turned down (reddetmek/kısmak)."
      },
      {
        id: "m3_q9",
        category: "Phrasal Verbs",
        tag: "Phrasal Verb",
        question: "The newly appointed risk officer pledged to --------- outdated operational practices and introduce real-time algorithmic telemetry.",
        options: {
          A: "do away with",
          B: "fall back on",
          C: "look up to",
          D: "stand in for",
          E: "keep up with"
        },
        answer: "A",
        explanation: "'Do away with' ortadan kaldırmak, yürürlükten kaldırmak (abolish / eliminate) demektir. Eski uygulamaları ortadan kaldırma sözü verilmiştir. Fall back on (son çare olarak başvurmak), look up to (hayranlık duymak)."
      },
      {
        id: "m3_q10",
        category: "Phrasal Verbs",
        tag: "Phrasal Verb",
        question: "When unexpected liquidity shortages occur, commercial institutions invariably --------- the Central Bank as the lender of last resort.",
        options: {
          A: "fall back on",
          B: "cut down on",
          C: "drop in on",
          D: "put up with",
          E: "run out of"
        },
        answer: "A",
        explanation: "'Fall back on' son çare olarak başvurmak / güvenmek (resort to / rely on in emergency) demektir. Likidite sıkıntısında Merkez Bankası'na başvurulur. Cut down on (azaltmak/kısmak)."
      },
      {
        id: "m3_q11",
        category: "Grammar",
        tag: "Mixed Conditionals",
        question: "If the enterprise database --------- properly partitioned during last year's architectural overhaul, the query engine --------- so sluggishly today.",
        options: {
          A: "had been / would not operate",
          B: "was / will not operate",
          C: "has been / did not operate",
          D: "would be / had not operated",
          E: "is / wouldn't have operated"
        },
        answer: "A",
        explanation: "Mixed Conditional (Tip 3 + Tip 2): 'If clause' geçmişteki bir eylemi ifade eder (last year's overhaul -> had been partitioned). 'Main clause' ise bugünkü durumu ifade eder (today -> would not operate). Geçmişteki eylemin günümüzdeki sonucu!"
      },
      {
        id: "m3_q12",
        category: "Grammar",
        tag: "Subjunctive",
        question: "The supervisory agency mandated that the bank --------- its emergency capital buffer to fifteen percent with immediate effect.",
        options: {
          A: "increase",
          B: "increases",
          C: "increased",
          D: "has increased",
          E: "is increasing"
        },
        answer: "A",
        explanation: "Subjunctive kuralı: 'Mandate, demand, recommend, require, insist that + subject + base form (yalın fiil V1)'. Özne üçüncü tekil şahıs ('the bank') olsa bile -s takısı ALMAZ, fiil tamamen yalın kalır ('increase'). Sınavların en ünlü tuzak kuralıdır!"
      },
      {
        id: "m3_q13",
        category: "Grammar",
        tag: "Devrik Yapı",
        question: "Not only --------- to detect the unauthorized SQL injection attack, but it also disabled the automated alerting daemon.",
        options: {
          A: "did the intrusion prevention system fail",
          B: "the intrusion prevention system failed",
          C: "has the intrusion prevention system failed",
          D: "failed the intrusion prevention system",
          E: "was failing the intrusion prevention system"
        },
        answer: "A",
        explanation: "'Not only ... but also' kalıbı cümle başında kullanıldığında birinci kısım devrik (inversion) olur: Not only + did + subject + V1 (did the system fail). İkinci kısım 'disabled' (Simple Past) olduğu için birinci kısım da geçmiş zamana göre 'did ... fail' şeklinde devrik yapılır."
      },
      {
        id: "m3_q14",
        category: "Grammar",
        tag: "Participle Reduction",
        question: "--------- by independent cryptographic researchers, the encryption vulnerability was promptly disclosed to the international banking community.",
        options: {
          A: "Having been verified",
          B: "Having verified",
          C: "Verifying",
          D: "To verify",
          E: "To be verifying"
        },
        answer: "A",
        explanation: "Açık (the vulnerability) araştırmacılar tarafından 'doğrulanmış' (pasif) ve bu doğrulama eylemi açıklanmadan önce tamamlanmıştır (öncelik-sonralık). Pasif perfect kısaltma: 'Having been + V3' (Having been verified)."
      },
      {
        id: "m3_q15",
        category: "Grammar",
        tag: "Cleft Sentences",
        question: "It was not until the secondary audit was completed --------- the board of directors realized the true extent of the non-performing loans.",
        options: {
          A: "that",
          B: "when",
          C: "which",
          D: "where",
          E: "what"
        },
        answer: "A",
        explanation: "'It was not until ... THAT ...' İngilizcede çok yaygın bir vurgu (cleft sentence) kalıbıdır. 'İkinci denetim tamamlanana kadar yönetim kurulu durumun farkına varamamıştı / ancak ikinci denetim tamamlandıktan sonra farkına vardı'."
      },
      {
        id: "m3_q16",
        category: "Grammar",
        tag: "Modals in the Past",
        question: "The software engineer --------- the sensitive private keys on a public GitHub repository, as it violated fundamental cybersecurity protocols.",
        options: {
          A: "should not have committed",
          B: "must not commit",
          C: "might not commit",
          D: "cannot have committed",
          E: "need not commit"
        },
        answer: "A",
        explanation: "'Should not have V3' geçmişte yapılan ama yapılmaması gereken bir hatayı/eleştiriyi ifade eder: 'Yazılım mühendisinin hassas anahtarları genel bir depoya yüklememesi gerekirdi (ama yükledi)'."
      },
      {
        id: "m3_q17",
        category: "Grammar",
        tag: "Prepositional Structures",
        question: "The bank's liquidity framework was revised with a view to --------- potential funding deficits during severe stress scenarios.",
        options: {
          A: "preventing",
          B: "prevent",
          C: "prevented",
          D: "to prevent",
          E: "have prevented"
        },
        answer: "A",
        explanation: "'With a view to' (-mek amacıyla) kalıbındaki 'to' bir edattır (preposition). Bu nedenle arkasından gelen fiil V-ing (preventing) alır. Tıpkı 'look forward to doing' veya 'object to doing' gibidir."
      },
      {
        id: "m3_q18",
        category: "Grammar",
        tag: "Comparison & Degree",
        question: "The current yield curve inversion is far --------- than any anomaly observed during the preceding two financial cycles.",
        options: {
          A: "more pronounced",
          B: "most pronounced",
          C: "as pronounced",
          D: "pronounced",
          E: "the more pronounced"
        },
        answer: "A",
        explanation: "'Far / much / considerably' karşılaştırma (comparative) sıfatlarının derecesini artırmak için kullanılır. Arkasından 'than' geldiği için comparative yapı olan 'more pronounced' doğru cevaptır."
      },
      {
        id: "m3_q19",
        category: "Conjunctions",
        tag: "Zıtlık / Beklenti",
        question: "--------- the macroeconomic environment remained exceedingly hostile, the bank managed to expand its net interest margin by two hundred basis points.",
        options: {
          A: "Much as",
          B: "In order that",
          C: "Since",
          D: "Provided that",
          E: "Lest"
        },
        answer: "A",
        explanation: "'Much as' = 'Although / Even though' (Her ne kadar ...-se de / -e rağmen) anlamına gelen edebi ve sınav düzeyinde çok sorulan bir zıtlık bağlacıdır. Düşmanca ortama rağmen banka marjını artırmıştır."
      },
      {
        id: "m3_q20",
        category: "Conjunctions",
        tag: "Zaman & Öncelik",
        question: "No sooner had the software team deployed the security hotfix --------- a new vulnerability was discovered in the third-party parsing library.",
        options: {
          A: "than",
          B: "when",
          C: "then",
          D: "hardly",
          E: "scarcely"
        },
        answer: "A",
        explanation: "'No sooner ... THAN ...' (-er -emez / tam olmuştu ki ... oldu). No sooner kalıbı her zaman 'THAN' ile eşleşir! (Hardly / Scarcely ise 'WHEN' ile eşleşir). Sınavlarda ikisi sıklıkla birbirinin çeldiricisi olarak sorulur."
      },
      {
        id: "m3_q21",
        category: "Conjunctions",
        tag: "Koşul Bağlacı",
        question: "The merger will proceed as scheduled, --------- that the competition watchdog does not impose mandatory divestiture conditions.",
        options: {
          A: "assuming",
          B: "lest",
          C: "despite",
          D: "whereas",
          E: "unless"
        },
        answer: "A",
        explanation: "'Assuming that / Provided that / On condition that' (farz edilirse / koşuluyla) şart bağlacıdır. Rekabet kurumunun şart getirmemesi koşuluyla birleşme ilerleyecektir."
      },
      {
        id: "m3_q22",
        category: "Conjunctions",
        tag: "Sebep & Sonuç",
        question: "The software cluster experienced an outage --------- server capacity had been artificially throttled during load testing.",
        options: {
          A: "in that",
          B: "in spite of",
          C: "so as to",
          D: "despite",
          E: "regardless of"
        },
        answer: "A",
        explanation: "'In that' (-mesi bakımından / çünkü / şu açıdan ki) resmi sebep açıklayan bir bağlaçtır ve arkasından tam cümle alır. Diğerleri arkasından isim öbeği alır veya anlamca uyumsuzdur."
      },
      {
        id: "m3_q23",
        category: "Conjunctions",
        tag: "Zıtlık / Tercih",
        question: "Corporate lenders must prioritize sustainable green energy transitions, --------- merely pursuing short-term quarterly profit margins.",
        options: {
          A: "as opposed to",
          B: "in case of",
          C: "by means of",
          D: "with regard to",
          E: "on behalf of"
        },
        answer: "A",
        explanation: "'As opposed to' (-in aksine / yerine). Kısa vadeli kâr marjlarını kovalamanın aksine, yeşil enerji dönüşümlerine öncelik vermelidirler. By means of (vasıtasıyla), with regard to (ile ilgili olarak)."
      },
      {
        id: "m3_q24",
        category: "Conjunctions",
        tag: "Şart / Olumsuzluk",
        question: "Financial institutions must maintain redundant cooling infrastructure in their data centers, --------- catastrophic thermal shutdown occur during peak summer loads.",
        options: {
          A: "lest",
          B: "although",
          C: "because",
          D: "even if",
          E: "as long as"
        },
        answer: "A",
        explanation: "'Lest + subject + base verb (occur)' kalıbı: Felaket boyutunda bir termal kapanma yaşanmasın diye / korkusuyla yedek soğutma altyapısı bulundurulmalıdır."
      },

      // 25-28 Cloze Test 3
      {
        id: "m3_q25",
        category: "Cloze Test",
        tag: "Cloze 1/4",
        passage: "Algorithmic high-frequency trading (HFT) has fundamentally reshaped liquidity dynamics across modern sovereign debt markets. By executing thousands of automated orders per millisecond, HFT firms supply critical liquidity and narrow the bid-ask spread. (25) --------- , critics argue that this liquidity is merely 'fleeting' and evaporates precisely when financial stress intensifies. (26) --------- the flash crash of 2010, automated market makers abruptly withdrew their quotes, triggering catastrophic liquidity vacuums. To (27) --------- this systemic instability, regulatory bodies are now introducing mandatory minimum quoting durations. These interventions aim to transform speculative arbitrageurs into resilient market stabilizers, (28) --------- safeguarding investor confidence.",
        question: "Choose the best option for blank (25):",
        options: {
          A: "However",
          B: "Therefore",
          C: "Furthermore",
          D: "Consequently",
          E: "Similarly"
        },
        answer: "A",
        explanation: "Önceki cümlede HFT'nin faydaları (likidite sağlaması, makası daraltması) anlatılmış, bu cümlede ise eleştirmenlerin bunun geçici olduğunu savunduğu belirtilmiştir. Zıtlık geçiş zarfı 'However' (ancak/bununla birlikte) gereklidir."
      },
      {
        id: "m3_q26",
        category: "Cloze Test",
        tag: "Cloze 2/4",
        question: "Choose the best option for blank (26) (refer to passage):",
        options: {
          A: "During",
          B: "Despite",
          C: "Owing to",
          D: "Unlike",
          E: "Without"
        },
        answer: "A",
        explanation: "'During the flash crash of 2010' (2010 yılındaki ani çöküş esnasında/sırasında). Zaman bildiren ve isimle kullanılan edat 'During'dir."
      },
      {
        id: "m3_q27",
        category: "Cloze Test",
        tag: "Cloze 3/4",
        question: "Choose the best option for blank (27) (refer to passage):",
        options: {
          A: "mitigate",
          B: "provoke",
          C: "aggravate",
          D: "exacerbate",
          E: "disregard"
        },
        answer: "A",
        explanation: "'To mitigate this systemic instability' (Bu sistemsel istikrarsızlığı hafifletmek / azaltmak amacıyla). Diğer şıklar durumu kötüleştirmek anlamına gelir: provoke (kışkırtmak), aggravate/exacerbate (kötüleştirmek), disregard (göz ardı etmek)."
      },
      {
        id: "m3_q28",
        category: "Cloze Test",
        tag: "Cloze 4/4",
        question: "Choose the best option for blank (28) (refer to passage):",
        options: {
          A: "thereby",
          B: "otherwise",
          C: "nevertheless",
          D: "instead",
          E: "on the other hand"
        },
        answer: "A",
        explanation: "'thereby + V-ing' (... yaparak, böylelikle). Piyasa istikrarlaştırıcılarına dönüştürerek, 'böylelikle yatırımcı güvenini koruma altına alarak' (thereby safeguarding investor confidence)."
      },

      // 29-32 Sentence Completion
      {
        id: "m3_q29",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "Whereas traditional retail banking relied predominantly on physical proximity and face-to-face interpersonal rapport, --------- .",
        options: {
          A: "modern digital ecosystems prioritize seamless mobile user experience and algorithmic personalization",
          B: "branch tellers are being hired in record numbers across every metropolitan city",
          C: "bank customers refuse to use smartphone applications for checking their account balance",
          D: "regulatory authorities have banned all remote automated transactions",
          E: "paper checks continue to be the primary method for retail settlement"
        },
        answer: "A",
        explanation: "'Whereas' (Geleneksel bankacılık fiziksel yakınlığa ve yüz yüze iletişime dayanırken...). Zıtlık karşılaştırması: 'modern dijital ekosistemler kesintisiz mobil kullanıcı deneyimine ve algoritmik kişiselleştirmeye öncelik vermektedir'."
      },
      {
        id: "m3_q30",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "Had the board of directors been cognizant of the escalating credit default swap premiums, --------- .",
        options: {
          A: "they would have curtailed their exposure to risky sovereign bonds much earlier",
          B: "they will expand their unsecured commercial lending portfolio immediately",
          C: "no regulatory body would investigate their annual financial statements",
          D: "the company had earned record quarterly dividend yields",
          E: "all foreign currency reserves are converted into physical gold bars"
        },
        answer: "A",
        explanation: "Devrik Type 3 Şart Cümlesi ('Had they been cognizant' = 'If they had been aware'). Sonuç cümlesi 'would have + V3' (they would have curtailed their exposure... - riskli tahvillere olan risk maruziyetlerini çok daha önce kısıtlarlardı)."
      },
      {
        id: "m3_q31",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "In stark contrast to inflationary periods where central banks tighten monetary policy, --------- .",
        options: {
          A: "economic recessions typically prompt monetary authorities to inject liquidity and lower benchmark interest rates",
          B: "commercial banks are mandated to double their reserve requirement ratios",
          C: "consumer borrowing costs inevitably reach unprecedented historical zeniths",
          D: "the price of consumer goods continues to spiral uncontrollably upwards",
          E: "foreign institutional capital instantly flees emerging domestic markets"
        },
        answer: "A",
        explanation: "'In stark contrast to...' (Merkez bankalarının para politikasını sıktığı enflasyonist dönemlerin tam aksine...). Zıt durum: 'ekonomik durgunluklar genellikle para otoritelerini likidite enjekte etmeye ve gösterge faiz oranlarını düşürmeye yöneltir'."
      },
      {
        id: "m3_q32",
        category: "Sentence Completion",
        tag: "Cümle Tamamlama",
        question: "Software architects implemented automated database sharding --------- .",
        options: {
          A: "so that high concurrent transaction loads could be distributed seamlessly across multiple server nodes",
          B: "because customer records should never be segmented or partitioned under any circumstances",
          C: "unless all data centers suffered a complete catastrophic hardware malfunction",
          D: "in spite of the total elimination of all security firewalls",
          E: "although the system was already processing transactions faster than light"
        },
        answer: "A",
        explanation: "'Yazılım mimarları otomatik veritabanı sharding (parçalama) tekniğini uyguladılar...' Amaç: 'so that high concurrent transaction loads could be distributed seamlessly' (yüksek eşzamanlı işlem yükleri birden fazla sunucu düğümüne sorunsuzca dağıtılabilsin diye)."
      },

      // 33-36 Translation
      {
        id: "m3_q33",
        category: "Translation",
        tag: "EN -> TR",
        question: "Unless comprehensive stress testing is conducted regularly, financial institutions cannot accurately gauge their vulnerability to unexpected systemic liquidity shocks.",
        options: {
          A: "Kapsamlı stres testleri düzenli olarak yapılmadıkça, finansal kurumlar beklenmedik sistemsel likidite şoklarına karşı savunmasızlıklarını doğru şekilde ölçemezler.",
          B: "Finansal kurumlar likidite şoklarını ölçmek amacıyla düzenli stres testleri yapmayı zorunlu hale getirmiştir.",
          C: "Düzenli stres testleri yapılsa bile finansal kurumların beklenmedik sistemsel şoklara karşı korunması imkansızdır.",
          D: "Beklenmedik likidite şoklarına karşı savunmasız olan kurumlar, kapsamlı stres testlerini zamanında yapmayanlardır.",
          E: "Finansal kurumların likidite şoklarını doğru ölçebilmesi, yalnızca bağımsız denetimlerce yapılan testlere bağlıdır."
        },
        answer: "A",
        explanation: "'Unless ... is conducted' (... yapılmadıkça / edilmedikçe). 'cannot accurately gauge' (doğru şekilde ölçemezler). 'vulnerability to unexpected systemic liquidity shocks' (beklenmedik sistemsel likidite şoklarına karşı savunmasızlıklarını). Tam çeviri A'dır."
      },
      {
        id: "m3_q34",
        category: "Translation",
        tag: "EN -> TR",
        question: "The migration of mission-critical banking services to multi-cloud environments provides high availability while mitigating vendor lock-in risks.",
        options: {
          A: "Görev açısından kritik bankacılık hizmetlerinin çoklu bulut ortamlarına taşınması, tedarikçiye bağımlılık risklerini azaltırken yüksek erişilebilirlik sağlar.",
          B: "Çoklu bulut ortamlarına geçen bankalar, yüksek erişilebilirlik sağlasa da tedarikçi riskleriyle karşılaşmaktadır.",
          C: "Kritik bankacılık servislerinde tedarikçi bağımlılığını azaltmak için tek bir bulut sağlayıcısı tercih edilmelidir.",
          D: "Yüksek erişilebilirlik sağlamak isteyen finans kuruluşları tüm kritik servislerini bulut ortamlarına taşımak zorundadır.",
          E: "Çoklu bulut ortamları bankalara bağımsızlık kazandırsa da kritik hizmetlerin güvenliğini tehlikeye atabilir."
        },
        answer: "A",
        explanation: "Özne: 'The migration of mission-critical banking services to multi-cloud environments' (Görev açısından kritik bankacılık hizmetlerinin çoklu bulut ortamlarına taşınması). Yüklem: 'provides high availability while mitigating vendor lock-in risks' (tedarikçiye bağımlılık risklerini azaltırken yüksek erişilebilirlik sağlar). Tam karşılık A'dır."
      },
      {
        id: "m3_q35",
        category: "Translation",
        tag: "TR -> EN",
        question: "Yapay zeka tabanlı kredi skorlama modelleri, geleneksel yöntemlere kıyasla temerrüt riskini çok daha yüksek bir doğrulukla tahmin edebilmektedir.",
        options: {
          A: "Artificial intelligence-based credit scoring models can predict default risk with much higher accuracy compared to traditional methods.",
          B: "Compared to modern AI systems, traditional credit scoring models fail to predict default risks accurately.",
          C: "Because default risk is difficult to predict, financial institutions are replacing human evaluators with AI models.",
          D: "AI-driven algorithms have eliminated default risk completely by replacing all traditional evaluation methods.",
          E: "Traditional scoring methods are still preferred over AI models despite their lower predictive accuracy."
        },
        answer: "A",
        explanation: "Özne: 'Yapay zeka tabanlı kredi skorlama modelleri' (Artificial intelligence-based credit scoring models). Yüklem: 'tahmin edebilmektedir' (can predict). 'default risk with much higher accuracy compared to traditional methods' (geleneksel yöntemlere kıyasla temerrüt riskini çok daha yüksek bir doğrulukla). Doğru cevap A'dır."
      },
      {
        id: "m3_q36",
        category: "Translation",
        tag: "TR -> EN",
        question: "Merkez bankası gösterge faiz oranını düşürdüğünde, ticari kredilere olan talep genellikle artar ve bu durum ekonomik büyümeyi teşvik eder.",
        options: {
          A: "When the central bank lowers the benchmark interest rate, demand for commercial loans generally increases, thereby stimulating economic growth.",
          B: "Because economic growth requires stimulation, central banks are forced to reduce commercial loan interest rates.",
          C: "Lowering benchmark interest rates will only increase loan demand if commercial banks offer favorable terms.",
          D: "While commercial loan demand increases, central banks keep benchmark interest rates at historically low levels.",
          E: "The demand for commercial credit cannot stimulate growth unless the central bank lowers the benchmark rate."
        },
        answer: "A",
        explanation: "'When the central bank lowers the benchmark interest rate' (Merkez bankası gösterge faiz oranını düşürdüğünde). 'demand for commercial loans generally increases, thereby stimulating economic growth' (ticari kredilere olan talep genellikle artar ve bu durum ekonomik büyümeyi teşvik eder). Birebir tam çeviri A'dır."
      },

      // 37-40 Reading Comprehension
      {
        id: "m3_q37",
        category: "Reading",
        tag: "Paragraf 1/4",
        passage: "Quantum computing poses what cryptographers describe as an existential threat to modern asymmetric encryption. The cryptographic underpinnings of virtually all contemporary interbank telecommunication, digital signatures, and blockchain protocols rely fundamentally on public-key algorithms such as RSA and Elliptic Curve Cryptography (ECC). The mathematical security of these algorithms rests upon the computational intractability of prime factorization or discrete logarithms—problems that would take conventional supercomputers thousands of years to solve. However, Shor's algorithm, a quantum mathematical formulation published in 1994, demonstrated that a fault-tolerant quantum computer running with several thousand logical qubits could theoretically crack these mathematical barriers within mere minutes. Recognizing the catastrophic implications of 'Harvest Now, Decrypt Later' espionage campaigns—wherein adversary nation-states intercept and hoard encrypted sovereign banking traffic today to decrypt once quantum capabilities mature—monetary authorities and central banks are proactively spearheading transitions to Post-Quantum Cryptography (PQC). Nonetheless, migrating global core banking mainframes to lattice-based quantum-resistant algorithms presents colossal engineering challenges, including significantly larger key sizes, increased computational overhead, and the daunting complexity of maintaining backward compatibility.",
        question: "Why do current public-key algorithms like RSA provide security against conventional supercomputers?",
        options: {
          A: "Because they rely on mathematical problems, such as prime factorization, that take classical computers millennia to solve.",
          B: "Because they do not require any mathematical calculations to encrypt transmission payloads.",
          C: "Because quantum computers have already proven incapable of executing Shor's algorithm.",
          D: "Because national central banks maintain exclusive secret backdoors to all RSA keys.",
          E: "Because they were developed specifically after the widespread advent of quantum computing."
        },
        answer: "A",
        explanation: "Metnin 3. cümlesinde açıkça belirtilmiştir: 'The mathematical security of these algorithms rests upon the computational intractability of prime factorization or discrete logarithms—problems that would take conventional supercomputers thousands of years to solve.'"
      },
      {
        id: "m3_q38",
        category: "Reading",
        tag: "Paragraf 2/4",
        question: "What is meant by the phrase 'Harvest Now, Decrypt Later' in the context of the passage?",
        options: {
          A: "Adversaries are storing encrypted financial data today with the intention of decrypting it when quantum computers become operational.",
          B: "Banks are harvesting agricultural loan profits today to invest in software development later.",
          C: "Cyber criminals delete encrypted data immediately so that banks cannot inspect the breach.",
          D: "Central banks are delaying encryption upgrades until all conventional computers are decommissioned.",
          E: "Financial institutions harvest hardware components from discarded server clusters."
        },
        answer: "A",
        explanation: "Metindeki şu ifadeye bakınız: '...wherein adversary nation-states intercept and hoard encrypted sovereign banking traffic today to decrypt once quantum capabilities mature' (Düşman devletlerin bugünden şifreli verileri toplayıp depolaması ve kuantum teknolojisi olgunlaştığında çözmeyi hedeflemesi)."
      },
      {
        id: "m3_q39",
        category: "Reading",
        tag: "Paragraf 3/4",
        question: "According to the passage, which of the following is a major challenge in migrating to Post-Quantum Cryptography (PQC)?",
        options: {
          A: "PQC algorithms completely lack mathematical proofs and cannot run on digital computers.",
          B: "PQC implementations require substantially larger cryptographic key sizes and increased processing overhead.",
          C: "Quantum computers will make it illegal for central banks to use encryption protocols.",
          D: "Modern software engineers refuse to work on lattice-based cryptographic architectures.",
          E: "All existing fiber-optic undersea telecommunication cables must be physically replaced."
        },
        answer: "B",
        explanation: "Metnin son cümlesinde PQC'ye geçişin zorlukları sayılmıştır: '...including significantly larger key sizes, increased computational overhead, and the daunting complexity of maintaining backward compatibility' (Daha büyük anahtar boyutları, artan işlem yükü ve geriye dönük uyumluluk karmaşıklığı)."
      },
      {
        id: "m3_q40",
        category: "Reading",
        tag: "Paragraf 4/4",
        question: "The word 'intractability' in the passage is closest in meaning to --------- .",
        options: {
          A: "unsolvability / extreme difficulty",
          B: "simplicity",
          C: "popularity",
          D: "futility",
          E: "redundancy"
        },
        answer: "A",
        explanation: "'Intractability' bilgisayar bilimlerinde ve matematikte bir problemin geleneksel algoritmalarla çözülmesinin imkansız veya aşırı zor/pratikte imkansız olması (extreme difficulty / unsolvability) durumudur."
      }
    ]
  }
};

// Kategori Bazlı Ek Soru Bankası (Hızlı pratik için)
const CATEGORY_DRILLS = {
  "phrasal": [
    {
      id: "cat_p1",
      category: "Phrasal Verbs",
      question: "The risk management committee decided to --------- the planned bond issuance until the market turbulence subsided.",
      options: { A: "put off", B: "give up", C: "look after", D: "run into", E: "break down" },
      answer: "A",
      explanation: "'Put off' ertelemek demektir (postpone). Dalgalanma yatışana kadar tahvil ihracını erteleme kararı almışlardır."
    },
    {
      id: "cat_p2",
      category: "Phrasal Verbs",
      question: "Automated transaction monitoring systems are specifically configured to --------- suspicious laundering schemes.",
      options: { A: "root out", B: "fall through", C: "get along with", D: "turn down", E: "hold on" },
      answer: "A",
      explanation: "'Root out' kökünü kazımak, bulup ortaya çıkarmak, yok etmek (eradicate / expose) anlamına gelir."
    },
    {
      id: "cat_p3",
      category: "Phrasal Verbs",
      question: "The commercial bank had to --------- its excessive reliance on short-term foreign borrowing.",
      options: { A: "cut back on", B: "stand by", C: "look down upon", D: "catch up with", E: "check out of" },
      answer: "A",
      explanation: "'Cut back on' kısmak, azaltmak (reduce) demektir."
    },
    {
      id: "cat_p4",
      category: "Phrasal Verbs",
      question: "The corporate client had to --------- valuable commercial real estate to secure the multi-million dollar credit facility.",
      options: { A: "put up", B: "bring up", C: "call off", D: "look up", E: "give in" },
      answer: "A",
      explanation: "'Put up collateral / property' teminat olarak göstermek, ortaya koymak demektir."
    }
  ],
  "conjunctions": [
    {
      id: "cat_c1",
      category: "Conjunctions",
      question: "--------- the global semiconductor shortage hindered hardware production, banking app software development continued unabated.",
      options: { A: "Even though", B: "Because", C: "Consequently", D: "In order that", E: "Unless" },
      answer: "A",
      explanation: "'Even though' (-e rağmen). Donanım üretiminin aksamasına rağmen, yazılım geliştirme kesintisiz devam etmiştir."
    },
    {
      id: "cat_c2",
      category: "Conjunctions",
      question: "Financial institutions maintain geographically dispersed disaster recovery centers --------- a catastrophic earthquake strike the capital city.",
      options: { A: "in case", B: "despite", C: "so that", D: "whereas", E: "although" },
      answer: "A",
      explanation: "'In case' (... ihtimaline karşı / tedbir olarak). Deprem vurması ihtimaline karşı felaket kurtarma merkezleri tutulur."
    },
    {
      id: "cat_c3",
      category: "Conjunctions",
      question: "The banking platform will execute real-time settlements --------- the participant institutions maintain adequate collateral reserves.",
      options: { A: "as long as", B: "lest", C: "even if", D: "although", E: "in spite of" },
      answer: "A",
      explanation: "'As long as' (-dığı sürece / şartıyla). Yeterli teminat tutulduğu sürece gerçek zamanlı mutabakat yapılacaktır."
    }
  ],
  "grammar": [
    {
      id: "cat_g1",
      category: "Grammar",
      question: "Had the IT department implemented the zero-trust architecture, the ransomware --------- into the core customer database.",
      options: { A: "would not have penetrated", B: "does not penetrate", C: "will not penetrate", D: "had not penetrated", E: "is not penetrating" },
      answer: "A",
      explanation: "Devrik Type 3 Şart: Had + S + V3 yapısının devamında 'would not have + V3' gelir."
    },
    {
      id: "cat_g2",
      category: "Grammar",
      question: "Seldom --------- such aggressive monetary tightening in emerging markets without triggering an economic contraction.",
      options: { A: "have central banks implemented", B: "central banks have implemented", C: "implemented central banks", D: "central banks implement", E: "are central banks implementing" },
      answer: "A",
      explanation: "'Seldom' devrik cümle başlatır: Seldom + have/has + subject + V3."
    }
  ],
  "vocabulary": [
    {
      id: "cat_v1",
      category: "Vocabulary",
      question: "A bank's --------- represents the ease with which its assets can be converted into ready cash without loss of value.",
      options: { A: "liquidity", B: "insolvency", C: "liability", D: "deficit", E: "depreciation" },
      answer: "A",
      explanation: "'Liquidity' (likidite), bir varlığın değer kaybetmeden hızla nakde çevrilebilme kabiliyetidir."
    },
    {
      id: "cat_v2",
      category: "Vocabulary",
      question: "To prevent potential conflicts of interest, an ethical --------- wall is established between investment banking and equity research departments.",
      options: { A: "Chinese", B: "opaque", C: "redundant", D: "fragile", E: "spurious" },
      answer: "A",
      explanation: "'Chinese wall' finansal piyasalarda ve hukukta departmanlar arası bilgi sızmasını ve çıkar çatışmasını engelleyen etik/bilgi engelini tanımlayan terimdir."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EXAM_DATA, CATEGORY_DRILLS };
}

