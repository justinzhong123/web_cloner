# Spec Delta

## Purpose

Defines a maintainable source and generation model for the repository's agent instructions and website cloning workflow across supported agents.

## ADDED Requirements

### Requirement: Canonical agent sources
The repository SHALL identify one canonical project instruction document and one canonical clone workflow document, and SHALL distinguish these from generated platform adapters.

#### Scenario: Edit project guidance
- **WHEN** a maintainer needs to change project-wide agent guidance
- **THEN** the repository documentation identifies the single source file to edit

#### Scenario: Edit cloning guidance
- **WHEN** a maintainer needs to change cloning steps
- **THEN** the repository documentation identifies the single source workflow file to edit

### Requirement: Reproducible adapters
For each retained platform adapter, the repository SHALL provide a documented generation or direct-reference path that reproduces its content from canonical sources.

#### Scenario: Regenerate adapters
- **WHEN** a maintainer runs the documented sync commands after editing canonical sources
- **THEN** retained adapters reflect the updated instructions without manual duplication

### Requirement: Minimal supported surface
The repository SHALL document the agent platforms it actively supports and SHALL omit unrelated or unused agent configuration from the maintained source tree.

#### Scenario: Inspect agent folders
- **WHEN** a maintainer reviews the repository's agent-specific directories
- **THEN** each retained directory has a documented purpose and source relationship
