# FreeJobs SDK utility: prepare_body
require_relative 'media'
module FreeJobsUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return FreeJobsUtilities.raw_body(ctx.reqdata) if FreeJobsUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
