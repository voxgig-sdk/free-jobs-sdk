# Typed models for the FreeJobs SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Job:
    application_url: Optional[str] = None
    company: Optional[str] = None
    description: Optional[str] = None
    employment_type: Optional[str] = None
    id: Optional[str] = None
    industry: Optional[str] = None
    location: Optional[str] = None
    posted_date: Optional[str] = None
    remote: Optional[bool] = None
    requirement: Optional[list] = None
    salary: Optional[dict] = None
    title: Optional[str] = None


@dataclass
class JobListMatch:
    application_url: Optional[str] = None
    company: Optional[str] = None
    description: Optional[str] = None
    employment_type: Optional[str] = None
    id: Optional[str] = None
    industry: Optional[str] = None
    location: Optional[str] = None
    posted_date: Optional[str] = None
    remote: Optional[bool] = None
    requirement: Optional[list] = None
    salary: Optional[dict] = None
    title: Optional[str] = None

