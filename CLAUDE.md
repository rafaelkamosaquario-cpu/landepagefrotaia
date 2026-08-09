# Frota IA — Landing Page

Site estático (HTML/CSS puro, sem build, sem framework) — a landing page de marketing do Frota IA, hospedada no GitHub Pages.

## Onde as coisas ficam

- **Repositório**: `https://github.com/rafaelkamosaquario-cpu/landepagefrotaia` (branch `main`, código na raiz).
- **Domínio ao vivo**: `https://landepage.frotaia.app.br/` — custom domain via arquivo `CNAME` na raiz. Ao mudar o domínio, editar o `CNAME` E o campo "Custom domain" em Settings → Pages (o GitHub sincroniza esse campo automaticamente a partir do arquivo, não precisa editar os dois manualmente).
- **Repositório anterior/paralelo**: `rafaelkamosaquario-cpu/Projetos-` (pasta `frotabot/`) — o deploy do GitHub Pages lá ficou instável (trava em "deployment_queued" e falha depois de ~10min). Foi por isso que este repo (`landepagefrotaia`) foi criado do zero. Não usar aquele repo pra publicar nada novo a menos que o Rafael peça explicitamente.
- **Imagens de referência/novas**: o Rafael manda prints e imagens geradas por IA pela pasta `C:\Users\Windows11\Desktop\prints-zapi`. Sempre conferir ali quando ele mencionar um nome de arquivo.
- **Termos de Uso / Política de Privacidade**: `termos-e-privacidade.html` — conteúdo é rascunho, sem revisão jurídica (o próprio texto avisa isso na página). Rafael já pediu pra aplicar mesmo assim; não é preciso repetir o aviso a cada edição futura nesse arquivo, só ao criar conteúdo legal novo.

## Regras de fluxo (importante)

- **Nunca dar `git push` sem confirmação explícita** ("sim", "publique" etc.) — mesmo depois de já ter confirmado antes na mesma sessão. Cada publicação exige um novo "sim".
- **Sempre pré-visualizar localmente antes de perguntar se publica** — usar a skill `/preview` (sobe servidor local, tira screenshot, derruba o servidor).
- Identidade do git nesse repo é local (`git config --local`), não global — já configurada (`user.name Rafael`, `user.email rafaelkamosaquario@gmail.com`).
- Número oficial do WhatsApp usado em todos os botões `wa.me`: **5541997454382** (instância de produção do Frota IA — nunca usar outro número de teste).

## Particularidades técnicas deste ambiente (Windows + Claude in Chrome)

- A ferramenta `mcp__claude-in-chrome__resize_window` **não redimensiona de verdade** neste ambiente (fica preso na resolução original). Pra simular mobile/tablet, injetar CSS temporário via `javascript_tool` sobrescrevendo as media queries relevantes, e não depender do resize real.
- A ferramenta de screenshot ocasionalmente retorna frames antigos/em cache depois de scroll ou navegação rápida. Se um screenshot parecer "errado" ou desatualizado, tentar de novo (com um pequeno `wait`) antes de assumir que é um bug real da página — ou confirmar via `getBoundingClientRect`/`innerText` no DOM, que é mais confiável que o screenshot nessa sessão.
- Ao encerrar um servidor local de preview, matar **só o processo daquela porta** (`Get-NetTCPConnection -LocalPort N | Stop-Process`) — nunca `taskkill /IM node.exe`, que derruba todos os processos Node da máquina, inclusive de outros projetos do Rafael.
