# FreeJobs SDK exists test

require "minitest/autorun"
require_relative "../FreeJobs_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FreeJobsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
