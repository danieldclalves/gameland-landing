import './styles/main.css';

import logoSvg        from './assets/gameland-logo.svg';
import gameTextSvg    from './assets/game-text.svg';
import characterPng   from './assets/main-character.png';
import bubblePng      from './assets/boost-bubble.png';
import bgPng          from './assets/bg-community.png';
import appleSvg       from './assets/apple.svg';
import androidSvg     from './assets/android.svg';
import arrowSvg       from './assets/arrow.svg';

// ─── HTML ─────────────────────────────────────────────
document.querySelector('#app').innerHTML = `
  <!-- ░░ NAVBAR ░░ -->
  <nav class="navbar" role="navigation" aria-label="Main navigation">

    <a href="#" class="navbar__logo" aria-label="Gameland home">
      <img src="${logoSvg}" alt="Gameland" />
    </a>

    <ul class="navbar__links" role="list">
      <li><a href="#services" aria-label="Services">Serviços</a></li>
      <li><a href="#about"    aria-label="About us">Sobre Nós</a></li>
      <li><a href="#contact"  aria-label="Contact">Contato</a></li>
    </ul>

    <div class="navbar__actions">
      <a href="#login" class="btn-login" role="button">
        Entrar
      </a>
    </div>

  </nav>

  <!-- ░░ HERO ░░ -->
  <section class="hero" id="home" aria-label="Hero section">

    <!-- Background -->
    <div class="hero__bg" aria-hidden="true">
      <img class="hero__bg-img" src="${bgPng}" alt="" />
      <div class="hero__bg-overlay"></div>
    </div>

    <!-- Main content grid -->
    <div class="hero__content">

      <!-- LEFT: copy + CTA -->
      <div class="hero__left">

        <img
          class="hero__game-text"
          src="${gameTextSvg}"
          alt="GAME"
          aria-hidden="true"
        />

        <p class="hero__eyebrow">Comunidade de Gaming Online</p>

        <h1 class="hero__headline">
          A plataforma que une<br />
          <em>gamers</em> do mundo todo
        </h1>

        <p class="hero__subline">
          Descubra novos jogos, conecte-se com outros jogadores e
          leve sua experiência de jogo para outro nível com o Gameland.
        </p>

        <a href="#signup" class="btn-cta" role="button">
          Jogar agora
          <img class="btn-cta__arrow" src="${arrowSvg}" alt="" aria-hidden="true" />
        </a>

        <!-- App store buttons -->
        <div class="hero__stores">
          <a href="#app-store" class="btn-store" role="button" aria-label="Download on App Store">
            <img class="btn-store__icon" src="${appleSvg}" alt="" aria-hidden="true" />
            <span class="btn-store__label">
              <span>Disponível na</span>
              <span>App Store</span>
            </span>
          </a>

          <a href="#google-play" class="btn-store" role="button" aria-label="Get it on Google Play">
            <img class="btn-store__icon" src="${androidSvg}" alt="" aria-hidden="true" />
            <span class="btn-store__label">
              <span>Disponível no</span>
              <span>Google Play</span>
            </span>
          </a>
        </div>

      </div><!-- /.hero__left -->

      <!-- RIGHT: character + bubble -->
      <div class="hero__right">

        <div class="hero__character-wrap">
          <!-- Speech bubble — floats independently -->
          <div class="hero__bubble" aria-label="Boost says: Oi! Eu sou o Boost, prazer em te conhecer!">
            <img src="${bubblePng}" alt="Oi! Eu sou o Boost, prazer em te conhecer!" />
          </div>

          <!-- Main character -->
          <img
            class="hero__character"
            src="${characterPng}"
            alt="Boost — mascote do Gameland"
          />

          <!-- Glow ring -->
          <div class="hero__glow" aria-hidden="true"></div>
        </div>

      </div><!-- /.hero__right -->

    </div><!-- /.hero__content -->

    <!-- Scroll hint -->
    <div class="scroll-hint" aria-hidden="true">
      <span>scroll</span>
      <span class="scroll-hint__line"></span>
    </div>

  </section>
`;

// ─── SMOOTH SCROLL for anchor links ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    // Skip purely decorative anchors
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ─── NAVBAR — add scrolled class for stronger blur ────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('navbar--scrolled', window.scrollY > 20);
}, { passive: true });
