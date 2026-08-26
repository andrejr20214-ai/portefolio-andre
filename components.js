// 1. Injetar Font Awesome
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
document.head.appendChild(fontAwesome);

document.addEventListener("DOMContentLoaded", () => {
  
  // ECRÃ DE CARREGAMENTO
  const preloaderHTML = `
  <div id="preloader">
    <div class="floating-icons">
      <i class="fa-solid fa-landmark" style="top: 15%; left: 15%; animation-delay: 0s;"></i>
      <i class="fa-solid fa-microphone" style="top: 65%; left: 20%; animation-delay: 1s;"></i>
      <i class="fa-solid fa-masks-theater" style="top: 25%; left: 75%; animation-delay: 0.5s;"></i>
      <i class="fa-solid fa-laptop-code" style="top: 70%; left: 70%; animation-delay: 1.5s;"></i>
      <i class="fa-solid fa-book-open" style="top: 45%; left: 10%; animation-delay: 0.8s;"></i>
    </div>
    <div class="loader-counter" id="loaderCounter">0%</div>
    <div class="loader-text" id="loaderText">A CARREGAR...</div>
  </div>`;
  document.body.insertAdjacentHTML("afterbegin", preloaderHTML);

  let count = 0;
  const words = ["HISTÓRIA.", "CULTURA.", "COMUNICAÇÃO."];
  const counterEl = document.getElementById('loaderCounter');
  const textEl = document.getElementById('loaderText');
  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 15) + 5; 
    if (count >= 100) count = 100;
    if (counterEl) counterEl.innerText = count + "%";
    if (count > 25 && count < 60) textEl.innerText = words[0];
    else if (count >= 60 && count < 90) textEl.innerText = words[1];
    else if (count >= 90) textEl.innerText = words[2];
    if (count === 100) {
      clearInterval(interval);
      setTimeout(() => { const p = document.getElementById('preloader'); if(p) p.classList.add('preloader-hidden'); }, 300); 
    }
  }, 60); 

  // MENU (Com o novo botão de Pesquisa/Comandos incluído)
  const navHTML = `
  <nav aria-label="Navegação Principal">
    <a class="brand" href="index.html">AR<span>.</span></a>
    <button class="mobile-toggle"><i class="fa-solid fa-bars"></i></button>
    <div class="links">
      <a href="sobre.html">Sobre</a>
      <a href="index.html#projetos">Projetos</a>
      <a href="infografico.html">Números</a>
      <a href="palestras-e-voz.html">Voz & Oratória</a>
      <a href="impacto-cidadania.html">Cidadania</a>
      <a href="servicos.html">Serviços</a>
      <a href="caderno.html">Caderno</a>
      
      <!-- Novo Botão Visível de Pesquisa/Menu Rápido -->
      <button id="searchTrigger" class="nav-search-trigger" title="Pesquisa Rápida (Cmd + K)" aria-label="Abrir Menu de Pesquisa">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>

      <a href="estante.html" class="nav-link-icon" title="A Estante"><i class="fa-solid fa-book-open nav-icon"></i></a>
      <a href="uses.html" class="nav-link-icon" title="O Meu Setup"><i class="fa-solid fa-laptop-code nav-icon"></i></a>
      <a href="contacto.html" class="nav-contact-btn">Contacto</a>
    </div>
  </nav>`;

  const footerHTML = `
  <footer class="wrap">
    <h3 style="font-size:15px;margin-bottom:10px;">Desenvolvido por André Rodrigues</h3>
    </div>
    <div class="footer-content">
      <div><span style="display:block; color:#fff; font-size:16px; font-weight:700; margin-bottom:5px;">André Rodrigues</span><span>© 2026 · Portugal</span></div>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/andrept" target="_blank" class="social-icon"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://www.instagram.com/" target="_blank" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
        <a href="mailto:andrejr.20214@gmail.com" class="social-icon"><i class="fa-solid fa-envelope"></i></a>
      </div>
    </div>
  </footer>`;

  const shareHTML = `
  <div class="share-widget">
    <span>Partilhar</span>
    <a href="#" class="share-btn" onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.href)); return false;" title="Partilhar no LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
    <a href="#" class="share-btn" onclick="window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href)); return false;" title="Partilhar no X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
    <a href="#" class="share-btn" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href)); return false;" title="Partilhar no Facebook"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#" class="share-btn" onclick="window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent('Vê isto: ' + window.location.href)); return false;" title="Partilhar no WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
    <a href="#" class="share-btn" onclick="window.location.href='mailto:?subject=' + encodeURIComponent('Portefólio de André Rodrigues') + '&body=' + encodeURIComponent('Espreita aqui: ' + window.location.href); return false;" title="Partilhar por Email"><i class="fa-solid fa-envelope"></i></a>
    <button class="share-btn" onclick="navigator.clipboard.writeText(window.location.href); alert('Link copiado!');" title="Copiar Link"><i class="fa-solid fa-link"></i></button>
  </div>`;

  const widgetsHTML = `
  <div id="customCursor"></div>
  <div id="progressBar"></div>
  <button id="backToTop" class="btn-top" aria-label="Voltar ao topo"><i class="fa-solid fa-arrow-up"></i></button>
  
  <div id="quoteShareTooltip"><i class="fa-brands fa-x-twitter"></i> Partilhar Citação</div>
  
  <!-- Menu CMD+K -->
  <div class="cmd-palette" id="cmdPalette">
    <div class="cmd-content">
      <input type="text" class="cmd-input" placeholder="Para onde queres ir? (Escreve algo...)" id="cmdInput">
      <ul class="cmd-list">
        <li><a href="index.html"><i class="fa-solid fa-house"></i> Página Inicial</a></li>
        <li><a href="sobre.html"><i class="fa-solid fa-user"></i> Sobre Mim & Testemunhos</a></li>
        <li><a href="index.html#projetos"><i class="fa-solid fa-folder-open"></i> Projetos em Destaque</a></li>
        <li><a href="caderno.html"><i class="fa-solid fa-pen-nib"></i> O Caderno (Artigos)</a></li>
        <li><a href="voz-propria.html"><i class="fa-solid fa-microphone"></i> Podcast Voz Própria</a></li>
        <li><a href="contacto.html"><i class="fa-solid fa-envelope"></i> Entrar em Contacto</a></li>
      </ul>
    </div>
  </div>
  
  <div id="secretMessage" style="position:fixed; top:50%; left:50%; transform:translate(-50%, -50%) scale(0.8); background:var(--accent); color:#000; padding:40px; border-radius:24px; z-index:9999999; text-align:center; opacity:0; pointer-events:none; transition:0.3s; box-shadow:0 20px 50px rgba(215,255,79,0.4);">
    <h2 style="font-size:32px; margin-bottom:10px;">Encontrou o Segredo! 🕵️‍♂️</h2>
    <p style="font-size:18px; font-weight:700;">"Estudar a história é a coisa mais intrigante e fascinante que pode haver."</p>
    <button onclick="document.getElementById('secretMessage').style.opacity='0'; setTimeout(()=>document.getElementById('secretMessage').style.pointerEvents='none', 300)" style="margin-top:20px; background:#000; color:#fff; border:none; padding:10px 20px; border-radius:999px; cursor:pointer; font-weight:bold;">Fantástico</button>
  </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", navHTML);
  document.body.insertAdjacentHTML("beforeend", shareHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);
  document.body.insertAdjacentHTML("beforeend", widgetsHTML);

  // SAUDAÇÃO NO CABEÇALHO
  const hours = new Date().getHours();
  let greeting = "Boa noite!";
  if (hours >= 6 && hours < 13) greeting = "Bom dia!";
  else if (hours >= 13 && hours < 20) greeting = "Boa tarde!";
  const heroContent = document.querySelector('.hero > div:not(.orb)');
  if (heroContent) {
    const greetingBadge = `<div style="display: inline-block; padding: 6px 16px; background: rgba(215, 255, 79, 0.08); border: 1px solid rgba(215, 255, 79, 0.3); color: var(--accent); border-radius: 999px; font-size: 12px; font-weight: 700; margin-bottom: 25px; letter-spacing: 0.05em; text-transform: uppercase;">👋 ${greeting}</div>`;
    heroContent.insertAdjacentHTML('afterbegin', greetingBadge);
  }

  // CURSOR MAGNÉTICO
  const cursor = document.getElementById("customCursor");
  if(cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
    const addMagnetism = () => {
      document.querySelectorAll("a, button, input").forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("magnetic"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("magnetic"));
      });
    };
    addMagnetism();
    setInterval(addMagnetism, 2000);
  }

  // PARTILHA DE CITAÇÕES
  document.addEventListener('mouseup', () => {
    const selection = window.getSelection();
    const text = selection.toString().trim();
    const tooltip = document.getElementById('quoteShareTooltip');
    
    if(text.length > 0 && tooltip) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      tooltip.style.left = rect.left + (rect.width / 2) + 'px';
      tooltip.style.top = (rect.top + window.scrollY - 15) + 'px';
      tooltip.classList.add('show');
      
      tooltip.onclick = () => {
        const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(text)}" — André Rodrigues&url=${encodeURIComponent(window.location.href)}`;
        window.open(tweetUrl, '_blank');
      };
    } else if (tooltip) {
      tooltip.classList.remove('show');
    }
  });

  // --- LÓGICA DO MENU CMD+K (ATALHO + BOTÃO VISÍVEL) ---
  const cmdPalette = document.getElementById("cmdPalette");
  const searchTrigger = document.getElementById("searchTrigger");

  const toggleCmdPalette = () => {
    if(cmdPalette) {
      cmdPalette.classList.toggle("active");
      if(cmdPalette.classList.contains("active")) {
        setTimeout(() => document.getElementById("cmdInput").focus(), 100);
      }
    }
  };

  // Abrir com o botão da lupa no menu
  if(searchTrigger) {
    searchTrigger.addEventListener("click", toggleCmdPalette);
  }

  // Abrir com o atalho do teclado (Cmd+K ou Ctrl+K) e fechar com ESC
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault(); 
      toggleCmdPalette();
    }
    if (e.key === "Escape" && cmdPalette) {
      cmdPalette.classList.remove("active");
    }
  });

  // Fechar clicando fora da caixa
  if(cmdPalette) {
    cmdPalette.addEventListener("click", (e) => { 
      if(e.target === cmdPalette) cmdPalette.classList.remove("active"); 
    });
  }

  // EASTER EGG
  let secretCode = "historia";
  let inputBuffer = "";
  document.addEventListener("keydown", (e) => {
    if(e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'textarea') return;
    inputBuffer += e.key.toLowerCase();
    if(inputBuffer.length > secretCode.length) inputBuffer = inputBuffer.substring(inputBuffer.length - secretCode.length);
    if(inputBuffer === secretCode) {
      const msg = document.getElementById('secretMessage');
      msg.style.opacity = "1";
      msg.style.pointerEvents = "all";
      msg.style.transform = "translate(-50%, -50%) scale(1)";
      inputBuffer = ""; 
    }
  });

  // MENUS E SCROLL
  const mobileBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.links');
  if(mobileBtn) mobileBtn.addEventListener('click', () => { navLinks.classList.toggle('active'); });
  document.querySelectorAll('.links a, .links button').forEach(link => {
    link.addEventListener('click', () => { if (navLinks && navLinks.classList.contains('active')) navLinks.classList.remove('active'); });
  });

  const themeToggle = document.getElementById("themeToggle");
  if(themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = document.body.getAttribute("data-theme") === "light";
      document.body.setAttribute("data-theme", isLight ? "dark" : "light");
    });
  }

  window.addEventListener("scroll", () => {
    const btnTop = document.getElementById("backToTop");
    const progressBar = document.getElementById("progressBar");
    if(btnTop) btnTop.style.display = window.scrollY > 300 ? "flex" : "none";
    if(progressBar) {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      progressBar.style.width = (winScroll / height) * 100 + "%";
    }
  });
  document.getElementById("backToTop")?.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
});

// LEITOR DE TEXTO TTS
window.toggleReader = function(btn, textElementId) {
  const text = document.getElementById(textElementId).innerText;
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    btn.innerHTML = '<i class="fa-solid fa-headphones"></i> Ouvir Artigo';
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-PT';
  utterance.rate = 1.0; 
  utterance.onend = () => { btn.innerHTML = '<i class="fa-solid fa-headphones"></i> Ouvir Artigo'; };
  window.speechSynthesis.speak(utterance);
  btn.innerHTML = '<i class="fa-solid fa-stop"></i> Parar Leitura';
};