
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


  main = {
    name: 'FreeJobs',
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
          "type": "`$STRING`"
        },
        {
          "name": "company",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "employment_type",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "industry",
          "type": "`$STRING`"
        },
        {
          "name": "location",
          "type": "`$STRING`"
        },
        {
          "name": "posted_date",
          "type": "`$STRING`"
        },
        {
          "name": "remote",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "requirements",
          "type": "`$ARRAY`"
        },
        {
          "name": "salary",
          "type": "`$OBJECT`"
        },
        {
          "name": "title",
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

