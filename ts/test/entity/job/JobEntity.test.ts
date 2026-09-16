

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"uri","name":"application_url","req":false,"short":"URL to apply for the job","type":"`$STRING`","index$":0},{"active":true,"name":"company","req":false,"short":"Company name","type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"short":"Detailed job description","type":"`$STRING`","index$":2},{"active":true,"name":"employment_type","req":false,"short":"Type of employment","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"short":"Unique identifier for the job listing","type":"`$STRING`","index$":4},{"active":true,"name":"industry","req":false,"short":"Industry sector","type":"`$STRING`","index$":5},{"active":true,"name":"location","req":false,"short":"Job location","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"posted_date","req":false,"short":"Date when the job was posted","type":"`$STRING`","index$":7},{"active":true,"name":"remote","req":false,"short":"Whether the position is remote","type":"`$BOOLEAN`","index$":8},{"active":true,"name":"requirements","req":false,"short":"List of job requirements and qualifications","type":"`$ARRAY`","index$":9},{"active":true,"name":"salary","req":false,"type":"`$OBJECT`","index$":10},{"active":true,"name":"title","req":false,"short":"Job title","type":"`$STRING`","index$":11}],"id":{"field":"id","name":"id"},"name":"job","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"industry","orig":"industry","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"location","orig":"location","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"salary_max","orig":"salary_max","reqd":false,"type":"`$NUMBER`","index$":4},{"active":true,"kind":"query","name":"salary_min","orig":"salary_min","reqd":false,"type":"`$NUMBER`","index$":5},{"active":true,"kind":"query","name":"title","orig":"title","reqd":false,"type":"`$STRING`","index$":6}]},"contract":{"id":"GET /jobs","json":"{\"operationId\":\"getJobs\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results per page\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter jobs by location\",\"in\":\"query\",\"name\":\"location\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter jobs by job title or keyword\",\"in\":\"query\",\"name\":\"title\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter jobs by industry sector\",\"in\":\"query\",\"name\":\"industry\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Minimum salary filter\",\"in\":\"query\",\"name\":\"salary_min\",\"required\":false,\"schema\":{\"type\":\"number\"}},{\"description\":\"Maximum salary filter\",\"in\":\"query\",\"name\":\"salary_max\",\"required\":false,\"schema\":{\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"application_url\":{\"description\":\"URL to apply for the job\",\"example\":\"https://example.com/apply/job_12345\",\"format\":\"uri\",\"type\":\"string\"},\"company\":{\"description\":\"Company name\",\"example\":\"Tech Corp Inc.\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed job description\",\"type\":\"string\"},\"employment_type\":{\"description\":\"Type of employment\",\"enum\":[\"full-time\",\"part-time\",\"contract\",\"temporary\",\"internship\"],\"example\":\"full-time\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the job listing\",\"example\":\"job_12345\",\"type\":\"string\"},\"industry\":{\"description\":\"Industry sector\",\"example\":\"Technology\",\"type\":\"string\"},\"location\":{\"description\":\"Job location\",\"example\":\"San Francisco, CA\",\"type\":\"string\"},\"posted_date\":{\"description\":\"Date when the job was posted\",\"example\":\"2023-10-15T10:30:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"remote\":{\"description\":\"Whether the position is remote\",\"example\":false,\"type\":\"boolean\"},\"requirements\":{\"description\":\"List of job requirements and qualifications\",\"example\":[\"5+ years of experience\",\"Bachelor's degree in Computer Science\",\"Proficiency in Python and JavaScript\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"salary\":{\"properties\":{\"currency\":{\"description\":\"Currency code\",\"example\":\"USD\",\"type\":\"string\"},\"max\":{\"description\":\"Maximum salary\",\"example\":150000,\"type\":\"number\"},\"min\":{\"description\":\"Minimum salary\",\"example\":100000,\"type\":\"number\"}},\"type\":\"object\"},\"title\":{\"description\":\"Job title\",\"example\":\"Senior Software Engineer\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"pagination\":{\"properties\":{\"limit\":{\"example\":10,\"type\":\"integer\"},\"page\":{\"example\":1,\"type\":\"integer\"},\"total\":{\"example\":150,\"type\":\"integer\"},\"total_pages\":{\"example\":15,\"type\":\"integer\"}},\"type\":\"object\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Successful response with job listings\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"INVALID_PARAMETER\",\"type\":\"string\"},\"message\":{\"example\":\"The provided parameter is invalid\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"example\":\"INVALID_PARAMETER\",\"type\":\"string\"},\"message\":{\"example\":\"The provided parameter is invalid\",\"type\":\"string\"}},\"type\":\"object\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/jobs","segments":[{"lit":"jobs"}],"select":{"exist":["industry","limit","location","page","salary_max","salary_min","title"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"job","name__orig":"job","Name":"Job","name_":"job","name-":"job","NAME":"JOB","index$":0}, {"active":true,"entity":"job","key$":"BasicJobFlow","kind":"basic","name":"BasicJobFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"job_ref01"}}],"index$":0}]}, 'Job')
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
  
