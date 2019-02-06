---
title: Introdução bem rápida sobre vim
date: 2017-02-01
tags:
- desenvolvimento
---

O **vim** é um editor de texto muito conhecido no mundo Linux. Embora conheça faz tempo, eu nunca o utilizei exatamente por que a curva de aprendizado é terrivelmente longa. Aposto que você conhece alguém que já ficou preso no vim quando foi editar um arquivo no servidor e nem sabia como salvar e sair do arquivo. Normal quando se está começando e nem tem ideia de como o vim funciona.

Só para avisar: eu uso Mac, mas é provável que tudo isso aqui funcione num Linux. Mas não tenho ideia se alguma coisa funcionaria no Windows.

## Um pouco de blá blá blá histórico

Se você for cavar informações na Web, vai encontrar várias informações interessantes sobre de onde o vim surgiu. Primeiro, a palavra vim significa VI Improvement. O vim é uma melhoria do editor vi, que foi baseado num editor chamado ex, que por sua vez foi baseado num editor chamado qed, que por sua vez era uma melhoria de um editor chamado ed, que talvez foi inspirado em outro editor. ;-) Todas essas e outras informações você pode achar [aqui](https://en.wikipedia.org/wiki/Ed_%28text_editor%29) e [aqui](https://en.wikipedia.org/wiki/Vi).

O interessante do vim é que você pode aprender praticamente TUDO sobre ele executando apenas o comando :help. Abra o vim simplesmente digitando vim no seu terminal e aperte ENTER. Depois de aberto, digite :help para abrir o manual. Lá tem TUDO o que você precisa saber. Eu poderia terminar esse artigo aqui e pronto. :-D

## Modos e comandos básicos
A curva de aprendizado do vim é gigante por que você primeiro precisa entender que: o mouse é seu inimigo. A ideia é aumentar a produtividade. Parar de usar o teclado para usar o mouse enquanto estamos digitando código é perda de tempo. Logo, o objetivo é que você tente usar cada vez menos o mouse. Para isso, o vim tem alguns modos de controle:

* No modo Normal você pode executar todos os comandos normais do editor. Serve para você navegar e manipular o texto. Este é o modo que o vim inicia e que você volta toda vez que sai de outro modo usando a tecla ESC. Geralmente, para navegar no texto, o pessoal do vim usa as seguintes teclas: h para esquerda, j para baixo, k para cima e l para direita. Eu ainda não me acostumei com isso e insisto em usar as setas do teclado. :-
* O modo Visual é como o modo Normal, mas quando você navega pelas palavras ou linhas, elas são selecionadas. Quando um comando é executado, ele vai ter efeito apenas na área selecionada. Quando você está nesse modo, aparece um “– VISUAL –” no rodapé da janela. Ela é ativada apertando a tecla v.
* O modo Select é igual ao Visual, mas um pouco parecido com o estilo de seleção do MS-Windows. Não se preocupe com esse modo… me atrevo a dizer que você nunca vai usá-lo.
* O modo Insert é onde você escreve e modifica o texto do arquivo (buffer). Ela é ativada apertando a tecla i. Apertando a tecla i, você poderá inserir ou apagar o texto onde o cursor está naquele momento.
* No modo Command-line ou Cmdline, você escreve um comando no rodapé da janela. Esse modo é ativado usando alguns comando como busca (? ou /) e o comando de filtro (!).
* O modo Ex é ativado com o comando :. Nesse modo, você vai executar comandos como salvar o arquivo (:w), fechar o arquivo (:q) ou até juntar os dois comandos (:wq), além de outros.

Isso tudo parece complicado… Só parece… Vamos aprender na prática.

## Na prática: editando e salvando um arquivo
Abra seu terminal e entre na pasta do seu Desktop (ou qualquer outra pasta que você desejar). Agora execute o seguinte comando:

```
vim teste.md
```

Isso vai abrir uma instância do vim, editando um arquivo vazio chamado teste.md. Agora, aperte a tecla i. Este é o comando para entrar no modo de Insert (ou Inserção). Digite Hello World. O arquivo ainda não existe, por que você ainda não o salvou. Para salvar o arquivo, você precisa sair do modo de Insert e voltar para o modo Normal. Para fazer isso basta apertar a tecla ESC. Agora, pra salvar o arquivo, exatamente na pasta em que você está, basta executar o comando :w. Para sair do arquivo e voltar para o terminal, basta executar o comando :q.

Verifique agora se o arquivo existe e se o seu conteúdo é o esperado. Pode fazer isso usando qualquer outro editor de texto.

Por enquanto, a interface do seu vim deve estar muito, mas muito feia. Vamos dar um jeito nisso.

## Customizando seu vim

Como qualquer editor que se preze, o vim pode ser totalmente customizado. Eu nunca gostei de usar o vim — estou aprendendo por pura curiosidade — mas sempre gostei do visual simples e clean do editor. Você customiza o vim por meio do seu arquivo de configuração chamado .vimrc. O .vimrc vai guardar todas as configurações do editor e também quais os plugins que serão instalados, bem como algumas configurações desses plugins. Eu conheço um cara chamado [Sérgio](https://www.sergioaugrod.com.br/) que tem [o vim mais legal que eu já vi](https://github.com/sergioaugrod/dotfiles/blob/master/.vimrc). Ele me deu o .vimrc dele e a partir dali eu modifiquei para ficar de acordo com as minhas necessidades (que eram bem mais simples que as dele).

Para facilitar, existe um gerenciador de plugins para vim chamado Vundle (não vá se confundir com o [Vando](https://www.google.com.br/search?q=vando&safe=off&client=safari&rls=en&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiqhqm086TRAhXCF5AKHQqRBVAQ_AUICSgC&biw=2398&bih=1351#safe=off&tbm=isch&q=vando+calcinha&imgrc=eFoxWJye6tM-TM%3A), hein?!). Eu fiz o meu .vimrc se baseando nas configurações do [arquivo do Sérgio](https://github.com/sergioaugrod/dotfiles/blob/master/.vimrc). Logo, sugiro que você faça o mesmo. O [meu está aqui](https://github.com/diegoeis/configfiles/blob/master/vimrc) e o [dele está aqui](https://github.com/sergioaugrod/dotfiles/blob/master/.vimrc). A diferença dos dois são os plugins que serão instalados. O visual do editor é praticamente o mesmo.

Para customizar seu vim, baixe algum dos .vimrc citados acima. Coloque na sua pasta Home (~/). Feito isso, instale o [Vundle](https://github.com/VundleVim/Vundle.vim), vamos precisar dele.

Depois abra o Terminal, digite **vim** e aperte **ENTER**. O vim feião e cru do seu Mac/Linux vai abrir. Do jeito que o vim está, digite **:PluginInstall**. Deve aparecer uma tela mais ou menos assim:

![](https://cdn-images-1.medium.com/max/800/1*8QPO2u7FHyQLLhdsojDssQ.png)

Agora feche e abra o Terminal e abra o vim novamente. Ele deve estar mais ou menos igual a imagem abaixo:

![](https://cdn-images-1.medium.com/max/800/1*ACGv9GCszyLvcT-5RTKlAg.png)

## Instale o MacVim
Bom, vamos facilitar para quem usa Mac, como eu. Para ter uma integração melhor com o Mac, eu uso o MacVim, que é simplesmente o vim, só que mais integrado com o sistema operacional e standalone, isso quer dizer que ele não está "preso" no terminal. Por exemplo, você tem suporte a edição fullscreen, scroll e copy and paste como se fosse qualquer app do Mac… basta instalar via brew ou [baixar no site oficial](http://macvim-dev.github.io/macvim/):

```
brew install macvim
```
Depois execute o comando abaixo ou coloque no seu .bash_profile ou similar:

```
alias gvim='/Applications/MacVim.app/Contents/MacOS/Vim -g'
```

Agora, pra abrir um arquivo, basta digitar gvim [nome_do_arquivo]. É uma boa ideia você ler o [FAQ do MacVim](https://github.com/macvim-dev/macvim/wiki/FAQ). Tem muita coisa boa explicada lá.

Essa [apresentação vai te ajudar muito a entender melhor o vim](https://faraohh.files.wordpress.com/2009/01/vim-super_editor.pdf).



