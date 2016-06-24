---
title: Otimização Prematura - a raíz de Todo o Mal
date: 2016-06-22 00:00 UTC
tags: notes, development
---

- por que criar um site SPA?
- Quer fazer um Spotify, Google drive, um Dashboard, você faz um SPA
- Se vai fazer um site de conteúdo, e-commerce ou qualquer coisa que dependa de conteúdo, não faça SPA.
- Esse é o problema da otimização prematura. O que você quer otimizar com SPA? Mostrar texto?
- A maioria dessas tecnologias, arquiteturas e etc, otimiza muito bem alguns tipos de ambientes e isso não significa que o seu ambiente (contexto) pode ser otimizado
- Tem casos e casos para usar Microserviços. Se você está sozinho ou se o grupo de devs é pequeno, não tem por que fazer um microserviço,
- Entenda o seu contexto. Existem empresas que gastam mais de USD$100.000,00 em infra. Mas elas faturam quase 1 Bilhão.
- Custo mínimo de TI:
  - USD 1000 - Cloud
  - USD 3000 - 1 Developer
  - USD 4000 - 1 Responsável (manager, marketing, etc)
  - Você tem que estar preparado para gastar por volta de USD96.000. Este é o mínimo.
- Você precisa ganhar algo em torno de 2 milhões de dólares no ano para o custo de TI precisa ficar por volta de 5%.
- Não tente diminuir custo, tente aumentar a receita.
- Tente conseguir mais pessoas comprando seu produto, aumentando sua receita. 
- Isso acontece quando você tira os bugs do sistema e o usuário consegue finalizar a compra. É quando sue site fica no ar em dias de pico e as pessoas conseguem finalizar as compras. É aí que você ganha dinheiro
- Não se atenha a um stack. Se você usa .NET, não precisa ser tudo Microsoft. Best of Breed
- Escolha as melhores tecnologias que te trazem os maiores retornos.
- Não faz sentido uma empresa ter máquinas, racks e servidores na própria empresa. 
- A menos que você senha uma empresa de comunicação e que seu core business seja mensageria, NodeJS é uma tecnologia a se considerar.
- Pusher, PubNub
- O Pusher custa USD$ 49 para 500 conexões simultâneas. Você não vai conseguir melhor que isso. Só de cloud você vai gastar USD$30.
- Todo mundo fala de SEO, e ainda continua falando hoje. É a mesma coisa o tempo todo, é tudo astrologia.
- Acredite sempre no básico:
  - Você tem URLs amigáveis
  - usa sitemap.xml?
  - Redireciona HTTP301 
  - Usa botões de redes sociais?
  - Tem conteúdo original relevante? Se seu conteúdo é irrelevante, não adianta…
  - Não copie conteúdo dos outros.
  - Pronto, voce não precisa saber mais nada de SEO
- [The Twelve-Factor App](http://12factor.net/)
**I. Codebase**
One codebase tracked in revision control, many deploys
**II. Dependencies**
Explicitly declare and isolate dependencies
**III. Config**
Store config in the environment
**IV. Backing services**
Treat backing services as attached resources
**V. Build, release, run**
Strictly separate build and run stages
**VI. Processes**
Execute the app as one or more stateless processes
**VII. Port binding**
Export services via port binding
**VIII. Concurrency**
Scale out via the process model
**IX. Disposability**
Maximize robustness with fast startup and graceful shutdown
**X. Dev/prod parity**
Keep development, staging, and production as similar as possible
**XI. Logs**
Treat logs as event streams
**XII. Admin processes**
Run admin/management tasks as one-off processes
- Quando falamos em código, não precisamos estar preocupados em ganhar tempo. O que é ruim e não faça:
  - Seu sistema não tem pelo menos 70% de cobertura de testes
  - Não tem analise estática de código. É um programa lendo seu programa para dar uma nota. (Sugestão: CodeClimate)
  - Nenhum código fonte pode ter centenas de linhas por arquivo
  - Não deve ter Copy Paste em todo o lugar do código. 
  - Não pode haver funções com o tamanho de mais de um page down
  - Banco de dados com vários campos inúteis
  - Se você faz um clone no projeto, você precisa rodar na máquina em minutos, não horas.
- Spree: 68k de linhas de código. 40k dessas linhas são testes.
- Magento: 300k de linhas 127k são testes. Poucos testes, 10 vezes mais problemas.
- Sua preocupação não pode ser só com performance, é preocupação com manutenabilidade.
- Programadores são ruins para priorizar coisas. 
- Instale New Relic. Não importa sua linguagem. Ele vai coletar seus dados de produção e vai te dar um monte de números para você conhecer seu produto. #ficadica
- Teoria das Correntes: como você determina a força de uma corrente, pelo elo mais fraco. Como você resolve? você troca o elo mais fraco. Quando você fizer, um outro elo será mais fraco.
- Sem métricas, sem otimização. Voce tem número?  Se não, você está chutando.
- Primeiro você faça funcionar, depois você corrige, depois você pensa em tornar rápido e finalmente, você pensa me tornar barato - Alan Kay
- Essa é a ordem, você não pode mudá-la!
- O facebook precisa do React? O Google precisa do Angular? Eles não precisam dessas tecnologias para sobreviver. 
- Você precisa usar tecnologias de empresas que realmente precisam das suas próprias tecnologias, que realmente ganham dinheiro com elas.
- Não se preocupe em reduzir custos, se preocupe em fazer funcionar, para você ganhar dinheiro e sobreviver.
- Best of Breed Open Source
- Na dúvida, não faz do zero. Use SAAS.
- SEO = Astrologia
- Manutenção > Performance
- Prioridades. Não otimize sem métricas.
- O maior problema dos programadores é a Otimização Prematura.