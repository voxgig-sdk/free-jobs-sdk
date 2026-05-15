<?php
declare(strict_types=1);

// FreeJobs SDK utility: feature_add

class FreeJobsFeatureAdd
{
    public static function call(FreeJobsContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
