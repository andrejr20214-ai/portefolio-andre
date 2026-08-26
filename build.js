const fs = require('fs');
const path = require('path');

const pastaCaderno = path.join(__dirname, 'content', 'caderno');
let slugs = [];

if (fs.existsSync(pastaCaderno)) {
    const ficheiros = fs.readdirSync(pastaCaderno);
    
    for (const ficheiro of ficheiros) {
        if (ficheiro.endsWith('.md')) {
            const caminhoCompleto = path.join(pastaCaderno, ficheiro);
            const conteudo = fs.readFileSync(caminhoCompleto, 'utf8');
            
            // Se o artigo tiver "draft: true", o robô ignora-o e não o envia para o site
            if (!conteudo.includes('draft: true')) {
                slugs.push(ficheiro.replace('.md', ''));
            }
        }
    }
}

fs.writeFileSync(path.join(__dirname, 'lista-artigos.json'), JSON.stringify(slugs));
console.log('Sucesso: Lista de artigos gerada (Rascunhos ignorados)!', slugs);
