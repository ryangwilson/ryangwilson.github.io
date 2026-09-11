# ryangwilson.github.io

Static Jekyll portfolio site. No JS test suite, no CI, no linter — Ruby/Jekyll only (see `Gemfile`).

## Ship It Config

- gate_commands:
  1. Validate YAML front matter for every changed `_portfolio/*.md` file:
     `python3 -c "import yaml; yaml.safe_load(open('<file>').read().split('---')[1])"`
  2. `rm -rf _site/work/<affected-slug>` for each changed page, then `bundle exec jekyll build` — must complete with no Liquid/YAML errors.
- gate_notes: There is no automated visual regression or content test. A clean build only proves the templates parse and pages generate — it does not prove a page reads or looks right. Always spot-check the actual rendered HTML (`grep`/`sed` on `_site/work/<slug>/index.html`) for the specific thing that changed, and when a shared file changes (`_layouts/case-study-template.html`, `_layouts/case-study-narrative.html`, `assets/css/case-brand.css`), rebuild and check at least one other page that uses the same field/class to confirm no regression.
- run_myself: Run YAML validation and the Jekyll build myself for every content or template change, and check the rendered output before calling something done. Final visual sign-off (does it look/read right) is Ryan's call — offer to open the page in a browser rather than assuming a clean build means it's correct.
- branch_rules: Always branch before pushing (see global `~/.claude/CLAUDE.md` — never push to `main`). Sync with `origin` before pushing.
- pr_rules: No special conventions yet — standard PR title/description, attribution footer per session instructions.
