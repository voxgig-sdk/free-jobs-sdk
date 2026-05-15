# FreeJobs SDK utility: feature_add
module FreeJobsUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
