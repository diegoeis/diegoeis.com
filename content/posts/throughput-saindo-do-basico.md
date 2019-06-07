---
title: Throughput - Saindo do básico
type: post
date: 2017-05-30
tags:
- gestão e liderança
- agile
---

Em um ambiente de desenvolvimento de software, **throughput** é o número de tarefas entregues (que foram para DONE) em um período de tempo. Esse período de tempo é definido pelo time, contudo, normalmente medimos a quantidade de tarefas entregues dentro de uma semana.

Geralmente o dado de Throughput é utilizado para calcular apenas a média de entregas semanais do time. Quero que você tente pensar um pouco mais além, tentando utilizar esse dado para te dar informações mais interessantes sobre a vazão do seu time. A ideia é que você consiga ter as seguintes informações:

- Qual foi o mínimo de tarefas que o time entregou em uma semana?
- Qual foi o record de entregas de tarefas em uma semana?
- Geralmente entregamos XX tarefas por semana.
- Em 25% das vezes, o time entrega XX tarefas por semana ou menos.
- Em 75% das vezes, o time entrega XX tarefas por semana ou mais.

## Throughput é diferente de Velocity
Enquanto o primeiro marca a quantidade de tarefas feitas em um período de tempo, o segundo é baseado  na unidade que o time escolheu para definir o tamanho de uma história, portanto, são duas métricas bem diferentes.

O Throughput só é totalmente confiável se **as tarefas forem de tamanhos similares**. Eu prefiro quebrar as tarefas no menor tamanho possível de forma que elas continuem sendo incrementos funcionais. Por isso não costumamos definir **story points** ou qualquer coisa parecida para as tarefas, já que nosso objetivo é fazer com que as tarefas sejam de um tamanho suficiente para serem entregues em uma semana.

## Dia da entrega da tarefa
Não importa qual a metodologia ou framework de gestão de projetos você esteja usando, para medir o Throughput você precisará saber o dia em que a tarefa foi entregue. Não importa qual a ferramenta que você usa, contanto que você saiba a data de conclusão da tarefa.

Esse é o único dado que você precisa imediatamente. A partir dele, iremos descobrir outros dados para nos dar todas as respostas que precisamos.

## Descobrindo a semana da entrega do projeto
A partir da data da entrega do projeto, você vai descobrir a semana do ano. No meu dia a dia, eu utilizo a planilha do Google para fazer essa conta. Lá tem uma função chamada `=weeknum();`, que me dá o número da semana de uma data específica.

Abaixo segue uma tabela fake de tarefas que foram entregues. Na coluna da semana, usei a função `=weeknum();` para descobrir o número da semana.

![](https://i.imgur.com/WoCWk8Q.png)

| Semana	 | Data de entrega | Tarefa |
|:--|:--|:--|
| 1	| 1/2/2017 | Mudar cor do botão
| 2 | 1/9/2017 |  [Widget de Texto] Alterar tamanho de texto nativo do template
| 3 | 1/16/2017 | Criar fila com RabbitMQ
| 3 | 1/16/2017 | Uma outra tarefa qualquer
| 1 | 1/2/2017 |  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
| 1 | 1/2/2017 |  Morbi eu elit sed turpis imperdiet sagittis et in ligula.
| 3 | 1/16/2017 | Pellentesque sagittis nisi eu eros vulputate aliquet.
| 4 | 1/23/2017 | Vestibulum ornare sem nec consequat sodales.
| 4 | 1/23/2017 | Quisque non diam id nisi sagittis ornare.
| 2 | 1/9/2017 |  Phasellus posuere odio vitae pretium facilisis.
| 3 | 1/16/2017 | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
| 4 | 1/23/2017 | Morbi eu elit sed turpis imperdiet sagittis et in ligula.
| 1 | 1/2/2017 |  Pellentesque sagittis nisi eu eros vulputate aliquet.
| 2 | 1/9/2017 |  Vestibulum ornare sem nec consequat sodales.
| 3 | 1/16/2017 | Quisque non diam id nisi sagittis ornare.
| 4 | 1/23/2017 | Phasellus posuere odio vitae pretium facilisis.

Agora que sabemos o número de cada semana, podemos descobrir o Throughput, ou seja, a quantidade de tarefas entregues de cada uma das semanas. Para tanto, em outras células, faço outra coluna de semana, colocando os números referentes a cada semana e faço uma contagem de quantas tarefas foram entregues na mesma semana usando a função `=countif(intervalo, critério);`

![](https://i.imgur.com/Ti36irG.png)

| Semana	 | Throughput (Issues entregues) |
|:--|:--|:--|
|1|4|
|2|3|
|3|5|
|4|4|

Essa informação já é importante o suficiente para algumas pessoas: você acabou de descobrir quantas tarefas foram entregues em cada uma das semanas. Já dá pra fazer um report maroto básico para os chefões. Vamos agora tentar responder as perguntas do começo do artigo.

![](https://i.imgur.com/jkZ5DHm.png)

## Qual foi o mínimo e o máximo de tarefas entregues em uma semana?
Vários motivos podem tornar o desenvolvimento de software um ambiente complexo: bugs imprevistos em produção, infraestrutura que sai do ar, férias de desenvolvedores, falta de testes, imprevistos, pedidos de tarefas urgentes e etc. Tudo isso pode influenciar as entregas semanais do time pra pior. É legal entender os motivos que fizeram com que o time entregasse pouco em uma determinada semana.

Por outro lado, há semanas em que muitas tarefas foram entregues. Isso não é necessariamente bom, já que o time pode ter saído de uma semana ruim, onde as tarefas estavam represadas até que os problemas fossem resolvidos. Ou, se não houve problemas, a alta das entregas podem ter sido resultado da alta produtividade do time... o que é uma ótima notícia.

Para saber qual foi a semana que você entregou menos ou mais tarefas, usaremos duas medidas de dispersão: **mínimo** e **máximo**.

![](https://imgur.com/84MzTzK.png)

Bastando usar as funções `=min(intervalo)` e `=max(intervalo)`, saberemos a resposta dessas perguntas.

![](https://imgur.com/lD1EBVo.png)

No nosso exemplo, tivemos uma semana que entregamos apenas 3 histórias (semana 2), e a semana que entregamos foram 5 histórias (semana 3).

## Geralmente entregamos XX tarefas por semana.
Com o tempo, o time começa a identificar uma cadência de entregas, entregando mais ou menos o mesmo número de tarefas. Com a medida de tendência central **moda**, nós descobrimos qual é a quantidade de entregas mais comum do time.

![](https://imgur.com/avcxCBr.png)

Para descobrir esse número, usamos a função `=mode(intervalo)` do próprio Google Sheets e pronto.

![](https://imgur.com/eWGfk4C.png)

Logo, descobrimos que na metade (ou mais) das semanas analisadas, nós entregamos 4 tarefas.

É possível também ter uma análise desse tipo usando um gráfico de histograma, que vai mostrar com que frequência entregamos uma quantidade específica de tarefas. É um assunto pra outro post, talvez, mas segue abaixo o gráfico:

![](https://imgur.com/jl5o3Zz.png)

## Quartis
Agora, para sabermos quantas tarefas são entregues por exemplo, em 1/4 (um quarto) do tempo, nós usamos os quartis, que são medidas que dividem uma amostra. Basicamente os quartis dividem nossa distribuição (as tarefas entregues nas semanas) em 4 partes, de forma que consigamos responder que em 25% o time entrega XX tarefas.

Para isso, usamos a função `=percentile(intervalo; porcentagem)`. Para exemplificar melhor, vou aumentar a nossa amostra de entregas.

![](https://imgur.com/pvd2Kzf.png)

Descobrimos então que em 25% das vezes, o time entregou 3 ou menos tarefas. Logo, em 75% das vezes, o time entregou 3 ou mais.

![](https://imgur.com/ugoFwbl.png)

Descobrimos também que em 75% das vezes, nosso time entregou 5 tarefas ou menos e que em 25% do tempo, o time entregou 5 tarefas ou mais.

## Concluindo
Na minha humilde opinião, essas métricas são bem mais úteis do que apenas sabermos a média de entregas. Isso torna o processo de desenvolvimento mais empírico, dando mais informações para que o time se conheça mais afim de otimizar melhor seu esforço.

Isso também começa a se aproximar, mesmo que basicamente, do conceito de #NoEstimates, que é onde usamos dados históricos para estimar a entrega de um projeto. Mesmo que não usemos em momento nenhum qualquer técnica para prever o dia da entrega do projeto, com esses dados damos um passo bem inicial, onde é possível conhecer a frequência de entrega do time, trazendo mais confiança de quantas tarefas eles poderão entregar nas próximas semanas, dado que as histórias tem tamanhos similares.

Se você quiser explorar um pouco mais a planilha que utilizei, segue nesse link. Basta copiar a planilha e ser feliz: [http://bit.ly/planilha-tp](http://bit.ly/planilha-tp)

