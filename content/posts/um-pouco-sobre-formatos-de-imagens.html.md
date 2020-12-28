---
title: Um pouco sobre formatos de imagens
type: post
date: 2016-07-03
image: https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?cs=srgb&dl=action-plan-brainstorming-complex-212286.jpg&fm=jpg
categories:
- desenvolvimento web
---

Queria falar um pouco sobre alguns formatos de imagens que usamos todos os dias. Dar algumas informações que encontrei por aí. Vamos explorar as duas principais opções de formato gráfico que pode ser usado na Web para representar gráficos simples, esquemas ou logotipos. Embora hoje possamos usar SVG em diversos momentos, principalmente para ícones ou Logos, o PNG e o GIF ainda podem ser usadas. Depois falamos mais sobre o SVG.

### GIF
GIF (sigla para Graphics Interchange Format) foi desenvolvido no final dos anos 1980 e ainda é amplamente utilizado. PNG (Portable Network Graphics) foi desenvolvido por volta de 1995, tornou-se uma recomendação W3C em 1996, e tem sido amplamente implementado na maioria dos navegadores da Web, logo em 1998.

O formato GIF é um formato que comprime arquivos usando um algoritmo chamado LZW, que mantêm traços das cores e ajuda a reduzir o tamanho do arquivo.
O formato suporta até 8 bits por pixel para cada imagem, permitindo que uma única imagem use até 256 cores diferentes, escolhidos a partir do espaço de cor RGB de 24 bits. Ele também suporta animações e permite uma paleta separada de até 256 cores para cada frame. Estas limitações de paleta tornam o formato GIF ruim para usar em fotos e outras imagens mais complexas, mas é bem adequado para imagens simples, tais como desenhos ou logotipos que tenham áreas de cor sólida. Tipo aqueles desenhos fazíamos no PaintBrush. ;-)

O ponto forte de GIF é que ele é muito amplamente suportado e, portanto, bem estabelecida como a escolha padrão para gráficos simples na Web. Em comparação com as outras opções (especialmente PNG) GIF não é tecnicamente superior, mas durante os primeiros anos da Web, quando o suporte para PNG estava começando, era de fato uma escolha mais segura.

Uma das questões que envolvem o formato GIF é que o algoritmo LZW foi protegido nos EUA por uma patente detida pela empresa Unisys. A patente Unisys LZW expirou nos EUA em 20 de junho de 2003. Essa patente da LZW também expirou no Canadá, França, Itália, Alemanha, Reino Unido e Japão. A versão original do GIF era chamado de 87a. <a href="https://www.w3.org/Graphics/GIF/spec-gif87.txt">Se liga nessa spec do W3C</a> de 15 de Junho de 1987. Aposto que alguns leitores nem tinha nascido. Eu já, tinha uns 4 anos.

### PNG

PNG (Portable Network Graphics), um formato de arquivo de armazenamento portátil, bem compactada para imagens raster. PNG oferece um substituto livre de patentes para o GIF e também pode substituir muitos usos comuns do TIFF. De cores indexadas, transparência alpha e imagens truecolor são suportados.

Para a Web, PNG realmente tem três vantagens principais sobre GIF:

- canais alfa (transparência variável). Eu ainda me lembro de usar algumas gambiarras para fazer o canal alfa funcionar no IE5.5 e IE6. :-)
- correção de multi-plataforma gama (controle de brilho da imagem) e correção de cor
- entrelaçamento bidimensional (um método de visualização e carregamento progressivo).

PNG também comprime melhor que GIF em quase todos os casos (5% a 25% em casos típicos). E você pode dizer: "Mas o GIF pode ser animado!" mas o PNG também pode: há um formato chamado MNG que se destina como um substituto para GIF animado, mas sem as limitações impostas pela GIF (por exemplo, animações de MNG podem ter profundidade de cor total e parcial ou total transparência). No entanto, quase não há navegadores suportam MNG (algumas versões do Mozilla fazer, mas a maioria não, e IE não) para MNG útil (ainda) não é como um formato web. Mas aí entra o <a href="https://en.wikipedia.org/wiki/APNG#cite_note-20">APNG</a>, que é outro formato que compete com o MNG, onde há um bom suporte em todos os navegadores. Contudo, não vejo muita gente usando ainda hoje.

E aquele esquema de PNG8 e PNG24? Bom, PNG8 é uma abreviação para "8-bit PNG," mas mais geralmente refere-se a imagens (colormapped) PNG baseada em paleta com 1, 2, 4 ou 8 bits pixels. Isto é, cada valor de pixel na imagem propriamente dita é 8 (ou menos) bits de profundidade, e que atua como um índice para um determinado valor de cor RGB de 24 bits na paleta. Uma imagem colormapped 1-bit pode referir-se a não mais de duas cores; uma imagem de 2 bits não podem ter mais do que quatro; uma imagem de 4-bit pode ter não mais do que 16; e uma imagem de 8 bits pode ter até 256 cores. Entenda que, ao contrário do GIF, as paletas do PNG podem ter qualquer número de entradas - pelo menos, até o máximo permitido pela profundidade de bits - Não apenas potências de dois.

O PNG24, por outro lado, é uma abreviação para "PNG de 24 bits" e refere-se a imagens truecolor ou RGB (vermelho / verde / azul). Cada pixel em tais imagens é de 24 bits (3 bytes) de profundidade e diretamente especifica uma cor em vez de agir como um índice para uma tabela de pesquisa de cores (ou seja, uma paleta). Estas imagens, portanto, pode conter até 16,8 milhões de cores, embora os típicos tendem a usar não mais do que 50.000 ou assim.

Quando você um logo simpels, ou um ícone e etc, você pode salvar como PNG8 que o resultado geralmente é melhor que GIF. Se você vê uma imagem, que não é uma foto, mas contém gradientes e uma mistura enorme de cores, você pode salvar como PNG24. Pode ser que você tenha uma compressão e qualidades melhor que JPG e com certeza é melhor que GIF. Além de ganhar o canal alpha (não, no PNG8 não dá para fazer canal alpha por causa da quantidade de cores).

## Gargálo e outros formatos de imagem
Faz tempo que não salvo nenhum ícone ou imagem simples como GIF. O PNG sempre dá conta do trabalho, quase sempre tem compressões melhores e é compatível com todos os browsers hoje em dia. Mas imagem sempre foram um gargalo para quem trabalha com internet. Com a evolução das telas e monitores, a necessidade de usar imagens com melhor qualidade aumentou e por isso talvez os formatos de imagens tradicionais podem não servir durante muito tempo. 

O HTML tenta resolver parte do problema tentando te dar maneiras de servir imagens com mais ou menos qualidade ou de diferentes tamanhos dependendo dos dispositivos e etc. Há <a href="https://www.slideshare.net/caelumdev/tudo-que-voc-precisa-saber-sobre-ltpicture-e-srcset">uma palestra bem legal do Sergio Lopes falando sobre isso</a>. Embora isso tudo ajude, as imagens ainda precisam mudar.

### A tentativa do Google - WebP
WebP é um formato de imagem moderna que fornece "lossless" (algoritmo de compressão sem perda de qualidade) superior e compressão para imagens na web. Usando WebP, desenvolvedores podem criar imagens menores, mais ricas e que tornam a web mais rápida. As imagens WebP são 26% menores em tamanho em comparação com PNGs, com 25-34% menos perdas de qualidade do que as imagens JPEG.

<img src="https://tableless.com.br/wp-content/uploads/2016/07/compression-webp_lossy.png" alt="compression-webp_lossy" width="744" height="656" class="aligncenter size-full wp-image-55075" />

O Lossless das imagens WebP suporta canais alpha com um custo de apenas 22% de bytes adicionais. Para os casos quando a compressão RGB é aceitável, WebP com perdas também suporta a transparência, normalmente fornecendo arquivos três vezes menores em comparação com PNG.

A compressão do WebP utiliza codificação preditiva para codificar uma imagem, o mesmo método usado pelo codec de vídeo VP8 para comprimir keyframes em vídeos. Codificação preditiva usa os valores em blocos de pixels vizinhos para predizer os valores em um determinado bloco, em seguida, codifica apenas a diferença.

Para melhorar a qualidade, a imagem é segmentada em áreas que têm características visivelmente semelhantes. Para cada um desses segmentos, os parâmetros de compressão (passos de quantização, força de filtragem, etc.) estão sintonizados de forma independente. Isso produz compressão eficiente redistribuindo bits, onde eles são mais úteis. 

Previsão de codificação é uma razão principal pelo qual o WebP pode ser melhor que o JPEG. Blocos de quantização adaptativa faz uma grande diferença também. A codificação aritmética booleana fornece 5% -10% de ganhos de compressão em comparação com a <a href="https://en.wikipedia.org/wiki/Huffman_coding">codificação de Huffman</a>, que é o algoritmo usado nas imagens JPEG (e também nos arquivos de MP3).

O Google fez um <a href="https://developers.google.com/speed/webp/docs/c_study">estudo comparativo</a> que mostra alguns números interessantes.

O Google explica <a href="https://developers.google.com/speed/webp/docs/compression#lossy_webp">um monte de coisa técnica sobre o formato WebP</a>. Se você tiver paciência para ler, vai ser bem legal, pelo menos para conhecer mais esse mundo maluco de algoritmos de compressão e etc. E esse é o <a href="https://developers.google.com/speed/webp/">site oficial do WebP</a>.

## Okay, mas eu posso usar o que?
Você usa o que você quiser. Quer usar SVG para ícones, facilitando a visualização em aparelhos que tem tela retina e de alta qualidade? Vai fundo. Quer usar PNG em vez de GIF por que acha que é mais fácil de manter, sem problemas. Quer usar JPG em vez de WebP, por que sim? Beleza, não tem problema. O negócio é sempre utilizar o que é melhor para cada necessidade de imagem. Eu ainda salvo imagens, quando são fotos, em JPG. Não usei WebP de verdade ainda por causa do suporte no Safari e na indecisão do Mozilla. Mas uso PNG o tempo inteiro em vez de usar GIF.

Esse ainda da muito pano para manga e está longe de acabar...