# Projeto Node.js para Gestão de ativos

## Instruções de Configuração

Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

### Passo 1: Clone o Repositório

```bash
git clone <URL-DO-REPOSITÓRIO>
cd <NOME-DO-REPOSITÓRIO>
```
### Passo 2: Crie uma Conta no MongoDB Atlas
Caso não tenha uma conta, crie uma no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) e configure um novo Cluster.

### Passo 3: Crie um Arquivo .env
Na raiz do projeto, crie um arquivo chamado `.env`.

### Passo 4: Configure as Variáveis de Ambiente
Dentro do arquivo `.env`, coloque as seguintes variáveis de ambiente:

```bash
DB_USER=<SEU-USER>
DB_PASS=<SUA-SENHA-DO-CLUSTER>
```

### Passo 5: Instale as Dependências
No terminal, execute o seguinte comando:

```bash
npm install
```

### Passo 6 (FINAL): Inicie o Projeto
Para iniciar o projeto, rode o seguinte comando no terminal:

```bash
npm run start
```
