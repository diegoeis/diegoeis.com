---
title: Anotações - Palestra do Jean Carlo Emer - Aplicações Web com React
type: post
date: 2016-04-07
categories:
- anotacoes
- palestras
- desenvolvimento web
---

O que consegui anotar da palestra do Jean Carlo Emer sobre Aplicações React no 18 Encontro Locaweb em Belo Horizonte o dia 07/04/2016.

*   Aplicações possuem diferentes estados em uma única página.
*   O Gmail é a aplicação web mais notável, porque ele lançou esse tipo de aplicação, dando o ponta pé com o Ajax
*   O Facebook também, onde você tem uma timeline, que carrega conforme a atualização
*   A navegação pelo conteúdo torna-se mais fluída em uma aplicação
*   Uma aplicação web tem uma camada entre navegador e servidor reduz a carga de dados
*   Uma aplicação web tenta criar experiência compatíveis as das ferramentas nativas, por menos custo e melhor suporte
*   Tres aspectos importantes:
    1.  Priorizar o conteúdo. O mais importante da web é o conteúdo. Todo conteúdo deve ser acessível
    2.  Primar por uma boa experiência de navegação
    3.  Atentar para a performance percebida. Performance percebida é aquela performance que o usuário sente. O usuário é o parâmetro.
*   0.1 segundos é imperceptible para o usuário. 1 segundo é aceitável. 10 segundos é mais que suficiente par perder o usuário.
*   [http://blog.teamtreehouse.com/perceived-performance](http://blog.teamtreehouse.com/perceived-performance)
*   Quando o usuário entra num site e ele é lento, há grandes chance do usuário achar que o site é lento e nunca haverá mudanças
*   Fugir da chuva de reflows não é a tarefa fácil. Alterar os elementos do documento sem critérios não é performático.
*   O botão voltar do navegador precisa ter sentido. Os estados da app e a barra de endereço devem ter sincronia.
*   JavaScript e css viram caos fácil fácil. a organização do código precisa ser planejada e praticada
*   Internet caiu e voltou, e agora? Instabilidades na conexão de rede precisam ser endereçadas.
*   Os motores de busca devem reconhecer o conteúdo do seu site. Mesmo que a aplicação seja um SPA com JS.
*   Já existem diversas tecnologias para auxiliar nessas situações. Você precisa procura uma que atenda a equipe, que faça o time se sentir confortável.
*   O React não é um framework, ele é uma biblioteca. Ele não te diz como você integra seu código. Ele serve para você escrever seus componentes.
*   Componentes são usados para formar um sistema mais complexo.
*   Existem dois tipos de conteúdos: os do servidor e os do usuário.
*   Componentes guardam estado e recebem dados dos seus ancestrais.
*   O que é estado em um componente? É tudo aquilo que pode sofrer alteração durante o ciclo de vida da aplicação
*   Componentes que recebe dados do servidor, formulário de dados, ações do usuários.
*   O ciclo de vida é o mais recurso mais poderoso dos componentes.
*   código pode ser executado antes e depois da interface ser montada e quando a interface precisar de ajustes
*   também é possível decidir o que fazer com dados recebidos
*   React já lida muito tem com CSS transitions. Permite apoiar transições de estados com CSS de forma simples.
*   o dom virtual aplica apenas as mudanças realmente necessárias no documento e em lotes.
*   Quando o componente vai ser representado na tela, o react cria uma representação virtual, faz uma diferença entre os elementos diferentes e só aplica aquilo que ele encontrou diferença.
*   Assim o react não remonta a página inteira se houve uma mudança simples, como mudanças de texto.
*   O React não define como você gerencia as rotas da aplicação
*   O React Router permite como você integra a barra de endereço com a aplicação. Ele integra a sua aplicação com o navegador.
*   As rotas são componentes também.
*   Diferentes rodas podem apontar para os mesmos componentes.
*   React e Router são desenhadas para executarem com facilidade na plataforma node.js em servidores.
*   Entregar HTML é garantia de performance e boa indexação em buscadores.
*   Webpack: permite transformar, juntar e compactar o código de todos os componentes.
*   verificar, transformar e empacotar são palavras chaves em código front-end
*   jest e enzyme apoiam a escrita de testes isolados para cada componente
*   Como desenvolvedor você foca em conteúdo e navegação. O React foca na performance dos componentes.
