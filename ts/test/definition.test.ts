import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "job",
    "accessor": "Job",
    "op": "list",
    "method": "GET",
    "path": "/jobs",
    "args": [],
    "select": {
      "industry": "v1",
      "limit": 10,
      "location": "v1",
      "page": 1,
      "salary_max": "v1",
      "salary_min": "v1",
      "title": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page",
      "limit",
      "location",
      "title",
      "industry",
      "salary_min",
      "salary_max"
    ],
    "queryArgs": [
      {
        "name": "industry",
        "wire": "industry"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "location",
        "wire": "location"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "salary_max",
        "wire": "salary_max"
      },
      {
        "name": "salary_min",
        "wire": "salary_min"
      },
      {
        "name": "title",
        "wire": "title"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "data": [
        {
          "id": "job_12345",
          "title": "Senior Software Engineer",
          "company": "Tech Corp Inc.",
          "location": "San Francisco, CA",
          "description": "x",
          "requirements": [
            "5+ years of experience",
            "Bachelor's degree in Computer Science",
            "Proficiency in Python and JavaScript"
          ],
          "salary": {
            "min": 100000,
            "max": 150000,
            "currency": "USD"
          },
          "industry": "Technology",
          "employment_type": "full-time",
          "remote": false,
          "posted_date": "2023-10-15T10:30:00Z",
          "application_url": "https://example.com/apply/job_12345"
        }
      ],
      "pagination": {
        "page": 1,
        "limit": 10,
        "total": 150,
        "total_pages": 15
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
