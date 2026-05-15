
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreeJobsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FreeJobsSDK.test()
    equal(null !== testsdk, true)
  })

})
