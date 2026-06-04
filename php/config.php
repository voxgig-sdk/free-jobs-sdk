<?php
declare(strict_types=1);

// FreeJobs SDK configuration

class FreeJobsConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "FreeJobs",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'name' => 'application_url',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'company',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'employment_type',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'industry',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'location',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'posted_date',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'remote',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'requirement',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'salary',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'title',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 11,
            ],
          ],
          'name' => 'job',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'industry',
                        'orig' => 'industry',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'location',
                        'orig' => 'location',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'salary_max',
                        'orig' => 'salary_max',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'salary_min',
                        'orig' => 'salary_min',
                        'reqd' => false,
                        'type' => '`$NUMBER`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'title',
                        'orig' => 'title',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/jobs',
                  'parts' => [
                    'jobs',
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
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
