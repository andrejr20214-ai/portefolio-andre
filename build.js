const fs = require('fs');
const path = require('path');

// Diz ao robô onde estão os artigos
const pastaCaderno = path.join(__dirname, 'content', 'caderno');
let slugs = [];

// Lê todos os ficheiros .md e guarda apenas os nomes (slugs)
if (fs.existsSync(pastaCaderno)) {
    slugs = fs.readdirSync(pastaCaderno)
        .filter(ficheiro => ficheiro.endsWith('.md'))
        .map(ficheiro => ficheiro.replace('.md', ''));
}

// Cria um ficheiro 'lista-artigos.json' invisível para o site ler
fs.writeFileSync(path.join(__dirname, 'lista-artigos.json'), JSON.stringify(slugs));
console.log('Sucesso: Lista de artigos gerada!', slugs);
