# AUNO Center secure operations boundary

This document records the production controls required before confidential uploads, saved applications, document analysis, or an administrator workspace may be activated. The public website intentionally does not simulate these capabilities.

## Current safe release

- Public forms accept non-confidential text only.
- File controls are replaced by a visible configuration-required state.
- Interpeko receives JSON questions only, has no file, database, publishing, or administrator tools, and is grounded in the approved public-content registry.
- Search preferences and recently viewed routes are device-only. Search terms and form entries are not stored by that feature.
- Netlify form submissions from the GitHub Pages mirror are relayed by full-page POST to the primary AUNO Center Netlify form service.

## Required private platform

Before enabling uploads or application management, deploy all of the following as one reviewed system:

1. Identity provider with multi-factor authentication, verified administrator invitations, role-based access, session expiry, and recovery controls.
2. Private object storage with non-public buckets, server-generated object keys, encryption, explicit retention, and time-limited signed access.
3. Upload gateway with extension and MIME allowlists, magic-byte verification, strict byte limits, safe filename handling, rate limits, quarantine, and malware screening.
4. Transactional database for applications, document metadata, review status, assigned owner, notes, consent, retention dates, and immutable audit events.
5. Notification provider for verified acknowledgement and administrator alerts without placing sensitive document links in email.
6. Central secrets management, environment separation, backup and recovery, monitoring, incident response, and periodic access review.

## Proposed workflow

`draft → submitted → triage → in_review → changes_requested | approved | declined → published | archived`

Publishing is permitted only for approved public content. A suggestion from Interpeko or another automated system must enter `draft` or `changes_requested`; it must never publish directly.

## Minimum roles

- `submitter`: access only to their own verified submission through a time-limited authenticated route.
- `reviewer`: read assigned records, add review notes, and request changes.
- `publisher`: publish an approved public-content revision.
- `administrator`: manage roles, retention, and incident actions; no silent bypass of the audit log.

## Audit events

Record actor, role, event type, target identifier, previous state, next state, timestamp, request identifier, and integrity metadata. Never place document contents, secrets, or unnecessary personal data in an audit record.

## Interpeko document analysis gate

Document analysis remains off until the user gives explicit purpose-specific consent, the upload passes quarantine and malware screening, extraction occurs in a controlled worker, only sanitised text is sent to the model, retention is enforced, and deletion can be verified. The assistant must identify the supplied document as user-provided material and must not treat it as an authoritative or published source.

## Activation evidence

Activation requires reviewed threat modelling, access-control tests, upload bypass tests, malware quarantine tests, signed-link expiry tests, retention/deletion tests, audit-log tests, recovery tests, privacy and terms updates, an administrator runbook, and a successful independent security review proportionate to the data handled.
