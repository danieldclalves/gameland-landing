import './styles/main.css';

import logoSvg      from './assets/gameland-logo.svg';
import gameTextSvg  from './assets/game-text.svg';
import characterPng from './assets/main-character.png';
import bubblePng    from './assets/boost-bubble.png';
import communityPng from './assets/bg-community.png';
import appleSvg     from './assets/apple.svg';
import androidSvg   from './assets/android.svg';
import arrowSvg     from './assets/arrow.svg';

document.querySelector('#app').innerHTML = `
<div class="page">

  <!-- ░░ NAVBAR ░░ -->
  <nav class="navbar">
    <a class="nav__logo" href="#" aria-label="Gameland">
      <img src="${logoSvg}" alt="Gameland" />
    </a>

    <ul class="nav__links">
      <li><a href="#services">Services</a></li>
      <li><a href="#contacts">Contacts</a></li>
      <li><a href="#about">About us</a></li>
      <li><a href="#jobs">Our Jobs</a></li>
    </ul>

    <a class="btn-login" href="#login" role="button">
      Login
      <img src="${arrowSvg}" alt="" aria-hidden="true" />
    </a>
  </nav>

  <!-- ░░ CHARACTER + BUBBLE ░░ -->
  <div class="character-zone" aria-hidden="true">
    <img class="character-img" src="${characterPng}" alt="Boost — Gameland mascot" />
  </div>

  <!-- Speech bubble — animates independently -->
  <div class="speech-bubble">
    <div class="bubble-card">
      <img class="bubble-avatar" src="${characterPng}" alt="Boost avatar" />
      <div class="bubble-text">
        <strong>I am Boost, nice to meet you!</strong>
        <span>Created by Daniel Alves</span>
      </div>
    </div>
  </div>

  <!-- ░░ HERO TEXT ░░ -->
  <div class="hero-text">
    <h1 class="hero-headline">
      Choose your<br />
      awesome
      <img class="game-badge" src="${gameTextSvg}" alt="GAME" />
      <br />to play.
    </h1>

    <a class="btn-cta" href="#get-started" role="button">
      Get Started
      <img src="${arrowSvg}" alt="" aria-hidden="true" />
    </a>
  </div>

  <!-- ░░ APPS BADGE (top right) ░░ -->
  <div class="apps-badge">
    <div class="apps-icons">
      <a class="app-icon-btn" href="#app-store" aria-label="App Store">
        <img src="${appleSvg}" alt="Apple App Store" />
      </a>
      <a class="app-icon-btn" href="#google-play" aria-label="Google Play">
        <img src="${androidSvg}" alt="Google Play" />
      </a>
    </div>
    <span class="apps-label">Apps available</span>
  </div>

  <!-- ░░ COMMUNITY CARD (bottom left) ░░ -->
  <div class="community-card">
    <div class="community-img-wrap">
      <img class="community-img" src="${communityPng}" alt="Online gaming community" />
    </div>
    <div class="community-body">
      <p class="community-title">Online<br />gameland<br />community</p>
      <a class="btn-connect" href="#community" role="button">Connect now</a>
    </div>
  </div>

  <!-- ░░ LOGO VERTICAL (bottom right) ░░ -->
  <div class="logo-vertical" aria-hidden="true">
    <img src="${logoSvg}" alt="" />
  </div>

</div>
`;
