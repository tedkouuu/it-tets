import { brand } from "@/config/brand";

import { serviceBySlug, services, type ServiceSlug } from "./services";

type SubserviceSeed = {
  slug: string;
  title: string;
  summary: string;
  keywords: string[];
};

export type SubserviceData = {
  parentSlug: ServiceSlug;
  slug: string;
  title: string;
  summary: string;
  included: string[];
  technicalFocus: string[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
};

const subserviceSeeds: Record<ServiceSlug, SubserviceSeed[]> = {
  "it-support": [
    {
      slug: "proactive-monitoring",
      title: "Проактивен мониторинг",
      summary:
        "Наблюдаваме критичните системи в реално време и реагираме преди проблемите да повлияят на бизнеса.",
      keywords: ["проактивен мониторинг", "RMM", "IT поддръжка"],
    },
    {
      slug: "helpdesk-support",
      title: "Helpdesk обслужване",
      summary:
        "Осигуряваме бърз helpdesk процес с ясно приоритизиране на заявки и ефективна комуникация с екипите.",
      keywords: ["helpdesk", "IT поддръжка", "реакция при инциденти"],
    },
    {
      slug: "patch-management",
      title: "Patch management",
      summary:
        "Планираме и прилагаме актуализации контролирано, за да намалим риска от пробиви и нестабилност.",
      keywords: ["patch management", "актуализации", "сигурност"],
    },
    {
      slug: "endpoint-management",
      title: "Управление на крайни устройства",
      summary:
        "Централизирано управление на лаптопи, работни станции и политики за достъп с фокус върху сигурност.",
      keywords: ["endpoint management", "устройства", "IT политики"],
    },
    {
      slug: "infrastructure-documentation",
      title: "Документация и отчетност",
      summary:
        "Поддържаме актуална техническа документация и месечни отчети за пълна прозрачност към управлението.",
      keywords: ["IT документация", "отчетност", "управлявани услуги"],
    },
  ],
  networks: [
    {
      slug: "lan-wan-design",
      title: "LAN/WAN архитектура",
      summary:
        "Проектираме мрежова архитектура с висока скорост и устойчивост за офиси и разпределени екипи.",
      keywords: ["LAN", "WAN", "мрежова архитектура"],
    },
    {
      slug: "managed-wifi",
      title: "Корпоративен Wi-Fi",
      summary:
        "Изграждаме и управляваме Wi-Fi среди с контрол на покритие, капацитет и политики за сигурност.",
      keywords: ["Wi-Fi", "корпоративен Wi-Fi", "мрежова сигурност"],
    },
    {
      slug: "corporate-vpn",
      title: "Корпоративен VPN",
      summary:
        "Осигуряваме защитен отдалечен достъп чрез стабилни VPN конфигурации и контрол на идентичности.",
      keywords: ["VPN", "отдалечен достъп", "мрежова сигурност"],
    },
    {
      slug: "network-monitoring",
      title: "Мрежов мониторинг и оптимизация",
      summary:
        "Следим производителността на мрежата и оптимизираме latency, throughput и устойчивост при натоварване.",
      keywords: ["мрежов мониторинг", "latency", "throughput"],
    },
    {
      slug: "network-documentation",
      title: "Мрежова документация",
      summary:
        "Създаваме техническа документация за топологии, конфигурации и процедури при промени или инциденти.",
      keywords: ["мрежова документация", "LAN/WAN", "IT отчети"],
    },
  ],
  servers: [
    {
      slug: "physical-servers-storage",
      title: "Физически сървъри и storage",
      summary:
        "Изграждаме надеждна сървърна и storage основа за критични приложения и бизнес данни.",
      keywords: ["физически сървъри", "storage", "SAN/NAS"],
    },
    {
      slug: "virtualization-platforms",
      title: "Виртуализационни платформи",
      summary:
        "Внедряваме VMware, Hyper-V и KVM среди за по-добра гъвкавост, производителност и контрол.",
      keywords: ["виртуализация", "VMware", "Hyper-V", "KVM"],
    },
    {
      slug: "high-availability",
      title: "High availability решения",
      summary:
        "Проектираме HA сценарии и балансиране на натоварване за непрекъсваема работа на услугите.",
      keywords: ["high availability", "load balancing", "устойчивост"],
    },
    {
      slug: "capacity-optimization",
      title: "Оптимизация на ресурси",
      summary:
        "Оптимизираме CPU, RAM, storage и капацитет за по-висока ефективност и предвидими разходи.",
      keywords: ["оптимизация", "капацитет", "сървърна производителност"],
    },
    {
      slug: "backup-dr-integration",
      title: "Интеграция с Backup и DR",
      summary:
        "Свързваме сървърната инфраструктура с backup и DR процеси за надеждно възстановяване при аварии.",
      keywords: ["backup", "disaster recovery", "сървъри"],
    },
  ],
  cloud: [
    {
      slug: "iaas-paas-implementation",
      title: "IaaS/PaaS внедряване",
      summary:
        "Изграждаме cloud архитектури с IaaS и PaaS услуги, съобразени с реалните бизнес цели.",
      keywords: ["IaaS", "PaaS", "cloud услуги"],
    },
    {
      slug: "hybrid-cloud-architecture",
      title: "Хибриден облак",
      summary:
        "Комбинираме cloud и локални ресурси в единна среда с контрол на сигурността и достъпа.",
      keywords: ["хибриден облак", "cloud архитектура", "интеграция"],
    },
    {
      slug: "cloud-migration",
      title: "Cloud миграция",
      summary:
        "Планираме и изпълняваме миграции към облак поетапно, с минимален риск и прекъсване.",
      keywords: ["cloud миграция", "Azure", "AWS"],
    },
    {
      slug: "cloud-cost-optimization",
      title: "Оптимизация на cloud разходи",
      summary:
        "Управляваме потреблението и автоматизацията в облака, за да намалим разходите без компромис.",
      keywords: ["cost optimization", "cloud разходи", "автоматизация"],
    },
    {
      slug: "onprem-cloud-integration",
      title: "Интеграция с локална среда",
      summary:
        "Свързваме cloud платформи с локална инфраструктура за единен контрол и сигурен обмен на данни.",
      keywords: ["cloud интеграция", "локална инфраструктура", "хибридни среди"],
    },
  ],
  cybersecurity: [
    {
      slug: "endpoint-protection",
      title: "Endpoint защита",
      summary:
        "Защитаваме устройства и потребители чрез централизирани политики, мониторинг и реакция при заплахи.",
      keywords: ["endpoint защита", "киберсигурност", "информационна сигурност"],
    },
    {
      slug: "perimeter-security",
      title: "Firewall, VPN, IDS/IPS",
      summary:
        "Внедряваме периметрова защита с контрол на трафик, сегментация и сигурна свързаност.",
      keywords: ["firewall", "VPN", "IDS/IPS"],
    },
    {
      slug: "compliance-advisory",
      title: "GDPR и ISO 27001 насоки",
      summary:
        "Подпомагаме организациите с practically приложими стъпки за съответствие и намаляване на риска.",
      keywords: ["GDPR", "ISO 27001", "compliance"],
    },
    {
      slug: "mfa-access-control",
      title: "MFA и контрол на достъп",
      summary:
        "Изграждаме сигурен модел за идентичности, роли и многофакторна автентикация за критични системи.",
      keywords: ["MFA", "контрол на достъп", "identity management"],
    },
    {
      slug: "vulnerability-monitoring",
      title: "Мониторинг на уязвимости",
      summary:
        "Откриваме и приоритизираме уязвимости навреме, за да ограничим вероятността от успешни атаки.",
      keywords: ["уязвимости", "security monitoring", "киберсигурност"],
    },
  ],
  "backup-dr": [
    {
      slug: "local-backup",
      title: "Локален backup",
      summary:
        "Осигуряваме надеждно локално архивиране за критични системи с контрол на версиите и възстановяване.",
      keywords: ["локален backup", "архивиране", "възстановяване"],
    },
    {
      slug: "cloud-backup",
      title: "Cloud backup",
      summary:
        "Изграждаме облачни backup решения за географска устойчивост и по-висока защита на данните.",
      keywords: ["cloud backup", "архивиране", "данни"],
    },
    {
      slug: "hybrid-backup",
      title: "Хибридни backup сценарии",
      summary:
        "Комбинираме локално и cloud архивиране за балансирана защита, гъвкавост и контрол на риска.",
      keywords: ["хибриден backup", "backup стратегия", "DR"],
    },
    {
      slug: "disaster-recovery-plans",
      title: "Disaster Recovery планове",
      summary:
        "Създаваме DR планове с ясни роли, приоритети и стъпки за възстановяване на ключови услуги.",
      keywords: ["disaster recovery", "DR план", "RTO"],
    },
    {
      slug: "backup-dr-testing",
      title: "Тестове и мониторинг на възстановяване",
      summary:
        "Провеждаме регулярни тестове на backup и DR, за да валидираме реалната готовност при инцидент.",
      keywords: ["тестове на backup", "monitoring", "RPO"],
    },
  ],
  consulting: [
    {
      slug: "strategic-it-planning",
      title: "Стратегическо IT планиране",
      summary:
        "Дефинираме приоритети, бюджет и roadmap за устойчиво технологично развитие на организацията.",
      keywords: ["IT стратегия", "планиране", "roadmap"],
    },
    {
      slug: "digital-transformation",
      title: "Дигитална трансформация",
      summary:
        "Подпомагаме бизнес екипите при въвеждане на нови технологии и оптимизиране на процесите.",
      keywords: ["дигитална трансформация", "автоматизация", "оптимизация"],
    },
    {
      slug: "process-optimization",
      title: "Оптимизация на процеси",
      summary:
        "Анализираме текущите практики и предлагаме конкретни мерки за производителност и ефективност.",
      keywords: ["оптимизация", "процеси", "performance"],
    },
    {
      slug: "project-management",
      title: "IT проектен мениджмънт",
      summary:
        "Координираме внедрявания и миграции с ясен контрол на обхват, срокове, рискове и качество.",
      keywords: ["проектен мениджмънт", "внедряване", "миграция"],
    },
    {
      slug: "analytics-reporting",
      title: "Анализи и отчетност",
      summary:
        "Изготвяме управленски анализи и технически отчети, които подпомагат информирани бизнес решения.",
      keywords: ["IT анализ", "отчетност", "KPI"],
    },
  ],
  subscription: [
    {
      slug: "sla-guarantees",
      title: "SLA гаранции",
      summary:
        "Дефинираме ясни SLA параметри за реакция, възстановяване и достъпност според критичността.",
      keywords: ["SLA", "IT абонамент", "реакция при инциденти"],
    },
    {
      slug: "proactive-management",
      title: "Проактивно управление",
      summary:
        "Изпълняваме непрекъснат мониторинг и превантивни действия, които намаляват техническите прекъсвания.",
      keywords: ["проактивно управление", "мониторинг", "IT поддръжка"],
    },
    {
      slug: "transparent-reporting",
      title: "Отчети и прозрачност",
      summary:
        "Предоставяме регулярни SLA отчети и ясна картина за състоянието на инфраструктурата и рисковете.",
      keywords: ["SLA отчети", "прозрачност", "IT услуги"],
    },
    {
      slug: "scalable-packages",
      title: "Мащабируеми пакети",
      summary:
        "Адаптираме обхвата на услугите спрямо растежа на бизнеса и промените в технологичните нужди.",
      keywords: ["мащабируеми услуги", "IT пакет", "абонамент"],
    },
    {
      slug: "add-on-services",
      title: "Допълнителни услуги",
      summary:
        "Добавяме специализирани услуги при нови проекти, интеграции или повишени изисквания за сигурност.",
      keywords: ["допълнителни услуги", "интеграции", "IT проекти"],
    },
  ],
};

const buildSubservice = (
  parentSlug: ServiceSlug,
  seed: SubserviceSeed,
): SubserviceData => {
  const parent = serviceBySlug[parentSlug];

  return {
    parentSlug,
    slug: seed.slug,
    title: seed.title,
    summary: seed.summary,
    included: parent.activities.slice(0, 3),
    technicalFocus: parent.highlights,
    keywords: [...seed.keywords, ...parent.seoKeywords.slice(0, 2)],
    metaTitle: `${seed.title} | ${parent.navLabel} за бизнес`,
    metaDescription: `${seed.summary} Обадете се на ${brand.phone} за план и професионално изпълнение.`,
  };
};

export const subservicesByService = Object.fromEntries(
  services.map((service) => [
    service.slug,
    subserviceSeeds[service.slug].map((seed) => buildSubservice(service.slug, seed)),
  ]),
) as Record<ServiceSlug, SubserviceData[]>;

export const allSubservices: SubserviceData[] = Object.values(
  subservicesByService,
).flat();

export const getSubservice = (parentSlug: ServiceSlug, subserviceSlug: string) =>
  subservicesByService[parentSlug].find((item) => item.slug === subserviceSlug);

