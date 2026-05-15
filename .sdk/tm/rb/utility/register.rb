# FreeJobs SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FreeJobsUtility.registrar = ->(u) {
  u.clean = FreeJobsUtilities::Clean
  u.done = FreeJobsUtilities::Done
  u.make_error = FreeJobsUtilities::MakeError
  u.feature_add = FreeJobsUtilities::FeatureAdd
  u.feature_hook = FreeJobsUtilities::FeatureHook
  u.feature_init = FreeJobsUtilities::FeatureInit
  u.fetcher = FreeJobsUtilities::Fetcher
  u.make_fetch_def = FreeJobsUtilities::MakeFetchDef
  u.make_context = FreeJobsUtilities::MakeContext
  u.make_options = FreeJobsUtilities::MakeOptions
  u.make_request = FreeJobsUtilities::MakeRequest
  u.make_response = FreeJobsUtilities::MakeResponse
  u.make_result = FreeJobsUtilities::MakeResult
  u.make_point = FreeJobsUtilities::MakePoint
  u.make_spec = FreeJobsUtilities::MakeSpec
  u.make_url = FreeJobsUtilities::MakeUrl
  u.param = FreeJobsUtilities::Param
  u.prepare_auth = FreeJobsUtilities::PrepareAuth
  u.prepare_body = FreeJobsUtilities::PrepareBody
  u.prepare_headers = FreeJobsUtilities::PrepareHeaders
  u.prepare_method = FreeJobsUtilities::PrepareMethod
  u.prepare_params = FreeJobsUtilities::PrepareParams
  u.prepare_path = FreeJobsUtilities::PreparePath
  u.prepare_query = FreeJobsUtilities::PrepareQuery
  u.result_basic = FreeJobsUtilities::ResultBasic
  u.result_body = FreeJobsUtilities::ResultBody
  u.result_headers = FreeJobsUtilities::ResultHeaders
  u.transform_request = FreeJobsUtilities::TransformRequest
  u.transform_response = FreeJobsUtilities::TransformResponse
}
