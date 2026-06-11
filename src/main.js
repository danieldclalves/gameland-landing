import './styles/main.css';

import logoSvg        from './assets/gameland-logo.svg';
import gameBgSvg      from './assets/game-bg.svg';
import characterPng   from './assets/main-character.png';
import bubblePng      from './assets/boost-bubble-hd.png';
import community01Png from './assets/community-01.png';
import community02Png from './assets/community-02.png';
import community03Png from './assets/community-03.png';
import appleSvg       from './assets/apple.svg';
import androidSvg     from './assets/android.svg';
import arrowSvg       from './assets/arrow.svg';
import decoLineSvg    from './assets/deco-line.svg';
import bottomShapeSvg from './assets/bottom-shape.svg';

document.querySelector('#app').innerHTML = `
<div class="page">
<div class="page-stage">

  <img class="deco-line" src="${decoLineSvg}" alt="" aria-hidden="true" />

  <nav class="navbar">
    <a class="nav-logo" href="#" aria-label="Gameland">
      <img src="${logoSvg}" alt="Gameland" />
    </a>
    <ul class="nav-links">
      <li><a href="#">Services</a></li>
      <li><a href="#">Contacts</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Our Jobs</a></li>
    </ul>
    <a class="btn-login" href="#" role="button">
      Login
      <img src="${arrowSvg}" alt="" aria-hidden="true" />
    </a>
    <button class="btn-hamburger" aria-label="Abrir menu" aria-expanded="false">
      <span></span>
    </button>
  </nav>

  <div class="mobile-nav" aria-hidden="true">
    <ul class="mobile-nav-links">
      <li><a href="#">Services</a></li>
      <li><a href="#">Contacts</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Our Jobs</a></li>
    </ul>
    <a class="btn-login mobile-nav-login" href="#" role="button">
      Login
      <img src="${arrowSvg}" alt="" aria-hidden="true" />
    </a>
  </div>

  <div class="hero">
    <div class="hero-cols">

      <div class="hero-left">
        <div class="hero-headline-group">
          <div class="headline">CHOOSE YOUR<br>AWESOME</div>
          <div class="game-badge">
            <img class="game-badge-bg" src="${gameBgSvg}" alt="" aria-hidden="true" />
            <span class="game-badge-text">GAME</span>
          </div>
          <div class="headline-end">TO PLAY.</div>
        </div>

        <a class="btn-cta" href="#" role="button">
          Get Started
          <img src="${arrowSvg}" alt="" aria-hidden="true" />
        </a>

        <div class="apps-wrap" aria-label="Apps available">
          <div class="apps-circles">
            <div class="app-circle app-android">
              <img src="${androidSvg}" alt="Google Play" />
            </div>
            <div class="app-circle app-apple">
              <img src="${appleSvg}" alt="App Store" />
            </div>
          </div>
          <span class="apps-label">Apps available</span>
        </div>

        <!-- Speech bubble inside hero-left; wider than column on mobile (overflows onto character) -->
        <div class="speech-bubble" role="region" aria-label="Boost introduction">
          <div class="bubble-avatar">
            <img src="${bubblePng}" alt="Boost" />
          </div>
          <p class="bubble-main">I am Boost, nice to meet you!</p>
          <p class="bubble-sub">Created by Daniel Alves</p>
        </div>
      </div>

      <div class="hero-right">
        <img class="character" src="${characterPng}" alt="Boost — Gameland mascot" />
      </div>

    </div>
  </div>

  <div class="bottom-section">
    <img class="bottom-bg" src="${bottomShapeSvg}" alt="" aria-hidden="true" />
    <div class="community-oval-clip">
      <img class="community-char--base" src="${community01Png}" alt="Online gaming community" />
    </div>
    <img class="community-char--ovfl"  src="${community02Png}" alt="" aria-hidden="true" />
    <img class="community-char--hand2" src="${community03Png}" alt="" aria-hidden="true" />
    <div class="community-text">Online<br>gameland<br>community</div>
    <a class="btn-connect" href="#" role="button">Connect now</a>
    <img class="logo-vert" src="${logoSvg}" alt="Gameland" aria-hidden="true" />
  </div>

</div>
</div>
`;

const hamburger = document.querySelector('.btn-hamburger');
const mobileNav = document.querySelector('.mobile-nav');
hamburger.addEventListener('click', () => {
  const open = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!open));
  mobileNav.classList.toggle('mobile-nav--open', !open);
});

function scalePage() {
  const stage = document.querySelector('.page-stage');
  const page  = document.querySelector('.page');
  if (!stage || !page) return;
  if (window.innerWidth <= 767) {
    stage.style.transform = 'none';
    stage.style.width     = '100%';
    page.style.height     = 'auto';
  } else {
    const scale = window.innerWidth / 1440;
    stage.style.transform       = `scale(${scale})`;
    stage.style.transformOrigin = 'top left';
    page.style.height           = `${1193 * scale}px`;
  }
}
scalePage();
window.addEventListener('resize', scalePage);
