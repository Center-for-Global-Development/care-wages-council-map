# What higher care wages would cost councils: interactive figures

Two figures for CGD's blog on care wages and council budgets:
- **Figure 1, `care-wage-budget-lines.html`:** the England-wide extra cost compared with other council budget lines.
- **Figure 2, `care-wage-council-map.html`:** the cost to each council, as a map.

Both use the same five benchmark buttons and the same shared layer. The sections below describe the map first; Figure 1 has its own section further down.

## Figure 2: council map

An interactive companion to CGD's blog on care wages and council budgets. The reader picks how much higher care labour costs are, using one of five benchmarks (2.5, 4.5, 9, 12 or 15%). Each English council is then shaded either by the council tax rise needed to cover the extra yearly cost (the cost as a share of its council tax requirement, assuming the full cost is passed on through council tax) or by the cost as a share of its core spending power.

Hovering or tapping a council shows:
- its extra cost, and that cost as a share of council tax and of spending power;
- the extra cost per dwelling;
- the extra cost compared with its library spending;
- its budget line closest in size to the extra cost.

Selecting a council lists the extra cost against six of its net service budgets.

The figure is built for a cgdev.org iframe and follows the CGD interactive-visualisation standard.

- **Question:** if care labour costs had to rise by X%, how big would the extra cost be for each council, relative to its own budget?
- **Default view:** 9% (MAC: £1 above the minimum wage), shaded by council tax rise needed, with no council selected. The side panel shows England totals.

## Links (GitHub Pages)

- Figure 1 (budget lines): https://center-for-global-development.github.io/care-wages-council-map/care-wage-budget-lines.html
- Figure 2 (map): https://center-for-global-development.github.io/care-wages-council-map/care-wage-council-map.html
- Workforce map: https://center-for-global-development.github.io/care-wages-council-map/care-wage-workforce-map.html
- Review page (all figures in iframes, as on cgdev.org): https://center-for-global-development.github.io/care-wages-council-map/preview.html

## Files

| File | What it is |
|---|---|
| `care-wage-budget-lines.html` | Figure 1 (`data-cgd-interactive-name="care-wages-budget-lines"`) |
| `data/budget-lines-data.js` | Generated: the England cost per 1 percentage point and seven budget-line totals. Do not edit by hand. |
| `care-wage-council-map.html` | Figure 2 (`data-cgd-interactive-name="care-wages-council-costs-map"`) |
| `data/care-wage-map-data.js` | Generated data: per-council cost per 1 percentage point, denominators, budget lines and SVG boundary paths. Do not edit by hand. |
| `shared/` | Unmodified copies of the CGD shared layer (`cgd-figure.css`, `cgd-responsive.css`, `chart-core.js`, `dom.js`, `cgd-embed.js`) |
| `preview.html` | Review page that embeds both figures and applies the height each reports. Not for publication. |
| `TRACKING.md` | Analytics events |

## Regenerating the data

The data comes from the analysis pipeline in the project folder (OneDrive: `UK healthcare visas/scripts`). It uses the same model as the blog and workbook (`14_wage_uplift.py`). Cost is linear in the uplift, so the page stores each council's cost per percentage point.

```
python scripts/18_interactive_map_data.py
```

`run_all.py` runs this step and writes straight into this repository's `data/` folder. Commit and push afterwards to update the published map.

The script prints the England cost at 9% (£1,533.9m, matching the workbook) and a join audit. All 151 councils match the boundaries. City of London has boundaries but no data and is hatched as "not included". The Isles of Scilly take Cornwall's values.

## Viewing locally

The data is a script file, so the figure opens straight from disk. To test the iframe contract, serve the folder and open `preview.html`:

```
python -m http.server 8766
```

## Method (summarised in the figure's notes)

- **Cost:** a uniform increase to the labour share of commissioned adult social care spending (DHSC ASC-FR 2025-26), passed in full into fees. The labour shares are 60% for care homes, 75% for community care and 70% for short-term care.
- **Denominators:**
  - each council's own 2025/26 council tax requirement (MHCLG Table 10);
  - core spending power 2025/26;
  - dwellings.
- **Budget lines:** 2025/26 net revenue spending (revenue outturn), using 2024/25 where a council has not yet reported. Lines with zero or negative net spending show as "–". A council with none (Cumberland) shows a short message instead.
- **Hourly pay:** £12.60 × (1 + increase), where £12.60 is Skills for Care's March 2026 median.
- **Projection:** Lambert azimuthal equal-area, centred on England.
- **Context land:** Scotland, Wales and Northern Ireland are drawn in dim grey from ONS Countries (December 2024, BUC), so their borders match the council boundaries. Ireland, the Isle of Man and the French coast come from Natural Earth 1:50m (world-atlas 2.0.2). They are not interactive and are drawn at 60% opacity. The view is widened slightly on both sides (70 units west, 60 east), so England sits centred and the London inset sits over the Irish Sea.

## Design decisions (settled; change only deliberately)

- **One screen:** on screens wider than 600px the map sits on the left, with the controls and the detail panel stacked on the right. The whole figure is about 745px tall at desktop widths, so it fits on one laptop screen without scrolling. On phones it stacks.
- **Benchmarks:** the increase is chosen from the blog's five benchmarks only (there is no free slider). Each button's quick tip names its source.
- **Colour bins** are fixed for each measure and held across benchmarks, so a change of colour always means a change of cost.
  - Council tax: <2.5, 2.5–5, 5–7.5, 7.5–10, 10–15 and 15+. The break at 5% is close to a year's maximum rise (4.99%).
  - Spending power: <1, 1–2, 2–3, 3–4, 4–6 and 6+.
- **Library comparison** uses net spending, consistent with the other budget lines. The analysis workbook's `x_library_gross` uses gross spending.
- **Notes** are set at 9.6px (below the house 10.8px) at the author's request, with linked sources.
- **No data download.**
- **Measure labels:** the toggle reads "Show the cost as: Council tax rise | % of spending power". The council tax measure is labelled "council tax rise needed" throughout, and the footnote states the full pass-through assumption.
- **Colour key:** the legend title sits on its own line, and the bin labels have a fixed width, so switching measure never reflows the figure.
- **Keyboard route:** councils are not tab stops. The keyboard route is the "Find a council" select, and the side panel is the text alternative.

## Figure 1 (blog numbering): reliance on non-EU care workers

`care-wage-workforce-map.html` (`data-cgd-interactive-name="care-wages-workforce-map"`): https://center-for-global-development.github.io/care-wages-council-map/care-wage-workforce-map.html

- **Question:** how much does each council's independent care workforce rely on non-EU nationals?
- **Default:** the share of care worker posts held by non-EU nationals (shading).
- **Views:** a toggle switches to the number of such posts, shown as circles sized by count. Circles rather than shading, because shading raw counts would mainly show council size.
- **Tooltip and side panel** for each council:
  - the share, its rank and the regional average;
  - estimated non-EU posts and all care worker posts;
  - the 2021/22 share.
- **Workforce only:** the map deliberately carries no cost or council tax figures, which the blog introduces later.
- **Data** (`data/workforce-data.js`, written by `18_interactive_map_data.py`): Skills for Care local-area data 2025/26, independent sector, care worker job role.
  - Non-EU posts = filled posts × non-EU share, rounded.
  - Nationally: 38% (about 338,000 posts), up from 12% in 2021/22.
  - Circle positions are each council's mainland centroid. London's circles sit in the inset.
- **Verification (30 Oct 2026):**
  - layout checks at 320, 390, 700 and 1280px clean in both views;
  - 745px tall on desktop in both views and with any council selected (the legend header is fixed at 70px so switching views doesn't jump);
  - screenshots were unavailable because the pane wasn't painting, so the layout was checked by measurement.

## Figure 1: budget lines

- **Question:** how big is the England-wide extra cost compared with things councils already spend money on?
- **Default view:** 9%.
- **Bars:** ranked bars of seven budget lines (light blue), plus one bar for the extra cost of higher care wages (teal), which moves into its rank as the benchmark changes. A dashed teal line at the extra cost runs down the chart, so every bar can be read against it.
- **Hover, tap or keyboard focus:** shows the line's value and the extra cost as a multiple, or a percentage, of it.
- **Data:** the same lines as the blog's static Figure 1 and `14_wage_uplift.py`. The Social Care Grant and the Market Sustainability and Improvement Fund are 2025/26 grants. The other five are 2025/26 net revenue spending by the 151 councils with adult social care duties, using 2024/25 where a council has not yet reported.
- **Design decisions:**
  - The x-axis is fixed at £0–6bn across benchmarks.
  - On phones the labels and values sit above full-width bars.
  - Value and row labels have a white halo, so the dashed line never runs through text.
  - Same footnote style as the map (9.6px, linked sources).
- **Verification (28 Oct 2026):**
  - layout checks at 320, 390, 700 and 1280px, at 2.5%, 9% and 15%: SVG text `{clipped: [], overlaps: 0}`, controls clean, page overflow 0;
  - height 527px on desktop;
  - values match the PNG (Social Care Grant £5,923m, MSIF £1,050m, libraries £724m, cost at 9% £1,534m);
  - the resize message is applied on `preview.html` (527px).

## Verification (28 Oct 2026)

Run in the built-in browser with Sofia Pro installed.

- **Layout checks at 320, 360, 390, 560, 620, 700, 768, 1024 and 1280px:**
  - control overflow `{outside: 0, intersections: [], clippedText: []}`;
  - SVG-text `{clipped: [], overlaps: []}`;
  - page overflow 0;
  - selects at 16px on phones;
  - one control height per bank.
- **Figure height:** at 1280px, 737px for England and at most 758px with any of the 151 councils selected, under either measure.
- **Values** match `outputs/tables/wage_uplift_council.csv` for Suffolk, Hartlepool and Westminster at 9% and 15%, and the England totals.
- **Resize contract:** on the live GitHub Pages review page, the automatic ResizeObserver resize works. The iframe went from 688px to 836px when Kent was selected and back to 688px on "Back to England". `interactive_view` fired once.

**Still to do before publication:**
- check the same resize and origin behaviour in the real cgdev.org parent;
- test fullscreen manually;
- run the `qa/verify.mjs` gate, which needs Node and Playwright.
