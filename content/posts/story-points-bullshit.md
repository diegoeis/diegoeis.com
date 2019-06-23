---
title: Histórias menores são a resposta, Story Points são bullshit
type: post
date: 2017-08-15
tags:
- agile
- product management
- gestao e lideranca
published: false
---

Definir Story Points é uma técnica muito conhecida pelos times de software ágeis. O time estima (chuta) quantos pontos valem uma determinada história e essa história entra ou não na sprint, dependendo da capacidade baseada nas pontuações das histórias completadas anteriormente.

Para facilitar, suponha que na Sprint anterior, o time completou 3 histórias, de 5 pontos cada uma. Isso quer dizer que a capacidade do time é de fazer 15 pontos por Sprint. E é aqui que os problemas começam: quantas histórias equivalem a 5 pontos? Na sprint anterior isso significou 3 histórias. Na próxima sprint, o time pegou duas histórias: uma de 13 e outra de 2. Isso quer dizer que eles terminarão a história de 2 pontos mais rápido que a de 13? O que significam esses pontos? São horas, dias ou semanas? Quem vai pegar a história de 13 pontos, um júnior ou um sênior?

Não é incomum e você pode confirmar isso em vários livros, fóruns e blogs, que a maioria dos times e gestores de produto confundem Story Points como uma unidade de **produtividade** e não de **estimativa**, que é o que ela pretende ser. 

> The idea with story estimation is that you figure out, somehow, how “big” each story is, which you can use to figure out how long each story will take, then add them up and that’s how many you can do in an iteration. -- Ron Jeffries

Como o Ron Jeffries diz: a ideia de estimar uma história é entender quão grande a história é. Sabendo o tamanho da história, você talvez saiba em quanto tempo aquela história será desenvolvida. Story Points são, por natureza, uma **abstração** desse tamanho. Logo, nós usamos uma abstração de tamanho para ver se uma tarefa caberá dentro de uma timebox. Se a pontuação de uma tarefa for muito alta, a tarefa é muito grande, logo, não cabe nessa timebox (digamos 2 semanas). Aí encostamos em outro erro comum: transformar Story Points em horas (ou qualquer outra unidade de tempo). 1 Story Point vira 1 hora e assim por diante.   
Me diga com sinceridade: você já viu algum programador acertar em quantas horas uma tarefa foi feita? Eu, nunca. Você consegue ter alguma confiança de que esse mesmo programador acertará a quantidade pontos exatas de uma tarefa?

A realidade dura é que **ninguém realmente sabe quanto tempo vai durar para fazer uma tarefa/issue**. As equipes e principalmente os PO/PM/Stakeholders precisam lidar com isso. Estimativas são por natureza um CHUTE.

> Breaking down a user story into tasks is fine to understand what will be involved in completing it, but spending loads of time estimating tasks and tracking the tasks on agile planning boards/tools is a lot of wasted energy and a relic of waterfall-based planning schemes. -- https://www.industriallogic.com/blog/stop-using-story-points/

É exatamente por isso que **não importa qual metodologia** de estimativa que você está usando, o que importa de verdade é **quebrar as histórias no menor tamanho possível, mantendo-a funcional e que entregue valor para o cliente ou para o produto**.

Se você estiver usando Story Points e quebrar uma história para o menor tamanho possível, essa história sempre terá uma pontuação bem muito baixa, correto? Dado que o time sempre quebrará as históris no menor tamanho possível, pontuar perde o sentido, já que os Story Points serão sempre baixos. Aí, nesse caso, valeria mais a pena medirmos quantas histórias estão sendo entregues e não mais quantos pontos, certo?
Exemplo: existem duas histórias, a primeira delas é criar um endpoint simples na API do seu produto (esse endpoint só vai devolver o nome do cliente, logo, não haverá nenhuma lógica de foguete para trazer esse valor). A outra é que time de design decidiu de trocar a posição e a cor de um botão com o dev front-end do time.
Eu julgo que são duas tarefas, bem pequenas, mas que a tarefa do front-end vai levar menos tempo que a tarefa do Endpoint. Logo, seu time entregará DUAS tarefas. Perceba que retiramos a abstração. 

Falar que o time entrega duas tarefas em determinado espaço de tempo, é muito mais útil e exato que dizer que o time entrega 5 pontos (que pode significar 5 horas ou seja lá o que os 5 pontos signifique para o seu time). A tarefa, quebrada no menor tamanho possível, vai levar quanto tempo for necessário para ser feita. O time (e o gestor) está tranquilo com isso, porque dado que a tarefa é pequena, é sabido que ela não levará muitos dias (digamos que duas semanas) pra ser feita, porque se uma tarefa levou todo esse tempo, ela não foi quebrada no seu menor tamanho. Aí isso é explicitado na Retrospectiva, resultando numa ação para que no próximo Refinement/Planning o time tome cuidado para quebrar as tarefas corretamente.


Em uma das equipes que trabalhei, nós começamos a estimar usando T-Shirt Size. Como não tínhamos NENHUMA ideia do tamanho das tarefas, definimos que uma tarefa P equivalia a uma tarefa que levaria 3 dias para ser feita. O tamanho M, levaria 5 dias e tarefas tamanho G levavam 10 dias. Dado que nossas Sprints eram de 2 semanas, nós achávamos que esses tamanhos casariam bem. Depois de algumas semanas, eu comecei a medir quanto tempo realmente levava uma tarefa P. Descobri que a tarefa P levava geralmente 5 dias para serem feitas. As tarefas M levavam por volta de 8 dias e as tarefas G levavam mais do que 15 dias. Logo percebemos que não fazia sentido NENHUM ter histórias de 15 dias no Sprint b, já que elas levavam mais tempo que a Sprint. Perceba que o ponto de mudança foi entender que uma tarefa que leva 15 dias 
  

## Para ler mais

- https://www.targetprocess.com/blog/2011/04/5-reasons-why-you-should-stop-estimating-user-stories/
- http://ronjeffries.com/articles/015-jul/what-estimates-are-not/
- https://www.mountaingoatsoftware.com/blog/dont-equate-story-points-to-hours
- https://www.mountaingoatsoftware.com/blog/why-i-dont-use-story-points-for-sprint-planning
- https://www.industriallogic.com/blog/stop-using-story-points/