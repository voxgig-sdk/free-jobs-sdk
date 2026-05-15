
import { Context } from './Context'


class FreeJobsError extends Error {

  isFreeJobsError = true

  sdk = 'FreeJobs'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FreeJobsError
}

