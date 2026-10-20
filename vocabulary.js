// Ziraat Bankası Uzman Yardımcılığı Sınavı Kelime Kartları Veritabanı
// Bankacılık, Finans, Bilişim, Yapay Zeka ve En Sık Çıkan Phrasal Verbs

const VOCAB_DATA = [
  // --- BANKACILIK & FİNANS ---
  {
    id: "v1",
    word: "Liquidity",
    category: "Banking & Finance",
    pos: "Noun",
    meaning: "Likidite (Bir varlığın değer kaybetmeden hızla nakde çevrilebilme kolaylığı)",
    sentence: "The Central Bank injected emergency liquidity into the interbank money market to prevent interest rate spikes.",
    sentenceTr: "Merkez Bankası, faiz artışlarını önlemek için bankalararası para piyasasına acil likidite enjekte etti.",
    synonyms: "Cash flow, available funds, solvency",
    tip: "'Liquidity buffer' veya 'liquidity crisis' tamlamaları sınavın vazgeçilmezidir."
  },
  {
    id: "v2",
    word: "Volatility",
    category: "Banking & Finance",
    pos: "Noun",
    meaning: "Oynaklık, dalgalanma (Fiyatların hızlı ve öngörülemez şekilde değişmesi)",
    sentence: "High foreign exchange volatility discourages long-term capital investments from foreign institutions.",
    sentenceTr: "Yüksek döviz kuru oynaklığı, yabancı kurumların uzun vadeli sermaye yatırımlarını caydırır.",
    synonyms: "Instability, fluctuation, turbulence, unpredictability",
    tip: "Ziraat sınavlarında 'market volatility' ve 'volatile assets' şeklinde sıfat haliyle de çok sık çıkar."
  },
  {
    id: "v3",
    word: "Mitigate",
    category: "Banking & Finance",
    pos: "Verb",
    meaning: "Hafifletmek, etkisini azaltmak, yatıştırmak",
    sentence: "Banks diversify their loan portfolios across various sectors to mitigate the risk of default.",
    sentenceTr: "Bankalar, temerrüt riskini hafifletmek için kredi portföylerini çeşitli sektörlere yayarak çeşitlendirir.",
    synonyms: "Alleviate, reduce, lessen, diminish, ease",
    tip: "'Mitigate risk' veya 'mitigate losses' kalıbı hem kelime hem bağlaç sorularında kilit kelimedir."
  },
  {
    id: "v4",
    word: "Hedge",
    category: "Banking & Finance",
    pos: "Verb / Noun",
    meaning: "Riskten korunmak / Finansal riskten korunma işlemi",
    sentence: "Corporate treasurers frequently use forward contracts to hedge against sharp currency fluctuations.",
    sentenceTr: "Şirket finans yöneticileri, keskin döviz dalgalanmalarına karşı riskten korunmak için vadeli işlem sözleşmelerini sıklıkla kullanır.",
    synonyms: "Protect, safeguard, shield, cover",
    tip: "'Hedge against ...' edat kalıbı (against ile kullanılır) banka sınavlarında standart sorudur."
  },
  {
    id: "v5",
    word: "Collateral",
    category: "Banking & Finance",
    pos: "Noun",
    meaning: "Teminat, ipotek (Kredinin geri ödenmesini garanti altına almak için verilen varlık)",
    sentence: "The commercial bank required the borrower to pledge real estate properties as collateral for the business loan.",
    sentenceTr: "Ticari banka, borçludan işletme kredisi için gayrimenkullerini teminat olarak göstermesini talep etti.",
    synonyms: "Security, guarantee, pledge, assurance",
    tip: "'Pledge as collateral' veya 'collateralized loan' kalıplarına dikkat edin."
  },
  {
    id: "v6",
    word: "Default",
    category: "Banking & Finance",
    pos: "Verb / Noun",
    meaning: "Temerrüde düşmek, borcunu vadesinde ödeyememek / Temerrüt",
    sentence: "If the borrower defaults on three consecutive installments, legal foreclosure proceedings begin automatically.",
    sentenceTr: "Eğer borçlu üst üste üç taksiti ödeyemeyip temerrüde düşerse, yasal icra takibi otomatik olarak başlar.",
    synonyms: "Fail to pay, non-payment, insolvency, breach",
    tip: "'Default on loans/debt' edatıyla birlikte 'on' alır."
  },
  {
    id: "v7",
    word: "Discrepancy",
    category: "Banking & Finance",
    pos: "Noun",
    meaning: "Uyuşmazlık, tutarsızlık, ayrılık",
    sentence: "An internal audit discovered a substantial discrepancy between electronic branch records and vault reserves.",
    sentenceTr: "Yapılan iç denetim, elektronik şube kayıtları ile kasa rezervleri arasında önemli bir tutarsızlık tespit etti.",
    synonyms: "Inconsistency, divergence, variance, mismatch",
    tip: "Müfettişlik ve Uzmanlık sınavlarında 'discrepancy between A and B' kalıbıyla sorulur."
  },
  {
    id: "v8",
    word: "Yield",
    category: "Banking & Finance",
    pos: "Noun / Verb",
    meaning: "Getiri, verim / Üretmek, getiri sağlamak",
    sentence: "Government bond yields rose sharply after the central bank indicated potential benchmark rate hikes.",
    sentenceTr: "Merkez bankasının olası gösterge faiz artışlarına işaret etmesinin ardından devlet tahvili getirileri hızla yükseldi.",
    synonyms: "Return, revenue, earnings, dividend",
    tip: "'Bond yield' (tahvil getirisi) ve 'yield curve' (verim eğrisi) finans metinlerinde sıkça geçer."
  },
  {
    id: "v9",
    word: "Leverage",
    category: "Banking & Finance",
    pos: "Noun / Verb",
    meaning: "Kaldıraç (Borçlanarak yatırım gücünü artırma) / Avantaj sağlamak",
    sentence: "Excessive financial leverage can magnify profits during economic booms, but it threatens insolvency during downturns.",
    sentenceTr: "Aşırı finansal kaldıraç, ekonomik patlama dönemlerinde kârı katlayabilir ancak durgunluklarda iflas tehlikesi yaratır.",
    synonyms: "Gearing, borrowing, influence, advantage",
    tip: "'De-leverage' (kaldıraç azaltma/borç kapatma) terimi de bilinmelidir."
  },
  {
    id: "v10",
    word: "Solvency",
    category: "Banking & Finance",
    pos: "Noun",
    meaning: "Ödeme gücü (Borçlarını uzun vadede ödeyebilme durumu)",
    sentence: "Stress testing simulates severe economic recessions to verify whether systemic banks can maintain solvency.",
    sentenceTr: "Stres testleri, sistemsel bankaların ödeme güçlerini koruyup koruyamayacağını doğrulamak için şiddetli durgunlukları simüle eder.",
    synonyms: "Financial stability, creditworthiness, sound condition",
    tip: "Zıt anlamlısı 'Insolvency' (iflas, borca batıklık durumu)."
  },

  // --- BİLİŞİM, YAPAY ZEKA & SİBER GÜVENLİK ---
  {
    id: "v11",
    word: "Vulnerability",
    category: "IT & Cybersecurity",
    pos: "Noun",
    meaning: "Güvenlik açığı, zafiyet, savunmasızlık",
    sentence: "White-hat hackers identified a critical zero-day vulnerability in the interbank API gateway.",
    sentenceTr: "Beyaz şapkalı bilgisayar korsanları, bankalararası API ağ geçidinde kritik bir sıfırıncı gün güvenlik açığı tespit etti.",
    synonyms: "Flaw, weakness, loophole, susceptibility",
    tip: "'Patch a vulnerability' (açığı yamamak) ve 'vulnerable to attacks' (-e karşı savunmasız olmak)."
  },
  {
    id: "v12",
    word: "Robust",
    category: "IT & Cybersecurity",
    pos: "Adjective",
    meaning: "Sağlam, dirençli, güçlü, dayanıklı",
    sentence: "Modern core banking systems require robust cryptographic protocols capable of thwarting cyber incursions.",
    sentenceTr: "Modern ana bankacılık sistemleri, siber saldırıları püskürtebilecek güçlü kriptografik protokollere ihtiyaç duyar.",
    synonyms: "Resilient, sturdy, strong, durable, invulnerable",
    tip: "'Robust security infrastructure' (güçlü güvenlik altyapısı) ifadesi sık geçer."
  },
  {
    id: "v13",
    word: "Redundancy",
    category: "IT & Cybersecurity",
    pos: "Noun",
    meaning: "Yedeklilik (Sistem sürekliliği için bileşenlerin yedeğini tutma) / Gereksizlik",
    sentence: "By implementing geographic redundancy across three data centers, the bank eliminated single points of failure.",
    sentenceTr: "Üç veri merkezi arasında coğrafi yedeklilik uygulayarak banka tek hata noktalarını ortadan kaldırdı.",
    synonyms: "Duplication, backup, failover, surplus",
    tip: "Bilişim alanında 'yedeklilik' (olumlu bir şey); genel dilde ise 'fazlalık/gereksizlik' anlamına gelir."
  },
  {
    id: "v14",
    word: "Seamless",
    category: "IT & Cybersecurity",
    pos: "Adjective",
    meaning: "Sorunsuz, kesintisiz, pürüzsüz",
    sentence: "The new mobile banking interface offers a seamless user journey from account creation to instant loan approval.",
    sentenceTr: "Yeni mobil bankacılık arayüzü, hesap açılışından anında kredi onayına kadar kesintisiz bir kullanıcı yolculuğu sunuyor.",
    synonyms: "Smooth, continuous, uninterrupted, frictionless",
    tip: "'Seamless integration' (sorunsuz entegrasyon) teknoloji metinlerinin favorisidir."
  },
  {
    id: "v15",
    word: "Anomaly",
    category: "IT & Cybersecurity",
    pos: "Noun",
    meaning: "Anomali, olağandışılık, sapma, kuraldışılık",
    sentence: "The fraud monitoring AI flags any behavioral anomaly, such as rapid international transactions from new devices.",
    sentenceTr: "Dolandırıcılık izleme yapay zekası, yeni cihazlardan yapılan hızlı uluslararası işlemler gibi her türlü davranışsal anomaliyi işaretler.",
    synonyms: "Irregularity, aberration, deviation, abnormality",
    tip: "Çoğulu 'anomalies' dir. 'Detect anomalies' kalıbı sık sorulur."
  },
  {
    id: "v16",
    word: "Scalability",
    category: "IT & Cybersecurity",
    pos: "Noun",
    meaning: "Ölçeklenebilirlik (Artan yük altında sistemin performans kaybetmeden büyüme yeteneği)",
    sentence: "Microservice cloud architectures provide the elastic scalability needed to handle millions of Black Friday transactions.",
    sentenceTr: "Mikroservis bulut mimarileri, milyonlarca Efsane Cuma işlemini yönetmek için gereken esnek ölçeklenebilirliği sağlar.",
    synonyms: "Expandability, elasticity, flexibility, adaptability",
    tip: "Bilişim grubu adaylarının paragraf ve teknik terim sorularında çok sık karşılaştığı bir kavramdır."
  },
  {
    id: "v17",
    word: "Cryptographic",
    category: "IT & Cybersecurity",
    pos: "Adjective",
    meaning: "Kriptografik, şifreleme ile ilgili",
    sentence: "End-to-end cryptographic encryption ensures that customer login credentials cannot be intercepted in transit.",
    sentenceTr: "Uçtan uca kriptografik şifreleme, müşteri giriş bilgilerinin aktarım sırasında ele geçirilmemesini garanti eder.",
    synonyms: "Encrypted, encoded, secure, ciphered",
    tip: "'Cryptographic key' (şifreleme anahtarı) ve 'cryptographic handshake'."
  },
  {
    id: "v18",
    word: "Thwart",
    category: "IT & Cybersecurity",
    pos: "Verb",
    meaning: "Püskürtmek, engellemek, boşa çıkarmak",
    sentence: "Intrusion detection systems effectively thwarted an attempted distributed denial-of-service (DDoS) attack.",
    sentenceTr: "Saldırı tespit sistemleri, hedeflenen bir dağıtık hizmet engelleme (DDoS) saldırısını etkili bir şekilde boşa çıkardı.",
    synonyms: "Prevent, foil, obstruct, derail, counter",
    tip: "Siber güvenlik ve bankacılık metinlerinde saldırıları engellemek anlamında 'foil / thwart' çok sevilir."
  },
  {
    id: "v19",
    word: "Immutability",
    category: "IT & Cybersecurity",
    pos: "Noun",
    meaning: "Değişmezlik, değiştirilemezlik (Verinin silinemez veya üzerinde oynanamaz olması)",
    sentence: "The immutability of distributed ledgers prevents malicious actors from altering historical ledger balances.",
    sentenceTr: "Dağıtık defterlerin değişmezliği, kötü niyetli aktörlerin geçmiş defter bakiyelerini değiştirmesini önler.",
    synonyms: "Permanence, unalterability, stability, fixedness",
    tip: "Blockchain ve veri güvenliği sorularında kilit terimdir."
  },
  {
    id: "v20",
    word: "Breach",
    category: "IT & Cybersecurity",
    pos: "Noun / Verb",
    meaning: "İhlal, delme, sızıntı / İhlal etmek, güvenlik duvarını aşmak",
    sentence: "The financial institution suffered a catastrophic data breach when unauthorized credentials were used.",
    sentenceTr: "Yetkisiz giriş bilgileri kullanıldığında finans kuruluşu felaket boyutunda bir veri ihlali yaşadı.",
    synonyms: "Violation, intrusion, infringement, leak, compromise",
    tip: "'Data breach' (veri sızıntısı/ihlali) ve 'breach of contract' (sözleşme ihlali)."
  },

  // --- EN ÇOK SORULAN PHRASAL VERBS ---
  {
    id: "v21",
    word: "Account for",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "1) Bir oranı/yüzdeyi oluşturmak, tekabül etmek. 2) Açıklamak, izah etmek.",
    sentence: "Mobile banking transactions now account for over 80 percent of daily retail volume.",
    sentenceTr: "Mobil bankacılık işlemleri artık günlük bireysel işlem hacminin yüzde 80'inden fazlasını oluşturmaktadır.",
    synonyms: "Make up, constitute, represent, explain",
    tip: "ZİRAAT SINAVLARININ 1 NUMARALI PHRASAL VERB'ÜDÜR! Yüzde veya oran gördüyseniz ilk adayınız bu olmalı."
  },
  {
    id: "v22",
    word: "Carry out",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Yürütmek, gerçekleştirmek, uygulamak (denetim, araştırma, operasyon)",
    sentence: "Internal bank auditors carry out quarterly compliance inspections across all branches.",
    sentenceTr: "İç banka denetçileri, tüm şubelerde üç aylık mevzuat uyum denetimleri yürütmektedir.",
    synonyms: "Execute, conduct, perform, implement",
    tip: "'Carry out research / survey / audit / test / operation' ile birlikte kullanılır."
  },
  {
    id: "v23",
    word: "Bring about",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Neden olmak, yol açmak, beraberinde getirmek",
    sentence: "Technological disruptions have brought about radical changes in consumer banking habits.",
    sentenceTr: "Teknolojik yenilikler, tüketici bankacılık alışkanlıklarında radikal değişikliklere yol açmıştır.",
    synonyms: "Cause, lead to, trigger, result in",
    tip: "Neden-sonuç sorularında 'lead to' ve 'result in' ile eşanlamlıdır."
  },
  {
    id: "v24",
    word: "Stem from",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "-den kaynaklanmak, -den ileri gelmek",
    sentence: "Much of the financial instability stems from opaque derivatives trading in unregulated markets.",
    sentenceTr: "Finansal istikrarsızlığın büyük bir kısmı, düzenlenmemiş piyasalardaki şeffaf olmayan türev ticaretinden kaynaklanmaktadır.",
    synonyms: "Originate from, derive from, arise from",
    tip: "'Stem from' nedenin ne olduğunu belirtir (X stems from Y = X, Y'den kaynaklanır)."
  },
  {
    id: "v25",
    word: "Call off",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "İptal etmek (Toplantı, birleşme, işlem)",
    sentence: "The executive board had to call off the international bond roadshow due to unexpected geopolitical tensions.",
    sentenceTr: "Yönetim kurulu, beklenmedik jeopolitik gerilimler nedeniyle uluslararası tahvil tanıtım turunu iptal etmek zorunda kaldı.",
    synonyms: "Cancel, abandon, abort, scrap",
    tip: "'Put off' (ertelemek) ile karıştırılmamalıdır! Call off = İptal etmek."
  },
  {
    id: "v26",
    word: "Put off",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Ertelemek, sonraya bırakmak",
    sentence: "The central bank decided to put off the interest rate cut until inflation expectations stabilized.",
    sentenceTr: "Merkez bankası, enflasyon beklentileri istikrar kazanana kadar faiz indirimini erteleme kararı aldı.",
    synonyms: "Postpone, delay, defer, hold off",
    tip: "Call off (iptal) vs Put off (erteleme) ayrımı sınavlarda sıkça test edilir."
  },
  {
    id: "v27",
    word: "Cope with",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Başa çıkmak, üstesinden gelmek, göğüs germek",
    sentence: "Many regional lenders struggled to cope with the sudden surge in deposit withdrawal requests.",
    sentenceTr: "Birçok bölgesel kredi kuruluşu, mevduat çekme taleplerindeki ani artışla başa çıkmakta zorlandı.",
    synonyms: "Handle, deal with, manage, tackle, overcome",
    tip: "Preposition sorularında 'with' edatı ile test edilir (cope WITH)."
  },
  {
    id: "v28",
    word: "Rely on / Rest on",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Güvenmek, bel bağlamak, -e dayanmak",
    sentence: "Modern banking operations rely heavily on uninterrupted cloud service availability.",
    sentenceTr: "Modern bankacılık operasyonları büyük ölçüde kesintisiz bulut hizmeti erişilebilirliğine dayanır.",
    synonyms: "Depend on, count on, hinge on",
    tip: "Hinge on, count on ve rely on daima 'on' edatı ile kullanılır."
  },
  {
    id: "v29",
    word: "Phase out",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Aşamalı olarak kullanımdan kaldırmak, sonlandırmak",
    sentence: "Commercial banks are phasing out magnetic stripe cards in favor of contactless chip technology.",
    sentenceTr: "Ticari bankalar, temassız çip teknolojisi lehine manyetik şeritli kartları aşamalı olarak kullanımdan kaldırıyor.",
    synonyms: "Discontinue, withdraw gradually, decommission",
    tip: "Teknoloji dönüşümü metinlerinde 'phase out old technology' şeklinde çok geçer."
  },
  {
    id: "v30",
    word: "Do away with",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Ortadan kaldırmak, yürürlükten kaldırmak, son vermek",
    sentence: "To streamline operations, the bank chose to do away with redundant paper-based approval forms.",
    sentenceTr: "İşlemleri hızlandırmak için banka, gereksiz kağıt tabanlı onay formlarını ortadan kaldırmayı seçti.",
    synonyms: "Abolish, eliminate, discard, get rid of",
    tip: "3 kelimeli phrasal verb sorularında sıkça doğru cevaptır."
  },

  // --- AKADEMİK & KRİTİK BAĞLAÇ KELİMELERİ ---
  {
    id: "v31",
    word: "Precedent",
    category: "Core Academic",
    pos: "Noun",
    meaning: "Emsal, öncül, geçmiş örnek ('Unprecedented' = Benzeri görülmemiş)",
    sentence: "The government intervention set a dangerous precedent for future bailouts of failing institutions.",
    sentenceTr: "Hükümet müdahalesi, batan kurumların gelecekteki kurtarma operasyonları için tehlikeli bir emsal oluşturdu.",
    synonyms: "Example, benchmark, prior case, model",
    tip: "'Unprecedented' (eşi benzeri görülmemiş) sıfatı sınavlarda sürekli doğru şık olur."
  },
  {
    id: "v32",
    word: "Substantial",
    category: "Core Academic",
    pos: "Adjective",
    meaning: "Önemli, büyük miktarda, hatırı sayılır",
    sentence: "The merger will generate substantial cost savings in operational IT infrastructure.",
    sentenceTr: "Birleşme, operasyonel bilişim altyapısında hatırı sayılır maliyet tasarrufu sağlayacaktır.",
    synonyms: "Considerable, significant, extensive, sizeable",
    tip: "'Substantial growth / substantial difference / substantial amount'."
  },
  {
    id: "v33",
    word: "Compensate",
    category: "Core Academic",
    pos: "Verb",
    meaning: "Tazmin etmek, telafi etmek, bedelini ödemek",
    sentence: "Banks must compensate customers whose accounts were compromised due to automated system errors.",
    sentenceTr: "Bankalar, otomatik sistem hataları nedeniyle hesapları tehlikeye giren müşterileri tazmin etmek zorundadır.",
    synonyms: "Reimburse, make up for, indemnify, offset",
    tip: "'Compensate for' edatı ile kullanılır."
  },
  {
    id: "v34",
    word: "Curtail",
    category: "Core Academic",
    pos: "Verb",
    meaning: "Kısıtlamak, kısmak, azaltmak, sınırlandırmak",
    sentence: "To curb inflation, the central bank decided to curtail commercial lending quotas.",
    sentenceTr: "Enflasyonu dizginlemek için merkez bankası ticari kredi kotalarını kısıtlama kararı aldı.",
    synonyms: "Restrict, limit, reduce, trim, cut back",
    tip: "'Curtail expenditure / curtail lending' (harcamaları/kredileri kısmak)."
  },
  {
    id: "v35",
    word: "Plausible",
    category: "Core Academic",
    pos: "Adjective",
    meaning: "Makul, mantıklı, akla yatkın, olası",
    sentence: "The treasury presented a plausible fiscal plan that convinced international credit rating agencies.",
    sentenceTr: "Hazine, uluslararası kredi derecelendirme kuruluşlarını ikna eden makul bir mali plan sundu.",
    synonyms: "Credible, reasonable, believable, feasible, viable",
    tip: "Zıt anlamlısı 'Implausible' (akıl almaz, imkansız)."
  },
  {
    id: "v36",
    word: "Deteriorate",
    category: "Core Academic",
    pos: "Verb",
    meaning: "Kötüleşmek, bozulmak, gerilemek",
    sentence: "If non-performing loans continue to rise, the bank's capital adequacy ratio will deteriorate significantly.",
    sentenceTr: "Eğer tahsili gecikmiş alacaklar artmaya devam ederse, bankanın sermaye yeterlilik rasyosu önemli ölçüde bozulacaktır.",
    synonyms: "Worsen, decline, degenerate, decay",
    tip: "Zıt anlamlısı 'Ameliorate / Improve' (iyileştirmek/iyileşmek)."
  },
  {
    id: "v37",
    word: "Indispensable",
    category: "Core Academic",
    pos: "Adjective",
    meaning: "Vazgeçilmez, elzem, zorunlu",
    sentence: "High-speed optical fiber connectivity is indispensable for high-frequency algorithmic trading.",
    sentenceTr: "Yüksek hızlı fiber optik bağlantı, yüksek frekanslı algoritmik ticaret için vazgeçilmezdir.",
    synonyms: "Essential, vital, crucial, necessary",
    tip: "Zıt anlamlısı 'Dispensable' (gözden çıkarılabilir, feda edilebilir)."
  },
  {
    id: "v38",
    word: "Aggravate / Exacerbate",
    category: "Core Academic",
    pos: "Verb",
    meaning: "Kötüleştirmek, şiddetlendirmek, vahim hale getirmek",
    sentence: "Raising interest rates too quickly during a recession can aggravate corporate bankruptcies.",
    sentenceTr: "Durgunluk sırasında faiz oranlarını çok hızlı artırmak şirket iflaslarını daha da kötüleştirebilir.",
    synonyms: "Worsen, intensify, inflame",
    tip: "Sınavların en sevilen iki çeldirici/doğru şık kelimesidir. İkisi de kötüleştirmek demektir."
  },
  {
    id: "v39",
    word: "Lucrative",
    category: "Banking & Finance",
    pos: "Adjective",
    meaning: "Kârlı, kazançlı, bol getiri sağlayan",
    sentence: "Wealth management services for high-net-worth clients represent the most lucrative division of the bank.",
    sentenceTr: "Varlıklı müşterilere yönelik servet yönetimi hizmetleri, bankanın en kârlı bölümünü temsil etmektedir.",
    synonyms: "Profitable, advantageous, gainful, rewarding",
    tip: "'A lucrative business/deal/market'."
  },
  {
    id: "v40",
    word: "Feasible",
    category: "Core Academic",
    pos: "Adjective",
    meaning: "Uygulanabilir, yapılabilir, gerçekleştirilebilir",
    sentence: "The engineering committee concluded that migrating the legacy core banking platform was technically feasible.",
    sentenceTr: "Mühendislik komitesi, eski ana bankacılık platformunu taşımanın teknik olarak uygulanabilir olduğu sonucuna vardı.",
    synonyms: "Viable, practicable, workable, achievable",
    tip: "'Feasibility study' (fizibilite / uygulanabilirlik çalışması) terimi buradan gelir."
  },
  {
    id: "v41",
    word: "Non-performing loan (NPL)",
    category: "Banking & Finance",
    pos: "Noun",
    meaning: "Tahsil edilemeyen / batık kredi (Vadesinde ödenmeyen kredi)",
    sentence: "The banking regulator mandated higher capital provisioning to cover the rise in non-performing loans.",
    sentenceTr: "Bankacılık düzenleme kurumu, batık kredilerdeki artışı karşılamak için daha yüksek sermaye karşılığı ayrılmasını zorunlu kıldı.",
    synonyms: "Bad debt, defaulted loan, impaired asset",
    tip: "Bankacılık sınavlarında 'NPL ratio' (batık kredi oranı) çok sorulur."
  },
  {
    id: "v42",
    word: "Creditworthiness",
    category: "Banking & Finance",
    pos: "Noun",
    meaning: "Kredi değerliliği, kredibilite (Borçlunun borcunu geri ödeme güvenilirliği)",
    sentence: "Underwriters analyze credit history and debt-to-income ratios to assess a corporation's creditworthiness.",
    sentenceTr: "Kredi uzmanları, bir şirketin kredi değerliliğini değerlendirmek için kredi geçmişini ve borç-gelir oranını analiz eder.",
    synonyms: "Financial reliability, solvency, standing",
    tip: "'Creditworthy' sıfat halidir (kredi verilmeye değer/güvenilir)."
  },
  {
    id: "v43",
    word: "Amortization",
    category: "Banking & Finance",
    pos: "Noun",
    meaning: "Amortisman, borcun taksitler halinde itfa edilmesi / eritilmesi",
    sentence: "The mortgage loan comes with a 20-year amortization schedule with fixed monthly payments.",
    sentenceTr: "Konut kredisi, sabit aylık ödemeli 20 yıllık bir itfa / geri ödeme planı ile gelmektedir.",
    synonyms: "Installment plan, debt paydown, depreciation",
    tip: "'Amortization schedule' (geri ödeme / itfa tablosu)."
  },
  {
    id: "v44",
    word: "Stagflation",
    category: "Banking & Finance",
    pos: "Noun",
    meaning: "Stagflasyon (Durgunluk ve yüksek enflasyonun aynı anda yaşanması)",
    sentence: "Central banks face a profound dilemma during stagflation, as raising rates curbs inflation but worsens unemployment.",
    sentenceTr: "Merkez bankaları stagflasyon döneminde derin bir ikilem yaşar; çünkü faiz artırmak enflasyonu dizginlerken işsizliği artırır.",
    synonyms: "Economic stagnation with inflation",
    tip: "İktisat ve bankacılık metinlerinin popüler terimidir: Stagnant growth + Inflation."
  },
  {
    id: "v45",
    word: "Securitize",
    category: "Banking & Finance",
    pos: "Verb",
    meaning: "Menkul kıymetleştirmek (Kredileri veya alacakları tahvil/tahvil benzeri senetlere dönüştürmek)",
    sentence: "Lenders package individual auto loans and securitize them into tradable bonds for institutional investors.",
    sentenceTr: "Kredi kuruluşları bireysel taşıt kredilerini paketleyip kurumsal yatırımcılar için ticarete konu tahvillere dönüştürür.",
    synonyms: "Convert into securities, collateralize",
    tip: "2008 küresel krizinin temel nedeni olan 'securitization' (menkul kıymetleştirme) kavramı."
  },
  {
    id: "v46",
    word: "Throughput",
    category: "IT & Cybersecurity",
    pos: "Noun",
    meaning: "İş çıkarma yeteneği, birim zamanda işlenen veri / işlem hacmi",
    sentence: "The new distributed ledger protocol achieves a transaction throughput of over 50,000 operations per second.",
    sentenceTr: "Yeni dağıtık defter protokolü, saniyede 50.000'den fazla işlem çıkarma kapasitesine ulaşmaktadır.",
    synonyms: "Processing capacity, output rate, volume",
    tip: "Bilişim metinlerinde 'latency' (gecikme) ile birlikte karşıt çift olarak sorulur."
  },
  {
    id: "v47",
    word: "Latency",
    category: "IT & Cybersecurity",
    pos: "Noun",
    meaning: "Gecikme süresi (Verinin bir noktadan diğerine iletilmesi arasındaki bekleme)",
    sentence: "High-frequency algorithmic trading requires ultra-low network latency measured in microseconds.",
    sentenceTr: "Yüksek frekanslı algoritmik ticaret, mikrosaniyelerle ölçülen ultra düşük ağ gecikmesi gerektirir.",
    synonyms: "Delay, lag, response time",
    tip: "'Low latency' (düşük gecikme süresi) en büyük avantajdır."
  },
  {
    id: "v48",
    word: "Concurrency",
    category: "IT & Cybersecurity",
    pos: "Noun",
    meaning: "Eşzamanlılık (Birden fazla işlemin aynı anda çalıştırılabilmesi)",
    sentence: "Database management systems employ locking mechanisms to manage concurrency and prevent dirty reads.",
    sentenceTr: "Veritabanı yönetim sistemleri, eşzamanlılığı yönetmek ve tutarsız okumaları önlemek için kilitleme mekanizmaları kullanır.",
    synonyms: "Parallelism, simultaneous execution",
    tip: "Veritabanı ve yazılım mimarisi sorularında temel kavramdır."
  },
  {
    id: "v49",
    word: "Deprecate",
    category: "IT & Cybersecurity",
    pos: "Verb",
    meaning: "Kullanımdan kaldırmak, gözden düşürmek (Yazılımda bir fonksiyonun artık önerilmemesi)",
    sentence: "The software engineering team decided to deprecate the legacy SOAP endpoints in favor of modern REST APIs.",
    sentenceTr: "Yazılım mühendisliği ekibi, modern REST API'ler lehine eski SOAP uç noktalarını kullanımdan kaldırma kararı aldı.",
    synonyms: "Phase out, discontinue, retire, obsolete",
    tip: "Yazılım güncellemelerinde 'deprecated feature' (kullanımı terk edilmiş özellik)."
  },
  {
    id: "v50",
    word: "Tokenization",
    category: "IT & Cybersecurity",
    pos: "Noun",
    meaning: "Jetonlaştırma / Tokenizasyon (Hassas kart bilgisinin rastgele bir simge/token ile değiştirilmesi)",
    sentence: "Payment gateways employ tokenization to protect customer credit card numbers during checkout.",
    sentenceTr: "Ödeme ağ geçitleri, ödeme sırasında müşteri kredi kartı numaralarını korumak için tokenizasyon kullanır.",
    synonyms: "Digital masking, substitution, anonymization",
    tip: "FinTech ve dijital bankacılık güvenlik metinlerinde sıkça geçer."
  },
  {
    id: "v51",
    word: "Iron out",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Pürüzleri gidermek, sorunları çözüme kavuşturmak",
    sentence: "Legal teams from both banks met to iron out the remaining contractual discrepancies.",
    sentenceTr: "Her iki bankanın hukuk ekipleri, sözleşmedeki kalan pürüzleri gidermek için bir araya geldi.",
    synonyms: "Resolve, settle, harmonize, clear up",
    tip: "'Iron out difficulties / problems / discrepancies'."
  },
  {
    id: "v52",
    word: "Rule out",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "İhtimal dışı bırakmak, göz ardı etmek, elemek",
    sentence: "The Central Bank governor refused to rule out further emergency rate hikes this quarter.",
    sentenceTr: "Merkez Bankası başkanı, bu çeyrekte ilave acil faiz artışlarını ihtimal dışı bırakmayı reddetti.",
    synonyms: "Exclude, dismiss, eliminate, preclude",
    tip: "Banka ve ekonomi haberlerinde 'cannot rule out...' (ihtimal dışı bırakılamaz) kalıbı çok yaygındır."
  },
  {
    id: "v53",
    word: "Weigh in on",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Görüş bildirmek, ağırlığını koymak, dahil olmak",
    sentence: "Prominent economists weighed in on the proposed artificial intelligence regulation in banking.",
    sentenceTr: "Önde gelen ekonomistler, bankacılıkta önerilen yapay zeka düzenlemesi hakkında görüş bildirdi.",
    synonyms: "Offer an opinion, contribute, comment on",
    tip: "Edat sorularında 'on' ile sorulur (weigh in ON)."
  },
  {
    id: "v54",
    word: "Scale back",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Ölçeğini daraltmak, küçültmek, kısmak",
    sentence: "Due to tightening liquidity conditions, commercial lenders decided to scale back mortgage issuance.",
    sentenceTr: "Daralan likidite koşulları nedeniyle ticari kredi kuruluşları konut kredisi ihracını küçültme kararı aldı.",
    synonyms: "Reduce, cut down, downsize, trim",
    tip: "'Scale back investments / operations / lending'."
  },
  {
    id: "v55",
    word: "Take over",
    category: "Phrasal Verbs",
    pos: "Phrasal Verb",
    meaning: "Devralmak, yönetimi ele geçirmek (şirket birleşmeleri ve satın almaları)",
    sentence: "The state sovereign fund took over the struggling regional lender to safeguard depositors.",
    sentenceTr: "Kamu varlık fonu, mevduat sahiplerini korumak için zor durumdaki bölgesel bankayı devraldı.",
    synonyms: "Acquire, assume control, annex",
    tip: "'Takeover bid' (şirket devralma teklifi) finans terimidir."
  },
  {
    id: "v56",
    word: "Scrutinize",
    category: "Core Academic",
    pos: "Verb",
    meaning: "En ince ayrıntısına kadar incelemek, didik didik etmek",
    sentence: "Bank examiners scrutinize high-volume foreign wire transactions for money laundering signals.",
    sentenceTr: "Banka müfettişleri, kara para aklama işaretleri için yüksek hacimli yurt dışı havale işlemlerini en ince ayrıntısına kadar inceler.",
    synonyms: "Examine closely, inspect, audit, investigate",
    tip: "'Scrutiny' isim halidir (close scrutiny = sıkı inceleme/denetim)."
  },
  {
    id: "v57",
    word: "Discretionary",
    category: "Core Academic",
    pos: "Adjective",
    meaning: "İsteğe bağlı, takdire bağlı, keyfi olmayan ama esnek",
    sentence: "Consumers curtail their discretionary spending on luxury goods during inflationary recessions.",
    sentenceTr: "Tüketiciler, enflasyonist durgunluk dönemlerinde lüks mallara yönelik keyfi / isteğe bağlı harcamalarını kısarlar.",
    synonyms: "Optional, voluntary, non-essential, flexible",
    tip: "'Discretionary spending' (zorunlu olmayan / keyfi harcama)."
  },
  {
    id: "v58",
    word: "Pivotal",
    category: "Core Academic",
    pos: "Adjective",
    meaning: "Kilit öneme sahip, can alıcı, merkezi rol oynayan",
    sentence: "Cloud security protocols play a pivotal role in maintaining trust in digital banking channels.",
    sentenceTr: "Bulut güvenlik protokolleri, dijital bankacılık kanallarına duyulan güvenin sürdürülmesinde kilit bir rol oynar.",
    synonyms: "Crucial, vital, critical, central, decisive",
    tip: "'Play a pivotal role in...' kalıbı yaygındır."
  },
  {
    id: "v59",
    word: "Unanimous",
    category: "Core Academic",
    pos: "Adjective",
    meaning: "Oybirliğiyle alınan, ittifakla gerçekleşen",
    sentence: "The monetary policy committee reached a unanimous decision to hold benchmark interest rates steady.",
    sentenceTr: "Para politikası kurulu, gösterge faiz oranlarını sabit tutma konusunda oybirliğiyle bir karara vardı.",
    synonyms: "Undivided, in complete agreement, united",
    tip: "'A unanimous decision / vote'."
  },
  {
    id: "v60",
    word: "Reluctance",
    category: "Core Academic",
    pos: "Noun",
    meaning: "İsteksizlik, gönülsüzlük, tereddüt",
    sentence: "Commercial banks demonstrated reluctance to lend to small enterprises without solid collateral.",
    sentenceTr: "Ticari bankalar, sağlam teminatı olmayan küçük işletmelere kredi verme konusunda isteksizlik gösterdi.",
    synonyms: "Hesitation, unwillingness, disinclination",
    tip: "'Reluctant to do something' (bir şey yapmaya isteksiz)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VOCAB_DATA };
}


