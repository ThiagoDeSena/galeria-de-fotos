# 📸 Galeria de Fotos

Uma aplicação de galeria de fotos moderna desenvolvida com **React 19**, **Vite** e **TypeScript**. O projeto utiliza a API pública do [JSONPlaceholder](https://jsonplaceholder.typicode.com) para buscar e filtrar imagens, aplicando conceitos avançados de **Clean Architecture** para garantir um código escalável e de fácil manutenção.
<p align="center">
<img width="1919" height="1023" alt="Captura de tela 2026-01-09 114109" src="https://github.com/user-attachments/assets/ac005f7e-377a-4368-82d3-927868705b2b" />
</p>

## 🚀 Tecnologias Utilizadas

* **React 19 & Vite**: Fast refresh e build otimizado.
* **TypeScript**: Tipagem estática para maior segurança no desenvolvimento.
* **Material UI (MUI) v7**: Componentes de interface robustos e ícones.
* **Tailwind CSS v4**: Estilização utilitária e responsiva.
* **Axios**: Cliente HTTP para consumo de API com instâncias configuradas.

## 🏗️ Arquitetura do Projeto

O projeto segue o padrão **Clean Architecture**, dividido nas seguintes camadas:

* **`domain`**: Contém as entidades de negócio (`PhotoTO`) e os casos de uso (`PhotoUseCase`), sendo totalmente independente de frameworks.
* **`infrastructure`**: Implementa a comunicação com serviços externos via Axios (`photoApi`).
* **`application`**: Gerencia o estado e a orquestração através de Hooks customizados (`usePhotos`).
* **`presentation`**: Componentes visuais organizados e reutilizáveis (Header, SearchBar, PhotoGrid, etc.).

## 📦 Como rodar o projeto localmente

Siga os passos abaixo para configurar o ambiente:

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/galeria-de-fotos.git
cd galeria-de-fotos

```


2. **Instale as dependências:**
```bash
npm install

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```


4. **Acesse no navegador:**
Abra `http://localhost:5173` para visualizar a aplicação.

## 🛠️ Scripts Disponíveis

* `npm run dev`: Inicia o servidor local.
* `npm run build`: Gera a versão de produção na pasta `dist`.
* `npm run lint`: Executa o ESLint para verificar erros de padronização no código.

---

## Desenvolvedor 

<div align="center">
  <img src="https://github.com/user-attachments/assets/55b10cab-bbaf-4dd1-bcbc-2d9752e37cf5" width="100px;" style="border-radius: 50%;" alt="Foto do Desenvolvedor"/>
  <br />
  <sub><b>Thiago De Sena</b></sub>
  <br />
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thiago-de-sena-developer/)
</div>


---
