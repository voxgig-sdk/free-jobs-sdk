<?php
declare(strict_types=1);

// FreeJobs SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FreeJobsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FreeJobsBaseFeature();
            case "test":
                return new FreeJobsTestFeature();
            default:
                return new FreeJobsBaseFeature();
        }
    }
}
