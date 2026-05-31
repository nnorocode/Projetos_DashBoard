const supabaseUrl = 'https://dexpbuleevcozsadeier.supabase.co';
const supabaseKey = 'sb_publishable_qNIE2d9F2CWZnjXHtR_ysQ_dzsZQRXy';
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
const ACTIVITIES_TABLE = 'atividades';
const PROJECTS_TABLE = 'projetos';

const phases = [
  "Ideia",
  "Planejamento",
  "Desenvolvimento",
  "Testes",
  "Lojas",
  "Revisão",
  "Publicação",
];

const seedActivities = [
  {
    id: 1,
    title: "Definir o problema e o público do app",
    description: "Escrever em linguagem simples o que o app resolve, para quem e qual é a função principal.",
    phase: "Ideia",
    platform: ["Geral"],
    status: "Em andamento",
    due: "2026-05-16",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 2,
    title: "Definir quem vai usar o app",
    description: "Descrever o perfil do usuário: idade, rotina, dificuldade principal e motivo para abrir o app.",
    phase: "Ideia",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-17",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 3,
    title: "Escrever a proposta de valor",
    description: "Criar uma frase simples explicando o benefício central do app para o usuário.",
    phase: "Ideia",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-18",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 4,
    title: "Pesquisar apps concorrentes",
    description: "Listar apps parecidos, pontos fortes, pontos fracos, preços e avaliações dos usuários.",
    phase: "Ideia",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-19",
    priority: "Média",
    blocker: false,
  },
  {
    id: 5,
    title: "Definir modelo de negócio",
    description: "Escolher se o app será gratuito, pago, assinatura, compra interna, anúncio ou venda externa permitida.",
    phase: "Ideia",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-20",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 6,
    title: "Escolher nome provisrio do app",
    description: "Criar opções de nome, verificar clareza, evitar nomes copiados e separar uma opo principal.",
    phase: "Ideia",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-21",
    priority: "Média",
    blocker: false,
  },
  {
    id: 7,
    title: "Definir indicadores de sucesso",
    description: "Escolher como medir se a versão 1.0 deu certo: cadastros, pedidos, uso semanal, receita ou retenção.",
    phase: "Ideia",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-22",
    priority: "Média",
    blocker: false,
  },
  {
    id: 8,
    title: "Separar funcionalidades da versão 1.0",
    description: "Classificar o que é obrigatório, o que fica para depois e o que não deve entrar agora.",
    phase: "Planejamento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-20",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 9,
    title: "Montar backlog completo",
    description: "Transformar ideias em lista de tarefas com nome, descrição, prioridade e dependências.",
    phase: "Planejamento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-24",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 10,
    title: "Desenhar fluxo de telas",
    description: "Criar o caminho do usuário: entrada, login, tela principal, criação, detalhes e suporte.",
    phase: "Planejamento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-24",
    priority: "Média",
    blocker: false,
  },
  {
    id: 11,
    title: "Criar wireframes das telas",
    description: "Desenhar telas simples antes do visual final para validar o caminho do usuário.",
    phase: "Planejamento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-26",
    priority: "Média",
    blocker: false,
  },
  {
    id: 12,
    title: "Definir campos e dados do app",
    description: "Listar todos os dados usados pelo app, como nome, e-mail, fotos, localização, pedidos e pagamentos.",
    phase: "Planejamento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-27",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 13,
    title: "Mapear permissões necessárias",
    description: "Definir se o app precisa de câmera, localização, notificações, fotos, contatos ou microfone.",
    phase: "Planejamento",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-05-28",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 14,
    title: "Escolher tecnologia do app",
    description: "Decidir entre Flutter, React Native, nativo ou ferramenta no-code conforme oramento e equipe.",
    phase: "Planejamento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-26",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 15,
    title: "Planejar arquitetura técnica",
    description: "Definir app, backend, banco de dados, autenticação, APIs externas, hospedagem e serviços de envio.",
    phase: "Planejamento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-30",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 16,
    title: "Definir cronograma e responsáveis",
    description: "Distribuir tarefas por data, responsvel e prioridade para controlar o avanço do projeto.",
    phase: "Planejamento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-05-31",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 17,
    title: "Criar e-mail de suporte",
    description: "Criar um e-mail que será usado nas lojas, política de privacidade e atendimento ao usuário.",
    phase: "Planejamento",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-01",
    priority: "Média",
    blocker: false,
  },
  {
    id: 18,
    title: "Criar conta Apple Developer",
    description: "Cadastrar pessoa física ou empresa, ativar autenticação de dois fatores e pagar a assinatura.",
    phase: "Lojas",
    platform: ["Apple"],
    status: "Não iniciado",
    due: "2026-05-30",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 19,
    title: "Criar conta Google Play Console",
    description: "Abrir conta de desenvolvedor, pagar taxa única, verificar identidade e preencher perfil.",
    phase: "Lojas",
    platform: ["Google"],
    status: "Não iniciado",
    due: "2026-05-30",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 20,
    title: "Configurar dados fiscais e bancrios",
    description: "Preencher dados necessários para apps pagos, assinaturas, compras internas ou recebimento de valores.",
    phase: "Lojas",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-04",
    priority: "Média",
    blocker: false,
  },
  {
    id: 21,
    title: "Criar política de privacidade",
    description: "Listar dados coletados, finalidade, compartilhamento, exclusão de conta e e-mail de suporte.",
    phase: "Lojas",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-02",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 22,
    title: "Publicar página da política de privacidade",
    description: "Hospedar a política em uma URL pública para informar nas lojas e dentro do app.",
    phase: "Lojas",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-06",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 23,
    title: "Criar identidade visual base",
    description: "Definir cores, fontes, componentes, ícones e padrão visual que serão usados nas telas.",
    phase: "Desenvolvimento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-06-08",
    priority: "Média",
    blocker: false,
  },
  {
    id: 24,
    title: "Configurar ambiente de desenvolvimento",
    description: "Instalar ferramentas, SDKs, editor, emuladores, Xcode ou Android Studio conforme a tecnologia escolhida.",
    phase: "Desenvolvimento",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-09",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 25,
    title: "Criar repositrio do projeto",
    description: "Abrir controle de versão, organizar pastas, definir padr?o de branch e proteger o código.",
    phase: "Desenvolvimento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-06-10",
    priority: "Média",
    blocker: false,
  },
  {
    id: 26,
    title: "Criar projeto inicial do app",
    description: "Gerar a estrutura base do aplicativo e confirmar que abre no emulador ou celular real.",
    phase: "Desenvolvimento",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-11",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 27,
    title: "Implementar navegação principal",
    description: "Criar rotas, abas, menus ou pilha de telas para o usuário circular pelo app.",
    phase: "Desenvolvimento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-06-12",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 28,
    title: "Implementar cadastro e login",
    description: "Criar entrada do usuário, recuperação de senha, validações e mensagens de erro claras.",
    phase: "Desenvolvimento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-06-14",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 29,
    title: "Criar banco de dados ou armazenamento",
    description: "Definir tabelas, coleções, regras de acesso e estrutura de dados usada pelo app.",
    phase: "Desenvolvimento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-06-16",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 30,
    title: "Desenvolver fluxo principal",
    description: "Construir login, tela inicial e a principal ação que entrega valor ao usuário.",
    phase: "Desenvolvimento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-06-16",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 31,
    title: "Implementar criação e edição de registros",
    description: "Permitir que o usuário crie, veja, altere e exclua os dados principais do app.",
    phase: "Desenvolvimento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-06-20",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 32,
    title: "Criar estados vazios e mensagens de erro",
    description: "Mostrar orientações quando não há dados, quando a internet falha ou quando uma ação não funciona.",
    phase: "Desenvolvimento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-06-21",
    priority: "Média",
    blocker: false,
  },
  {
    id: 33,
    title: "Implementar permissões no momento correto",
    description: "Pedir câmera, localização, fotos ou notificações apenas quando o usuário precisar da função.",
    phase: "Desenvolvimento",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-22",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 34,
    title: "Adicionar analytics e crash reports",
    description: "Configurar eventos de uso, erros e travamentos para acompanhar qualidade após publicação.",
    phase: "Desenvolvimento",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-23",
    priority: "Média",
    blocker: false,
  },
  {
    id: 35,
    title: "Criar exclusão de conta e dados",
    description: "Permitir que o usuário solicite ou execute exclusão da conta quando o app tiver cadastro.",
    phase: "Desenvolvimento",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-24",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 36,
    title: "Revisar acessibilidade bsica",
    description: "Conferir contraste, tamanho de texto, toque em botões, leitores de tela e navegação simples.",
    phase: "Desenvolvimento",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-25",
    priority: "Média",
    blocker: false,
  },
  {
    id: 37,
    title: "Revisar segurança bsica",
    description: "Evitar senhas expostas, chaves no app, regras abertas de banco de dados e dados sensíveis sem proteção.",
    phase: "Desenvolvimento",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-06-26",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 38,
    title: "Preparar identidade visual da loja",
    description: "Criar cone, descrição curta, descrição completa, screenshots e e-mail de suporte.",
    phase: "Lojas",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-20",
    priority: "Média",
    blocker: false,
  },
  {
    id: 39,
    title: "Criar cone final do app",
    description: "Gerar ícone nos tamanhos exigidos por Android e iOS, sem transparência indevida no iOS.",
    phase: "Lojas",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-28",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 40,
    title: "Criar screenshots das lojas",
    description: "Capturar telas reais do app em tamanhos aceitos e mostrar as funções principais.",
    phase: "Lojas",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-29",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 41,
    title: "Escrever descrição curta e completa",
    description: "Explicar o app com clareza, sem promessas falsas, termos proibidos ou funções que não existem.",
    phase: "Lojas",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-30",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 42,
    title: "Definir categoria e classificação indicativa",
    description: "Escolher categoria correta e responder questionrios de idade e contedo sensvel.",
    phase: "Lojas",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-01",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 43,
    title: "Preencher App Privacy da Apple",
    description: "Declarar dados coletados, rastreamento, finalidade e vnculo com a identidade do usuário.",
    phase: "Lojas",
    platform: ["Apple"],
    status: "Não iniciado",
    due: "2026-07-02",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 44,
    title: "Preencher Data Safety do Google",
    description: "Declarar coleta, compartilhamento, segurança, exclusão de dados e prticas de privacidade.",
    phase: "Lojas",
    platform: ["Google"],
    status: "Não iniciado",
    due: "2026-07-02",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 45,
    title: "Configurar Bundle ID e Package Name",
    description: "Definir identificadores únicos do app para iOS e Android antes de gerar builds finais.",
    phase: "Lojas",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-03",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 46,
    title: "Configurar assinatura Android",
    description: "Gerar chave, guardar senha com segurança e configurar Play App Signing quando aplicvel.",
    phase: "Lojas",
    platform: ["Google"],
    status: "Não iniciado",
    due: "2026-07-04",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 47,
    title: "Configurar certificados iOS",
    description: "Preparar equipe Apple, assinatura automtica, provisioning profile e capacidades necessárias.",
    phase: "Lojas",
    platform: ["Apple"],
    status: "Não iniciado",
    due: "2026-07-04",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 48,
    title: "Criar plano de testes",
    description: "Listar cenrios que precisam ser testados antes de enviar para Apple e Google.",
    phase: "Testes",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-07-05",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 49,
    title: "Testar em celulares reais",
    description: "Conferir abertura, login, botões, telas pequenas, internet fraca, permissões e links.",
    phase: "Testes",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-06-24",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 50,
    title: "Testar fluxo sem internet ou com erro",
    description: "Verificar se o app avisa o usuário quando a conexão falha ou uma API não responde.",
    phase: "Testes",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-07",
    priority: "Média",
    blocker: false,
  },
  {
    id: 51,
    title: "Testar permissões e privacidade",
    description: "Confirmar que permissões so necessárias, explicadas e batem com as declarações das lojas.",
    phase: "Testes",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-08",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 52,
    title: "Criar conta de teste para revisão",
    description: "Preparar usuário e senha para avaliadores acessarem todas as áreas do app sem bloqueio.",
    phase: "Testes",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-09",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 53,
    title: "Testar pagamentos ou assinaturas",
    description: "Validar compras internas, assinaturas, cancelamento e restauração quando o app vender algo.",
    phase: "Testes",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-10",
    priority: "Média",
    blocker: false,
  },
  {
    id: 54,
    title: "Corrigir bugs encontrados nos testes",
    description: "Priorizar travamentos, login, cadastro, dados perdidos, telas quebradas e erros de permisso.",
    phase: "Testes",
    platform: ["Geral"],
    status: "Não iniciado",
    due: "2026-07-11",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 55,
    title: "Gerar Android App Bundle",
    description: "Assinar o app e gerar o arquivo .aab para envio ao Google Play Console.",
    phase: "Lojas",
    platform: ["Google"],
    status: "Não iniciado",
    due: "2026-06-27",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 56,
    title: "Enviar build iOS pelo Xcode",
    description: "Configurar assinatura, Bundle Identifier, archive e upload para App Store Connect.",
    phase: "Lojas",
    platform: ["Apple"],
    status: "Não iniciado",
    due: "2026-06-27",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 57,
    title: "Criar app no Google Play Console",
    description: "Cadastrar nome, idioma, tipo de app, gratuito ou pago e declarações iniciais.",
    phase: "Revisão",
    platform: ["Google"],
    status: "Não iniciado",
    due: "2026-07-13",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 58,
    title: "Preencher ficha do Google Play",
    description: "Completar store listing, classificação indicativa, Data Safety, pases e release.",
    phase: "Revisão",
    platform: ["Google"],
    status: "Não iniciado",
    due: "2026-07-02",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 59,
    title: "Criar app no App Store Connect",
    description: "Cadastrar nome, idioma principal, Bundle ID, SKU e plataforma iOS.",
    phase: "Revisão",
    platform: ["Apple"],
    status: "Não iniciado",
    due: "2026-07-14",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 60,
    title: "Preencher App Store Connect",
    description: "Adicionar screenshots, descrição, privacidade do app, categoria, build e dados de revisão.",
    phase: "Revisão",
    platform: ["Apple"],
    status: "Não iniciado",
    due: "2026-07-02",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 61,
    title: "Enviar para TestFlight",
    description: "Distribuir build iOS para testadores internos ou externos antes da revisão final.",
    phase: "Testes",
    platform: ["Apple"],
    status: "Não iniciado",
    due: "2026-07-15",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 62,
    title: "Executar teste interno ou fechado no Google",
    description: "Distribuir build Android para testadores; contas pessoais novas podem exigir 12 testadores por 14 dias.",
    phase: "Testes",
    platform: ["Google"],
    status: "Não iniciado",
    due: "2026-07-10",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 63,
    title: "Revisar checklist final antes do envio",
    description: "Conferir app abrindo, links, suporte, privacidade, conta de teste, screenshots e builds corretos.",
    phase: "Revisão",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-14",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 64,
    title: "Enviar para revisão do Google Play",
    description: "Enviar release para anlise do Google com notas da versão e todos os formulários completos.",
    phase: "Revisão",
    platform: ["Google"],
    status: "Não iniciado",
    due: "2026-07-16",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 65,
    title: "Enviar para revisão da Apple",
    description: "Selecionar build, adicionar informações de revisão e submeter para App Review.",
    phase: "Revisão",
    platform: ["Apple"],
    status: "Não iniciado",
    due: "2026-07-16",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 66,
    title: "Corrigir rejeies ou pendências",
    description: "Ler mensagens das lojas, corrigir app ou ficha e reenviar com resposta objetiva.",
    phase: "Revisão",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-18",
    priority: "Alta",
    blocker: false,
  },
  {
    id: 67,
    title: "Publicar versão 1.0",
    description: "Liberar produção, monitorar erros, avaliações, instalações e primeiras reclamaes.",
    phase: "Publicação",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-22",
    priority: "Alta",
    blocker: true,
  },
  {
    id: 68,
    title: "Acompanhar mtricas pós-publicação",
    description: "Monitorar instalações, avaliações, desinstalações, travamentos, receita e comentários dos usuários.",
    phase: "Publicação",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-24",
    priority: "Alta",
    blocker: false,
  },
  {
    id: 69,
    title: "Responder avaliações e suporte",
    description: "Acompanhar reclamaes, responder usuários com educação e registrar melhorias recorrentes.",
    phase: "Publicação",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-26",
    priority: "Média",
    blocker: false,
  },
  {
    id: 70,
    title: "Planejar atualização 1.0.1",
    description: "Selecionar correes rápidas, pequenos ajustes e melhorias para a primeira atualização após lançamento.",
    phase: "Publicação",
    platform: ["Apple", "Google"],
    status: "Não iniciado",
    due: "2026-07-29",
    priority: "Média",
    blocker: false,
  },
];

const statusOptions = ["Não iniciado", "Em andamento", "Concluído", "Não se aplica"];
const storageKey = "app-launch-dashboard-activities-v6";
const projectStorageKey = "app-launch-dashboard-projects-v2";
const projectActivitiesStorageKey = "app-launch-dashboard-activities-by-project-v2";
const projectPhasesStorageKey = "app-launch-dashboard-project-phases-v1";
const legacyStorageKeys = [
  "app-launch-dashboard-activities",
  "app-launch-dashboard-activities-v2",
  "app-launch-dashboard-activities-v3",
  "app-launch-dashboard-activities-v4",
  "app-launch-dashboard-activities-v5",
];
const themeStorageKey = "app-launch-dashboard-theme";
const defaultProjectName = "App Publicação 1.0";
const defaultProjects = [defaultProjectName, "Novo app cliente", "Atualização 1.0.1"];
let activeStatus = "Todos";
let activePhase = "Todas";
let activeStore = "Todas";
let activeProject = defaultProjectName;
let projects = loadProjects();
let activities = loadActivities();
let projectActivities = loadProjectActivities();
let projectPhases = loadProjectPhases();
let projectIdsByName = {};
let projectsTableIsEmpty = false;
let projectPhasesColumnAvailable = null;
let phaseColumnWarningShown = false;
let editingActivityId = null;
let activeInfoId = null;
let editingProjectName = null;
let pendingDeleteProject = null;
let pendingDuplicateProject = null;
let draggedActivityId = null;
let draggedPhaseOriginal = null;
let isDraggingPhase = false;

const els = {
  table: document.querySelector("#activityTable"),
  projectTitle: document.querySelector("#projectTitle"),
  timeline: document.querySelector("#timeline"),
  phaseConfigButton: document.querySelector("#phaseConfigButton"),
  phaseFilter: document.querySelector("#phaseFilter"),
  projectSubnav: document.querySelector("#projectSubnav"),
  scheduleNavToggle: document.querySelector("#scheduleNavToggle"),
  addProjectButton: document.querySelector("#addProjectButton"),
  progressFill: document.querySelector("#progressFill"),
  progressValue: document.querySelector("#progressValue"),
  kpiTotal: document.querySelector("#kpiTotal"),
  kpiDone: document.querySelector("#kpiDone"),
  kpiLate: document.querySelector("#kpiLate"),
  kpiOnTime: document.querySelector("#kpiOnTime"),
  kpiTodo: document.querySelector("#kpiTodo"),
  kpiRisk: document.querySelector("#kpiRisk"),
  kpiTotalToday: document.querySelector("#kpiTotalToday"),
  kpiTotalWeek: document.querySelector("#kpiTotalWeek"),
  kpiDoneToday: document.querySelector("#kpiDoneToday"),
  kpiDoneWeek: document.querySelector("#kpiDoneWeek"),
  kpiLateToday: document.querySelector("#kpiLateToday"),
  kpiLateWeek: document.querySelector("#kpiLateWeek"),
  kpiOnTimeToday: document.querySelector("#kpiOnTimeToday"),
  kpiOnTimeWeek: document.querySelector("#kpiOnTimeWeek"),
  kpiTodoToday: document.querySelector("#kpiTodoToday"),
  kpiTodoWeek: document.querySelector("#kpiTodoWeek"),
  kpiRiskToday: document.querySelector("#kpiRiskToday"),
  kpiRiskWeek: document.querySelector("#kpiRiskWeek"),
  doneHint: document.querySelector("#doneHint"),
  nextPhaseLabel: document.querySelector("#nextPhaseLabel"),
  deadlineLabel: document.querySelector("#deadlineLabel"),
  nextActionTitle: document.querySelector("#nextActionTitle"),
  nextActionText: document.querySelector("#nextActionText"),
  startNextButton: document.querySelector("#startNextButton"),
  healthRing: document.querySelector("#healthRing"),
  healthLabel: document.querySelector("#healthLabel"),
  healthText: document.querySelector("#healthText"),
  riskList: document.querySelector("#riskList"),
  allProjectsTotal: document.querySelector("#allProjectsTotal"),
  allProjectsToday: document.querySelector("#allProjectsToday"),
  allProjectsDone: document.querySelector("#allProjectsDone"),
  allProjectsLate: document.querySelector("#allProjectsLate"),
  railProgressValue: document.querySelector("#railProgressValue"),
  progressDonut: document.querySelector("#progressDonut"),
  storeFilter: document.querySelector("#storeFilter"),
  insightLate: document.querySelector("#insightLate"),
  insightSoon: document.querySelector("#insightSoon"),
  insightDoneWeek: document.querySelector("#insightDoneWeek"),
  insightForecast: document.querySelector("#insightForecast"),
  resetButton: document.querySelector("#resetButton"),
  themeToggle: document.querySelector("#themeToggle"),
  addActivityButton: document.querySelector("#addActivityButton"),
  activityModal: document.querySelector("#activityModal"),
  activityForm: document.querySelector("#activityForm"),
  projectModal: document.querySelector("#projectModal"),
  projectForm: document.querySelector("#projectForm"),
  projectNameInput: document.querySelector("#projectNameInput"),
  projectModalTitle: document.querySelector("#projectModalTitle"),
  closeProjectModalButton: document.querySelector("#closeProjectModalButton"),
  cancelProjectModalButton: document.querySelector("#cancelProjectModalButton"),
  deleteProjectModal: document.querySelector("#deleteProjectModal"),
  deleteProjectText: document.querySelector("#deleteProjectText"),
  closeDeleteProjectButton: document.querySelector("#closeDeleteProjectButton"),
  cancelDeleteProjectButton: document.querySelector("#cancelDeleteProjectButton"),
  confirmDeleteProjectButton: document.querySelector("#confirmDeleteProjectButton"),
  duplicateProjectModal: document.querySelector("#duplicateProjectModal"),
  duplicateProjectText: document.querySelector("#duplicateProjectText"),
  duplicateProjectTarget: document.querySelector("#duplicateProjectTarget"),
  closeDuplicateProjectButton: document.querySelector("#closeDuplicateProjectButton"),
  cancelDuplicateProjectButton: document.querySelector("#cancelDuplicateProjectButton"),
  confirmDuplicateProjectButton: document.querySelector("#confirmDuplicateProjectButton"),
  phaseModal: document.querySelector("#phaseModal"),
  phaseForm: document.querySelector("#phaseForm"),
  phaseOptions: document.querySelector("#phaseOptions"),
  newPhaseName: document.querySelector("#newPhaseName"),
  addPhaseButton: document.querySelector("#addPhaseButton"),
  closePhaseModalButton: document.querySelector("#closePhaseModalButton"),
  cancelPhaseModalButton: document.querySelector("#cancelPhaseModalButton"),
  modalTitle: document.querySelector("#modalTitle"),
  closeModalButton: document.querySelector("#closeModalButton"),
  cancelModalButton: document.querySelector("#cancelModalButton"),
  newPhase: document.querySelector("#newPhase"),
  newDue: document.querySelector("#newDue"),
  newResponsible: document.querySelector("#newResponsible"),
  toast: document.querySelector("#toast"),
};

function loadActivities() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) {
    legacyStorageKeys.forEach((key) => localStorage.removeItem(key));
    localStorage.setItem(storageKey, JSON.stringify(seedActivities));
    return seedActivities;
  }
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || parsed.length < seedActivities.length) {
      localStorage.removeItem(storageKey);
      legacyStorageKeys.forEach((key) => localStorage.removeItem(key));
      localStorage.setItem(storageKey, JSON.stringify(seedActivities));
      return seedActivities;
    }
    return parsed;
  } catch {
    localStorage.setItem(storageKey, JSON.stringify(seedActivities));
    return seedActivities;
  }
}

function activityToCloudRow(act, projectName, index) {
  return {
    id: Number(act.id),
    title: act.title || "",
    due: act.due || "",
    project: projectName || act.project || activeProject,
    description: act.description || "",
    platform: Array.isArray(act.platform) ? act.platform : ["Geral"],
    status: act.status || "Não iniciado",
    priority: act.priority || "Média",
    blocker: Boolean(act.blocker),
    responsible: act.responsible || "",
    phase: act.phase || "Ideia",
    obs: act.obs || "",
    position: index
  };
}

async function saveProjectActivitiesToCloud(projectName, items) {
  const atividadesParaNuvem = items.map((act, index) => activityToCloudRow(act, projectName, index));

  if (!atividadesParaNuvem.length) return true;

  const { error } = await supabaseClient
    .from(ACTIVITIES_TABLE)
    .upsert(atividadesParaNuvem);

  if (error) {
    console.error("❌ SUPABASE RECUSOU SALVAR. Motivo:", error.message);
    if (error.details) console.error("Detalhes:", error.details);
    if (error.hint) console.error("Dica:", error.hint);
    return false;
  }

  return true;
}

async function saveActivities() {
  projectActivities[activeProject] = activities;
  localStorage.setItem(storageKey, JSON.stringify(projectActivities[defaultProjectName] || seedActivities));
  saveProjectState();

  await saveProjectActivitiesToCloud(activeProject, activities);
}
function rememberProjectRows(rows = []) {
  projectIdsByName = {};
  rows.forEach((row) => {
    const name = cleanText(row.nome).trim();
    if (name && row.id != null) projectIdsByName[name] = row.id;
  });
}

function normalizeActivityFromCloud(row, fallbackPosition = 0) {
  let platform = row.platform;
  if (typeof platform === "string") {
    try {
      platform = JSON.parse(platform);
    } catch {
      platform = [platform];
    }
  }

  return {
    id: Number(row.id),
    title: cleanText(row.title),
    due: cleanText(row.due),
    project: cleanText(row.project || defaultProjectName).trim() || defaultProjectName,
    description: cleanText(row.description),
    platform: Array.isArray(platform) && platform.length ? platform : ["Geral"],
    status: cleanText(row.status || "Não iniciado"),
    priority: cleanText(row.priority || "Média"),
    blocker: Boolean(row.blocker),
    responsible: cleanText(row.responsible),
    phase: cleanText(row.phase || "Ideia"),
    obs: cleanText(row.obs),
    position: Number.isFinite(Number(row.position)) ? Number(row.position) : fallbackPosition,
  };
}

function ensureProjectMemory(projectName) {
  if (!projectName) return;
  if (!projects.includes(projectName)) projects = [...projects, projectName];
  if (!Array.isArray(projectActivities[projectName])) projectActivities[projectName] = [];
  if (!Array.isArray(projectPhases[projectName])) projectPhases[projectName] = phases.slice();
}

function normalizePhaseList(value) {
  if (Array.isArray(value)) {
    return value.map((phase) => cleanText(phase).trim()).filter(Boolean);
  }
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return normalizePhaseList(parsed);
    } catch {}
  }
  return [];
}

async function selectProjectsFromCloud() {
  const columns = projectPhasesColumnAvailable === false ? "id,nome,created_at" : "id,nome,created_at,fases";
  const { data, error } = await supabaseClient
    .from(PROJECTS_TABLE)
    .select(columns)
    .order("created_at", { ascending: true });

  if (!error) {
    if (columns.includes("fases")) projectPhasesColumnAvailable = true;
    return { data, error: null };
  }

  if (columns.includes("fases") && /fases|schema cache|column/i.test(error.message || "")) {
    projectPhasesColumnAvailable = false;
    return supabaseClient
      .from(PROJECTS_TABLE)
      .select("id,nome,created_at")
      .order("created_at", { ascending: true });
  }

  return { data, error };
}

async function saveProjectPhasesToCloud(projectName, phaseList) {
  const projectId = projectIdsByName[projectName];
  let updateProject = supabaseClient.from(PROJECTS_TABLE).update({ fases: phaseList });
  updateProject = projectId != null ? updateProject.eq("id", projectId) : updateProject.eq("nome", projectName);

  const { error } = await updateProject;
  if (!error) {
    projectPhasesColumnAvailable = true;
    return true;
  }

  if (/fases|schema cache|column/i.test(error.message || "")) {
    projectPhasesColumnAvailable = false;
    if (!phaseColumnWarningShown) {
      phaseColumnWarningShown = true;
      showToast("Fases salvas localmente. Falta a coluna fases no Supabase.");
    }
    console.warn("Adicione a coluna public.projetos.fases para salvar fases no banco:", error.message);
    return false;
  }

  console.error("Erro ao salvar fases no Supabase:", error.message);
  showToast("Erro ao salvar fases na nuvem.");
  return false;
}

async function persistExistingProjectsToCloud() {
  const rows = projects.map((nome) => ({ nome })).filter((row) => row.nome);
  if (!rows.length) return;

  const { data, error } = await supabaseClient
    .from(PROJECTS_TABLE)
    .insert(rows)
    .select("id,nome");

  if (error) {
    console.error("Erro ao popular a tabela Projetos:", error.message);
    return;
  }

  rememberProjectRows(data || []);
}

async function syncProjectsFromCloud() {
  const { data, error } = await selectProjectsFromCloud();

  if (error) {
    console.error("Erro ao buscar projetos no Supabase:", error.message);
    return;
  }

  if (data && data.length > 0) {
    projectsTableIsEmpty = false;
    rememberProjectRows(data);
    const cloudProjects = data
      .map((row) => cleanText(row.nome).trim())
      .filter(Boolean);

    projects = [...new Set(cloudProjects)];
    projects.forEach(ensureProjectMemory);

    projectActivities = Object.fromEntries(projects.map((project) => [project, projectActivities[project] || []]));
    projectPhases = Object.fromEntries(
      projects.map((project) => {
        const row = data.find((item) => cleanText(item.nome).trim() === project);
        const cloudPhases = normalizePhaseList(row?.fases);
        return [project, cloudPhases.length ? cloudPhases : projectPhases[project] || phases.slice()];
      })
    );

    if (!projects.includes(activeProject)) activeProject = projects[0] || defaultProjectName;
    activities = projectActivities[activeProject] || [];
    saveProjectState();
    render();
    return;
  }

  projectsTableIsEmpty = true;
  projectIdsByName = {};
}

async function createProjectInCloud(projectName) {
  const { data: existing, error: findError } = await supabaseClient
    .from(PROJECTS_TABLE)
    .select("id,nome")
    .eq("nome", projectName)
    .limit(1);

  if (findError) {
    console.error("Erro ao verificar projeto no Supabase:", findError.message);
    showToast("Erro ao verificar projeto na nuvem.");
    return false;
  }

  if (existing && existing.length > 0) {
    projectIdsByName[projectName] = existing[0].id;
    return true;
  }

  const { data, error } = await supabaseClient
    .from(PROJECTS_TABLE)
    .insert({ nome: projectName })
    .select("id,nome")
    .single();

  if (error) {
    console.error("Erro ao criar projeto no Supabase:", error.message);
    showToast("Erro ao criar projeto na nuvem.");
    return false;
  }

  if (data?.id != null) projectIdsByName[projectName] = data.id;
  return true;
}

async function renameProjectInCloud(oldName, newName) {
  if (oldName === newName) return true;

  const projectId = projectIdsByName[oldName];
  let updateProject = supabaseClient.from(PROJECTS_TABLE).update({ nome: newName });
  updateProject = projectId != null ? updateProject.eq("id", projectId) : updateProject.eq("nome", oldName);

  const { data, error } = await updateProject.select("id,nome");
  if (error) {
    console.error("Erro ao renomear projeto no Supabase:", error.message);
    showToast("Erro ao renomear projeto na nuvem.");
    return false;
  }

  if (!data || data.length === 0) {
    const created = await createProjectInCloud(newName);
    if (!created) return false;
  } else {
    projectIdsByName[newName] = data[0].id;
  }
  delete projectIdsByName[oldName];

  const { error: activityError } = await supabaseClient
    .from(ACTIVITIES_TABLE)
    .update({ project: newName })
    .eq("project", oldName);

  if (activityError) {
    console.error("Erro ao mover atividades para o novo projeto:", activityError.message);
    showToast("Projeto renomeado, mas as atividades não foram movidas.");
    return false;
  }

  return true;
}

async function deleteProjectFromCloud(projectName) {
  const { error: activitiesError } = await supabaseClient
    .from(ACTIVITIES_TABLE)
    .delete()
    .eq("project", projectName);

  if (activitiesError) {
    console.error("Erro ao excluir atividades do projeto:", activitiesError.message);
    showToast("Erro ao excluir atividades do projeto na nuvem.");
    return false;
  }

  const projectId = projectIdsByName[projectName];
  let deleteProject = supabaseClient.from(PROJECTS_TABLE).delete();
  deleteProject = projectId != null ? deleteProject.eq("id", projectId) : deleteProject.eq("nome", projectName);
  const { error } = await deleteProject;

  if (error) {
    console.error("Erro ao excluir projeto no Supabase:", error.message);
    showToast("Erro ao excluir projeto na nuvem.");
    return false;
  }

  delete projectIdsByName[projectName];
  return true;
}

// FUNÇÃO PARA BUSCAR DA NUVEM E ATUALIZAR A TELA
async function syncFromCloud() {
  const { data, error } = await supabaseClient
    .from(ACTIVITIES_TABLE)
    .select('*')
    .order('position', { ascending: true, nullsFirst: false })
    .order('id', { ascending: true });

  if (error) {
    console.error("❌ ERRO AO BUSCAR DO BANCO:", error.message);
    return;
  }

  if (data && data.length > 0) {
    const cloudProjectNames = [
      ...new Set(
        data
          .map((row) => cleanText(row.project || defaultProjectName).trim())
          .filter(Boolean)
      ),
    ];
    if (projectsTableIsEmpty && cloudProjectNames.length > 0) {
      projects = cloudProjectNames;
    }
    projects.forEach(ensureProjectMemory);

    const grouped = Object.fromEntries(projects.map((project) => [project, []]));
    data.forEach((row, index) => {
      const activity = normalizeActivityFromCloud(row, index);
      ensureProjectMemory(activity.project);
      if (!grouped[activity.project]) grouped[activity.project] = [];
      grouped[activity.project].push(activity);
    });

    projectActivities = { ...projectActivities, ...grouped };
    if (!projects.includes(activeProject)) activeProject = projects[0] || defaultProjectName;
    activities = projectActivities[activeProject] || [];
    saveProjectState();
    render();
    if (projectsTableIsEmpty) {
      await persistExistingProjectsToCloud();
      projectsTableIsEmpty = false;
    }
  } else if (data && data.length === 0 && activities.length > 0) {
    const atividadesParaNuvem = activities.map((act, index) => ({
      ...act,
      project: act.project || activeProject,
      position: Number.isFinite(Number(act.position)) ? Number(act.position) : index,
    }));
    if (projectsTableIsEmpty) {
      await persistExistingProjectsToCloud();
      projectsTableIsEmpty = false;
    }
    const { error: errUp } = await supabaseClient.from(ACTIVITIES_TABLE).upsert(atividadesParaNuvem);
    
    if (errUp) {
      console.error("❌ SUPABASE RECUSOU POPULAR O BANCO. Motivo:", errUp.message);
    } else {
      console.log("✅ Banco populado com sucesso!");
    }
  }
}

async function initializeCloudSync() {
  await syncProjectsFromCloud();
  await syncFromCloud();
}

// OUVIR MUDANÇAS EM TEMPO REAL
supabaseClient
  .channel('mudancas_em_rede')
  .on('postgres_changes', { event: '*', schema: 'public', table: ACTIVITIES_TABLE }, () => {
    syncFromCloud();
  })
  .on('postgres_changes', { event: '*', schema: 'public', table: PROJECTS_TABLE }, () => {
    syncProjectsFromCloud().then(syncFromCloud);
  })
  .subscribe();

// Ligar a sincronização assim que o site abre
setTimeout(initializeCloudSync, 500);

function loadProjects() {
  const saved = localStorage.getItem(projectStorageKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length) {
        return [...new Set([...defaultProjects, ...parsed.filter(Boolean)])];
      }
    } catch {}
  }
  return [...defaultProjects];
}

function loadProjectActivities() {
  const saved = localStorage.getItem(projectActivitiesStorageKey) || localStorage.getItem(`${storageKey}-by-project`);
  const base = Object.fromEntries(projects.map((project) => [project, []]));
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === "object") {
        const normalized = { ...base, ...parsed };
        if (!Array.isArray(normalized[defaultProjectName]) || normalized[defaultProjectName].length === 0) {
          normalized[defaultProjectName] = activities;
        }
        projects.forEach((project) => {
          if (!Array.isArray(normalized[project])) normalized[project] = [];
        });
        return normalized;
      }
    } catch {}
  }
  return { ...base, [defaultProjectName]: activities };
}

function loadProjectPhases() {
  const saved = localStorage.getItem(projectPhasesStorageKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === "object") return parsed;
    } catch {}
  }
  return Object.fromEntries(projects.map((project) => [project, [...phases]]));
}

function saveProjectState() {
  localStorage.setItem(projectStorageKey, JSON.stringify(projects));
  localStorage.setItem(projectActivitiesStorageKey, JSON.stringify(projectActivities));
  localStorage.setItem(projectPhasesStorageKey, JSON.stringify(projectPhases));
}

function getProjectPhases(project = activeProject) {
  const selected = projectPhases[project];
  return Array.isArray(selected) && selected.length ? selected.slice() : phases.slice();
}

function setActiveProject(project) {
  if (!projects.includes(project)) projects = [...projects, project];
  if (!Array.isArray(projectActivities[project])) projectActivities[project] = [];
  if (!Array.isArray(projectPhases[project])) projectPhases[project] = phases.slice();
  activeProject = project;
  activities = projectActivities[project];
  activeStatus = "Todos";
  activePhase = "Todas";
  activeStore = "Todas";
  renderNewActivityOptions();
  saveProjectState();
}

function todayDate() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
}

function isLate(activity) {
  if (activity.status === "Concluído" || activity.status === "Não se aplica") return false;
  const due = new Date(`${activity.due}T00:00:00`);
  return due < todayDate();
}

function displayStatus(activity) {
  return isLate(activity) ? "Em atraso" : activity.status;
}

function statusClass(status) {
  return {
    "Concluído": "done",
    "Em andamento": "progress",
    "Não iniciado": "todo",
    "Em atraso": "late",
    "Não se aplica": "not-applicable",
  }[status] || "todo";
}

function formatDate(value) {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(
    new Date(`${value}T00:00:00`)
  );
}

function cleanText(value) {
  return value == null || value === "undefined" ? "" : String(value);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function calcStats(items = activities) {
  const total = items.length;
  const applicable = items.filter((item) => item.status !== "Não se aplica");
  const done = items.filter((item) => item.status === "Concluído").length;
  const late = items.filter(isLate).length;
  const onTime = items.filter((item) => item.status !== "Concluído" && item.status !== "Não se aplica" && !isLate(item)).length;
  const todo = items.filter((item) => item.status === "Não iniciado").length;
  const risk = items.filter((item) => item.priority === "Alta" && item.status !== "Concluído" && item.status !== "Não se aplica").length;
  const progress = applicable.length ? Math.round((done / applicable.length) * 100) : 100;
  return { total, done, late, onTime, todo, risk, progress };
}

function filteredActivities() {
  return activities.filter((item) => {
    const shownStatus = displayStatus(item);
    const statusMatch =
      activeStatus === "Todos" ||
      shownStatus === activeStatus ||
      (activeStatus === "No prazo" && item.status !== "Concluído" && item.status !== "Não se aplica" && !isLate(item)) ||
      (activeStatus === "Não se aplica" && item.status === "Não se aplica") ||
      (activeStatus === "Prioridade alta" && item.priority === "Alta" && item.status !== "Concluído" && item.status !== "Não se aplica");
    const phaseMatch = activePhase === "Todas" || item.phase === activePhase;
    const storeMatch = activeStore === "Todas" || item.platform.includes(activeStore);
    return statusMatch && phaseMatch && storeMatch;
  });
}

function responsibleFor(activity) {
  if (activity.responsible) return activity.responsible;
  const owners = {
    Ideia: "Amanda Martins",
    Planejamento: "Bruno Costa",
    Desenvolvimento: "Diego Silva",
    Testes: "João Oliveira",
    Lojas: "Carla Mendes",
    Revisão: "Amanda Martins",
    Publicação: "Amanda Martins",
  };
  return owners[activity.phase] || "Equipe";
}

function renderKpis() {
  const stats = calcStats();
  const now = todayDate();
  const weekEnd = new Date(now);
  weekEnd.setDate(weekEnd.getDate() + 7);
  const dueToday = activities.filter((item) => new Date(`${item.due}T00:00:00`).getTime() === now.getTime());
  const dueWeek = activities.filter((item) => {
    const due = new Date(`${item.due}T00:00:00`);
    return due >= now && due <= weekEnd;
  });
  const miniStats = (items) => calcStats(items);
  const todayStats = miniStats(dueToday);
  const weekStats = miniStats(dueWeek);
  els.kpiTotal.textContent = stats.total;
  els.kpiDone.textContent = stats.done;
  els.kpiLate.textContent = stats.late;
  els.kpiOnTime.textContent = stats.onTime;
  els.kpiTodo.textContent = stats.todo;
  els.kpiRisk.textContent = stats.risk;
  els.kpiTotalToday.textContent = todayStats.total;
  els.kpiTotalWeek.textContent = weekStats.total;
  els.kpiDoneToday.textContent = todayStats.done;
  els.kpiDoneWeek.textContent = weekStats.done;
  els.kpiLateToday.textContent = todayStats.late;
  els.kpiLateWeek.textContent = weekStats.late;
  els.kpiOnTimeToday.textContent = todayStats.onTime;
  els.kpiOnTimeWeek.textContent = weekStats.onTime;
  els.kpiTodoToday.textContent = todayStats.todo;
  els.kpiTodoWeek.textContent = weekStats.todo;
  els.kpiRiskToday.textContent = todayStats.risk;
  els.kpiRiskWeek.textContent = weekStats.risk;
  els.doneHint.textContent = `${stats.progress}% do plano concludo`;
  els.progressValue.textContent = `${stats.progress}%`;
  els.progressFill.style.width = `${stats.progress}%`;
  els.railProgressValue.textContent = `${stats.progress}%`;
  els.progressDonut.style.background = `conic-gradient(var(--teal) ${stats.progress * 3.6}deg, var(--surface-2) 0deg)`;

  els.healthRing.textContent = stats.progress;
  els.healthRing.style.background = `conic-gradient(var(--teal) ${stats.progress * 3.6}deg, var(--surface-2) 0deg)`;
  if (stats.late > 0) {
    els.healthLabel.textContent = "Atenção";
    els.healthText.textContent = "Existem atividades em atraso que podem travar a revisão.";
  } else if (stats.progress >= 75) {
    els.healthLabel.textContent = "Forte";
    els.healthText.textContent = "O projeto est perto da publicação.";
  } else if (stats.progress >= 35) {
    els.healthLabel.textContent = "Em evolução";
    els.healthText.textContent = "O fluxo est andando, continue fechando bloqueadores.";
  } else {
    els.healthLabel.textContent = "A iniciar";
    els.healthText.textContent = "Priorize as primeiras definies do produto.";
  }
}

function renderInsights() {
  const now = todayDate();
  const soonLimit = new Date(now);
  soonLimit.setDate(soonLimit.getDate() + 7);
  const soon = activities.filter((item) => {
    const due = new Date(`${item.due}T00:00:00`);
    return item.status !== "Concluído" && due >= now && due <= soonLimit;
  }).length;
  const stats = calcStats();
  els.insightLate.textContent = stats.late;
  els.insightSoon.textContent = soon;
  els.insightDoneWeek.textContent = activities.filter((item) => item.status === "Concluído").length;
  els.insightForecast.textContent = `${Math.min(100, stats.progress + Math.max(0, 7 - stats.late))}%`;
}

function renderTimeline() {
  const phaseIcons = {
    Ideia: "idea",
    Planejamento: "plan",
    Desenvolvimento: "dev",
    Testes: "test",
    Lojas: "stores",
    Revisão: "review",
    Publicação: "launch",
  };

  const visiblePhases = getProjectPhases();
  els.timeline.innerHTML = visiblePhases
    .map((phase, index) => {
      const items = activities.filter((item) => item.phase === phase);
      const stats = calcStats(items);
      const active = activePhase === phase ? "active" : "";
      const fallbackIcon = ["idea", "plan", "dev", "test", "stores", "review", "launch", "plan"][index] || "plan";
      return `
        <article class="phase-card ${active}" data-phase="${phase}" role="button" tabindex="0" aria-label="Filtrar atividades da fase ${phase}">
          <span class="phase-icon ${phaseIcons[phase] || fallbackIcon}" aria-hidden="true"></span>
          <strong>${phase}</strong>
          <small>${stats.done}/${stats.total} atividades concludas</small>
          <div class="mini-progress"><div style="width:${stats.progress}%"></div></div>
          <div class="phase-stats">
            <span>${stats.progress}%</span>
            <span>${stats.late} atraso</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderProjects() {
  els.projectSubnav.innerHTML = projects
    .map((project) => {
      const active = project === activeProject ? "active" : "";
      const count = (projectActivities[project] || []).length;
      return `<div class="project-item ${active}">
        <button class="project-link" data-project="${project}" type="button">
          <strong>${project}</strong><span>${count}</span>
        </button>
        <div class="project-actions" aria-label="Ações do projeto ${project}">
          <button class="project-action duplicate-project" data-project="${project}" type="button" title="Duplicar atividades">Duplicar</button>
          <button class="project-action edit-project" data-project="${project}" type="button" title="Editar nome">Editar</button>
          <button class="project-action delete-project" data-project="${project}" type="button" title="Excluir projeto">Excluir</button>
        </div>
      </div>`;
    })
    .join("");
}

function renderTable() {
  const rows = filteredActivities();
  els.table.innerHTML = rows
    .map((activity, index) => {
      const shownStatus = displayStatus(activity);
      const infoOpen = activeInfoId === activity.id;
      const hasObs = Boolean((activity.obs || "").trim());
      return `
         <tr data-id="${activity.id}">
          <td class="order-cell">
            <button class="drag-handle" draggable="true" data-id="${activity.id}" type="button" aria-label="Mover atividade ${activity.title}">${index + 1}</button>
          </td>
          <td class="activity-name">
            <strong>${activity.title}</strong>
            <span>${activity.description}</span>
          </td>
          <td>${activity.phase}</td>
          <td>
            <div class="platforms">
              ${activity.platform.map((platform) => `<span class="tag">${platform}</span>`).join("")}
            </div>
          </td>
          <td>${responsibleFor(activity)}</td>
          <td>
            <input class="date-input" data-id="${activity.id}" type="date" value="${activity.due}" aria-label="Alterar prazo de ${activity.title}" />
          </td>
          <td>
            <select class="status-select ${statusClass(shownStatus)}" data-id="${activity.id}" aria-label="Alterar status de ${activity.title}">
              ${statusOptions.map((status) => `<option value="${status}" ${activity.status === status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
          </td>
          <td><span class="status ${activity.priority === "Alta" ? "warning" : "todo"}">${activity.priority}</span></td>
          <td>
            <div class="row-actions">
              <div class="row-action-main">
                <button class="row-action edit-activity" data-id="${activity.id}" type="button">Editar</button>
                <button class="row-action danger delete-activity" data-id="${activity.id}" type="button">Excluir</button>
              </div>
              <button class="row-action note-action info-toggle ${hasObs ? "has-obs" : ""}" data-id="${activity.id}" type="button" aria-label="Abrir informações de ${activity.title}">Obs.</button>
            </div>
            ${
              infoOpen
                ? `<div class="info-box">
                    <textarea class="info-input" data-id="${activity.id}" placeholder="Inserir informações">${escapeHtml(activity.obs || "")}</textarea>
                    <button class="info-close" data-id="${activity.id}" type="button">Fechar</button>
                  </div>`
                : ""
            }
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderNextAction() {
  const next = activities
    .filter((item) => item.status !== "Concluído" && item.status !== "Não se aplica")
    .sort((a, b) => {
      if (isLate(a) !== isLate(b)) return isLate(a) ? -1 : 1;
      if (a.blocker !== b.blocker) return a.blocker ? -1 : 1;
      return new Date(a.due) - new Date(b.due);
    })[0];

  if (!next) {
    els.nextActionTitle.textContent = "Projeto pronto para acompanhar";
    els.nextActionText.textContent = "Todas as atividades foram concludas. Monitore avaliações, erros e novas verses.";
    els.startNextButton.disabled = true;
    els.startNextButton.textContent = "Tudo concludo";
    return;
  }

  els.nextActionTitle.textContent = next.title;
  els.nextActionText.textContent = `${next.phase} " prazo ${formatDate(next.due)}. ${next.description}`;
  els.startNextButton.disabled = next.status === "Em andamento";
  els.startNextButton.dataset.id = next.id;
  els.startNextButton.textContent = next.status === "Em andamento" ? "J est em andamento" : "Marcar como em andamento";
}

function renderRisks() {
  const risks = activities
    .filter((item) => item.blocker && item.status !== "Concluído" && item.status !== "Não se aplica")
    .sort((a, b) => new Date(a.due) - new Date(b.due))
    .slice(0, 5);

  els.riskList.innerHTML = risks.length
    ? risks.map((risk) => `<li><strong>${risk.title}</strong><br />${risk.phase} " ${formatDate(risk.due)}</li>`).join("")
    : "<li>Nenhuma prioridade alta aberta. Excelente momento para revisar qualidade e publicação.</li>";
}

function allProjectActivities() {
  return projects.flatMap((project) => projectActivities[project] || []);
}

function renderAllProjectsSummary() {
  const items = allProjectActivities();
  const now = todayDate().getTime();
  els.allProjectsTotal.textContent = items.length;
  els.allProjectsToday.textContent = items.filter((item) => new Date(`${item.due}T00:00:00`).getTime() === now).length;
  els.allProjectsDone.textContent = items.filter((item) => item.status === "Concluído").length;
  els.allProjectsLate.textContent = items.filter(isLate).length;
}

function renderHeader() {
  els.projectTitle.textContent = activeProject;
}

function renderPhaseFilter() {
  if (!els.phaseFilter) return;
  const available = getProjectPhases();
  els.phaseFilter.innerHTML = [
    '<option value="Todas">Todas as fases</option>',
    ...available.map((phase) => `<option value="${phase}">${phase}</option>`),
  ].join("");
  if (activePhase !== "Todas" && !available.includes(activePhase)) activePhase = "Todas";
  els.phaseFilter.value = activePhase;
}

function setActiveStatus(status) {
  activeStatus = status;
  document.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle("active", filter.dataset.status === status);
  });
  renderTable();
}

function setActivePhase(phase) {
  activePhase = activePhase === phase ? "Todas" : phase;
  activeStatus = "Todos";
  document.querySelectorAll(".filter").forEach((filter) => {
    filter.classList.toggle("active", filter.dataset.status === "Todos");
  });
  renderTimeline();
  renderTable();
}

function setActiveNav() {
  const hash = window.location.hash || "#visao-geral";
  document.querySelectorAll(".side-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === hash);
  });
}

function goToSection(hash) {
  history.replaceState(null, "", hash);
  setActiveNav();
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(themeStorageKey, theme);
  els.themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
}

function nextActivityId() {
  return Math.max(0, ...activities.map((item) => Number(item.id) || 0)) + 1;
}

function todayInputValue() {
  return new Date().toISOString().slice(0, 10);
}

function openActivityModal(activity = null) {
  editingActivityId = activity ? activity.id : null;
  els.modalTitle.textContent = activity ? "Editar atividade" : "Inserir atividade";
  els.activityModal.classList.add("open");
  els.activityModal.setAttribute("aria-hidden", "false");
  els.activityForm.reset();
  if (activity) {
    document.querySelector("#newTitle").value = activity.title || "";
    document.querySelector("#newDescription").value = activity.description || "";
    document.querySelector("#newPhase").value = activity.phase || "Ideia";
    document.querySelector("#newStatus").value = activity.status || "Não iniciado";
    document.querySelector("#newDue").value = activity.due || todayInputValue();
    document.querySelector("#newPriority").value = activity.priority || "Média";
    els.newResponsible.value = responsibleFor(activity);
    document.querySelectorAll('input[name="platform"]').forEach((input) => {
      input.checked = (activity.platform || ["Geral"]).includes(input.value);
    });
    document.querySelector("#newBlocker").checked = Boolean(activity.blocker);
  } else {
    els.newDue.value = todayInputValue();
    els.newResponsible.value = "";
  }
  document.querySelector("#newTitle").focus();
}

function closeActivityModal() {
  els.activityModal.classList.remove("open");
  els.activityModal.setAttribute("aria-hidden", "true");
  els.activityForm.reset();
  els.newDue.value = todayInputValue();
  editingActivityId = null;
  els.modalTitle.textContent = "Inserir atividade";
}

function openProjectModal(projectName = null) {
  editingProjectName = projectName;
  els.projectForm.reset();
  els.projectModalTitle.textContent = projectName ? "Editar projeto" : "Novo projeto";
  els.projectNameInput.value = projectName || "";
  els.projectModal.classList.add("open");
  els.projectModal.setAttribute("aria-hidden", "false");
  els.projectNameInput.focus();
}

function closeProjectModal() {
  els.projectModal.classList.remove("open");
  els.projectModal.setAttribute("aria-hidden", "true");
  els.projectForm.reset();
  editingProjectName = null;
}

function openDeleteProjectModal(projectName) {
  pendingDeleteProject = projectName;
  els.deleteProjectText.textContent = `Deseja excluir o projeto "${projectName}" e todas as atividades dele?`;
  els.deleteProjectModal.classList.add("open");
  els.deleteProjectModal.setAttribute("aria-hidden", "false");
}

function closeDeleteProjectModal() {
  els.deleteProjectModal.classList.remove("open");
  els.deleteProjectModal.setAttribute("aria-hidden", "true");
  pendingDeleteProject = null;
}

function openDuplicateProjectModal(projectName) {
  const targets = projects.filter((project) => project !== projectName);
  if (!targets.length) {
    showToast("Crie outro projeto para receber as atividades.");
    return;
  }

  pendingDuplicateProject = projectName;
  els.duplicateProjectText.textContent = `Copiar atividades de "${projectName}" para:`;
  els.duplicateProjectTarget.innerHTML = targets
    .map((project) => `<option value="${escapeHtml(project)}">${escapeHtml(project)}</option>`)
    .join("");
  els.duplicateProjectModal.classList.add("open");
  els.duplicateProjectModal.setAttribute("aria-hidden", "false");
  els.duplicateProjectTarget.focus();
}

function closeDuplicateProjectModal() {
  els.duplicateProjectModal.classList.remove("open");
  els.duplicateProjectModal.setAttribute("aria-hidden", "true");
  pendingDuplicateProject = null;
}

function renderPhaseEditorRows(phaseList = getProjectPhases()) {
  const rows = phaseList.map((item) =>
    typeof item === "string" ? { original: item, name: item } : item
  );

  els.phaseOptions.innerHTML = rows
    .map((item) => {
      const phase = item.name || item.original;
      const original = item.original || phase;
      return `<div class="phase-edit-row" data-original="${escapeHtml(original)}">
        <button class="phase-drag-handle" type="button" aria-label="Arrastar fase ${escapeHtml(phase)}">≡</button>
        <input class="phase-name-input" name="projectPhaseName" type="text" value="${escapeHtml(phase)}" data-original="${escapeHtml(original)}" aria-label="Nome da fase ${escapeHtml(phase)}" />
        <button class="phase-row-button delete-phase" type="button" title="Excluir fase" aria-label="Excluir fase ${escapeHtml(phase)}">X</button>
      </div>`;
    })
    .join("");
}

function currentPhaseEditorRows() {
  return Array.from(els.phaseOptions.querySelectorAll(".phase-edit-row")).map((row) => ({
    original: cleanText(row.dataset.original).trim(),
    name: cleanText(row.querySelector(".phase-name-input")?.value).trim(),
  }));
}

function openPhaseModal() {
  renderPhaseEditorRows();
  draggedPhaseOriginal = null;
  els.newPhaseName.value = "";
  els.phaseModal.classList.add("open");
  els.phaseModal.setAttribute("aria-hidden", "false");
}

function closePhaseModal() {
  els.phaseModal.classList.remove("open");
  els.phaseModal.setAttribute("aria-hidden", "true");
  draggedPhaseOriginal = null;
  isDraggingPhase = false;
}

function renderNewActivityOptions() {
  const available = getProjectPhases();
  els.newPhase.innerHTML = available.map((phase) => `<option value="${phase}">${phase}</option>`).join("");
}

function render() {
  renderHeader();
  renderKpis();
  renderProjects();
  renderTimeline();
  renderTable();
  renderNextAction();
  renderRisks();
  renderAllProjectsSummary();
  renderInsights();
}

async function duplicateProjectActivities(sourceProject, targetProject) {
  const sourceActivities = projectActivities[sourceProject] || [];
  if (!sourceActivities.length) {
    showToast("Este projeto não tem atividades para duplicar.");
    return false;
  }

  const targetActivities = projectActivities[targetProject] || [];
  const nextId = Math.max(0, ...allProjectActivities().map((item) => Number(item.id) || 0)) + 1;
  const duplicated = sourceActivities.map((activity, index) => ({
    ...activity,
    id: nextId + index,
    project: targetProject,
    position: targetActivities.length + index,
  }));

  const updatedTargetActivities = [...targetActivities, ...duplicated].map((activity, index) => ({
    ...activity,
    position: index,
    project: targetProject,
  }));

  const savedInCloud = await saveProjectActivitiesToCloud(targetProject, updatedTargetActivities);
  if (!savedInCloud) {
    showToast("Erro ao duplicar atividades na nuvem.");
    return false;
  }

  projectActivities[targetProject] = updatedTargetActivities;
  if (activeProject === targetProject) activities = updatedTargetActivities;
  saveProjectState();
  return true;
}

function reorderActivities(draggedId, targetId) {
  if (!draggedId || !targetId || draggedId === targetId) return;

  const draggedIndex = activities.findIndex((item) => Number(item.id) === Number(draggedId));
  const targetIndex = activities.findIndex((item) => Number(item.id) === Number(targetId));

  if (draggedIndex === -1 || targetIndex === -1) return;

  const updatedActivities = [...activities];
  const [draggedItem] = updatedActivities.splice(draggedIndex, 1);
  updatedActivities.splice(targetIndex, 0, draggedItem);

  activities = updatedActivities.map((item, index) => ({
    ...item,
    position: index
  }));

  projectActivities[activeProject] = activities;

  saveActivities();
  render();
  showToast("Ordem das atividades atualizada.");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.setTimeout(() => els.toast.classList.remove("show"), 2200);
}

document.addEventListener("change", (event) => {
  const target = event.target;
  const id = Number(target.dataset.id);
  if (target.classList.contains("status-select")) {
    activities = activities.map((item) => (item.id === id ? { ...item, status: target.value } : item));
    saveActivities();
    render();
  }
  if (target.classList.contains("date-input")) {
    activities = activities.map((item) => (item.id === id ? { ...item, due: target.value } : item));
    saveActivities();
    render();
  }
  if (target.classList.contains("info-input")) {
    activities = activities.map((item) => (item.id === id ? { ...item, obs: target.value } : item));
    saveActivities();
  }
  if (target.id === "phaseFilter") {
    activePhase = target.value;
    renderTable();
  }
  if (target.id === "storeFilter") {
    activeStore = target.value;
    render();
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (!target.classList.contains("info-input")) return;

  const id = Number(target.dataset.id);
  activities = activities.map((item) =>
    item.id === id ? { ...item, obs: target.value } : item
  );

  projectActivities[activeProject] = activities;
  saveProjectState();
});

document.addEventListener("dragstart", (event) => {
  const handle = event.target.closest(".drag-handle");
  if (!handle) return;

  const row = handle.closest("tr[data-id]");
  if (!row) return;

  draggedActivityId = Number(row.dataset.id);
  row.classList.add("dragging");

  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", String(draggedActivityId));
});

document.addEventListener("dragover", (event) => {
  const row = event.target.closest("tr[data-id]");
  if (!row || !draggedActivityId) return;
  if (row.classList.contains("dragging")) return;

  event.preventDefault();
  event.dataTransfer.dropEffect = "move";

  document.querySelectorAll("tr.drag-over").forEach((item) => {
    item.classList.remove("drag-over");
  });

  row.classList.add("drag-over");
});

document.addEventListener("dragleave", (event) => {
  const row = event.target.closest("tr[data-id]");
  if (!row) return;

  row.classList.remove("drag-over");
});

document.addEventListener("drop", (event) => {
  const row = event.target.closest("tr[data-id]");
  if (!row || !draggedActivityId) return;

  event.preventDefault();

  const targetId = Number(row.dataset.id);

  document.querySelectorAll("tr.drag-over").forEach((item) => {
    item.classList.remove("drag-over");
  });

  reorderActivities(draggedActivityId, targetId);

  draggedActivityId = null;
});

document.addEventListener("dragend", () => {
  draggedActivityId = null;

  document.querySelectorAll("tr.dragging, tr.drag-over").forEach((item) => {
    item.classList.remove("dragging", "drag-over");
  });
});

document.addEventListener("click", (event) => {
  const editButton = event.target.closest(".edit-activity");
  const deleteButton = event.target.closest(".delete-activity");
  const projectButton = event.target.closest(".project-link");
  const editProjectButton = event.target.closest(".edit-project");
  const deleteProjectButton = event.target.closest(".delete-project");
  const duplicateProjectButton = event.target.closest(".duplicate-project");
  const phaseCard = event.target.closest(".phase-card[data-phase]");
  const infoToggle = event.target.closest(".info-toggle");
  const infoClose = event.target.closest(".info-close");

  if (infoToggle) {
    const id = Number(infoToggle.dataset.id);
    activeInfoId = activeInfoId === id ? null : id;
    renderTable();
    return;
  }

  if (infoClose) {
    activeInfoId = null;
    renderTable();
    return;
  }

  if (editProjectButton) {
    openProjectModal(editProjectButton.dataset.project);
    return;
  }

  if (deleteProjectButton) {
    const projectName = deleteProjectButton.dataset.project;
    if (projects.length <= 1) {
      showToast("Mantenha pelo menos um projeto.");
      return;
    }
    openDeleteProjectModal(projectName);
    return;
  }

  if (duplicateProjectButton) {
    openDuplicateProjectModal(duplicateProjectButton.dataset.project);
    return;
  }

  if (projectButton) {
    setActiveProject(projectButton.dataset.project);
    history.replaceState(null, "", "#cronograma");
    setActiveNav();
    render();
    return;
  }

  if (phaseCard) {
    setActivePhase(phaseCard.dataset.phase);
    return;
  }

  if (editButton) {
    const activity = activities.find((item) => item.id === Number(editButton.dataset.id));
    if (activity) openActivityModal(activity);
  }

  if (deleteButton) {
    const id = Number(deleteButton.dataset.id);
    const activity = activities.find((item) => item.id === id);
    if (!activity) return;
    const ok = window.confirm(`Excluir a atividade "${activity.title}"?`);
    if (!ok) return;

    // 1. AVISA O SUPABASE PARA EXCLUIR PRIMEIRO
    supabaseClient.from(ACTIVITIES_TABLE).delete().eq('id', id).then(({ error }) => {
      if (error) {
        console.error("Erro ao excluir do banco:", error.message);
        alert("Erro ao excluir a atividade na nuvem.");
        return; // Para tudo se der erro no banco
      }
      
      // 2. SE APAGOU NO BANCO COM SUCESSO, APAGA NA TELA
      activities = activities.filter((item) => item.id !== id);
      saveActivities();
      render();
      showToast("Atividade excluída.");
    });
  }
});

els.addProjectButton.addEventListener("click", () => openProjectModal());
els.closeProjectModalButton.addEventListener("click", closeProjectModal);
els.cancelProjectModalButton.addEventListener("click", closeProjectModal);
els.projectModal.addEventListener("click", (event) => {
  if (event.target === els.projectModal) closeProjectModal();
});
els.closeDeleteProjectButton.addEventListener("click", closeDeleteProjectModal);
els.cancelDeleteProjectButton.addEventListener("click", closeDeleteProjectModal);
els.deleteProjectModal.addEventListener("click", (event) => {
  if (event.target === els.deleteProjectModal) closeDeleteProjectModal();
});
els.closeDuplicateProjectButton.addEventListener("click", closeDuplicateProjectModal);
els.cancelDuplicateProjectButton.addEventListener("click", closeDuplicateProjectModal);
els.duplicateProjectModal.addEventListener("click", (event) => {
  if (event.target === els.duplicateProjectModal) closeDuplicateProjectModal();
});
els.confirmDuplicateProjectButton.addEventListener("click", async () => {
  if (!pendingDuplicateProject) return;
  const targetProject = els.duplicateProjectTarget.value;
  if (!targetProject || targetProject === pendingDuplicateProject) return;

  const duplicated = await duplicateProjectActivities(pendingDuplicateProject, targetProject);
  if (!duplicated) return;

  closeDuplicateProjectModal();
  render();
  showToast(`Atividades duplicadas para "${targetProject}".`);
});
els.confirmDeleteProjectButton.addEventListener("click", async () => {
  if (!pendingDeleteProject) return;
  const projectName = pendingDeleteProject;
  const deletedInCloud = await deleteProjectFromCloud(projectName);
  if (!deletedInCloud) return;

  projects = projects.filter((project) => project !== projectName);
  delete projectActivities[projectName];
  delete projectPhases[projectName];
  if (activeProject === projectName) setActiveProject(projects[0]);
  saveProjectState();
  closeDeleteProjectModal();
  render();
  showToast("Projeto excluído.");
});
els.phaseConfigButton.addEventListener("click", openPhaseModal);
els.closePhaseModalButton.addEventListener("click", closePhaseModal);
els.cancelPhaseModalButton.addEventListener("click", closePhaseModal);
els.phaseModal.addEventListener("click", (event) => {
  if (event.target === els.phaseModal) closePhaseModal();
});
els.phaseOptions.addEventListener("click", (event) => {
  const row = event.target.closest(".phase-edit-row");
  if (!row) return;

  const rows = currentPhaseEditorRows();
  const index = Array.from(els.phaseOptions.querySelectorAll(".phase-edit-row")).indexOf(row);
  if (index < 0) return;

  if (event.target.closest(".delete-phase")) {
    if (rows.length <= 1) {
      showToast("Mantenha pelo menos uma fase.");
      return;
    }
    rows.splice(index, 1);
    renderPhaseEditorRows(rows);
  }
});
function moveDraggedPhase(clientX, clientY) {
  if (!isDraggingPhase || !draggedPhaseOriginal) return;
  const draggedRow = els.phaseOptions.querySelector(`.phase-edit-row[data-original="${CSS.escape(draggedPhaseOriginal)}"]`);
  if (!draggedRow) return;

  const elementBelowPointer = document.elementFromPoint(clientX, clientY);
  const row = elementBelowPointer?.closest?.(".phase-edit-row");
  if (!row || row === draggedRow) return;

  const rect = row.getBoundingClientRect();
  const insertAfter = clientY >= rect.top + rect.height / 2;
  const referenceNode = insertAfter ? row.nextElementSibling : row;
  if (referenceNode === draggedRow) return;
  els.phaseOptions.insertBefore(draggedRow, referenceNode);
}

function stopPhaseDrag() {
  draggedPhaseOriginal = null;
  isDraggingPhase = false;
  document.querySelectorAll(".phase-dragging").forEach((item) => {
    item.classList.remove("phase-dragging");
  });
}

els.phaseOptions.addEventListener("pointerdown", (event) => {
  const handle = event.target.closest(".phase-drag-handle");
  const row = handle?.closest(".phase-edit-row");
  if (!row) return;

  event.preventDefault();
  draggedPhaseOriginal = row.dataset.original;
  isDraggingPhase = true;
  row.classList.add("phase-dragging");
  handle.setPointerCapture?.(event.pointerId);
});

document.addEventListener("pointermove", (event) => {
  moveDraggedPhase(event.clientX, event.clientY);
});

document.addEventListener("pointerup", stopPhaseDrag);
document.addEventListener("pointercancel", stopPhaseDrag);
els.addPhaseButton.addEventListener("click", () => {
  const phaseName = cleanText(els.newPhaseName.value).trim();
  if (!phaseName) return;

  const rows = currentPhaseEditorRows();
  const names = rows.map((item) => item.name.toLowerCase());
  if (names.includes(phaseName.toLowerCase())) {
    showToast("Já existe uma fase com esse nome.");
    return;
  }

  renderPhaseEditorRows([...rows, { original: phaseName, name: phaseName }]);
  els.newPhaseName.value = "";
  els.newPhaseName.focus();
});

els.projectForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const projectName = els.projectNameInput.value.trim();
  if (!projectName) return;
  const wasEditing = Boolean(editingProjectName);
  if (projects.includes(projectName) && projectName !== editingProjectName) {
    showToast("Já existe um projeto com esse nome.");
    return;
  }
  if (editingProjectName) {
    const oldProjectName = editingProjectName;
    const renamedInCloud = await renameProjectInCloud(oldProjectName, projectName);
    if (!renamedInCloud) return;

    projects = projects.map((project) => (project === editingProjectName ? projectName : project));
    projectActivities[projectName] = (projectActivities[editingProjectName] || []).map((activity) => ({
      ...activity,
      project: projectName,
    }));
    projectPhases[projectName] = projectPhases[editingProjectName] || getProjectPhases(editingProjectName);
    if (projectName !== editingProjectName) {
      delete projectActivities[editingProjectName];
      delete projectPhases[editingProjectName];
    }
  } else {
    const createdInCloud = await createProjectInCloud(projectName);
    if (!createdInCloud) return;

    projects = [...projects, projectName];
    projectActivities[projectName] = [];
    projectPhases[projectName] = phases.slice();
  }
  setActiveProject(projectName);
  saveProjectState();
  render();
  closeProjectModal();
  showToast(wasEditing ? "Projeto renomeado." : "Projeto criado no cronograma.");
});

els.phaseForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const selected = currentPhaseEditorRows()
    .map((item) => ({ original: item.original, name: cleanText(item.name).trim() }))
    .filter((item) => item.name);

  if (!selected.length) {
    showToast("Mantenha pelo menos uma fase.");
    return;
  }

  const selectedNames = selected.map((item) => item.name);
  const lowerNames = selectedNames.map((name) => name.toLowerCase());
  if (new Set(lowerNames).size !== lowerNames.length) {
    showToast("Preencha nomes diferentes para cada fase.");
    return;
  }

  const uniqueNames = selectedNames;
  projectPhases[activeProject] = uniqueNames;
  const renamed = Object.fromEntries(selected.map((item) => [item.original, item.name]));
  if (!uniqueNames.includes(activePhase)) activePhase = "Todas";
  activities = activities.map((item) => {
    if (renamed[item.phase]) return { ...item, phase: renamed[item.phase] };
    return { ...item, phase: uniqueNames[0] };
  });
  saveProjectState();
  await saveProjectPhasesToCloud(activeProject, uniqueNames);
  await saveActivities();
  renderPhaseFilter();
  renderNewActivityOptions();
  closePhaseModal();
  render();
  showToast("Fases do projeto atualizadas.");
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveStatus(button.dataset.status);
  });
});

document.querySelectorAll(".side-nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const hash = link.getAttribute("href");
    history.replaceState(null, "", hash);
    if (link.id === "scheduleNavToggle") {
      document.querySelector(".project-subnav").classList.toggle("open");
    }
    setActiveNav();
  });
});

document.querySelectorAll(".kpi-card[data-kpi]").forEach((card) => {
  const openTarget = () => {
    const target = card.dataset.kpi;
    if (target === "Prioridade alta") {
      setActiveStatus("Prioridade alta");
      return;
    }
    setActiveStatus(target);
  };
  card.addEventListener("click", openTarget);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openTarget();
    }
  });
});

els.themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

els.addActivityButton.addEventListener("click", openActivityModal);
els.closeModalButton.addEventListener("click", closeActivityModal);
els.cancelModalButton.addEventListener("click", closeActivityModal);
els.activityModal.addEventListener("click", (event) => {
  if (event.target === els.activityModal) closeActivityModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && els.activityModal.classList.contains("open")) {
    closeActivityModal();
  }
  if (event.key === "Escape" && els.projectModal.classList.contains("open")) {
    closeProjectModal();
  }
  if (event.key === "Escape" && els.deleteProjectModal.classList.contains("open")) {
    closeDeleteProjectModal();
  }
  if (event.key === "Escape" && els.duplicateProjectModal.classList.contains("open")) {
    closeDuplicateProjectModal();
  }
  if (event.key === "Escape" && els.phaseModal.classList.contains("open")) {
    closePhaseModal();
  }
  const phaseCard = event.target.closest?.(".phase-card[data-phase]");
  if (phaseCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    setActivePhase(phaseCard.dataset.phase);
  }
});

els.activityForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(els.activityForm);
  const platform = formData.getAll("platform");

  const wasEditing = Boolean(editingActivityId);

  // SE houver um editingActivityId, usamos ele.
  // SE NÃO, criamos um novo
  const currentId = editingActivityId ? Number(editingActivityId) : Date.now();

  const existingActivity = activities.find(
    (item) => Number(item.id) === currentId
  );

  const activity = {
    id: currentId,
    title: cleanText(formData.get("title")).trim(),
    description: cleanText(formData.get("description")).trim(),
    phase: formData.get("phase"),
    platform: platform.length ? platform : ["Geral"],
    responsible: formData.get("responsible").trim(),
    status: formData.get("status") || "Não iniciado",
    due: formData.get("due"),
    priority: formData.get("priority"),
    blocker: formData.get("blocker") === "on",
    obs: existingActivity?.obs || "",
    project: activeProject,
    position: editingActivityId ? existingActivity?.position : activities.length
  };

  const { error } = await supabaseClient
    .from(ACTIVITIES_TABLE)
    .upsert(activity);

  if (error) {
    console.error("Erro no Supabase:", error.message);
    showToast("Erro ao sincronizar com a nuvem!");
    return;
  }

  if (editingActivityId) {
    activities = activities.map((item) =>
      Number(item.id) === currentId ? activity : item
    );
  } else {
    activities.push(activity);
  }

  saveActivities();
  render();
  closeActivityModal();

  editingActivityId = null;
  showToast(wasEditing ? "Atualizado!" : "Criado!");
});
els.startNextButton.addEventListener("click", () => {
  const id = Number(els.startNextButton.dataset.id);
  activities = activities.map((item) => (item.id === id ? { ...item, status: "Em andamento" } : item));
  saveActivities();
  render();
  showToast("Próxima atividade marcada como em andamento.");
});

els.resetButton.addEventListener("click", () => {
  const ok = window.confirm(
    "Restaurar o fluxo original vai sobrescrever status, prazos e dados das atividades padrão deste projeto. Deseja continuar?"
  );
  if (!ok) return;

  activities = seedActivities;
  saveActivities();
  render();
  showToast(`Fluxo original restaurado em ${activeProject}.`);
});

window.addEventListener("hashchange", setActiveNav);
applyTheme(localStorage.getItem(themeStorageKey) || "light");
if (!Array.isArray(activities) || activities.length === 0) {
  if (activeProject === "App Publicação 1.0") {
    activities = seedActivities;
    saveActivities();
  }
}
setActiveProject(activeProject);
renderPhaseFilter();
renderNewActivityOptions();
setActiveNav();
render();
