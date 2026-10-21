// Ziraat Bankası Uzman Yardımcılığı İngilizce Detaylı Konu Anlatımı Veritabanı
// Bankacılık, Bilişim ve Akademik İngilizce Sınav Odaklı Modüller

const LESSONS_DATA = [
  {
    id: "lesson_tenses",
    title: "1. Tenses (Zamanlar) ve Zaman Uyumu Kuralları",
    category: "Gramer",
    badge: "Temel & 3-4 Soru",
    summary: "Sınavda en çok sorulan zaman ilişkileri: Sequence of Tenses, By the Time, Since kuralı ve süreç zarfları.",
    content: `
      <div class="lesson-section">
        <h3>1. Zaman Uyumu Kuralı (Sequence of Tenses)</h3>
        <p>Ziraat Bankası ve üniversite kurum sınavlarında cümle tamamlama ve boşluk doldurma sorularında ilk bakılması gereken yer <strong>Zaman Uyumu</strong>'dur:</p>
        
        <div class="formula-box">
          <strong>Temel Zaman Uyumu (Tense Agreement) Kuralı:</strong><br>
          • <strong>Gelecek / Geniş Zaman Uyumu (Present / Future Axis):</strong><br>
          &nbsp;&nbsp;&nbsp;&nbsp;➔ <strong>Yan Cümle (Bağlacın İçi):</strong> SADECE <u>Present (V1 / have-has V3)</u> gelir. [<em>⚠️ Geleceği anlatsa bile yan cümleye ASLA 'will / would / shall' gelmez!</em>]<br>
          &nbsp;&nbsp;&nbsp;&nbsp;➔ <strong>Ana Cümle:</strong> <u>Future (will / will have V3)</u>, <u>Modals (can, may)</u> veya <u>Present (V1)</u> gelir.<br><br>
          • <strong>Geçmiş Zaman (Past Axis) Uyumu:</strong><br>
          &nbsp;&nbsp;&nbsp;&nbsp;➔ <strong>Yan Cümle:</strong> <u>Past Simple (V2)</u> gelir.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;➔ <strong>Ana Cümle:</strong> <u>Past Simple (V2)</u>, <u>Past Continuous (was/were V-ing)</u> veya <u>Past Perfect (had V3)</u> gelir.
        </div>

        <div class="trap-box">
          ⚠️ <strong>Sınav Tuzağı 1:</strong> <em>"When / While / As soon as / After / Before / Until / By the time"</em> gibi zaman bağlaçlarının bulunduğu yan cümlecikte asla <u>WILL / WOULD / SHALL</u> KULLANILMAZ!<br>
          <span style="color:#ef4444; text-decoration:line-through;">When the central bank will raise interest rates... (YANLIŞ)</span><br>
          <span style="color:#10b981; font-weight:600;">When the central bank raises interest rates... (DOĞRU)</span>
        </div>

        <div class="trap-box" style="margin-top:0.75rem;">
          💡 <strong>Sınav Tuzağı 2 (Past Perfect - had V3):</strong> <em>Past Perfect (had V3)</em> tek başına bağımsız bir cümlede zaman belirtilmeden kullanılmaz! Cümlede mutlaka geçmişte gerçekleşmiş bir başka olay (V2) olmalıdır ki, onun daha da öncesini anlatsın.
        </div>

        <h3 style="margin-top:1.5rem;">2. En Çok Çıkan 3 Zaman Formülü</h3>

        <h4>A) By the time Formülleri (Öncelik & Gelecek/Geçmiş Bitiş)</h4>
        <p><em>"By the time"</em> (-e kadar), sınavlarda formülü en net olan ve soru kaçırılmaması gereken bağlaçtır:</p>
        <table class="tactic-table">
          <tr><th>Kalıp Türü</th><th>Yan Cümle (By the time'ın İçi)</th><th>Ana Cümle (Sonuç)</th></tr>
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

        <h4>B) Sınavların 1 Numaralı Zaman İstisnası: "SINCE" Kuralı</h4>
        <p>Normal şartlarda Past ve Present aynı cümlede zaman uyumu gereği bir arada bulunamaz. Ancak <strong>"Since" (-den beri)</strong> bu kuralın İngilizcedeki tek ve en meşhur istisnasıdır!</p>
        <table class="tactic-table">
          <tr><th>Bağlaçlı Yan Cümle (Since + ...)</th><th>Ana Cümle (Temel Sonuç)</th></tr>
          <tr>
            <td><strong>Since + Simple Past (V2)</strong><br><em>veya geçmiş bir başlangıç tarihi (Since 2018 / Since its inception)</em></td>
            <td><strong>Present Perfect (have / has + V3)</strong><br><em>veya Present Perfect Continuous (have/has been V-ing)</em></td>
          </tr>
        </table>
        <div class="example-box">
          <p><strong>Örnek:</strong> <em>Since the Central Bank <u>launched</u> the instant FAST payment system in 2021, interbank retail transactions <u>have surged</u> by over 400%.</em><br>
          <span class="tr-text">➔ Merkez Bankası 2021'de anlık FAST ödeme sistemini başlattığından beri, bankalararası perakende işlemler %400'ün üzerinde artış göstermiştir.</span></p>
        </div>
        <div class="trap-box">
          🎯 <strong>Soru Çözüm Refleksi:</strong> Soru kökünde <strong>"Since + V2"</strong> veya <strong>"Since + geçmiş tarih"</strong> gördüğünüz an, ana cümlenin boşluğunda ilk olarak <strong>have / has + V3</strong> arayın!
        </div>

        <h4>C) "Süreç Bildiren" (Present Perfect) vs "Nokta Atışı" (Simple Past) Zarflar</h4>
        <p>Zaman sorularında cümlenin sonundaki zaman zarfı doğru seçeneği doğrudan belirler:</p>
        <table class="tactic-table">
          <tr><th>Zaman Zarfı Grubu</th><th>Örnek Zaman İfadeleri</th><th>Gereken Zaman Kipi</th></tr>
          <tr>
            <td><strong>Süreç Bildirenler (Bugüne uzanır)</strong></td>
            <td>Over / In / During / For the past/last X years, recently, lately, so far, up to now</td>
            <td><strong>Present Perfect (have/has + V3)</strong></td>
          </tr>
          <tr>
            <td><strong>Net Geçmiş / Nokta Atışı</strong></td>
            <td>in 2015, two years ago, initially, originally, during the 2008 crisis, at that time</td>
            <td><strong>Simple Past (V2)</strong></td>
          </tr>
        </table>
        <div class="example-box">
          <p><strong>Örnek 1 (Süreç):</strong> <em>Over the past five years, cloud adoption in Turkish commercial banking <u>has expanded</u> at an unprecedented rate.</em><br>
          <span class="tr-text">➔ Son beş yıldır, Türk ticari bankacılığında buluta geçiş benzeri görülmemiş bir hızla genişlemiştir.</span></p>

          <p><strong>Örnek 2 (Net Geçmiş):</strong> <em>The institution was <u>initially founded</u> in 1863 to provide low-interest credit to farmers.</em><br>
          <span class="tr-text">➔ Kurum başlangıçta 1863 yılında çiftçilere düşük faizli kredi sağlamak amacıyla kurulmuştur.</span></p>
        </div>
      </div>
    `
  },
  {
    id: "lesson_conditionals",
    title: "2. Conditionals (Şart Cümleleri) & Mixed Conditionals",
    category: "Gramer",
    badge: "Kritik Baraj Konusu",
    summary: "Type 0, 1, 2, 3, banka sınavlarının vazgeçilmezi olan 'Mixed Conditionals' ve devrik şart yapıları.",
    content: `
      <div class="lesson-section">
        <h3>1. Conditionals Temel Özet Tablosu</h3>
        <table class="tactic-table">
          <tr><th>Tip</th><th>If Cümlesi (Koşul)</th><th>Temel Cümle (Sonuç)</th><th>Kullanım Amacı</th></tr>
          <tr><td><strong>Type 0</strong></td><td>Simple Present (V1)</td><td>Simple Present (V1)</td><td>Genel doğrular, bilimsel gerçekler</td></tr>
          <tr><td><strong>Type 1</strong></td><td>Simple Present (V1)</td><td>will / can / may + V1</td><td>Gelecekte olası durumlar</td></tr>
          <tr><td><strong>Type 2</strong></td><td>Simple Past (V2 / were)</td><td>would / could / might + V1</td><td>Şu anki hayali / gerçek dışı durumlar</td></tr>
          <tr><td><strong>Type 3</strong></td><td>Past Perfect (had + V3)</td><td>would / could / might + have V3</td><td>Geçmişte gerçekleşmemiş pişmanlıklar</td></tr>
        </table>

        <h3 style="margin-top:1.5rem;">2. Mixed Conditionals (Banka Sınavlarının Favori Tuzağı)</h3>
        <p>Sınavlarda koşul ile sonucun farklı zaman dilimlerine ait olduğu durumlar sıkça test edilir:</p>

        <div class="formula-box">
          <strong>A) Type 3 + Type 2 (En Çok Çıkan):</strong><br>
          • <strong>Koşul:</strong> Geçmişte oldu bitti ➔ <strong>If + Past Perfect (had + V3)</strong><br>
          • <strong>Sonuç:</strong> Etkisi <u>BUGÜN</u> devam ediyor ➔ <strong>would / could + V1 (today / now / currently)</strong><br>
          <em>Örnek: If the IT security team <u>had upgraded</u> the firewall last month, the servers <u>would not be</u> offline today.</em>
          <br><br>
          <strong>B) Type 2 + Type 3:</strong><br>
          • <strong>Koşul:</strong> Genel / değişmeyen durum ➔ <strong>If + Simple Past (were / V2)</strong><br>
          • <strong>Sonuç:</strong> Geçmişte yaşanan olay ➔ <strong>would have + V3 (yesterday / last year)</strong><br>
          <em>Örnek: If he <u>were</u> a cautious investor, he <u>would not have lost</u> his capital in that fraudulent venture.</em>
        </div>

        <h3 style="margin-top:1.5rem;">3. Devrik Şart Cümleleri (Inversion without IF)</h3>
        <p>Sınavlarda "if" kelimesi atılır ve yardımcı fiil cümlenin en başına gelir:</p>
        <table class="tactic-table">
          <tr><th>Tür</th><th>Devrik Formül</th><th>Örnek Cümle</th></tr>
          <tr>
            <td><strong>Type 1</strong></td>
            <td><strong>Should + Özne + V1</strong></td>
            <td><em><u>Should you require</u> further financial assistance, please notify the branch.</em></td>
          </tr>
          <tr>
            <td><strong>Type 2</strong></td>
            <td><strong>Were + Özne + Sıfat/İsim</strong><br><em>(Fiil varsa: Were + Özne + <strong>to V1</strong>)</em></td>
            <td><em><u>Were the interest rates</u> lower, borrowing would surge.<br><u>Were the central bank to intervene</u>, markets would stabilize.</em></td>
          </tr>
          <tr>
            <td><strong>Type 3</strong></td>
            <td><strong>Had + Özne + V3</strong></td>
            <td><em><u>Had the auditors inspected</u> the balance sheet, the fraud would have been caught.</em></td>
          </tr>
        </table>

        <div class="trap-box">
          💡 <strong>Altın Kural:</strong> Cümle başında <strong>"Had + Özne + V3"</strong> görüyorsanız, ikinci tarafta %99 ihtimalle <strong>"would have V3"</strong> veya <strong>"would V1 (now)"</strong> arayacaksınız!
        </div>

        <h3 style="margin-top:1.5rem;">4. 'IF' Yerine Geçen Alternatif Bağlaçlar</h3>
        <ul>
          <li><strong>Provided that / Providing that / As long as / So long as / On condition that:</strong> -mesi şartıyla / koşuluyla.</li>
          <li><strong>Unless:</strong> = If not (-medikçe, -mezse). <em>Unless the applicant provides sufficient collateral, the loan will be denied.</em></li>
          <li><strong>In case:</strong> ... ihtimaline karşı / tedbir olarak. <em>Banks keep mandatory reserves in case a sudden liquidity crisis emerges.</em></li>
          <li><strong>Were it not for + İsim:</strong> ... olmasa (Şu an - Type 2). <em>Were it not for state guarantees, depositors would panic.</em></li>
          <li><strong>Had it not been for + İsim:</strong> ... olmasaydı (Geçmiş - Type 3). <em>Had it not been for emergency funding, the bank would have collapsed.</em></li>
          <li><strong>But for / Without + İsim:</strong> ... olmasa / olmasaydı (Hem Type 2 hem Type 3 için kısaltma olarak kullanılır).</li>
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
            <td>Geçmişe yönelik güçlü olumlu çıkarım (Yüksek olasılık %95+)</td>
          </tr>
          <tr>
            <td><strong>Can't / Couldn't have + V3</strong></td>
            <td>...-mış olamaz</td>
            <td>Geçmişe yönelik kesin olumsuz çıkarım (İmkansızlık)</td>
          </tr>
          <tr>
            <td><strong>Should have + V3 / Ought to have + V3</strong></td>
            <td>...-ması gerekirdi (ama yapmadı)</td>
            <td>Geçmişe yönelik eleştiri veya yerine getirilmemiş sorumluluk</td>
          </tr>
          <tr>
            <td><strong>Shouldn't have + V3</strong></td>
            <td>...-maması gerekirdi (ama yaptı)</td>
            <td>Yapılmaması gereken geçmiş bir hatayı eleştirme</td>
          </tr>
          <tr>
            <td><strong>Could have + V3</strong></td>
            <td>... yapabilirdi (ama yapmadı)</td>
            <td>Fırsat/kapasite vardı ancak gerçekleştirilmedi</td>
          </tr>
          <tr>
            <td><strong>Might / May have + V3</strong></td>
            <td>...-mış olabilir</td>
            <td>Geçmişe dair zayıf ihtimal (%40-50)</td>
          </tr>
          <tr>
            <td><strong>Needn't have + V3</strong></td>
            <td>...-masına gerek yoktu (ama boşuna yaptı)</td>
            <td>Gereksiz yere yapılan geçmiş eylem</td>
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
          ⚠️ <strong>İki Büyük Sınav Çeldiricisi:</strong><br>
          1. <strong>Needn't have done vs Didn't need to do:</strong><br>
          &nbsp;&nbsp;&nbsp;&nbsp;• <em>Needn't have done:</em> Eylem yapıldı, ancak sonradan gerek olmadığı anlaşıldı (boşuna zahmet).<br>
          &nbsp;&nbsp;&nbsp;&nbsp;• <em>Didn't need to do:</em> Zaten gerek olmadığı biliniyordu, bu yüzden <u>yapılmadı</u>.<br><br>
          2. <strong>Must have V3 vs Had to V1:</strong><br>
          &nbsp;&nbsp;&nbsp;&nbsp;• <em>Must have V3:</em> Çıkarımdır ("yapmış olmalı").<br>
          &nbsp;&nbsp;&nbsp;&nbsp;• <em>Had to V1:</em> Geçmiş zorunluluktur ("yapmak zorunda kaldı").
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

        <h4 style="margin-top:1.25rem;">A) Zıtlık (Contrast) Bildiren Bağlaçlar</h4>
        <table class="tactic-table">
          <tr><th>Arkasından Tam Cümle Alanlar (+ S + V)</th><th>Arkasından İsim / V-ing Alanlar (+ Noun)</th><th>Geçiş Zarfları (; However, vb.)</th></tr>
          <tr>
            <td>
              • Although<br>
              • Even though<br>
              • Though<br>
              • While / Whereas<br>
              • Much as<br>
              • In spite of the fact that<br>
              • Despite the fact that
            </td>
            <td>
              • Despite<br>
              • In spite of<br>
              • Notwithstanding<br>
              • Regardless of<br>
              • Irrespective of
            </td>
            <td>
              • However<br>
              • Nevertheless<br>
              • Nonetheless<br>
              • Even so / Still<br>
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

        <div class="trap-box">
          💡 <strong>Devrik Zıtlık Kalıbı (Sıfat / Zarf + AS / THOUGH):</strong><br>
          <em>Difficult as it was, the cybersecurity engineers contained the ransomware outbreak.</em><br>
          (= Although it was difficult...) ➔ Sıfat veya zarf cümlenin en başına gelip arkasından "as" veya "though" alıyorsa bu yapı <strong>zıtlık</strong> bildirir!
        </div>

        <h4 style="margin-top:1.25rem;">B) Sebep - Sonuç (Cause & Effect) Bağlaçları</h4>
        <table class="tactic-table">
          <tr><th>Sebep Bildiren (+ Cümle)</th><th>Sebep Bildiren (+ İsim)</th><th>Sonuç Bildiren Geçiş Zarfları</th></tr>
          <tr>
            <td>
              • Because<br>
              • Since<br>
              • As<br>
              • Inasmuch as<br>
              • Seeing that / Given that<br>
              • Now that (mademki)
            </td>
            <td>
              • Due to<br>
              • Owing to<br>
              • Because of<br>
              • On account of<br>
              • In view of<br>
              • Thanks to (+ olumlu)<br>
              • As a result of
            </td>
            <td>
              • Therefore<br>
              • Thus<br>
              • Consequently<br>
              • Hence<br>
              • As a result<br>
              • Accordingly<br>
              • For this reason
            </td>
          </tr>
        </table>

        <h4 style="margin-top:1.25rem;">C) Amaç (Purpose) Bildiren Bağlaçlar</h4>
        <ul>
          <li><strong>So that / In order that (+ S + can/could/will/would + V1):</strong> ...-sın diye / amacıyla.<br>
          <em>Banks encrypt biometric data <u>so that</u> identity theft can be prevented.</em></li>
          <li><strong>In order to / So as to / To (+ V1):</strong> ...-mek amacıyla (kısaltılmış amaç).<br>
          <em>The Central Bank intervened <u>in order to stabilize</u> the volatile currency.</em></li>
          <li><strong>Lest / For fear that (+ S + should + V1 veya yalın V1):</strong> ... olmasın diye / korkusuyla.<br>
          <em>The servers are cooled continuously <u>lest</u> an overheat trigger an emergency shutdown.</em></li>
          <li><strong>For fear of (+ Noun / V-ing):</strong> ... korkusuyla (+ isim).</li>
        </ul>

        <h4 style="margin-top:1.25rem;">D) İkili (Correlative) Bağlaçlar</h4>
        <ul>
          <li><strong>Not only ... but also ...:</strong> Yalnızca ... değil, aynı zamanda ... da.</li>
          <li><strong>Neither ... nor ...:</strong> Ne ... ne de ... (Fiilin tekillik/çoğulluğu 2. özneye uyar).</li>
          <li><strong>Either ... or ...:</strong> Ya ... ya da ... (Fiilin tekillik/çoğulluğu 2. özneye uyar).</li>
          <li><strong>Both ... and ...:</strong> Hem ... hem de ... (Fiil daima çoğuldur).</li>
          <li><strong>Whether ... or (not) ...:</strong> İster ... ister ... / ... olup olmadığı.</li>
          <li><strong>The more ..., the more ...:</strong> Ne kadar ..., o kadar ... (Her iki tarafta da comparative aranır).</li>
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
        <h3>1. Zarf Cümleciklerinde Kısaltma (Adverbial Reductions)</h3>
        <p>İki cümleciğin öznesi <strong>aynı olduğunda</strong> bağlaç ve özne kaldırılarak fiil kısaltılır:</p>

        <table class="tactic-table">
          <tr><th>Kısaltma Formu</th><th>Zaman İlişkisi</th><th>Etken / Edilgen</th><th>Örnek Yapı</th></tr>
          <tr>
            <td><strong>V-ing</strong></td>
            <td>Eşzamanlı (Aynı anda gerçekleşen)</td>
            <td>Aktif (Etken)</td>
            <td><em><u>Analyzing</u> the transaction logs, the security analyst identified the anomaly.</em></td>
          </tr>
          <tr>
            <td><strong>Having + V3</strong></td>
            <td>Öncelikli (Daha önce tamamlanmış)</td>
            <td>Aktif (Etken)</td>
            <td><em><u>Having completed</u> the quarterly audit, the inspectors submitted their report.</em></td>
          </tr>
          <tr>
            <td><strong>V3 (Past Participle)</strong></td>
            <td>Eşzamanlı / Genel durum</td>
            <td>Pasif (Edilgen)</td>
            <td><em><u>Protected</u> by multilayered firewalls, the banking servers are resilient to attacks.</em></td>
          </tr>
          <tr>
            <td><strong>Having been + V3</strong></td>
            <td>Öncelikli edilgen eylem</td>
            <td>Pasif (Edilgen)</td>
            <td><em><u>Having been approved</u> by the risk committee, the commercial loan was released.</em></td>
          </tr>
        </table>

        <div class="trap-box">
          💡 <strong>Çözüm Taktiki:</strong> Virgülden hemen sonraki ana cümlenin öznesine bakın!<br>
          • Özne eylemi <strong>kendi mi yapıyor (Aktif)</strong>? ➔ <strong>V-ing</strong> veya <strong>Having V3</strong> seçin.<br>
          • Özne eyleme <strong>maruz mu kalıyor (Pasif)</strong>? ➔ <strong>V3</strong> veya <strong>Having been V3</strong> seçin.
        </div>

        <h3 style="margin-top:1.5rem;">2. Sıfat Cümleciği (Relative Clause) Kısaltmaları</h3>
        <p>Bir ismi niteleyen "which / who / that" cümleleri şu şekilde sadeleştirilir:</p>
        <ul>
          <li><strong>Aktif Fiil ➔ V-ing:</strong><br>
          <em>The software <u>which monitors</u> interbank transactions...</em> ➔ <em>The software <u>monitoring</u> interbank transactions...</em></li>
          <li><strong>Pasif Fiil ➔ V3:</strong><br>
          <em>The funds <u>which were transferred</u> yesterday...</em> ➔ <em>The funds <u>transferred</u> yesterday...</em></li>
        </ul>

        <h3 style="margin-top:1.5rem;">3. "TO + V1" İle Yapılan Özel Kısaltmalar</h3>
        <p>Şu özel belirteçlerden sonra gelen sıfat cümleciği kısaltması kesinlikle <strong>TO + V1</strong> (pasif ise <strong>TO BE + V3</strong>) olur:</p>
        <ul>
          <li><strong>The first / The second / The last / The only:</strong><br>
          <em>Ziraat Bank was <u>the first bank to adopt</u> structured agricultural credit programs in Turkey.</em></li>
          <li><strong>Superlatives (The best, the most advanced, the fastest):</strong><br>
          <em>It is <u>the most secure protocol to be implemented</u> across the enterprise this year.</em></li>
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
        <p>Vurguyu artırmak için cümlenin başına olumsuz veya kısıtlayıcı bir zarf geldiğinde, cümle <strong>soru formu (Yardımcı Fiil + Özne + Asıl Fiil)</strong> alır. Cümle soru değil düz bir ifadedir ancak dizilişi devriktir.</p>

        <div class="formula-box">
          <strong>Inversion Formülü:</strong><br>
          [Olumsuz / Kısıtlayıcı Öğe] + <strong>[Yardımcı Fiil (do/did/have/is/can/should)]</strong> + <strong>[Özne]</strong> + <strong>[Asıl Fiil]</strong>
        </div>

        <h3 style="margin-top:1.5rem;">2. Cümleyi Devrik Yapan 5 Temel Grup</h3>

        <h4>A) Olumsuzluk & Kısıtlama Zarfları (Rarely, Seldom, Hardly, Scarcely, Barely, Never, Little)</h4>
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
          <p><em><u>Not only did the AI system detect</u> the unauthorized intrusion, <u>but it also blocked</u> the IP address immediately.</em><br>
          <span class="tr-text">➔ Yapay zeka sistemi yalnızca yetkisiz sızıntıyı tespit etmekle kalmadı, aynı zamanda IP adresini derhal engelledi.</span></p>
        </div>

        <h4>D) "No sooner ... THAN" & "Hardly / Scarcely ... WHEN" (-er -emez)</h4>
        <div class="example-box">
          <p><em><u>No sooner had the stock exchange opened THAN</u> the massive sell-off began.</em><br>
          <span class="tr-text">➔ Borsa açılır açılmaz devasa satış dalgası başladı.</span></p>
        </div>
        <div class="trap-box">
          ⚠️ <strong>Sınav Eşleşme Tuzağı:</strong><br>
          • <strong>No sooner</strong> ➔ daima <strong>THAN</strong> ile eşleşir!<br>
          • <strong>Hardly / Scarcely / Barely</strong> ➔ daima <strong>WHEN</strong> ile eşleşir!
        </div>

        <h4>E) "Only" Yapıları (Sınavların Büyük Tuzağı!)</h4>
        <p>Cümle başına gelen "Only" ifadelerinde devriklik kuralına dikkat edin:</p>
        <ul>
          <li><strong>Only + zarf / edat öbeği:</strong> Devriklik hemen gerçekleşir.<br>
          <em><u>Only by updating</u> the legacy architecture <u>can the bank ensure</u> real-time payment reliability.</em></li>
          <li>⚠️ <strong>Only when / Only after / Only if + Yan Cümle:</strong> Devriklik yan cümlede DEĞİL, <strong>ANA CÜMLEDE</strong> yapılır!<br>
          <em>Only after the auditors examined the transaction logs <u>did they discover</u> the accounting discrepancy.</em></li>
        </ul>
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
        <p>Bankacılık, bilişim ve mevzuat metinlerinde eylemi yapan şahıstan ziyade <strong>eylemin kendisi</strong> ön planda olduğu için pasif çatı soruların merkezindedir:</p>

        <div class="formula-box">
          <strong>Pasif Formülü:</strong> BE + V3 (Past Participle)<br>
          • Present Simple: is/are + V3<br>
          • Past Simple: was/were + V3<br>
          • Modal Pasif: must be + V3 / should be + V3 / can be + V3<br>
          • Present Perfect Pasif: has/have been + V3<br>
          • Modal Perfect Pasif: must have been + V3 (geçmiş çıkarım edilgen)
        </div>

        <h3 style="margin-top:1.5rem;">2. Impersonal Passives (Raporlama / Söylenti Pasifleri)</h3>
        <p>Ekonomi ve finans haberlerinde sıkça test edilen çift yüklemli raporlama yapılarıdır:</p>
        <div class="example-box">
          <p><strong>Kalıp 1 (It is said/estimated that...):</strong><br>
          <em><u>It is estimated that</u> global digital payment volume will double by 2030.</em><br>
          <span class="tr-text">➔ Küresel dijital ödeme hacminin 2030 yılına kadar iki katına çıkacağı tahmin edilmektedir.</span></p>
          
          <p><strong>Kalıp 2 (Özne ile başlama - Genel Durum ➔ To V1):</strong><br>
          <em>The Central Bank <u>is expected to keep</u> benchmark interest rates steady this quarter.</em><br>
          <span class="tr-text">➔ Merkez Bankası'nın bu çeyrekte gösterge faiz oranlarını sabit tutması bekleniyor.</span></p>

          <p><strong>Kalıp 3 (Özne ile başlama - Geçmiş Eylem ➔ To Have V3):</strong><br>
          <em>The malicious hackers <u>are reported to have accessed</u> sensitive client databases last week.</em><br>
          <span class="tr-text">➔ Kötü niyetli bilgisayar korsanlarının geçen hafta hassas müşteri veritabanlarına eriştiği bildirilmektedir.</span></p>
        </div>

        <h3 style="margin-top:1.5rem;">3. Causatives (Ettirgen Yapılar)</h3>
        <p>Bir işi kendisi yapmayıp başkasına yaptırma durumudur. Sınavlarda fiilin yalın mı, to ile mi yoksa V3 ile mi geleceği test edilir:</p>
        <table class="tactic-table">
          <tr><th>Kalıp</th><th>Nesne Türü</th><th>Fiil Formu</th><th>Örnek</th></tr>
          <tr><td><strong>Have + someone</strong></td><td>Kişi (Aktif)</td><td><strong>V1 (Yalın)</strong></td><td><em>The manager <u>had the IT team patch</u> the server.</em></td></tr>
          <tr><td><strong>Get + someone</strong></td><td>Kişi (Aktif)</td><td><strong>TO + V1</strong></td><td><em>The manager <u>got the team to patch</u> the server.</em></td></tr>
          <tr><td><strong>Make + someone</strong></td><td>Kişi (Zorlama)</td><td><strong>V1 (Yalın)</strong></td><td><em>The strict policy <u>made staff change</u> passwords monthly.</em></td></tr>
          <tr><td><strong>Let + someone</strong></td><td>Kişi (İzin)</td><td><strong>V1 (Yalın)</strong></td><td><em>The firewall <u>lets authorized IPs access</u> the database.</em></td></tr>
          <tr><td><strong>Have / Get + something</strong></td><td>Nesne (Pasif)</td><td><strong>V3</strong></td><td><em>The bank <u>had its infrastructure audited</u> by an external firm.</em></td></tr>
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
        <p>Resmi tavsiye, zorunluluk, talep veya öneri bildiren fiil veya sıfatlardan sonra gelen <strong>"that"</strong> cümlesinde, özne ne olursa olsun (He, She, It, The bank olsa dahi!) fiil <strong>YALIN (Base Form - V1)</strong> kalır. -s takısı ALMAZ, geçmiş zaman eki ALMAZ!</p>

        <div class="formula-box">
          <strong>Formül:</strong><br>
          [Demand / Insist / Require / Mandate / Recommend that] + [Subject] + <strong>[V1 (Yalın Fiil)]</strong><br>
          • <em>Olumsuz ise:</em> Subject + <strong>NOT + V1</strong><br>
          • <em>Pasif ise:</em> Subject + <strong>BE + V3</strong>
        </div>

        <h3 style="margin-top:1.5rem;">2. Bu Kuralı Tetikleyen Fiiller ve Sıfatlar</h3>
        <ul>
          <li><strong>Fiiller:</strong> demand, require, request, insist, mandate, recommend, suggest, urge, propose, stipulate, advise</li>
          <li><strong>Sıfatlar:</strong> It is crucial that, It is vital that, It is essential that, It is mandatory that, It is imperative that, It is important that</li>
        </ul>

        <div class="example-box">
          <p><strong>Örnek 1 (Üçüncü Tekil Şahıs Tuzağı):</strong><br>
          <em>The banking regulator demanded that each commercial bank <u>increase</u> (NOT increases!) its emergency capital reserves.</em><br>
          <span class="tr-text">➔ Bankacılık düzenleyicisi, her bir ticari bankanın acil durum sermaye rezervlerini artırmasını talep etti. (Özne 'each bank' tekil olmasına rağmen fiil yalındır!)</span></p>

          <p><strong>Örnek 2 (Pasif Subjunctive):</strong><br>
          <em>It is imperative that all electronic wire transactions <u>be logged</u> immediately.</em><br>
          <span class="tr-text">➔ Tüm elektronik havale işlemlerinin derhal kaydedilmesi zorunludur. (is logged değil, BE logged!)</span></p>

          <p><strong>Örnek 3 (Olumsuz Subjunctive):</strong><br>
          <em>The compliance officer insisted that the branch <u>not disburse</u> the funds before verification.</em><br>
          <span class="tr-text">➔ Uyum yetkilisi, doğrulama yapılmadan önce şubenin fonları ödememesi konusunda ısrar etti. (does not disburse değil, NOT disburse!)</span></p>
        </div>

        <div class="trap-box">
          🎯 <strong>Sınav Tüyosu:</strong> Şıklarda üçüncü tekil özneye rağmen -s takısı almamış çıplak bir fiil (örn: *increase, provide, disclose*) görüyorsanız ve soru kökünde *mandated that / recommended that / essential that* varsa, o şık %100 doğru cevaptır!
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
        <h3>1. Çeviri Sorularında 15 Saniye Metodu (Matematiksel Eleme)</h3>
        <p>Çeviri sorularını metni baştan sona Türkçeye veya İngilizceye çevirerek çözmeye çalışmak büyük bir zaman kaybıdır. Bunun yerine 3 aşamalı eleme uygulanır:</p>

        <div class="formula-box">
          <strong>3 Aşamalı Eleme Tekniği:</strong><br>
          1. <strong>Ana Yüklemi Eşleştirin:</strong> Cümlenin asıl yüklemini, zamanını ve çatısını bulun.<br>
          &nbsp;&nbsp;&nbsp;&nbsp;➔ Örn: <em>"has been postponed"</em> ➔ Türkçe karşılığı <em>"ertelenmiştir"</em> olmalıdır. <em>"Ertelendi", "ertelenecektir", "ertelenebilir"</em> gibi seçenekleri anında eleyin (Genellikle 2-3 şık elenir).<br><br>
          2. <strong>Ana Özneyi Kontrol Edin:</strong> Cümlenin gerçek öznesi kim?<br>
          &nbsp;&nbsp;&nbsp;&nbsp;➔ Örn: <em>"The Central Bank"</em> cümlenin öznesiyse, Türkçe cümlenin başında <em>"Merkez Bankası ..."</em> bulunmalıdır.<br><br>
          3. <strong>Bağlacı ve Zaman Zarflarını Doğrulayın:</strong><br>
          &nbsp;&nbsp;&nbsp;&nbsp;➔ <em>"Although"</em> varsa <em>"-e rağmen"</em>; <em>"In order to"</em> varsa <em>"-mek amacıyla"</em>; <em>"Unless"</em> varsa <em>"-medikçe"</em> ifadesini arayın.
        </div>

        <h3 style="margin-top:1.5rem;">2. Paragraf ve Okuduğunu Anlama Taktikleri</h3>
        <ul>
          <li><strong>Önce Soru Köklerini Okuyun:</strong> Metne geçmeden önce altındaki 3-4 sorunun ne istediğini (Which of the following is true?, Why did the author mention...?, What can be inferred...?) tarayın.</li>
          <li><strong>Aşırı Genelleme (Absolute Words) Tuzakları:</strong> Seçenekte <em>all, every, always, never, completely, exclusively, solely, impossible</em> gibi mutlak kelimeler varsa, metinde açıkça belirtilmedikçe bu şıklar genellikle <strong>YANLIŞ ÇELDİRİCİDİR</strong>.</li>
          <li><strong>Akademik İfadeler Doğru Cevap Olmaya Yatkındır (Hedging):</strong> <em>may, might, can, likely, often, tend to, suggest</em> gibi ihtiyatlı ve esnek ifadeler barındıran şıklar büyük oranda doğru cevaptır.</li>
          <li><strong>Eş Anlamlı Kelime Oyunu (Paraphrase):</strong> Doğru cevap metindeki cümlenin kelimesi kelimesine kopyası değildir; metindeki anlamın eş anlamlı kelimelerle (synonyms) yeniden ifade edilmiş halidir (Örn: metinde <em>"drop significantly"</em> derken şıkta <em>"tumble sharply"</em> yazar).</li>
        </ul>

        <h3 style="margin-top:1.5rem;">3. Paragraf Tamamlama & Anlatımı Bozan Cümle Taktikleri</h3>
        <table class="tactic-table">
          <tr><th>Teknik</th><th>Nasıl Uygulanır?</th></tr>
          <tr>
            <td><strong>Referans Kelime Takibi</strong></td>
            <td>Boşluktan sonraki cümlede <em>"This policy", "These individuals", "Such measures", "However"</em> gibi referans ifadeler varsa, boşluğa bu ifadenin işaret ettiği tekil/çoğul ismi barındıran cümle gelmelidir.</td>
          </tr>
          <tr>
            <td><strong>Konu Kapsamı & Kronoloji</strong></td>
            <td>Paragraf genel bir olgudan bahsediyorken araya aniden spesifik bir olay veya tarihin girmesi; ya da geçmişten geleceğe akarken aniden geçmişe dönülmesi anlatımı bozan cümleyi (Irrelevant sentence) ele verir.</td>
          </tr>
        </table>
      </div>
    `
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LESSONS_DATA };
}
