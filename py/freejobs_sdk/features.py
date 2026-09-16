# FreeJobs SDK feature factory

from freejobs_sdk.feature.base_feature import FreeJobsBaseFeature
from freejobs_sdk.feature.ratelimit_feature import FreeJobsRatelimitFeature
from freejobs_sdk.feature.retry_feature import FreeJobsRetryFeature
from freejobs_sdk.feature.test_feature import FreeJobsTestFeature
from freejobs_sdk.feature.timeout_feature import FreeJobsTimeoutFeature


_FEATURES = {
    "base": lambda: FreeJobsBaseFeature(),
    "ratelimit": lambda: FreeJobsRatelimitFeature(),
    "retry": lambda: FreeJobsRetryFeature(),
    "test": lambda: FreeJobsTestFeature(),
    "timeout": lambda: FreeJobsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
