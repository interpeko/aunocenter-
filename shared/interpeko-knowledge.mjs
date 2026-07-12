export const approvedSources = [
  {
    id: 'about',
    label: 'About AUNO Center',
    href: '/about/',
    summary: 'Institutional purpose, founder profile, audiences, and research-support approach.',
    keywords: ['auno', 'about', 'founder', 'director', 'mustafa', 'mission', 'vision', 'center']
  },
  {
    id: 'services',
    label: 'Research services',
    href: '/services/',
    summary: 'Eleven research-support services across methods, measurement, evidence, writing, publication, healthcare, and institutional capability.',
    keywords: ['service', 'support', 'consultancy', 'methodology', 'statistics', 'questionnaire', 'manuscript', 'proposal']
  },
  {
    id: 'request-support',
    label: 'Request research support',
    href: '/request-support/',
    summary: 'Privacy-aware intake route for a non-confidential description of a research need.',
    keywords: ['request', 'project', 'help', 'consult', 'submit', 'timeline', 'price', 'cost']
  },
  {
    id: 'courses',
    label: 'Courses',
    href: '/courses/',
    summary: 'Ten affordable courses in research foundations, proposals, biostatistics, questionnaires, evidence review, writing, appraisal, ethics, and responsible AI.',
    keywords: ['course', 'enroll', 'scholarship', 'learn', 'class', 'certificate', 'price']
  },
  {
    id: 'training',
    label: 'Training & capacity building',
    href: '/training/',
    summary: 'Workshops, seminars, project clinics, and tailored institutional learning enquiries.',
    keywords: ['training', 'workshop', 'seminar', 'capacity', 'institutional learning']
  },
  {
    id: 'resources',
    label: 'Research resource library',
    href: '/resources/',
    summary: 'Educational articles, attributed PDFs, templates, checklists, and practical research tools.',
    keywords: ['resource', 'article', 'guide', 'template', 'checklist', 'pdf', 'learn']
  },
  {
    id: 'pubmed',
    label: 'PubMed search',
    href: '/pubmed-search/',
    summary: 'Privacy-aware search interface to official public NCBI PubMed records.',
    keywords: ['pubmed', 'literature', 'paper', 'article', 'evidence', 'search', 'citation', 'reference']
  },
  {
    id: 'academic-standards',
    label: 'Academic practice framework',
    href: '/academic-standards/',
    summary: 'A structured framework for questions, protocols, design, analysis, transparent reporting, and reproducibility, with links to independent primary standards.',
    keywords: ['standard', 'guideline', 'reporting', 'consort', 'strobe', 'prisma', 'fair', 'icmje', 'credit', 'registry']
  },
  {
    id: 'ethics',
    label: 'Research ethics & integrity',
    href: '/research-ethics-integrity/',
    summary: 'Consent, privacy, data stewardship, authorship, transparent reporting, corrections, and responsible AI boundaries.',
    keywords: ['ethic', 'integrity', 'consent', 'privacy', 'authorship', 'plagiarism', 'ai', 'confidential', 'participant']
  },
  {
    id: 'editorial-policy',
    label: 'Editorial & corrections policy',
    href: '/editorial-policy/',
    summary: 'How AUNO Center distinguishes institutional information, educational resources, external evidence, review status, revisions, and corrections.',
    keywords: ['editorial', 'review', 'peer review', 'correction', 'version', 'citation', 'publication status']
  },
  {
    id: 'projects',
    label: 'Projects & publications register',
    href: '/projects-publications/',
    summary: 'Verified-only public register; no project or publication entry is currently claimed without supporting records.',
    keywords: ['project', 'publication', 'doi', 'pmid', 'portfolio', 'record', 'partner']
  },
  {
    id: 'join',
    label: 'Join AUNO Center',
    href: '/join/',
    summary: 'Professional-interest route for research, writing, statistics, training, development, design, volunteering, and collaboration.',
    keywords: ['join', 'job', 'career', 'volunteer', 'writer', 'statistician', 'trainer', 'developer', 'designer', 'collaborate']
  },
  {
    id: 'contact',
    label: 'Contact AUNO Center',
    href: '/contact/',
    summary: 'Official email, telephone, social channels, and enquiry routes.',
    keywords: ['contact', 'email', 'phone', 'whatsapp', 'social', 'youtube', 'telegram']
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    href: '/privacy/',
    summary: 'Website, form, PubMed, and Interpeko data-processing information and privacy rights.',
    keywords: ['privacy', 'data', 'retention', 'openai', 'personal information', 'delete']
  },
  {
    id: 'disclaimer',
    label: 'Research Consultancy Disclaimer',
    href: '/research-consultancy-disclaimer/',
    summary: 'Limits of educational guidance, consultancy, professional advice, outcomes, and researcher responsibility.',
    keywords: ['limit', 'guarantee', 'diagnosis', 'legal', 'approval', 'responsibility', 'disclaimer']
  }
];

export const academicModes = [
  ['Question formulation', 'Move from a broad topic to a specific, answerable and ethically appropriate question.'],
  ['Study design', 'Compare design families by intended inference, feasibility, bias, measurement and context.'],
  ['Analysis planning', 'Clarify outcomes, variables, estimands, assumptions, missing data and transparent reporting.'],
  ['Evidence synthesis', 'Structure a reproducible search, screening, appraisal and synthesis pathway.'],
  ['Scientific writing', 'Improve argument, reporting logic, contribution statements, limitations and manuscript readiness.'],
  ['Ethics & integrity', 'Identify governance, consent, privacy, authorship, disclosure and responsible-AI questions.']
];

export const guidedResponses = [
  {
    id: 'research-question',
    keywords: ['research question', 'question', 'topic', 'pico', 'peo', 'spider', 'objective', 'hypothesis'],
    title: 'Research-question pathway',
    answer: `Clarify the decision or knowledge gap before choosing a method. A defensible question normally identifies the population or context, the phenomenon, exposure or intervention, the comparison when relevant, the outcome or concept of interest, and the intended timeframe or inference.\n\nRecommended next steps\n1. Write the real problem in one sentence.\n2. State who or what the question concerns.\n3. Separate descriptive, comparative, explanatory and exploratory aims.\n4. Check whether the intended data and design can support the wording.\n5. Record feasibility, ethics and stakeholder considerations.\n\nPICO, PEO and SPIDER can be useful prompts, but no framework should be forced onto a question it does not fit.`,
    sourceIds: ['services', 'resources', 'academic-standards', 'request-support']
  },
  {
    id: 'study-design',
    keywords: ['study design', 'design', 'cross-sectional', 'cohort', 'case control', 'trial', 'qualitative', 'mixed methods', 'sample'],
    title: 'Study-design pathway',
    answer: `Choose a design by the inference the project needs—not by familiarity with a template. Compare candidate designs across temporality, comparison, selection, measurement, confounding, participant burden, feasibility and ethical acceptability.\n\nRecommended next steps\n1. Classify the aim as descriptive, associative, causal, predictive, evaluative or interpretive.\n2. Define the unit of analysis and sampling frame.\n3. Identify the principal threats to validity for each candidate design.\n4. Match measurement timing and follow-up to the question.\n5. Document what the design cannot establish.\n\nA design label alone never guarantees rigor; execution, measurement, analysis and transparent reporting remain decisive.`,
    sourceIds: ['services', 'resources', 'academic-standards', 'ethics']
  },
  {
    id: 'analysis-plan',
    keywords: ['analysis', 'statistic', 'statistical', 'p value', 'regression', 'sample size', 'missing data', 'variable', 'outcome'],
    title: 'Analysis-planning pathway',
    answer: `Begin with the estimand or quantity the study is trying to learn—not with a software menu. An analysis plan should connect the question, design, outcomes, variables, assumptions and interpretation.\n\nRecommended next steps\n1. Define the primary outcome, comparison, population and timeframe.\n2. Create a variable and coding dictionary before analysis.\n3. Separate primary, secondary and exploratory analyses.\n4. Pre-specify assumption checks, missing-data handling and sensitivity analyses.\n5. Report effect estimates and uncertainty, not only thresholded p-values.\n6. Record changes made after seeing the data.\n\nStatistical methods cannot repair an unsuitable design or poor-quality data, and they cannot guarantee a preferred finding.`,
    sourceIds: ['services', 'resources', 'academic-standards', 'disclaimer']
  },
  {
    id: 'evidence-synthesis',
    keywords: ['systematic review', 'literature review', 'evidence synthesis', 'search strategy', 'screening', 'prisma', 'pubmed'],
    title: 'Evidence-synthesis pathway',
    answer: `A reproducible review begins with an explicit question, eligibility criteria and protocol. The search, screening, appraisal and synthesis methods should be documented well enough for another researcher to understand what was done.\n\nRecommended next steps\n1. Define the review question and inclusion criteria together.\n2. Select databases for subject coverage rather than convenience alone.\n3. Develop concepts, synonyms and controlled vocabulary.\n4. Save complete strategies, dates and result counts.\n5. Plan duplicate screening and conflict resolution where appropriate.\n6. Match synthesis to study heterogeneity and risk of bias.\n\nInterpeko does not invent references. Use the PubMed interface and other appropriate databases to verify every citation.`,
    sourceIds: ['pubmed', 'services', 'resources', 'academic-standards']
  },
  {
    id: 'writing-publication',
    keywords: ['write', 'writing', 'manuscript', 'abstract', 'discussion', 'publication', 'journal', 'citation', 'reference', 'author'],
    title: 'Scientific-writing pathway',
    answer: `Scientific writing should make the research logic inspectable. Each claim needs an appropriate evidence base, each method needs enough detail to evaluate, and each conclusion must remain within the design and results.\n\nRecommended next steps\n1. Map each section to the research question and relevant reporting guideline.\n2. Separate results from interpretation.\n3. Use effect size, uncertainty and limitations to calibrate claims.\n4. Verify every citation against the original source.\n5. Agree authorship, contribution and AI disclosure before submission.\n6. Complete a journal-specific and reporting-guideline check.\n\nInterpeko can support structure and revision, but it must not fabricate citations, conceal assistance or replace accountable authorship.`,
    sourceIds: ['services', 'academic-standards', 'ethics', 'editorial-policy']
  },
  {
    id: 'ethics-integrity',
    keywords: ['ethic', 'integrity', 'consent', 'participant', 'patient', 'privacy', 'confidential', 'authorship', 'plagiarism', 'ai use'],
    title: 'Ethics-and-integrity pathway',
    answer: `Ethics and integrity must be built into the research process, not added at submission. Requirements vary by jurisdiction and institution, so Interpeko cannot provide ethics approval or legal advice.\n\nRecommended next steps\n1. Identify the responsible institution, review body and applicable rules.\n2. Minimise data and participant burden.\n3. Plan consent, privacy, access, retention and secure transfer.\n4. Discuss authorship, contribution and conflicts early.\n5. Record deviations, limitations and corrections transparently.\n6. Disclose and verify any AI assistance under applicable policies.\n\nNever enter identifiable participant, patient, confidential or unpublished project data into this assistant.`,
    sourceIds: ['ethics', 'privacy', 'academic-standards', 'disclaimer']
  },
  {
    id: 'courses-training',
    keywords: ['course', 'training', 'learn', 'scholarship', 'enroll', 'workshop', 'certificate'],
    title: 'Learning pathway',
    answer: `AUNO Center publishes ten course pathways covering research foundations, proposals, biostatistics, questionnaire design, literature review, scientific writing, systematic reviews, critical appraisal, research ethics and responsible AI. Separate forms are available for enrollment, scholarships and institutional training enquiries.\n\nReview the course page for price, level, intended audience and published boundaries. A schedule, instructor, certificate or place is not confirmed until AUNO Center provides written enrollment details.`,
    sourceIds: ['courses', 'training', 'contact']
  },
  {
    id: 'services-support',
    keywords: ['service', 'support', 'consult', 'methodology', 'questionnaire', 'proposal', 'results interpretation', 'pre-submission'],
    title: 'Research-support pathway',
    answer: `AUNO Center provides eleven services across methods and measurement; evidence, writing and publication; and applied healthcare and institutional support. Support can address one focused decision or several connected stages.\n\nBegin with a non-confidential description of the project stage, the decision you need to make, available material, intended use and any deadline. Scope, responsibilities, limitations, deliverables and timing are confirmed before work begins. No outcome, approval, publication, funding or statistically significant result is guaranteed.`,
    sourceIds: ['services', 'request-support', 'disclaimer']
  },
  {
    id: 'join-collaboration',
    keywords: ['join', 'job', 'career', 'volunteer', 'collaborate', 'writer', 'statistician', 'trainer', 'developer', 'designer'],
    title: 'Professional-interest pathway',
    answer: `The Join AUNO Center portal accepts professional interest from researchers, writers, statisticians, trainers, developers, designers, volunteers and collaborators. Submissions are reviewed against verified needs and do not guarantee selection, work, payment, membership or appointment.\n\nShare only information you are authorised to provide. Optional CVs are handled as private Netlify form submissions and are not stored in the public repository.`,
    sourceIds: ['join', 'contact', 'privacy']
  },
  {
    id: 'institution',
    keywords: ['auno', 'about', 'founder', 'director', 'mustafa', 'mission', 'vision', 'one world'],
    title: 'Institutional overview',
    answer: `AUNO Center is an interdisciplinary research-support and capacity-building center founded and directed by Mustafa Saadabi of the Faculty of Medicine. Its official slogan is “One World. One Research. One Center of Excellence.”\n\nThe Center connects research support, education, responsible innovation and knowledge exchange across human health, animal wellbeing, earth, nature and the environment. Public claims are intentionally limited to verified information; the projects and publications register remains empty until supporting records are available.`,
    sourceIds: ['about', 'projects', 'contact']
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'phone', 'whatsapp', 'telegram', 'instagram', 'facebook', 'linkedin', 'youtube', 'social'],
    title: 'Contact pathway',
    answer: `Use the official Contact page for AUNO Center’s email, telephone and verified social channels. Project-specific research requests, training enquiries, collaboration proposals and general messages have separate routes so the right information can be reviewed.\n\nDo not send patient details, identifiable participant information, confidential datasets, passwords, payment credentials or unpublished sensitive material through a public form or social platform.`,
    sourceIds: ['contact', 'request-support', 'privacy']
  }
];

export function selectGuidedResponse(question) {
  const normalized = String(question || '').toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const response of guidedResponses) {
    const score = response.keywords.reduce((total, keyword) => total + (normalized.includes(keyword) ? Math.max(1, keyword.split(' ').length) : 0), 0);
    if (score > bestScore) {
      best = response;
      bestScore = score;
    }
  }
  return best || {
    id: 'general',
    title: 'Research navigation',
    answer: `Interpeko can help structure a research question, compare study designs, plan analysis, organise evidence synthesis, improve scientific writing, identify ethics and integrity considerations, or navigate AUNO Center services and learning routes.\n\nDescribe the research decision you are trying to make without including names, confidential information, patient or participant details, unpublished findings or protected data. For project-specific review, use the research-support request route.`,
    sourceIds: ['services', 'resources', 'academic-standards', 'request-support', 'contact']
  };
}

export function sourcesFor(question, answer = '') {
  const selected = selectGuidedResponse(`${question} ${answer}`);
  return selected.sourceIds
    .map(id => approvedSources.find(source => source.id === id))
    .filter(Boolean)
    .slice(0, 4);
}

export const institutionalContext = `
AUNO Center is an interdisciplinary research-support and capacity-building center.
Official slogan: One World. One Research. One Center of Excellence.
Founder and Director: Mustafa Saadabi, Faculty of Medicine.
Official contact: aunocenter@gmail.com and +1 (940) 730-6443.
The Center publishes eleven research services and ten course pathways. It supports research design and methodology, statistical analysis, questionnaire development, literature review, results interpretation, scientific writing, manuscript development, pre-submission review, research proposals, healthcare research consultancy, and institutional research support.
No public project, publication, partner, accreditation, award, impact metric, instructor, event date, certificate, or guaranteed outcome may be claimed unless explicitly verified on an approved source page. The current projects and publications register has no verified public entries.
Interpeko is an educational research-navigation and methods assistant. It is not a clinician, ethics committee, lawyer, regulator, statistician of record, supervisor, journal editor, hiring panel, or final decision-maker.
`;
