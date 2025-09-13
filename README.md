# IA Backend 4 - README.md

<p align="center">
  <a href="http://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">IA Backend 4 - NestJS + OpenAI</h1>

<p align="center">
  🚀 API NestJS com integração OpenAI para resumir textos usando GPT
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/nestjs" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/nestjs" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://github.com/lucianosoj97/ia-backend4" target="_blank"><img src="https://img.shields.io/github/stars/lucianosoj97/ia-backend4.svg?style=social" alt="GitHub stars"/></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

---

## Funcionalidades

- Conexão com a OpenAI via SDK oficial
- Endpoint `/resume/resumir` para resumir textos
- Interceptor para extrair resumo e tokens usados
- Swagger para documentação interativa
- Configuração via `ConfigService` para variáveis de ambiente

---

## Pré-requisitos

- Node.js >= 18
- npm ou yarn
- Conta na [OpenAI](https://platform.openai.com/) com API key

---

## Instalação

```bash
git clone https://github.com/lucianosoj97/ia-backend4.git
cd ia-backend4
npm install
```

### Configuração do `.env`

Crie um arquivo `.env` na raiz:

```
OPENAI_API_KEY=your_openai_api_key
```

---

## Rodando a aplicação

```bash
# desenvolvimento
npm start

# produção
npm start
```

O servidor ficará disponível em `http://localhost:3000`.

---

## Endpoint de resumo

- **POST** `/resume/resumir`
- Body exemplo:

```json
{
  "text": "Texto longo que você quer resumir..."
}
```

- Retorno esperado:

```json
{
  "summary": "Resumo gerado pelo GPT",
  "tokensUsed": 123
}
```

---

## Documentação Swagger

Acesse a documentação interativa em:

```
http://localhost:3000/api/openAI
```

-

## Suporte e Recursos

- Documentação NestJS: [https://docs.nestjs.com](https://docs.nestjs.com)
- OpenAI Docs: [https://platform.openai.com/docs](https://platform.openai.com/docs)
- Discord NestJS: [https://discord.gg/G7Qnnhy](https://discord.gg/G7Qnnhy)

---

## License

MIT License
