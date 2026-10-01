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
      "limit": "v1",
      "location": "v1",
      "page": "v1",
      "salary_max": "v1",
      "salary_min": "v1",
      "title": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "limit",
      "location",
      "title",
      "industry",
      "salary_min",
      "salary_max"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "success": true,
      "data": [
        {
          "application_url": "https://example.com/apply/job_12345",
          "company": "Tech Corp Inc.",
          "description": "x",
          "employment_type": "full-time",
          "id": "job_12345",
          "industry": "Technology",
          "location": "San Francisco, CA",
          "posted_date": "2023-10-15T10:30:00Z",
          "remote": false,
          "requirements": [
            "5+ years of experience",
            "Bachelor's degree in Computer Science",
            "Proficiency in Python and JavaScript"
          ],
          "salary": {
            "currency": "USD",
            "max": 150000,
            "min": 100000
          },
          "title": "Senior Software Engineer"
        }
      ],
      "pagination": {
        "limit": 10,
        "page": 1,
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
