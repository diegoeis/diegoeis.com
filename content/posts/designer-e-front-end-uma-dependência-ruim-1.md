---
type: post
title: Designer e front-end, uma dependência ruim
excerpt: Designer precisa estar mais próximo do comportamento do usuário para
  potencializar a percepção de valor e entrega de resultado pro negócio. E isso
  só é possível se não houver intermediários.
date: 2022-04-11
publishdate: 2022-04-11 09:00
image: https://cdn.substack.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F826910f0-8e64-4b28-b95d-3e765e01c694_800x400.jpeg
tags:
  - desenvolvimento web
  - tecnologia
  - design
---
Esse texto foi publicado primeiramente na minha [newsletter](http://diegoeis.com/newsletter).

- - -

Quando eu escrevi o artigo [O Fim da Profissão Front-end](https://tableless.com.br/carreira-de-front-end-vai-morrer/) alguns anos atrás. Fui fortemente criticado pela "comunidade" de devs front-end. Conheci diversos impropérios que eu nunca imaginei existir. Esse artigo é de 2017, mas de lá pra cá, absolutamente NADA mudou sobre como o relacionamento de back-end, front-end e designers se dá. Mas o principal problema, na minha opinião, é a relação entre front-end e designer.

Eu nunca entendi, inclusive quando eu era front-end, por que os designers deveriam e tinham tanta dependência de desenvolvedores front-end. Os designers tinham um comportamento bastante recluso, com certeza. Não era tão colaborativos quanto a imagem pregava. Havia de verdade um muro entre times de design e desenvolvimento. Isso mudou bastante nos últimos anos, as tem exposto uma verdade inconveniente: designers entregam e geram mais resultados se estiverem mais próximos de onde as pessoas que usam o produto percebem o valor que esse produto/serviço oferece.

A principal responsabilidade dos designers de produto, na minha humilde opinião, é melhorar e evoluir ao máximo a jornada de experiência de uso das pessoas no produto/serviço. Eles fazem isso não apenas com pesquisas, entrevistas, frameworks e métodos de descoberta, mas principalmente por meio da manipulação e monitoramento do ambiente que o usuário está inserido. Hoje, o que acontece é que, qualquer alteração simples, seja de interface, fluxo ou marcação de eventos de comportamento, deve ser feito pelo front-end.

O design system não resolve essa relação, ela pode facilitar ter uma coerência visual além de técnica, implementando padrões que fazem sentido para as duas especialidades, mas ainda assim, o design system é estático. Minha proposta aqui é que os designers tenham mais controle\
da mudança de comportamento do usuário ao utilizar a interface do produto, e que isso não fique na mão do front-end.

* Mudança de interface UI
* Mudança de monitoramento de comportamento do usuário
* Definição e deploy de novos padrões do design system
* Testes A/B de interface e fluxos
* Recrutamento e Pesquisas de usuários diretamente pelo produto
* Monitoramento e análise de dados de comportamento de uso do usuário

A relação entre designer e front-end ainda é aquele waterfall que todo mundo conhece, que gera burocracia, ineficiência, descontentamento, encadeamento e overlap de responsabilidades. O mesmo que aconteceu com a relação entre back-ends e front-ends, deve acontecer com designers e front-ends. Uma evolução de alçadas deve acontecer.

Antes, muitos anos atrás (quase duas décadas) o front-end preparava um código "estático", onde os back-ends conectavam esse código com as informações e regras de negócio vindas do servidor. Essa relação gerava uma série de problemas técnicos e de relacionamento entre as partes. Com o passar do tempo, os back-ends não lidavam mais com a interface, servindo para os front-ends serviços que deveriam ser conectados por eles diretamente na interface, separando claramente as responsabilidades entre as duas especialidades. Back-end NUNCA devem ter contato com interface. Não faz sentido. Veja bem, essa divisão de alçadas foi um marco incrível, pois os back-ends poderiam agora se focar no que realmente era o seu trabalho, consequentemente a responsabilidade do front-end evoluiu (ou pelo menos deveria ter evoluído).

O que os fronts e designers deveriam estar fazendo então?\
Eu acho que toda a parte de user interface é de responsabilidade dos designers, incluindo responsabilidades adjacentes, por exemplo, implementar data points para controlar e monitorar comportamentos do usuário na interface. Isso quer dizer que front-ends devem se preocupar com outra coisa. Três exemplos:

* Performance. Ainda, o que mais pesa, é a parte de front-end. E é também o momento onde há a percepção de qualidade de estabilidade do sistema.
* Regras de negócio que devem acontecer no front-end. Algumas regras de negócio acontecem sim no back, mas muitas outras, que dependem do comportamento do usuário, devem acontecer no front.
* Criação, manutenção e monitoramento de APIs (sim, o back-end disponibiliza as bases de dados e toda a arquitetura, o front-end que deve criar os serviços que serão usados. Quem nunca ficou no meio de uma briga de backs e fronts para discutir como o formato do JSON deveria ser?)

Não acho que isso seja fácil de conseguir hoje. Talvez falte conversa, disposição, vontade de mudar. Talvez seja só medo mesmo.

### **Relacionados**

**Dados reais no design**

* [3 Easy Steps for Working with Realistic Data in Sketch Using JSON](https://www.shopify.com/partners/blog/91010886-3-easy-steps-for-working-with-realistic-data-in-sketch-using-json)
* [Designing with Data](https://medium.com/@markjenkins/designing-with-data-7f6bcd907f0a#.95haya5yq)
* [Prototype with real data in Framer, from JSON to multi-device and internet of things](https://blog.framer.com/prototype-with-real-data-in-framer-from-json-to-multi-device-and-internet-of-things-6eb1ae8b8325#.fo9b8i4gz)
* [Adobe XD: Designing with Real Data](https://medium.com/@anirudhs/project-comet-designing-with-real-data-959beccb5c1a#.v6khfndrh)

**Sobre o cenário das ferramentas de front-end**

* [front-end.directory](https://frontend.directory/)
* [Using front-end build tools](https://radify.io/blog/using-build-tools/)
* [A Collection Of Best Front End Frameworks](https://usablica.github.io/front-end-frameworks/compare.html)
* [GitHub: Front-end JavaScript frameworks](https://github.com/showcases/front-end-javascript-frameworks?s=stars)
* [Front-End Tooling Trends for 2017](https://www.sitepoint.com/front-end-tooling-trends-2017/)
* [Updated List: The 67 Very Best Front End Web Developer Tools](https://blog.debugme.eu/front-end-web-developer-tools/)
* [The most popular JavaScript front-end tools](https://techbeacon.com/most-popular-javascript-front-end-tools)
* [Top 10 Templating Engines for JavaScript To Improve and Simplify Your Workflow 2017](https://colorlib.com/wp/top-templating-engines-for-javascript/)
* [Automating Front-end Workflow](https://speakerdeck.com/addyosmani/automating-front-end-workflow)
* [Javascript State of the Union 2015, parte 3](https://medium.com/@caiovaccaro/javascript-state-of-the-union-2015-parte-3-281aa04bece1#.bulta9j6j)
* [Slides – Javascript State of the Union 2015](https://www.slideshare.net/Hugeinc/javascript-state-of-the-union-2015)
* [The State of Front-End Tooling 2016 – Results](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2016-results)
* [Front-end Roles and Responsibilities](https://hackernoon.com/front-end-roles-and-responsibilities-6ee8654f1649#.gsg5zdjtr)

**Outros**:

* [The future of front-end development is design](https://techcrunch.com/2016/11/29/the-future-of-front-end-development-is-design/)
* [The Future of Web Development: Coding as a Service](https://goo.gl/n2qbKL)
* [I welcome every designer trying # FramerX to the @reactjs community.](https://twitter.com/dan_abramov/status/1025540365435199488)
* [Framer](https://framer.com/x/)
* [\# ThinkToCode ecosystem, part 2. Just pick your target code.](https://twitter.com/teleporthqio/status/1043245039261044736?s=21)
* [The Design Tool Dilemma](https://www.freecodecamp.org/news/the-design-tool-dilemma-225541c4ad1d/)
* [3 Easy Steps for Working with Realistic Data in Sketch Using JSON](https://www.shopify.com/partners/blog/91010886-3-easy-steps-for-working-with-realistic-data-in-sketch-using-json)
* [Designing with Data](https://medium.com/@markjenkins/designing-with-data-7f6bcd907f0a#.95haya5yq)
* [Prototype with real data in Framer, from JSON to multi-device and internet of things](https://blog.framer.com/prototype-with-real-data-in-framer-from-json-to-multi-device-and-internet-of-things-6eb1ae8b8325#.fo9b8i4gz)
* [Adobe XD: Designing with Real Data](https://medium.com/@anirudhs/project-comet-designing-with-real-data-959beccb5c1a#.v6khfndrh)
* [The end of Code](https://www.wired.com/2016/05/the-end-of-code/)
* [Darpa Pliny - The $11M Tool That Could Help Computers Write Their Own Code](https://www.wired.com/2014/11/darpa-pliny/)
* [Can computers write their own algorithms?](https://www.quora.com/Can-computers-write-their-own-algorithms)
* [Why can’t there be a program that writes code for us?](https://www.quora.com/Why-cant-there-be-a-program-that-writes-code-for-us)
* [The (probable) end of the front-end profession as you know it](https://medium.com/@diegoeis/the-probable-end-of-the-front-end-profession-as-you-know-it-2e205ecb4ab8)
* [A.I. is Progressing Faster Than You Think!](https://youtu.be/mQO2PcEW9BY)
* [React Sketch.app: render React components to Sketch](http://airbnb.design/painting-with-code/)
* [React Sketch.app: github](https://github.com/airbnb/react-sketchapp)
* [You design, we put it on the web.](https://launchpad.animaapp.com/DreamShareSample/home)
* [Uizard](https://uizard.io/)
* [Pix2Code - This app uses artificial intelligence to turn design mockups into source code](https://thenextweb.com/apps/2017/05/26/ai-raw-design-turn-source-code/#.tnw_E5IF7iEY)
* [Pix2Code - This Startup Uses Machine Learning To Turn UI Designs Into Raw Code](https://www.fastcodesign.com/90127911/this-startup-uses-machine-learning-to-turn-ui-designs-into-raw-code)
* [Pix2Code - Startup uses AI to create programs from simple screenshots](https://siliconangle.com/blog/2017/05/28/startup-uses-ai-create-gui-source-code-simple-screenshots/)
* [Soon We Won’t Program Computers. We’ll Train Them Like Dogs](https://www.wired.com/2016/05/the-end-of-code/)
* [Wix Code - Create advanced web applications without coding](https://www.producthunt.com/posts/wix-code)
* [Supernova.io](https://www.supernova.io/)
* [Code beautiful UI with Flutter and Material Design - Google I/O '18](https://www.youtube.com/watch?v=hA0hrpR-o8U)
* [With Sketch 43, Design IS Code & Code IS Design](https://blog.blended.io/with-sketch-43-design-is-code-code-is-design/)
* [Can computers write their own algorithms?](https://www.quora.com/Can-computers-write-their-own-algorithms)
* [Sketch 43 will change the way we work and think](https://medium.com/sketch-app-sources/sketch-43-will-change-the-way-we-work-and-think-e4c919957423)
* [Será o fim da profissão frontend ou mais uma grande evolução? · Issue #490 · frontendbr/forum](https://github.com/frontendbr/forum/issues/490)
* [Why can't there be a program that writes code for us?](https://www.quora.com/Why-cant-there-be-a-program-that-writes-code-for-us)
* [The $11M Tool That Could Help Computers Write Their Own Code | WIRED](https://www.wired.com/2014/11/darpa-pliny/)
* [The Future of Web Development: Coding as a Service](https://hackernoon.com/the-future-of-web-development-coding-as-a-service-e413c978f77e)
* [Dan Abramov on Twitter](https://twitter.com/dan_abramov/status/1025540365435199488)
* [Soon We Won't Program Computers. We'll Train Them Like Dogs | WIRED](https://www.wired.com/2016/05/the-end-of-code/)