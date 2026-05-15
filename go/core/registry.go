package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewJobEntityFunc func(client *FreeJobsSDK, entopts map[string]any) FreeJobsEntity

