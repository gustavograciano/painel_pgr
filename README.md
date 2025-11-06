# Sistema PGR - Painel de Gestão

Sistema web para gestão e monitoramento do Programa de Gerenciamento de Riscos (PGR).

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite 7** - Build tool moderna e rápida para desenvolvimento
- **React Router DOM 7** - Gerenciamento de rotas
- **jsPDF** - Geração de relatórios em PDF

### Estilização
- **CSS3 puro** - Estilização customizada e responsiva
- **Flexbox/Grid** - Layout responsivo
- **Animations CSS** - Transições e animações suaves

### Gerenciamento de Estado
- **Context API** - Gerenciamento de autenticação
- **React Hooks** - useState, useContext para estado local

## 📋 Funcionalidades

- ✅ Tela de login com autenticação simulada
- ✅ Dashboard com status do PGR (Ativo, Em Andamento, Pendente)
- ✅ Sistema de indicadores visuais com código de cores
- ✅ Exportação de relatórios em PDF
- ✅ Design responsivo (desktop, tablet, mobile)
- ✅ Proteção de rotas privadas
- ✅ Interface moderna e intuitiva

## 🔐 Credenciais de Acesso

```
Usuário: admin
Senha: admin123
```

## 🛠️ Como Executar Localmente

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🌐 Deploy na Vercel

### Passo a passo:

1. **Criar conta na Vercel** (https://vercel.com) se ainda não tiver

2. **Instalar Vercel CLI** (opcional):
```bash
npm install -g vercel
```

3. **Deploy via CLI**:
```bash
cd painel-pgr
vercel
```

4. **Deploy via GitHub** (recomendado):
   - Criar repositório no GitHub
   - Fazer push do código
   - Conectar repositório na dashboard da Vercel
   - Deploy automático a cada push

5. **Deploy manual via dashboard**:
   - Acessar https://vercel.com/new
   - Importar o projeto
   - Configurar build settings (já estão corretas por padrão)
   - Deploy

### Configurações automáticas do Vite:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

## 📦 Estrutura do Projeto

```
painel-pgr/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   └── PrivateRoute.jsx # Proteção de rotas
│   ├── context/            # Context API
│   │   └── AuthContext.jsx # Contexto de autenticação
│   ├── pages/              # Páginas da aplicação
│   │   ├── Login.jsx       # Tela de login
│   │   ├── Login.css
│   │   ├── Dashboard.jsx   # Dashboard principal
│   │   └── Dashboard.css
│   ├── App.jsx             # Componente raiz com rotas
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globais
├── public/                 # Arquivos estáticos
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Plano de Escalabilidade

### Curto Prazo (1-3 meses)

1. **Backend Real**
   - Implementar API REST com ASP.NET Core
   - Banco de dados PostgreSQL ou SQL Server
   - Entity Framework Core como ORM
   - Autenticação JWT real
   - Sistema de permissões (admin, usuário, auditor)

2. **Funcionalidades Adicionais**
   - CRUD completo de riscos identificados
   - Upload de documentos e imagens
   - Sistema de notificações
   - Histórico de alterações (audit log)
   - Filtros e busca avançada

3. **Melhorias de UX**
   - Dark mode
   - Internacionalização (i18n)
   - Tutorial interativo (onboarding)
   - PWA (Progressive Web App)

### Médio Prazo (3-6 meses)

1. **Arquitetura**
   - Migrar para TypeScript (maior segurança de tipos)
   - Implementar testes (Jest + React Testing Library no frontend, xUnit no backend)
   - CI/CD completo (GitHub Actions)
   - Monitoramento com Application Insights + Sentry

2. **Performance**
   - Code splitting e lazy loading
   - Cache de dados com React Query ou SWR
   - Otimização de imagens (WebP, lazy loading)
   - Service Workers para modo offline

3. **Segurança**
   - Implementar HTTPS obrigatório
   - Rate limiting na API
   - Sanitização de inputs
   - Auditoria de segurança

### Longo Prazo (6-12 meses)

1. **Escala de Infraestrutura**
   - Microserviços (separar módulos por domínio)
   - Load balancing
   - CDN para assets estáticos
   - Database replication

2. **Features Empresariais**
   - Multi-tenancy (múltiplas empresas)
   - Relatórios avançados com BI
   - Integração com sistemas externos (ERP, etc)
   - API pública para integrações

3. **Mobile**
   - Aplicativo React Native
   - Notificações push
   - Modo offline first

4. **IA/ML**
   - Sugestões automáticas de medidas de controle
   - Análise preditiva de riscos
   - OCR para digitalização de documentos

## 🛠️ Tecnologias Sugeridas para Escala

### Frontend
- **TypeScript** - Tipagem estática
- **Zustand ou Redux Toolkit** - Estado global complexo
- **React Query** - Gerenciamento de cache e requisições
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Componentes acessíveis

### Backend
- **ASP.NET Core** - Framework C# enterprise
- **Entity Framework Core** - ORM maduro e robusto
- **PostgreSQL** ou **SQL Server** - Banco de dados relacional
- **Redis** - Cache e filas
- **SignalR** - Comunicação em tempo real
- **Minimal APIs** ou **Controllers** - Arquitetura REST

### DevOps
- **Docker** - Containerização
- **Kubernetes** - Orquestração (para grande escala)
- **GitHub Actions** - CI/CD
- **Vercel/Railway/Render** - Hosting serverless

### Monitoramento
- **Application Insights** - Monitoramento .NET nativo
- **Sentry** - Error tracking
- **LogRocket** - Session replay (frontend)
- **Google Analytics** - Métricas de uso

## 📝 Notas

Este é um protótipo funcional para demonstração. Em produção, seria necessário:
- Implementar backend seguro
- Validação robusta de dados
- Testes automatizados
- Logs e monitoramento
- Documentação completa da API
- Política de privacidade e termos de uso

## 📄 Licença

Este é um projeto de demonstração sem licença específica.

---

Desenvolvido para demonstração de prototipagem rápida com React + Vite + Vercel
