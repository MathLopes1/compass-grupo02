![deliciasDaMaria](https://user-images.githubusercontent.com/63256085/150689737-60513bc0-8df8-46c1-b89d-69b0cbab21c9.png)



## Descrição do Projeto
Dona Maria abriu uma Lojinha para venda de doces caseiros. Para a melhor administração de sua empresinha, resolveu pedir ajuda para organizar seus funcionários e produtos. Nesse cenário, construimos uma API com duas entidades - funcionarios e produtos - para ajudar Maria em suas atividades.  

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/)
- [MongoDB](https://www.mongodb.com/)
- [Swagger](https://swagger.io/)

### Pré-requisitos
É importante a instalação das tecnologias utilizadas descritas acima. Além disso, é preciso um editor para trabalhar com o código. Utilizamos o [VSCode](https://code.visualstudio.com/)

#### Passos
Antes de testar as rotas, é importante seguir alguns passos:

```bash
# Clone este repositório
$ git clone https://github.com/MathLopes1/compass-grupo02.git

# Acesse a pasta do projeto no terminal/cmd
$ cd compass-grupo02

# Instale as dependências
$ npm install

# Instale as dev dependências
$ npm install --save-dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
:file_folder: Bibliotecas utizadas:
<table>
  <tr>
    <td>Mongoose</td>
    <td>Express</td>
    <td>Joi</td>
    <td>UUID</td>
    <td>Nodemon</td>    
  </tr>
</table>

### Features

- [x] Criar um endpoint para cadastrar um funcionário
- [x] Criar um endpoint para listar funcionários
- [x] Criar um endpoint para atualizar funcionários
- [x] Criar um endpoint para deletar funcionário
- [x] Criar um endpoint para cadastrar um produto
- [x] Criar um endpoint para listar produtos
- [ ] Validações
 
 ## Testar as Rotas

POST - Cadastrar funcionários - http://localhost:3000/api/v1/employee
 ```bash
{
    "name": "maria da silva",
    "cpf": "12312312312",
    "office": "gerente",
    "birthday": "21/04/2021"
}
 ```
GET - Listar funcionários - http://localhost:3000/api/v1/employee
```bash
{
"employees": [
                {
                    "employee_id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621",
                    "name": "maria da silva",
                    "cpf": "123.123.123-12",
                    "office": "gerente",
                    "birthday": "21/04/2021",
                    "situation": "active"
                }, {
                    "employee_id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43622",
                    "name": "joão da silva",
                    "cpf": "123.123.123-13",
                    "office": "gerente",
                    "birthday": "21/04/2021",
                    "situation": "deactivate"
                }
            ]
}


```
GET - Listar por query params - http://localhost:3000/api/v1/employee/?name=fulano
 ```bash
 {
    {
        "name": "silva",
        "office": "gerente"
    }
}
 ```
PUT - Atualizar funcionários - http://localhost:3000/api/v1/employee/:employee_id
```bash
{
    "name": "maria da roberta",
    "office": "funcionario",
    "situation": "deactivate"
}
```
DELETE - Deletar funcionários - http://localhost:3000/api/v1/employee/:employee_id

POST - Cadastrar um produto - http://localhost:3000/api/v1/product
```bash
{
    "name": "notebook dell",
    "category": "eletronico",
    "price": "12.32",
    "employee_id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621"
}
```
GET - Listar produtos - http://localhost:3000/api/v1/product
```bash
{
    "employee_id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621",
    "category": "eletronico",
    "name": "dell",
    "min_price": 10.5,
    "max_price":50
}
```
## Team :man_technologist::trophy:	
Todos listados tiverem participação ativa no desenvolvimento da API
<table>
    <tr>
        <td>Função</td>
        <td>Nome</td>
    </tr>
    <tr>
        <td>PO</td>
        <td>Felipe Silva</td>
    </tr>
    <tr>
        <td>Scrum Master/Dev</td>
        <td>Tuana Sampaio</td>
    </tr>
    <tr>
        <td>Deploy/Dev</td>
        <td>Mylena Amorim</td>
    </tr> 
    <tr>
        <td>QA/Dev</td>
        <td>Matheus Lopes</td>
    </tr>     
    <tr>
        <td>Code Review/Dev</td>
        <td>Edson Junior</td>
    </tr>     
    <tr>
        <td>Code Review/Dev</td>
        <td>Maria Carolinne</td>
    </tr>        
</table>

## Agradecimentos
Somos extremamente gratos aos nossos instrutores e líderes por todo suporte, conhecimento, incentivos e alertas.

* Felipe Silva
* Thais Nicodemus
* Diego Bueno
* Bruna Santos
* Giovanni Hoffmann
* Gabriel Missio 

