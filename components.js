document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Injeção Automática da Barra de Navegação (Agora Responsiva)
  const navHTML = `
    <style>
      .main-nav { position: sticky; top: 0; background: rgba(11, 19, 41, 0.85); backdrop-filter: blur(16px); border-bottom: 1px solid var(--line); z-index: 1000; padding: 15px 0; }
      .nav-wrap { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; }
      .nav-logo { font-weight: 800; font-size: 18px; color: var(--text); text-decoration: none; letter-spacing: -0.02em; }
      .nav-links { display: flex; gap: 20px; align-items: center; font-size: 14px; font-weight: 600; flex-wrap: wrap; justify-content: center; }
      
      /* Se o ecrã for pequeno, o menu centra-se e empilha */
      @media (max-width: 600px) {
        .nav-wrap { flex-direction: column; justify-content: center; }
        .nav-links { gap: 12px; }
      }
    </style>
    <nav class="main-nav">
      <div class="wrap nav-wrap">
        <a href="index.html" class="nav-logo">
          NEHS <span style="color: var(--accent);">2026</span>
        </a>
        <div class="nav-links">
          <a href="index.html" style="color: var(--muted); text-decoration: none; transition: 0.2s;" class="nav-link">Início</a>
          <a href="propostas.html" style="color: var(--muted); text-decoration: none; transition: 0.2s;" class="nav-link">Propostas</a>
          <a href="candidatos.html" style="color: var(--muted); text-decoration: none; transition: 0.2s;" class="nav-link">Equipa</a>
          <a href="admin/" target="_blank" style="color: var(--accent); text-decoration: none; border: 1px solid var(--line); padding: 6px 14px; border-radius: 8px; font-size: 13px;">Back Office</a>
        </div>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Destaca o link ativo
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.color = "var(--text)";
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

  // 3. Cursor Magnético Customizado (Oculto em telemóveis por padrão via CSS, mas mantemos o script para Desktop)
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
