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
| `interactive_engagement` | `view_control` | `pay_variant` | `uniform`, `floor` or `market` | "How pay rises across councils" toggle |
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
| `interactive_engagement` | `view_control` | `workforce_view` | `share`, `count` or `vac` | Show toggle |
| `interactive_engagement` | `view_control` | `vacancy_year` | `2025/26` or `2021/22` | Vacancy year toggle (vacancies view only) |
| `interactive_engagement` | `filter` | `council_select` | `selected` or `cleared` | "Find a council" select |
| `interactive_engagement` | `detail_open` | `council_map_click` | `selected` or `cleared` | Click or tap on a council or circle |
| `interactive_engagement` | `view_control` | `fullscreen` | – | Fullscreen button |

## Figure 5 (blog numbering): care-wages-settlement-timing

| Event | action_type | action_label | action_value | Fires on |
|---|---|---|---|---|
| `interactive_view` | – | – | – | First load (once) |
| `interactive_engagement` | `view_control` | `timing_period` | `quarter` or `year` | "Show by" toggle |
| `interactive_engagement` | `view_control` | `timing_count` | `all` or `qualify` | "Count" toggle |
| `interactive_engagement` | `view_control` | `fullscreen` | – | Fullscreen button |

Not tracked: hover, tooltips, focus, scroll or resize.

## Figure 2 (blog numbering): care-wages-pay-premium

| Event | action_type | action_label | action_value | Fires on |
|---|---|---|---|---|
| `interactive_view` | – | – | – | First load (once) |
| `interactive_engagement` | `view_control` | `fullscreen` | – | Fullscreen button |

Not tracked: hover, tooltips, focus, scroll or resize.

