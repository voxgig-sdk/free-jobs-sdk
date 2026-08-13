# FreeJobs SDK utility: make_context

from projectname_sdk.core.context import FreeJobsContext


def make_context_util(ctxmap, basectx):
    return FreeJobsContext(ctxmap, basectx)
