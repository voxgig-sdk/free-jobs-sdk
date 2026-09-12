import { FreeJobsEntityBase } from '../FreeJobsEntityBase';
import type { FreeJobsSDK } from '../FreeJobsSDK';
import type { Control } from '../types';
import type { Job, JobListMatch } from '../FreeJobsTypes';
declare class JobEntity extends FreeJobsEntityBase<Job> {
    constructor(client: FreeJobsSDK, entopts: any);
    make(this: JobEntity): JobEntity;
    list(this: any, reqmatch?: JobListMatch, ctrl?: Control): Promise<JobEntity[]>;
}
export { JobEntity };
