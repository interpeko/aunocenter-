export const SITE = {
  name: 'AUNO Center',
  descriptor: 'Global Research Support and Capacity Building',
  tagline: 'One World. One Research. One Center of Excellence.',
  email: 'aunocenter@gmail.com',
  phone: '+1 (940) 730-6443',
  founder: {
    name: 'Mustafa Saadabi',
    title: 'Founder and Director',
    affiliation: 'Faculty of Medicine',
    word: 'AUNO Center was created with the belief that research should connect every dimension of life. Human beings, animals, the earth, and nature are deeply interconnected. AUNO Center brings these fields together through multidisciplinary research, scientific collaboration, responsible innovation, education, and knowledge exchange. Our goal is to support research that contributes to human health, animal wellbeing, environmental protection, sustainable development, and a better future for life on our planet.'
  },
  description:
    'AUNO Center is an interdisciplinary global center connecting medicine, surgery, research, education, innovation, human health, animal health, earth, nature, and the environment.'
} as const;

export const socials = [
  {
    name: 'WhatsApp',
    handle: 'AUNO Center Channel',
    href: 'https://whatsapp.com/channel/0029Vb8MkN93wtb5LNUftx0r',
    icon: 'whatsapp',
    color: '#25D366'
  },
  {
    name: 'Instagram',
    handle: '@aunocenter',
    href: 'https://www.instagram.com/aunocenter?igsh=a3dzeHVvY2Fpem82&utm_source=qr',
    icon: 'instagram',
    color: '#E4405F'
  },
  {
    name: 'Facebook',
    handle: 'AUNO Center',
    href: 'https://www.facebook.com/share/1BWnxuKcHu/?mibextid=wwXIfr',
    icon: 'facebook',
    color: '#1877F2'
  },
  {
    name: 'LinkedIn',
    handle: 'AUNO Center',
    href: 'https://www.linkedin.com/company/auno-center/',
    icon: 'linkedin',
    color: '#0A66C2'
  },
  {
    name: 'TikTok',
    handle: '@aunocenter',
    href: 'https://vt.tiktok.com/ZSX8c6aS2/',
    icon: 'tiktok',
    color: '#111111'
  },
  {
    name: 'Telegram',
    handle: '@aunocenter',
    href: 'https://t.me/aunocenter',
    icon: 'telegram',
    color: '#26A5E4'
  },
  {
    name: 'X',
    handle: '@aunocenter',
    href: 'https://x.com/aunocenter?s=11',
    icon: 'x',
    color: '#111111'
  },
  {
    name: 'YouTube',
    handle: '@aunocenter',
    href: 'https://youtube.com/@aunocenter?si=NYiGhr3svcKLw2qM',
    icon: 'youtube',
    color: '#FF0000'
  },
  {
    name: 'Email',
    handle: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: 'gmail',
    color: '#7A365A'
  }
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

export const navGroups: readonly NavItem[] = [
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'About AUNO Center', href: '/about/' },
      { label: 'Founder & Director', href: '/about/#founder' },
      { label: 'Vision, mission & values', href: '/about/vision-mission/' },
      { label: 'Research ethics & integrity', href: '/research-ethics-integrity/' },
      { label: 'Join AUNO Center', href: '/join/' }
    ]
  },
  {
    label: 'Research services',
    href: '/services/',
    children: [
      { label: 'All research services', href: '/services/' },
      { label: 'Methods & measurement', href: '/services/#methods-measurement' },
      { label: 'Evidence, writing & publication', href: '/services/#evidence-writing' },
      { label: 'Applied & institutional support', href: '/services/#applied-institutional' }
    ]
  },
  {
    label: 'Programs',
    href: '/courses/',
    children: [
      { label: 'Courses', href: '/courses/' },
      { label: 'Training & capacity building', href: '/training/' },
      { label: 'Future Development Program', href: '/future-development-program/' },
      { label: 'PubMed search', href: '/pubmed-search/' }
    ]
  },
  {
    label: 'Research focus',
    href: '/healthcare-research/',
    children: [
      { label: 'Healthcare research', href: '/healthcare-research/' },
      { label: 'Institutional research support', href: '/institutional-research-support/' },
      { label: 'International collaboration', href: '/international-collaboration/' }
    ]
  },
  {
    label: 'Resources',
    href: '/resources/',
    children: [
      { label: 'Resource library', href: '/resources/' },
      { label: 'Academic practice framework', href: '/academic-standards/' },
      { label: 'Editorial & corrections policy', href: '/editorial-policy/' },
      { label: 'Projects & publications', href: '/projects-publications/' },
      { label: 'News & events', href: '/news-events/' },
      { label: 'Media & YouTube', href: '/media/' }
    ]
  }
] as const;

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  lead: string;
  when: string[];
  includes: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
  boundary: string;
  accent: string;
};

export const services: Service[] = [
  {
    slug: 'research-design-methodology',
    number: '01',
    title: 'Research Design & Methodology',
    shortTitle: 'Design & methodology',
    summary: 'Turn an important topic into a coherent, feasible, and ethically responsible research plan.',
    lead:
      'Build a study in which the question, design, participants, measures, data collection, and analysis work together.',
    when: [
      'A topic is important but the research question remains broad.',
      'Several study designs appear possible and the trade-offs are unclear.',
      'Sampling, variables, outcomes, bias, or feasibility need clarification.',
      'A protocol or methods section needs a structured review.',
      'Real constraints require a more focused and defensible design.'
    ],
    includes: [
      'Research question, objective, and hypothesis refinement',
      'Study-design comparison and documented rationale',
      'Conceptual or analytical framework development',
      'Population, eligibility, and sampling considerations',
      'Variable, exposure, outcome, and measurement planning',
      'Bias, confounding, feasibility, and limitation review',
      'Alignment with data collection and the analysis plan',
      'Protocol and methods-section feedback',
      'Identification of relevant reporting guidance'
    ],
    deliverables: [
      'Methodology consultation summary',
      'Study-design decision matrix',
      'Research question and objective map',
      'Methods roadmap',
      'Structured protocol comments',
      'Prioritised next-step checklist'
    ],
    process: [
      { title: 'Frame', text: 'Clarify the problem, intended contribution, audience, and practical constraints.' },
      { title: 'Compare', text: 'Examine plausible designs and their implications for evidence, bias, ethics, and feasibility.' },
      { title: 'Align', text: 'Connect the question to participants, measures, data collection, analysis, and reporting.' },
      { title: 'Document', text: 'Record the selected approach, rationale, limitations, and next decisions.' }
    ],
    boundary:
      'Methodological support does not replace ethics review, institutional approval, legal advice, or discipline-specific professional judgement. The researcher must confirm all local requirements.',
    accent: 'violet'
  },
  {
    slug: 'statistical-analysis',
    number: '02',
    title: 'Statistical Analysis',
    shortTitle: 'Statistical analysis',
    summary: 'Plan and communicate analysis that fits the question, design, and quality of the available data.',
    lead:
      'Use statistical methods that answer the research question, respect the study design, and communicate uncertainty honestly.',
    when: [
      'An analysis plan is needed before data collection begins.',
      'A dataset needs a structured readiness and quality review.',
      'The appropriate descriptive or inferential method is unclear.',
      'Model assumptions, missingness, and limitations need assessment.',
      'Tables, figures, or results text require clearer communication.'
    ],
    includes: [
      'Statistical analysis plan development',
      'Variable definitions, coding, and data-dictionary review',
      'Data-quality and missing-data guidance',
      'Descriptive analysis and clear data displays',
      'Method selection, rationale, and assumption checks',
      'Effect estimates and uncertainty',
      'Regression or other appropriate modelling',
      'Sensitivity and subgroup analysis planning',
      'Reproducibility and documentation guidance',
      'Results interpretation in context'
    ],
    deliverables: [
      'Statistical analysis plan',
      'Data-readiness findings',
      'Documented or reproducible workflow where agreed',
      'Tables and figures',
      'Annotated analysis output',
      'Plain-language findings and limitations'
    ],
    process: [
      { title: 'Define', text: 'Confirm the research question, outcomes, variables, design, and intended estimands.' },
      { title: 'Inspect', text: 'Review structure, coding, completeness, assumptions, and data-quality risks.' },
      { title: 'Analyse', text: 'Apply the agreed methods with documented decisions and reproducible steps.' },
      { title: 'Interpret', text: 'Explain estimates, uncertainty, limitations, and practical meaning without overstatement.' }
    ],
    boundary:
      'Statistical methods cannot repair fundamentally unsuitable data or guarantee a preferred result. Findings must be interpreted alongside design, data quality, assumptions, uncertainty, and subject-matter knowledge.',
    accent: 'teal'
  },
  {
    slug: 'questionnaire-development',
    number: '03',
    title: 'Questionnaire Development',
    shortTitle: 'Questionnaire development',
    summary: 'Create clear, purposeful instruments with appropriate constructs, response options, flow, and testing plans.',
    lead:
      'Design a questionnaire in which every item serves a defined purpose and every response can be interpreted responsibly.',
    when: [
      'A new survey instrument must be built from clear objectives.',
      'An existing questionnaire needs review or careful adaptation.',
      'Items, scales, routing, or respondent burden are causing concern.',
      'A pilot, cognitive testing, reliability, or validity plan is needed.',
      'Coding, scoring, and documentation should be specified before launch.'
    ],
    includes: [
      'Construct and objective mapping',
      'Review of existing instruments and permissions',
      'Item wording and response-scale design',
      'Order, routing, accessibility, and respondent burden',
      'Translation and cultural-adaptation planning',
      'Expert review and cognitive-interview planning',
      'Pilot-testing, reliability, and validity strategy',
      'Scoring, coding, administration, and documentation guidance'
    ],
    deliverables: [
      'Construct-to-item matrix',
      'Draft or revised questionnaire',
      'Reviewer comments with rationale',
      'Pilot-testing protocol',
      'Coding and scoring guide',
      'Instrument-development checklist'
    ],
    process: [
      { title: 'Map', text: 'Define constructs, objectives, respondents, context, and intended use.' },
      { title: 'Draft', text: 'Develop items, scales, instructions, sequence, and routing.' },
      { title: 'Test', text: 'Plan expert review, cognitive interviews, piloting, and measurement evaluation.' },
      { title: 'Refine', text: 'Document revisions, scoring, administration, and limitations.' }
    ],
    boundary:
      'A newly written or modified questionnaire should not be described as validated without appropriate evidence. Permission may be required before reproducing, translating, or adapting an existing instrument.',
    accent: 'gold'
  },
  {
    slug: 'results-interpretation',
    number: '04',
    title: 'Results Interpretation',
    shortTitle: 'Results interpretation',
    summary: 'Explain findings, uncertainty, limitations, and practical meaning without overstating the evidence.',
    lead: 'Explain what the findings show, what they do not show, and why the distinction matters.',
    when: [
      'Statistical output is available but its research meaning is unclear.',
      'Tables, figures, and narrative results may not agree.',
      'Statistical and practical or clinical relevance need separation.',
      'The discussion needs a defensible structure.',
      'Causal language, limitations, or recommendations may be too strong.'
    ],
    includes: [
      'Review of tables, figures, and statistical output',
      'Interpretation of estimates, effect sizes, intervals, and uncertainty',
      'Consistency checks across text and displays',
      'Statistical versus practical or clinical relevance',
      'Comparison with the question and existing evidence',
      'Alternative explanations and limitations',
      'Avoidance of causal overstatement',
      'Plain-language summaries and discussion structure'
    ],
    deliverables: [
      'Annotated results review',
      'Interpretation memorandum',
      'Table and figure recommendations',
      'Discussion outline',
      'Evidence-aligned plain-language summary'
    ],
    process: [
      { title: 'Read', text: 'Review output in relation to the original question, design, and analysis plan.' },
      { title: 'Check', text: 'Test internal consistency, assumptions, uncertainty, and plausible alternatives.' },
      { title: 'Contextualise', text: 'Distinguish numerical results from practical meaning and existing evidence.' },
      { title: 'Communicate', text: 'Shape balanced results, discussion, limitations, and conclusions.' }
    ],
    boundary:
      'Interpretation will not be altered to make findings appear stronger, more novel, or more conclusive than the evidence allows. Null, uncertain, or unexpected findings remain meaningful when reported transparently.',
    accent: 'blue'
  },
  {
    slug: 'pre-submission-review',
    number: '05',
    title: 'Pre-submission Review',
    shortTitle: 'Pre-submission review',
    summary: 'Strengthen manuscript structure, reporting completeness, methodological clarity, and internal consistency.',
    lead: 'Give a manuscript a structured final review before independent submission.',
    when: [
      'A complete draft needs an independent, structured review.',
      'Methods and reporting may not meet relevant guidance.',
      'Text, tables, figures, and supplements need consistency checks.',
      'Claims, limitations, and conclusions require recalibration.',
      'A revised manuscript needs a clear response-to-reviewer structure.'
    ],
    includes: [
      'Question, objective, and manuscript alignment',
      'Abstract, introduction, methods, results, and discussion structure',
      'Methodological reporting completeness',
      'Text, table, figure, and supplement consistency',
      'Appropriate reporting-guideline checks',
      'Claims, limitations, conclusion, and citation consistency',
      'Language clarity, terminology, and submission-material checks',
      'Response-to-reviewer structure where relevant'
    ],
    deliverables: [
      'Prioritised review memorandum',
      'Annotated manuscript',
      'Reporting-checklist findings',
      'Consistency and readiness checklist',
      'Revision roadmap'
    ],
    process: [
      { title: 'Orient', text: 'Confirm article type, audience, target requirements, and review priorities.' },
      { title: 'Review', text: 'Assess structure, methods, reporting completeness, evidence, and language.' },
      { title: 'Prioritise', text: 'Separate essential corrections from high-value and optional refinements.' },
      { title: 'Prepare', text: 'Provide a clear revision path while preserving author responsibility.' }
    ],
    boundary:
      'Review does not guarantee acceptance or replace journal instructions, peer review, or author responsibility. AUNO Center does not support fabricated content, concealed authorship, plagiarism, citation manipulation, or misleading reporting.',
    accent: 'rose'
  },
  {
    slug: 'literature-review-support',
    number: '06',
    title: 'Literature Review Support',
    shortTitle: 'Literature review support',
    summary: 'Build transparent search, screening, appraisal, extraction, and synthesis workflows.',
    lead:
      'Move from an unstructured search to a transparent, reproducible approach to finding and synthesising evidence.',
    when: [
      'The appropriate review type and question framework are uncertain.',
      'Eligibility criteria or protocol structure need clarification.',
      'A search strategy must be transparent and reproducible.',
      'Screening, extraction, appraisal, or synthesis workflows need design.',
      'Reporting and future search updates should be planned from the start.'
    ],
    includes: [
      'Review type and question-framework selection',
      'Eligibility criteria and protocol planning',
      'Database and information-source selection',
      'Search concepts and search-string development',
      'Citation management, deduplication, and screening procedures',
      'Data-extraction and critical-appraisal planning',
      'Narrative or quantitative synthesis planning',
      'Flow diagrams, transparent reporting, and search-update guidance'
    ],
    deliverables: [
      'Review protocol outline',
      'Draft search strategy',
      'Eligibility and screening guide',
      'Data-extraction template',
      'Appraisal framework',
      'Evidence-synthesis roadmap'
    ],
    process: [
      { title: 'Specify', text: 'Define the review type, question, scope, sources, and eligibility criteria.' },
      { title: 'Search', text: 'Develop, test, document, and refine a reproducible search approach.' },
      { title: 'Organise', text: 'Set consistent screening, extraction, appraisal, and decision workflows.' },
      { title: 'Synthesise', text: 'Plan a transparent synthesis and reporting route proportionate to the evidence.' }
    ],
    boundary:
      'Search results depend on database access, coverage, indexing, terminology, dates, and agreed scope. Researchers remain responsible for final screening, eligibility, interpretation, attribution, and compliance with review standards.',
    accent: 'green'
  },
  {
    slug: 'scientific-writing',
    number: '07',
    title: 'Scientific Writing',
    shortTitle: 'Scientific writing',
    summary: 'Communicate research with precise structure, evidence-aligned language, transparent reporting, and appropriate attribution.',
    lead: 'Develop clear scientific writing while preserving the researcher’s authorship, voice, responsibility, and intellectual contribution.',
    when: [
      'A research report needs a coherent IMRaD or discipline-appropriate structure.',
      'Methods, results, or discussion sections are difficult to communicate clearly.',
      'Claims, terminology, flow, or paragraph logic need improvement.',
      'A structured abstract, plain-language summary, or research presentation is required.',
      'Citation, attribution, plagiarism, or responsible AI-use practices need clarification.'
    ],
    includes: [
      'Scientific argument and document-structure planning',
      'Section-by-section writing guidance',
      'Abstract, introduction, methods, results, and discussion development',
      'Evidence-aligned claims and limitation language',
      'Clarity, concision, terminology, and paragraph flow',
      'Tables, figures, captions, and cross-reference guidance',
      'Citation, attribution, disclosure, and responsible AI-use review',
      'Learning-focused feedback on researcher-authored drafts'
    ],
    deliverables: ['Writing roadmap', 'Structured outline', 'Annotated draft', 'Revision memorandum', 'Language and reporting checklist', 'Plain-language summary guidance'],
    process: [
      { title: 'Frame', text: 'Clarify the document type, audience, purpose, requirements, and central contribution.' },
      { title: 'Structure', text: 'Build a logical section and paragraph architecture around the evidence.' },
      { title: 'Develop', text: 'Strengthen researcher-authored text for clarity, precision, transparency, and flow.' },
      { title: 'Verify', text: 'Check claims, citations, terminology, disclosures, consistency, and limitations.' }
    ],
    boundary: 'Scientific writing support is developmental and editorial. It does not include ghostwriting assessed work, inventing content or citations, concealing assistance, or taking authorship responsibility away from the researcher.',
    accent: 'gold'
  },
  {
    slug: 'manuscript-development',
    number: '08',
    title: 'Manuscript Development',
    shortTitle: 'Manuscript development',
    summary: 'Move from an approved research story and complete evidence base to a coherent, submission-ready manuscript draft.',
    lead: 'Connect the research question, methods, findings, literature, limitations, and contribution in one internally consistent manuscript.',
    when: [
      'A project has findings but no clear manuscript architecture.',
      'The intended article type, audience, or journal fit needs consideration.',
      'Co-authors need a transparent drafting and contribution workflow.',
      'Tables, figures, narrative results, and discussion need alignment.',
      'A draft requires development before final pre-submission review.'
    ],
    includes: [
      'Article type and manuscript architecture', 'Research-story and contribution mapping', 'Section and subsection planning',
      'Table, figure, and narrative-result alignment', 'Discussion and limitation development', 'Contributor-role and drafting workflow guidance',
      'Reporting-guideline integration', 'Revision planning and internal consistency review'
    ],
    deliverables: ['Manuscript development plan', 'Detailed section outline', 'Table and figure map', 'Annotated draft', 'Contribution workflow', 'Prioritised revision plan'],
    process: [
      { title: 'Orient', text: 'Confirm the evidence, article type, readership, contribution, and applicable guidance.' },
      { title: 'Map', text: 'Connect each claim and section to the question, methods, results, and source evidence.' },
      { title: 'Develop', text: 'Work collaboratively through structure, displays, discussion, and limitations.' },
      { title: 'Consolidate', text: 'Review consistency, contribution records, disclosures, and readiness for final review.' }
    ],
    boundary: 'Researchers and authors retain responsibility for every claim, source, analysis, disclosure, and submission. Support does not guarantee acceptance and will not create fabricated content or concealed authorship.',
    accent: 'rose'
  },
  {
    slug: 'research-proposal-support',
    number: '09',
    title: 'Research Proposal Support',
    shortTitle: 'Research proposal support',
    summary: 'Build a focused, feasible proposal with aligned aims, methods, ethics considerations, workplan, and communication.',
    lead: 'Turn a research priority into a proposal whose question, rationale, design, implementation, and intended contribution reinforce one another.',
    when: [
      'A promising idea needs a defensible proposal structure.', 'Objectives, research questions, and methods are not aligned.',
      'Feasibility, sampling, measurement, analysis, or ethics need development.', 'A workplan, dissemination route, or risk register is required.',
      'A proposal needs structured review against published requirements.'
    ],
    includes: [
      'Problem statement and rationale', 'Research question, aim, and objective alignment', 'Conceptual framework and design considerations',
      'Population, sampling, measurement, and analysis planning', 'Ethics, privacy, feasibility, and risk considerations',
      'Workplan and dissemination planning', 'Requirement and internal-consistency review', 'Researcher-focused proposal feedback'
    ],
    deliverables: ['Proposal architecture', 'Question and objective map', 'Methods roadmap', 'Workplan template', 'Risk and feasibility notes', 'Annotated proposal review'],
    process: [
      { title: 'Define', text: 'Clarify the call or purpose, problem, intended contribution, and non-negotiable requirements.' },
      { title: 'Align', text: 'Connect the question, objectives, framework, design, data, analysis, and ethics.' },
      { title: 'Plan', text: 'Develop a realistic workflow, responsibilities, risks, resources, and dissemination route.' },
      { title: 'Review', text: 'Test the proposal for coherence, feasibility, transparency, and compliance with instructions.' }
    ],
    boundary: 'Proposal support does not guarantee funding, approval, access, or feasibility. Applicants remain responsible for eligibility, institutional review, budgets, representations, and final submission.',
    accent: 'blue'
  },
  {
    slug: 'healthcare-research-consultancy',
    number: '10',
    title: 'Healthcare Research Consultancy',
    shortTitle: 'Healthcare research consultancy',
    summary: 'Integrate rigorous methods with the privacy, governance, clinical-context, and communication responsibilities of healthcare research.',
    lead: 'Support healthcare evidence projects while keeping patient safety, professional boundaries, approvals, data protection, and practical meaning visible.',
    when: [
      'A clinical, public-health, health-services, workforce, or patient-experience question needs methodological support.',
      'Healthcare data, outcomes, instruments, privacy, or governance need careful planning.',
      'A protocol, analysis plan, evidence review, or manuscript requires healthcare context.',
      'A team needs research-methods or responsible reporting capacity building.',
      'The boundary between research, evaluation, audit, and quality improvement requires authorised clarification.'
    ],
    includes: [
      'Healthcare question and protocol development', 'Outcome, variable, and instrument planning', 'Analysis plans and contextual interpretation',
      'Evidence synthesis', 'Privacy-aware data-management considerations', 'Reporting and manuscript support',
      'Healthcare research methods training', 'Referral to appropriate institutional approval routes'
    ],
    deliverables: ['Healthcare methods roadmap', 'Protocol comments', 'Outcome and measurement map', 'Analysis plan', 'Evidence-review workflow', 'Team training plan'],
    process: [
      { title: 'Context', text: 'Understand the healthcare setting, intended use, stakeholders, and authorised governance route.' },
      { title: 'Safeguard', text: 'Identify approvals, privacy, data, consent, burden, and professional boundaries.' },
      { title: 'Strengthen', text: 'Develop methods, analysis, interpretation, synthesis, or training within the agreed scope.' },
      { title: 'Communicate', text: 'Report evidence and uncertainty without replacing clinical judgement.' }
    ],
    boundary: 'AUNO Center does not provide medical care, diagnosis, treatment, emergency assistance, ethics approval, legal advice, or regulatory approval. Consultancy output must not replace qualified clinical or institutional judgement.',
    accent: 'teal'
  },
  {
    slug: 'institutional-research-support',
    number: '11',
    title: 'Institutional Research Support',
    shortTitle: 'Institutional research support',
    summary: 'Strengthen research systems, shared methods, review workflows, learning pathways, and evidence communication across an organisation.',
    lead: 'Build practical research capability around the institution’s real people, processes, responsibilities, constraints, and strategic priorities.',
    when: [
      'An institution needs a research-needs or capability assessment.', 'Teams need methods clinics, advisory workflows, or review processes.',
      'Research templates, guidance, data practices, or integrity education need development.', 'A tailored training pathway must connect learning with practice.',
      'Evidence communication and sustainable responsibility need strengthening.'
    ],
    includes: [
      'Research-needs assessment', 'Methods clinics and advisory models', 'Protocol and reporting review workflows',
      'Research templates and guidance', 'Integrity and responsible-AI education', 'Tailored training pathways',
      'Evidence-synthesis and communication support', 'Capability-programme design and review'
    ],
    deliverables: ['Institutional needs map', 'Advisory workflow', 'Methods clinic model', 'Template set', 'Training pathway', 'Capability and sustainability roadmap'],
    process: [
      { title: 'Understand', text: 'Identify the institutional need, stakeholders, current system, authority, and intended outcomes.' },
      { title: 'Design', text: 'Agree scope, success criteria, roles, safeguards, accessibility, and sustainability.' },
      { title: 'Deliver', text: 'Implement the agreed advisory, methods, learning, resource, or communication work.' },
      { title: 'Review', text: 'Assess use, learning, limitations, ownership, and the next institutional decisions.' }
    ],
    boundary: 'Institutional support is tailored only after scoping. AUNO Center does not claim accreditation, regulatory authority, compliance certification, or the power to approve an institution’s research.',
    accent: 'violet'
  }
];

export type ResourceSection = { heading: string; paragraphs: string[]; points?: string[] };
export type Resource = {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  summary: string;
  intro: string;
  sections: ResourceSection[];
  takeaway: string;
  relatedService: string;
};

export const resources: Resource[] = [
  {
    slug: 'from-topic-to-researchable-question',
    title: 'From a Broad Topic to a Researchable Question',
    category: 'Research foundations',
    readingTime: '7 min read',
    summary: 'A practical route from an important idea to a focused, feasible question that can guide real methodological choices.',
    intro:
      'A research topic names an area of interest. A researchable question goes further: it specifies what you want to understand, for whom or in what context, and what kind of evidence could provide a credible answer.',
    sections: [
      {
        heading: 'Start with the decision the research should inform',
        paragraphs: [
          'Before refining wording, describe the problem and who would use the answer. This reveals whether the project is primarily descriptive, comparative, explanatory, exploratory, predictive, or evaluative.',
          'A clear intended use also exposes questions that are academically interesting but too broad to guide a feasible study.'
        ]
      },
      {
        heading: 'Define the central concepts',
        paragraphs: [
          'Write a short working definition for each important term. If a concept could mean several things, identify the meaning that matters in this project and how it might be observed or explored.'
        ],
        points: ['Population or setting', 'Phenomenon, exposure, intervention, or experience', 'Outcome or central concept', 'Timeframe where relevant', 'Type of answer sought']
      },
      {
        heading: 'Test feasibility early',
        paragraphs: [
          'Ask whether the population can be reached, the data can be collected lawfully and ethically, the measures are appropriate, and the work fits the available time and resources. A narrower answerable question is stronger than an ambitious question the study cannot resolve.'
        ]
      },
      {
        heading: 'Check alignment',
        paragraphs: [
          'Read the proposed question beside the objective, design, data, and planned analysis. Each element should answer the same intellectual problem. If the design can only describe an association, the question and later conclusions should not imply causation.'
        ]
      }
    ],
    takeaway: 'A strong question is specific enough to guide design decisions, important enough to justify the work, and realistic enough to answer responsibly.',
    relatedService: 'research-design-methodology'
  },
  {
    slug: 'choosing-a-study-design',
    title: 'Choosing a Study Design: Start with the Question',
    category: 'Research methodology',
    readingTime: '8 min read',
    summary: 'Compare designs by the questions they can answer, the evidence they require, and the limitations they introduce.',
    intro:
      'Study designs are not interchangeable templates. Each creates a particular route from observation to inference and brings distinct ethical, practical, and analytical consequences.',
    sections: [
      {
        heading: 'Name the purpose before the design',
        paragraphs: [
          'Descriptive questions ask what exists or how often. Comparative questions examine differences. Explanatory questions consider mechanisms or relationships. Exploratory questions seek depth, meaning, or unanticipated patterns. The purpose narrows the suitable design family.'
        ]
      },
      {
        heading: 'Consider time and comparison',
        paragraphs: [
          'Cross-sectional designs capture a defined period. Longitudinal designs follow change. Experimental and quasi-experimental approaches ask what happens under an intervention or policy. Observational designs examine naturally occurring differences but require careful handling of confounding and selection.'
        ]
      },
      {
        heading: 'Use qualitative methods for the right reason',
        paragraphs: [
          'Qualitative methods are appropriate when the project seeks experience, meaning, process, context, or theory development. Their rigor comes from coherent sampling, data generation, reflexivity, analysis, and transparent interpretation—not from imitating statistical representativeness.'
        ]
      },
      {
        heading: 'Treat mixed methods as integration',
        paragraphs: [
          'A mixed-methods project needs a reason for combining approaches and a plan for how findings will be connected. Simply collecting a survey and interviews does not create a coherent mixed-methods design.'
        ]
      },
      {
        heading: 'Let ethics and feasibility shape the final choice',
        paragraphs: [
          'The strongest theoretical design may be inappropriate or impossible in a given context. Recruitment, burden, privacy, access, expertise, time, and resources are legitimate design considerations and should be documented.'
        ]
      }
    ],
    takeaway: 'Choose the design that produces the most credible answer to the actual question within ethical and practical constraints.',
    relatedService: 'research-design-methodology'
  },
  {
    slug: 'analysis-plan-before-the-data',
    title: 'Why an Analysis Plan Should Come Before the Data',
    category: 'Statistics',
    readingTime: '7 min read',
    summary: 'Early analysis planning clarifies outcomes, variables, assumptions, missing data, and the limits of later interpretation.',
    intro:
      'An analysis plan is a bridge between the research question and the data. Writing it before examining results makes assumptions visible, improves data collection, and reduces avoidable decisions driven by the findings themselves.',
    sections: [
      {
        heading: 'Define what is being estimated',
        paragraphs: [
          'State the primary outcome, comparison, population, timeframe, and summary of interest. This prevents a general aim from turning into many unprioritised analyses after data are available.'
        ]
      },
      {
        heading: 'Specify variables before coding begins',
        paragraphs: [
          'Document source fields, units, categories, derived variables, reference groups, plausible values, and handling of repeated measures. A data dictionary is both an analytical and a quality-control tool.'
        ]
      },
      {
        heading: 'Plan assumptions and missing data',
        paragraphs: [
          'Every method relies on assumptions. Identify how they will be assessed and what alternative approach will be used if they are not tenable. Describe how the amount, pattern, and likely causes of missingness will be examined.'
        ]
      },
      {
        heading: 'Separate primary, secondary, and exploratory work',
        paragraphs: [
          'Prioritisation makes the evidentiary weight of each analysis clear. Exploratory analyses can be valuable, but they should be labelled honestly and interpreted with appropriate caution.'
        ]
      },
      {
        heading: 'Record changes',
        paragraphs: [
          'Real projects evolve. When a plan changes, record what changed, when, why, and whether the change occurred before or after viewing relevant results. Transparency is more useful than pretending the original plan never changed.'
        ]
      }
    ],
    takeaway: 'A good analysis plan does not remove judgement; it makes analytical judgement visible, reviewable, and connected to the research question.',
    relatedService: 'statistical-analysis'
  },
  {
    slug: 'questionnaire-items-people-can-answer',
    title: 'Designing Questionnaire Items People Can Answer',
    category: 'Data collection',
    readingTime: '6 min read',
    summary: 'Create items that ask one clear thing, use appropriate recall periods, and offer response options that fit real experience.',
    intro:
      'A questionnaire is a measurement process, not only a list of questions. Respondents must understand an item, retrieve relevant information, form a judgement, and map that judgement to the available response options.',
    sections: [
      {
        heading: 'Map every item to a purpose',
        paragraphs: [
          'Create a construct-to-item map before drafting. If an item does not contribute to a defined objective, analysis, eligibility decision, or routing need, reconsider whether the burden is justified.'
        ]
      },
      {
        heading: 'Ask one thing at a time',
        paragraphs: [
          'Avoid double-barrelled wording, undefined technical language, assumptions about the respondent, and emotionally loaded phrasing. Keep the timeframe and subject of the question explicit.'
        ]
      },
      {
        heading: 'Make response options fit',
        paragraphs: [
          'Categories should be mutually understandable and collectively adequate for the intended analysis. Rating scales need labelled direction and a meaningful number of options; a neutral or not-applicable response should be included only when conceptually appropriate.'
        ]
      },
      {
        heading: 'Pretest with the intended audience',
        paragraphs: [
          'Expert review cannot reveal every interpretation problem. Cognitive interviews and pilot testing help show how respondents understand instructions, recall information, choose answers, and move through routing.'
        ]
      },
      {
        heading: 'Document changes and evidence',
        paragraphs: [
          'Record the rationale for items, permissions for existing measures, adaptations, translation steps, test findings, scoring rules, and limitations. Do not describe an instrument as validated without appropriate evidence.'
        ]
      }
    ],
    takeaway: 'The best questionnaire item is not the most sophisticated sentence; it is the clearest valid prompt for the intended respondent and purpose.',
    relatedService: 'questionnaire-development'
  },
  {
    slug: 'beyond-the-p-value',
    title: 'Beyond the P-value: Interpreting Results Responsibly',
    category: 'Results & reporting',
    readingTime: '8 min read',
    summary: 'Interpret estimates, uncertainty, design, data quality, and real-world importance together.',
    intro:
      'A single threshold cannot carry the meaning of a study. Responsible interpretation begins with the size and direction of an estimate, the uncertainty around it, and the credibility of the design and data that produced it.',
    sections: [
      {
        heading: 'Begin with the estimate',
        paragraphs: [
          'Report what changed or differed, in the original units where possible, and show the direction and magnitude. This is more informative than leading with whether a threshold was crossed.'
        ]
      },
      {
        heading: 'Read uncertainty as a range of compatible values',
        paragraphs: [
          'Confidence intervals convey precision and help readers see whether the data remain compatible with effects that are trivial, important, beneficial, or harmful. They do not eliminate uncertainty or guarantee that the true value lies inside one calculated interval.'
        ]
      },
      {
        heading: 'Separate statistical and practical importance',
        paragraphs: [
          'A small effect can be statistically detectable in a large sample yet have limited practical relevance. A potentially important effect in a small study may remain too imprecise for a confident conclusion.'
        ]
      },
      {
        heading: 'Keep causal language within the design',
        paragraphs: [
          'Associations may reflect confounding, selection, measurement, chance, or genuine relationships. Causal statements require design and assumptions capable of supporting them; wording should match that evidentiary strength.'
        ]
      },
      {
        heading: 'Report null and unexpected findings honestly',
        paragraphs: [
          'A non-significant result is not proof of no effect, and an unexpected finding is not automatically a discovery. Discuss power, precision, multiplicity, prior evidence, and the distinction between planned and exploratory analyses.'
        ]
      }
    ],
    takeaway: 'Interpretation is a structured argument from question, design, data, analysis, uncertainty, and context—not a label attached to a p-value.',
    relatedService: 'results-interpretation'
  },
  {
    slug: 'reproducible-literature-review-workflow',
    title: 'A Reproducible Literature Review Workflow',
    category: 'Evidence synthesis',
    readingTime: '9 min read',
    summary: 'Document how evidence is found, selected, appraised, extracted, synthesised, and updated.',
    intro:
      'A review becomes reproducible when another informed reader can understand what was sought, where and when searches were run, how decisions were made, and how the final synthesis was constructed.',
    sections: [
      {
        heading: 'Choose the review type deliberately',
        paragraphs: [
          'Systematic, scoping, rapid, narrative, integrative, and other review approaches serve different purposes. The label should match the actual methods, resources, and intended claims.'
        ]
      },
      {
        heading: 'Write the protocol before screening',
        paragraphs: [
          'Define the question, eligibility criteria, sources, search approach, screening process, extraction fields, appraisal plan, synthesis, and approach to changes. Registration may be appropriate for some review types.'
        ]
      },
      {
        heading: 'Search transparently',
        paragraphs: [
          'Build concepts from the question, combine controlled vocabulary with text words where available, test known relevant records, and preserve the exact strategy, platform, date, and result count for each source.'
        ]
      },
      {
        heading: 'Make selection decisions consistent',
        paragraphs: [
          'Pilot eligibility criteria, document reviewer roles, record reasons for exclusion at the appropriate stage, and manage duplicates carefully. Ambiguous criteria should be resolved and documented rather than applied differently across records.'
        ]
      },
      {
        heading: 'Connect appraisal to synthesis',
        paragraphs: [
          'Critical appraisal should shape how evidence is interpreted, not become an isolated checklist. Synthesis must reflect design differences, risk of bias, heterogeneity, context, and the limits of the available studies.'
        ]
      }
    ],
    takeaway: 'Reproducibility comes from decisions made visible: a clear question, documented search, consistent selection, structured appraisal, and transparent synthesis.',
    relatedService: 'literature-review-support'
  },
  {
    slug: 'authorship-contribution-integrity',
    title: 'Authorship, Contribution, and Research Integrity',
    category: 'Ethics & integrity',
    readingTime: '7 min read',
    summary: 'Discuss contribution and accountability early, distinguish authorship from acknowledgement, and disclose assistance responsibly.',
    intro:
      'Authorship carries both credit and responsibility. Clear contribution conversations at the beginning of a project reduce conflict and help ensure that public credit reflects genuine intellectual work and accountability.',
    sections: [
      {
        heading: 'Discuss contribution before the manuscript exists',
        paragraphs: [
          'Agree on anticipated roles, decision-making, communication, and how changes in contribution will be handled. Authorship order may evolve, but the basis for decisions should be transparent.'
        ]
      },
      {
        heading: 'Separate authorship from status or payment',
        paragraphs: [
          'Seniority, supervision, employment, funding, courtesy, or payment alone do not establish authorship. Apply the contribution and accountability criteria relevant to the discipline, institution, and publisher.'
        ]
      },
      {
        heading: 'Recognise non-author contributions',
        paragraphs: [
          'People who provide administrative, technical, language, statistical, editorial, or other support may warrant acknowledgement or a contributor statement. Obtain permission before naming an individual.'
        ]
      },
      {
        heading: 'Disclose consultancy and AI assistance',
        paragraphs: [
          'Follow institutional and publisher rules for disclosing external support and AI-assisted work. AI tools cannot take responsibility for accuracy, consent, confidentiality, conflicts, or the integrity of the final work.'
        ]
      },
      {
        heading: 'Prevent disputes with records',
        paragraphs: [
          'Keep a contribution log, revisit roles at milestones, document important decisions, and use an appropriate institutional process if a dispute cannot be resolved within the team.'
        ]
      }
    ],
    takeaway: 'Authorship is an agreement about meaningful contribution and public accountability, not a favour, purchase, or automatic reward for position.',
    relatedService: 'pre-submission-review'
  },
  {
    slug: 'privacy-in-healthcare-research-data',
    title: 'Protecting Privacy in Healthcare Research Data',
    category: 'Healthcare research',
    readingTime: '8 min read',
    summary: 'An introduction to data minimisation, access, transfer, linkage risk, retention, and formal governance requirements.',
    intro:
      'Health information can remain sensitive even after obvious identifiers are removed. Privacy protection therefore requires more than deleting names: it requires deliberate decisions about what is collected, who can access it, how it moves, and when it is no longer needed.',
    sections: [
      {
        heading: 'Understand identifiability as a spectrum',
        paragraphs: [
          'Direct identifiers are only one route to identification. Rare characteristics, dates, locations, free text, images, and linked datasets may allow individuals to be recognised when combined.'
        ]
      },
      {
        heading: 'Collect the minimum necessary',
        paragraphs: [
          'Every data element should have a defined research purpose. Avoid collecting sensitive fields merely because they may be useful later, and separate contact or linkage information from analysis data where appropriate.'
        ]
      },
      {
        heading: 'Control access and transfer',
        paragraphs: [
          'Use approved systems, role-based access, strong authentication, logging, encryption where required, and documented transfer processes. Public website forms and ordinary email are not suitable channels for identifiable patient or participant data.'
        ]
      },
      {
        heading: 'Plan sharing and retention before collection',
        paragraphs: [
          'Consent materials, ethics submissions, agreements, repositories, and data-management plans should give a consistent account of who can use data, for what purpose, for how long, and under what safeguards.'
        ]
      },
      {
        heading: 'Follow the authorised process',
        paragraphs: [
          'Applicable health, privacy, ethics, professional, institutional, and jurisdictional requirements vary. Researchers must use the authorised local route to classify the activity and approve collection, access, sharing, retention, and incident response.'
        ]
      }
    ],
    takeaway: 'Privacy-by-design means reducing unnecessary data and exposure from the earliest protocol decision through final retention or disposal.',
    relatedService: 'research-design-methodology'
  }
];

export const libraryMaterials = [
  {
    slug: 'analytical-research-studies',
    title: 'Analytical Research Studies',
    type: 'Presentation PDF',
    category: 'Research methodology',
    author: 'Dr. Mustafa Haytham',
    pages: 22,
    size: '598 KB',
    summary: 'An advanced teaching presentation on analytical epidemiological designs, case–control and cohort methods, bias, confounding, causal inference, and interpretation.',
    topics: ['Analytical epidemiology', 'Study design', 'Causal inference', 'Bias and confounding'],
    href: '/resources/analytical-research-studies.pdf',
    thumbnail: '/images/resources/analytical-studies.jpg'
  },
  {
    slug: 'data-analysis',
    title: 'Data Analysis: Deep Statistical Analysis for Research',
    type: 'Presentation PDF',
    category: 'Statistics',
    author: 'Mustafa Haytham (as identified in the PDF metadata)',
    pages: 45,
    size: '517 KB',
    summary: 'A practical academic workshop covering analysis planning, data preparation, method selection, R, IBM SPSS Statistics, reporting, and reproducible research workflows.',
    topics: ['Data preparation', 'R', 'SPSS', 'Statistical reporting'],
    href: '/resources/data-analysis.pdf',
    thumbnail: '/images/resources/data-analysis.jpg'
  },
  {
    slug: 'scientific-writing-presentation',
    title: 'Research Report & Scientific Writing',
    type: 'Presentation PDF',
    category: 'Scientific writing',
    author: 'Dr. Mustafa Haytham (as identified in the PDF metadata)',
    pages: 43,
    size: '1.20 MB',
    summary: 'A structured educational session on scientific writing, IMRaD, clinical research questions, evidence appraisal, abstracts, methods, results, referencing, plagiarism, and responsible AI use.',
    topics: ['IMRaD', 'Research reporting', 'Referencing', 'Research integrity'],
    href: '/resources/scientific-writing.pdf',
    thumbnail: '/images/resources/scientific-writing.jpg'
  }
] as const;

export const focusAreas = [
  {
    title: 'Healthcare research',
    text: 'Methodological, analytical, questionnaire, evidence-review, and training support attentive to patients, professionals, systems, and privacy.',
    href: '/healthcare-research/',
    mark: '01'
  },
  {
    title: 'Institutional research support',
    text: 'Research systems, shared methods, tailored learning, advisory workflows, and capability development for research-active organisations.',
    href: '/institutional-research-support/',
    mark: '02'
  },
  {
    title: 'Ethics & integrity',
    text: 'Transparent methods, responsible authorship, privacy-aware data stewardship, proportionate claims, and responsible AI use.',
    href: '/research-ethics-integrity/',
    mark: '03'
  },
  {
    title: 'International collaboration',
    text: 'Shared purpose, explicit roles, local knowledge, equitable credit, and sustainable capability across contexts.',
    href: '/international-collaboration/',
    mark: '04'
  }
] as const;

export const faqGroups = [
  {
    category: 'Getting started',
    items: [
      {
        question: 'Who can request support?',
        answer: 'Students, researchers, healthcare professionals, research teams, educators, and institutional representatives may submit a request. Suitability depends on scope, expertise, timing, and responsible-use requirements.'
      },
      {
        question: 'Can I request help at an early stage?',
        answer: 'Yes. Early support can be particularly useful when clarifying the question, design, variables, feasibility, ethics considerations, and analysis plan.'
      },
      {
        question: 'What should I include in my initial request?',
        answer: 'Provide the research question, project stage, design if known, type of data, support needed, timeline, and key constraints. Keep the initial submission non-confidential.'
      },
      {
        question: 'Does submitting a form mean my project has been accepted?',
        answer: 'No. A submission is an initial inquiry. Work begins only after scope, responsibilities, timing, deliverables, confidentiality, and any fees have been agreed.'
      }
    ]
  },
  {
    category: 'Services & timing',
    items: [
      {
        question: 'How are fees determined?',
        answer: 'Fees, if applicable, depend on scope, complexity, timing, data readiness, and deliverables. Any proposal is agreed before substantive work begins.'
      },
      {
        question: 'How long will my request take?',
        answer: 'Timing depends on the request and current availability. A deadline entered in a form is a request, not a confirmed commitment.'
      },
      {
        question: 'Can AUNO Center work with institutions or groups?',
        answer: 'Yes. Institutions may inquire about tailored workshops, methods clinics, research processes, advisory support, and capacity-building programmes.'
      },
      {
        question: 'Can AUNO Center help with healthcare research?',
        answer: 'Methodological and analytical support may be available, subject to appropriate approvals, privacy safeguards, data governance, and professional boundaries.'
      }
    ]
  },
  {
    category: 'Integrity & responsibility',
    items: [
      {
        question: 'Can AUNO Center complete my thesis or assessed assignment?',
        answer: 'AUNO Center can explain methods, review work, and support learning, but will not complete assessed work dishonestly, fabricate content, conceal authorship, or help bypass academic rules.'
      },
      {
        question: 'Can you guarantee publication, approval, funding, or a significant result?',
        answer: 'No. These outcomes depend on independent decisions, the underlying research, and factors beyond any consultancy’s control.'
      },
      {
        question: 'Does AUNO Center provide ethics approval?',
        answer: 'No. Researchers must obtain approval from the authorised ethics or institutional body for their setting.'
      },
      {
        question: 'Can I send patient or participant data through the website?',
        answer: 'Do not send identifiable or sensitive research data through public forms. A secure, approved process must be agreed before any necessary data transfer.'
      },
      {
        question: 'Will support qualify AUNO Center for authorship?',
        answer: 'Authorship should be based on recognised contribution and accountability criteria, not payment or courtesy. Roles should be discussed transparently for every project.'
      },
      {
        question: 'How does AUNO Center approach AI in research?',
        answer: 'AI tools should be used lawfully, critically, and transparently. Researchers remain responsible for verification, confidentiality, attribution, disclosure, and compliance with institutional or publisher policies.'
      }
    ]
  },
  {
    category: 'Privacy & communication',
    items: [
      {
        question: 'How is initial request information used?',
        answer: 'It is used to assess the request, respond, and determine an appropriate next step. Please review the Privacy Policy and do not submit unnecessary sensitive information.'
      },
      {
        question: 'Does Interpeko send my question to an AI provider?',
        answer: 'On the primary Netlify site, AI mode may send the question, limited recent context, and a pseudonymous session identifier through a secure server function to OpenAI. If AI mode is unavailable or the GitHub Pages mirror is used, guided mode stays in the browser. Never submit sensitive or confidential information.'
      },
      {
        question: 'Can I rely on an Interpeko answer without checking it?',
        answer: 'No. Interpeko is an educational research-navigation and methods assistant. Verify methods, evidence, citations, calculations, standards, and decisions against the original source and the responsible qualified or institutional authority.'
      },
      {
        question: 'How can I stay informed?',
        answer: 'Follow AUNO Center through the official social channels or subscribe to confirmed resources, events, and institutional updates through the website.'
      }
    ]
  }
] as const;

export const formServices = services.map((service) => service.title).concat([
  'Training & capacity building',
  'Institutional research support',
  'International collaboration',
  'Other / not sure'
]);
