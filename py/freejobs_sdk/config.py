# FreeJobs SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "FreeJobs",
            "slug": "free-jobs",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.joinrise.io/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "job": {},
            },
        },
        "entity": {
      "job": {
        "fields": [
          {
            "name": "application_url",
            "title": "Application Url",
            "type": "`$STRING`",
            "short": "URL to apply for the job",
            "format": "uri",
          },
          {
            "name": "company",
            "title": "Company",
            "type": "`$STRING`",
            "short": "Company name",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Detailed job description",
          },
          {
            "name": "employment_type",
            "title": "Employment Type",
            "type": "`$STRING`",
            "short": "Type of employment",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the job listing",
          },
          {
            "name": "industry",
            "title": "Industry",
            "type": "`$STRING`",
            "short": "Industry sector",
          },
          {
            "name": "location",
            "title": "Location",
            "type": "`$STRING`",
            "short": "Job location",
          },
          {
            "name": "posted_date",
            "title": "Posted Date",
            "type": "`$STRING`",
            "short": "Date when the job was posted",
            "format": "date-time",
          },
          {
            "name": "remote",
            "title": "Remote",
            "type": "`$BOOLEAN`",
            "short": "Whether the position is remote",
          },
          {
            "name": "requirements",
            "title": "Requirements",
            "type": "`$ARRAY`",
            "short": "List of job requirements and qualifications",
          },
          {
            "name": "salary",
            "title": "Salary",
            "type": "`$OBJECT`",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Job title",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "job",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/jobs",
                "segments": [
                  {
                    "lit": "jobs",
                  },
                ],
                "parts": [
                  "jobs",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "industry",
                      "orig": "industry",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "location",
                      "orig": "location",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "salary_max",
                      "orig": "salary_max",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                    {
                      "name": "salary_min",
                      "orig": "salary_min",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                    {
                      "name": "title",
                      "orig": "title",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "industry",
                    "limit",
                    "location",
                    "page",
                    "salary_max",
                    "salary_min",
                    "title",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
