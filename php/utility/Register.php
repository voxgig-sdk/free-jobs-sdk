<?php
declare(strict_types=1);

// FreeJobs SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FreeJobsUtility::setRegistrar(function (FreeJobsUtility $u): void {
    $u->clean = [FreeJobsClean::class, 'call'];
    $u->done = [FreeJobsDone::class, 'call'];
    $u->make_error = [FreeJobsMakeError::class, 'call'];
    $u->feature_add = [FreeJobsFeatureAdd::class, 'call'];
    $u->feature_hook = [FreeJobsFeatureHook::class, 'call'];
    $u->feature_init = [FreeJobsFeatureInit::class, 'call'];
    $u->fetcher = [FreeJobsFetcher::class, 'call'];
    $u->make_fetch_def = [FreeJobsMakeFetchDef::class, 'call'];
    $u->make_context = [FreeJobsMakeContext::class, 'call'];
    $u->make_options = [FreeJobsMakeOptions::class, 'call'];
    $u->make_request = [FreeJobsMakeRequest::class, 'call'];
    $u->make_response = [FreeJobsMakeResponse::class, 'call'];
    $u->make_result = [FreeJobsMakeResult::class, 'call'];
    $u->make_point = [FreeJobsMakePoint::class, 'call'];
    $u->make_spec = [FreeJobsMakeSpec::class, 'call'];
    $u->make_url = [FreeJobsMakeUrl::class, 'call'];
    $u->param = [FreeJobsParam::class, 'call'];
    $u->prepare_auth = [FreeJobsPrepareAuth::class, 'call'];
    $u->prepare_body = [FreeJobsPrepareBody::class, 'call'];
    $u->prepare_headers = [FreeJobsPrepareHeaders::class, 'call'];
    $u->prepare_method = [FreeJobsPrepareMethod::class, 'call'];
    $u->prepare_params = [FreeJobsPrepareParams::class, 'call'];
    $u->prepare_path = [FreeJobsPreparePath::class, 'call'];
    $u->prepare_query = [FreeJobsPrepareQuery::class, 'call'];
    $u->result_basic = [FreeJobsResultBasic::class, 'call'];
    $u->result_body = [FreeJobsResultBody::class, 'call'];
    $u->result_headers = [FreeJobsResultHeaders::class, 'call'];
    $u->transform_request = [FreeJobsTransformRequest::class, 'call'];
    $u->transform_response = [FreeJobsTransformResponse::class, 'call'];
});
