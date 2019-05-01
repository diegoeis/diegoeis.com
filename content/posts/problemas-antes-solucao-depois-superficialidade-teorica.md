---
title: Problema antes, solução depois
date: 2019-02-25
image: https://i.imgur.com/TzdDVwx.jpg
excerpt: Como na vida normal, o mercado de desenvolvimento web, está cercado pelo superficialismo. Não apenas no nível comportamental, que expõe o estado atual de amadurecimento da área mas também no nível teórico.
tags:
- front-end
- desenvolvimento web
- web
- carreira
- artigos
---

Às vezes esse artigo poderia ter sido uma série de tweets. Mas, né, pra que simplificar?

Como na vida normal, o mercado de desenvolvimento web, está cercado pelo superficialismo. Não apenas no nível comportamental, que expõe o estado atual de amadurecimento da área mas também no nível teórico. 

Essa superficialidade teórica tem minado a nova leva de profissionais que o mercado tem criado. A nova escola não está apegada à base sólida de entender os porquês das coisas. E tranquilo... isso é comum não apenas no mercado de web, mas em vários outros também.

As pessoas estão apegadas às soluções e não aos problemas. Mesmo antes de saber qual o problema, já é sabido que ele será resolvido, usando _\[coloque aqui o nome da tecnologia que você está aprendendo agora\]_.

# Resolva problemas com as ferramentas corretas

Quando digo que o desenvolvimento web está quebrado, quero dizer que todo esse gigantesco número de novas tecnologias não ajuda a resolvermos os problemas que temos hoje. Pelo contrário, elas criam novos problemas (já resolvidos anteriormente e que fazem parte da fundação) pra tentar resolver algo que talvez poderia ser resolvido isoladamente.

Pra usar dois exemplos positivos: o Sass foi criado para tentar a solucionar problemas do CSS que tínhamos no uso do dia a dia e necessidades que claramente existiam. Assim como o JQuery, que permitiu resolver todos os problemas de compatibilidade de browsers. Ambos resolveram, pontualmente, apenas os problemas que ele foram criados pra resolver.

Mas há anos temos um problema de componentização de interface e suas particularidades. Tentamos [Web Components](https://www.webcomponents.org/community/articles/why-web-components), que claramente não deu certo. Contudo o [Web Components](https://tableless.com.br/web-components-introducao/) queria resolver apenas uma coisa: componentes. E pra resolver esse problema, a solução do Web Components não quebrou ou modificou outras soluções que já estavam bem estabelecidas. Ele propôs uma solução, mas que na verdade não resolvia vários sub problemas que a componentização carrega consigo. Mas usando ou não web Components, você continuava escrevendo HTML, JS e CSS da mesma forma de antes. Usando ou não usando [Sass](https://sass-lang.com/) ou [jQuery](http://jquery.com/), você continua tendo as bases fundamentais intactas. Elas continuam sendo ferramentas, independentes, que podem ser usadas em conjunto, que resolvem problemas específicos.

# A superficialidade teórica

**A escolha da tecnologia a ser usada como solução nunca deve vir antes de entender o problema.** Você não pode ser um bom dev se não consegue responder quais problemas resolvem as tecnologias que você usa. Conheço poucos devs que conseguem conversar mais do que 30 minutos sobre HTML. Já abstraímos tanto do HTML que ele é só um output padrão, sem importância das linguagens mais modernas.

* Qual o problema que o HTML resolve?
* Por que é feito do jeito que é?
* Quais os problemas da linguagem?
* Ela precisa ser atualizada?
* Por que é o ReactJS que tenta resolver os problemas de componentização e não o HTML?
* Será que é o HTML que precisa resolver esse problema?
* Se não for, como podemos resolver SEM quebrar a web e sem adicionar mais complexidade ao processo?
* Será que o JS é a resposta?

Par tentar exemplificar um pouco esse pensamento prematuro na solução, queria usar o React como exemplo. Poderíamos usar o VueJS, Angular e qualquer outra tecnologia desse tipo. Mas o React é um dos mais populares e que causam mais impacto hoje. DISCLAIMER: não sou contra o react ou nem uma dessas tecnologias. Se você leu o artigo até aqui, já deve ter entendido que o problema não é a tecnologia.

Além do problema de componentização, o ReactJS tenta resolver a manipulação do DOM. Para fazer isso, ele cria toda uma estrutura complexa em volta, apenas para agilizar o processo que o browser e front-end tem ao manipular o DOM - que todo mundo sabe que é ruim. Eu esperava que os browsers e o W3C, tentassem resolver isso de uma maneira mais definitiva, porque esse não é um problema só pra quem usa JS, é um problema da Web! A solução então foi criar uma library JS que tentasse resolver isso. O problema não é o uso do ReactJS, mas:

* Devs usam ReactJS (e outros) mais pela moda, do que pra resolver problemas de DOM;
* ReactJS resolve problema da manipulação de DOM. Mas a que custo? Leva tempo de aprendizado, cria-se outros problemas estruturais (SEO, só para dizer um);
* O problema do DOM continua existindo, dado que não é inteligente usar ReactJS em todos os projetos;

# Estamos apaixonados pela solução e não pelo problema

Ora, se um dos problemas do ReactJS é resolver componentização e alta customização do DOM, quer dizer que ele é indicado para sistemas que abusam desse tipo de interface. Interfaces que tem muitos botões, manipulações do usuário inpage e coisas do tipo. Não coincidentemente o ReactJS foi criado dentro do Facebook, que olha só: tem uma interface carregadíssima de componentes para que o usuário possa interagir.

Nesse caso, fazer um sistema como o Facebook é totalmente justificável usar ReactJS.  
Agora, e em um site de conteúdo, seria? Será que em um site de conteúdo o usuário faz tentas interações e se comporta como em um site como Facebook? ACHO que não.  
Então, por que diabos, usar uma tecnologia como o ReactJS, para simplesmente fazer um site de conteúdo? Entendeu o que quero dizer? Estamos apaixonados pela solução e não pelo problema.

Eu sei que o W3C poderia ajudar muito nesse processo se ele fosse ágil e entendesse as reais necessidades atuais dos devs. Só agora o CSS tem variáveis por padrão, e faz anos que o SASS já resolveu isso pra gente. Mas mesmo se o W3C fosse rápido e tivesse uma possível solução, com certeza ela seria questionada pelos devs durante anos a fio. Até ir para o mercado, de verdade, já é tarde. Muito por isso, soluções como React, Angular, Vue (só pra falar sobre componentes e outros problemas que essas tecnologias se propõe a resolver) apareceram. Precisamos de soluções agora e não daqui 10 anos. Mas precisamos de soluções que trabalhem integradamente com os fundamentos da Web e não tecnologias que criam calabouços de complexidades enormes para resolver problemas específicos.

Geralmente nós quebramos nossas próprias soluções. Para continuar o exemplo do React: ele foi feito para nos ajudar a construir interfaces. Mas hoje usamos ele para TUDO. Substituimos linguagens back-end para usarmos apenas o React. Isso acontece com Angular, Vue e qualquer outra biblioteca desse tipo.

# Concluindo

Mas para concluir: aprender a teoria faz parte do processo e a falta desse aprendizado infantiliza e deixa seu trabalho muito superficial. Não deixe que a sua tela preta se transforme no seu antolho. Entenda os motivos e os porquês que cada tecnologia deve ser usada. Questione-se se aquela tecnologia não é uma bazuca para resolver um problema e não criar outros. Hoje o overengineering está mais na moda do que nunca.

Eu sei que os amantes do ReactJS vão ler apenas uma parte do artigo e irão gritar e espernear dizendo que eu sou contra react e que estou fora do mercado e sou um velho chato ranzinza. Mas espero que eu tenha deixado claro que o problema não é o React, que é super legal, mas o modo de pensamento que permeia o nosso cotidiano.

# Para ler mais

* [Yes, React is taking over front-end development. The question is why.](https://medium.freecodecamp.org/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76)
* [What does react.js try to solve? Can you provide a practical example?](https://www.quora.com/What-does-react-js-try-to-solve-Can-you-provide-a-practical-example)
* [6 Mistakes You Might Be Making As A New Web Developer & How To Avoid Them](https://dev.to/emmawedekind/6-mistakes-youre-making-as-a-beginner-web-developer--how-to-avoid-them-5gj4)
* [Why are frontend web development technologies so broken?](https://dannyherran.com/2015/04/why-are-frontend-web-development-technologies-so-broken/)
* [CSS in JS is like replacing a broken screwdriver with your favorite hammer.](https://zendev.com/2017/09/11/css-in-js.html)
* [What Problems Does React.JS Solve? When Must You Select React.JS?](https://scotch.io/@anitashah/what-problems-does-reactjs-solve-when-must-you-select-reactjs)
* [React Commonly Faced Problems](https://jscomplete.com/learn/react-beyond-basics/react-cfp)