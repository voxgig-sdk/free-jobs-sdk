package = "voxgig-sdk-free-jobs"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/free-jobs-sdk.git"
}
description = {
  summary = "FreeJobs SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["free-jobs_sdk"] = "free-jobs_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
