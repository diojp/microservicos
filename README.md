
# Microserviços

Projeto Final da Disciplina Microsserviços e API - Unipê

O projeto é sobre um Blog executanto 5 Microserviços

- Service Registry
- Gateway
- Users-ms (Usuários)
- Posts-ms (Publicações)
- Auth-ms (Login)
## Instalação

Instale os microserviços com npm


Altere os dados para seu banco de dados as variáveis do MYSQL no arquivo .env nos projetos users-ms e posts-ms.

```bash
  cd nomeDoMicroservico
  npm i
  npm run dev
```
Obs. Tem que entrar em cada um dos microserviços e executar o comando acima.
## Funcionalidades

- O Service Registry (Serve para registrar os microserviços)
- Gateway (Mascara os endpoints)
- Auth-ms (microserviço para autenticação e obtenção do token com validade de 1h)
- Users-ms e Posts-ms servem para cadastrar e pesquisar os Usuários e os Posts cadastrados, como também é possível cria-los;


## Autores

- [Diego Magno](https://github.com/diojp)
- [Robson Vieira](https://github.com/robsonvieirajr)

