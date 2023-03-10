# format-timezone

GitHub Action to format time for a timezone string

Given a [timezone database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
(eg. America/Los_Angeles) and a format, this action will output the
current time in that location.

## Usage

```yaml
name: Output the current time in a timezone

on:
  workflow_dispatch:
    inputs:
      timezone:
        description: 'Timezone database name. eg. America/Los_Angeles'
        required: true


jobs:
  output-time:
    runs-on: ubuntu-latest
    steps:
      - name: Get time in ${{ inputs.timezone }}
        id: time
        uses: jingming/format-timezone@main
        with:
          format: "YYYY-MM-DD HH:mm:ss"
          timezone: ${{ inputs.timezone }}

```
