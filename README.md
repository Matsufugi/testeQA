# Teste Técnico – Análise de Testes (QA)

<img src="./assets/modalgr.jpg">

<h1>Objetivo: Resolução de todos os dasafios propostos pela ModalGR</h1>

### Requisitos:

A seguir estão algumas regras que devem ser seguidas:

- Utilizando Javascript ou Typescript.
- As resoluções poderão ser retornadas no CLI.
- O uso de inteligência artificial para a elaboração do texto não é permitido.
- O não cumprimento das orientações resultará na desclassificação automática.
- As resoluções dos testes técnicos deverão ser disponibilizadas em seu GitHub (PDF e arquivos), e
  o link do repositório informado no corpo do e-mail.


## Parte 1: 

Baseado na imagem abaixo, realize as seguintes atividades:

<ul>
  <li>
      <p>Descreva o número mínimo de testes necessários para serem realizados nessa tela, na função cadastro.</p>
      <span>- OBS: Apenas a função cadastro.</span>  
  </li>
  <li>
      <p>Descreva o título desses testes.</p>
      <span>- OBS: Não será necessário descrever os passos e resultados esperados, apenas o título.</span>
  </li>
</ul>

<img src="./assets/crie__sua__conta.png">


# Page para cadastro de usuário

 - Essa tela de cadastro será acessada a partir do button → “Crie sua conta“

<h3>Formulário de cadastro: </h3>

<h3>Inputs: </h3>
<ul>
  <li>Nome</li>
  <li>CPF</li>
  <li>E-mail</li>
  <li>Senha</li>
  <li>Confirmar senha</li>
</ul>

<h3>Buttons: </h3>
<ul>
  <li>Cadastrar-se</li>
</ul>

<h3>Mapa dos CTS’s (Casos de Teste): </h3>

<ul>
  <li>CT01 → Layout padronizado (UX/UI);</li>
  <li>CT02 → Exibir a mensagem:  “Preencher obrigatoriamente todos os campos”;</li>
  <li>CT03 → O campo NOME não deverá aceitar números ou caracteres especiais;</li>
  <li>CT04 → O campo CPF deverá aceitar somente números;</li>
  <li>CT05 → O campo E-MAIL não deverá aceitar domínios inexistentes;</li>
  <li>
    CT06 → O campo SENHA deverá aceitar:
      - números;
      - caracteres
      - caracteres especiais
      - letras maiúsculas ou minúsculas
      - limitar-se até um determinado número de caracteres;
  </li>
  <li>CT07 → O campo da CONFIRMAR SENHA deverá validar se ambos os campos - senha e confirmar senha - são iguais</li>
  <li>CT08 → Ao apertar no botão CADASTRAR os dados serão armazenados no banco de dados da plataforma;</li>
  <li>CT09 → Ao apertar no botão cadastrar o usuário será redirecionado para a tela de login caso o seu registro tenha sido feito e apresentará uma mensagem na tela informando sucesso na operação</li>
  <li>CT010 → Ao apertar no botão cadastrar onde os campos estão preenchidos de forma incorreta, irá ser apresentado ao usuário uma mensagem na tela da aplicação informando o erro no preenchimento.
</li>
</ul>

PS: Aberto para mais CT após análise, teste com usuário e sprints futuras


## Parte 2: 

A ModalGR possui um sistema em desenvolvimento para uma biblioteca e numa parte específica será necessário calcular o valor da multa de um livro atrasado, retornando uma mensagem no seguinte formato:

“O valor da multa para x dias de atraso é: R$x,yzˮ

Regras:

A ideia é ter 2 campos: 

1. Inserção do valor da multa por dia
2. Os dias de atraso. Em seguida, exibir a mensagem no padrão exigido.
   
Observações:

1. O valor da multa deve conter duas casas decimais após a vírgula;
2. Considere que o valor mínimo da multa é R$1,00, independentemente do
cálculo.

<h4>Resolução: </h4>

a) Utilizei o document.getElementByAdd para que e o .addEventListener pudesse identificar quando o click no button ocorresse para que pudesse ser identificado a hora da funtion ser executada.

b) Criei três (3) variavieis do tipo const: valorMulta - dias - totalPagar

   - valorMulta recebe o valor do: input id="value";

   - dias recebe o valor do: input id="dias";
   
   - totalPagar realiza o calculo da multa: valorMulta * dias.

c) Para finalizar utilizei novamente o document.getElementById para identificar o que seria alterado no index.html agora com o .innerHTML que realizaria essa alteração


# Tools:
<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>


## Parte 3: 

A ModalGR possui um sistema em desenvolvimento que recebe uma frase e, a partir disso, exibe a quantidade de palavras contidas nela.

Observação:
• Entrada: "A ModalGR está criando soluções incríveis."
• Saída: Quantidade de palavras: 6
• Considere como separadores de palavras apenas os espaços em branco.

<h4>Resolução: </h4>

Optei apenas por pegar o value da text area e armazenar em uma variável onde utilizei o .trim() para remover os espaços em branco e o .split(" ") para separar o o conteudo a partir dos espaços
após isso utilizei a .lenght() para descobrir o valor.

# Tools:
<a><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
