<?php
declare(strict_types=1);

// FreeJobs SDK exists test

require_once __DIR__ . '/../freejobs_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FreeJobsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
