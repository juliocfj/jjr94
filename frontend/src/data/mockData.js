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
    hero: {
      name: "Julio Cesar de Faria Junior",
      title: "Especialista em TI",
      subtitle: "7+ anos de experiência em suporte técnico, automação e gestão de infraestrutura",
      description: "Sou Julio Cesar de Faria Junior, especialista em TI com mais de 7 anos de experiência em suporte técnico, automação e gestão de infraestrutura em ambientes cloud e on-premise. Atuo com Microsoft 365, Power Platform, Terraform, Kubernetes e UniFi, buscando sempre eficiência, segurança e inovação.",
      cta: "Entre em Contato"
    },
    about: {
      title: "Quem Sou Eu",
      description: "Tenho facilidade em colaborar com equipes internacionais e comunicar-me fluentemente em inglês, com vivência em ambientes multiculturais e remotos. Minha paixão é criar soluções tecnológicas que fazem a diferença no dia a dia das organizações."
    },
    experience: [
      {
        id: 1,
        title: "IT Specialist",
        company: "Grupo CW Firpo",
        period: "nov/2024 – atual",
        description: "Gerenciamento de redes UniFi e infraestrutura de TI",
        responsibilities: [
          "Gerenciamento de redes UniFi e infraestrutura de TI",
          "Automação de processos e documentação técnica", 
          "Criação de soluções colaborativas em SharePoint Online",
          "Garantia de alta disponibilidade e compliance com SLA"
        ]
      },
      {
        id: 2,
        title: "IT Security Administrator",
        company: "MeedBr",
        period: "abr/2024 – ago/2024",
        description: "Alinhamento de políticas à LGPD/GDPR",
        responsibilities: [
          "Alinhamento de políticas à LGPD/GDPR",
          "Automação de acessos VPN e monitoramento de segurança",
          "Implementação de infraestrutura com Ansible e Terraform"
        ]
      },
      {
        id: 3,
        title: "ITOps Specialist",
        company: "Quero Educação",
        period: "jan/2019 – ago/2023",
        description: "Suporte a mais de 1.000 usuários",
        responsibilities: [
          "Suporte a mais de 1.000 usuários",
          "Implantação de GCP com Kubernetes e Terraform",
          "Criação de pipelines CI/CD com Jenkins e Docker, reduzindo entregas em 40%"
        ]
      },
      {
        id: 4,
        title: "IT Support Analyst",
        company: "Fundação Cassiano Ricardo", 
        period: "fev/2018 – jan/2019",
        description: "Suporte presencial e remoto",
        responsibilities: [
          "Suporte presencial e remoto, administração de Windows Server",
          "Treinamentos internos que aumentaram a alfabetização digital em 25%"
        ]
      }
    ],
    projects: [
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
      }
    ],
    education: [
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
    ],
    certifications: [
      {
        name: "Microsoft Certified: Azure Administrator Associate",
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
    ],
    skills: {
      "Cloud & Infraestrutura": ["Azure", "GCP", "AWS", "UniFi"],
      "Automação & DevOps": ["Terraform", "Ansible", "Jenkins", "Docker"],
      "Segurança": ["Fortinet", "VPN", "IAM", "LGPD/GDPR"],
      "Power Platform & M365": ["Power Automate", "Power BI", "SharePoint", "Teams"],
      "Linguagens & Scripting": ["Python", "Bash", "PowerShell"],
      "Monitoramento": ["Zabbix", "Grafana", "Prometheus", "Datadog"]
    },
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Avançado (B2/B2+)" },
      { name: "Italiano", level: "Intermediário (B1)" }
    ],
    contact: {
      location: "📍 São José dos Campos, SP, Brasil",
      availability: "Disponível para trabalho remoto e fuso horário dos EUA",
      email: "juliovdks@gmail.com",
      linkedin: "linkedin.com/in/julio-cesar-de-faria-junior",
      credly: "credly.com/users/juliojr94"
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
    hero: {
      name: "Julio Cesar de Faria Junior",
      title: "IT Specialist",
      subtitle: "7+ years of experience in technical support, automation, and infrastructure management",
      description: "I'm Julio Cesar de Faria Junior, an IT Specialist with 7+ years of experience in technical support, automation, and infrastructure management across cloud and on-premise environments. I work with Microsoft 365, Power Platform, Terraform, Kubernetes, and UniFi, always aiming for efficiency, security, and innovation.",
      cta: "Get In Touch"
    },
    about: {
      title: "About Me",
      description: "I collaborate easily with international teams and communicate fluently in English, with solid experience in multicultural, remote environments. My passion is creating technological solutions that make a difference in organizations' daily operations."
    },
    experience: [
      {
        id: 1,
        title: "IT Specialist",
        company: "Grupo CW Firpo",
        period: "Nov/2024 – Present",
        description: "UniFi network management and overall IT infrastructure",
        responsibilities: [
          "UniFi network management and overall IT infrastructure",
          "Process automation and technical documentation",
          "Collaborative solutions in SharePoint Online",
          "High availability and SLA compliance"
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
    projects: [
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
      }
    ],
    education: [
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
    ],
    certifications: [
      {
        name: "Microsoft Certified: Azure Administrator Associate",
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
    ],
    skills: {
      "Cloud & Infrastructure": ["Azure", "GCP", "AWS", "UniFi"],
      "Automation & DevOps": ["Terraform", "Ansible", "Jenkins", "Docker"],
      "Security": ["Fortinet", "VPN", "IAM", "LGPD/GDPR"],
      "Power Platform & M365": ["Power Automate", "Power BI", "SharePoint", "Teams"],
      "Languages & Scripting": ["Python", "Bash", "PowerShell"],
      "Monitoring": ["Zabbix", "Grafana", "Prometheus", "Datadog"]
    },
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Advanced (B2/B2+)" },
      { name: "Italian", level: "Intermediate (B1)" }
    ],
    contact: {
      location: "📍 São José dos Campos, SP, Brazil",
      availability: "Available for remote work and U.S. business hours",
      email: "juliovdks@gmail.com",
      linkedin: "linkedin.com/in/julio-cesar-de-faria-junior",
      credly: "credly.com/users/juliojr94"
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
    hero: {
      name: "Julio Cesar de Faria Junior",
      title: "Specialista IT",
      subtitle: "Oltre 7 anni di esperienza nel supporto tecnico, automazione e gestione dell'infrastruttura",
      description: "Sono Julio Cesar de Faria Junior, specialista IT con oltre 7 anni di esperienza nel supporto tecnico, nell'automazione dei processi e nella gestione dell'infrastruttura in ambienti cloud e on-premise. Lavoro con Microsoft 365, Power Platform, Terraform, Kubernetes e UniFi, cercando sempre efficienza, sicurezza e innovazione.",
      cta: "Contattami"
    },
    about: {
      title: "Chi Sono",
      description: "Collaboro facilmente con team internazionali e comunico fluentemente in inglese, con esperienza in contesti multiculturali e remoti. La mia passione è creare soluzioni tecnologiche che fanno la differenza nelle operazioni quotidiane delle organizzazioni."
    },
    experience: [
      {
        id: 1,
        title: "IT Specialist",
        company: "Grupo CW Firpo",
        period: "nov/2024 – presente",
        description: "Gestione delle reti UniFi e dell'infrastruttura IT",
        responsibilities: [
          "Gestione delle reti UniFi e dell'infrastruttura IT",
          "Automazione dei processi e documentazione tecnica",
          "Sviluppo di soluzioni collaborative in SharePoint Online",
          "Garanzia di alta disponibilità e conformità agli SLA"
        ]
      },
      {
        id: 2,
        title: "IT Security Administrator",
        company: "MeedBr", 
        period: "apr/2024 – ago/2024",
        description: "Allineamento delle politiche interne al GDPR/LGPD",
        responsibilities: [
          "Allineamento delle politiche interne al GDPR/LGPD",
          "Automazione degli accessi VPN e monitoraggio della sicurezza",
          "Implementazione di infrastruttura con Ansible e Terraform"
        ]
      },
      {
        id: 3,
        title: "ITOps Specialist",
        company: "Quero Educação",
        period: "gen/2019 – ago/2023",
        description: "Supporto a più di 1.000 utenti",
        responsibilities: [
          "Supporto a più di 1.000 utenti",
          "Implementazione di infrastruttura GCP con Kubernetes e Terraform",
          "Creazione di pipeline CI/CD con Jenkins e Docker, riducendo i tempi di consegna del 40%"
        ]
      },
      {
        id: 4,
        title: "IT Support Analyst",
        company: "Fundação Cultural Cassiano Ricardo",
        period: "feb/2018 – gen/2019",
        description: "Supporto tecnico on-site e remoto",
        responsibilities: [
          "Supporto tecnico on-site e remoto, amministrazione di Windows Server",
          "Formazione interna che ha aumentato del 25% la competenza digitale degli utenti"
        ]
      }
    ],
    projects: [
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
      }
    ],
    education: [
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
    ],
    certifications: [
      {
        name: "Microsoft Certified: Azure Administrator Associate",
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
    ],
    skills: {
      "Cloud & Infrastruttura": ["Azure", "GCP", "AWS", "UniFi"],
      "Automazione & DevOps": ["Terraform", "Ansible", "Jenkins", "Docker"],
      "Sicurezza": ["Fortinet", "VPN", "IAM", "GDPR/LGPD"],
      "Power Platform & Microsoft 365": ["Power Automate", "Power BI", "SharePoint", "Teams"],
      "Linguaggi & Scripting": ["Python", "Bash", "PowerShell"],
      "Monitoraggio": ["Zabbix", "Grafana", "Prometheus", "Datadog"]
    },
    languages: [
      { name: "Portoghese", level: "Madrelingua" },
      { name: "Inglese", level: "Avanzato (B2/B2+)" },
      { name: "Italiano", level: "Intermedio (B1)" }
    ],
    contact: {
      location: "📍 São José dos Campos, SP, Brasile",
      availability: "Disponibile per lavoro remoto e orari commerciali USA",
      email: "juliovdks@gmail.com",
      linkedin: "linkedin.com/in/julio-cesar-de-faria-junior",
      credly: "credly.com/users/juliojr94"
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