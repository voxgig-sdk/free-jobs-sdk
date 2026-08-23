
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
     test:     {
      "options": {
        "active": false
      }
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
          "short": "URL to apply for the job",
          "type": "`$STRING`"
        },
        {
          "name": "company",
          "short": "Company name",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Detailed job description",
          "type": "`$STRING`"
        },
        {
          "name": "employment_type",
          "short": "Type of employment",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the job listing",
          "type": "`$STRING`"
        },
        {
          "name": "industry",
          "short": "Industry sector",
          "type": "`$STRING`"
        },
        {
          "name": "location",
          "short": "Job location",
          "type": "`$STRING`"
        },
        {
          "name": "posted_date",
          "short": "Date when the job was posted",
          "type": "`$STRING`"
        },
        {
          "name": "remote",
          "short": "Whether the position is remote",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "requirements",
          "short": "List of job requirements and qualifications",
          "type": "`$ARRAY`"
        },
        {
          "name": "salary",
          "type": "`$OBJECT`"
        },
        {
          "name": "title",
          "short": "Job title",
          "type": "`$STRING`"
        }
      ],
      "name": "job",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "industry",
                    "orig": "industry",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "location",
                    "orig": "location",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "salary_max",
                    "orig": "salary_max",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "salary_min",
                    "orig": "salary_min",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "title",
                    "orig": "title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/jobs",
              "parts": [
                "jobs"
              ],
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
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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
  config
}

