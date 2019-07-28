---
type: post
title: 'Métricas, indicadores e comportamento do usuário'
excerpt: Minha palestra sobre como frameworks e maneiras de entender métricas e indicadores criadas pelo comportamento dos usuários.
date: '2019-07-29'
draft: true
publishdate: '2019-07-29 06:00'
image: 'https://diegoeis.com/images/uploads/luke-chesser-jkutrj4vk00-unsplash.jpg'
tags:
  - Product Management
  - palestras
---

Todos os meses a área de Produtos Digitais da [Jüssi](https://jussi.com.br) faz o que chamamos de Big Friday. Nesse dia participamos assistindo e fazendo palestras sobre UX, Gestão de Produtos, Tecnologia e outros assuntos. Algumas pessoas de outras empresas são convidadas, mas também pessoas dos times compartilham conhecimento.

Na sexta-feira do dia 23/07/2019, eu fui convidado para falar sobre Métricas e Indicadores. Mostrei um pouco sobre meu pensamento sobre esse assunto citando três frameworks e alguns fundamentos que sigo ao gerenciar Produtos Digitais. A apresentação completa segue no final do artigo.

# Métricas, indicadores e comportamento do usuário

Uma das graças de se trabalhar com tecnologia e principalmente web, é que tudo pode ser medido e analisado. Tirando todo o lado ruim que [fere a os valores éticos](https://diegoeis.com/etica-em-produtos-digitais/), analisar dados do seu produto, que são captados da forma correta, é uma tarefa diária de UXzes e Product Managers.

Mas você sabe qual a diferença entre uma métrica e um indicador? Essa pergunta parece ser bastante básica, mas não é.

Dicamos que o indicador é formado pela junção de métricas.

![](https://diegoeis.com/images/uploads/img1-diferenca-metrica-indicador.jpg)

Um indicador como o Life Time Value (LFT) é formado pelo **Valor do Ticket Médio** e **Tempo de retenção do cliente**. O LFT *indica* quanto os usuários gastam no serviço durante o tempo que eles são clientes. Ou o **Stickness**, que mede a porcentagem de usuários mensais que retornam ao seu produto diariamente, é formado pelo DAU (Daily Active Users) e o MAU (Monthly Active Users).

Para usar uma analogia bem comum: imagine que seu corpo é um produto. Para entender se seu corpo está “bem”, você **medir** algumas características como *pressão sanguínea*, *nível de glicose*, *temperatura*. Tudo isso são métricas. Agora, se juntarmos algumas dessas métricas, você pode ter um indicador de que algo (ou nada) está acontecendo contigo. 

Mas para se ter certeza do que algo está acontecendo, você precisa de uma análise para saber o que acionou esse comportamento.

Já que os indicadores são formados por métricas, vamos nos aprofundar em como as métricas são formadas.

## Métricas e indicadores não são análises

Embora esses números indiquem que um determinado comportamento de usuário está acontecendo, eles não te dizem o motivo pelo qual determinado fenômeno está acontecendo. Daí, a necessidade de analisar esses dados.

> Mais importante do que ter indicadores e métricas, é saber o que foi feito para movimentar esses ponteiros.

No livro [Actionable Metrics Framework in Lean Software Product Development](https://amzn.to/2LMxGBq), Huong Ngo diz que uma boa métrica deve ser **acionável**, **auditável** e **acessível**. Vamos falar um pouco mais sobre o primeiro ponto: acionamento das métricas. 

Para uma métrica ser **acionável**, uma métrica que está relacionada a ações específicas e repetitivas à resultados que podem ser observados;

## O comportamento do usuário cria métrica

Eu gosto de explicar esse ponto usando um framework muito interessante chamado GAME. Esse framework é baseado em quatro pontos importantes para análise de métricas e indicadores relacionados ao comportamento do usuário:

- **Goals**: objetivos do usuário e do negócio a serem alcançados;
- **Actions**: ações/tarefas que o usuário faz no produto.;
- **Metrics**: métrica (ou indicador) acionada pelas ações do usuário;
- **Evaluations**: avaliações e conclusões do comportamento do usuário baseadas nos indicadores;

![](https://diegoeis.com/images/uploads/img2-product-box.jpg)

O usuário usa seu produto porque ele tem objetivos a serem cumpridos: ele quer ouvir uma música, pedir comida, pedir um táxi, executar um pagamento etc. Para cumprir com esses objetivos, o usuário executa uma série de ações, que criam métricas. Para exemplificar, você pode separar ações que os usuários fazem nas fases de aquisição e ativação, tarefas de retenção e engajamento, monetização e receita.

![](https://diegoeis.com/images/uploads/img3-Metricas-Indicadores-comportamento-usuário.jpg)

Nenhuma métrica pode ser gerada sem um comportamento do usuário, tanto de forma direta ou indireta (a não ser métricas técnicas como tempo de uptime do servidor, que não depende de nenhuma ação do usuário).

![](https://diegoeis.com/images/uploads/img4-jogadas-individuais-pontuam.jpg)

Logo, se um indicador é a combinação de métricas, que por sua vez são geradas por comportamentos de usuário, temos que estimular os usuários a completarem mais tarefas dentro nos nossos produtos, que os façam cumprir com seus objetivos pessoais e que por sua vez, fazem o produto alcançar seus próprios objetivos.

![](https://diegoeis.com/images/uploads/img5-action-goal.jpg)

## O fator engajamento + retenção

Um dos objetivos mais intrínsecos de um serviço digital, é fazer com que as pessoas usem o produto de forma constante e frequente. Mas um usuário só usa o produto e executa ações, se ele está engajado.

> O que importa não é o crescimento da quantidade de usuários, mas o crescimento dos usuários que completam uma ação principal. ― Sarah Tavel

Se o que você procura é **engajamento**, métricas como *quantidade de logins*, *quantidade de pageviews*, *quantidade de downloads do app* são totalmente dispensáveis. Essas métricas (não são indicadores), apenas refletem a fase de **growth** do seu produto. É isso que os investidores verão, pois é isso que mostra o potencial de futuro do seu produto. Contudo, não é isso que fará seu produto ser perene e nem é isso que dará insights para desenvolver um produto evolutivo.

Então, seguindo esse raciocínio, o que importa são usuários que completam determinadas tarefas dentro do seu produto. 

![](https://diegoeis.com/images/uploads/img6-tavels-framework.jpg)

## A importância das Core Actions
Todos os produtos tem uma razão para existir. E todos os produtos tem funções importantes, que fundamentam essa razão de ser. Chamamos essas funções importantes de **core actions**.

![](https://diegoeis.com/images/uploads/img7-core-action-facebook-pinterest.png)

Essas **core actions** são a base fundamental do seu produto e que sem essas ações, não faria muito sentido usar o produto. A junção do engajamento dessas ações, somado com a retenção dos usuários, formam uma receita indispensável para qualquer serviço digital.

![](https://diegoeis.com/images/uploads/img71-core-action-facebook-pinterest.png)

Descobrir ou forjar as core actions do seu produto e entender como elas se comportam quando combinadas com a retenção do usuário, criam a **Hierarquia de Engajamento**, que o framework da Sarah Tavel ensina. 

É importante notar que não pode existir apenas as **core actions**, mas também as ações de suporte. As ações de suporte fazem com que os usuários executem mais ainda as core actions, que por sua vez geram métricas de verdade, que te geram indicadores valiosos... E você já entendeu a cadeira.

## Ações são valiosas quando geram efeito de rede 

Uma ação de usuário só é boa quando gera um efeito de rede no produto. Já [falei aqui um pouco sobre como o efeito de rede influencia a forma de uso dos serviços digitais](https://diegoeis.com/service-dominant-logic-marketing#network-effect-e-produtos-como-plataformas). 

Esse efeito de rede, em vez de afetar o produto como um todo, ele afeta as funções de cada produto, gerando um ciclo virtuoso de uso do usuário.

![](https://diegoeis.com/images/uploads/img8-network-effect.png)

O objetivo aqui é **transformar o uso do produto em hábito**. 

> Instead of relying on expensive marketing, habit-forming companies link their services to the users daily routines and emotions. ― Nir Eyal

Existe um outro framework chamado Hook, idealizado pelo Nir Eyal em seu [livro Hooked: How to Build Habit-Forming Products](https://amzn.to/2SIQNNE). 

![](https://diegoeis.com/images/uploads/img9-hooked.png)

Nesse framework, a ideia é que você desenvolva um produto que que construa o hábito de uso do seu produto nos usuários. Indo além de métricas e indicadores, a ideia é que você entenda profundamente o comportamento do usuário e suas emoções e motivações psicológicas. Mas esse é um outro papo, que talvez valha a pena conversar em outros artigos. É um assunto que toca muito em [valores éticos na área de produtos digitais](https://diegoeis.com/etica-em-produtos-digitais/).

# Conclusão

Métricas e Indicadores são diferentes e surgem a partir de comportamentos dos usuários dentro do seu produto ao executar tarefas. Essas tarefas são criadas para que o usuário alcance seus objetivos ao usar o produto, e consequentemente o produto alcance os objetivos de negócio. Para tanto, você precisa trabalhar o engajamento dos usuários, atrelado à retenção, criando assim funcionalidades que criam um ciclo virtuoso, afim de criar um hábito de uso do produto no dia a dia do usuário.

Algumas leituras e referências:

- [Metrics Game Framework](https://hackernoon.com/metrics-game-framework-5e3dce1be8ac)
- [Tavel's Framework](https://medium.com/@sarahtavel/the-hierarchy-of-engagement-expanded-648329d60804)
- [Livro: Hooked](https://amzn.to/2SIQNNE)
- [Don't Let Your North Star Metric Deceive You](https://www.reforge.com/blog/north-star-metric-growth)


<script async class="speakerdeck-embed" data-id="f06809734d59473a89a6e9fb02e982a3" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
