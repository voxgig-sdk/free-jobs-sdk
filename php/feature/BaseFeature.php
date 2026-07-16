<?php
declare(strict_types=1);

// FreeJobs SDK base feature

class FreeJobsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FreeJobsContext $ctx, array $options): void {}
    public function PostConstruct(FreeJobsContext $ctx): void {}
    public function PostConstructEntity(FreeJobsContext $ctx): void {}
    public function SetData(FreeJobsContext $ctx): void {}
    public function GetData(FreeJobsContext $ctx): void {}
    public function GetMatch(FreeJobsContext $ctx): void {}
    public function SetMatch(FreeJobsContext $ctx): void {}
    public function PrePoint(FreeJobsContext $ctx): void {}
    public function PreSpec(FreeJobsContext $ctx): void {}
    public function PreRequest(FreeJobsContext $ctx): void {}
    public function PreResponse(FreeJobsContext $ctx): void {}
    public function PreResult(FreeJobsContext $ctx): void {}
    public function PreDone(FreeJobsContext $ctx): void {}
    public function PreUnexpected(FreeJobsContext $ctx): void {}
}
