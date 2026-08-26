document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Injeção Automática da Barra de Navegação com Submenu Responsivo
  const navHTML = `
    <style>
      .main-nav { position: sticky; top: 0; background: rgba(11, 19, 41, 0.85); backdrop-filter: blur(16px); border-bottom: 1px solid var(--line); z-index: 1000; padding: 15px 0; }
      .nav-wrap { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; }
      .nav-logo { font-weight: 800; font-size: 18px; color: var(--text); text-decoration: none; letter-spacing: -0.02em; }
      .nav-links { display: flex; gap: 24px; align-items: center; font-size: 14px; font-weight: 600; flex-wrap: wrap; justify-content: center; }
      
      /* Estilos do Submenu (Desktop) */
      .dropdown { position: relative; display: inline-block; padding: 10px 0; }
      .dropdown-trigger { color: var(--muted); cursor: pointer; display: inline-flex; align-items: center; gap: 4px; transition: 0.2s; }
      .dropdown-trigger:hover { color: var(--text); }
      .dropdown-content {
        display: none;
        position: absolute;
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 12px;
        min-width: 180px;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px 0;
        box-shadow: 0 15px 30px rgba(0,0,0,0.5);
      }
      .dropdown:hover .dropdown-content { display: flex; flex-direction: column; }
      .dropdown-content a {
        color: var(--muted);
        padding: 10px 20px;
        text-decoration: none;
        font-size: 13px;
        transition: 0.2s;
        text-align: left;
      }
      .dropdown-content a:hover {
        background: rgba(59, 130, 246, 0.1);
        color: var(--accent);
      }

      /* Adaptação para Telemóvel (O Submenu "abre-se" lado a lado) */
      @media (max-width: 768px) {
        .nav-wrap { flex-direction: column; justify-content: center; }
        .nav-links { gap: 14px; }
        .dropdown { padding: 0; text-align: center; width: 100%; }
        .dropdown-trigger { display: none; /* Esconde a palavra "Mais" no telemóvel */ }
        .dropdown-content {
          display: flex;
          flex-direction: row;
          position: static;
          transform: none;
          box-shadow: none;
          border: none;
          background: transparent;
          padding: 0;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .dropdown-content a { padding: 0; font-size: 14px; }
        .dropdown-content a:hover { background: transparent; }
      }
    </style>

    <nav class="main-nav">
      <div class="wrap nav-wrap">
        <a href="index.html" class="nav-logo">
          NEHS <span style="color: var(--accent);">2026</span>
        </a>
        <div class="nav-links">
          <a href="index.html" class="nav-link" style="color: var(--muted); text-decoration: none; transition: 0.2s;">Início</a>
          <a href="propostas.html" class="nav-link" style="color: var(--muted); text-decoration: none; transition: 0.2s;">Propostas</a>
          <a href="candidatos.html" class="nav-link" style="color: var(--muted); text-decoration: none; transition: 0.2s;">Equipa</a>
          
          <!-- O Submenu -->
          <div class="dropdown">
            <span class="dropdown-trigger">Mais <span style="font-size: 10px;">▼</span></span>
            <div class="dropdown-content">
              <a href="caderno.html" class="nav-link">O Caderno (Notícias)</a>
              <a href="debate.html" class="nav-link">Portal de Debate</a>
            </div>
          </div>

          <a href="admin/" target="_blank" style="color: var(--accent); text-decoration: none; border: 1px solid var(--line); padding: 6px 14px; border-radius: 8px; font-size: 13px;">Back Office</a>
        </div>
      </div>
    </nav>
  `;
  
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Destaca o link ativo consoante a página atual (inclui o submenu)
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.color = "var(--text)";
      link.style.fontWeight = "700";
    }
  });

  // 2. Barra de Progresso de Leitura
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed; top: 0; left: 0; height: 2px; background: var(--accent); width: 0%; z-index: 10001; transition: width 0.1s ease-out;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });

  // 3. Cursor Magnético Customizado (Desativado em telemóvel via CSS)
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, article').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '36px'; cursor.style.height = '36px'; cursor.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '16px'; cursor.style.height = '16px'; cursor.style.opacity = '0.6';
    });
  });
});
