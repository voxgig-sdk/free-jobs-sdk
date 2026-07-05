# frozen_string_literal: true

# Typed models for the FreeJobs SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Job entity data model.
#
# @!attribute [rw] application_url
#   @return [String, nil]
#
# @!attribute [rw] company
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] employment_type
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] industry
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] posted_date
#   @return [String, nil]
#
# @!attribute [rw] remote
#   @return [Boolean, nil]
#
# @!attribute [rw] requirement
#   @return [Array, nil]
#
# @!attribute [rw] salary
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Job = Struct.new(
  :application_url,
  :company,
  :description,
  :employment_type,
  :id,
  :industry,
  :location,
  :posted_date,
  :remote,
  :requirement,
  :salary,
  :title,
  keyword_init: true
)

# Request payload for Job#list.
#
# @!attribute [rw] application_url
#   @return [String, nil]
#
# @!attribute [rw] company
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] employment_type
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] industry
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] posted_date
#   @return [String, nil]
#
# @!attribute [rw] remote
#   @return [Boolean, nil]
#
# @!attribute [rw] requirement
#   @return [Array, nil]
#
# @!attribute [rw] salary
#   @return [Hash, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
JobListMatch = Struct.new(
  :application_url,
  :company,
  :description,
  :employment_type,
  :id,
  :industry,
  :location,
  :posted_date,
  :remote,
  :requirement,
  :salary,
  :title,
  keyword_init: true
)

