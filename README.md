# Sampling Distribution Lab

An interactive, browser-based Monte Carlo laboratory for undergraduate statistics teaching. The application helps students distinguish a population distribution, one random sample, a sample statistic, and the repeated-sampling distribution of that statistic.

The project is entirely client-side and has no external libraries, fonts, APIs, build packages, databases, or server-side dependencies.

## Main features

- Interactive population, example-sample, and sampling-distribution visualizations
- Monte Carlo simulation with configurable sample size and replication count
- Optional reproducible positive-integer random seed
- Exact theoretical sampling distributions where justified
- Clearly labelled Central Limit Theorem approximations where appropriate
- Discrete and continuous plots with support-aware axis scaling
- Numerical summaries including standard error and estimated bias
- Responsive layout for desktop, tablet, and mobile browsers
- Complete English and Hungarian interface

## Supported distributions

Continuous populations:

- Normal
- Uniform
- Exponential

Discrete populations:

- Bernoulli
- Binomial
- Poisson

## Supported sample statistics

- Sample mean
- Sample median
- Sample SD
- Sample SD (uncorrected)
- Sample variance
- Sample variance (uncorrected)

The corrected sample variance and SD use denominator `n - 1` (Bessel's correction). Their uncorrected counterparts use denominator `n`.

## Project structure

```text
sampling-distributions/
├── index.html                         # GitHub Pages entry point
├── css/
│   └── style.css                      # Application styling
├── js/
│   └── app.js                         # Simulation, charts, translations, and UI
├── standalone/
│   └── sampling-distributions.html    # Generated self-contained Moodle file
├── tools/
│   └── build-standalone.ps1           # Standalone-file generator
└── README.md
```

The maintainable source version consists of `index.html`, `css/style.css`, and `js/app.js`. Make future application changes in these files.

The file in `standalone/` is generated output. Do not edit it independently because the next regeneration will replace those edits.

## Running locally

For a quick check, open `index.html` in a modern browser. The application uses only relative local resources.

For testing under the same HTTP conditions as GitHub Pages, serve the project directory with any static web server and open its local URL. For example, if Python is already available:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000/`. Python is not required by the application itself; it is only one optional way to run a local static server.

## Regenerating the Moodle version

After changing the source files, run this command from the project directory in Windows PowerShell:

```powershell
.\tools\build-standalone.ps1
```

The script uses built-in PowerShell and requires no packages. It inlines `css/style.css` and `js/app.js` into:

```text
standalone/sampling-distributions.html
```

Upload only that generated HTML file to Moodle. It does not depend on any other project file and works offline after download.

## Publishing with GitHub Pages

1. Create a GitHub repository and place the contents of this project at the repository root.
2. Commit at least `index.html`, `css/`, `js/`, `standalone/`, `tools/`, and this `README.md`.
3. Push the repository to GitHub.
4. Open the repository's **Settings → Pages**.
5. Select deployment from a branch, choose the publication branch and the `/ (root)` folder, then save.
6. Open the Pages URL after GitHub finishes deployment.

All resource paths are relative, so the application works as a GitHub Pages project site such as `https://username.github.io/repository-name/`.

## Release checklist

Before publishing changes:

1. Test `index.html` through a local static server.
2. Check both English and Hungarian interfaces.
3. Test seeded and unseeded simulations, Reset, theoretical overlays, and representative continuous and discrete distributions.
4. Regenerate the standalone version.
5. Open `standalone/sampling-distributions.html` directly and repeat a short smoke test.
6. Commit both the source changes and the regenerated standalone file.

## Author

László Menyhárt, 2026
