export interface Job {
    application_url?: string;
    company?: string;
    description?: string;
    employment_type?: string;
    id?: string;
    industry?: string;
    location?: string;
    posted_date?: string;
    remote?: boolean;
    requirements?: any[];
    salary?: Record<string, any>;
    title?: string;
}
export interface JobListMatch {
    industry?: string;
    limit?: number;
    location?: string;
    page?: number;
    salary_max?: number;
    salary_min?: number;
    title?: string;
}
