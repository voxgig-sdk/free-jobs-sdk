# FreeJobs SDK

Browse publicly listed tech and startup job postings from the Rise job-search platform

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Free Jobs API

[Rise](https://joinrise.co/) is a job-search platform focused on tech, startup, and adjacent roles, run by Work Rise LLC out of New York City. The platform aggregates job listings across categories such as engineering, design, product, marketing, sales, and data, with an emphasis on remote, entry-level, internship, and visa-sponsored opportunities.

The Free Jobs API exposes Rise's public job-postings feed at `https://api.joinrise.io/api/v1`, listed on [Free Public APIs](https://freepublicapis.com/free-jobs-api). Each posting typically includes a title, location, salary information (where provided by the employer), and role requirements.

What you get from the API:

- A paginated list of public job postings via `GET /jobs/public` with `page`, `limit`, `sort`, `sortedBy`, and `jobLoc` query parameters
- Job metadata such as title, location, salary, and requirements
- Sort by fields like `createdAt` in ascending or descending order

Operational notes: the endpoint is open (no API key documented), CORS is enabled, and observed average response time is around 1.8 seconds. Rate limits and uptime guarantees are not published, so treat the API as best-effort.

## Try it

**TypeScript**
```bash
npm install free-jobs
```

**Python**
```bash
pip install free-jobs-sdk
```

**PHP**
```bash
composer require voxgig/free-jobs-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/free-jobs-sdk/go
```

**Ruby**
```bash
gem install free-jobs-sdk
```

**Lua**
```bash
luarocks install free-jobs-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FreeJobsSDK } from 'free-jobs'

const client = new FreeJobsSDK({})

// List all jobs
const jobs = await client.Job().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o free-jobs-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "free-jobs": {
      "command": "/abs/path/to/free-jobs-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Job** | A public job posting from the Rise platform, including title, location, salary, and requirements, served from `GET /jobs/public` with pagination and sort query parameters. | `/jobs` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from freejobs_sdk import FreeJobsSDK

client = FreeJobsSDK({})

# List all jobs
jobs, err = client.Job(None).list(None, None)
```

### PHP

```php
<?php
require_once 'freejobs_sdk.php';

$client = new FreeJobsSDK([]);

// List all jobs
[$jobs, $err] = $client->Job(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/free-jobs-sdk/go"

client := sdk.NewFreeJobsSDK(map[string]any{})

// List all jobs
jobs, err := client.Job(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "FreeJobs_sdk"

client = FreeJobsSDK.new({})

# List all jobs
jobs, err = client.Job(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("free-jobs_sdk")

local client = sdk.new({})

-- List all jobs
local jobs, err = client:Job(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FreeJobsSDK.test()
const result = await client.Job().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FreeJobsSDK.test(None, None)
result, err = client.Job(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FreeJobsSDK::test(null, null);
[$result, $err] = $client->Job(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Job(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FreeJobsSDK.test(nil, nil)
result, err = client.Job(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Job(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Free Jobs API

- Upstream: [https://joinrise.co/](https://joinrise.co/)
- API docs: [https://docs.joinrise.co/](https://docs.joinrise.co/)

- No explicit licence is published for the public jobs endpoint
- Job listings are sourced and curated by Work Rise LLC (joinrise.co) and remain the property of the originating employers
- Treat returned data as third-party content: attribute Rise where appropriate and review their site terms before redistributing or commercial reuse
- No authentication is required for the public endpoint, but no rate limits or SLAs are documented

---

Generated from the Free Jobs API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
