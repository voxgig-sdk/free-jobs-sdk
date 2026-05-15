package core

type FreeJobsError struct {
	IsFreeJobsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFreeJobsError(code string, msg string, ctx *Context) *FreeJobsError {
	return &FreeJobsError{
		IsFreeJobsError: true,
		Sdk:              "FreeJobs",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FreeJobsError) Error() string {
	return e.Msg
}
