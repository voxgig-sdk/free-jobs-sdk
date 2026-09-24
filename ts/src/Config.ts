
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'FreeJobs',
        slug: "free-jobs",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.joinrise.io/api/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        job: {
        },
  
    }
  }


  entity = {
    "job": {
      "fields": [
        {
          "name": "application_url",
          "title": "Application Url",
          "type": "`$STRING`",
          "short": "URL to apply for the job",
          "format": "uri"
        },
        {
          "name": "company",
          "title": "Company",
          "type": "`$STRING`",
          "short": "Company name"
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "Detailed job description"
        },
        {
          "name": "employment_type",
          "title": "Employment Type",
          "type": "`$STRING`",
          "short": "Type of employment"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the job listing"
        },
        {
          "name": "industry",
          "title": "Industry",
          "type": "`$STRING`",
          "short": "Industry sector"
        },
        {
          "name": "location",
          "title": "Location",
          "type": "`$STRING`",
          "short": "Job location"
        },
        {
          "name": "posted_date",
          "title": "Posted Date",
          "type": "`$STRING`",
          "short": "Date when the job was posted",
          "format": "date-time"
        },
        {
          "name": "remote",
          "title": "Remote",
          "type": "`$BOOLEAN`",
          "short": "Whether the position is remote"
        },
        {
          "name": "requirements",
          "title": "Requirements",
          "type": "`$ARRAY`",
          "short": "List of job requirements and qualifications"
        },
        {
          "name": "salary",
          "title": "Salary",
          "type": "`$OBJECT`"
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "short": "Job title"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                  "lit": "jobs"
                }
              ],
              "parts": [
                "jobs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "industry",
                    "orig": "industry",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "location",
                    "orig": "location",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "salary_max",
                    "orig": "salary_max",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "salary_min",
                    "orig": "salary_min",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "title",
                    "orig": "title",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "industry",
                  "limit",
                  "location",
                  "page",
                  "salary_max",
                  "salary_min",
                  "title"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

