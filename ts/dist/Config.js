"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'FreeJobs',
        slug: "free-jobs",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.joinrise.io/api/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            job: {},
        }
    };
    entity = {
        "job": {
            "fields": [
                {
                    "format": "uri",
                    "name": "application_url",
                    "short": "URL to apply for the job",
                    "type": "`$STRING`"
                },
                {
                    "name": "company",
                    "short": "Company name",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "Detailed job description",
                    "type": "`$STRING`"
                },
                {
                    "name": "employment_type",
                    "short": "Type of employment",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier for the job listing",
                    "type": "`$STRING`"
                },
                {
                    "name": "industry",
                    "short": "Industry sector",
                    "type": "`$STRING`"
                },
                {
                    "name": "location",
                    "short": "Job location",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "posted_date",
                    "short": "Date when the job was posted",
                    "type": "`$STRING`"
                },
                {
                    "name": "remote",
                    "short": "Whether the position is remote",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "requirements",
                    "short": "List of job requirements and qualifications",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "salary",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "title",
                    "short": "Job title",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "job",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "industry",
                                        "orig": "industry",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "location",
                                        "orig": "location",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "salary_max",
                                        "orig": "salary_max",
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "salary_min",
                                        "orig": "salary_min",
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "title",
                                        "orig": "title",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/jobs",
                            "segments": [
                                {
                                    "lit": "jobs"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "industry",
                                    "limit",
                                    "location",
                                    "page",
                                    "salary_max",
                                    "salary_min",
                                    "title"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "jobs"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map