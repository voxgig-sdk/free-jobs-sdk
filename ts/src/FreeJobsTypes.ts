// Typed models for the FreeJobs SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Job {
  application_url?: string
  company?: string
  description?: string
  employment_type?: string
  id?: string
  industry?: string
  location?: string
  posted_date?: string
  remote?: boolean
  requirement?: any[]
  salary?: Record<string, any>
  title?: string
}

export interface JobListMatch {
  application_url?: string
  company?: string
  description?: string
  employment_type?: string
  id?: string
  industry?: string
  location?: string
  posted_date?: string
  remote?: boolean
  requirement?: any[]
  salary?: Record<string, any>
  title?: string
}

