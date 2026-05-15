<?php
declare(strict_types=1);

// FreeJobs SDK utility: result_body

class FreeJobsResultBody
{
    public static function call(FreeJobsContext $ctx): ?FreeJobsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
