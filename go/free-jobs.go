package voxgigfreejobssdk

import (
	"github.com/voxgig-sdk/free-jobs-sdk/go/core"
	"github.com/voxgig-sdk/free-jobs-sdk/go/entity"
	"github.com/voxgig-sdk/free-jobs-sdk/go/feature"
	_ "github.com/voxgig-sdk/free-jobs-sdk/go/utility"
)

// Type aliases preserve external API.
type FreeJobsSDK = core.FreeJobsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FreeJobsEntity = core.FreeJobsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FreeJobsError = core.FreeJobsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewJobEntityFunc = func(client *core.FreeJobsSDK, entopts map[string]any) core.FreeJobsEntity {
		return entity.NewJobEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFreeJobsSDK = core.NewFreeJobsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewFreeJobsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *FreeJobsSDK  { return NewFreeJobsSDK(nil) }
func Test() *FreeJobsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
