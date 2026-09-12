-- FreeJobs SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FreeJobs",
      slug = "free-jobs",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.joinrise.io/api/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["job"] = {},
      },
    },
    entity = {
      ["job"] = {
        ["fields"] = {
          {
            ["format"] = "uri",
            ["name"] = "application_url",
            ["short"] = "URL to apply for the job",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "company",
            ["short"] = "Company name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Detailed job description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "employment_type",
            ["short"] = "Type of employment",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the job listing",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "industry",
            ["short"] = "Industry sector",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["short"] = "Job location",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "posted_date",
            ["short"] = "Date when the job was posted",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "remote",
            ["short"] = "Whether the position is remote",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "requirements",
            ["short"] = "List of job requirements and qualifications",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "salary",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "title",
            ["short"] = "Job title",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "job",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "industry",
                      ["orig"] = "industry",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "location",
                      ["orig"] = "location",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "salary_max",
                      ["orig"] = "salary_max",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "salary_min",
                      ["orig"] = "salary_min",
                      ["type"] = "`$NUMBER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "title",
                      ["orig"] = "title",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/jobs",
                ["segments"] = {
                  {
                    ["lit"] = "jobs",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "industry",
                    "limit",
                    "location",
                    "page",
                    "salary_max",
                    "salary_min",
                    "title",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "jobs",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
