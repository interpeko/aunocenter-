export type Course = {
  slug: string;
  title: string;
  price: number;
  category: string;
  summary: string;
  audience: string[];
  outcomes: string[];
  modules: { title: string; description: string }[];
  format: string;
  level: string;
};

export const courses: Course[] = [
  {
    slug: 'foundations-scientific-research',
    title: 'Foundations of Scientific Research',
    price: 24,
    category: 'Research foundations',
    summary: 'Build a clear understanding of research questions, evidence, study design, ethics, variables, and the connected research lifecycle.',
    audience: ['Students beginning research', 'Early-career researchers', 'Professionals joining research teams'],
    outcomes: ['Turn a broad topic into a researchable question', 'Distinguish major research purposes and designs', 'Connect questions, variables, data, analysis, and reporting', 'Recognise core ethics and integrity responsibilities'],
    modules: [
      { title: 'Research as a connected process', description: 'Questions, evidence, inference, uncertainty, and responsible use.' },
      { title: 'From topic to question', description: 'Problem definition, scope, objectives, frameworks, and feasibility.' },
      { title: 'Design and data', description: 'Common quantitative, qualitative, and mixed-methods routes.' },
      { title: 'Integrity and communication', description: 'Ethics, authorship, transparency, limitations, and reporting.' }
    ],
    format: 'Online learning; intake schedule and access details are confirmed before enrollment.',
    level: 'Foundation'
  },
  {
    slug: 'research-proposal-development',
    title: 'Research Proposal Development',
    price: 29,
    category: 'Proposal development',
    summary: 'Develop a coherent proposal in which the problem, rationale, objectives, methods, ethics, workplan, and intended contribution align.',
    audience: ['Students preparing proposals', 'Researchers preparing institutional applications', 'Teams developing new studies'],
    outcomes: ['Write a focused problem statement and rationale', 'Align questions, aims, objectives, and methods', 'Plan feasibility, ethics, analysis, and dissemination', 'Review a proposal against explicit requirements'],
    modules: [
      { title: 'Proposal purpose and architecture', description: 'Calls, institutional requirements, contribution, and document structure.' },
      { title: 'Question and rationale', description: 'Problem statements, evidence gaps, objectives, and conceptual alignment.' },
      { title: 'Methods and safeguards', description: 'Design, sampling, measurement, analysis, ethics, privacy, and feasibility.' },
      { title: 'Implementation and review', description: 'Workplans, risks, dissemination, consistency, and responsible submission.' }
    ],
    format: 'Online learning with applied proposal exercises; intake details are confirmed before enrollment.',
    level: 'Foundation to intermediate'
  },
  {
    slug: 'biostatistics-health-research',
    title: 'Biostatistics for Health Research',
    price: 39,
    category: 'Statistics',
    summary: 'Use statistical thinking to plan, describe, compare, model, interpret, and communicate health research data responsibly.',
    audience: ['Health researchers', 'Healthcare professionals', 'Graduate students using quantitative methods'],
    outcomes: ['Translate a health question into an analysis plan', 'Select descriptive and inferential methods appropriately', 'Interpret estimates, intervals, assumptions, and uncertainty', 'Report statistical findings without overstatement'],
    modules: [
      { title: 'Statistical thinking', description: 'Populations, samples, variables, estimands, bias, and uncertainty.' },
      { title: 'Describing health data', description: 'Distributions, summaries, visualisation, missingness, and data quality.' },
      { title: 'Comparisons and models', description: 'Method selection, assumptions, effect estimates, and common models.' },
      { title: 'Interpretation and reporting', description: 'Intervals, practical meaning, limitations, tables, and reproducibility.' }
    ],
    format: 'Online learning with worked examples; software requirements are confirmed for each intake.',
    level: 'Foundation to intermediate'
  },
  {
    slug: 'questionnaire-design',
    title: 'Questionnaire Design',
    price: 24,
    category: 'Data collection',
    summary: 'Create purposeful questionnaires with clear constructs, answerable items, appropriate response options, accessible flow, and defensible testing plans.',
    audience: ['Survey researchers', 'Students collecting primary data', 'Healthcare and institutional teams'],
    outcomes: ['Map constructs and objectives to questionnaire items', 'Write clear, unbiased, answerable items', 'Design response scales, flow, routing, and coding', 'Plan cognitive testing, piloting, reliability, and validity work'],
    modules: [
      { title: 'Measurement purpose', description: 'Constructs, objectives, respondents, context, and existing instruments.' },
      { title: 'Item and scale design', description: 'Wording, recall, response options, accessibility, and respondent burden.' },
      { title: 'Flow and administration', description: 'Instructions, sequence, routing, mode, coding, and data quality.' },
      { title: 'Testing and documentation', description: 'Expert review, cognitive interviews, pilots, reliability, validity, and limitations.' }
    ],
    format: 'Online learning with practical item-development exercises.',
    level: 'Foundation'
  },
  {
    slug: 'literature-search-review',
    title: 'Literature Search and Review',
    price: 29,
    category: 'Evidence synthesis',
    summary: 'Move from an information need to a transparent search, organised evidence set, critical reading process, and responsible review narrative.',
    audience: ['Students preparing literature reviews', 'Researchers planning evidence searches', 'Professionals updating knowledge'],
    outcomes: ['Choose a review purpose and question framework', 'Develop concepts, keywords, controlled vocabulary, and search logic', 'Organise screening, notes, citations, and source records', 'Synthesize evidence with transparent limitations'],
    modules: [
      { title: 'Review questions and types', description: 'Purpose, scope, frameworks, eligibility, and protocol thinking.' },
      { title: 'Search construction', description: 'Sources, concepts, synonyms, controlled vocabulary, operators, and testing.' },
      { title: 'Evidence organisation', description: 'Citation management, deduplication, screening, extraction, and documentation.' },
      { title: 'Critical synthesis', description: 'Appraisal, patterns, disagreement, gaps, limitations, and reproducible reporting.' }
    ],
    format: 'Online learning with guided search and synthesis exercises.',
    level: 'Foundation to intermediate'
  },
  {
    slug: 'scientific-writing',
    title: 'Scientific Writing',
    price: 35,
    category: 'Scientific communication',
    summary: 'Write precise, structured, evidence-aligned research reports and manuscripts with responsible citation, disclosure, and revision practices.',
    audience: ['Researchers preparing reports or manuscripts', 'Graduate students', 'Healthcare professionals writing for scientific audiences'],
    outcomes: ['Plan a coherent scientific argument and document structure', 'Develop clear IMRaD or discipline-appropriate sections', 'Connect claims to data, sources, uncertainty, and limitations', 'Revise for clarity, consistency, attribution, and responsible AI disclosure'],
    modules: [
      { title: 'Scientific argument', description: 'Audience, purpose, contribution, precision, objectivity, and evidence.' },
      { title: 'Document structure', description: 'Titles, abstracts, introductions, methods, results, discussions, and conclusions.' },
      { title: 'Evidence on the page', description: 'Claims, citations, tables, figures, uncertainty, and limitations.' },
      { title: 'Integrity and revision', description: 'Authorship, plagiarism, AI use, disclosure, editing, and submission readiness.' }
    ],
    format: 'Online learning with researcher-authored writing exercises and revision practice.',
    level: 'Foundation to intermediate'
  },
  {
    slug: 'systematic-review-fundamentals',
    title: 'Systematic Review Fundamentals',
    price: 49,
    category: 'Evidence synthesis',
    summary: 'Understand the complete systematic review workflow from protocol and search through screening, appraisal, synthesis, reporting, and updates.',
    audience: ['Researchers joining review teams', 'Graduate students planning systematic reviews', 'Healthcare evidence teams'],
    outcomes: ['Define a suitable systematic review question and protocol', 'Plan reproducible searches and study selection', 'Use structured extraction and risk-of-bias approaches', 'Choose and report an appropriate synthesis route'],
    modules: [
      { title: 'Question and protocol', description: 'Review fit, frameworks, eligibility, roles, registration, and deviations.' },
      { title: 'Searching and selection', description: 'Sources, strategies, deduplication, screening, decisions, and flow records.' },
      { title: 'Extraction and appraisal', description: 'Data forms, reviewer consistency, risk of bias, and evidence context.' },
      { title: 'Synthesis and reporting', description: 'Narrative and quantitative routes, heterogeneity, certainty, limitations, and updates.' }
    ],
    format: 'Online learning with structured review-workflow exercises.',
    level: 'Intermediate'
  },
  {
    slug: 'critical-appraisal',
    title: 'Critical Appraisal',
    price: 25,
    category: 'Evidence interpretation',
    summary: 'Evaluate whether research methods, analysis, reporting, and conclusions provide evidence that is credible and useful for a particular decision.',
    audience: ['Students reading scientific literature', 'Healthcare professionals', 'Researchers and evidence users'],
    outcomes: ['Identify the question, design, population, and intended inference', 'Assess bias, measurement, analysis, and reporting', 'Interpret effect estimates, uncertainty, and practical relevance', 'Judge applicability without reducing appraisal to a checklist score'],
    modules: [
      { title: 'What is the study claiming?', description: 'Question, design, comparison, outcomes, and intended inference.' },
      { title: 'Can the result be trusted?', description: 'Selection, measurement, confounding, missingness, analysis, and selective reporting.' },
      { title: 'What does the result mean?', description: 'Magnitude, precision, multiplicity, causality, and practical importance.' },
      { title: 'Does it apply?', description: 'Population, setting, feasibility, values, limitations, and decision context.' }
    ],
    format: 'Online learning using guided appraisal of published-study examples.',
    level: 'Foundation to intermediate'
  },
  {
    slug: 'research-ethics',
    title: 'Research Ethics',
    price: 15,
    category: 'Ethics & integrity',
    summary: 'Understand research ethics as a continuing responsibility involving people, communities, data, contribution, transparency, and authorised oversight.',
    audience: ['Students and early-career researchers', 'Research team members', 'Professionals supporting research governance'],
    outcomes: ['Recognise core principles and approval responsibilities', 'Plan meaningful consent, fair participation, and proportionate safeguards', 'Protect privacy through data minimisation and responsible stewardship', 'Address authorship, conflicts, reporting, AI use, and correction transparently'],
    modules: [
      { title: 'Ethics throughout research', description: 'Respect, benefit and harm, justice, oversight, and continuing responsibility.' },
      { title: 'People and communities', description: 'Recruitment, inclusion, vulnerability, consent, burden, and communication.' },
      { title: 'Data and privacy', description: 'Identifiability, minimisation, access, security, sharing, retention, and incidents.' },
      { title: 'Integrity and accountability', description: 'Authorship, conflicts, reporting, AI use, misconduct routes, and correction.' }
    ],
    format: 'Online learning with ethics scenarios and decision exercises.',
    level: 'Foundation'
  },
  {
    slug: 'artificial-intelligence-research',
    title: 'Artificial Intelligence for Research',
    price: 29,
    category: 'Research innovation',
    summary: 'Use AI tools critically and transparently across research tasks while protecting privacy, verifying outputs, and preserving human accountability.',
    audience: ['Researchers exploring AI-assisted workflows', 'Students working under institutional rules', 'Research support and education teams'],
    outcomes: ['Match AI use to appropriate low- and higher-risk research tasks', 'Protect confidential, personal, and unpublished information', 'Verify claims, citations, calculations, and generated content', 'Document and disclose AI assistance under applicable policies'],
    modules: [
      { title: 'AI in the research workflow', description: 'Capabilities, limitations, task selection, and human responsibility.' },
      { title: 'Privacy and governance', description: 'Sensitive inputs, provider terms, institutional rules, consent, and secure alternatives.' },
      { title: 'Verification and bias', description: 'Hallucinations, citations, data, code, reproducibility, bias, and critical review.' },
      { title: 'Transparent responsible use', description: 'Disclosure, authorship, academic integrity, publisher rules, and audit trails.' }
    ],
    format: 'Online learning using privacy-safe examples and verification exercises.',
    level: 'Foundation'
  }
];

export const courseOptions = courses.map((course) => `${course.title} — $${course.price} USD`);
