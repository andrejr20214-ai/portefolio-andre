document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Barra de Navegação do Portefólio (100% baseada no seu CSS original)
  const navHTML = `
    <style>
      /* Usar var(--bg) garante que o menu tem a mesma cor de fundo do site */
      .main-nav { position: sticky; top: 0; background: var(--bg); border-bottom: 1px solid var(--line); z-index: 1000; padding: 15px 0; }
      .nav-wrap { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; }
      
      /* Logótipo */
      .nav-logo { font-weight: 800; font-size: 18px; color: var(--text); text-decoration: none; letter-spacing: -0.02em; }
      
      /* Links Principais */
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
        min-width: 150px;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px 0;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
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
        color: var(--accent);
      }

      /* Adaptação Inteligente para Telemóvel */
      @media (max-width: 768px) {
        .nav-wrap { flex-direction: column; justify-content: center; }
        .nav-links { gap: 14px; }
        .dropdown { padding: 0; text-align: center; width: 100%; }
        .dropdown-trigger { display: none; /* Esconde o botão "Mais" */ }
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
        <!-- Nome/Logótipo -->
        <a href="index.html" class="nav-logo">
          André <span style="color: var(--accent);">Rodrigues</span>
        </a>
        
        <div class="nav-links">
          <!-- Ligações Principais (As mais importantes para um portefólio) -->
          <a href="index.html" class="nav-link" style="color: var(--muted); text-decoration: none; transition: 0.2s;">Início</a>
          <a href="sobre.html" class="nav-link" style="color: var(--muted); text-decoration: none; transition: 0.2s;">Sobre Mim</a>
          <a href="projetos.html" class="nav-link" style="color: var(--muted); text-decoration: none; transition: 0.2s;">Projetos</a>
          <a href="caderno.html" class="nav-link" style="color: var(--muted); text-decoration: none; transition: 0.2s;">O Caderno</a>
          
          <!-- Submenu para ligações complementares -->
          <div class="dropdown">
            <span class="dropdown-trigger">Mais <span style="font-size: 10px;">▼</span></span>
            <div class="dropdown-content">
              <a href="contactos.html" class="nav-link">Contactos</a>
              <a href="curriculo.html" class="nav-link">Currículo (CV)</a>
            </div>
          </div>

          <!-- Acesso à Gestão -->
          <a href="admin/" target="_blank" style="color: var(--accent); text-decoration: none; border: 1px solid var(--line); padding: 6px 14px; border-radius: 8px; font-size: 13px;">Back Office</a>
        </div>
      </div>
    </nav>
  `;
  
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Sistema que destaca a página onde o utilizador se encontra
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.color = "var(--text)";
      link.style.fontWeight = "700";
    }
  });

  // 2. Barra Superior de Leitura (Scroll Progress)
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

  // 3. O Motor do Cursor Magnético
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Efeitos ao passar por cima de botões e links
  document.querySelectorAll('a, button, article, .dropdown-trigger').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '36px'; cursor.style.height = '36px'; cursor.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '16px'; cursor.style.height = '16px'; cursor.style.opacity = '0.6';
    });
  });
});
