# FreeJobs SDK utility: make_context
require_relative '../core/context'
module FreeJobsUtilities
  MakeContext = ->(ctxmap, basectx) {
    FreeJobsContext.new(ctxmap, basectx)
  }
end
