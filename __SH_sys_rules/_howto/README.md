# How-To Recipes

Step-by-step instructions for the jobs that actually come up. Each one is
self-contained — start at step 1, finish at the last step, done.

| # | Task | Difficulty |
|---|---|---|
| 01 | Add a new page | ●●○ |
| 02 | Add a blog post | ●○○ |
| 03 | Change a price | ●●○ — touches 5 files, all listed |
| 04 | Swap a photo | ●●○ |
| 05 | Change contact details | ●○○ — one file, one place |
| 06 | Change the menu | ●○○ — one file, one place |
| 07 | Update the chatbot | ●●○ |
| 08 | Deploy a change | ●●○ — read this before your first deploy |
| 09 | When something breaks | — |

**Before any of them:** make sure you can see your changes. Open a terminal in
the website folder and run:

```bash
python3 -m http.server 8177
```

Then visit `http://localhost:8177` in your browser. Leave that running while you
work; refresh the page to see each change.
