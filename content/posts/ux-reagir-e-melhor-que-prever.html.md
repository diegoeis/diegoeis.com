---
title: UX - reação é melhor que previsão
type: post
date: 2016-12-22
categories:
- design
---

Entender o usuário é algo difícil. Você pode perceber isso facilmente comparando a sua forma de usar algum serviço de internet, digamos o Facebook, com qualquer outra pessoa ao seu redor. Provavelmente você tem um costume totalmente diferente de navegar, consumir conteúdo, comentar etc. Pessoas diferentes, usam de formas diferentes um mesmo produto e isso é totalmente normal. É por isso que tentar prever cenários para desenvolver um produto para internet é algo complicado.

> But in the end, for something this complicated, it's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them. -- Steve Jobs

Para tentar diminuir essa dificuldade, é costume antigo entre os profissionais de UX entrevistarem os usuários (além de fazer outras cerimônias) afim de tentar entender qual a sua perspectiva do usuário sobre o produto/site. Geralmente, com um bom papo, você consegue pescar uma série de pontos importantes afim de tentar adiantar a solução de problemas de uso. Métodos assim, podem não ser tão eficazes por vários motivos, aqui vão alguns deles:

1. **Geralmente o usuário não sabe se expressar.** Muitas vezes, o que o usuário fala não é exatamente o problema real. Você precisa conhecer muito bem seu projeto para conseguir traduzir qual o sentido real do problema para saber onde atacar.
2. **Entrevistas com os usuários dependem do engajamento do usuário.** Fazer com o que o usuário saia da sua casa para ir até você é uma tarefa difícil e muito incomoda. Para compensar isso, alguns inventam de pagar ou dar alguma recompensa para o usuário, por um trabalho, que ao meu ver, não é de responsabilidade do usuário, mas da pessoa que está planejando o projeto. Já vi pessoas se prepararem uma semana para um encontro com os usuários, mas que nenhum usuário apareceu. As vezes a gente precisa ir até onde o usuário está, o que é ruim, por que o ambiente onde ele trabalha tem muitas distrações.
3. **Testes guiados são importantes, mas os resultados são danificados pelo ambiente estranho e pela ansiedade dos usuários.** Você já parou do lado de um designer ou de um programador enquanto ele executava uma tarefa? Cara, é desconfortável tem um papagaio de pirata "fiscalizando" o que você está fazendo. Geralmente os usuários não executam suas tarefas naturalmente, como eles executariam em dias comuns. Quando usamos frequentemente um produto, nós nos acostumamos com a interface, fluxo e outras ações. Em entrevistas, é inevitável que o usuários sinta que está sendo avaliado. Achar o contrário é se enganar.
4. **Você não vai obter respostas reais com perguntas meia boca.** É muito difícil obter boas respostas com perguntas como: "Qual a primeira ação que você faria nessa tela?" ou "Qual a primeira impressão sobre essa tela?". Há uma série de técnicas para tornar essas <a href="http://www.uxdesign.blog.br/pesquisa-com-usuarios/perguntas-a-serem-evitadas-em-pesquisa-com-usuarios/">entrevistas mais inteligentes</a>, mas infelizmente isso não é tão fácil de executar. Conto nos dedos os UXzes que vi fazerem isso da maneira correta.

Tenho certeza de que você pode citar vários outros cenários parecidos, onde usamos várias técnicas e cerimonias na tentativa de prever qual seria a melhor solução para o usuário, mas que na real, não dão respostas que possamos usar **de verdade** para solucionar os problemas do produto.

Outro dia vi uma apresentação com a seguinte frase: **Evite Fails no projeto e economize tempo**. Para mim, esse é o típico comentário comum de UX que não tem a mentalidade ágil e que não sabe trabalhar com pequenas entregas incrementais, que atrasa a entrega de valor para o cliente porque quer entregar "algo completo".

Bom, minha sugestão para esse tipo de UX: **pare de tentar prever o que seria melhor para o usuário e tente reagir à experimentos e aos dados de uso real de produção**. Colocar no ar uma mudança pequena e medir o comportamento dos usuários, ajuda muito mais a entender qual será o próximo passo. É um erro tentar prever o que seria melhor para um produto se baseando na opinião de pessoas, que embora sejam seus clientes diretos, tem expectativas e níveis de conhecimento diferentes.

## Entrega rápida de valor
Essa previsão mentirosa me leva a outro assunto: entregas pequenas são melhores que entregas grandes.
Planejar grandes mudanças de uma vez é furada. Qualquer um sabe disso. Mudanças pequenas são controláveis, causam menos impacto, são fáceis de medir os acertos e os erros. Existem exceções, claro, por exemplo em casos onde o produto precisa de um redesign completo e o realinhamento progressivo de interface é impossível. Há produtos antigos que não tem a possibilidade de fazer um realinhamento ao longo do tempo e por isso o redesign completo, feito de uma vez, é a única opção. Mas tirando essas exceções, entregas pequenas, funcionais e incrementais é o mais indicado.

Eu sei que é difícil para um UX pensar dessa forma. A maioria dos UXzes que eu já trabalhei prefere pensar na funcionalidade por inteiro. Eles têm a falsa impressão de que entregar algo pequeno, mesmo que seja funcional, é o mesmo que entregar algo incompleto. Não entra na cabeça deles entregar um pedacinho em vez da obra completa. Eles podem fazer um pedaço pequeno, porém essencial da funcionalidade, medir o comportamento do usuário e aí sim tomar a decisão de qual será o próximo passo. Transformação e adaptação é o nome do jogo.

Em um dos últimos projetos em que trabalhei, havia um UX com esse perfil mais antiquado. Deixamos de entregar mudanças importantes de interface do painel do usuário, por que o UX queria fazer um estudo para mudar a ordem das opções no menu (!). Ele ligou para vários clientes e agendou um dia de "bate papo" com eles. Se preparou dias, movimentou P.O.
- marketing, outros UXzes... Comprou comida, agendou sala. Ninguém apareceu. Final da história: o time de desenvolvimento ficou 4 meses com a nova versão da interface no forno e o usuário não recebeu uma grande melhoria no seu produto, tudo por conta de uma simples mudança no menu.

O que poderia ter sido feito: era possível ter subido a nova interface, com vários triggers para mapear o comportamento do usuário, recolhendo dados importantes, tentando descobrir quais os problemas do menu atual e planejando as possíveis soluções da próxima versão, entregando de forma incremental as novas features. Poderíamos ter feito análises do comportamento do usuário usando ferramentas como o Hotjar e sistemas similares que gravam o movimento e as ações do mouse do usuário na interface do produto. Meia hora assistindo esses vídeos já nos trariam respostas realmente importantes sobre o que é necessário modificar no menu ou em qualquer outra parte da interface.

Mas há um ponto para tomar cuidado em entregas incrementais: a feature precisa ser terminada. Ela precisa ter um ponto onde possamos dizer que ela está "completa". A abordagem de entregas incrementais pode virar um ciclo infinito e a feature pode mudar muitas vezes durante um longo período de tempo. O outro ponto é que se o P.O. não priorizar as outras tarefas da feature, ela realmente pode ficar incompleta, embora fique totalmente funcional.

Moral da história: prefira tomar decisões baseadas em dados ao invés de tentar prever as ações do usuário. Dados são fatos. Usuários, infelizmente, mentem... e há um monte de UXzes que caem nessas mentiras.

PS.: Eu não estou dizendo que cerimônias, entrevistas com o usuário e a utilização de técnicas milagrosas especiais não são válidas e inúteis. Elas devem ser aplicadas, mas não devem ser a última palavra para definir as ações do time.
