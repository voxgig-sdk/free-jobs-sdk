# FreeJobs SDK configuration

module FreeJobsConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "FreeJobs",
        "slug" => "free-jobs",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.joinrise.io/api/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "job" => {},
        },
      },
      "entity" => {
        "job" => {
          "fields" => [
            {
              "format" => "uri",
              "name" => "application_url",
              "short" => "URL to apply for the job",
              "type" => "`$STRING`",
            },
            {
              "name" => "company",
              "short" => "Company name",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Detailed job description",
              "type" => "`$STRING`",
            },
            {
              "name" => "employment_type",
              "short" => "Type of employment",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the job listing",
              "type" => "`$STRING`",
            },
            {
              "name" => "industry",
              "short" => "Industry sector",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "short" => "Job location",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "posted_date",
              "short" => "Date when the job was posted",
              "type" => "`$STRING`",
            },
            {
              "name" => "remote",
              "short" => "Whether the position is remote",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "requirements",
              "short" => "List of job requirements and qualifications",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "salary",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "title",
              "short" => "Job title",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "job",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "industry",
                        "orig" => "industry",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "location",
                        "orig" => "location",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "salary_max",
                        "orig" => "salary_max",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "salary_min",
                        "orig" => "salary_min",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "title",
                        "orig" => "title",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/jobs",
                  "segments" => [
                    {
                      "lit" => "jobs",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "industry",
                      "limit",
                      "location",
                      "page",
                      "salary_max",
                      "salary_min",
                      "title",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "jobs",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FreeJobsFeatures.make_feature(name)
  end
end
