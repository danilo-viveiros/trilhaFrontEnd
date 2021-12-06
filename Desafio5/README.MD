<h1 align="center"><img src="https://ik.imagekit.io/ye92oytkqhhm/Sem_título_zEMc7QNMv.png?updatedAt=1637672480064"></h1>


## 📋Sobre

Este projeto, foi criado para aprender e conhecer mais sobre o Git e GitHub que sao ferramentas para compartilhamento e versionamento de projetos.

Aqui também veremos como utilizar o Angular e suas propriedades mais importantes.

---

## 🚀Técnologias utilizadas

Esse projeto utiliza as seguintes tecnologias

- [Git](https://git-scm.com/)
- [Github](https://github.com/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Angular](https://angular.io/)

---

## 💼 Como baixar o projeto

```bash
#Clone o repositorio em uma pasta em seu computador utilizando o git com o código abaixo: 

$git clone https://github.com/danilo-viveiros/trilhaFrontEnd.git

```
---

## 📚Quiz

1️⃣ Explique de forma sucinta a diferença entre SPA e MPA

Um SPA Single Page Application é um aplicativo que funciona dentro de um navegador e não requer recarga de página durante o uso Ex. Facebook.

Um MPA Multiple Page Application é o modelo convencional de construção de softwares front-end, tendo várias páginas em sua navegação.

---

2️⃣ Como eram as páginas WEB na década de 90 e 1º década dos anos 2000?    

Eram paginas bem simples utilizadas basicamente para compartilhamento de conteúdo online de forma estática.

---

3️⃣ 3-	O que é WEB 1.0 , WEB 2.0 e WEB 3.0?

WEB 1.0: A primeira versão da Internet (chamada de ARPANET) surgiu logo após a Guerra Fria, na década de 1960. O propósito inicial da Web servia a objetivos militares dos EUA, propiciando compartilhamento de informações.
Nessa fase, a Internet se caracterizou especialmente pela entrega de conteúdo online, de forma estática, em sua maior parte corporativo.

Web 2.0: Web ganhou novas ferramentas que a tornaram mais dinâmica, dando início à fase 2.0. Além disso, ela marcou os anos 2000 com o compartilhamento de informações.
Nessa etapa, os usuários a invadiram com produção de conteúdo em vídeo, texto e fotografia — e essa foi a era dos blogs, canais do youtube e redes de compartilhamento de fotos.

WEB 3.0: Nessa fase (que estamos vivendo atualmente), a Web está alcançando altos patamares de velocidade de divulgação e compartilhamento, tornando-se cada dia mais organizada semanticamente. Com isso, está havendo um fortalecimento do marketing digital!
Desse modo, as empresas estão ganhando inteligência competitiva, alcançando seus internautas de forma mais eficiente — e a fórmula para isso está sendo a entrega de conteúdo personalizado, especialmente em vídeo.


---

4️⃣ Com suas palavras, responda às seguintes perguntas referentes ao Angular:

A-) De forma resumida o que é o Angular?

Angular é um framework criado pelo google que tem como principal caracteristica criar aplicações SPA.

---

B-)	Qual a relação do Angular com SPA?

Angular tem como principal caracteristica criar aplicações SPA de forma produtiva, permitindo o desenvolvedor quebrar o código em partes utilizando componentes, módulos e outras funcionalidades.

---

C-) Em uma aplicação básica, o que é essencial ter?

Um componente CSS, um componente HTML e um componente TS

---

D-) O que é o Angular CLI e qual a sua importância? Dê exemplos;

Angular CLI, é comand line interface, é como um prompt de comando que é utilizado para configurar o ambiente de desenvolvimento, podendo fazer compilação da aplicação, adicionar modulos, gerar pacotes, etc.

---

E-) Para que serve o arquivo angular.json?

fornece padrões de configuração específicos do espaço de trabalho e de projeto para ferramentas de construção e desenvolvimento fornecidas pelo CLI Angular

---

F-) Quais pacotes (libs) são considerados primários (default)

version: A versão de configuração-arquivo.

newProjectRoot: Caminho onde novos projetos são criados. Absoluto ou relativo à pasta do espaço de trabalho.

defaultProject: Nome do projeto padrão para uso em comandos, quando não fornecido como argumento. Quando você usa para criar um novo aplicativo em um novo espaço de trabalho, esse aplicativo é o projeto padrão para o espaço de trabalho até que você alterá-lo aqui

cli :Um conjunto de opções que personalizam o CLI Angular

schematics : Um conjunto de esquemas que personalizam os padrões da opção de sub-comando para este espaço de trabalho.

projects : Contém uma subseção para cada projeto (biblioteca ou aplicativo) no espaço de trabalho, com as opções de configuração por projeto.

---

G-) Para que serve o arquivo environment.ts?

Serve para definir variáveis de ambientes.

---

5️⃣ Sobre Text Interpolation, responda:

A-) O que é?

A interpolação permite incorporar strings calculadas no texto entre tags de elemento HTML e dentro de atribuições de atributos.

---

B-)Quais os benefícios de se ter interpolação em uma aplicação Angular?

O principal beneficio da interpolação é colocar uma string de forma dinâmica dentro de uma área delimitada por {{..}} no seu template HTML.


---

C-) Crie uma interpolação com o seu nome, com nome do seu guia, data do desafio e a sua turma do desafio.

```HTML

 <h1>Meu nome é: {{nomeCompleto}} e meu guia é: {{nomeGuia}}</h1>
 <h1>Data de hoje: {{data | date:'dd/MM/yyyy HH:mm:ss'}}</h1>
 <h1>Faço parte da turma: {{turma}}</h1>

```

```TS
import { utf8Encode } from '@angular/compiler/src/util';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'

})
export class AppComponent {
  nomeCompleto = 'Danilo de Viveiros Ribeiro';
  nomeGuia = 'Alexander'
  turma = 'turma 8';
  data = Date.now()
}

```




github

---

6️⃣ A respeito de Binding, responda:

A-) O que é Property Binding e quais as suas aplicações?

Essa propriedade ajuda a definir valores ou diretivas HTML. Podemos usar para altera a funcionalidade de um botão, definir caminhos e compartilhar valores entre componentes de forma programática.

---

B-) Qual é o passo a passo do fluxo das informações com Property Binding?

A vinculação da propriedade move um valor em uma direção, da propriedade de um componente para uma propriedade de elemento alvo.

---

C-) Dê um exemplo de Property Binding e explique o seu funcionamento.

O funcionamento é feito através da vinculação da propriedade de um elemento à propriedade de um componente colocando o atributo dentro de colchetes seguidos por um sinal de igual e sem seguida a propriedade:

```HTML

<img [src]="itemImageUrl"> 

```
---

D-) O que é Event Binding?

Event Binding  permite que você ouça e responda às ações do usuário, como teclas, movimentos do mouse, cliques e toques.

---

E-) Dê um exemplo de Event Binding e explique o seu funcionamento.

Evento criado para salvamento 

```CSS

    .click onSave()

```

Sintaxe de vinculação

```HTML

<button (click)="onSave()">Salvar</button>

```
Aqui o Event Binding ouve os eventos de clique do botão e chama o método do componente sempre que ocorre um clique. onSave()

---

F-) O que é Two-Way-Data-Binding e em quais cenários devemos usá-lo?

O Two-Way-Data-Binding é uma propriedade que dá aos componentes do aplicativo uma maneira de compartilhar dados.
Devemos usá-lo quando queremos utilizar eventos simultâneos 

---

G-) Dê um exemplo de Two-Way-Data-Binding e explique:

A utilização de Two-Way-Data-Binding  é feita através de colchetes e parênteses da seguinte forma:


```HTML

<app-sizer [(size)]="fontSizePx"></app-sizer>

```

---

7️⃣ Diretivas:

A-) O que é uma diretiva Angular e qual o seu propósito?

Diretivas são extensões da linguagem HTML, que fornecem a possibilidade de estender/ampliar o comportamento de elementos HTML. Este recurso permite a implementação de novos comportamentos de forma declarativa.

---

B-) Quais tipos de diretivas existem?

Diretivas de atributos, Diretivas estruturais e Componentes.

---

C-) O  Angular  possui  algumas  diretivas  default,  explique  as  6  principais  e  dê  um  exemplo de cada;

- ng-app <br>
Declara um elemento como o elemento raiz da aplicação, ocasionando a mudança do comportamento padrão da tag.

```html

<body ng-app="movieHunter">

```

- ng-bind <br>
Muda o texto de um elemento HTML automaticamente, de acordo com o seu resultado, vindo das regras de negócio.

```HTML

<div ng-app="" ng-init="myText='Hello World!'">

<p ng-bind="myText"></p>

</div>


```

- ng-model <br>
É similar ao ng-bind, mas permite ligação direta bidirecional (two-way data binding ) entre a view e o escopo do aplicativo.

```HTML

<ANY
  ng-model="expression">
...
</ANY>


```

- ng-class <br>
Permite atributos de classe serem carregados dinamicamente.
```HTML

<some-element [ngClass]="'first second'">...</some-element>

```

- ng-click <br>
Permite instanciar o evento de click, semelhante ao onclick.

```HTML

<button ng-click="count = count + 1" ng-init="count=0">OK</button>

```

- ng-controller <br>
Especifica um controller JavaScript para aquele HTML em questão.

```HTML

<ng-controller
  ng-controller="expression">


```
---

8️⃣ Reactive forms:

A-) Qual a diferença entre template-driven e reactive forms?

Template-Driven Forms funcionam de forma assíncrona. Para usar o Template-Driven Forms é necessário importar o módulo FormsModule. No caso dos Reactive Forms a lógica fica, geralmente, no componente e as suas validações são feitas programaticamente com TypeScript.

---

B-) Quais benefícios temos ao usar um formulário reativo?

os formulários reativos são mais testáveis e não usam Data Binding, que por consequência resulta no princípio de imutabilidade que torna comportamentos mais "previsíveis".

---

C-) Quais módulos são necessários para criar os formulários reativos?

ReactiveFormsModule

---

D-) Quais classes base temos para formulários reativos no Angular?

Temos que ter na classe todos os tipos de imputs do formulário que queremos criar.
Ex.:

```TS

Exports class Cliente {
Nome: string = ’ ’;
Tipo: number = 1;
}


```

---

E-) Como é feita a configuração de um formulário reativo usando separadamente as classes base?

Podemos utilizar separadamente as classes bases para que os formulários tenham o mesmo comportamento através da herança.

---

F-) Como se dá o fluxo de informações entre o formulário reativo e o componente em Angular?

- Construa a forma básica.
- Defina um modelo de dados de amostra.
- Inclua infraestrutura necessária, como a .FormsModule
- Vincular controles de formulário às propriedades de dados usando a diretiva e a sintaxe de vinculação de dados bidirecional. ngModel
- Examine como os relatórios controlam os estados usando as classes CSS.ngModel
Controles de nome para torná-los acessíveis a .ngModel
- Acompanhe a validade da entrada e o status de controle usando . ngModel
Adicione CSS personalizado para fornecer feedback visual sobre o status.
- Mostrar e ocultar mensagens de erro de validação.
- Responda a um evento nativo de clique com botões HTML adicionando aos dados do modelo.
- Manuseie a submissão de formulário usando a propriedade de saída ngSubmit do formulário.
- Desabilitar o botão Enviar até que o formulário seja válido.
- Após enviar, troque o formulário finalizado por diferentes conteúdos na página.

---

G -) Explique  para  o  que  serve  a  validação  de  um  formulário  e  como  isto  pode  ser  apresentado para o usuário?

A validação do formulário é usada para garantir que a entrada do usuário esteja completa e correta. Sim pode ser apresentado para o usuário através de uma mensagem de erro utilizando o .ngModel

---