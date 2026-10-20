// Ziraat Bankası Uzman Yardımcılığı İngilizce Sınav Taktikleri & Gramer Rehberi

const TACTICS_DATA = [
  {
    id: "tactic_exam_rules",
    title: "1. Sınav Kuralları & Baraj Stratejisi (Hayati Bilgiler)",
    icon: "shield-alert",
    badge: "Kritik Kural",
    summary: "Ziraat Bankası Uzman Yardımcılığı sınavında elenmelerin en büyük sebebi İngilizce barajıdır.",
    content: `
      <h4>⚠️ BARAJ KURALI (%60 Kuralı):</h4>
      <p>Ziraat Bankası Uzman Yardımcılığı yazılı sınavında <strong>İngilizce testi 40 sorudur</strong> ve ayrı bir baraj niteliğindedir. Sınav kılavuzuna göre adayların bu bölümden <strong>en az %60 başarı</strong> (yani <strong>en az 24 DOĞRU</strong>) yapması ZORUNLUDUR. Alan bilginiz veya Genel Yeteneğiniz 100 tam puan olsa dahi, İngilizce'de 23 doğruda kalırsanız doğrudan elenirsiniz!</p>

      <h4>🎯 YANLIŞ DOĞRUYU GÖTÜRMEZ!</h4>
      <p>Ziraat Bankası (İstanbul Üniversitesi / AUZEF) sınavlarında <strong>yanlışlar doğruları götürmez</strong>. Bu nedenle:</p>
      <ul>
        <li><strong>Kesinlikle hiçbir soruyu boş bırakmayın!</strong> Kalan sürede emin olamadığınız sorulara mantıklı eleme yaparak mutlaka bir şık işaretleyin.</li>
        <li>Süre: 40 İngilizce sorusu için toplam 160 dakikalık genel oturum içinde ideal süre <strong>40-45 dakikadır</strong>.</li>
      </ul>
    `
  },
  {
    id: "tactic_conjunctions",
    title: "2. Bağlaçlar (Transitions) ve Zıtlık Formülleri",
    icon: "git-merge",
    badge: "6-8 Soru Garanti",
    summary: "Sınavda en çok soru çıkan ve en kolay net kazandıran bölümdür.",
    content: `
      <h4>1. Zıtlık (Contrast) Bağlaçları:</h4>
      <table class="tactic-table">
        <tr><th>Bağlaç Grubu</th><th>Kullanım Şekli</th><th>Örnek Yapı</th></tr>
        <tr><td><strong>Although / Even though / Though / While / Whereas</strong></td><td>Arkasından <u>Tam Cümle</u> (Özne + Fiil) alır.</td><td><em>Although inflation was high, banks made record profits.</em></td></tr>
        <tr><td><strong>Despite / In spite of / Notwithstanding</strong></td><td>Arkasından <u>İsim / V-ing</u> alır (Cümle almaz!).</td><td><em>Despite high inflation, economic growth continued.</em></td></tr>
        <tr><td><strong>However / Nevertheless / Nonetheless</strong></td><td>Noktalı virgül veya iki nokta arasında geçiş zarfıdır.</td><td><em>Inflation was high; however, exports increased.</em></td></tr>
      </table>

      <h4>2. Sebep - Sonuç (Cause & Effect):</h4>
      <ul>
        <li><strong>Cümle alanlar:</strong> Because, Since, As, Inasmuch as, Given that (+ S + V)</li>
        <li><strong>İsim alanlar:</strong> Due to, Owing to, Because of, On account of (+ Noun / V-ing)</li>
        <li><strong>Sonuç bildirenler:</strong> Therefore, Thus, Consequently, As a result, Hence</li>
      </ul>

      <h4>3. Olumsuz Şart (Unless & Lest):</h4>
      <ul>
        <li><strong>Unless = If not (-medikçe / -mezse):</strong> Unless yapısı kendi içinde olumsuzluk barındırır, yan cümlesinde 'not' kullanılmaz. <em>(Unless the bank upgrades its servers, it will crash.)</em></li>
        <li><strong>Lest (... olmasın diye / korkusuyla):</strong> Arkasından özne + should + V1 veya doğrudan yalın V1 alır. <em>(Lest any security breach occur...)</em></li>
      </ul>
    `
  },
  {
    id: "tactic_translation",
    title: "3. 15 Saniyede Çeviri Sorusu Çözme Tekniği",
    icon: "repeat",
    badge: "Pratik Hız Taktiki",
    summary: "Metnin tamamını okuyarak vakit kaybetmeyin! Özne ve Yüklem analizi ile 4 şıkkı anında eleyin.",
    content: `
      <h4>⚡ 3 Adımda Çözüm Metodu:</h4>
      <ol>
        <li><strong>ADIM 1: Ana Cümlenin Yüklemini (Tense) Bulun:</strong><br>
        İngilizce cümlenin ana fiilini tespit edin. Örneğin fiil <em>"has accelerated"</em> ise Türkçedeki karşılığı <em>"hızlandırmıştır"</em> olmalıdır. Şıklarda <em>"hızlandırmaktadır"</em>, <em>"hızlandırabilir"</em>, <em>"hızlandırdı"</em> gibi farklı zaman veya kipler varsa anında eleyin! Genellikle sadece bu adımla 3 şık elenir.</li>
        
        <li><strong>ADIM 2: Ana Cümlenin Öznesini Eşleştirin:</strong><br>
        Özne <em>"Central Bank"</em> ise Türkçe cümlenin de başında özne <em>"Merkez Bankası"</em> olmalıdır. Cümleyi nesneyle başlatan şıkları eleyin.</li>

        <li><strong>ADIM 3: Yan Cümle Bağlacını Kontrol Edin:</strong><br>
        Cümlede <em>"so that"</em> varsa <em>"-ebilsin diye / amacıyla"</em>; <em>"although"</em> varsa <em>"-e rağmen"</em>; <em>"by means of"</em> varsa <em>"aracılığıyla"</em> aranmalıdır.</li>
      </ol>
      <div class="tip-box">
        💡 <strong>Tüyo:</strong> Çeviri soruları sınavın en kolay 3-4 netidir. Asla metni Türkçe'ye çevirip baştan sona anlamlandırmaya çalışmayın; doğrudan Yüklem-Özne elemesi yapın!
      </div>
    `
  },
  {
    id: "tactic_reductions",
    title: "4. Kısaltmalar (Participle Reductions) Formülleri",
    icon: "scissors",
    badge: "İleri Düzey Gramer",
    summary: "Having V3, V-ing ve V3 kısaltmalarının sınavda sorulma mantığı.",
    content: `
      <h4>Kısaltma Türleri ve Sınavdaki İpuçları:</h4>
      <ul>
        <li><strong>V-ing (Aktif - Eşzamanlı Eylem):</strong> Eylemi yapan özne ile ana cümlenin öznesi aynıdır ve olaylar aynı anda gerçekleşir.<br>
        <em>Analyzing the financial reports, the auditor found several errors.</em> (Raporları analiz ederken/analiz eden denetçi hatalar buldu.)</li>

        <li><strong>Having + V3 (Aktif - Öncelik / Sonralık):</strong> Bir eylem diğerinden DAHA ÖNCE tamamlanıp bitmiştir.<br>
        <em>Having completed the penetration testing, the IT team submitted the report.</em> (Sızma testini tamamladıktan sonra...)</li>

        <li><strong>V3 (Pasif - Edilgen Kısaltma):</strong> Özne eylemi yapan değil, eyleme maruz kalandır.<br>
        <em>Founded in 1863, Ziraat Bank is Turkey's oldest bank.</em> (1863'te kurulan Ziraat Bankası...)</li>

        <li><strong>Having been + V3 (Pasif - Öncelikli Edilgen):</strong> Eylem hem geçmişte önce bitmiş hem de pasiftir.<br>
        <em>Having been audited by independent regulators, the balance sheet was approved.</em></li>
      </ul>
    `
  },
  {
    id: "tactic_inversion",
    title: "5. Devrik Cümle (Inversion) Kalıpları",
    icon: "shuffle",
    badge: "Çeldirici Tuzak",
    summary: "Cümle başında negatif veya kısıtlayıcı zarf varsa cümle soru formu alır.",
    content: `
      <h4>Cümleyi Devrik Yapan Zarflar:</h4>
      <p>Aşağıdaki yapılarla başlayan bir cümle görürseniz, hemen arkasından <strong>Yardımcı Fiil + Özne + Asıl Fiil</strong> gelmelidir:</p>
      <ul>
        <li><strong>Rarely / Seldom / Barely / Hardly / Scarcely:</strong><br>
        <em>Rarely <u>have we witnessed</u> such economic volatility.</em> (DOĞRU)<br>
        <span style="color:#ef4444">Rarely we have witnessed... (YANLIŞ)</span></li>

        <li><strong>Under no circumstances / On no account (Hiçbir koşulda):</strong><br>
        <em>Under no circumstances <u>should you share</u> your OTP password.</em></li>

        <li><strong>Not only ... but also:</strong><br>
        <em>Not only <u>did the firewall block</u> the attack, but it also traced the IP.</em></li>

        <li><strong>No sooner ... THAN / Hardly ... WHEN:</strong><br>
        <em>No sooner <u>had the bank opened</u> THAN the queue formed.</em></li>
      </ul>
    `
  },
  {
    id: "tactic_reading",
    title: "6. Paragraf ve Okuduğunu Anlama Taktikleri",
    icon: "book-open",
    badge: "8-10 Soru",
    summary: "Uzun metinlerde boğulmadan doğru cevaba ulaşmanın altın kuralları.",
    content: `
      <h4>📌 Paragraf Çözüm Adımları:</h4>
      <ol>
        <li><strong>Önce Soru Köklerini Okuyun:</strong> Paragrafı okumadan önce altındaki 3-4 sorunun kökünü okuyarak anahtar kelimeleri zihninize kazıyın. Böylece metni okurken cevabı nerede arayacağınızı bilirsiniz.</li>
        <li><strong>İlk ve Son Cümle Kuralı:</strong> Ana fikir (Main idea / Primary purpose) sorularının cevabı genellikle 1. cümlenin sonu veya son cümlenin içindedir.</li>
        <li><strong>Aşırı Uç İfadelerden Kaçının (Tuzak Şıklar):</strong> İçinde <em>always, completely, exclusively, solely, impossible, never, absolutely</em> gibi radikal kelimeler olan şıklar %90 oranında ÇELDİRİCİDİR. Metin açıkça bu genellemeyi yapmadıkça bu şıklardan uzak durun!</li>
        <li><strong>Ilımlı İfadeleri Tercih Edin:</strong> <em>may, can, could, likely, often, tend to, suggest</em> gibi ihtiyatlı ve akademik dil kullanan şıklar büyük oranda doğru cevaptır.</li>
      </ol>
    `
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TACTICS_DATA };
}

