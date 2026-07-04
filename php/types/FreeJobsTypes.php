<?php
declare(strict_types=1);

// Typed models for the FreeJobs SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Job entity data model. */
class Job
{
    public ?string $application_url = null;
    public ?string $company = null;
    public ?string $description = null;
    public ?string $employment_type = null;
    public ?string $id = null;
    public ?string $industry = null;
    public ?string $location = null;
    public ?string $posted_date = null;
    public ?bool $remote = null;
    public ?array $requirement = null;
    public ?array $salary = null;
    public ?string $title = null;
}

/** Match filter for Job#list (any subset of Job fields). */
class JobListMatch
{
    public ?string $application_url = null;
    public ?string $company = null;
    public ?string $description = null;
    public ?string $employment_type = null;
    public ?string $id = null;
    public ?string $industry = null;
    public ?string $location = null;
    public ?string $posted_date = null;
    public ?bool $remote = null;
    public ?array $requirement = null;
    public ?array $salary = null;
    public ?string $title = null;
}

