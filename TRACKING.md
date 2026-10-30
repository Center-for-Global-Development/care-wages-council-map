# Event Tracking

Two figures, each with its own `interactive_name`.

## Figure 2: care-wages-council-costs-map

Events go to the parent page through `shared/cgd-embed.js` as `cgd_analytics` messages, with `interactive_name = care-wages-council-costs-map`.

## Tracked events

| Event | action_type | action_label | action_value | Fires on |
|---|---|---|---|---|
| `interactive_view` | – | – | – | First load (once) |
| `interactive_engagement` | `filter` | `wage_benchmark` | `2.5%`, `4.5%`, `9%`, `12%` or `15%` | Benchmark button click |
| `interactive_engagement` | `view_control` | `compare_with` | `ct` or `csp` | Measure toggle |
| `interactive_engagement` | `filter` | `council_select` | `selected` or `cleared` | "Find a council" select |
| `interactive_engagement` | `detail_open` | `council_map_click` | `selected` or `cleared` | Click or tap on a council |
| `interactive_engagement` | `view_control` | `fullscreen` | – | Fullscreen button (`cgd-embed.js` default rule) |

## Not tracked

- Hover and tooltips.
- Council identity: 151 values would exceed the cardinality budget, so only `selected` or `cleared` is sent.
- Scroll and resize.

## Figure 1: care-wages-budget-lines

| Event | action_type | action_label | action_value | Fires on |
|---|---|---|---|---|
| `interactive_view` | – | – | – | First load (once) |
| `interactive_engagement` | `filter` | `wage_benchmark` | `2.5%`, `4.5%`, `9%`, `12%` or `15%` | Benchmark button click |
| `interactive_engagement` | `view_control` | `fullscreen` | – | Fullscreen button (`cgd-embed.js` default rule) |

Not tracked: hover, tooltips, focus, scroll or resize.

## Workforce map: care-wages-workforce-map

| Event | action_type | action_label | action_value | Fires on |
|---|---|---|---|---|
| `interactive_view` | – | – | – | First load (once) |
| `interactive_engagement` | `view_control` | `workforce_view` | `share` or `count` | Show toggle |
| `interactive_engagement` | `filter` | `council_select` | `selected` or `cleared` | "Find a council" select |
| `interactive_engagement` | `detail_open` | `council_map_click` | `selected` or `cleared` | Click or tap on a council or circle |
| `interactive_engagement` | `view_control` | `fullscreen` | – | Fullscreen button |
