package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "FreeJobs",
			"slug": "free-jobs",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.joinrise.io/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"job": map[string]any{},
			},
		},
		"entity": map[string]any{
			"job": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "uri",
						"name": "application_url",
						"short": "URL to apply for the job",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "company",
						"short": "Company name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed job description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "employment_type",
						"short": "Type of employment",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the job listing",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "industry",
						"short": "Industry sector",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"short": "Job location",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "posted_date",
						"short": "Date when the job was posted",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "remote",
						"short": "Whether the position is remote",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "requirements",
						"short": "List of job requirements and qualifications",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "salary",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "title",
						"short": "Job title",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "job",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "industry",
											"orig": "industry",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "location",
											"orig": "location",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "salary_max",
											"orig": "salary_max",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "salary_min",
											"orig": "salary_min",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "title",
											"orig": "title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/jobs",
								"segments": []any{
									map[string]any{
										"lit": "jobs",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"industry",
										"limit",
										"location",
										"page",
										"salary_max",
										"salary_min",
										"title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"jobs",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
