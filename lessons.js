// Ziraat Bankası Uzman Yardımcılığı İngilizce Detaylı Konu Anlatımı Veritabanı
// Bankacılık, Bilişim ve Akademik İngilizce Sınav Odaklı Modüller

const LESSONS_DATA = [
  {
    id: "lesson_tenses",
    title: "1. Tenses (Zamanlar) ve Zaman Uyumu Kuralları",
    category: "Gramer",
    badge: "Temel & 3-4 Soru",
    summary: "Sınavda en çok sorulan zaman ilişkileri: Past Perfect, Present Perfect Continuous ve 'By the time' kuralı.",
    content: `
      <div class="lesson-section">
        <h3>1. Zaman Uyumu Kuralı (Sequence of Tenses)</h3>
        <p>Ziraat Bankası ve üniversite kurum sınavlarında cümle tamamlama ve boşluk doldurma sorularında ilk bakılması gereken yer <strong>Zaman Uyumu</strong>'dur:</p>
        
        <div class="formula-box">
          <strong>Temel Kural:</strong><br>
          • Present / Future ana cümleye ➔ Present / Future yan cümle eşlik eder.<br>
          • Past ana cümleye ➔ Past yan cümle eşlik eder (Past Simple, Past Continuous, Past Perfect, Would V1).
        </div>

        <div class="trap-box">
          ⚠️ <strong>Sınav Tuzağı:</strong> <em>"When / While / As soon as / After / Before"</em> gibi zaman bağlaçlarının bulunduğu yan cümlecikte asla <u>WILL / WOULD / SHALL</u> KULLANILMAZ!<br>
          <span style="color:#ef4444; text-decoration:line-through;">When the central bank will raise interest rates... (YANLIŞ)</span><br>
          <span style="color:#10b981; font-weight:600;">When the central bank raises interest rates... (DOĞRU)</span>
        </div>

        <h3 style="margin-top:1.5rem;">2. En Çok Çıkan 3 Zaman Formülü</h3>

        <h4>A) By the time Formülleri (Kesin Soru Gelir!)</h4>
        <table class="tactic-table">
          <tr><th>Bağlaç</th><th>Yan Cümle</th><th>Ana Cümle</th></tr>
          <tr>
            <td><strong>By the time (Gelecek)</strong></td>
            <td>Simple Present (V1 / Vs)</td>
            <td><strong>Future Perfect (will have + V3)</strong></td>
          </tr>
          <tr>
            <td><strong>By the time (Geçmiş)</strong></td>
            <td>Simple Past (V2)</td>
            <td><strong>Past Perfect (had + V3)</strong></td>
          </tr>
        </table>
        <div class="example-box">
          <p><strong>Örnek 1 (Gelecek):</strong> <em>By the time the new digital banking regulation <u>comes</u> into effect next month, our developers <u>will have deployed</u> the encryption patch.</em><br>
          <span class="tr-text">➔ Gelecek ay yeni dijital bankacılık yönetmeliği yürürlüğe girene kadar, geliştiricilerimiz şifreleme yamasını dağıtmış olacaklar.</span></p>
          
          <p><strong>Örnek 2 (Geçmiş):</strong> <em>By the time the fraud detection unit <u>noticed</u> the intrusion, the attackers <u>had already transferred</u> the funds.</em><br>
          <span class="tr-text">➔ Sahtecilik tespit birimi sızıntıyı fark edene kadar, saldırganlar fonları çoktan transfer etmişti.</span></p>
        </div>

        <h4>B) Present Perfect (Since & For Kalıpları)</h4>
        <p><em>"Over the past decade", "In the last five years", "Since 1863"</em> ifadeleri Present Perfect Tense (have/has + V3) gerektirir.</p>
        <div class="example-box">
          <p><strong>Örnek:</strong> <em>Over the past five years, cloud adoption in Turkish commercial banking <u>has expanded</u> at an unprecedented rate.</em><br>
          <span class="tr-text">➔ Son beş yıldır, Türk ticari bankacılığında buluta geçiş benzeri görülmemiş bir hızla genişlemiştir.</span></p>
        </div>
      </div>
    `
  },
  {
    id: "lesson_conditionals",
    title: "2. Conditionals (Şart Cümleleri) & Mixed Conditionals",
    category: "Gramer",
    badge: "Kritik Baraj Konusu",
    summary: "Type 0, 1, 2, 3 ve banka sınavlarının vazgeçilmezi olan 'Mixed Conditionals' ve devrik şart yapıları.",
    content: `
      <div class="lesson-section">
        <h3>1. Conditionals Özet Tablosu</h3>
        <table class="tactic-table">
          <tr><th>Tip</th><th>If Cümlesi (Koşul)</th><th>Temel Cümle (Sonuç)</th><th>Kullanım Amacı</th></tr>
          <tr><td><strong>Type 1</strong></td><td>Simple Present (V1)</td><td>will / can / may + V1</td><td>Gelecekte olası durumlar</td></tr>
          <tr><td><strong>Type 2</strong></td><td>Simple Past (V2 / were)</td><td>would / could / might + V1</td><td>Şu anki hayali/gerçek dışı durumlar</td></tr>
          <tr><td><strong>Type 3</strong></td><td>Past Perfect (had + V3)</td><td>would / could / might + have V3</td><td>Geçmişte gerçekleşmemiş pişmanlıklar</td></tr>
          <tr><td><strong>Mixed (3+2)</strong></td><td>Past Perfect (had + V3)</td><td>would / could + V1 (now/today)</td><td>Geçmişteki eylemin <u>bugünkü</u> sonucu!</td></tr>
        </table>

        <h3 style="margin-top:1.5rem;">2. Mixed Conditionals (Banka Sınavlarının Favori Tuzağı)</h3>
        <p>Eğer bir cümlede geçmişe ait bir ipucu (<em>yesterday, last year, initially</em>) ile bugüne ait bir ipucu (<em>now, today, currently</em>) bir aradaysa <strong>Mixed Conditional</strong> aranmalıdır:</p>
        <div class="example-box">
          <p><strong>Örnek:</strong> <em>If the IT security team <u>had upgraded</u> the firewall last month (Past), the bank's core servers <u>would not be</u> offline today (Present).</em><br>
          <span class="tr-text">➔ Eğer BT güvenlik ekibi geçen ay güvenlik duvarını güncelleseydi, bankanın ana sunucuları bugün çevrimdışı olmazdı.</span></p>
        </div>

        <h3 style="margin-top:1.5rem;">3. Devrik Şart Cümleleri (If'siz Devrik Yapılar)</h3>
        <p>Sınavlarda "if" atılır ve yardımcı fiil başa gelir:</p>
        <ul>
          <li><strong>Type 1:</strong> <em>Should you require any financial assistance...</em> (= If you should require...)</li>
          <li><strong>Type 2:</strong> <em>Were the interest rates lower...</em> (= If the interest rates were lower...)</li>
          <li><strong>Type 3:</strong> <em>Had the auditors inspected the ledger...</em> (= If the auditors had inspected...)</li>
        </ul>
        <div class="trap-box">
          💡 <strong>Altın Kural:</strong> Cümle başında <strong>"Had + Özne + V3"</strong> görüyorsanız, ikinci tarafta %99 ihtimalle <strong>"would have V3"</strong> veya <strong>"would V1 (today)"</strong> arayacaksınız!
        </div>

        <h3 style="margin-top:1.5rem;">4. 'IF' Yerine Geçen Alternatif Bağlaçlar</h3>
        <ul>
          <li><strong>Provided that / Providing that / As long as / On condition that:</strong> -mesi şartıyla / koşuluyla</li>
          <li><strong>Unless:</strong> = If not (-medikçe, -mezse). <em>Unless you provide collateral, the loan will be denied.</em></li>
          <li><strong>In case:</strong> ... ihtimaline karşı / tedbir olarak. <em>Banks keep liquidity reserves in case a bank-run occurs.</em></li>
          <li><strong>But for / Without:</strong> Olmasa / olmasaydı. <em>Without emergency liquidity, the regional bank would have collapsed.</em></li>
        </ul>
      </div>
    `
  },
  {
    id: "lesson_modals",
    title: "3. Modals & Modal Perfects (Geçmişe Yönelik Çıkarımlar)",
    category: "Gramer",
    badge: "Çeldirici Sorular",
    summary: "must have V3, should have V3, couldn't have V3 ve needn't have V3 ayrımları.",
    content: `
      <div class="lesson-section">
        <h3>1. Modal Perfects Tablosu (Geçmiş Zaman Kipleri)</h3>
        <p>ÖSYM ve banka sınavlarında standart modallardan ziyade <strong>MODAL + HAVE + V3</strong> yapıları sorulur:</p>

        <table class="tactic-table">
          <tr><th>Kalıp</th><th>Anlamı</th><th>Kullanım Amacı</th></tr>
          <tr>
            <td><strong>Must have + V3</strong></td>
            <td>...-mış olmalı</td>
            <td>Geçmişe yönelik güçlü olumlu çıkarım (Yüksek olasılık)</td>
          </tr>
          <tr>
            <td><strong>Can't / Couldn't have + V3</strong></td>
            <td>...-mış olamaz</td>
            <td>Geçmişe yönelik kesin olumsuz çıkarım (İmkansızlık)</td>
          </tr>
          <tr>
            <td><strong>Should have + V3</strong></td>
            <td>...-ması gerekirdi (ama yapmadı)</td>
            <td>Geçmişe yönelik eleştiri veya pişmanlık</td>
          </tr>
          <tr>
            <td><strong>Shouldn't have + V3</strong></td>
            <td>...-maması gerekirdi (ama yaptı)</td>
            <td>Yapılmaması gereken bir hatayı eleştirme</td>
          </tr>
          <tr>
            <td><strong>Needn't have + V3</strong></td>
            <td>...-masına gerek yoktu (ama boşuna yaptı)</td>
            <td>Gereksiz yere yapılan geçmiş eylem</td>
          </tr>
          <tr>
            <td><strong>Might / May / Could have + V3</strong></td>
            <td>...-mış olabilirdi</td>
            <td>Geçmişe dair zayıf ihtimal</td>
          </tr>
        </table>

        <div class="example-box">
          <p><strong>Örnek 1 (Must have V3):</strong> <em>The server room temperature reached 90 degrees; the cooling system <u>must have failed</u> during the night.</em><br>
          <span class="tr-text">➔ Sunucu odasının sıcaklığı 90 dereceye ulaştı; soğutma sistemi gece çökmüş/bozulmuş olmalı.</span></p>

          <p><strong>Örnek 2 (Should have V3):</strong> <em>The loan officer <u>should have verified</u> the borrower's credit score before approving the mortgage.</em><br>
          <span class="tr-text">➔ Kredi yetkilisinin konut kredisini onaylamadan önce borçlunun kredi notunu doğrulaması gerekirdi (ama doğrulamadı).</span></p>

          <p><strong>Örnek 3 (Needn't have V3):</strong> <em>You <u>needn't have backed up</u> the transaction files manually; the automated cloud script does it every hour.</em><br>
          <span class="tr-text">➔ İşlem dosyalarını manuel olarak yedeklemene gerek yoktu (ama boş yere yedekledin); otomatik bulut betiği bunu her saat yapıyor.</span></p>
        </div>

        <div class="trap-box">
          ⚠️ <strong>Needn't have V3 vs Didn't need to V1 Farkı:</strong><br>
          • <strong>Needn't have done:</strong> Eylem yapıldı, ancak sonradan gerek olmadığı anlaşıldı.<br>
          • <strong>Didn't need to do:</strong> Zaten gerek yoktu, bu yüzden <u>yapılmadı</u>.
        </div>
      </div>
    `
  },
  {
    id: "lesson_conjunctions",
    title: "4. Conjunctions & Transitions (Bağlaçlar Master Rehberi)",
    category: "Bağlaçlar",
    badge: "En Yüksek Net (6-8 Soru)",
    summary: "Zıtlık, Sebep-Sonuç, Amaç ve Ek Bilgi bağlaçlarının tam listesi ve cümle/isim alma kuralları.",
    content: `
      <div class="lesson-section">
        <h3>1. Sınavda Bağlaç Çözerken İlk Adım: Cümle mi, İsim mi?</h3>
        <p>Boşluktan sonra tam bir cümle (Özne + Fiil) mi var, yoksa sadece bir isim öbeği (Noun Phrase / V-ing) mi var? Bu ayrım seçeneklerin %50'sini anında eletir!</p>

        <h4 style="margin-top:1.25rem;">A) Zıtlık (Contrast) Bildiren Bağlaçlar:</h4>
        <table class="tactic-table">
          <tr><th>Arkasından Tam Cümle Alanlar (+ S + V)</th><th>Arkasından İsim / V-ing Alanlar (+ Noun)</th><th>Geçiş Zarfları (; However, vb.)</th></tr>
          <tr>
            <td>
              • Although<br>
              • Even though<br>
              • Though<br>
              • While / Whereas<br>
              • Much as
            </td>
            <td>
              • Despite<br>
              • In spite of<br>
              • Notwithstanding<br>
              • Regardless of
            </td>
            <td>
              • However<br>
              • Nevertheless<br>
              • Nonetheless<br>
              • On the other hand<br>
              • In contrast
            </td>
          </tr>
        </table>

        <div class="example-box">
          <p><strong>Cümle alan:</strong> <em><u>Although</u> the company reported record revenues, its stock price tumbled due to high debt.</em><br>
          <span class="tr-text">➔ Şirket rekor gelir açıklamasına rağmen, yüksek borç nedeniyle hisse fiyatı düştü.</span></p>

          <p><strong>İsim alan:</strong> <em><u>Despite</u> record revenues, its stock price tumbled due to high debt.</em><br>
          <span class="tr-text">➔ Rekor gelirlere rağmen... (Despite arkasından isim öbeği geldi).</span></p>
        </div>

        <h4 style="margin-top:1.25rem;">B) Sebep - Sonuç (Cause & Effect) Bağlaçları:</h4>
        <table class="tactic-table">
          <tr><th>Sebep (+ Cümle)</th><th>Sebep (+ İsim)</th><th>Sonuç Bildiren Geçiş Zarfları</th></tr>
          <tr>
            <td>
              • Because<br>
              • Since<br>
              • As<br>
              • Inasmuch as<br>
              • Seeing that / Given that
            </td>
            <td>
              • Due to<br>
              • Owing to<br>
              • Because of<br>
              • On account of<br>
              • As a result of
            </td>
            <td>
              • Therefore<br>
              • Thus<br>
              • Consequently<br>
              • Hence<br>
              • As a result
            </td>
          </tr>
        </table>

        <h4 style="margin-top:1.25rem;">C) Amaç (Purpose) Bildiren Bağlaçlar:</h4>
        <ul>
          <li><strong>So that / In order that (+ S + can/could/will/would + V1):</strong> ...-sın diye / amacıyla.<br>
          <em>Banks encrypt biometric data <u>so that</u> identity theft can be prevented.</em></li>
          <li><strong>In order to / So as to / To (+ V1):</strong> ...-mek amacıyla.<br>
          <em>The Central Bank intervened <u>in order to stabilize</u> the currency.</em></li>
          <li><strong>Lest (+ S + should + V1 veya yalın V1):</strong> ... olmasın diye / korkusuyla.<br>
          <em>The servers are cooled continuously <u>lest</u> an overheat trigger a shutdown.</em></li>
        </ul>

        <h4 style="margin-top:1.25rem;">D) İkili (Correlative) Bağlaçlar:</h4>
        <ul>
          <li><strong>Not only ... but also ...:</strong> Yalnızca ... değil, aynı zamanda ... da.</li>
          <li><strong>Neither ... nor ...:</strong> Ne ... ne de ... (Fiil tekil/çoğulluğu ikinci özneye uyar).</li>
          <li><strong>Either ... or ...:</strong> Ya ... ya da ...</li>
          <li><strong>Both ... and ...:</strong> Hem ... hem de ... (Fiil daima çoğuldur).</li>
          <li><strong>The more ..., the more ...:</strong> Ne kadar ..., o kadar ...</li>
        </ul>
      </div>
    `
  },
  {
    id: "lesson_reductions",
    title: "5. Participle Reductions (Cümlecik Kısaltmaları)",
    category: "Gramer",
    badge: "İleri Düzey Gramer",
    summary: "Having V3, V-ing, V3 ve To V1 kısaltma mantıkları ve sınav sorularındaki pratik çözümleri.",
    content: `
      <div class="lesson-section">
        <h3>1. Neden Kısaltma Yapılır?</h3>
        <p>İki cümlenin öznesi <strong>aynı olduğunda</strong>, bağlaç ve özne kaldırılarak fiil kısaltılır. Sınavda sorulan 4 temel kısaltma türü vardır:</p>

        <table class="tactic-table">
          <tr><th>Kısaltma Formu</th><th>Anlam & Zaman İlişkisi</th><th>Etken / Edilgen</th><th>Örnek Yapı</th></tr>
          <tr>
            <td><strong>V-ing</strong></td>
            <td>Eşzamanlı eylem (Aynı anda)</td>
            <td>Aktif (Etken)</td>
            <td><em><u>Analyzing</u> the logs, the engineer found a bug.</em></td>
          </tr>
          <tr>
            <td><strong>Having + V3</strong></td>
            <td>Öncelikli eylem (Daha önce bitmiş)</td>
            <td>Aktif (Etken)</td>
            <td><em><u>Having completed</u> the audit, they left.</em></td>
          </tr>
          <tr>
            <td><strong>V3</strong></td>
            <td>Eşzamanlı edilgen</td>
            <td>Pasif (Edilgen)</td>
            <td><em><u>Protected</u> by firewalls, data is safe.</em></td>
          </tr>
          <tr>
            <td><strong>Having been + V3</strong></td>
            <td>Öncelikli edilgen</td>
            <td>Pasif (Edilgen)</td>
            <td><em><u>Having been approved</u>, the loan was issued.</em></td>
          </tr>
        </table>

        <div class="trap-box">
          💡 <strong>Çözüm Taktiki:</strong> Virgülden sonraki ana cümlenin öznesine bakın! Kısaltmadaki eylemi bu özne <strong>kendi mi yapıyor (Aktif)</strong>, yoksa <strong>eyleme maruz mu kalıyor (Pasif)</strong>?<br>
          • Özne eylemi yapıyorsa ➔ <strong>V-ing</strong> veya <strong>Having V3</strong><br>
          • Özne eyleme maruz kalıyorsa ➔ <strong>V3</strong> veya <strong>Having been V3</strong>
        </div>

        <h3 style="margin-top:1.5rem;">2. "To V1" İle Yapılan Özel Kısaltmalar</h3>
        <p>Şu ifadelerden sonra gelen Relative Clause kısaltması daima <strong>TO + V1</strong> (pasif ise <strong>TO BE + V3</strong>) olur:</p>
        <ul>
          <li><strong>The first / The second / The last / The only:</strong><br>
          <em>Ziraat Bank was <u>the first bank to adopt</u> modern agricultural lending in Turkey.</em></li>
          <li><strong>Superlatives (The best, the most advanced vb.):</strong><br>
          <em>It is <u>the most efficient algorithm to be developed</u> this decade.</em></li>
        </ul>
      </div>
    `
  },
  {
    id: "lesson_inversion",
    title: "6. Inversion (Devrik Cümle) Yapıları",
    category: "Gramer",
    badge: "Çeldirici Tuzak",
    summary: "Rarely, Under no circumstances, Not only ve Only yapılarında cümle nasıl soru formatı alır?",
    content: `
      <div class="lesson-section">
        <h3>1. Inversion Nedir?</h3>
        <p>Vurguyu artırmak için cümlenin başına olumsuz veya kısıtlayıcı bir zarf geldiğinde, cümle <strong>soru formu (Yardımcı Fiil + Özne + Asıl Fiil)</strong> alır. Anlam soru değildir, düz cümledir ancak sıralama devriktir.</p>

        <div class="formula-box">
          <strong>Inversion Formülü:</strong><br>
          [Olumsuz Zarf] + <strong>[Yardımcı Fiil (do/does/did/have/is/can/should)]</strong> + <strong>[Özne]</strong> + <strong>[Fiil]</strong>
        </div>

        <h3 style="margin-top:1.5rem;">2. Cümleyi Devrik Yapan En Popüler 4 Grup</h3>

        <h4>A) Olumsuzluk & Kısıtlama Zarfları (Rarely, Seldom, Hardly, Scarcely, Barely, Never)</h4>
        <div class="example-box">
          <p><em><u>Rarely have we witnessed</u> such an extreme liquidity squeeze in international credit markets.</em><br>
          <span class="tr-text">➔ Uluslararası kredi piyasalarında böylesine aşırı bir likidite sıkışıklığına nadiren tanık olmuşuzdur.</span></p>
        </div>

        <h4>B) "Under no circumstances" & "On no account" (Hiçbir koşulda)</h4>
        <div class="example-box">
          <p><em><u>Under no circumstances should an employee disclose</u> master encryption keys.</em><br>
          <span class="tr-text">➔ Hiçbir koşulda bir çalışan ana şifreleme anahtarlarını ifşa etmemelidir.</span></p>
        </div>

        <h4>C) "Not only ... but also" Cümle Başındayken</h4>
        <div class="example-box">
          <p><em><u>Not only did the AI detect</u> the unauthorized login, <u>but it also blocked</u> the IP address automatically.</em><br>
          <span class="tr-text">➔ Yapay zeka yalnızca yetkisiz girişi tespit etmekle kalmadı, aynı zamanda IP adresini otomatik olarak engelledi.</span></p>
        </div>

        <h4>D) "No sooner ... THAN" & "Hardly ... WHEN" (-er -emez)</h4>
        <div class="example-box">
          <p><em><u>No sooner had the stock market opened THAN</u> the sell-off began.</em><br>
          <span class="tr-text">➔ Borsa açılır açılmaz satış dalgası başladı.</span></p>
        </div>

        <div class="trap-box">
          ⚠️ <strong>Sınav Eşleşme Tuzağı:</strong><br>
          • <strong>No sooner</strong> gördüyseniz ➔ <strong>THAN</strong> arayın!<br>
          • <strong>Hardly / Scarcely / Barely</strong> gördüyseniz ➔ <strong>WHEN</strong> arayın!
        </div>
      </div>
    `
  },
  {
    id: "lesson_passive_causative",
    title: "7. Passive Voice & Causatives (Edilgen & Ettirgen)",
    category: "Gramer",
    badge: "Bankacılık Metinleri",
    summary: "Raporlama pasifleri (It is said that...), modal pasifler ve have/get something done kalıpları.",
    content: `
      <div class="lesson-section">
        <h3>1. Pasif Çatı (Passive Voice) Temelleri</h3>
        <p>Bankacılık ve resmi mevzuat metinlerinde eylemi yapan şahıstan ziyade <strong>eylemin kendisi</strong> önemli olduğu için pasif çatı çok yaygındır:</p>

        <div class="formula-box">
          <strong>Pasif Formülü:</strong> BE + V3 (Past Participle)<br>
          • Present: is/are + V3<br>
          • Past: was/were + V3<br>
          • Modal: must be + V3 / should be + V3<br>
          • Perfect: has/have been + V3<br>
          • Modal Perfect: must have been + V3 (geçmiş çıkarım edilgen)
        </div>

        <h3 style="margin-top:1.5rem;">2. Impersonal Passives (Raporlama / Söylenti Pasifleri)</h3>
        <p>Ekonomi ve finans haberlerinde sıkça test edilen çift yüklemli pasif yapıdır:</p>
        <div class="example-box">
          <p><strong>Kalıp 1 (It is said that...):</strong><br>
          <em><u>It is estimated that</u> global digital payment volume will double by 2030.</em></p>
          
          <p><strong>Kalıp 2 (Özne ile başlama):</strong><br>
          <em>The Central Bank <u>is expected to hold</u> benchmark rates steady this month.</em><br>
          <em>The hackers <u>are reported to have accessed</u> sensitive client databases. (Geçmiş eylem için <strong>to have V3</strong> kullanılır).</em></p>
        </div>

        <h3 style="margin-top:1.5rem;">3. Causatives (Ettirgen Yapılar)</h3>
        <p>Bir işi başkasına yaptırmak anlamına gelir:</p>
        <table class="tactic-table">
          <tr><th>Kalıp</th><th>Nesne Türü</th><th>Fiil Formu</th><th>Örnek</th></tr>
          <tr><td><strong>Have + someone</strong></td><td>Kişi (Aktif)</td><td><strong>V1 (Yalın)</strong></td><td><em>The manager <u>had the IT team patch</u> the server.</em></td></tr>
          <tr><td><strong>Get + someone</strong></td><td>Kişi (Aktif)</td><td><strong>TO + V1</strong></td><td><em>The manager <u>got the team to patch</u> the server.</em></td></tr>
          <tr><td><strong>Have / Get + something</strong></td><td>Nesne (Pasif)</td><td><strong>V3</strong></td><td><em>The bank <u>had its systems audited</u> by an external firm.</em></td></tr>
        </table>
      </div>
    `
  },
  {
    id: "lesson_subjunctive",
    title: "8. Subjunctive Mood (Zorunluluk ve İstek Kipleri)",
    category: "Gramer",
    badge: "Sınavların Gizli Silahı",
    summary: "Mandate, insist, recommend, demand gibi fiillerden sonra fiilin daima yalın (V1) kalma kuralı.",
    content: `
      <div class="lesson-section">
        <h3>1. Mandative Subjunctive Kuralı Nedir?</h3>
        <p>Resmi tavsiye, zorunluluk, talep veya öneri bildiren fiil veya sıfatlardan sonra gelen <strong>"that"</strong> cümlesinde, özne ne olursa olsun (He, She, It olsa dahi!) fiil <strong>YALIN (Base Form - V1)</strong> kalır. -s takısı ALMAZ, geçmiş zaman OLMAZ!</p>

        <div class="formula-box">
          <strong>Formül:</strong><br>
          [Demand / Insist / Require / Mandate / Recommend that] + [Subject] + <strong>[V1 (Yalın Fiil)]</strong><br>
          <em>(Olumsuz ise: Subject + <strong>NOT + V1</strong> | Pasif ise: Subject + <strong>BE + V3</strong>)</em>
        </div>

        <h3 style="margin-top:1.5rem;">2. Bu Kuralı Tetikleyen Fiiller ve Sıfatlar</h3>
        <ul>
          <li><strong>Fiiller:</strong> demand, require, request, insist, mandate, recommend, suggest, urge, propose</li>
          <li><strong>Sıfatlar:</strong> It is crucial that, It is vital that, It is essential that, It is mandatory that, It is imperative that</li>
        </ul>

        <div class="example-box">
          <p><strong>Örnek 1 (Üçüncü Tekil Şahıs Tuzağı):</strong><br>
          <em>The banking regulator demanded that each commercial bank <u>increase</u> (NOT increases!) its emergency reserves.</em><br>
          <span class="tr-text">➔ Bankacılık düzenleyicisi, her bir ticari bankanın acil durum rezervlerini artırmasını talep etti. (Özne 'each bank' tekil olmasına rağmen fiil yalındır!)</span></p>

          <p><strong>Örnek 2 (Pasif Subjunctive):</strong><br>
          <em>It is imperative that all electronic wire transactions <u>be logged</u> immediately.</em><br>
          <span class="tr-text">➔ Tüm elektronik havale işlemlerinin derhal kaydedilmesi zorunludur. (is logged değil, BE logged!)</span></p>
        </div>

        <div class="trap-box">
          ⚠️ <strong>Sınav Tüyosu:</strong> Şıklarda üçüncü tekil özneye rağmen -s takısı almamış çıplak bir fiil (örn: *increase, provide, disclose*) görüyorsanız ve soru kökünde *mandated that / recommended that* varsa, o şık %100 doğru cevaptır!
        </div>
      </div>
    `
  },
  {
    id: "lesson_translation_reading",
    title: "9. Çeviri ve Paragraf Soruları İçin Sınav Stratejileri",
    category: "Strateji",
    badge: "15 Saniyede Soru Çözme",
    summary: "Türkçe-İngilizce ve İngilizce-Türkçe çevirilerde özne-yüklem eleme yöntemi ve paragrafta ana fikir bulma taktikleri.",
    content: `
      <div class="lesson-section">
        <h3>1. Çeviri Sorularında 15 Saniye Metodu</h3>
        <p>Çeviri sorularını metni baştan sona Türkçeye veya İngilizceye çevirerek çözmeye çalışmak büyük bir zaman kaybıdır. Bunun yerine matematiksel eleme yapılır:</p>

        <div class="formula-box">
          <strong>3 Aşamalı Eleme Tekniği:</strong><br>
          1. <strong>Ana Yüklemi Eşleştirin:</strong> İngilizce cümlenin ana fiilini bulun. (Örn: <em>"has been postponed"</em> ➔ <em>"ertelenmiştir"</em>). Şıklardaki <em>"ertelendi", "ertelenecektir", "ertelenebilir"</em> gibi kipleri anında eleyin (Genellikle 2-3 şık anında gider).<br>
          2. <strong>Ana Özneyi Kontrol Edin:</strong> Cümlenin gerçek öznesi kim? (Örn: <em>"The Central Bank"</em> ➔ Türkçe cümlenin başında <em>"Merkez Bankası"</em> olmalıdır).<br>
          3. <strong>Bağlacı Doğrulayın:</strong> <em>"Although"</em> varsa <em>"-e rağmen"</em>; <em>"In order to"</em> varsa <em>"-mek amacıyla"</em>; <em>"Unless"</em> varsa <em>"-medikçe"</em> aranmalıdır.
        </div>

        <h3 style="margin-top:1.5rem;">2. Paragraf ve Okuduğunu Anlama Taktikleri</h3>
        <ul>
          <li><strong>Önce Soru Köklerini Okuyun:</strong> Metne geçmeden önce altındaki 3-4 sorunun ne istediğini (Which of the following is true?, Why did the author mention...?, What can be inferred...?) okuyun.</li>
          <li><strong>Aşırı Genelleme Tuzaklarına Dikkat Edin:</strong> Seçenekte <em>all, every, always, never, completely, exclusively, solely, impossible</em> gibi mutlak kelimeler varsa, metinde açıkça belirtilmedikçe bu şıklar genellikle <strong>YANLIŞ ÇELDİRİCİDİR</strong>.</li>
          <li><strong>Akademik İfadeler Doğru Cevap Olmaya Yatkındır:</strong> <em>may, might, can, likely, often, tend to, suggest</em> gibi ihtiyatlı ve esnek ifadeler barındıran şıklar büyük oranda doğru cevaptır.</li>
          <li><strong>Eş Anlamlı Kelime Oyunu (Paraphrase):</strong> Doğru cevap metindeki cümlenin kelimesi kelimesine aynısı değildir; metindeki cümlenin eş anlamlı kelimelerle (synonyms) yeniden yazılmış halidir (Örn: metinde <em>"drop significantly"</em> derken şıkta <em>"tumble sharply"</em> yazar).</li>
        </ul>
      </div>
    `
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_DATA };
}
