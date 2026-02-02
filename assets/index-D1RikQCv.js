(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=c(t);fetch(t.href,a)}})();const m="/logo/82_logo.png",p="/hero/hero_00.jpg",y="/hero/hero_01.jpg",b="/hero/hero_02.jpg",f="/hero/hero_03.jpg",k="/hero/hero_04.jpg",$="/hero/hero_05.jpg",L="/hero/hero_06.jpg",M="/gallery/menchikatsu.jpg",w="/gallery/steak.jpg",S="/gallery/variety.jpg",j="/gallery/cozy.jpg",A={ja:{nav:{about:"お店について",gallery:"ギャラリー",contact:"アクセス"},hero:{subtitle:"Niku no Hani Shokudou",tagline:"懐かしくて新しい大衆酒場"},about:{title:"お店について",text:`目白駅スグ、提灯に誘われ階段を上がると「あのドア」がお出迎え！<br><br>
昭和歌謡のBGMが流れる店内は遊び心溢れる空間で、気軽に楽しめる雰囲気。<br><br>
料理は「この内容でこの価格？」と思わず驚く、コスパ抜群の絶品料理がズラリ！
看板メニューは、脂の甘みと肉の柔らかさが特長の林SPF豚使用のメンチカツとハンバーグ。<br><br>
ホッピーやハイリキなどレトロドリンクも充実で、新年会にも◎
毎日通える古くて新しい大衆酒場で 活力チャージ♪`},gallery:{title:"ギャラリー",items:["自慢のメンチカツ","名物ハンバーグ","豊富な一品料理","居心地の良い空間"]},contact:{title:"アクセス・お問い合わせ",location:{title:"場所",address:"東京都豊島区目白3-13-23 八白店舗 2F",detail:"目白駅すぐ！"},hours:{title:"営業時間",lunch:"ランチ営業 11:30～17:00",dinner:"ディナー営業 17:00〜23:00",lastorder:"L.O. 料理22:00 ドリンク22:30",closed:"定休日：不定休"},phone:{title:"電話番号",number:"03-6908-2313"},payment:{title:"お支払い方法",cards:"カード可（VISA、Master、JCB、AMEX、Diners）",emoney:"電子マネー可（交通系、iD、QUICPay）",qr:"QRコード決済可（PayPay、d払い、au PAY）"},instagram:"インスタグラム",tabelog:"食べログ",googleMaps:"Google マップ"},footer:"© 2024 肉の八十二食堂 (Niku no Hani Shokudou). All rights reserved."},en:{nav:{about:"About",gallery:"Gallery",contact:"Contact"},hero:{subtitle:"Niku no Hani Shokudou",tagline:"Nostalgic Yet Fresh Izakaya"},about:{title:"About Us",text:`Located right by Mejiro Station, climb the stairs drawn by our lanterns and "that door" welcomes you!<br><br>
Inside, Showa-era music fills the air in a playful space with a welcoming atmosphere.<br><br>
Our menu features incredible dishes at unbeatable prices that will make you wonder "This quality for this price?"
Our signature dishes include menchikatsu (breaded minced cutlet) and hamburger steak made with Hayashi SPF pork, known for its sweet fat and tender meat.<br><br>
We also offer a great selection of retro drinks like Hoppy and High Liquor, perfect for gatherings!
A nostalgic yet modern izakaya where you can recharge your energy any day of the week♪`},gallery:{title:"Gallery",items:["Signature Menchikatsu","Famous Hamburger Steak","Variety of Dishes","Cozy Atmosphere"]},contact:{title:"Visit Us",location:{title:"Location",address:"3-13-23 Mejiro, Toshima-ku, Tokyo, Happyaku Store 2F",detail:"Right by Mejiro Station!"},hours:{title:"Hours",lunch:"Lunch 11:30～17:00",dinner:"Dinner 17:00〜23:00",lastorder:"L.O. Food 22:00 / Drinks 22:30",closed:"Irregular holidays"},phone:{title:"Phone",number:"03-6908-2313"},payment:{title:"Payment Methods",cards:"Cards (VISA, Master, JCB, AMEX, Diners)",emoney:"E-money (Suica, iD, QUICPay)",qr:"QR Payment (PayPay, d払い, au PAY)"},instagram:"Instagram",tabelog:"Tabelog",googleMaps:"Google Maps"},footer:"© 2024 肉の八十二食堂 (Niku no Hani Shokudou). All rights reserved."}};let s="ja";function u(){const e=A[s];document.querySelector("#app").innerHTML=`
  <nav class="navbar">
    <div class="nav-container">
      <img src="${m}" alt="Niku no Hani Shokudou" class="nav-logo" />
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav-links" id="navLinks">
        <a href="#about">${e.nav.about}</a>
        <a href="#gallery">${e.nav.gallery}</a>
        <a href="#contact">${e.nav.contact}</a>
        <button class="lang-toggle" id="langToggle">
          ${s==="ja"?"EN":"日本語"}
        </button>
      </div>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-content">
      <a href="#about" class="mobile-menu-link">${e.nav.about}</a>
      <a href="#gallery" class="mobile-menu-link">${e.nav.gallery}</a>
      <a href="#contact" class="mobile-menu-link">${e.nav.contact}</a>
      <button class="lang-toggle mobile" id="langToggleMobile">
        ${s==="ja"?"EN":"日本語"}
      </button>
    </div>
  </div>

  <section class="hero">
    <div class="hero-slideshow">
      <div class="hero-slide active" style="background-image: url('${p}')"></div>
      <div class="hero-slide" style="background-image: url('${y}')"></div>
      <div class="hero-slide" style="background-image: url('${b}')"></div>
      <div class="hero-slide" style="background-image: url('${f}')"></div>
      <div class="hero-slide" style="background-image: url('${k}')"></div>
      <div class="hero-slide" style="background-image: url('${$}')"></div>
      <div class="hero-slide" style="background-image: url('${L}')"></div>
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <img src="${m}" alt="Logo" class="hero-logo" />
      <h1 class="hero-title">肉の八十二食堂</h1>
      <h2 class="hero-subtitle">${e.hero.subtitle}</h2>
      <p class="hero-text">${e.hero.tagline}</p>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">${e.about.title}</h2>
      <p class="about-text">
        ${e.about.text}
      </p>
    </div>
  </section>

  <section id="gallery" class="gallery">
    <div class="container">
      <h2 class="section-title">${e.gallery.title}</h2>
      <div class="gallery-grid">
        <div class="gallery-item">
          <div class="placeholder-img"><img src="${M}" alt="Menchikatsu" /></div>
          <p>${e.gallery.items[0]}</p>
        </div>
        <div class="gallery-item">
          <div class="placeholder-img"><img src="${w}" alt="Steak" /></div>
          <p>${e.gallery.items[1]}</p>
        </div>
        <div class="gallery-item">
          <div class="placeholder-img"><img src="${S}" alt="Variety" /></div>
          <p>${e.gallery.items[2]}</p>
        </div>
        <div class="gallery-item">
          <div class="placeholder-img"><img src="${j}" alt="Cozy" /></div>
          <p>${e.gallery.items[3]}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">${e.contact.title}</h2>
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-icon">📍</div>
          <h3>${e.contact.location.title}</h3>
          <p class="contact-address">${e.contact.location.address}</p>
          <p class="contact-detail">${e.contact.location.detail}</p>
        </div>
        <div class="contact-card">
          <div class="contact-icon">⏰</div>
          <h3>${e.contact.hours.title}</h3>
          <p class="contact-hours">${e.contact.hours.lunch}</p>
          <p class="contact-hours">${e.contact.hours.dinner}</p>
          <p class="contact-detail">${e.contact.hours.lastorder}</p>
          <p class="contact-detail">${e.contact.hours.closed}</p>
        </div>
        <div class="contact-card">
          <div class="contact-icon">📞</div>
          <h3>${e.contact.phone.title}</h3>
          <p class="contact-phone">${e.contact.phone.number}</p>
        </div>
      </div>

      <div class="payment-section">
        <h3 class="payment-title">${e.contact.payment.title}</h3>
        <div class="payment-grid">
          <div class="payment-item">
            <span class="payment-icon">💳</span>
            <p>${e.contact.payment.cards}</p>
          </div>
          <div class="payment-item">
            <span class="payment-icon">📱</span>
            <p>${e.contact.payment.emoney}</p>
          </div>
          <div class="payment-item">
            <span class="payment-icon">📲</span>
            <p>${e.contact.payment.qr}</p>
          </div>
        </div>
      </div>

      <div class="social-links">
        <a href="https://www.instagram.com/nikunohanishokudou82/" target="_blank" rel="noopener" class="social-link instagram">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          ${e.contact.instagram}
        </a>
        <a href="https://tabelog.com/en/tokyo/A1305/A130502/13277006/" target="_blank" rel="noopener" class="social-link tabelog">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Tabelog SVG Icon</title><path fill="currentColor" d="M24 14.492a.18.18 0 0 0-.14-.182l-2.252-.543a.18.18 0 0 0-.163.04a.18.18 0 0 0-.061.151a3 3 0 0 1-.57-.246a2.58 2.58 0 0 1-1.208-1.631c-.148-.605-.54-1.662-.8-2.362l-.186-.51a2.4 2.4 0 0 0-.248-.485l.905-.425a.24.24 0 0 0 .112-.325l-.347-.708a.24.24 0 0 0-.325-.11l-1.19.606a3.4 3.4 0 0 0-.545-.383c-.252-.14-.65-.342-1.063-.546l1.965-1.14a.24.24 0 0 0 .085-.333l-.407-.675a.24.24 0 0 0-.334-.082l-2.587 1.613l-.373-.177c-.087-.056-.586-.338-1.38-.03c-.759.294-1.448.508-1.454.51c-.058.019-.562.184-.763.45c-.207.276-.767.906-.957 1.011c-.223.124-.503.37-.557.654l-.007.049a.45.45 0 0 0 .104.338a.82.82 0 0 0 .466.26L.117 15.264a.246.246 0 0 0-.082.336l.076.125a.247.247 0 0 0 .335.086l8.882-5.153c-.009.164-.004.578.251.798a.58.58 0 0 0 .435.129L.749 16.297a.246.246 0 0 0-.111.329l.064.13a.247.247 0 0 0 .327.115l9.087-4.27a4 4 0 0 0-.184.776a.8.8 0 0 0 .002.214c.064.38.234.642.476.735c.12.046.298.06.524-.046c.05.192.142.435.315.574a.5.5 0 0 0 .375.11c.293-.033.648-.293.883-.648a1.7 1.7 0 0 0 .278-.767a1.5 1.5 0 0 0 0-.275c.238.083.582.255.767.6c.36.666 1.675 2.5 2.488 2.88l.469.231c.697.355 1.652.84 2.997 1.091l.02.008a.2.2 0 0 0-.023.07a.18.18 0 0 0 .105.182l2.34 1.08a.18.18 0 0 0 .128.009c.074-.021 1.847-.591 1.924-4.934m-7.195-6.794a3 3 0 0 1 .366.245l-2.632 1.34a4 4 0 0 0-.338-.191l-.383-.182c-.229-.108-.525-.246-.811-.387l2.531-1.469c.486.238.98.484 1.267.644M9.517 8.701c.023-.123.185-.296.375-.402c.297-.164.935-.93 1.072-1.11c.098-.13.408-.266.58-.321c.006-.002.706-.22 1.477-.519c.663-.257 1.043-.008 1.059.003l.026.015l.166.078l-2.37 1.477c-.409-.153-.895.004-1.166.284a.96.96 0 0 0-.227.436c-.159.316-.425.31-.458.308h-.008l-.021-.001c-.096.002-.369-.021-.486-.162c-.02-.025-.026-.05-.02-.086m.3 2.478c-.128-.11-.131-.411-.122-.529l.09-.258l.977-.567q.113.156.266.29c-.041.369-.166.63-.167.633v.001c-.002.003-.156.29-.775.454c-.183.05-.247-.006-.268-.024m1.373-.272v-.001a2.4 2.4 0 0 0 .17-.55l.467.305l-.685.349zm-.25 2.942c-.159.124-.3.173-.399.136c-.114-.044-.206-.214-.247-.455a.5.5 0 0 1 0-.136c.02-.226.134-.6.282-1.01l1.148-.538c-.104.247-.196.55-.21.865c-.02.505-.498 1.055-.573 1.138m8.68 3.881l-.03-.008c-1.303-.24-2.236-.715-2.917-1.061l-.48-.237c-.698-.326-1.97-2.073-2.32-2.722c-.308-.572-.916-.772-1.175-.833c-.05-.172-.155-.491-.282-.66a.183.183 0 0 0-.256-.035a.183.183 0 0 0-.036.256c.094.125.204.46.252.642l.001.002l.001.004c.139.463-.051.85-.176 1.038c-.196.295-.459.468-.618.486a.13.13 0 0 1-.105-.032c-.117-.094-.193-.345-.223-.525c.162-.19.6-.75.625-1.318c.02-.49.277-.97.39-1.137l.555-.261c.393.27.655.46.727.533l.121.115c.259.24.798.74.863 1.257c.091.728.951 2.402 1.935 2.871a.18.18 0 0 0 .244-.086a.18.18 0 0 0-.086-.244c-.864-.41-1.65-1.944-1.73-2.586c-.082-.65-.665-1.19-.978-1.48l-.11-.104c-.252-.253-1.87-1.308-2.361-1.625c-.475-.307-.586-.7-.61-.908c-.028-.243.034-.483.158-.611c.186-.192.6-.345.897-.133c.338.242 1.198.646 1.768.913l.376.179c.35.173.649.413.652.416c.041.035 1.122.96 1.505 1.214c.516.34.951.126 1.11-.035a.18.18 0 0 0-.003-.256a.183.183 0 0 0-.257-.002c-.026.026-.266.24-.648-.012a14 14 0 0 1-.872-.684l2.512-1.18c.107.161.19.317.236.45l.19.516c.256.692.644 1.737.786 2.32a2.93 2.93 0 0 0 1.375 1.86c.223.132.498.236.777.32c.018.847-.088 2.865-1.425 3.518zm2.406 1.32l-1.88-.868c1.137-.555 1.498-1.893 1.596-2.926a8 8 0 0 0 .024-1.075l1.864.45q-.014.471-.05.879c-.259 2.74-1.3 3.415-1.554 3.54"/></svg>
          ${e.contact.tabelog}
        </a>
        <a href="https://maps.app.goo.gl/8bdPNndvGamPvGGH8" target="_blank" rel="noopener" class="social-link maps">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          ${e.contact.googleMaps}
        </a>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <p>${e.footer}</p>
    </div>
  </footer>
`,P()}function P(){const e=document.getElementById("langToggle"),l=document.getElementById("langToggleMobile");e&&e.addEventListener("click",()=>{s=s==="ja"?"en":"ja",u()}),l&&l.addEventListener("click",()=>{s=s==="ja"?"en":"ja",t(),u()});const c=document.getElementById("hamburger"),o=document.getElementById("mobileMenu");c&&o&&c.addEventListener("click",()=>{c.classList.toggle("active"),o.classList.toggle("active"),document.body.style.overflow=o.classList.contains("active")?"hidden":""});function t(){c&&o&&(c.classList.remove("active"),o.classList.remove("active"),document.body.style.overflow="")}document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",function(d){d.preventDefault(),t();const h=document.querySelector(this.getAttribute("href"));h&&h.scrollIntoView({behavior:"smooth",block:"start"})})});const a={threshold:.1,rootMargin:"0px 0px -50px 0px"},n=new IntersectionObserver(i=>{i.forEach(d=>{d.isIntersecting&&d.target.classList.add("fade-in-visible")})},a);setTimeout(()=>{document.querySelectorAll(".about, .gallery-item, .contact-card, .social-link").forEach(i=>{i.classList.add("fade-in"),n.observe(i)})},100);const g=document.querySelectorAll(".hero-slide");let r=0;function v(){g[r].classList.remove("active"),r=(r+1)%g.length,g[r].classList.add("active")}setInterval(v,4e3)}u();
