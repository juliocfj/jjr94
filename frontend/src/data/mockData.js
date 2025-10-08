// Mock data for multilingual portfolio
export const portfolioData = {
  pt: {
    navigation: {
      about: "Quem Sou Eu",
      experience: "Experiência",
      projects: "Projetos", 
      education: "Formação",
      skills: "Habilidades",
      contact: "Contato"
    },
    ui: {
      viewDetails: "Ver Detalhes",
      technologyDegree: "Graduação Tecnológica",
      quickOverview: "Resumo Rápido",
      letsWorkTogether: "Vamos Trabalhar Juntos",
      yearsExperience: "Anos de Experiência",
      usersSupported: "Usuários Atendidos",
      uptimeAchieved: "Disponibilidade Mantida",
      processImprovement: "Melhoria de Processos",
      current: "Atual",
      previous: "Anterior"
    },
    hero: {
      name: "Julio Cesar de Faria Junior",
      title: "Especialista em TI",
      subtitle: "7+ anos de experiência em suporte técnico, automação e gestão de infraestrutura",
      description: "Sou Julio Cesar de Faria Junior, especialista em TI com mais de 7 anos de experiência em suporte técnico, automação e gestão de infraestrutura em ambientes cloud e on-premise. Atuo com Microsoft 365, Power Platform, Terraform, Kubernetes e UniFi, buscando sempre eficiência, segurança e inovação.",
      cta: "Entre em Contato",
      timeZone: "Qualquer Fuso Horário Disponível"
    },
    about: {
      title: "Quem Sou Eu",
      description: "Sou Julio Cesar de Faria Junior, especialista em TI e DevOps com mais de 7 anos de experiência em infraestrutura, automação e computação em nuvem. Minha trajetória combina solidez técnica e mentalidade prática, unindo eficiência operacional e foco em resultados. Já atuei em ambientes híbridos (on-premise e cloud), desenvolvendo soluções com Azure, GCP e AWS, aplicando Kubernetes, Terraform e CI/CD para construir sistemas escaláveis e seguros. Tenho perfil colaborativo e proativo, gosto de resolver problemas complexos e de transformar rotinas em processos automatizados e previsíveis. Trabalho bem sob pressão, com pensamento analítico e atenção aos detalhes — sempre buscando inovação e qualidade no que entrego. Atualmente, foco em aprimorar minha atuação internacional, ampliando meu alcance técnico e linguístico em inglês e italiano, e me posicionando para oportunidades globais na área de Cloud, Infraestrutura e Automação."
    },
    experience: [
      {
        id: 1,
        title: "IT Specialist",
        company: "Grupo CW Firpo",
        period: "nov/2024 – atual",
        description: "Gerenciamento de redes UniFi e infraestrutura de TI",
        responsibilities: [
          "Gerenciar atividades DevOps, incluindo ferramentas de automação, implantação e controle de versões.",
          "Validar simulações de recuperação, deployment e outros processos de TI.",
          "Otimizar custos de TI e gerar relatórios sobre desempenho e despesas.",
          "Supervisionar procedimentos de backup, rotinas de recuperação de dados e planos de contingência.",
          "Monitorar e manter a infraestrutura de servidores, garantindo disponibilidade e desempenho.",
          "Executar manutenção preventiva e processos de escalonamento em caso de falhas.",
          "Gerar relatórios periódicos, incluindo desempenho de servidores, acessos de segurança e backups.",
          "Manter inventário atualizado de ativos de TI, ciclo de vida e planos de substituição.",
          "Preparar e atualizar documentação de TI, incluindo ativos, fornecedores e políticas de acesso.",
          "Gerenciar controle de acessos e políticas de senha para sistemas e plataformas críticas.",
          "Garantir conformidade com os acordos de SLA e gerenciar entregas específicas para clientes.",
          "Conduzir reuniões de handover para revisar responsabilidades, tarefas pendentes e prioridades críticas.",
          "Facilitar comunicação eficaz com os clientes e garantir a continuidade do suporte durante as transições."
        ]
      },
      {
        id: 2,
        title: "IT Security Administrator",
        company: "MeedBr",
        period: "abr/2024 – ago/2024",
        description: "Alinhamento de políticas à LGPD/GDPR",
        responsibilities: [
          "Instalar, administrar e solucionar problemas das soluções de segurança da organização.",
          "Gerenciar e analisar alertas SIEM provenientes de ferramentas como Wazuh, Manage Engine e Graylog.",
          "Monitorar sistemas em cloud e on-premise utilizando Zabbix e Grafana.",
          "Gerenciar VPNs e firewalls, incluindo Sophos e Fortinet.",
          "Analisar alertas, abrir tickets e coordenar-se com a equipe responsável pela implementação das soluções.",
          "Utilizar a ferramenta de segurança baseada em inteligência artificial Cylance para detecção e prevenção de ameaças."
        ]
      },
      {
        id: 3,
        title: "ITOps Specialist",
        company: "Quero Educação",
        period: "jan/2019 – ago/2023",
        description: "Suporte a mais de 1.000 usuários",
        responsibilities: [
          "Gestão de instâncias EC2 e redes VPC na AWS, além da administração de usuários e segurança no Azure.",
          "Automação de processos com Terraform, garantindo recursos escaláveis e eficientes.",
          "Supervisão de Kubernetes para automatizar deploys e gerenciar aplicações containerizadas.",
          "Gerenciamento de projetos na Google Cloud Platform (GCP), incluindo criação de recursos e políticas de segurança.",
          "Implementação de conformidade com o GDPR, alinhando políticas de segurança e controle de acesso.",
          "Desenvolvimento de soluções automatizadas para monitoramento de aplicações.",
          "Gestão de pipelines CI/CD com Docker e Jenkins, facilitando o desenvolvimento contínuo.",
          "Configuração do Zabbix com alertas via Slack para melhorar a resposta a incidentes.",
          "Administração de ferramentas como G-Suite, Jira, Slack, Metabase, Notion, Adobe, PowerBI, Office 365, GitHub, Google Ads e Google Analytics.",
          "Administração do firewall Sophos para segurança de rede e controle de tráfego.",
          "Suporte remoto e presencial para hardware e software, garantindo continuidade dos serviços.",
          "Gestão de chamadas com soluções VoIP baseadas em SIP para resolução de problemas técnicos.",
          "Atendimento e coordenação de solicitações L1, apoiando equipes na resolução de incidentes complexos.",
          "Implementação de integração entre Active Directory e Ansible, automatizando tarefas e aumentando a segurança.",
          "Atualização e manutenção do GLPI para garantir a continuidade dos serviços de help desk.",
          "Experiência com Windows, distribuições Linux (Ubuntu, Xubuntu, Debian) e macOS (Catalina, Big Sur, Monterey).",
          "Gerenciamento da infraestrutura de rede com foco em segurança e alta disponibilidade, incluindo VPNs para trabalho remoto."
        ]
      },
      {
        id: 4,
        title: "IT Support Analyst",
        company: "Fundação Cassiano Ricardo", 
        period: "fev/2018 – jan/2019",
        description: "Suporte presencial e remoto",
        responsibilities: [
          "Criação de imagens ISO personalizadas (sistemas operacionais) para implantação em massa via rede utilizando o serviço Ghost.",
          "Manutenção de hardware dos equipamentos.",
          "Manutenção e configuração de softwares.",
          "Administração do Active Directory (AD), incluindo criação de grupos, usuários, regras e políticas.",
          "Gerenciamento do servidor de e-mails Zimbra.",
          "Instalação e configuração do Microsoft Outlook.",
          "Configuração e gerenciamento do firewall pfSense.",
          "Atendimento Help Desk e suporte remoto utilizando TightVNC.",
          "Backup e restauração dos e-mails dos usuários.",
          "Limpeza de dados obsoletos no servidor de e-mails.",
          "Suporte técnico a usuários de macOS e Windows.",
          "Gerenciamento de telefones VoIP GrandStream configurados com contas SIP registradas no servidor Asterisk.",
          "Suporte a mais de 250 usuários."
        ]
      }
    ],
    projects: {
      description: "Projetos reais demonstrando expertise técnica, resultados mensuráveis e soluções inovadoras em infraestrutura cloud, automação e domínios de segurança.",
      list: [
      {
        id: 1,
        title: "SharePoint Marco Zero",
        subtitle: "Estrutura Colaborativa Corporativa",
        company: "CW Firpo, 2025",
        description: "Reestruturação completa do ambiente SharePoint Online para centralizar documentos e fluxos internos da empresa.",
        technologies: ["SharePoint Online", "Power Automate", "Microsoft 365", "Excel", "Power BI"],
        responsibilities: [
          "Planejamento da arquitetura de sites e listas",
          "Criação de fluxos automáticos de aprovação e versionamento",
          "Treinamento de usuários e padronização de nomenclaturas"
        ],
        results: [
          "Redução de 40% no tempo médio de busca de documentos",
          "Melhoria na colaboração entre setores e conformidade com políticas de segurança"
        ]
      },
      {
        id: 2,
        title: "Monitoramento de Rede e Servidores",
        subtitle: "UniFi + Zabbix + Grafana",
        company: "Projeto Interno",
        description: "Implantação de monitoramento ativo para infraestrutura híbrida (cloud e local), com alertas em tempo real.",
        technologies: ["UniFi Controller", "Zabbix", "Grafana", "PowerShell", "Python"],
        responsibilities: [
          "Criação de dashboards personalizados no Grafana",
          "Integração de alertas com Telegram e e-mail corporativo",
          "Monitoramento de performance de rede (latência, uptime, carga)"
        ],
        results: [
          "Detecção proativa de falhas (tempo médio de resolução caiu de 45 para 12 minutos)",
          "Alta disponibilidade de 99,9% mantida nos servidores principais"
        ]
      },
      {
        id: 3,
        title: "Automação de Provisionamento Cloud",
        subtitle: "Terraform + GCP",
        company: "Quero Educação, 2022", 
        description: "Criação de templates de infraestrutura como código (IaC) para padronizar ambientes de teste e produção na Google Cloud Platform.",
        technologies: ["GCP", "Terraform", "Jenkins", "Docker", "GitLab"],
        responsibilities: [
          "Desenvolvimento de módulos Terraform para VMs, balanceadores e storage",
          "Integração de pipelines CI/CD com Jenkins e Docker"
        ],
        results: [
          "Redução de 40% no tempo de entrega de ambientes",
          "Padronização e rastreabilidade total das configurações"
        ]
      },
      {
        id: 4,
        title: "Automação de Relatórios M365",
        subtitle: "PowerShell + Power BI",
        company: "Projeto Interno",
        description: "Criação de scripts automatizados para extrair métricas de uso do Microsoft Teams, SharePoint e Outlook.",
        technologies: ["PowerShell", "Microsoft Graph API", "Power BI", "Azure AD"],
        responsibilities: [
          "Desenvolvimento de scripts PowerShell e integração com APIs Microsoft Graph",
          "Alimentação de dashboards Power BI com atualização automática"
        ],
        results: [
          "Visualização clara de acessos, atividade e licenças",
          "Redução de 60% na carga manual da equipe de TI"
        ]
      },
      {
        id: 5,
        title: "Política de Acessos e VPN Segura",
        subtitle: "Automação de Segurança",
        company: "MeedBr, 2024",
        description: "Automatização de criação e revogação de acessos VPN, com controle granular por usuário.",
        technologies: ["Ansible", "Fortinet", "Terraform", "Linux", "VPN IPSec"],
        responsibilities: [
          "Criação de playbooks Ansible e templates de segurança",
          "Implementação de autenticação multifator e registro centralizado de logs"
        ],
        results: [
          "Acesso remoto seguro para equipes internacionais",
          "Zero incidentes críticos durante o período de operação"
        ]
      },
      {
        id: 6,
        title: "Balanceador HTTP(S) Regional",
        subtitle: "Google Cloud Load Balancer",
        company: "Projeto Enterprise",
        description: "Criação de balanceador interno regional que distribua tráfego entre back-ends em múltiplas zonas, com health checks automatizados e failover para aplicações internas críticas.",
        technologies: ["Google Cloud Internal HTTP(S) Load Balancer", "Compute Engine", "VPC", "Health Checks", "Cloud Monitoring", "Terraform"],
        responsibilities: [
          "Configuração do balanceador regional interno com roteamento inteligente",
          "Implementação de health checks automatizados e failover entre zonas",
          "Configuração de VPC, subnets e regras de firewall"
        ],
        results: [
          "Alta disponibilidade com failover automático entre zonas",
          "Redução perceptível de incidentes de indisponibilidade",
          "Melhoria na latência média para usuários internos"
        ]
      },
      {
        id: 7,
        title: "Migração PostgreSQL para Cloud",
        subtitle: "Database Migration Service + pglogical",
        company: "Projeto de Migração",
        description: "Migração de bases PostgreSQL on-premise para Cloud SQL com mínimo downtime, garantindo integridade e consistência dos dados.",
        technologies: ["Cloud SQL PostgreSQL", "Database Migration Service", "pglogical", "IAM", "VPC Peering", "TLS/SSL"],
        responsibilities: [
          "Planejamento e execução de migração com replicação contínua",
          "Configuração de scripts de validação e playbooks de rollback",
          "Implementação de conexões seguras TLS/SSL entre ambientes"
        ],
        results: [
          "Migração com near-zero downtime e cutover controlado",
          "Backups automáticos e pontos de restauração configurados",
          "Redução significativa do tempo gasto em manutenção e patches"
        ]
      },
      {
        id: 8,
        title: "Deploy Escalável em GKE",
        subtitle: "Kubernetes com AutoScaling",
        company: "Projeto de Containers",
        description: "Implantação de aplicação em GKE com HPA e Cluster Autoscaler, garantindo atualização contínua e estabilidade em picos de tráfego.",
        technologies: ["Google Kubernetes Engine", "Docker", "Horizontal Pod Autoscaler", "Cluster Autoscaler", "PodDisruptionBudget", "Jenkins"],
        responsibilities: [
          "Configuração de autoscaling horizontal e de cluster",
          "Implementação de rolling updates sem downtime",
          "Configuração de Pod Disruption Budget para estabilidade"
        ],
        results: [
          "Autoscaling confiável frente a picos de demanda",
          "Deploys sem downtime com rolling updates",
          "Melhoria na experiência do usuário durante picos de acesso"
        ]
      },
      {
        id: 9,
        title: "Projeto WAY - Sistema OpenRoad",
        subtitle: "Infraestrutura Multi-Cloud para Pedágios",
        company: "Projeto WAY, 2023",
        description: "Provisionamento de ambientes multi-cloud para sistema OpenRoad, integração com equipamentos de rede locais e monitoramento automatizado para processamento de transações de pedágio.",
        technologies: ["Terraform Multi-Cloud", "AWS", "DigitalOcean", "Mikrotik", "Cisco", "Datacom", "Grafana", "Prometheus"],
        responsibilities: [
          "Provisionamento multi-cloud com Terraform (AWS + DigitalOcean)",
          "Integração com roteadores Mikrotik, Cisco e Datacom para borda",
          "Implementação de monitoramento centralizado com alertas em tempo real"
        ],
        results: [
          "Rollout mais rápido de novos pontos de pedágio",
          "Infraestrutura resiliente e monitorada em tempo real",
          "Redução de custos operacionais por automação"
        ]
      },
      {
        id: 10,
        title: "Base de Conhecimento e Automação",
        subtitle: "GLPI + Confluence + Scripts",
        company: "Projeto de Suporte",
        description: "Criação de base de conhecimento centralizada e automação de fluxos de atendimento para reduzir tempo de resposta e padronizar procedimentos de suporte.",
        technologies: ["Confluence", "GLPI", "Python Scripts", "REST APIs", "Ansible Playbooks"],
        responsibilities: [
          "Desenvolvimento de base de conhecimento estruturada no Confluence",
          "Configuração do GLPI para gestão de tickets e ITSM",
          "Criação de scripts Python para automações de suporte"
        ],
        results: [
          "Redução de ~40% no tempo médio de resposta ao usuário",
          "Conhecimento documentado e facilmente acessível",
          "Melhoria significativa na satisfação interna do suporte"
        ]
      }
    ]
    },
    education: {
      title: "Formação Acadêmica",
      description: "Tecnólogo em Redes de Computadores e Tecnólogo em Análise e Desenvolvimento de Sistemas",
      degrees: [
        {
          degree: "Tecnólogo em Redes de Computadores",
          institution: "Universidade Anhembi Morumbi",
          year: "2022"
        },
        {
          degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
          institution: "FATEC São José dos Campos", 
          year: "2020"
        }
      ]
    },
    certifications: {
      title: "Certificações",
      credlyTitle: "Perfil no Credly",
      credlyDescription: "Veja todas as certificações verificadas e selos digitais no meu perfil Credly.",
      credlyButton: "Acessar Perfil Credly",
      list: [
        {
          name: "Microsoft Certified: Azure Fundamentals",
          issuer: "Microsoft",
          year: "2024"
        },
        {
          name: "Fortinet Certified Associate in Cybersecurity",
          issuer: "Fortinet",
          year: "2024"
        },
        {
          name: "Datadog Foundation",
          issuer: "Datadog",
          certId: "jnbnnguhqd",
          year: "2025"
        }
      ]
    },
    skills: {
      "Cloud & Infraestrutura": ["Azure", "GCP", "AWS", "UniFi"],
      "Automação & DevOps": ["Terraform", "Ansible", "Jenkins", "Docker"],
      "Segurança": ["Fortinet", "VPN", "IAM", "LGPD/GDPR"],
      "Power Platform & M365": ["Power Automate", "Power BI", "SharePoint", "Teams"],
      "Linguagens & Scripting": ["Python", "Bash", "PowerShell"],
      "Monitoramento": ["Zabbix", "Grafana", "Prometheus", "Datadog"]
    },
    languages: {
      title: "Idiomas", 
      description: "Português (nativo), Inglês (B2), Italiano (B1)",
      list: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "B2" },
        { name: "Italiano", level: "B1" }
      ]
    },
    contact: {
      title: "Entre em Contato",
      location: "📍 São José dos Campos, SP, Brasil",
      availability: "Disponível para trabalhar em qualquer fuso horário.",
      availableNow: "Disponível agora.",
      email: "juliovdks@gmail.com",
      linkedin: "linkedin.com/in/julio-cesar-de-faria-junior",
      credly: "credly.com/users/juliojr94",
      callToAction: "Pronto para colaborar? Vamos conversar sobre como minha experiência técnica pode impulsionar as iniciativas de TI da sua empresa.",
      profilesTitle: "Perfis Profissionais",
      linkedinLabel: "Perfil no LinkedIn",
      credlyLabel: "Certificações no Credly",
      overviewTitle: "Resumo Rápido",
      collaborationTitle: "Vamos Trabalhar Juntos",
      collaborationText: "Seja para automação de infraestrutura, migração para a nuvem, implementação de segurança ou liderança técnica, estou aqui para ajudar a transformar as operações de TI da sua empresa.",
      sendEmail: "Enviar E-mail",
      connectLinkedIn: "Conectar no LinkedIn",
      footer: "© 2025 Julio Cesar de Faria Junior. Desenvolvido com tecnologias web modernas",
      labels: {
        email: "Email",
        location: "Localização",
        availability: "Disponibilidade"
      }
    },
    cv: {
      url: "https://customer-assets.emergentagent.com/job_julio-devops/artifacts/m0wfoo6x_CV%20Julio%20Junior.pdf",
      filename: "CV_Julio_Cesar_Faria_Junior_PT.pdf"
    }
  },
  en: {
    navigation: {
      about: "About Me",
      experience: "Experience", 
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      contact: "Contact"
    },
    ui: {
      viewDetails: "View Details",
      technologyDegree: "Technology Degree",
      quickOverview: "Quick Overview",
      letsWorkTogether: "Let's Work Together",
      yearsExperience: "Years of Experience",
      usersSupported: "Users Supported",
      uptimeAchieved: "Uptime Achieved",
      processImprovement: "Process Improvement",
      current: "Current",
      previous: "Previous"
    },
    hero: {
      name: "Julio Cesar de Faria Junior",
      title: "IT Specialist",
      subtitle: "7+ years of experience in technical support, automation, and infrastructure management",
      description: "I'm Julio Cesar de Faria Junior, an IT Specialist with 7+ years of experience in technical support, automation, and infrastructure management across cloud and on-premise environments. I work with Microsoft 365, Power Platform, Terraform, Kubernetes, and UniFi, always aiming for efficiency, security, and innovation.",
      cta: "Get In Touch",
      timeZone: "Any Time Zone Available",
      downloadCV: "Download CV",
      timeZone: "Any Time Zone Available"
    },
    about: {
      title: "About Me",
      description: "I'm Julio Cesar de Faria Junior, an IT and DevOps Specialist with over 7 years of experience in infrastructure, automation, and cloud computing. My background combines technical expertise with a practical mindset, balancing operational efficiency and strategic problem-solving. I've worked across hybrid environments (on-prem and cloud), developing solutions on Azure, GCP, and AWS, and leveraging Kubernetes, Terraform, and CI/CD pipelines to build scalable and secure systems. I'm collaborative, proactive, and analytical, driven by the challenge of simplifying complex processes and turning them into automated, predictable workflows. Detail-oriented and innovation-focused, I thrive in dynamic environments where performance and precision matter. Currently, I'm expanding my international experience, improving my English and Italian fluency, and preparing for global opportunities in Cloud Engineering, Infrastructure, and Automation."
    },
    experience: [
      {
        id: 1,
        title: "IT Specialist",
        company: "Grupo CW Firpo",
        period: "Nov/2024 – Present",
        description: "UniFi network management and overall IT infrastructure",
        responsibilities: [
          "Manage DevOps activities, including automation tools, deployments, and version control.",
          "Validate recovery simulations, deployments, and other IT processes.",
          "Optimize IT costs and generate reports on performance and expenses.",
          "Oversee backup procedures, data recovery routines, and contingency plans.",
          "Monitor and maintain server infrastructure, ensuring availability and performance.",
          "Perform preventive maintenance and escalation processes in case of failures.",
          "Generate periodic reports, including server performance, security access, and backup status.",
          "Maintain an up-to-date inventory of IT assets, their lifecycle, and replacement plans.",
          "Prepare and update IT documentation, including assets, vendors, and access policies.",
          "Manage access control and password policies for critical systems and platforms.",
          "Ensure compliance with SLA agreements and manage customer-specific deliveries.",
          "Conduct handover meetings to review responsibilities, pending activities, and critical priorities.",
          "Facilitate effective communication with clients and ensure continuity of support during transitions."
        ]
      },
      {
        id: 2,
        title: "IT Security Administrator", 
        company: "MeedBr",
        period: "Apr/2024 – Aug/2024",
        description: "Policy alignment with LGPD/GDPR",
        responsibilities: [
          "Policy alignment with LGPD/GDPR",
          "VPN access automation and security monitoring",
          "Infrastructure implementation with Ansible and Terraform"
        ]
      },
      {
        id: 3,
        title: "ITOps Specialist",
        company: "Quero Educação",
        period: "Jan/2019 – Aug/2023",
        description: "Support for 1,000+ users",
        responsibilities: [
          "Support for 1,000+ users",
          "GCP deployments with Kubernetes and Terraform", 
          "CI/CD pipelines using Jenkins and Docker, reducing delivery times by 40%"
        ]
      },
      {
        id: 4,
        title: "IT Support Analyst",
        company: "Fundação Cassiano Ricardo",
        period: "Feb/2018 – Jan/2019",
        description: "On-site and remote support",
        responsibilities: [
          "On-site and remote support; Windows Server administration",
          "Internal trainings that increased digital literacy by 25%"
        ]
      }
    ],
    projects: {
      description: "Projetos reais demonstrando expertise técnica, resultados mensuráveis e soluções inovadoras em infraestrutura cloud, automação e domínios de segurança.",
      list: [
      {
        id: 1,
        title: "SharePoint Marco Zero",
        subtitle: "Corporate Collaborative Structure",
        company: "CW Firpo, 2025",
        description: "Complete rebuild of the SharePoint Online environment to centralize company documents and internal workflows.",
        technologies: ["SharePoint Online", "Power Automate", "Microsoft 365", "Excel", "Power BI"],
        responsibilities: [
          "Planning site and list architecture",
          "Building automated approval/versioning flows",
          "User training and standardized naming conventions"
        ],
        results: [
          "40% reduction in average document search time",
          "Stronger cross-department collaboration and better security policy compliance"
        ]
      },
      {
        id: 2,
        title: "Network & Server Monitoring",
        subtitle: "UniFi + Zabbix + Grafana",
        company: "Internal Project",
        description: "Deployment of proactive monitoring for hybrid infrastructure (cloud and on-prem), with real-time alerts.",
        technologies: ["UniFi Controller", "Zabbix", "Grafana", "PowerShell", "Python"],
        responsibilities: [
          "Custom Grafana dashboards",
          "Alert integrations via Telegram and corporate email",
          "Network performance monitoring (latency, uptime, load)"
        ],
        results: [
          "Proactive fault detection (MTTR cut from 45 to 12 minutes)",
          "99.9% uptime maintained on core servers"
        ]
      },
      {
        id: 3,
        title: "Cloud Provisioning Automation",
        subtitle: "Terraform + GCP",
        company: "Quero Educação, 2022",
        description: "Creation of Infrastructure as Code templates to standardize test and production environments on Google Cloud Platform.",
        technologies: ["GCP", "Terraform", "Jenkins", "Docker", "GitLab"],
        responsibilities: [
          "Terraform modules for VMs, load balancers, and storage",
          "CI/CD integration with Jenkins and Docker"
        ],
        results: [
          "40% faster environment delivery",
          "Full standardization and configuration traceability"
        ]
      },
      {
        id: 4,
        title: "Microsoft 365 Reporting Automation",
        subtitle: "PowerShell + Power BI",
        company: "Internal Project",
        description: "Automated scripts to extract usage metrics from Microsoft Teams, SharePoint, and Outlook.",
        technologies: ["PowerShell", "Microsoft Graph API", "Power BI", "Azure AD"],
        responsibilities: [
          "PowerShell scripting and Microsoft Graph API integration",
          "Power BI dashboards with scheduled refresh"
        ],
        results: [
          "Clear visibility of access, activity, and licenses",
          "60% reduction in manual workload for the IT team"
        ]
      },
      {
        id: 5,
        title: "Access Policy & Secure VPN",
        subtitle: "Security Automation",
        company: "MeedBr, 2024",
        description: "Automated provisioning and revocation of VPN access with granular user controls.",
        technologies: ["Ansible", "Fortinet", "Terraform", "Linux", "IPSec VPN"],
        responsibilities: [
          "Ansible playbooks and security templates",
          "MFA implementation and centralized logging"
        ],
        results: [
          "Secure remote access for international teams",
          "Zero critical incidents during the operational period"
        ]
      },
      {
        id: 6,
        title: "Regional HTTP(S) Load Balancer",
        subtitle: "Google Cloud Load Balancer",
        company: "Enterprise Project",
        description: "Build a regional internal HTTP(S) load balancer to distribute traffic across back-end instances in multiple zones, with automated health checks and failover.",
        technologies: ["Google Cloud Internal HTTP(S) Load Balancer", "Compute Engine", "VPC", "Health Checks", "Cloud Monitoring", "Terraform"],
        responsibilities: [
          "Configure regional internal load balancer with intelligent traffic routing",
          "Implement automated health checks and failover between zones",
          "Set up VPC, subnets and firewall rules configuration"
        ],
        results: [
          "Achieved high availability and automatic failover between zones",
          "Traffic automatically redirected from unhealthy instances",
          "Improved service stability and latency for internal users"
        ]
      },
      {
        id: 7,
        title: "PostgreSQL Migration to Cloud",
        subtitle: "Database Migration Service + pglogical",
        company: "Migration Project",
        description: "Migrate PostgreSQL databases from on-premises to Cloud SQL with minimal downtime and full data integrity.",
        technologies: ["Cloud SQL PostgreSQL", "Database Migration Service", "pglogical", "IAM", "VPC Peering", "TLS/SSL"],
        responsibilities: [
          "Plan and execute migration with continuous replication",
          "Configure migration validation scripts and rollback playbooks",
          "Implement secure TLS/SSL connections between environments"
        ],
        results: [
          "Near-zero downtime migration with controlled cutover",
          "Automated backups and restore points configured",
          "Reduced maintenance time and improved recovery objectives"
        ]
      },
      {
        id: 8,
        title: "Scalable GKE Deployment",
        subtitle: "Kubernetes with AutoScaling",
        company: "Container Project",
        description: "Deploy application on GKE with horizontal and cluster autoscaling and zero-downtime rolling updates.",
        technologies: ["Google Kubernetes Engine", "Docker", "Horizontal Pod Autoscaler", "Cluster Autoscaler", "PodDisruptionBudget", "Jenkins"],
        responsibilities: [
          "Configure horizontal and cluster autoscaling policies",
          "Implement zero-downtime rolling updates",
          "Set up Pod Disruption Budget for stability"
        ],
        results: [
          "Reliable autoscaling to handle demand peaks",
          "Seamless zero-downtime updates with rolling deployment",
          "Improved user experience during high-load periods"
        ]
      },
      {
        id: 9,
        title: "Project WAY - OpenRoad System",
        subtitle: "Multi-Cloud Infrastructure for Tolling",
        company: "Project WAY, 2023",
        description: "Build multi-cloud infrastructure for OpenRoad tolling system, integrating cloud automation with edge network devices.",
        technologies: ["Terraform Multi-Cloud", "AWS", "DigitalOcean", "Mikrotik", "Cisco", "Datacom", "Grafana", "Prometheus"],
        responsibilities: [
          "Multi-cloud provisioning with Terraform (AWS + DigitalOcean)",
          "Integration with Mikrotik, Cisco and Datacom routers for edge networking",
          "Implementation of centralized monitoring with real-time alerts"
        ],
        results: [
          "Faster rollout of new toll stations",
          "Resilient and real-time monitored infrastructure",
          "Reduced operational costs through automation"
        ]
      },
      {
        id: 10,
        title: "Knowledge Base and Support Automation",
        subtitle: "GLPI + Confluence + Scripts",
        company: "Support Project",
        description: "Build structured knowledge base and automate repetitive support workflows to reduce response times.",
        technologies: ["Confluence", "GLPI", "Python Scripts", "REST APIs", "Ansible Playbooks"],
        responsibilities: [
          "Develop structured knowledge base in Confluence",
          "Configure GLPI for ITSM and ticket management",
          "Create Python scripts for support automation"
        ],
        results: [
          "Reduced average response time by ~40%",
          "Centralized knowledge base improved consistency",
          "Improved internal user satisfaction significantly"
        ]
      }
    ]
    },
    education: {
      title: "Academic Background",
      description: "Technologist in Computer Networks and Technologist in Systems Analysis and Development",
      degrees: [
        {
          degree: "Computer Networks (Technologist)",
          institution: "Universidade Anhembi Morumbi",
          year: "2022"
        },
        {
          degree: "Systems Analysis & Development (Technologist)", 
          institution: "FATEC São José dos Campos",
          year: "2020"
        }
      ]
    },
    certifications: {
      title: "Certifications",
      credlyTitle: "Credly Profile",
      credlyDescription: "View all verified certifications and digital badges on my Credly profile.",
      credlyButton: "Visit Credly Profile",
      list: [
        {
          name: "Microsoft Certified: Azure Fundamentals",
          issuer: "Microsoft",
          year: "2024"
        },
        {
          name: "Fortinet Certified Associate in Cybersecurity",
          issuer: "Fortinet",
          year: "2024"
        },
        {
          name: "Datadog Foundation",
          issuer: "Datadog",
          certId: "jnbnnguhqd",
          year: "2025"
        }
      ]
    },
    skills: {
      "Cloud & Infrastructure": ["Azure", "GCP", "AWS", "UniFi"],
      "Automation & DevOps": ["Terraform", "Ansible", "Jenkins", "Docker"],
      "Security": ["Fortinet", "VPN", "IAM", "LGPD/GDPR"],
      "Power Platform & M365": ["Power Automate", "Power BI", "SharePoint", "Teams"],
      "Languages & Scripting": ["Python", "Bash", "PowerShell"],
      "Monitoring": ["Zabbix", "Grafana", "Prometheus", "Datadog"]
    },
    languages: {
      title: "Languages",
      description: "Portuguese (native), English (B2), Italian (B1)",
      list: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "B2" },
        { name: "Italian", level: "B1" }
      ]
    },
    contact: {
      title: "Get In Touch",
      location: "📍 São José dos Campos, SP, Brazil",
      availability: "Available to work in any time zone.",
      availableNow: "Available now.",
      email: "juliovdks@gmail.com",
      linkedin: "linkedin.com/in/julio-cesar-de-faria-junior",
      credly: "credly.com/users/juliojr94",
      callToAction: "Pronto para colaborar? Vamos conversar sobre como minha experiência técnica pode impulsionar as iniciativas de TI da sua organização.",
      profilesTitle: "Perfis Profissionais",
      linkedinLabel: "Perfil no LinkedIn",
      credlyLabel: "Certificações no Credly",
      overviewTitle: "Resumo Rápido",
      collaborationTitle: "Vamos Trabalhar Juntos",
      collaborationText: "Seja para automação de infraestrutura, migração para a nuvem, implementação de segurança ou liderança técnica, estou aqui para ajudar a transformar as operações de TI da sua empresa.",
      sendEmail: "Enviar E-mail",
      connectLinkedIn: "Conectar no LinkedIn",
      footer: "© 2025 Julio Cesar de Faria Junior. Desenvolvido com tecnologias web modernas",
      labels: {
        email: "Email",
        location: "Location",
        availability: "Availability"
      }
    },
    cv: {
      url: "https://customer-assets.emergentagent.com/job_julio-devops/artifacts/lcoplpk5_CV%20Julio%20Junior%20EN.pdf",
      filename: "CV_Julio_Cesar_Faria_Junior_EN.pdf"
    }
  },
  it: {
    navigation: {
      about: "Chi Sono",
      experience: "Esperienza",
      projects: "Progetti",
      education: "Formazione",
      skills: "Competenze", 
      contact: "Contatti"
    },
    ui: {
      viewDetails: "Visualizza Dettagli",
      technologyDegree: "Laurea Tecnologica",
      quickOverview: "Panoramica Rapida",
      letsWorkTogether: "Lavoriamo Insieme",
      yearsExperience: "Anni di Esperienza",
      usersSupported: "Utenti Supportati",
      uptimeAchieved: "Disponibilità Raggiunta",
      processImprovement: "Miglioramento Processi",
      current: "Attuale",
      previous: "Precedente"
    },
    hero: {
      name: "Julio Cesar de Faria Junior",
      title: "Specialista IT",
      subtitle: "Oltre 7 anni di esperienza nel supporto tecnico, automazione e gestione dell'infrastruttura",
      description: "Sono Julio Cesar de Faria Junior, specialista IT con oltre 7 anni di esperienza nel supporto tecnico, nell'automazione dei processi e nella gestione dell'infrastruttura in ambienti cloud e on-premise. Lavoro con Microsoft 365, Power Platform, Terraform, Kubernetes e UniFi, cercando sempre efficienza, sicurezza e innovazione.",
      cta: "Contattami",
      timeZone: "Disponibile in Qualsiasi Fuso Orario",
      downloadCV: "Scarica CV",
      timeZone: "Disponibile in Qualsiasi Fuso Orario"
    },
    about: {
      title: "Chi Sono",
      description: "Sono Julio Cesar de Faria Junior, specialista IT e DevOps con oltre 7 anni di esperienza in infrastruttura, automazione e cloud computing. La mia carriera unisce competenza tecnica e mentalità pratica, concentrandosi su efficienza operativa e risultati concreti. Ho lavorato in ambienti ibridi (on-premise e cloud), sviluppando soluzioni su Azure, GCP e AWS, utilizzando Kubernetes, Terraform e pipeline CI/CD per creare sistemi scalabili e sicuri. Mi considero una persona collaborativa, proattiva e analitica, appassionata nel risolvere problemi complessi e nel trasformare i processi quotidiani in flussi di lavoro automatizzati e affidabili. Curioso e orientato all'innovazione, do grande importanza alla qualità e alla precisione di ogni progetto. Attualmente sto ampliando la mia esperienza internazionale, migliorando la padronanza di inglese e italiano, e preparandomi per opportunità globali nel campo di Cloud, Infrastruttura e Automazione."
    },
    experience: [
      {
        id: 1,
        title: "IT Specialist",
        company: "Grupo CW Firpo",
        period: "nov/2024 – presente",
        description: "Gestione delle reti UniFi e dell'infrastruttura IT",
        responsibilities: [
          "Gestire attività DevOps, inclusi strumenti di automazione, deployment e controllo delle versioni.",
          "Validare simulazioni di recupero, deployment e altri processi IT.",
          "Ottimizzare i costi IT e generare report sulle prestazioni e sulle spese.",
          "Supervisionare le procedure di backup, le routine di recupero dati e i piani di emergenza.",
          "Monitorare e mantenere l'infrastruttura dei server, garantendo disponibilità e prestazioni.",
          "Eseguire manutenzione preventiva e processi di escalation in caso di guasti.",
          "Generare report periodici, inclusi prestazioni dei server, accessi di sicurezza e backup.",
          "Mantenere un inventario aggiornato degli asset IT, il loro ciclo di vita e i piani di sostituzione.",
          "Preparare e aggiornare la documentazione IT, inclusi asset, fornitori e politiche di accesso.",
          "Gestire il controllo degli accessi e le politiche delle password per sistemi e piattaforme critiche.",
          "Garantire la conformità agli accordi SLA e gestire le consegne specifiche per i clienti.",
          "Condurre riunioni di handover per rivedere responsabilità, attività in sospeso e priorità critiche.",
          "Facilitare una comunicazione efficace con i clienti e garantire la continuità del supporto durante le transizioni."
]

      },
      {
        id: 2,
        title: "IT Security Administrator",
        company: "MeedBr", 
        period: "apr/2024 – ago/2024",
        description: "Allineamento delle politiche interne al GDPR/LGPD",
       responsibilities: [
          "Installare, amministrare e risolvere i problemi delle soluzioni di sicurezza dell'organizzazione.",
          "Gestire e analizzare gli alert SIEM provenienti da strumenti come Wazuh, Manage Engine e Graylog.",
          "Monitorare i sistemi cloud e on-premise utilizzando Zabbix e Grafana.",
          "Gestire VPN e firewall come Sophos e Fortinet.",
          "Analizzare gli alert, aprire ticket e coordinarsi con il team responsabile dell'implementazione delle soluzioni.",
          "Utilizzare lo strumento di sicurezza basato su intelligenza artificiale Cylance per rilevamento e prevenzione delle minacce."
]

      },
      {
        id: 3,
        title: "ITOps Specialist",
        company: "Quero Educação",
        period: "gen/2019 – ago/2023",
        description: "Supporto a più di 1.000 utenti",
       responsibilities: [
          "Gestione di EC2 e reti VPC in AWS, oltre alla gestione utenti e sicurezza in Azure.",
          "Automazione dei processi con Terraform, garantendo risorse scalabili ed efficienti.",
          "Supervisione di Kubernetes per automatizzare deployment e gestione di applicazioni containerizzate.",
          "Gestione di progetti su Google Cloud Platform (GCP), inclusa la creazione di risorse e politiche di sicurezza.",
          "Implementazione della conformità al GDPR, allineando politiche di sicurezza e controllo accessi.",
          "Sviluppo di soluzioni automatizzate per il monitoraggio delle applicazioni.",
          "Gestione di pipeline CI/CD con Docker e Jenkins, facilitando lo sviluppo continuo.",
          "Configurazione di Zabbix con avvisi su Slack per migliorare la risposta agli incidenti.",
          "Gestione di strumenti come G-Suite, Jira, Slack, Metabase, Notion, Adobe, PowerBI, Office 365, GitHub, Google Ads e Google Analytics.",
          "Amministrazione del firewall Sophos per la sicurezza della rete e il controllo del traffico.",
          "Supporto remoto e in loco per hardware e software, garantendo continuità dei servizi.",
          "Gestione di chiamate con soluzioni VoIP basate su SIP per risolvere problemi tecnici.",
          "Gestione delle richieste L1, guidando i team nella risoluzione di problemi complessi.",
          "Implementazione dell'integrazione tra Active Directory e Ansible, automatizzando attività e migliorando la sicurezza.",
          "Aggiornamento di GLPI per garantire la continuità dei servizi di help desk.",
          "Competenza in Windows, distribuzioni Linux (Ubuntu, Xubuntu, Debian) e macOS (Catalina, Big Sur, Monterey).",
          "Gestione dell'infrastruttura di rete con focus su sicurezza e alta disponibilità, inclusa gestione VPN per lavoro remoto."
        ]

      },
      {
        id: 4,
        title: "IT Support Analyst",
        company: "Fundação Cultural Cassiano Ricardo",
        period: "feb/2018 – gen/2019",
        description: "Supporto tecnico on-site e remoto",
       responsibilities: [
          "Creazione di immagini ISO personalizzate (OS) per il deployment di massa tramite rete con servizio Ghost.",
          "Manutenzione hardware dei dispositivi.",
          "Manutenzione e configurazione del software.",
          "Amministrazione di Active Directory (AD), inclusa la creazione di gruppi, utenti, regole e politiche.",
          "Gestione del server di posta Zimbra.",
          "Installazione e configurazione di Microsoft Outlook.",
          "Configurazione e gestione del firewall pfSense.",
          "Supporto Help Desk e assistenza remota tramite TightVNC.",
          "Backup e ripristino delle e-mail degli utenti.",
          "Pulizia dei dati obsoleti dal server di posta elettronica.",
          "Supporto tecnico per utenti macOS e Windows.",
          "Gestione dei telefoni VoIP GrandStream, configurati con account SIP registrati sul server Asterisk.",
          "Supporto a più di 250 utenti."
        ]

      }
    ],
    projects: {
      description: "Projetos reais demonstrando expertise técnica, resultados mensuráveis e soluções inovadoras em infraestrutura cloud, automação e domínios de segurança.",
      list: [
      {
        id: 1,
        title: "SharePoint Marco Zero",
        subtitle: "Struttura Collaborativa Aziendale",
        company: "CW Firpo, 2025",
        description: "Ristrutturazione completa dell'ambiente SharePoint Online per centralizzare documenti e flussi interni.",
        technologies: ["SharePoint Online", "Power Automate", "Microsoft 365", "Excel", "Power BI"],
        responsibilities: [
          "Pianificazione dell'architettura di siti e liste",
          "Creazione di flussi automatici di approvazione e versionamento",
          "Formazione utenti e standardizzazione delle convenzioni di denominazione"
        ],
        results: [
          "Riduzione del 40% del tempo medio di ricerca dei documenti",
          "Miglior collaborazione tra reparti e maggiore conformità alle politiche di sicurezza"
        ]
      },
      {
        id: 2,
        title: "Monitoraggio di Rete e Server",
        subtitle: "UniFi + Zabbix + Grafana",
        company: "Progetto Interno",
        description: "Implementazione di un sistema di monitoraggio attivo per infrastrutture ibride (cloud e locali) con allarmi in tempo reale.",
        technologies: ["UniFi Controller", "Zabbix", "Grafana", "PowerShell", "Python"],
        responsibilities: [
          "Creazione di dashboard Grafana personalizzate",
          "Integrazione di allarmi con Telegram ed e-mail aziendale",
          "Monitoraggio di prestazioni di rete (latenza, uptime, carico)"
        ],
        results: [
          "Rilevamento proattivo dei guasti (tempo medio di risoluzione da 45 a 12 minuti)",
          "Mantenimento di un'uptime del 99,9% nei server principali"
        ]
      },
      {
        id: 3,
        title: "Automazione del Provisioning Cloud",
        subtitle: "Terraform + GCP",
        company: "Quero Educação, 2022",
        description: "Creazione di modelli di Infrastructure as Code (IaC) per standardizzare ambienti di test e produzione su Google Cloud Platform.",
        technologies: ["GCP", "Terraform", "Jenkins", "Docker", "GitLab"],
        responsibilities: [
          "Sviluppo di moduli Terraform per VM, bilanciatori e storage",
          "Integrazione di pipeline CI/CD con Jenkins e Docker"
        ],
        results: [
          "Consegna degli ambienti più rapida del 40%",
          "Standardizzazione e tracciabilità completa delle configurazioni"
        ]
      },
      {
        id: 4,
        title: "Automazione dei Report M365",
        subtitle: "PowerShell + Power BI",
        company: "Progetto Interno",
        description: "Sviluppo di script automatizzati per estrarre metriche di utilizzo da Microsoft Teams, SharePoint e Outlook.",
        technologies: ["PowerShell", "Microsoft Graph API", "Power BI", "Azure AD"],
        responsibilities: [
          "Scripting con PowerShell e integrazione con Microsoft Graph API",
          "Creazione di dashboard Power BI con aggiornamento automatico"
        ],
        results: [
          "Maggiore visibilità su accessi, attività e licenze",
          "Riduzione del 60% del carico manuale del team IT"
        ]
      },
      {
        id: 5,
        title: "Politiche di Accesso e VPN Sicura",
        subtitle: "Automazione di Sicurezza",
        company: "MeedBr, 2024",
        description: "Automazione della creazione e revoca degli accessi VPN, con controllo granulare per utente.",
        technologies: ["Ansible", "Fortinet", "Terraform", "Linux", "VPN IPSec"],
        responsibilities: [
          "Creazione di playbook Ansible e template di sicurezza",
          "Implementazione di autenticazione multifattore (MFA) e log centralizzati"
        ],
        results: [
          "Accesso remoto sicuro per team internazionali",
          "Zero incidenti critici durante il periodo operativo"
        ]
      },
      {
        id: 6,
        title: "Bilanciatore di Carico HTTP(S) Regionale",
        subtitle: "Google Cloud Load Balancer",
        company: "Progetto Enterprise",
        description: "Creazione di un bilanciatore di carico interno regionale per distribuire il traffico tra istanze back-end in diverse zone, con controlli di integrità e failover automatici.",
        technologies: ["Google Cloud Internal HTTP(S) Load Balancer", "Compute Engine", "VPC", "Health Checks", "Cloud Monitoring", "Terraform"],
        responsibilities: [
          "Configurazione del bilanciatore regionale interno con instradamento intelligente",
          "Implementazione di controlli di integrità automatici e failover tra zone",
          "Configurazione di VPC, subnet e regole firewall"
        ],
        results: [
          "Alta disponibilità e failover automatico tra le zone",
          "Traffico reindirizzato automaticamente dalle istanze non integre",
          "Maggiore stabilità e riduzione della latenza per utenti interni"
        ]
      },
      {
        id: 7,
        title: "Migrazione PostgreSQL verso Cloud",
        subtitle: "Database Migration Service + pglogical",
        company: "Progetto di Migrazione",
        description: "Migrazione di database PostgreSQL on-premise verso Cloud SQL con tempo di inattività minimo e piena integrità dei dati.",
        technologies: ["Cloud SQL PostgreSQL", "Database Migration Service", "pglogical", "IAM", "VPC Peering", "TLS/SSL"],
        responsibilities: [
          "Pianificazione ed esecuzione di migrazione con replica continua",
          "Configurazione di script di validazione e playbook di rollback",
          "Implementazione di connessioni sicure TLS/SSL tra ambienti"
        ],
        results: [
          "Migrazione quasi senza downtime con cutover controllato",
          "Backup automatici e punti di ripristino configurati",
          "Riduzione del tempo di manutenzione e miglioramento degli obiettivi di recupero"
        ]
      },
      {
        id: 8,
        title: "Distribuzione Scalabile su GKE",
        subtitle: "Kubernetes con AutoScaling",
        company: "Progetto Container",
        description: "Distribuzione di applicazione su GKE con scalabilità automatica orizzontale e di cluster e aggiornamenti senza downtime.",
        technologies: ["Google Kubernetes Engine", "Docker", "Horizontal Pod Autoscaler", "Cluster Autoscaler", "PodDisruptionBudget", "Jenkins"],
        responsibilities: [
          "Configurazione di policy di autoscaling orizzontale e di cluster",
          "Implementazione di aggiornamenti rolling senza downtime",
          "Configurazione di Pod Disruption Budget per stabilità"
        ],
        results: [
          "Scalabilità affidabile durante i picchi di domanda",
          "Aggiornamenti senza interruzioni con deployment rolling",
          "Migliore esperienza utente in condizioni di carico elevato"
        ]
      },
      {
        id: 9,
        title: "Progetto WAY - Sistema OpenRoad",
        subtitle: "Infrastruttura Multi-Cloud per Pedaggi",
        company: "Progetto WAY, 2023",
        description: "Costruzione di infrastruttura multi-cloud per sistema OpenRoad, integrando automazione cloud con dispositivi di rete in loco.",
        technologies: ["Terraform Multi-Cloud", "AWS", "DigitalOcean", "Mikrotik", "Cisco", "Datacom", "Grafana", "Prometheus"],
        responsibilities: [
          "Provisioning multi-cloud con Terraform (AWS + DigitalOcean)",
          "Integrazione con router Mikrotik, Cisco e Datacom per edge networking",
          "Implementazione di monitoraggio centralizzato con alert in tempo reale"
        ],
        results: [
          "Distribuzione più rapida di nuovi punti di pedaggio",
          "Infrastruttura resiliente e monitorata in tempo reale",
          "Riduzione dei costi operativi attraverso automazione"
        ]
      },
      {
        id: 10,
        title: "Base di Conoscenza e Automazione Supporto",
        subtitle: "GLPI + Confluence + Scripts",
        company: "Progetto Supporto",
        description: "Creazione di base di conoscenza strutturata e automazione dei flussi di supporto per ridurre i tempi di risposta.",
        technologies: ["Confluence", "GLPI", "Python Scripts", "REST APIs", "Ansible Playbooks"],
        responsibilities: [
          "Sviluppo di base di conoscenza strutturata in Confluence",
          "Configurazione di GLPI per ITSM e gestione ticket",
          "Creazione di script Python per automazione del supporto"
        ],
        results: [
          "Riduzione del tempo medio di risposta di circa il 40%",
          "Base di conoscenza centralizzata che migliora la coerenza",
          "Miglioramento significativo della soddisfazione utenti interni"
        ]
      }
    ]
    },
    education: {
      title: "Formazione Accademica",
      description: "Tecnologo in Reti di Computer e Tecnologo in Analisi e Sviluppo dei Sistemi",
      degrees: [
        {
          degree: "Laurea in Reti di Computer (Tecnologo)",
          institution: "Universidade Anhembi Morumbi",
          year: "2022"
        },
        {
          degree: "Laurea in Analisi e Sviluppo dei Sistemi (Tecnologo)",
          institution: "FATEC São José dos Campos",
          year: "2020"
        }
      ]
    },
    certifications: {
      title: "Certificazioni",
      credlyTitle: "Profilo su Credly",
      credlyDescription: "Visualizza tutte le certificazioni verificate e i badge digitali sul mio profilo Credly.",
      credlyButton: "Visita il Profilo Credly",
      list: [
        {
          name: "Microsoft Certified: Azure Fundamentals",
          issuer: "Microsoft", 
          year: "2024"
        },
        {
          name: "Fortinet Certified Associate in Cybersecurity",
          issuer: "Fortinet",
          year: "2024"
        },
        {
          name: "Datadog Foundation",
          issuer: "Datadog",
          certId: "jnbnnguhqd",
          year: "2025"
        }
      ]
    },
    skills: {
      "Cloud & Infrastruttura": ["Azure", "GCP", "AWS", "UniFi"],
      "Automazione & DevOps": ["Terraform", "Ansible", "Jenkins", "Docker"],
      "Sicurezza": ["Fortinet", "VPN", "IAM", "GDPR/LGPD"],
      "Power Platform & Microsoft 365": ["Power Automate", "Power BI", "SharePoint", "Teams"],
      "Linguaggi & Scripting": ["Python", "Bash", "PowerShell"],
      "Monitoraggio": ["Zabbix", "Grafana", "Prometheus", "Datadog"]
    },
    languages: {
      title: "Lingue",
      description: "Portoghese (madrelingua), Inglese (B2), Italiano (B1)",
      list: [
        { name: "Portoghese", level: "Madrelingua" },
        { name: "Inglese", level: "B2" },
        { name: "Italiano", level: "B1" }
      ]
    },
    contact: {
      title: "Contatti",
      location: "📍 São José dos Campos, SP, Brasile",
      availability: "Disponibile a lavorare in qualsiasi fuso orario.",
      availableNow: "Attualmente disponibile.",
      email: "juliovdks@gmail.com",
      linkedin: "linkedin.com/in/julio-cesar-de-faria-junior",
      credly: "credly.com/users/juliojr94",
      callToAction: "Pronto a collaborare? Parliamo di come la mia esperienza tecnica può sostenere e far crescere le iniziative IT della tua azienda.",
      profilesTitle: "Profili Professionali",
      linkedinLabel: "Profilo LinkedIn",
      credlyLabel: "Certificazioni su Credly",
      overviewTitle: "Panoramica Rapida",
      collaborationTitle: "Lavoriamo Insieme", 
      collaborationText: "Che si tratti di automazione dell'infrastruttura, migrazione al cloud, implementazione della sicurezza o leadership tecnica, sono qui per aiutarti a trasformare le operazioni IT della tua organizzazione.",
      sendEmail: "Invia Email",
      connectLinkedIn: "Connettiti su LinkedIn",
      labels: {
        email: "Email",
        location: "Località",
        availability: "Disponibilità"
      },
      footer: "© 2025 Julio Cesar de Faria Junior. Realizzato con tecnologie web moderne"
    },
    cv: {
      url: "https://customer-assets.emergentagent.com/job_julio-devops/artifacts/bzobl3d3_JulioCesarFariaJunior_CV_Italiano.pdf",
      filename: "CV_Julio_Cesar_Faria_Junior_IT.pdf"
    }
  }
};

export const languages = [
  { 
    code: 'pt', 
    name: 'Português', 
    flag: 'https://customer-assets.emergentagent.com/job_julio-devops/artifacts/l1e3z1a6_BR.png.png'
  },
  { 
    code: 'en', 
    name: 'English', 
    flag: 'https://customer-assets.emergentagent.com/job_julio-devops/artifacts/vxsw8gw6_UK.png.png'
  },
  { 
    code: 'it', 
    name: 'Italiano', 
    flag: 'https://customer-assets.emergentagent.com/job_julio-devops/artifacts/vmp2x5lt_IT.png.png'
  }
];