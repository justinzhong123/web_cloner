# Spec Delta

## Purpose

Defines where each website cloning run stores its research and review artifacts so outputs remain discoverable and do not collide across target sites.

## ADDED Requirements

### Requirement: Site-scoped output
The cloning workflow SHALL place generated research, component specifications, animation captures, and visual references inside a directory identified by the target site.

#### Scenario: Clone a target site
- **WHEN** an agent begins a clone for a target hostname
- **THEN** it creates or selects that site's output directory and writes all review artifacts beneath it

#### Scenario: Clone multiple sites
- **WHEN** an agent processes more than one target hostname
- **THEN** the artifacts for each hostname remain in separate directories

### Requirement: Predictable artifact hierarchy
The cloning workflow SHALL use documented subdirectories for research, component specifications, and visual references, and SHALL keep reusable guidance outside generated site output.

#### Scenario: Inspect a completed clone
- **WHEN** a maintainer opens a site's output directory
- **THEN** they can locate research notes, component specifications, and screenshots by the documented paths

### Requirement: Existing artifact migration
The repository SHALL retain existing COUNTER research and visual references in the new hierarchy and update maintained references to their new paths.

#### Scenario: Follow a documented COUNTER reference
- **WHEN** a maintainer follows a maintained link to a COUNTER research file or screenshot
- **THEN** it resolves to the migrated artifact
