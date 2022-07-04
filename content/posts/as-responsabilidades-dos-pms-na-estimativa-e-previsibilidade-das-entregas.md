+++
date = 2022-07-04T00:00:00Z
excerpt = "PM é responsável por montar um roadmap, com datas e períodos de entrega. Além disso, é responsável por gerir expectativas do time e dos stakeholders. Não faz sentido ter apenas uma fonte de informação de estimativa."
publishdate = 2022-07-11T03:00:00Z
tags = []
title = "As responsabilidades dos PMs na estimativa e previsibilidade das entregas"
type = "post"

+++
Fiz essa pergunta no [Twitter](https://twitter.com/diegoeis/status/1541417315442610176?s=21&t=W3AHv7X53AyqyDM1dxgOTg) e no [Linkedin](https://www.linkedin.com/posts/diegoeis_serei-muito-pol%C3%AAmico-se-eu-disser-que-os-activity-6947183005744439296-LkHS). Foi uma pergunta polêmica, confesso. Se você notar bem, perceberá que estimar ainda é um problema e que os times não evoluíram muito seus formatos de responsabilidade e nem a forma de fazer estimativas.

Elaborei um pouco mais meu ponto de vista aqui. Mas está longe do ideal. Eu não explorei muito a execução disso, mas deixei pistas do que entendo de como poderia ser executado. Pode não ser o ideal e nem digo que seja possível realizar isso em todos os cenários e todas as empresas de tecnologia hoje, contudo, para mim, é totalmente factível desse processo acontecer da forma que sugiro aqui.

## TL:DR - Muito longo, não leia

Existe uma diferença entre ser a pessoa que estima e a pessoa responsável pelo tempo de entrega. O PM é responsável pela gestão de expectativa da entrega, ele não é o responsável por **fazer** a estimativa. Mesmo assim, do ponto de vista da empresa, PMs ou as pessoas que fazem a gestão de produto, são responsáveis por dizer para a quando e por que algo será entregue.

Sendo o responsável pela gestão de expectativa de entrega, PMs precisam ter uma acurácia alta sobre a entrega de resultados, logo, PMs não podem só ter na mão um "chute" técnico. PMs precisam se municiar com outros métodos para conseguir dar respostas coerentes e precisas. Não dá para colocar no roadmap apenas o tempo que o time técnico **acha** que entregar.

Além disso, PMs impactam muito a vazão do time dependendo da forma que se faz a priorização e a quebra das histórias. Se fizer errado, o número de entregas é prejudicado, aumenta o leadtime, piora o throughput do time e consequentemente atrasa as entregas. Se atrasa as entregas, você não consegue cumprir com as expectativas acordadas com as outras áreas, gerando frustração, aumentando a pressão por entrega.

## O que é estimativa e por que estimamos?

Já para gente começar de um lugar comum. Estimativa é um chute. Não importa o que todo mundo fale, não importa o que os chefes pensam, não importa o que as outras áreas vociferem. De acordo com o Cambridge Dictionary estimar é:

> to [guess](https://dictionary.cambridge.org/dictionary/english/guess) or [calculate](https://dictionary.cambridge.org/dictionary/english/calculate) the [cost](https://dictionary.cambridge.org/dictionary/english/cost), [size](https://dictionary.cambridge.org/dictionary/english/size), [value](https://dictionary.cambridge.org/dictionary/english/value), etc. of something [ESTIMATE | meaning in the Cambridge English Dictionary](https://dictionary.cambridge.org/dictionary/english/estimate)

Esse me parece ser um ponto comum entre todo mundo que desenvolve produtos. E tem que ser um chute mesmo, por que embora conheçamos todo o produto e tenhamos construído todas as partes com as nossas próprias mãos, construir software é trabalhar em ambientes complexos. Não há como prevermos problemas externos, nem principalmente entender todos os efeitos que nosso trabalho pode ter no que já foi desenvolvido, mesmo que tenhamos times maduros para tentar diminuir essas incertezas.

O ideal e o sonho de todo mundo, seria não termos limitações de pessoas, dinheiro e tempo, mas penso que nesse ponto da sua vida, já deu pra perceber que isso é meio impossível. Existem empresas com dinheiro e pessoas disponíveis, mas o tempo joga contra. Em outros cenários tem empresas que tem tempo, mas com uma quantidade de pessoas limitada com um budget inexistente.

Outro ponto é que as entregas de produto impactam outras áreas da empresa. Se você parar para pensar, as entregas da área de produtos é uma das poucas áreas que impactam quase que empresa inteira. Marketing, vendas e atendimento precisam saber do lançamento de novas features, por exemplo. O time de produtos não pode ser uma área que trabalha nas sombras. Quase todas as linhas da empresa fazem a intersecção na área de produtos.

Dado que sabemos que estamos em um cenário limitado e de alto impacto operacional, aquela velha ideia de **realizarmos pequenas entregas constantes que geram valor para o usuário, o produto e para o negócio** começa a fazer sentido.

Logo, nós estimamos para:

* Manter a empresa alinhada com os lançamentos e direcionamentos de produto;
* Entender a viabilidade técnica dos nossos entregáveis e como podemos mitigar riscos;
* Entender como podemos adaptar soluções para manter qualidade enquanto diminuímos tempo;
* Gerir expectativas de stakeholders e outras áreas sobre o impacto das entregas em relação aos resultados esperados;
* Ter um planejamento de evolução de produto saudável, de forma que consigamos prever o valor entregue para empresa, alinhada com seu posicionamento estratégico;
* Ter uma visão alinhada de riscos, esforço e incertezas entre o time de produto e outros times;
* Criar uma área livre de suposições pessoais sobre complexidade, esforço e tempo;
* Criar previsibilidade das entregas e entendimento de priorização de acordo com esse esforço;
* Manter o time, principalmente de produto, alinhado com os objetivos a serem alcançados no futuro de curto, médio ou longo prazo;
* Dar uma perspectiva de onde podemos investir dinheiro, tempo e pessoas;

Acho que esse é um bom início de base comum para continuarmos com o papo. Acho que você deve ter outras sugestões aí do que por que nós estimamos e quais os benefícios de se fazer isso. Adicione todas elas aí na lista e vamos em frente.

## Como é comum estimar hoje

A resposta simples: PMs perguntam, e os devs respondem de acordo com algumas informações:

* conhecimento sobre produto
* conhecimento sobre a tecnologia usada
* experiência técnica pessoal

E assim, temos o que chamamos de estimativa. O que já começa errado, por que muitos dos problemas de entrega são levados em consideração apenas o ponto de vista de desenvolvimento, não de outros pontos de vista como design, QA, segurança, ou infraestrutura, só para citar alguns.

A entrega não se resume apenas pelo tempo de construção e nem acaba quando a coisa é colocada em produção. Se você é alguém que tem uma visão mais ampla, levando em consideração o negócio, você deve saber a diferença entre uma entrega em produção e um lançamento comunicado para a empresa e para os clientes. Não é só por que foi para a produção que uma demanda foi entregue. **Só quer dizer que o seu trabalho foi feito. O PM cuida de muito mais do que só a entrega de devs.**

Foi mal, não queria destruir qualquer tipo de sentimento que você tenha sobre o assunto, nem diminuir o trabalho de ninguém, mas é basicamente esse o pensamento incompleto que todo mundo tem.

O que eu percebi nesse anos todos, é que os devs conseguem acertar muito bem o nível de complexidade de algo, mas não a data de quando algo é entregue. E isso está totalmente correto.

Criamos uma série de dispositivos para que o exercício de estimar tenha alguma ciência por trás. Os mecanismos que usamos são feitos para tentar enganar os nossos corações, tentando trazer algum tipo de resposta que satisfaça a racionalidade de todos, principalmente de pessoas longe desse processo. Ferramentas como planning poker, T-Shirt Size, Dog Size e qualquer outro mecanismo usado pelos times, são apenas formas para diluir as incertezas levando em consideração a média dos \~chutes\~ apostas do time. Dessa forma nós diluímos a responsabilidade de uma resposta que naturalmente não deveria ser uma resposta concreta e correta. A coisa na vida real funciona assim:

* PM chama o time para estimar uma solução;
* Time estuda o problema;
* Time se junta e "estima" uma data de acordo com a complexidade;
* PMs mostram essa data para stakeholders e cria um compromisso;
* Surgem imprevistos conforme o time vai desenvolvendo e descobrindo mais coisas;
* PM não consegue sustentar a data original e fica numa sinuca de bico;
* Pressão aumenta, entregas não são feitas, o PM se desespera e culpa o time;
* O time fica bravo e culpa o PM por causa da falta de clareza da demanda;
* E a partir daqui cenários alternativos acontecem: desde assassinatos até demissões;

Mas veja bem, nem tudo está errado: **nós criamos essa estimativa baseada na nossa experiência passada. Isso é empirismo.** E é ótimo. Mas da maneira que fazemos, isso é baseado muito em informação qualitativa, que é que baseado em nada mais do que o nosso achismo, que é baseado em experiências semelhantes que passamos na nossa carreira, somados com o conhecimento que temos do produto até então.

## Times de desenvolvimento com alta maturidade conhecem sua performance

Times de produto maduros conhecem a sua performance, tanto performance técnica quanto performance de entrega de resultados. E eles querem manter sua performance alta sempre, revisando sempre sua essência e usando os momentos de retrospectiva e feedback para entender a raiz dos problemas que prejudicam suas performances.

Times de alta maturidade tem uma visão muito clara sobre como cada um dos papéis contribui para a resolução de produto e o alcance dos objetivos. Eles não tem uma visão separatista de "nós e eles", pelo contrário, eles entendem profundamente o papel e a responsabilidade de cada um durante a jornada de construção e entrega do produto.

Saber o throughput e o leadtime de entregas não deve ser um interesse do time de agilistas, pelo contrário, tem que ser um interesse inicial e primário dos desenvolvedores. Líderes de Tecnologia que não se importam com esse tipo de informação, estão muito mais conectados com entregas técnicas do que com o negócio e isso é ruim, para dizer o mínimo.

Líderes de tecnologia que precisam de alguém como PMs para dizer a importância das demandas, e delegam o interesse para os Agilistas sobre as definições de processos de desenvolvimento e extração de dados de performances do seu próprio time, estão exercendo suas competências de forma incompleta.

Se você não se compara consigo mesmo, não consegue entender se está melhor ou pior que ontem. Essa introspecção do time de tecnologia precisa acontecer de forma regular, a fim de encontrar maneiras do time ganhar entrosamento, além de conhecer a si mesmo durante todo o processo de construção de software.

## Se nós já usamos o empirismo para definir nossa estimativas, por que não usamos números?

Não quero chover no molhado aqui, porque já há muito conteúdo por aí sobre isso. Mas **hoje não precisamos usar apenas a percepção do time para ter visibilidade do tempo de construção**.

Além disso, quando o dev faz sua estimativa, não inserido nesse calculo, a complexidade do ambiente em que o time se encontra. Quero dizer que demandas fora de hora vão aparecer, bugs vão surgir, o servidor vai cair, vai ter um vazamento de dados, vai vir uma pandemia. O dev só vai trazer uma visão de viabilidade técnica para o processo, e não um calculo preciso levando todas as variáveis possíveis. E nem acho que devemos esperar isso de qualquer time técnico.

Contudo, uma estimativa, basicamente, deve ser uma análise empírica, levando em consideração o mix da performance do time, com as alterações orgânicas da dinâmica do ambiente.

Não sei como o seu time faz a gestão das tarefas na sua empresa, mas provavelmente deve usar um quadro de kanban, [não importa o nível de maturidade](https://www.youtube.com/watch?v=cTdJgdQmlr4)que está o quadro, que deve ser controlado por um sistema como o Jira ou similar. Isso quer dizer que você consegue extrair dados históricos do seu fluxo de entrega e entender bem o leadtime e throughput do time.

Extraindo esses dados, você facilmente [pode usar uma planilha como essa](https://docs.google.com/spreadsheets/d/1MdjnBaeDjfhzZIyJt6ZJQ4MHb5B9QTipQArqeaJiixk/edit?ouid=112415078339491386047&usp=sheets_home&ths=true) ou qualquer outro time de plugin direto no sistema de gestão que você usa para conseguir ter esses números e entender datas e estimativas que são muito mais acuradas do que as estimativas dos devs.

Dessa forma, nós transferimos a tarefa de estimar para um método mais neutro e mais assertivo, baseado em dados históricos com um pouco de estatística básica para nos trazer respostas mais confiáveis, levando em conta a complexidade técnica mais o organismo vivo que envolve o time.

Veja bem, isso não quer dizer que o time tenha que parar com as suas próprias estimativas, pelo contrário, agora, a necessidade de estimativa do time muda de objetivo: eles estimam para conseguir se organizar, não para passar datas para alguém. Eles estimam para entender cada vez mais a complexidade e viabilidade técnica, não para satisfazer desejos de stakeholders e de PMs.

Criamos então um forecasting de entrega.

Não quero me aprofundar muito nisso, por que você pode ler mais sobre isso procurando sobre o movimento [NoEstimates](https://medium.com/serious-scrum/the-logic-of-noestimates-4238e0be3bb6), [lendo o livro do Albino](https://www.casadocodigo.com.br/products/livro-metricas-ageis) ou até mesmo começando por esse [artigo básico que escrevi no passado](https://diegoeis.com/estatistica-basica-nas-entregas-de-projetos-agile-moda-mediana-e-percentil.html/) ([tem até uma apresentação simples](https://speakerdeck.com/diegoeis/metricas-para-times-ageis-usando-estatistica-basica)).

![](https://i.imgur.com/8X5ywp7.png)

Criei há muito tempo atrás uma planilha que ajuda a gente a entender um pouco mais as entregas do time, dado para gente algumas informações importantes como forecast. Faça uma cópia e use à vontade: [https://bit.ly/pms-estimar](https://bit.ly/pms-estimar "https://bit.ly/pms-estimar")

**A combinação dos dados históricos de entrega do time, com a estimativa técnica de complexidade dos devs, com o seu poder de quebra de histórias e priorização, é o que vai mudar o jogo.**

## A responsabilidade e o impacto gerado por PMs

Acredito que o segredo aqui é a parte do "pequenas entregas constantes". Dado que retiramos o peso dos devs de conseguir fazer estimativas de entregas e entregamos para os dados históricos reais de entregas do time, o PM deveria usar esses dados para fazer seu planejamento tático de entregas.

![](https://i.imgur.com/LWezJP3.jpg)

  
_Você pode ver esse desenho aqui:_ [_BUCKET - Ambidestria, Plataforma, Serviços e Produtos Digitais, Efeito de Rede - Google Slides_](https://docs.google.com/presentation/d/1V92R6muinqwVygJSRhWHfNjfwvla_bt9U0nhUsAhMqk/edit#slide=id.g12fa324b42b_0_21)

O PM pode até pedir para os agilistas do time conseguir ajudá-los nessas projeções, mas eu acho que a responsabilidade e o interesse deveria surgir dos PMs, por que os agilistas usarão esses dados para tentar melhor a performance operacional do time, não para gerir expectativas com os stakeholders. Embora, em muitas empresas, a área de gestão de produtos seja tratada como um dos stakeholders, o que eu acho uma bizarrice, por que cria aquele muro entre área que demanda e área que executa.

![](https://i.imgur.com/l4enJqk.jpg)

  
_Você pode ver esse diagrama aqui:_ [_https://miro.com/app/board/o9J_lf2HMtA=/?moveToWidget=3458764528375245526&cot=14_](https://miro.com/app/board/o9J_lf2HMtA=/?moveToWidget=3458764528375245526&cot=14 "https://miro.com/app/board/o9J_lf2HMtA=/?moveToWidget=3458764528375245526&cot=14")

As responsabilidades do PM:

* Criar um roadmap de entregas com períodos de entrega e resultados a serem impactados;
* Gerir expectativas da empresa, stakeholders e áreas externas sobre quando os resultados poderão ser medidos;
* Manter o time alinhado quanto a ordem e o que está priorizado, considerando o senso de urgência de entregas internas e externas, baseados na expectativa dos stakeholders e timing da empresa;

O time de desenvolvimento tem muito trabalho para estimar hoje em dia, por que PMs não sabem quebrar direito as histórias. Isso é fato. O que deveríamos considerar para quebrar **histórias**:

* **Menor tamanho possível**. Não confunda pequeno com incompleto. A ideia é que você faça histórias que tenham começo, meio e fim. Que funcionem no final e sirvam de plataforma para as próximas tarefas;
* Histórias devem **entregar valor para o produto**. Não, a história não deve gerar valor pro negócio. O que deve gerar valor para o negócio é o objetivo MACRO que esta história faz parte. Um conjunto de histórias gera valor pro negócio, por que esse conjunto cumprem com um objetivo maior, mudando comportamento do usuário e movimentando indicadores. Geralmente uma história é muito pequena para sozinha gerar valor relevante para o negócio;
* **Entregas rápidas e constantes**. O que é rápido e a constância vai depender do seu time. Não compare a velocidade do seu time com os outros times, mesmo se forem times da mesma empresa. Geralmente times resolvem problemas diferentes, tem senioridades diferentes, entrosamentos diferentes... Contanto que você consiga homogeneizar a complexidade com o tamanho das tarefas, você vai obter sucesso;

![](https://i.imgur.com/vY9wjMF.jpg)

  
**O valor gerado no produto deve, de forma irrefutável, levar para o negócio.** Se isso não acontece, desculpe te dizer isso agora, mas você está fazendo a empresa perder tempo, e está fazendo o seu time perder tempo.

**Tudo o que fizermos no nível de produto, tem um único objetivo, levar valor para negócio... E fazemos isso levando valor para o usuário, potencializando sua experiência de uso, para ele perceber o valor entregue pelo negócio.**

> A maneira como eu sempre vejo histórias de usuário é de uma ótica de novas capacidades que eu pretendo entregar para os usuários ao entregar uma história em produção. -- Pablo Silva - [Tornando o refinamento mais efetivo - Parte 2 - O refinamento pode evitar lead times altos demais e trazer ciclos de aprendizado mais curtos (productoversee.com)](https://productoversee.com/tornando-o-refinamento-mais-efetivo-parte-2/)

### A rejeição por quebrar histórias

A capacidade de quebrar histórias é muito, mas muito importante e é a primeira coisa que os PMs rejeitam. É por aí que os PMs garantem que o valor para o produto e para o negócio estão sendo entregues. Não quebrar histórias pequenas o bastante, com um nível de complexidade baixa, mas que entregue valor irrefutável para o produto é facilmente corrigido se você conseguir entender mais do negócio e quais os objetivos e goals de longo prazo da empresa.

![](https://i.imgur.com/skvqaOC.png)

Qualquer coisa que ainda tenha um grande nível de incerteza não deveria entrar na fila de delivery. Se há um nível grande de incerteza, o time deveria diminuir essas incertezas seja criando POCs, seja analisando dados, fazendo testes com o usuário, seja fazendo reuniões de discussões sobre o problema e possíveis soluções, para que o problema comece a sair do nível de caos e seja movido para a área de complexidade e fique cada vez mais próximo da área complicada ou simples.

Você não deve priorizar uma história se o assunto ainda não está bem alinhado ou bem conhecido pelos integrantes do time e pelos stakeholders. E é isso que queremos dizer com "gestão de expectativas". A expectativa dos stakeholders é ter isso rápido e com qualidade. A do time é fazer isso com qualidade pelo tempo que precisar. Mas os dois querem entender melhor dos problemas e os motivos pelo qual as expectativas não estão sendo cumpridas.

![](https://i.imgur.com/xIPSMEs.png)

![](https://i.imgur.com/4aYOkDr.png)

![](https://i.imgur.com/GJm2SRP.png)

  
[Você pode ver mais dessas imagens no bucket de slides que liberei esses dias para a comunidade.](https://docs.google.com/presentation/d/1V92R6muinqwVygJSRhWHfNjfwvla_bt9U0nhUsAhMqk/edit#slide=id.gf40b70c38d_0_3907)

Na quebra de histórias, você, como PM, controla o fluxo de entrega de valor:

* É onde você diminuir incertezas, dado que você consegue definir o que, de mais claro, será desenvolvido;
* Define e prioriza qual valor será sentido pelo usuário e consequentemente, qual o comportamento de usuário será modificado para levar valor pro negócio;
* Define cadência de desenvolvimento do time. Toda a gestão de fila e quantidade de trabalho que o time irá fazer no futuro é definido pelo PM e não pelo time. Nesse caso, entender [melhor limitação de WIP](http://blog.plataformatec.com.br/2016/09/case-study-of-a-wip-limit-implementation-why-when-and-how-to-use-wip-limits/) e [como gerir o fluxo de trabalho](http://blog.plataformatec.com.br/2019/08/pare-de-medir-sua-equipe-meca-o-fluxo/), não é uma questão só dos agilistas, mas dos PMs também;

Se você não sabe quebrar histórias, você impacta o resultado de entrega do time, aumenta seu leadtime, piora o throughput do time e consequentemente atrasa as entregas. Se atrasa as entregas, você não consegue cumprir com as expectativas acordadas com as outras áreas, gerando frustração, aumentando a pressão por entrega.

## Q&A rapido

Algumas pessoas fizeram observações nos comentários nas publicações das redes sociais. Vou tentar abordar algumas dessas observações aqui.

**"Acho a escolha das suas palavras importante... "responsável" não necessariamente significa "definido por"**

Exatamente. Pra mim, não é definido por ninguém. Nem pelo PM, nem pelos Devs… mas pelos Dados históricos. Quem diz quanto tempo leva é a compilação e estudo das entregas anteriores. Isso tira qualquer tipos e viés ou complexidade dos Devs e dos PMs.

**"Responsável pelo que? Qualquer um pode estimar, mas você diz responsável por definir data/prazo? Por coletar dados históricos para fazer uma estimativa com menor incerteza? Por “chutar” o tamanho das coisas? Por comunicar aos stakeholders?"**

PM é responsável por gerir expectativas e por garantir entrega de valor pro produtos, cliente e negócio por meio das suas priorizações.

Ele não vai chutar tamanho. Ninguém vai. Nem mesmo os Devs. Ele vai comunicar os stakeholders por meio de dados históricos, sobre períodos de entrega e quais resultados essas entregas irão promover. Ele não define prazos, mas ele define esses períodos de entrega de acordo com os dados históricos de entrega do time se baseando em throughout basicamente.

**"Já atuei com times que sequer tinham estimativas de esforço ou dados de vazão e capacity do time."**

Aí complica. Se um PM não sabe quanto o fluxo de delivery comporta, como consegue entender quanto o time aguenta? O PM deveria no mínimo puxar o Agilista pra começar a fazer essa análise para iniciar a criação de inteligência dessa disciplina no time.

Outro ponto é: como fazer com que o próprio time de Devs tenham senioridade pra terem interesse sobre o quanto estão performando?

**"A principal responsabilidade de estimar a entrega, é do time que vai fazer a entrega, o que na maior parte dos casos, é o time de engenharia (não gosto de fomentar esses silos)."**

O time de produto deveria saber sua performance e não deveria chutar suas estimativas. O PM só trabalha aqui pra gerir as expectativas externas e garantindo que o que ele coloca no fluxo tenha parâmetros similares com o que foi feito no passado quando se trata de tamanho e complexidade. O time precisa garantir que o produto esteja saudável para aproveitar bem seu tempo sem criar débitos técnicos, mas evoluindo a fundação técnica para que ganhem mais performance durante o tempo.

Então, a responsabilidade de controlar o tempo de entrega é do PM. A responsabilidade de estimar é dos dados. O time tem a responsabilidade de manter a constância de entrega.

**"Depende: se PMs assumirem a bucha da entrega não ter sido feita ao invés de catracar o time de devs, sim."**

Se o time não entregou porque tudo ainda estava complexo, por que o item era enorme, por que não havia informações suficientes sobre o objetivo do entregarem, aí sim a bucha deveria ser do PM. Agora, se não foi entregue por que time não fez um bom trabalho de discovery técnico, então, a bucha é do time.

Mas eu parto do princípio de que vários métodos e processos foram feitos ANTES pra que a história saísse da camada de anarquia e fosse pra mais próximo da camada de complexo ou complicado.

**"Dificil ein... estimar o tempo que o time de desenvolvimento vai levar pra desenvolver uma entrega sem nenhum conhecimento técnico para mapear (mesmo que mentalmente) tudo que será necessário fazer"**

Ninguém precisa de conhecimento técnico se estamos utilizando dados históricos de entrega pra que o time consiga entender sua performance. Nem o time que tem conhecimento técnico consegue acertar.

## Conclusão

Embora tenha escrito esse textão, eu não acho alguém deveria escrever histórias para o time. Não entra na minha cabeça que os devs precisam ter alguém para ficar dizendo o que eles tem que fazer. Eles precisam ter alguém para conseguir ajudá-los a definir e a entender as prioridades de produtos atreladas nas prioridades de negócio.

Nós deveríamos nos focar em times realmente experientes, engajados no objetivo de negócio, que conseguem gerir sua expectativas e diminuir ao máximo débitos técnicos para não bloquear oportunidades futuras, juntando a thread de entrega de valor para o negócio com a thread de evolução de produto. Essa é uma visão utópica para a maioria das empresas, mas acho que deveria ser o objetivo de nível de maturidade que os times deveriam almejar.

## Referências:

* [Why Do We Estimate, Anyway? - DZone Agile](https://dzone.com/articles/why-do-we-estimate-anyway)
* [Pare de medir sua equipe! Meça o fluxo. « Plataformatec Blog](http://blog.plataformatec.com.br/2019/08/pare-de-medir-sua-equipe-meca-o-fluxo/)
* [Why do we estimate in Agile? 7 answers of our Agile Coaches](https://www.agile-in-action.de/blog/why-do-we-estimate-in-agile-7-answers-of-our-agile-coaches-agileseven)
* [https://medium.com/agileinsider/why-do-we-estimate-201a9af52e37](https://medium.com/agileinsider/why-do-we-estimate-201a9af52e37 "https://medium.com/agileinsider/why-do-we-estimate-201a9af52e37")
* [Why should we estimate? - Once you go Agile](https://onceyougoagile.com/blog/2019/01/29/why-should-we-estimate/)
* [Dívida técnica: Por que fazer, quando fazer e como priorizar « Plataformatec Blog](http://blog.plataformatec.com.br/2019/11/divida-tecnica-por-que-fazer-quando-fazer-e-como-priorizar/)
* [Relation between Story Points and Development Time (Lead Time) « Plataformatec Blog](https://blog.plataformatec.com.br/2019/11/relation-between-story-points-and-development-time-lead-time/)