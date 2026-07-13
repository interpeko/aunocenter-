export const PUBLIC_CONTENT_REVISION = '2026-07-12';

function contentRecord(id, type, title, href, excerpt, keywords = []) {
  return Object.freeze({
    id,
    type,
    title,
    href,
    excerpt,
    keywords: Object.freeze([...keywords])
  });
}

const institutionalRecords = [
  contentRecord('about', 'Institution', 'About AUNO Center', '/about/', 'Institutional purpose, founder profile, audiences, and research-support approach.', ['auno', 'center', 'founder', 'director', 'mustafa saadabi', 'mission', 'vision']),
  contentRecord('vision-mission', 'Institution', 'Vision, mission & values', '/about/vision-mission/', 'The framework guiding AUNO Center’s research support.', ['vision', 'mission', 'values', 'objectives', 'principles']),
  contentRecord('services', 'Service directory', 'Research services', '/services/', 'Eleven research-support services across methods, measurement, evidence, writing, publication, healthcare, and institutional capability.', ['service', 'support', 'consultancy', 'methodology', 'statistics', 'questionnaire', 'manuscript', 'proposal']),
  contentRecord('request-support', 'Form route', 'Request research support', '/request-support/', 'Privacy-aware intake route for a non-confidential description of a research need.', ['request', 'project', 'help', 'consult', 'submit', 'timeline', 'price', 'cost']),
  contentRecord('courses', 'Course directory', 'Courses', '/courses/', 'Ten affordable courses in research foundations, proposals, biostatistics, questionnaires, evidence review, writing, appraisal, ethics, and responsible AI.', ['course', 'enroll', 'scholarship', 'learn', 'class', 'price']),
  contentRecord('course-enrollment', 'Form route', 'Course enrollment application', '/courses/enroll/', 'Tell us which course fits your learning goal. We will confirm intake availability and all enrollment details before any payment is requested.', ['course', 'enroll', 'enrollment', 'apply', 'application']),
  contentRecord('course-scholarship', 'Form route', 'Course scholarship request', '/courses/scholarship/', 'Explain the learning need, expected benefit, and financial barrier. A request is reviewed individually and does not guarantee funding or a course place.', ['course', 'scholarship', 'financial support', 'funding', 'apply']),
  contentRecord('training', 'Training', 'Training & capacity building', '/training/', 'Workshops, seminars, project clinics, and tailored institutional learning enquiries.', ['training', 'workshop', 'seminar', 'capacity', 'institutional learning']),
  contentRecord('resources', 'Resource directory', 'Research resource library', '/resources/', 'Educational articles, attributed PDFs, templates, checklists, and practical research tools.', ['resource', 'article', 'guide', 'template', 'checklist', 'pdf', 'learn']),
  contentRecord('pubmed', 'Evidence search', 'PubMed search', '/pubmed-search/', 'Privacy-aware search interface to official public NCBI PubMed records.', ['pubmed', 'literature', 'paper', 'article', 'evidence', 'search', 'citation', 'reference']),
  contentRecord('academic-standards', 'Policy and standards', 'Academic practice framework', '/academic-standards/', 'A structured framework for questions, protocols, design, analysis, transparent reporting, and reproducibility, with links to independent primary standards.', ['standard', 'guideline', 'reporting', 'consort', 'strobe', 'prisma', 'fair', 'icmje', 'credit', 'registry']),
  contentRecord('ethics', 'Policy and standards', 'Research ethics & integrity', '/research-ethics-integrity/', 'Consent, privacy, data stewardship, authorship, transparent reporting, corrections, and responsible AI boundaries.', ['ethics', 'integrity', 'consent', 'privacy', 'authorship', 'plagiarism', 'ai', 'confidential', 'participant']),
  contentRecord('editorial-policy', 'Policy and standards', 'Editorial & corrections policy', '/editorial-policy/', 'How AUNO Center distinguishes institutional information, educational resources, external evidence, review status, revisions, and corrections.', ['editorial', 'review', 'peer review', 'correction', 'version', 'citation', 'publication status']),
  contentRecord('projects', 'Research record', 'Projects & publications register', '/projects-publications/', 'Verified-only public register; no project or publication entry is currently claimed without supporting records.', ['project', 'publication', 'doi', 'pmid', 'portfolio', 'record', 'partner']),
  contentRecord('future-program', 'Program', 'Future Development Program', '/future-development-program/', 'Connected research for human health, animals, earth, nature, education, and innovation.', ['future development', 'program', 'health', 'animals', 'earth', 'nature', 'education', 'innovation']),
  contentRecord('healthcare-research', 'Research focus', 'Healthcare research', '/healthcare-research/', 'Methodological and analytical support may be available, subject to appropriate approvals, privacy safeguards, data governance, and professional boundaries.', ['healthcare', 'health', 'clinical', 'patient', 'privacy', 'governance']),
  contentRecord('institutional-support', 'Research focus', 'Institutional research support', '/institutional-research-support/', 'Research systems, shared methods, tailored learning, advisory workflows, and capability development for research-active organisations.', ['institutional', 'organisation', 'research system', 'methods clinic', 'capacity']),
  contentRecord('international-collaboration', 'Research focus', 'International collaboration', '/international-collaboration/', 'Responsible collaboration across disciplines, institutions, and contexts.', ['international', 'collaboration', 'partner', 'institution', 'equitable']),
  contentRecord('join', 'Form route', 'Join AUNO Center', '/join/', 'Professional-interest route for research, writing, statistics, training, development, design, volunteering, and collaboration.', ['join', 'job', 'career', 'volunteer', 'writer', 'statistician', 'trainer', 'developer', 'designer', 'collaborate', 'cv']),
  contentRecord('news-events', 'Updates', 'News & events', '/news-events/', 'Learning opportunities, planned programme formats, and new resources.', ['news', 'event', 'update', 'opportunity']),
  contentRecord('contact', 'Contact', 'Contact AUNO Center', '/contact/', 'Official email, telephone, social channels, and enquiry routes.', ['contact', 'email', 'phone', 'whatsapp', 'social', 'youtube', 'telegram']),
  contentRecord('faq', 'Help', 'Frequently asked questions', '/faq/', 'Answers about scope, timelines, privacy, responsibility, and services.', ['faq', 'question', 'help', 'scope', 'timeline']),
  contentRecord('privacy', 'Policy and standards', 'Privacy Policy', '/privacy/', 'Website, form, PubMed, and Interpeko data-processing information and privacy rights.', ['privacy', 'data', 'retention', 'openai', 'personal information', 'delete']),
  contentRecord('terms', 'Policy and standards', 'Terms of Use', '/terms/', 'Terms governing lawful use of the AUNO Center website, public resources, forms, intellectual property, external links, and limitations.', ['terms', 'acceptable use', 'website use']),
  contentRecord('disclaimer', 'Policy and standards', 'Research Consultancy Disclaimer', '/research-consultancy-disclaimer/', 'Limits of educational guidance, consultancy, professional advice, outcomes, and researcher responsibility.', ['limit', 'guarantee', 'diagnosis', 'legal', 'approval', 'responsibility', 'disclaimer']),
  contentRecord('accessibility', 'Policy and standards', 'Accessibility statement', '/accessibility/', 'AUNO Center’s accessibility goals, implemented measures, known limitations, testing approach, and route for reporting digital access barriers.', ['accessibility', 'disability', 'barrier', 'assistive technology'])
];

const serviceRecords = [
  ['research-design-methodology', 'Research Design & Methodology', 'Turn an important topic into a coherent, feasible, and ethically responsible research plan.', ['study design', 'methodology', 'protocol', 'sampling', 'bias']],
  ['statistical-analysis', 'Statistical Analysis', 'Plan and communicate analysis that fits the question, design, and quality of the available data.', ['statistics', 'biostatistics', 'analysis plan', 'regression', 'missing data']],
  ['questionnaire-development', 'Questionnaire Development', 'Create clear, purposeful instruments with appropriate constructs, response options, flow, and testing plans.', ['questionnaire', 'survey', 'instrument', 'validity', 'reliability']],
  ['results-interpretation', 'Results Interpretation', 'Explain findings, uncertainty, limitations, and practical meaning without overstating the evidence.', ['results', 'interpretation', 'effect size', 'uncertainty', 'discussion']],
  ['pre-submission-review', 'Pre-submission Review', 'Strengthen manuscript structure, reporting completeness, methodological clarity, and internal consistency.', ['pre-submission', 'manuscript review', 'journal', 'reporting guideline']],
  ['literature-review-support', 'Literature Review Support', 'Build transparent search, screening, appraisal, extraction, and synthesis workflows.', ['literature review', 'systematic review', 'search strategy', 'screening', 'synthesis']],
  ['scientific-writing', 'Scientific Writing', 'Communicate research with precise structure, evidence-aligned language, transparent reporting, and appropriate attribution.', ['scientific writing', 'academic writing', 'citation', 'reporting']],
  ['manuscript-development', 'Manuscript Development', 'Move from an approved research story and complete evidence base to a coherent, submission-ready manuscript draft.', ['manuscript', 'draft', 'publication', 'journal submission']],
  ['research-proposal-support', 'Research Proposal Support', 'Build a focused, feasible proposal with aligned aims, methods, ethics considerations, workplan, and communication.', ['proposal', 'grant', 'aims', 'workplan', 'ethics']],
  ['healthcare-research-consultancy', 'Healthcare Research Consultancy', 'Integrate rigorous methods with the privacy, governance, clinical-context, and communication responsibilities of healthcare research.', ['healthcare', 'clinical research', 'privacy', 'governance']],
  ['institutional-research-support', 'Institutional Research Support', 'Strengthen research systems, shared methods, review workflows, learning pathways, and evidence communication across an organisation.', ['institutional research', 'research system', 'capacity', 'workflow']]
].map(([slug, title, excerpt, keywords]) => contentRecord(`service-${slug}`, 'Research service', title, `/services/${slug}/`, excerpt, keywords));

const courseRecords = [
  ['foundations-scientific-research', 'Foundations of Scientific Research', 'Build a clear understanding of research questions, evidence, study design, ethics, variables, and the connected research lifecycle.', ['foundation', 'beginner', 'research question', 'study design', 'ethics']],
  ['research-proposal-development', 'Research Proposal Development', 'Develop a coherent proposal in which the problem, rationale, objectives, methods, ethics, workplan, and intended contribution align.', ['proposal', 'methods', 'workplan', 'institutional application']],
  ['biostatistics-health-research', 'Biostatistics for Health Research', 'Use statistical thinking to plan, describe, compare, model, interpret, and communicate health research data responsibly.', ['biostatistics', 'health research', 'statistics', 'analysis']],
  ['questionnaire-design', 'Questionnaire Design', 'Create purposeful questionnaires with clear constructs, answerable items, appropriate response options, accessible flow, and defensible testing plans.', ['questionnaire', 'survey', 'items', 'validity']],
  ['literature-search-review', 'Literature Search and Review', 'Move from an information need to a transparent search, organised evidence set, critical reading process, and responsible review narrative.', ['literature search', 'review', 'evidence', 'citation']],
  ['scientific-writing', 'Scientific Writing', 'Write precise, structured, evidence-aligned research reports and manuscripts with responsible citation, disclosure, and revision practices.', ['scientific writing', 'manuscript', 'imrad', 'citation']],
  ['systematic-review-fundamentals', 'Systematic Review Fundamentals', 'Understand the complete systematic review workflow from protocol and search through screening, appraisal, synthesis, reporting, and updates.', ['systematic review', 'protocol', 'screening', 'risk of bias']],
  ['critical-appraisal', 'Critical Appraisal', 'Evaluate whether research methods, analysis, reporting, and conclusions provide evidence that is credible and useful for a particular decision.', ['critical appraisal', 'evidence', 'bias', 'applicability']],
  ['research-ethics', 'Research Ethics', 'Understand research ethics as a continuing responsibility involving people, communities, data, contribution, transparency, and authorised oversight.', ['research ethics', 'consent', 'privacy', 'integrity']],
  ['artificial-intelligence-research', 'Artificial Intelligence for Research', 'Use AI tools critically and transparently across research tasks while protecting privacy, verifying outputs, and preserving human accountability.', ['artificial intelligence', 'ai', 'research', 'privacy', 'verification']]
].map(([slug, title, excerpt, keywords]) => contentRecord(`course-${slug}`, 'Course', title, `/courses/${slug}/`, excerpt, keywords));

const resourceRecords = [
  ['from-topic-to-researchable-question', 'From a Broad Topic to a Researchable Question', 'A practical route from an important idea to a focused, feasible question that can guide real methodological choices.', ['research question', 'topic', 'objective', 'feasibility']],
  ['choosing-a-study-design', 'Choosing a Study Design: Start with the Question', 'Compare designs by the questions they can answer, the evidence they require, and the limitations they introduce.', ['study design', 'cohort', 'case control', 'trial']],
  ['analysis-plan-before-the-data', 'Why an Analysis Plan Should Come Before the Data', 'Early analysis planning clarifies outcomes, variables, assumptions, missing data, and the limits of later interpretation.', ['analysis plan', 'variables', 'missing data', 'assumptions']],
  ['questionnaire-items-people-can-answer', 'Designing Questionnaire Items People Can Answer', 'Create items that ask one clear thing, use appropriate recall periods, and offer response options that fit real experience.', ['questionnaire', 'survey item', 'recall', 'response options']],
  ['beyond-the-p-value', 'Beyond the P-value: Interpreting Results Responsibly', 'Interpret estimates, uncertainty, design, data quality, and real-world importance together.', ['p value', 'effect estimate', 'uncertainty', 'interpretation']],
  ['reproducible-literature-review-workflow', 'A Reproducible Literature Review Workflow', 'Document how evidence is found, selected, appraised, extracted, synthesised, and updated.', ['literature review', 'screening', 'appraisal', 'synthesis']],
  ['authorship-contribution-integrity', 'Authorship, Contribution, and Research Integrity', 'Discuss contribution and accountability early, distinguish authorship from acknowledgement, and disclose assistance responsibly.', ['authorship', 'contribution', 'integrity', 'disclosure']],
  ['privacy-in-healthcare-research-data', 'Protecting Privacy in Healthcare Research Data', 'An introduction to data minimisation, access, transfer, linkage risk, retention, and formal governance requirements.', ['healthcare data', 'privacy', 'data minimisation', 'retention']]
].map(([slug, title, excerpt, keywords]) => contentRecord(`resource-${slug}`, 'Research guide', title, `/resources/${slug}/`, excerpt, keywords));

const learningMaterialRecords = [
  contentRecord('material-analytical-research-studies', 'Learning material', 'Analytical Research Studies', '/resources/analytical-research-studies.pdf', 'An advanced teaching presentation on analytical epidemiological designs, case–control and cohort methods, bias, confounding, causal inference, and interpretation.', ['analytical epidemiology', 'case control', 'cohort', 'bias', 'confounding']),
  contentRecord('material-data-analysis', 'Learning material', 'Data Analysis: Deep Statistical Analysis for Research', '/resources/data-analysis.pdf', 'A practical academic workshop covering analysis planning, data preparation, method selection, R, IBM SPSS Statistics, reporting, and reproducible research workflows.', ['data analysis', 'statistics', 'r', 'spss', 'reproducible research']),
  contentRecord('material-scientific-writing', 'Learning material', 'Research Report & Scientific Writing', '/resources/scientific-writing.pdf', 'A structured educational session on scientific writing, IMRaD, clinical research questions, evidence appraisal, abstracts, methods, results, referencing, plagiarism, and responsible AI use.', ['scientific writing', 'imrad', 'abstract', 'referencing', 'plagiarism'])
];

export const publicContentRegistry = Object.freeze([
  ...institutionalRecords,
  ...serviceRecords,
  ...courseRecords,
  ...resourceRecords,
  ...learningMaterialRecords
]);

export function publicContentById(id) {
  return publicContentRegistry.find(record => record.id === id) || null;
}
