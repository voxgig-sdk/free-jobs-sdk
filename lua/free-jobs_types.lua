-- Typed models for the FreeJobs SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Job
---@field application_url? string
---@field company? string
---@field description? string
---@field employment_type? string
---@field id? string
---@field industry? string
---@field location? string
---@field posted_date? string
---@field remote? boolean
---@field requirement? table
---@field salary? table
---@field title? string

---@class JobListMatch
---@field application_url? string
---@field company? string
---@field description? string
---@field employment_type? string
---@field id? string
---@field industry? string
---@field location? string
---@field posted_date? string
---@field remote? boolean
---@field requirement? table
---@field salary? table
---@field title? string

local M = {}

return M
