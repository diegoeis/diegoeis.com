---
title: Performance Web - Rail
date: 2016-06-26
tags: notas, performance, front-end
---

Minhas anotações da palestra do sobre performance web do Sergio Lopes, feito no Encontro Locaweb 2016.

- Otimização de web se resume em mitificar css/js, comprimir HTML, gzip, concatenar CSS/JS, sprites, cache/expires, otimizar imagens, colocar scripts no fim da página e CSS no topo, trabalhar com assíncrono, lazy load, usar CDN, diminuir cookies, coisas desse tipo. Quem já usou alguma dessas práticas?
- O que é performance exatamente? Qual é o tempo ideal para um site carregar? O que é carregar um site? Carregar o netflix é carregar o video inteiro do filme? Quem te fala que seu site está rápido?
- Medir se o site que está rápido ou não, ou seja, pelo Onload, é uma péssima ideia.
- SPA já quebra essa métrica, porque carrega uma vez e não dispara o onload de novo.
- Nós temos vários tipos de performance:
  1. Performance de carregamento. Quando clica e o browser faz alguma coisa.
  2. Interação. O cara clica num botão e aí abre uma modal. isso é uma interação. É a interação dos usuários com os eventos da página.
  3. Animação. Quanto tempo demora para a animação rodar. Dá umas travadas?
  4. Memória. O browser da crash por causa da falta de memória.
  5. Bateria. Sua aplicação mata a bateria do usuário porque fica consumindo os recursos da máquina (celular) o tempo inteiro?
- Quais são os limites da percepção de performance do usuário? A pesquisa chegou em 3 números: 100ms, 1s e 10s.
- quando algo acontece algo em 100ms, nosso cérebro acha que aquilo é instantâneo. 
- Quando demora até 1s, seu cérebro já sabe que existe uma diferença, que há uma certa lentidão. O cérebro repara que algo aconteceu. Mas seu cérebro consegue dizer que ainda estamos numa mesma tarefa, embora exista um delay.
- Depois de 10s, seu cérebro entende que acabou a tarefa. Não há uma ação e reação. Se o site demora pra carregar, ele abre uma aba do facebook para esperar e pronto, esqueceu seu site.
- RAIL: Response Animation Idle Load, é um modelo de performance que quebra o modelo de performance em 4 pontos.
- a ideia é quebrar cada uma das ações na sua página nessas quatro categorias.
## Load
- Quando o cara dá enter na URL, dá para carregar instantaneamente? Difícil… Mas talvez dá carregar tudo em 1s. Dado aqueles limites de tempo psicológicos que vimos acima.
- http://webpagetest.org
- O que realmente importa nesses números que as páginas de métricas de performance trazem?
- meça a sensação do usuário de que há alguma coisa na tela. First Minimum Paint. 
- Preste atenção no tempo de Start Render. Isso significa quando o browser começou a renderizar alguma coisa. Tente manter esse número perto do 1s.
- O SpeedIndex é o número que vocÊ realmente quer diminuir. Ele mostra quando a página mostrada para o usuário (o topo, antes da dobra, antes do primeiro scroll), para de carregar coisas
- Critical Rendering Path
- tira o JS da primeira renderização. Fácil; basta chamar os JS no final da página. O grande bloqueador é o CSS. 
- Entregue tudo que esteja acima da dobra até um segundo. 
- Use um CSS inline acima da dobra. 
- < 14Kb é um RTT (Road Trip) do servidor.
- Ao invés do inline, dá para usar server push http/2
## Animation
- O ideal do animation é que ele seja de 60fps
- os monitores hoje redesenham a tela mais ou menos 60 vezes por segundo. Isso dá a sensação de que um vídeo é um video e não um monte de foto parada tentando se mover.
- Pelo menos no Chrome e Safari, animações do CSS e etc, é feito na GPU. Isso quer dizer que o browser consegue encaixar os elementos certos na GPU, para que a placa gráfica consiga fazer seu trabalho direito
- Quando você muda alguma coisa de CSS via JavaScript, o browser precisa recalcular a posição e os outros elementos que podem estar relacionados com esse elemento modificado
- use a propriedade will-change para avisar o browser de que ele vai precisar animar algum elemento na GPU
## Responsive
- Todas as ações do usuário precisa ser executado a 100ms.
- O usuário precisa saber que sua interação foi executada. na verdade, o usuário só ter uma resposta de que sua ação foi entendida pelo sistema.
- Mostra um loading maneiro, mostra qualquer feedback que faça o usuário entender que sua ação foi executada
## Idle
- Você executa coisas na página, mas tem alguma hora que a animação já acabou de executar, sua página já foi carregada e o usuário não está executando nenhuma ação. Logo, você pod usar esse momento de ócio para disparar alguma coisa não essencial para as ações do usuário.
- O browser é single thread, tudo rola numa thread só. tanto as ações do usuário, quanto seus scripts.
- Quebre as tarefas em tardinhas: setTimeout, setImmediate, requestAnimationFrame, requestIdleCallback
- Use WebWorkers para coisas pesadas em background
- Performance é UX. O modelo de performance é focada nas ações e na experiência do usuário.
- Response em 100ms
- Animation em 16ms
- Idle em 50 ms
- Load em 1s
- 