# Eccomerce prova tecnica

## Resumo do projeto

Esse projeto foi desenvolvido com ES6, SASS e HTML. Para o Bundle foi utilizado o Webpack 4. 

O projeto constitui-se de uma página de listagem de produtos que contem:

- Menu
- Listagem de produtos ( Busca as informações do proprio JSON do projeto principal no github ) 
- Paginação a cada 20 produtos
- Um "filtro" de ordenação:
    - Maior valor
    - Menor valor
    - Nome A-Z
    - Nome Z-A

A lógica que escolhi para esse projeto é muito próxima ao Observer Pattern. Nesse caso existe um componente State ( Subject ) que notifica todas suas alterações aos componentes que tem interesse nessas informações ( Observers ).

[Veja a demo aqui](https://eccomerce-prova-tecnica.herokuapp.com/)

---

## Setup do projeto

Instalar as dependencias do projeto

```bash
npm install
```

Criar um servidor local para desenvolvimento

```bash
npm run dev
```

Gerar o build

```bash
npm run build
```