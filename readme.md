# PoC: Roteamento entre microfrontends
Essa PoC tem o objetivo de apresentar algumas soluções para integrar o roteamento via cliente entre aplicações Vue 2 e Vue 3. Além disso, queremos definir as responsabilidades de cada aplicação, sendo assim, estabelecemos dois papéis:

- **Host**: é a aplicação responsável por gerenciar o roteamento, instanciar as aplicações remotas e cuidar do cliclo de vida destas aplicações. No futuro, o host também será responsável pela autenticação e pela gestão do estado globa da aplicação.

- **Remote**: são as aplicações microfrontends que serão instanciadas pelo **Host** por meio do Module Federation.

## Cenários

Foram testados dois cenários de integração do roteamento:

1. Router compartilhado (Host)
2. Sincronização entre _routers_ (Host & Remote)

* Outro cenário abordado (mas não o foco aqui) foi o uso da instanciação dinâmica da aplicação remote via Module Federation. Isso pode ser visto dentro do **Host** no componente `DynamicLoader.vue`.

## Resultados

Conseguimos provar que é possível integrara aplicações Vue 2 e Vue3, usando a sincronização entre _routers_ (cenário 2). Para o caso de duas aplicações em Vue 2, é possível aplicar ambas as soluções (cenário 1 e 2), sendo que o compartilhamento do _router_ é o mais simples.

## Rodar a PoC

Para iniciar a Poc rode os seguintes comandos:

```bash
// Entra na pasta da Poc
cd mfe-sharing-router

// Instala as dependências do projeto
yarn install

// Roda todas as aplicações ao mesmo tempo
yarn dev

// Acesse http://localhost:8090
```

Abaixo seguem as portas em que cada aplicação está rodando:

| Applicação | URL                   | Aplicação | Observações                                |
|------------|-----------------------|-----------|--------------------------------------------|
| host       | http://localhost:8090 | Vue 2     | Router altera o history do navegador       |
| remote1    | http://localhost:8091 | Vue 2     | Router compartilhado                       |
| remote2    | http://localhost:8092 | Vue 2     | Sincronização de routers e import dinâmico, router abstract |
| remote3    | http://localhost:8093 | Vue 3     | Sincronização de routers e import direto, router abstract   |
| remote4    | http://localhost:8094 | React 18  | Sincronização de routers e import direto, router abstract   |
