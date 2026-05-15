-- FreeJobs SDK error

local FreeJobsError = {}
FreeJobsError.__index = FreeJobsError


function FreeJobsError.new(code, msg, ctx)
  local self = setmetatable({}, FreeJobsError)
  self.is_sdk_error = true
  self.sdk = "FreeJobs"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FreeJobsError:error()
  return self.msg
end


function FreeJobsError:__tostring()
  return self.msg
end


return FreeJobsError
