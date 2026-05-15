# FreeJobs SDK feature factory

from feature.base_feature import FreeJobsBaseFeature
from feature.test_feature import FreeJobsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FreeJobsBaseFeature(),
        "test": lambda: FreeJobsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
