-- FreeJobs SDK exists test

local sdk = require("free-jobs_sdk")

describe("FreeJobsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
