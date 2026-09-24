

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FreeJobsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('JobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FREE_JOBS_TEST_LIVE=TRUE.
  afterEach(liveDelay('FREE_JOBS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FreeJobsSDK.test()
    const ent = testsdk.Job()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FREE_JOBS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"application_url":{"a":true,"fo":"uri","h":"Application Url","n":"application_url","r":false,"sh":"URL to apply for the job","t":"`$STRING`","key$":"application_url","index$":0},"company":{"a":true,"h":"Company","n":"company","r":false,"sh":"Company name","t":"`$STRING`","key$":"company","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Detailed job description","t":"`$STRING`","key$":"description","index$":2},"employment_type":{"a":true,"h":"Employment Type","n":"employment_type","r":false,"sh":"Type of employment","t":"`$STRING`","key$":"employment_type","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the job listing","t":"`$STRING`","key$":"id","index$":4},"industry":{"a":true,"h":"Industry","n":"industry","r":false,"sh":"Industry sector","t":"`$STRING`","key$":"industry","index$":5},"location":{"a":true,"h":"Location","n":"location","r":false,"sh":"Job location","t":"`$STRING`","key$":"location","index$":6},"posted_date":{"a":true,"fo":"date-time","h":"Posted Date","n":"posted_date","r":false,"sh":"Date when the job was posted","t":"`$STRING`","key$":"posted_date","index$":7},"remote":{"a":true,"h":"Remote","n":"remote","r":false,"sh":"Whether the position is remote","t":"`$BOOLEAN`","key$":"remote","index$":8},"requirements":{"a":true,"h":"Requirements","n":"requirements","r":false,"sh":"List of job requirements and qualifications","t":"`$ARRAY`","key$":"requirements","index$":9},"salary":{"a":true,"h":"Salary","n":"salary","r":false,"t":"`$OBJECT`","key$":"salary","index$":10},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Job title","t":"`$STRING`","key$":"title","index$":11}},"id":{"field":"id","name":"id"},"name":"job","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /jobs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"industry","or":"industry","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"location","or":"location","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"salary_max","or":"salary_max","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"k":"query","n":"salary_min","or":"salary_min","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"k":"query","n":"title","or":"title","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/jobs","q":{"exist":["industry","limit","location","page","salary_max","salary_min","title"]},"r":{},"s":[{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"job","name__orig":"job","Name":"Job","name_":"job","name-":"job","NAME":"JOB","index$":0}, {"active":true,"entity":"job","key$":"BasicJobFlow","kind":"basic","name":"BasicJobFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"job_ref01"}}],"index$":0}]}, 'Job', {"GET /jobs":{"protocol":"http","operationId":"getJobs","responses":{"200":{"description":"Successful response with job listings","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"example":true,"key$":"success","type":"boolean"},"data":{"items":{"properties":{"application_url":{"description":"URL to apply for the job","example":"https://example.com/apply/job_12345","format":"uri","type":"string","key$":"application_url"},"company":{"description":"Company name","example":"Tech Corp Inc.","type":"string","key$":"company"},"description":{"description":"Detailed job description","type":"string","key$":"description"},"employment_type":{"description":"Type of employment","enum":["full-time","part-time","contract","temporary","internship"],"example":"full-time","type":"string","key$":"employment_type"},"id":{"description":"Unique identifier for the job listing","example":"job_12345","type":"string","key$":"id"},"industry":{"description":"Industry sector","example":"Technology","type":"string","key$":"industry"},"location":{"description":"Job location","example":"San Francisco, CA","type":"string","key$":"location"},"posted_date":{"description":"Date when the job was posted","example":"2023-10-15T10:30:00Z","format":"date-time","type":"string","key$":"posted_date"},"remote":{"description":"Whether the position is remote","example":false,"type":"boolean","key$":"remote"},"requirements":{"description":"List of job requirements and qualifications","example":["5+ years of experience","Bachelor's degree in Computer Science","Proficiency in Python and JavaScript"],"items":{"type":"string"},"type":"array","key$":"requirements"},"salary":{"properties":{"currency":{"description":"Currency code","example":"USD","type":"string"},"max":{"description":"Maximum salary","example":150000,"type":"number"},"min":{"description":"Minimum salary","example":100000,"type":"number"}},"type":"object","key$":"salary"},"title":{"description":"Job title","example":"Senior Software Engineer","type":"string","key$":"title"}},"type":"object","x-ref":"#/components/schemas/Job","index$":0},"key$":"data","type":"array"},"pagination":{"key$":"pagination","properties":{"limit":{"example":10,"type":"integer"},"page":{"example":1,"type":"integer"},"total":{"example":150,"type":"integer"},"total_pages":{"example":15,"type":"integer"}},"type":"object"}}}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string","example":"INVALID_PARAMETER"},"message":{"type":"string","example":"The provided parameter is invalid"}}}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"object","properties":{"code":{"type":"string","example":"INVALID_PARAMETER"},"message":{"type":"string","example":"The provided parameter is invalid"}}}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":0},{"name":"limit","in":"query","description":"Number of results per page","required":false,"schema":{"type":"integer","default":10,"minimum":1,"maximum":100},"index$":1},{"name":"location","in":"query","description":"Filter jobs by location","required":false,"schema":{"type":"string"},"index$":2},{"name":"title","in":"query","description":"Filter jobs by job title or keyword","required":false,"schema":{"type":"string"},"index$":3},{"name":"industry","in":"query","description":"Filter jobs by industry sector","required":false,"schema":{"type":"string"},"index$":4},{"name":"salary_min","in":"query","description":"Minimum salary filter","required":false,"schema":{"type":"number"},"index$":5},{"name":"salary_max","in":"query","description":"Maximum salary filter","required":false,"schema":{"type":"number"},"index$":6}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let job_ref01_data = Object.values(setup.data.existing.job)[0] as any

    // LIST
    const job_ref01_ent = client.Job()
    const job_ref01_match: any = {}

    const job_ref01_list = (await job_ref01_ent.list(job_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/job/JobTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FreeJobsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['job01','job02','job03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FREE_JOBS_TEST_JOB_ENTID': idmap,
    'FREE_JOBS_TEST_LIVE': 'FALSE',
    'FREE_JOBS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FREE_JOBS_TEST_JOB_ENTID']

  const live = 'TRUE' === env.FREE_JOBS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FREE_JOBS_TEST_JOB_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FreeJobsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FREE_JOBS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
