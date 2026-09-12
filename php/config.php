<?php
declare(strict_types=1);

// FreeJobs SDK configuration

class FreeJobsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "FreeJobs",
                "slug" => "free-jobs",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.joinrise.io/api/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "job" => [],
                ],
            ],
            "entity" => [
        'job' => [
          'fields' => [
            [
              'format' => 'uri',
              'name' => 'application_url',
              'short' => 'URL to apply for the job',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'company',
              'short' => 'Company name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Detailed job description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'employment_type',
              'short' => 'Type of employment',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the job listing',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'industry',
              'short' => 'Industry sector',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'short' => 'Job location',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'posted_date',
              'short' => 'Date when the job was posted',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'remote',
              'short' => 'Whether the position is remote',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'requirements',
              'short' => 'List of job requirements and qualifications',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'salary',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'title',
              'short' => 'Job title',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'job',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'industry',
                        'orig' => 'industry',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'location',
                        'orig' => 'location',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'salary_max',
                        'orig' => 'salary_max',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'salary_min',
                        'orig' => 'salary_min',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'title',
                        'orig' => 'title',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/jobs',
                  'segments' => [
                    [
                      'lit' => 'jobs',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'industry',
                      'limit',
                      'location',
                      'page',
                      'salary_max',
                      'salary_min',
                      'title',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'jobs',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FreeJobsFeatures::make_feature($name);
    }
}
