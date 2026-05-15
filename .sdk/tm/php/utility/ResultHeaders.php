<?php
declare(strict_types=1);

// FreeJobs SDK utility: result_headers

class FreeJobsResultHeaders
{
    public static function call(FreeJobsContext $ctx): ?FreeJobsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
