# FreeJobs SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FreeJobsFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreeJobsBaseFeature.new
    when "test"
      FreeJobsTestFeature.new
    else
      FreeJobsBaseFeature.new
    end
  end
end
