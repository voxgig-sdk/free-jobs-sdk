<?php
declare(strict_types=1);

// FreeJobs SDK utility: prepare_body

class FreeJobsPrepareBody
{
    public static function call(FreeJobsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
