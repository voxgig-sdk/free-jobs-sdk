
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreeJobsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FreeJobsSDK.test()
    equal(testsdk instanceof FreeJobsSDK, true,
      'FreeJobsSDK.test() must return a client synchronously')
  })

})
