# FreeJobs SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FreeJobsFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreeJobsBaseFeature.new
    when "ratelimit"
      FreeJobsRatelimitFeature.new
    when "retry"
      FreeJobsRetryFeature.new
    when "test"
      FreeJobsTestFeature.new
    when "timeout"
      FreeJobsTimeoutFeature.new
    else
      FreeJobsBaseFeature.new
    end
  end
end
