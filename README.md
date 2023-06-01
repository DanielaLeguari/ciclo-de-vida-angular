# Aplicação de Lista de compras


## Instalação de dependências

- `npm i`

## Execusão do projeto

- `ng serve --o`


# Ciclo de vida no Angular

- Tudo começa quando o Angular instancia a classe do componente, ou seja, quando ele chama a classe do componente e o exibe na tela. A vida dele acontece quando o Angular mostra os itens, interage com a pessoa usuária e interage com outros componentes. Por fim ele é destruído quando o componente ou diretiva não é mais utilizada, então o Angular destrói a instância dessa classe.

- O Angular chama algum método no decorrer da vida dele, ou seja, em cada um desses momentos. Esses métodos são chamados de hooks (tradução: ganchos).

## ngOnInit()

- O OnInit é o lugar para criar lógicas adicionais logo após o componente/diretiva ser inicializado e antes de qualquer exibição ou componentes filhos serem verificados.
- Um exemplo de lógica de inicialização é a de realizar uma busca em um método de um serviço. Importante ressaltar que este gancho é chamado apenas uma vez.


## ngOnChanges()

- O Angular utiliza um mecanismo de detecção de mudança que identifica quando um componente tem uma propriedade de entrada.
- oOAngular precisa preparar as informações para serem renderizaradas. Depois de renderizadas, ele conseguirá trazê-las para a tela, chamando o OnInit.
- Em resumo: primeiro temos o OnChanges para preparar as informações, depois temos o OnInit para trazer as informações para a tela, mostrando nosso componente.
