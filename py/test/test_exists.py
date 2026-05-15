# ProjectName SDK exists test

import pytest
from freejobs_sdk import FreeJobsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FreeJobsSDK.test(None, None)
        assert testsdk is not None
