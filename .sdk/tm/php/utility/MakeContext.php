<?php
declare(strict_types=1);

// FreeJobs SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FreeJobsMakeContext
{
    public static function call(array $ctxmap, ?FreeJobsContext $basectx): FreeJobsContext
    {
        return new FreeJobsContext($ctxmap, $basectx);
    }
}
