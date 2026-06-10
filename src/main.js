import './styles/main.css';

import logoSvg           from './assets/gameland-logo.svg';
import gameTextSvg       from './assets/game-text.svg';
import characterPng      from './assets/main-character.png';
import bubblePng         from './assets/boost-bubble.png';
import communityFullPng  from './assets/community-full.png';
import communityOvflPng  from './assets/community-overflow.png';
import communityHand2Png from './assets/community-hand2.png';
import appleSvg          from './assets/apple.svg';
import androidSvg        from './assets/android.svg';
import arrowSvg          from './assets/arrow.svg';
import decoLineSvg       from './assets/deco-line.svg';
import bottomShapeSvg    from './assets/bottom-shape.svg';

document.querySelector('#app').innerHTML = `
<div class="page">
<div class="page-stage">

  <!-- ── DECORATIVE LINE ─────────────────────────────── -->
  <img class="deco-line" src="${decoLineSvg}" alt="" aria-hidden="true" />

  <!-- ── NAVBAR ─────────────────────────────────────── -->
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
  </nav>

  <!-- ── HEADLINE ───────────────────────────────────── -->
  <div class="headline" aria-label="Choose your awesome game to play.">
    CHOOSE YOUR<br>AWESOME<br>TO PLAY.
  </div>

  <!-- ── GAME badge ─────────────────────────────────── -->
  <img class="game-badge" src="${gameTextSvg}" alt="GAME" aria-hidden="true" />

  <!-- ── GET STARTED ────────────────────────────────── -->
  <a class="btn-cta" href="#" role="button">
    Get Started
    <img src="${arrowSvg}" alt="" aria-hidden="true" />
  </a>

  <!-- ── APPS BADGE ─────────────────────────────────── -->
  <div class="apps-wrap" aria-label="Apps available">
    <div class="apps-circles">
      <!-- Android: white bg, purple icon -->
      <div class="app-circle app-android">
        <img src="${androidSvg}" alt="Google Play" />
      </div>
      <!-- Apple: purple bg, white icon -->
      <div class="app-circle app-apple">
        <img src="${appleSvg}" alt="App Store" />
      </div>
    </div>
    <span class="apps-label">Apps available</span>
  </div>

  <!-- ── MAIN CHARACTER (on top of everything) ──────── -->
  <img class="character" src="${characterPng}" alt="Boost — Gameland mascot" />

  <!-- ── SPEECH BUBBLE (animates) ───────────────────── -->
  <div class="speech-bubble" role="region" aria-label="Boost introduction">
    <div class="bubble-avatar">
      <img src="${bubblePng}" alt="Boost" />
    </div>
    <p class="bubble-main">I am Boost, nice to meet you!</p>
    <p class="bubble-sub">Created by Daniel Alves</p>
  </div>

  <!-- ── BOTTOM SECTION ─────────────────────────────── -->
  <div class="bottom-section">

    <!-- Organic card shape -->
    <img class="bottom-bg" src="${bottomShapeSvg}" alt="" aria-hidden="true" />

    <!-- Community character — layered system -->
    <!-- Purple oval visual background -->
    <div class="community-oval"></div>
    <!-- Clip container (oval shape, overflow:hidden) clips base body to oval -->
    <div class="community-oval-clip">
      <img class="community-char--base" src="${communityFullPng}" alt="Online gaming community" />
    </div>
    <!-- Overflow layer: head/arm above oval, NOT clipped -->
    <img class="community-char--ovfl"  src="${communityOvflPng}"  alt="" aria-hidden="true" />
    <!-- Right hand, NOT clipped -->
    <img class="community-char--hand2" src="${communityHand2Png}" alt="" aria-hidden="true" />

    <!-- Community info -->
    <div class="community-text">
      Online<br>gameland<br>community
    </div>
    <a class="btn-connect" href="#" role="button">Connect now</a>

    <!-- Vertical gameland logo -->
    <img class="logo-vert" src="${logoSvg}" alt="Gameland" aria-hidden="true" />

  </div>

</div>
</div>
`;

/* ── SCALE ENGINE ──────────────────────────────────── */
function scalePage() {
  const stage = document.querySelector('.page-stage');
  const page  = document.querySelector('.page');
  if (!stage || !page) return;

  const scale = window.innerWidth / 1440;
  stage.style.transform       = `scale(${scale})`;
  stage.style.transformOrigin = 'top left';
  page.style.height           = `${1193 * scale}px`;
}

scalePage();
window.addEventListener('resize', scalePage);
