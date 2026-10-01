(() => {
    'use strict';

    // ---------- Configuration and statistical definitions ----------
    const I18N = {
      en: {
        appTitle:'Sampling Distribution Lab', metaDescription:'An interactive Monte Carlo laboratory for exploring sampling distributions.', subtitle:'Build a sampling distribution, one random sample at a time.', stepKey:'<b>Population</b> → sample → statistic → repeat',
        simulationSetup:'Simulation setup', population:'Population', probabilityDistribution:'Probability distribution', continuous:'Continuous', discrete:'Discrete',
        sampling:'Sampling', sampleSizeN:'Sample size, n', replicationsR:'Replications, R', limits:'Limits: n ≤ 10,000, 2 ≤ R ≤ 100,000, and n × R ≤ 10 million.',
        statistic:'Statistic', calculatedEverySample:'Calculated for every sample', showTheory:'Show theoretical sampling distribution', run:'Run', useRandomSeed:'Use random seed', randomSeed:'Random seed', newSeed:'New seed', seedHint:'Same settings + same seed = same result.', simulate:'Simulate', reset:'Reset',
        theSource:'The source', oneDraw:'One draw', exampleSample:'Example random sample', repeatCompare:'Repeat & compare', noSampleYet:'No sample yet', selectSimulateSample:'Select Simulate to draw one sample.', noSamplingYet:'No sampling distribution yet', replicationContributes:'Each replication will contribute one statistic here.',
        showSampleValues:'Show sample values', hideSampleValues:'Hide sample values', sampleStatistic:'Sample statistic', awaitingSimulation:'Awaiting simulation', observations:'observations', observation:'Observation', moreValues:'more',
        populationDistribution:'Population distribution', samplingDistribution:'Sampling distribution', samplingDistributionOf:'Sampling distribution of the {stat}', populationChart:'Population distribution chart', sampleChart:'Example random sample chart', samplingChart:'Sampling distribution chart', chartLegend:'Chart legend', simulationControls:'Simulation controls', simulationResults:'Simulation results',
        sourceContinuous:'Continuous density', sourceDiscrete:'Discrete PMF', populationValue:'Population value, x', density:'Density', probability:'Probability', frequency:'Frequency', sampleValue:'Sample value, x', densityProbability:'Density / probability', count:'count', proportion:'proportion',
        populationMean:'Population mean', populationVariance:'Population variance', populationSD:'Population SD', median:'Median', notUnique:'not unique',
        exactAvailable:'Exact when available; approximations are labelled.', noSimpleReference:'No simple justified reference is shown for this combination.', exactNormal:'Exact normal theory', exactGamma:'Exact gamma theory', exactBinomial:'Exact binomial theory', exactPoisson:'Exact Poisson theory', exactChiSq:'Exact χ² theory', exactChi:'Exact χ theory', cltApprox:'CLT normal approximation', notExact:'not exact',
        monteCarlo:'Monte Carlo', simulatedP:'simulated P', exactP:'exact P', sampleStatForThis:'{stat} for this sample', statisticMarker:'{stat}: {value}',
        bernoulliCallout:'For a Bernoulli population, x̄ can only be 0, 1/n, 2/n, …, 1. <b>Theoretically possible values: n + 1 = {possible}.</b> Distinct values observed: <b>{observed}</b>.', discreteCallout:'This statistic is discrete here. Distinct values observed in the simulation: <b>{observed}</b>.', denseCallout:'The possible sample means still lie on a discrete lattice, but the values are too dense to draw as separate bars at this scale. Distinct values observed: <b>{observed}</b>.',
        targetParameter:'Target population parameter', dependsStatistic:'depends on statistic', simulatedMean:'Mean of simulated statistic', mcMean:'Monte Carlo mean', standardError:'Standard error', sdSampling:'SD of sampling distribution', estimatedBias:'Estimated bias', simMeanMinusTarget:'simulation mean − target', sampleSize:'Sample size', observationsPerSample:'observations per sample', replications:'Replications', statisticsSimulated:'statistics simulated', populationTarget:'population target', sdAcross:'SD across {R} statistics', noUniqueTarget:'no unique target', seedLabel:'seed: {seed}',
        targetMean:'Population mean, μ', targetMedian:'Population median', targetMedianNotUnique:'Population median (not unique)', targetVariance:'Population variance, σ²', targetSD:'Population SD, σ',
        sdFootnote:'Population SD describes individual observations; sample SD is calculated within one sample; standard error is the SD across repeated sample statistics.',
        readyPrompt:'Choose settings, then select Simulate.', settingsChanged:'Settings changed. Select Simulate to generate matching results.', theorySaved:'The reference display setting is saved. Select Simulate when ready.', resultsCleared:'Results cleared. Your simulation settings are unchanged.', generating:'Generating {R} samples of size {n}…', complete:'Complete: {R} sample statistics generated from {dist}.',
        errN:'Sample size n must be a whole number from 1 to 10,000.', errR:'Replications R must be a whole number from 2 to 100,000.', errBaseWork:'This request exceeds 10 million generated observations. Reduce n or R.', errBinomialWork:'This Binomial request exceeds 25 million Bernoulli trials. Reduce n, R, or m.', errMedianWork:'This median request requires too much sorting. Reduce n or R.', errN2:'Sample standard deviation and variance require n ≥ 2.', errSeed:'The random seed must be a positive integer no greater than 2,147,483,647.', errFinite:'All distribution parameters must be finite numbers.', errNormalSigma:'Normal standard deviation σ must be greater than 0.', errUniform:'Uniform maximum b must be greater than minimum a.', errExponential:'Exponential rate λ must be greater than 0.', errProbability:'Probability p must be between 0 and 1.', errBinomialM:'Binomial trials m must be a whole number from 1 to 100.', errPoisson:'Poisson λ must be greater than 0 and at most 100.',
        distNormal:'Normal', distUniform:'Uniform', distExponential:'Exponential', distBernoulli:'Bernoulli', distBinomial:'Binomial', distPoisson:'Poisson',
        statMean:'Sample mean', statMedian:'Sample median', statSD:'Sample standard deviation', statVariance:'Sample variance', statMeanLower:'sample mean', statMedianLower:'sample median', statSDLower:'sample standard deviation', statVarianceLower:'sample variance',
        paramNormalMu:'Mean, μ', paramNormalSigma:'SD, σ', paramUniformA:'Minimum, a', paramUniformB:'Maximum, b', paramExponentialLambda:'Rate, λ', paramBernoulliP:'Probability, p', paramBinomialM:'Trials, m', paramBinomialP:'Probability, p', paramPoissonLambda:'Mean / rate, λ'
      },
      hu: {
        appTitle:'Mintavételi eloszlások', metaDescription:'Interaktív Monte-Carlo-labor a mintavételi eloszlások vizsgálatához.', subtitle:'Építsen fel mintavételi eloszlást véletlen minták ismételt vételével.', stepKey:'<b>Sokaság</b> → minta → statisztika → ismétlés',
        simulationSetup:'Szimuláció beállításai', population:'Sokaság', probabilityDistribution:'Valószínűségi eloszlás', continuous:'Folytonos', discrete:'Diszkrét',
        sampling:'Mintavétel', sampleSizeN:'Mintanagyság, n', replicationsR:'Ismétlések száma, R', limits:'Korlátok: n ≤ 10 000, 2 ≤ R ≤ 100 000 és n × R ≤ 10 millió.',
        statistic:'Statisztika', calculatedEverySample:'Minden mintából kiszámítva', showTheory:'Elméleti mintavételi eloszlás megjelenítése', run:'Futtatás', useRandomSeed:'Rögzített random seed használata', randomSeed:'Random mag', newSeed:'Új mag', seedHint:'Azonos beállítások + azonos mag = azonos eredmény.', simulate:'Szimuláció', reset:'Törlés',
        theSource:'A forrás', oneDraw:'Egy mintavétel', exampleSample:'Példa véletlen minta', repeatCompare:'Ismétlés és összevetés', noSampleYet:'Még nincs minta', selectSimulateSample:'A mintavételhez kattintson a Szimuláció gombra.', noSamplingYet:'Még nincs mintavételi eloszlás', replicationContributes:'Minden ismétlés egy statisztikával járul hozzá.',
        showSampleValues:'Mintaértékek megjelenítése', hideSampleValues:'Mintaértékek elrejtése', sampleStatistic:'Mintastatisztika', awaitingSimulation:'Szimulációra vár', observations:'megfigyelés', observation:'Megfigyelés', moreValues:'további érték',
        populationDistribution:'Sokasági eloszlás', samplingDistribution:'Mintavételi eloszlás', samplingDistributionOf:'A(z) {stat} mintavételi eloszlása', populationChart:'A sokasági eloszlás grafikonja', sampleChart:'A példa véletlen minta grafikonja', samplingChart:'A mintavételi eloszlás grafikonja', chartLegend:'Jelmagyarázat', simulationControls:'Szimulációs vezérlők', simulationResults:'Szimulációs eredmények',
        sourceContinuous:'Folytonos sűrűségfüggvény', sourceDiscrete:'Diszkrét tömegfüggvény', populationValue:'Sokasági érték, x', density:'Sűrűség', probability:'Valószínűség', frequency:'Gyakoriság', sampleValue:'Mintaérték, x', densityProbability:'Sűrűség / valószínűség', count:'gyakoriság', proportion:'arány',
        populationMean:'Sokasági várható érték', populationVariance:'Sokasági variancia', populationSD:'Sokasági szórás', median:'Medián', notUnique:'nem egyértelmű',
        exactAvailable:'Ha lehetséges, egzakt; a közelítéseket külön jelöljük.', noSimpleReference:'Ehhez a kombinációhoz nem jeleníthető meg egyszerű, indokolt referenciaeloszlás.', exactNormal:'Egzakt normális elmélet', exactGamma:'Egzakt gamma-eloszlás', exactBinomial:'Egzakt binomiális elmélet', exactPoisson:'Egzakt Poisson-elmélet', exactChiSq:'Egzakt χ²-eloszlás', exactChi:'Egzakt χ-eloszlás', cltApprox:'Centrális határeloszlás-tételen alapuló normális közelítés', notExact:'nem egzakt',
        monteCarlo:'Monte-Carlo-szimuláció', simulatedP:'szimulált P', exactP:'egzakt P', sampleStatForThis:'{stat} ebben a mintában', statisticMarker:'{stat}: {value}',
        bernoulliCallout:'Bernoulli-sokaság esetén x̄ csak a 0, 1/n, 2/n, …, 1 értékeket veheti fel. <b>Az elméletileg lehetséges értékek száma: n + 1 = {possible}.</b> A megfigyelt különböző értékek száma: <b>{observed}</b>.', discreteCallout:'Ez a statisztika itt diszkrét. A szimulációban megfigyelt különböző értékek száma: <b>{observed}</b>.', denseCallout:'A lehetséges mintaátlagok továbbra is diszkrét rácson helyezkednek el, de ezen a skálán túl sűrűk az elkülönített oszlopokhoz. A megfigyelt különböző értékek száma: <b>{observed}</b>.',
        targetParameter:'Célként szolgáló sokasági paraméter', dependsStatistic:'a statisztikától függ', simulatedMean:'A szimulált statisztika átlaga', mcMean:'Monte-Carlo-átlag', standardError:'Standard hiba', sdSampling:'A mintavételi eloszlás szórása', estimatedBias:'Becsült torzítás', simMeanMinusTarget:'szimulációs átlag − célérték', sampleSize:'Mintanagyság', observationsPerSample:'megfigyelés mintánként', replications:'Ismétlések', statisticsSimulated:'szimulált statisztikák', populationTarget:'sokasági célérték', sdAcross:'{R} statisztika szórása', noUniqueTarget:'nincs egyértelmű célérték', seedLabel:'mag: {seed}',
        targetMean:'Sokasági várható érték, μ', targetMedian:'Sokasági medián', targetMedianNotUnique:'Sokasági medián (nem egyértelmű)', targetVariance:'Sokasági variancia, σ²', targetSD:'Sokasági szórás, σ',
        sdFootnote:'A sokasági szórás az egyedi megfigyeléseket jellemzi; a mintaszórást egyetlen mintából számítjuk; a standard hiba az ismételt minták statisztikáinak szórása.',
        readyPrompt:'Válassza ki a beállításokat, majd kattintson a Szimuláció gombra.', settingsChanged:'A beállítások megváltoztak. Az új eredményekhez indítsa el a szimulációt.', theorySaved:'A referenciaeloszlás beállítása mentve. Ha elkészült, indítsa el a szimulációt.', resultsCleared:'Az eredményeket töröltük. A szimuláció beállításai változatlanok.', generating:'{R} darab, egyenként {n} elemű minta generálása…', complete:'Kész: {R} mintastatisztika készült {dist} eloszlásból.',
        errN:'Az n mintanagyság 1 és 10 000 közötti egész szám legyen.', errR:'Az R ismétlésszám 2 és 100 000 közötti egész szám legyen.', errBaseWork:'A kérés több mint 10 millió megfigyelést generálna. Csökkentse n vagy R értékét.', errBinomialWork:'Ez a binomiális kérés több mint 25 millió Bernoulli-kísérletet igényelne. Csökkentse n, R vagy m értékét.', errMedianWork:'A medián kiszámítása túl sok rendezést igényelne. Csökkentse n vagy R értékét.', errN2:'A mintaszóráshoz és mintavarianciához n ≥ 2 szükséges.', errSeed:'A random seed 1 és 2 147 483 647 közötti pozitív egész szám legyen.', errFinite:'Minden eloszlásparaméternek véges számnak kell lennie.', errNormalSigma:'A normális eloszlás σ szórása legyen 0-nál nagyobb.', errUniform:'Az egyenletes eloszlás b maximuma legyen nagyobb az a minimumnál.', errExponential:'Az exponenciális eloszlás λ rátája legyen 0-nál nagyobb.', errProbability:'A p valószínűség 0 és 1 közötti legyen.', errBinomialM:'A binomiális eloszlás m kísérletszáma 1 és 100 közötti egész szám legyen.', errPoisson:'A Poisson-eloszlás λ paramétere legyen 0-nál nagyobb és legfeljebb 100.',
        distNormal:'Normális', distUniform:'Egyenletes', distExponential:'Exponenciális', distBernoulli:'Bernoulli', distBinomial:'Binomiális', distPoisson:'Poisson',
        statMean:'Mintaátlag', statMedian:'Mintamedián', statSD:'Mintaszórás', statVariance:'Mintavariancia', statMeanLower:'mintaátlag', statMedianLower:'mintamedián', statSDLower:'mintaszórás', statVarianceLower:'mintavariancia',
        paramNormalMu:'Várható érték, μ', paramNormalSigma:'Szórás, σ', paramUniformA:'Minimum, a', paramUniformB:'Maximum, b', paramExponentialLambda:'Ráta, λ', paramBernoulliP:'Valószínűség, p', paramBinomialM:'Kísérletek száma, m', paramBinomialP:'Valószínűség, p', paramPoissonLambda:'Várható érték / ráta, λ'
      }
    };

    const DIST_KEY = {normal:'distNormal',uniform:'distUniform',exponential:'distExponential',bernoulli:'distBernoulli',binomial:'distBinomial',poisson:'distPoisson'};
    const STAT_KEY = {mean:'statMean',median:'statMedian',sd:'statSD',variance:'statVariance'};
    const STAT_LOWER_KEY = {mean:'statMeanLower',median:'statMedianLower',sd:'statSDLower',variance:'statVarianceLower'};
    function t(key, vars={}) { let s=(I18N[state?.lang||'en']||I18N.en)[key] ?? I18N.en[key] ?? key; return s.replace(/\{(\w+)\}/g,(_,k)=>vars[k]??`{${k}}`); }
    function distName(d){return t(DIST_KEY[d]);}
    function statName(s){return t(STAT_KEY[s]);}

    const PARAMS = {
      normal: [
        { key: 'mu', labelKey: 'paramNormalMu', value: 0, step: 'any' },
        { key: 'sigma', labelKey: 'paramNormalSigma', value: 1, min: 0.000001, step: 'any' }
      ],
      uniform: [
        { key: 'a', labelKey: 'paramUniformA', value: 0, step: 'any' },
        { key: 'b', labelKey: 'paramUniformB', value: 1, step: 'any' }
      ],
      exponential: [{ key: 'lambda', labelKey: 'paramExponentialLambda', value: 1, min: 0.000001, step: 'any' }],
      bernoulli: [{ key: 'p', labelKey: 'paramBernoulliP', value: 0.3, min: 0, max: 1, step: 0.01 }],
      binomial: [
        { key: 'm', labelKey: 'paramBinomialM', value: 10, min: 1, max: 100, step: 1 },
        { key: 'p', labelKey: 'paramBinomialP', value: 0.3, min: 0, max: 1, step: 0.01 }
      ],
      poisson: [{ key: 'lambda', labelKey: 'paramPoissonLambda', value: 3, min: 0.000001, max: 100, step: 'any' }]
    };
    const $ = id => document.getElementById(id);
    const state = { results: null, runId: 0, paramMemory: {}, lang: 'en', status: {key:'readyPrompt',args:{},kind:''} };
    Object.keys(PARAMS).forEach(d => state.paramMemory[d] = Object.fromEntries(PARAMS[d].map(p => [p.key, p.value])));

    function renderParameterFields() {
      const dist = $('distribution').value;
      $('parameterFields').innerHTML = '<div class="field-row">' + PARAMS[dist].map(p => {
        const v = state.paramMemory[dist][p.key];
        const min = p.min !== undefined ? ` min="${p.min}"` : '';
        const max = p.max !== undefined ? ` max="${p.max}"` : '';
        return `<div class="field"><label for="param_${p.key}">${t(p.labelKey)}</label><input id="param_${p.key}" data-param="${p.key}" type="number" value="${v}" step="${p.step}"${min}${max}></div>`;
      }).join('') + '</div>';
      document.querySelectorAll('[data-param]').forEach(el => {
        el.addEventListener('input', () => { state.paramMemory[dist][el.dataset.param] = el.value; configChanged(); });
      });
      updatePopulationPreview();
      updateTheoryHelp();
    }

    function readConfig() {
      const dist = $('distribution').value;
      const params = {};
      for (const p of PARAMS[dist]) params[p.key] = Number($('param_' + p.key).value);
      return {
        dist, params,
        n: Number($('sampleSize').value),
        R: Number($('replications').value),
        stat: $('statistic').value,
        useSeed: $('useSeed').checked,
        seed: $('useSeed').checked ? Number($('seed').value) : null,
        theory: $('showTheory').checked
      };
    }

    function validate(c) {
      if (!Number.isInteger(c.n) || c.n < 1 || c.n > 10000) return 'errN';
      if (!Number.isInteger(c.R) || c.R < 2 || c.R > 100000) return 'errR';
      if (c.n * c.R > 10000000) return 'errBaseWork';
      if (c.dist === 'binomial' && c.n * c.R * c.params.m > 25000000) return 'errBinomialWork';
      if (c.stat === 'median' && c.n * c.R * Math.max(1, Math.log2(c.n)) > 40000000) return 'errMedianWork';
      if ((c.stat === 'sd' || c.stat === 'variance') && c.n < 2) return 'errN2';
      if (c.useSeed && (!Number.isSafeInteger(c.seed) || c.seed < 1 || c.seed > 2147483647)) return 'errSeed';
      const p = c.params;
      if (Object.values(p).some(v => !Number.isFinite(v))) return 'errFinite';
      if (c.dist === 'normal' && !(p.sigma > 0)) return 'errNormalSigma';
      if (c.dist === 'uniform' && !(p.b > p.a)) return 'errUniform';
      if (c.dist === 'exponential' && !(p.lambda > 0)) return 'errExponential';
      if ((c.dist === 'bernoulli' || c.dist === 'binomial') && !(p.p >= 0 && p.p <= 1)) return 'errProbability';
      if (c.dist === 'binomial' && (!Number.isInteger(p.m) || p.m < 1 || p.m > 100)) return 'errBinomialM';
      if (c.dist === 'poisson' && !(p.lambda > 0 && p.lambda <= 100)) return 'errPoisson';
      return '';
    }

    function populationInfo(c) {
      const p = c.params;
      switch (c.dist) {
        case 'normal': return { mean:p.mu, variance:p.sigma*p.sigma, median:p.mu, continuous:true, notation:`N(${fmt(p.mu)}, ${fmt(p.sigma)}²)` };
        case 'uniform': return { mean:(p.a+p.b)/2, variance:(p.b-p.a)**2/12, median:(p.a+p.b)/2, continuous:true, notation:`U(${fmt(p.a)}, ${fmt(p.b)})` };
        case 'exponential': return { mean:1/p.lambda, variance:1/(p.lambda*p.lambda), median:Math.log(2)/p.lambda, continuous:true, notation:`Exp(λ = ${fmt(p.lambda)})` };
        case 'bernoulli': return { mean:p.p, variance:p.p*(1-p.p), median:p.p < .5 ? 0 : p.p > .5 ? 1 : null, medianNote:p.p === .5 ? 'not unique' : '', continuous:false, notation:`Bernoulli(${fmt(p.p)})` };
        case 'binomial': return { mean:p.m*p.p, variance:p.m*p.p*(1-p.p), median:discreteMedianBinomial(p.m,p.p), continuous:false, notation:`Bin(${p.m}, ${fmt(p.p)})` };
        case 'poisson': return { mean:p.lambda, variance:p.lambda, median:discreteMedianPoisson(p.lambda), continuous:false, notation:`Pois(${fmt(p.lambda)})` };
      }
    }

    function targetFor(c, info) {
      if (c.stat === 'mean') return { value: info.mean, label: t('targetMean') };
      if (c.stat === 'median') return info.median === null ? { value:null, label:t('targetMedianNotUnique') } : { value:info.median, label:t('targetMedian') };
      if (c.stat === 'variance') return { value:info.variance, label:t('targetVariance') };
      return { value:Math.sqrt(info.variance), label:t('targetSD') };
    }

    // ---------- Seeded pseudo-random generation ----------
    function xmur3(str) {
      let h = 1779033703 ^ str.length;
      for (let i=0; i<str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; }
      return () => { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); return (h ^= h >>> 16) >>> 0; };
    }
    function mulberry32(a) { return () => { let t = a += 0x6D2B79F5; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
    function makeRng(seed) { return mulberry32(xmur3(String(seed))()); }
    function freshEntropy() {
      if(globalThis.crypto?.getRandomValues){const a=crypto.getRandomValues(new Uint32Array(4));return Array.from(a).join('-');}
      return `${Date.now()}-${Math.random()}-${performance.now()}`;
    }
    function normalRandom(rng) {
      let u=0, v=0; while (!u) u=rng(); while (!v) v=rng();
      return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);
    }
    function poissonRandom(lambda, rng) {
      if (lambda < 30) {
        const limit=Math.exp(-lambda); let k=0, prod=1;
        do { k++; prod*=rng(); } while (prod>limit);
        return k-1;
      }
      // PTRS transformed rejection: exact and efficient for larger lambda.
      const c=.767-3.36/lambda, beta=Math.PI/Math.sqrt(3*lambda), alpha=beta*lambda, k0=Math.log(c)-lambda-Math.log(beta);
      while (true) {
        const u=rng(), x=(alpha-Math.log((1-u)/u))/beta, n=Math.floor(x+.5);
        if (n<0) continue;
        const v=rng(), y=alpha-beta*x, lhs=y+Math.log(v/((1+Math.exp(y))**2));
        if (lhs <= k0+n*Math.log(lambda)-logGamma(n+1)) return n;
      }
    }
    function drawOne(c, rng) {
      const p=c.params;
      switch(c.dist) {
        case 'normal': return p.mu+p.sigma*normalRandom(rng);
        case 'uniform': return p.a+(p.b-p.a)*rng();
        case 'exponential': return -Math.log(1-rng())/p.lambda;
        case 'bernoulli': return rng()<p.p ? 1 : 0;
        case 'binomial': { let s=0; for(let j=0;j<p.m;j++) if(rng()<p.p) s++; return s; }
        case 'poisson': return poissonRandom(p.lambda,rng);
      }
    }

    function statistic(values, kind) {
      const n=values.length;
      if (kind==='mean') { let s=0; for(const x of values)s+=x; return s/n; }
      if (kind==='median') {
        const a=Array.from(values).sort((x,y)=>x-y), mid=Math.floor(n/2);
        return n%2 ? a[mid] : (a[mid-1]+a[mid])/2;
      }
      let sum=0; for(const x of values) sum+=x; const mean=sum/n;
      let ss=0; for(const x of values) ss+=(x-mean)*(x-mean);
      const v=ss/(n-1); return kind==='variance' ? v : Math.sqrt(v);
    }

    // Chunking keeps controls and progress responsive during large simulations.
    async function runSimulation(c) {
      const runId=++state.runId, rng=makeRng(c.useSeed?c.seed:freshEntropy()), values=new Float64Array(c.n), stats=new Float64Array(c.R);
      let example=null, exampleStat=null, r=0;
      const chunk=Math.max(20, Math.floor(75000/c.n));
      while (r<c.R) {
        const end=Math.min(c.R,r+chunk);
        for (;r<end;r++) {
          for(let i=0;i<c.n;i++) values[i]=drawOne(c,rng);
          const st=statistic(values,c.stat); stats[r]=st;
          if(r===0){ example=Array.from(values); exampleStat=st; }
        }
        if(runId!==state.runId) return null;
        $('progressBar').style.width=(100*r/c.R).toFixed(1)+'%';
        await new Promise(resolve=>setTimeout(resolve,0));
      }
      return { config:JSON.parse(JSON.stringify(c)), stats, example, exampleStat };
    }

    // ---------- Numerical helpers ----------
    function logGamma(z) {
      const c=[.99999999999980993,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9.984369578019571e-6,1.5056327351493116e-7];
      if(z<.5) return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*z))-logGamma(1-z);
      z-=1; let x=c[0]; for(let i=1;i<c.length;i++)x+=c[i]/(z+i); const t=z+c.length-1.5;
      return .5*Math.log(2*Math.PI)+(z+.5)*Math.log(t)-t+Math.log(x);
    }
    function normalPdf(x,mu,sd){ const z=(x-mu)/sd; return Math.exp(-.5*z*z)/(sd*Math.sqrt(2*Math.PI)); }
    function gammaPdf(x,shape,rate){ if(x<=0)return 0; return Math.exp(shape*Math.log(rate)+(shape-1)*Math.log(x)-rate*x-logGamma(shape)); }
    function binomialPmf(k,n,p){
      if(k<0||k>n)return 0; if(p===0)return k===0?1:0; if(p===1)return k===n?1:0;
      return Math.exp(logGamma(n+1)-logGamma(k+1)-logGamma(n-k+1)+k*Math.log(p)+(n-k)*Math.log1p(-p));
    }
    function poissonPmf(k,lambda){ return Math.exp(-lambda+k*Math.log(lambda)-logGamma(k+1)); }
    function discreteMedianBinomial(n,p){ let c=0; for(let k=0;k<=n;k++){c+=binomialPmf(k,n,p);if(c>=.5-1e-14)return k;} return n; }
    function discreteMedianPoisson(lambda){ let c=0; const max=Math.ceil(lambda+12*Math.sqrt(lambda)+20); for(let k=0;k<=max;k++){c+=poissonPmf(k,lambda);if(c>=.5-1e-14)return k;} return Math.floor(lambda); }
    function meanSd(a){ let mean=0,m2=0,k=0; for(const x of a){k++;const d=x-mean;mean+=d/k;m2+=d*(x-mean);}return{mean,sd:k>1?Math.sqrt(m2/(k-1)):0}; }
    function fmt(x,digits=5){
      if(x===null||x===undefined||!Number.isFinite(x))return '—';
      if(x===0)return '0'; const ax=Math.abs(x);
      if(ax>=10000||ax<.0001)return x.toExponential(3);
      return Number(x.toPrecision(digits)).toLocaleString(state.lang==='hu'?'hu-HU':'en-US',{maximumFractionDigits:8});
    }
    function niceStep(rawStep,integer=false){
      if(!(rawStep>0)||!Number.isFinite(rawStep))return 1;
      const power=10**Math.floor(Math.log10(rawStep)),scaled=rawStep/power;
      let step=(scaled<=1.5?1:scaled<=3?2:scaled<=7?5:10)*power;
      if(integer)step=Math.max(1,Math.round(step));
      return step;
    }
    function cleanTick(value,step){
      const places=Math.max(0,Math.min(12,-Math.floor(Math.log10(Math.abs(step)))+2));
      const cleaned=Number(value.toFixed(places));return Object.is(cleaned,-0)?0:cleaned;
    }
    function niceAxis(min,max,options={}){
      const integer=!!options.integer,target=Math.max(2,options.targetTicks||6);
      const hardMin=Number.isFinite(options.hardMin)?options.hardMin:-Infinity,hardMax=Number.isFinite(options.hardMax)?options.hardMax:Infinity;
      min=Math.max(min,hardMin);max=Math.min(max,hardMax);
      if(!(max>min)){
        if(Number.isFinite(hardMin)&&Number.isFinite(hardMax)&&hardMax>hardMin){min=hardMin;max=hardMax;}
        else {const span=Math.abs(min)*.2||1;min=Math.max(hardMin,min-span);max=Math.min(hardMax,max+span);}
      }
      let step=niceStep((max-min)/(target-1),integer);
      let axisMin=Math.floor(min/step+1e-12)*step,axisMax=Math.ceil(max/step-1e-12)*step;
      axisMin=Math.max(axisMin,hardMin);axisMax=Math.min(axisMax,hardMax);
      if(!(axisMax>axisMin)){axisMin=Math.max(hardMin,min);axisMax=Math.min(hardMax,min+step);}
      let first=Math.ceil(axisMin/step-1e-10)*step,last=Math.floor(axisMax/step+1e-10)*step;
      let values=[];for(let value=first,i=0;value<=last+step*1e-9&&i<100;i++,value+=step)values.push(cleanTick(value,step));
      if(!values.length)values=[cleanTick(axisMin,step),cleanTick(axisMax,step)];
      return {domain:[cleanTick(axisMin,step),cleanTick(axisMax,step)],values,step};
    }
    function constrainedExtent(min,max,support={},padding=.07){
      if(min===max){const span=Math.abs(min)*.2||1;min-=span;max+=span;}
      else {const pad=(max-min)*padding;min-=pad;max+=pad;}
      if(Number.isFinite(support.hardMin)){
        if(support.hardMin===0&&min>0&&min<=max*.25)min=0;
        min=Math.max(min,support.hardMin);
      }
      if(Number.isFinite(support.hardMax))max=Math.min(max,support.hardMax);
      return [min,max];
    }
    function populationSupport(c){
      if(c.dist==='normal')return {integer:false};
      if(c.dist==='uniform')return {integer:false,hardMin:c.params.a,hardMax:c.params.b};
      if(c.dist==='exponential')return {integer:false,hardMin:0};
      if(c.dist==='bernoulli')return {integer:true,hardMin:0,hardMax:1};
      if(c.dist==='binomial')return {integer:true,hardMin:0,hardMax:c.params.m};
      return {integer:true,hardMin:0};
    }
    function statisticSupport(c){
      const support={integer:false};
      if(c.stat==='sd'||c.stat==='variance')support.hardMin=0;
      else if(c.stat==='mean'||c.stat==='median'){
        if(['exponential','bernoulli','binomial','poisson'].includes(c.dist))support.hardMin=0;
        if(c.dist==='bernoulli')support.hardMax=1;
        if(c.dist==='binomial')support.hardMax=c.params.m;
        if(c.dist==='uniform'){support.hardMin=c.params.a;support.hardMax=c.params.b;}
      }
      if(!populationInfo(c).continuous){
        if(c.stat==='mean'&&c.n===1)support.integer=true;
        if(c.stat==='median'&&c.n%2===1)support.integer=true;
      }
      return support;
    }
    function integerTickSpec(maxValue){
      const spec=niceAxis(0,Math.max(1,maxValue),{integer:true,hardMin:0,targetTicks:6});
      if(spec.domain[1]<=maxValue){spec.domain[1]+=spec.step;spec.values.push(cleanTick(spec.domain[1],spec.step));}
      return {max:spec.domain[1],values:spec.values};
    }
    const S=(tag,attrs={})=>{const e=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const[k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};

    // ---------- SVG charting ----------
    function chartFrame(svg,xDomain,yMax,xLabel,yLabel='Density / probability',options={}) {
      svg.replaceChildren();
      const W=options.emphasisX?Math.max(360,Math.round(svg.clientWidth||760)):760,H=300,m={l:56,r:20,t:14,b:48},iw=W-m.l-m.r,ih=H-m.t-m.b;
      const yNice=options.integerY?null:niceAxis(0,yMax,{hardMin:0,targetTicks:5});
      const ySpec=options.integerY?integerTickSpec(yMax):{max:yNice.domain[1],values:yNice.values};yMax=ySpec.max;
      const xTickTarget=options.emphasisX&&W<520?4:6,xSpec=niceAxis(xDomain[0],xDomain[1],{integer:options.integerX,hardMin:options.hardMin,hardMax:options.hardMax,targetTicks:xTickTarget});xDomain=xSpec.domain;
      svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
      const x=v=>m.l+(v-xDomain[0])/(xDomain[1]-xDomain[0])*iw, y=v=>m.t+ih-v/yMax*ih;
      for(const value of ySpec.values){
        svg.append(S('line',{x1:m.l,x2:W-m.r,y1:y(value),y2:y(value),class:'grid'}));
        const tx=S('text',{x:m.l-8,y:y(value)+4,'text-anchor':'end',class:'tick-text'});tx.textContent=fmt(value,3);svg.append(tx);
      }
      for(const value of xSpec.values){
        svg.append(S('line',{x1:x(value),x2:x(value),y1:m.t,y2:H-m.b,class:'grid'}));
        const tx=S('text',{x:x(value),y:H-m.b+20,'text-anchor':'middle',class:'tick-text'+(options.emphasisX?' x-emphasis':'')});tx.textContent=fmt(value,4);svg.append(tx);
      }
      svg.append(S('line',{x1:m.l,x2:W-m.r,y1:H-m.b,y2:H-m.b,class:'axis'}));
      svg.append(S('line',{x1:m.l,x2:m.l,y1:m.t,y2:H-m.b,class:'axis'}));
      const xl=S('text',{x:m.l+iw/2,y:H-7,'text-anchor':'middle',class:'axis-label'});xl.textContent=xLabel;svg.append(xl);
      const yl=S('text',{x:15,y:m.t+ih/2,transform:`rotate(-90 15 ${m.t+ih/2})`,'text-anchor':'middle',class:'axis-label'});yl.textContent=yLabel;svg.append(yl);
      return {W,H,m,iw,ih,x,y,xDomain,xTicks:xSpec.values};
    }
    function pathFor(points,x,y){ return points.map((p,i)=>(i?'L':'M')+x(p[0]).toFixed(2)+' '+y(p[1]).toFixed(2)).join(' '); }
    function centeredBar(value,width,frame){const center=frame.x(value),left=Math.max(frame.m.l,center-width/2),right=Math.min(frame.W-frame.m.r,center+width/2);return{x:left,width:Math.max(1,right-left)};}
    function attachTip(node,textFn){
      node.style.cursor='crosshair'; node.addEventListener('pointermove',e=>{const t=$('tooltip');t.textContent=textFn();t.style.left=e.clientX+'px';t.style.top=e.clientY+'px';t.style.opacity=1;});
      node.addEventListener('pointerleave',()=>{$('tooltip').style.opacity=0;});
    }

    function populationSeries(c,info){
      const p=c.params;
      if(info.continuous){
        let lo,hi,pdf;
        if(c.dist==='normal'){lo=p.mu-4*p.sigma;hi=p.mu+4*p.sigma;pdf=x=>normalPdf(x,p.mu,p.sigma);}
        else if(c.dist==='uniform'){const d=p.b-p.a;lo=p.a;hi=p.b;pdf=x=>x>=p.a&&x<=p.b?1/d:0;}
        else {lo=0;hi=8/p.lambda;pdf=x=>x>=0?p.lambda*Math.exp(-p.lambda*x):0;}
        const points=[];for(let i=0;i<=220;i++){const x=lo+(hi-lo)*i/220;points.push([x,pdf(x)]);}return{type:'density',points,domain:[lo,hi]};
      }
      let vals=[];
      if(c.dist==='bernoulli') vals=[[0,1-p.p],[1,p.p]];
      else if(c.dist==='binomial') for(let k=0;k<=p.m;k++) vals.push([k,binomialPmf(k,p.m,p.p)]);
      else {const max=Math.max(8,Math.ceil(p.lambda+4.5*Math.sqrt(p.lambda)));for(let k=0;k<=max;k++)vals.push([k,poissonPmf(k,p.lambda)]);}
      return{type:'pmf',values:vals,domain:[vals[0][0],vals.at(-1)[0]]};
    }

    function drawPopulation(c){
      const svg=$('populationChart'), info=populationInfo(c), series=populationSeries(c,info);
      let yMax=series.type==='density'?Math.max(...series.points.map(d=>d[1])):Math.max(...series.values.map(d=>d[1])); yMax*=1.13;
      const support=populationSupport(c),f=chartFrame(svg,series.domain,yMax,t('populationValue'),series.type==='density'?t('density'):t('probability'),{emphasisX:true,integerX:support.integer,hardMin:support.hardMin,hardMax:support.hardMax});
      if(series.type==='density'){
        const area=S('path',{d:pathFor([[series.domain[0],0],...series.points,[series.domain[1],0]],f.x,f.y)+' Z',fill:'#ddf6f1'});svg.append(area);
        svg.append(S('path',{d:pathFor(series.points,f.x,f.y),fill:'none',stroke:'#087f73','stroke-width':3,'stroke-linejoin':'round'}));
      } else {
        const bw=Math.min(38,f.iw/series.values.length*.64);
        for(const[v,prob]of series.values){const bar=centeredBar(v,bw,f),rect=S('rect',{x:bar.x,y:f.y(prob),width:bar.width,height:f.y(0)-f.y(prob),rx:2,fill:'#087f73'});attachTip(rect,()=>`x = ${fmt(v)} · P = ${fmt(prob,4)}`);svg.append(rect);}
      }
      $('populationTitle').textContent=state.lang==='hu' ? `${distName(c.dist)} sokaság` : `${distName(c.dist)} population`;
      $('populationType').textContent=(info.continuous?t('sourceContinuous'):t('sourceDiscrete'))+' · '+info.notation;
      $('populationFacts').innerHTML=`<span class="fact">${t('populationMean')} <b>${fmt(info.mean)}</b></span><span class="fact">${t('populationVariance')} <b>${fmt(info.variance)}</b></span><span class="fact">${t('populationSD')} <b>${fmt(Math.sqrt(info.variance))}</b></span><span class="fact">${t('median')} <b>${info.median===null?t('notUnique'):fmt(info.median)}</b></span>`;
    }

    function theoreticalSpec(c,info){
      if(c.stat==='mean'){
        const se=Math.sqrt(info.variance/c.n);
        if(c.dist==='normal') return {type:'density',labelKey:'exactNormal',pdf:x=>normalPdf(x,info.mean,se),mean:info.mean,sd:se};
        if(c.dist==='exponential') return {type:'density',labelKey:'exactGamma',pdf:x=>gammaPdf(x,c.n,c.n*c.params.lambda),mean:info.mean,sd:se};
        if(c.dist==='bernoulli') return {type:'discrete',labelKey:'exactBinomial',values:Array.from({length:c.n+1},(_,k)=>[k/c.n,binomialPmf(k,c.n,c.params.p)])};
        if(c.dist==='binomial') {
          const N=c.n*c.params.m;
          if(N<=700)return{type:'discrete',labelKey:'exactBinomial',values:Array.from({length:N+1},(_,k)=>[k/c.n,binomialPmf(k,N,c.params.p)])};
          return {type:'density',labelKey:'cltApprox',pdf:x=>normalPdf(x,info.mean,se),mean:info.mean,sd:se,approx:true};
        }
        if(c.dist==='poisson') {
          const L=c.n*c.params.lambda,max=Math.ceil(L+6*Math.sqrt(L)+10),vals=[];
          if(max<=700){for(let k=0;k<=max;k++)vals.push([k/c.n,poissonPmf(k,L)]);return{type:'discrete',labelKey:'exactPoisson',values:vals};}
          return {type:'density',labelKey:'cltApprox',pdf:x=>normalPdf(x,info.mean,se),mean:info.mean,sd:se,approx:true};
        }
        if(c.dist==='uniform'&&c.n>=5)return {type:'density',labelKey:'cltApprox',pdf:x=>normalPdf(x,info.mean,se),mean:info.mean,sd:se,approx:true};
        return null;
      }
      if(c.dist==='normal' && (c.stat==='variance'||c.stat==='sd')){
        const df=c.n-1,sig2=c.params.sigma**2;
        if(c.stat==='variance') return {type:'density',labelKey:'exactChiSq',pdf:x=>x<=0?0:gammaPdf(x,df/2,df/(2*sig2))};
        return {type:'density',labelKey:'exactChi',pdf:x=>x<=0?0:2*x*gammaPdf(x*x,df/2,df/(2*sig2))};
      }
      return null;
    }

    function drawExampleSample(result, preserveDetails=false){
      const c=result.config, values=result.example, continuous=populationInfo(c).continuous, support=populationSupport(c), svg=$('sampleChart');
      let min=Math.min(...values), max=Math.max(...values), domain=constrainedExtent(min,max,support), yMax=1;
      let marks=[];
      if(continuous){
        const k=Math.max(5,Math.min(18,Math.ceil(Math.sqrt(values.length)))), width=(domain[1]-domain[0])/k;
        marks=Array.from({length:k},(_,i)=>({lo:domain[0]+i*width,hi:domain[0]+(i+1)*width,count:0}));
        for(const v of values){const i=Math.max(0,Math.min(k-1,Math.floor((v-domain[0])/width)));marks[i].count++;}
        yMax=Math.max(1,...marks.map(b=>b.count));
      } else {
        const counts=new Map;for(const v of values)counts.set(v,(counts.get(v)||0)+1);
        marks=Array.from(counts,([value,count])=>({value,count})).sort((a,b)=>a.value-b.value);
        min=marks[0].value;max=marks.at(-1).value;domain=constrainedExtent(min,max,support);yMax=Math.max(...marks.map(d=>d.count));
      }
      const f=chartFrame(svg,domain,yMax,t('sampleValue'),t('frequency'),{integerY:true,emphasisX:true,integerX:support.integer,hardMin:support.hardMin,hardMax:support.hardMax});
      if(continuous){
        for(const b of marks){const x0=f.x(b.lo),x1=f.x(b.hi),rect=S('rect',{x:x0+.5,y:f.y(b.count),width:Math.max(0,x1-x0-1),height:f.y(0)-f.y(b.count),fill:'#087f73',opacity:.84});attachTip(rect,()=>`${fmt(b.lo)} – ${fmt(b.hi)} · ${t('count')}: ${b.count}`);svg.append(rect);}
      } else {
        const spacing=f.iw/Math.max(1,marks.length),bw=Math.min(42,Math.max(5,spacing*.58));
        for(const d of marks){const bar=centeredBar(d.value,bw,f),rect=S('rect',{x:bar.x,y:f.y(d.count),width:bar.width,height:f.y(0)-f.y(d.count),rx:2,fill:'#087f73'});attachTip(rect,()=>`x = ${fmt(d.value)} · ${t('count')}: ${d.count} · ${t('proportion')}: ${fmt(d.count/values.length,4)}`);svg.append(rect);}
      }
      if(c.stat==='mean'||c.stat==='median'){
        const x=f.x(result.exampleStat), line=S('line',{x1:x,x2:x,y1:f.m.t+8,y2:f.H-f.m.b,stroke:'#e49b21','stroke-width':3});svg.append(line);
        const label=S('text',{x:Math.min(f.W-f.m.r-4,Math.max(f.m.l+4,x+6)),y:f.m.t+12,'text-anchor':x>f.W-f.m.r-115?'end':'start',fill:'#a86d08','font-size':12,'font-weight':700});label.textContent=t('statisticMarker',{stat:statName(c.stat),value:fmt(result.exampleStat,6)});svg.append(label);
      }
      svg.setAttribute('aria-label',t('sampleChart'));
      $('sampleEmpty').style.display='none';
      const details=$('sampleValuesDetails');details.hidden=false;if(!preserveDetails)details.open=c.n<=12;
      $('sampleValues').innerHTML=values.map((v,i)=>`<span class="value-pill" title="${t('observation')} ${i+1}">${fmt(v,6)}</span>`).join('');
      updateSampleValuesSummary();
    }

    function updateSampleValuesSummary(){
      const details=$('sampleValuesDetails');
      $('sampleValuesSummary').textContent=details.open?t('hideSampleValues'):t('showSampleValues');
    }

    function observedDiscrete(c,stats){
      if(c.stat==='mean' && c.dist==='bernoulli') return true;
      if(c.stat==='mean' && c.dist==='binomial') return c.n*c.params.m<=700;
      if(c.stat==='mean' && c.dist==='poisson') return Math.ceil(c.n*c.params.lambda+6*Math.sqrt(c.n*c.params.lambda)+10)<=700;
      if(!populationInfo(c).continuous && c.stat==='median') return new Set(Array.from(stats,canonical)).size<=70;
      if(c.dist==='bernoulli' && (c.stat==='variance'||c.stat==='sd')) return new Set(Array.from(stats,canonical)).size<=70;
      return false;
    }
    function canonical(x){ return Number(x.toPrecision(12)); }
    function aggregateDiscrete(stats){const m=new Map;for(const x of stats){const k=canonical(x);m.set(k,(m.get(k)||0)+1);}return Array.from(m,([x,count])=>[x,count/stats.length]).sort((a,b)=>a[0]-b[0]);}

    function drawSampling(result){
      const {config:c,stats}=result, info=populationInfo(c), theory=c.theory?theoreticalSpec(c,info):null, discrete=observedDiscrete(c,stats),support=statisticSupport(c);
      let observedMin=Infinity,observedMax=-Infinity;for(const v of stats){if(v<observedMin)observedMin=v;if(v>observedMax)observedMax=v;}
      let min=observedMin,max=observedMax;
      let observed=null,bins=null,yMax=0;
      if(discrete){ observed=aggregateDiscrete(stats); yMax=Math.max(...observed.map(d=>d[1])); }
      else {
        const k=Math.max(12,Math.min(60,Math.ceil(Math.sqrt(stats.length)/2))), ext=constrainedExtent(min,max,support), width=(ext[1]-ext[0])/k;
        bins=Array.from({length:k},(_,i)=>({lo:ext[0]+i*width,hi:ext[0]+(i+1)*width,count:0}));
        for(const v of stats){const i=Math.max(0,Math.min(k-1,Math.floor((v-ext[0])/width)));bins[i].count++;}
        for(const b of bins)b.height=b.count/(stats.length*width); yMax=Math.max(...bins.map(b=>b.height)); min=ext[0];max=ext[1];
      }
      if(theory){
        if(theory.type==='discrete') {if(discrete)yMax=Math.max(yMax,...theory.values.map(d=>d[1]));}
      }
      if(discrete&&observed.length){min=observed[0][0];max=observed.at(-1)[0];}
      if(theory&&theory.type==='discrete'&&theory.values.length){min=Math.min(min,theory.values[0][0]);max=Math.max(max,theory.values.at(-1)[0]);}
      const domain=constrainedExtent(min,max,support,discrete ? .07 : 0);
      if(theory&&theory.type==='density'){for(let i=0;i<=200;i++){const x=domain[0]+(domain[1]-domain[0])*i/200;yMax=Math.max(yMax,theory.pdf(x));}}
      const svg=$('samplingChart'), f=chartFrame(svg,domain,yMax*1.15||1,statName(c.stat),discrete?t('probability'):t('density'),{integerX:support.integer,hardMin:support.hardMin,hardMax:support.hardMax});
      if(discrete){
        const spacing=f.iw/Math.max(1,observed.length),bw=Math.max(1.5,Math.min(28,spacing*.68));
        for(const[v,prob]of observed){const bar=centeredBar(v,bw,f),rect=S('rect',{x:bar.x,y:f.y(prob),width:bar.width,height:f.y(0)-f.y(prob),rx:1.5,fill:'#087f73',opacity:.88});attachTip(rect,()=>`${statName(c.stat)} = ${fmt(v)} · ${t('simulatedP')} = ${fmt(prob,4)}`);svg.append(rect);}
      } else {
        for(const b of bins){const x0=f.x(b.lo),x1=f.x(b.hi),rect=S('rect',{x:x0+.5,y:f.y(b.height),width:Math.max(0,x1-x0-1),height:f.y(0)-f.y(b.height),fill:'#087f73',opacity:.82});attachTip(rect,()=>`${fmt(b.lo)} – ${fmt(b.hi)} · ${fmt(b.count)} ${t('statisticsSimulated')}`);svg.append(rect);}
      }
      if(theory){
        if(theory.type==='density'){
          const pts=[];for(let i=0;i<=260;i++){const x=f.xDomain[0]+(f.xDomain[1]-f.xDomain[0])*i/260;pts.push([x,theory.pdf(x)]);}svg.append(S('path',{d:pathFor(pts,f.x,f.y),fill:'none',stroke:'#e49b21','stroke-width':3,'stroke-linecap':'round'}));
        } else {
          const bw=Math.max(1,Math.min(18,f.iw/Math.max(1,theory.values.length)*.34));
          for(const[v,prob]of theory.values){if(v<f.xDomain[0]||v>f.xDomain[1])continue;const line=S('line',{x1:f.x(v),x2:f.x(v),y1:f.y(0),y2:f.y(prob),stroke:'#e49b21','stroke-width':bw,'stroke-linecap':'round'});attachTip(line,()=>`${statName(c.stat)} = ${fmt(v)} · ${t('exactP')} = ${fmt(prob,4)}`);svg.append(line);}
        }
      }
      $('legend').innerHTML=`<span class="legend-item"><i class="swatch"></i>${t('monteCarlo')}</span>`+(theory?`<span class="legend-item"><i class="swatch line"></i>${t(theory.labelKey)}</span>`:'');
      $('samplingTitle').textContent=t('samplingDistributionOf',{stat:t(STAT_LOWER_KEY[c.stat])});
      svg.setAttribute('aria-label',t('samplingChart'));
      $('samplingEmpty').style.display='none';
      const call=$('discreteCallout');call.classList.remove('show');
      if(c.dist==='bernoulli'&&c.stat==='mean'){
        call.innerHTML=t('bernoulliCallout',{possible:fmt(c.n+1),observed:fmt(aggregateDiscrete(stats).length)});
        call.classList.add('show');
      } else if(discrete){
        call.innerHTML=t('discreteCallout',{observed:fmt(observed.length)});
        call.classList.add('show');
      } else if(!info.continuous&&c.stat==='mean'){
        call.innerHTML=t('denseCallout',{observed:fmt(aggregateDiscrete(stats).length)});
        call.classList.add('show');
      }
    }

    // ---------- Rendering and interaction ----------
    function updatePopulationPreview(){const c=readConfig(),err=validatePopulationOnly(c);if(!err)drawPopulation(c);else setStatus(err,{},'error');}
    function validatePopulationOnly(c){
      const dummy={...c,n:Math.max(2,Number.isFinite(c.n)?c.n:2),R:2,useSeed:false,seed:null};
      const err=validate(dummy), parameterErrors=new Set(['errFinite','errNormalSigma','errUniform','errExponential','errProbability','errBinomialM','errPoisson']);
      return parameterErrors.has(err)?err:'';
    }
    function updateTheoryHelp(){
      let c;try{c=readConfig();}catch{return;}const info=populationInfo(c),spec=theoreticalSpec(c,info);
      $('theoryHelp').textContent=spec ? `${t(spec.labelKey)}${spec.approx?` (${t('notExact')}).`:'.'}` : t('noSimpleReference');
      $('showTheory').disabled=!spec;
      if(!spec)$('showTheory').checked=false;
    }
    function setStatus(key,args={},kind=''){
      state.status={key,args,kind};
      const displayArgs={...args};if(typeof displayArgs.R==='number')displayArgs.R=fmt(displayArgs.R);if(typeof displayArgs.n==='number')displayArgs.n=fmt(displayArgs.n);if(displayArgs.dist)displayArgs.dist=distName(displayArgs.dist);
      const s=$('status');s.className='status-strip'+(kind?' '+kind:'');$('statusText').textContent=t(key,displayArgs);
    }
    function emptySummaryHtml(){return `
      <div class="metric"><div class="metric-label">${t('targetParameter')}</div><div class="metric-value">—</div><div class="metric-sub">${t('dependsStatistic')}</div></div>
      <div class="metric"><div class="metric-label">${t('simulatedMean')}</div><div class="metric-value">—</div><div class="metric-sub">${t('mcMean')}</div></div>
      <div class="metric"><div class="metric-label">${t('standardError')}</div><div class="metric-value">—</div><div class="metric-sub">${t('sdSampling')}</div></div>
      <div class="metric"><div class="metric-label">${t('estimatedBias')}</div><div class="metric-value">—</div><div class="metric-sub">${t('simMeanMinusTarget')}</div></div>
      <div class="metric"><div class="metric-label">${t('sampleSize')}</div><div class="metric-value">—</div><div class="metric-sub">${t('observationsPerSample')}</div></div>
      <div class="metric"><div class="metric-label">${t('replications')}</div><div class="metric-value">—</div><div class="metric-sub">${t('statisticsSimulated')}</div></div>`;}
    function configChanged(){
      state.runId++; clearResults(false); updateTheoryHelp(); $('simulate').disabled=false; $('reset').disabled=false;
      const c=readConfig(),err=validate(c);setStatus(err||'settingsChanged',{},err?'error':'');
      if(!validatePopulationOnly(c))drawPopulation(c);
    }
    function clearResults(announce=true){
      state.results=null;$('sampleSizeLabel').textContent=t('awaitingSimulation');$('sampleChart').replaceChildren();$('sampleEmpty').style.display='grid';$('sampleValuesDetails').hidden=true;$('sampleValues').innerHTML='';
      $('sampleStatisticValue').textContent='—';$('samplingChart').replaceChildren();$('samplingEmpty').style.display='grid';$('legend').innerHTML='';$('discreteCallout').classList.remove('show');
      $('sampleStatisticLabel').textContent=t('sampleStatistic');$('samplingTitle').textContent=t('samplingDistribution');$('summary').innerHTML=emptySummaryHtml();
      if(announce)setStatus('resultsCleared');
    }
    function renderResult(result,preserveDetails=false){
      const c=result.config,info=populationInfo(c),target=targetFor(c,info),sim=meanSd(result.stats);
      $('sampleSizeLabel').textContent=`n = ${fmt(c.n)} ${t('observations')}`;
      drawExampleSample(result,preserveDetails);
      $('sampleStatisticLabel').textContent=t('sampleStatForThis',{stat:statName(c.stat)});$('sampleStatisticValue').textContent=fmt(result.exampleStat,7);
      drawSampling(result);
      const bias=target.value===null?null:sim.mean-target.value;
      $('summary').innerHTML=`
        <div class="metric"><div class="metric-label">${target.label}</div><div class="metric-value">${fmt(target.value,7)}</div><div class="metric-sub">${t('populationTarget')}</div></div>
        <div class="metric"><div class="metric-label">${t('simulatedMean')}</div><div class="metric-value">${fmt(sim.mean,7)}</div><div class="metric-sub">${t('mcMean')}</div></div>
        <div class="metric"><div class="metric-label">${t('standardError')}</div><div class="metric-value">${fmt(sim.sd,7)}</div><div class="metric-sub">${t('sdAcross',{R:fmt(c.R)})}</div></div>
        <div class="metric"><div class="metric-label">${t('estimatedBias')}</div><div class="metric-value">${fmt(bias,7)}</div><div class="metric-sub">${bias===null?t('noUniqueTarget'):t('simMeanMinusTarget')}</div></div>
        <div class="metric"><div class="metric-label">${t('sampleSize')}</div><div class="metric-value">${fmt(c.n)}</div><div class="metric-sub">${t('observationsPerSample')}</div></div>
        <div class="metric"><div class="metric-label">${t('replications')}</div><div class="metric-value">${fmt(c.R)}</div><div class="metric-sub">${c.useSeed?t('seedLabel',{seed:fmt(c.seed)}):t('statisticsSimulated')}</div></div>`;
    }
    function escapeHtml(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));}

    function applyLanguage(lang){
      state.lang=lang;document.documentElement.lang=lang==='hu'?'hu':'en';document.title=t('appTitle');document.querySelector('meta[name="description"]').content=t('metaDescription');
      document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
      $('stepKey').innerHTML=t('stepKey');$('langEn').setAttribute('aria-pressed',String(lang==='en'));$('langHu').setAttribute('aria-pressed',String(lang==='hu'));
      $('continuousGroup').label=t('continuous');$('discreteGroup').label=t('discrete');
      for(const [value,key] of Object.entries(DIST_KEY))document.querySelector(`#distribution option[value="${value}"]`).textContent=t(key);
      for(const [value,key] of Object.entries(STAT_KEY))document.querySelector(`#statistic option[value="${value}"]`).textContent=t(key);
      document.querySelector('.controls').setAttribute('aria-label',t('simulationControls'));document.querySelector('.results').setAttribute('aria-label',t('simulationResults'));
      $('populationChart').setAttribute('aria-label',t('populationChart'));$('sampleChart').setAttribute('aria-label',t('sampleChart'));$('samplingChart').setAttribute('aria-label',t('samplingChart'));$('legend').setAttribute('aria-label',t('chartLegend'));
      renderParameterFields();
      updateSeedVisibility();
      if(state.results)renderResult(state.results,true);else clearResults(false);
      setStatus(state.status.key,state.status.args,state.status.kind);
    }
    function updateSeedVisibility(){const enabled=$('useSeed').checked;$('seedControls').hidden=!enabled;$('useSeed').setAttribute('aria-expanded',String(enabled));}
    function newPositiveSeed(){
      if(globalThis.crypto?.getRandomValues)return crypto.getRandomValues(new Uint32Array(1))[0]%2147483647+1;
      return Math.floor(Math.random()*2147483647)+1;
    }

    $('distribution').addEventListener('change',()=>{renderParameterFields();configChanged();});
    $('sampleSize').addEventListener('input',configChanged);
    $('replications').addEventListener('input',configChanged);
    $('statistic').addEventListener('change',()=>{updateTheoryHelp();configChanged();});
    $('useSeed').addEventListener('change',()=>{updateSeedVisibility();configChanged();});
    $('seed').addEventListener('input',configChanged);
    $('showTheory').addEventListener('change',()=>{if(state.results){state.results.config.theory=$('showTheory').checked;drawSampling(state.results);}else setStatus('theorySaved');});
    $('newSeed').addEventListener('click',()=>{$('seed').value=String(newPositiveSeed());configChanged();});
    $('reset').addEventListener('click',()=>{state.runId++;clearResults(true);$('progressBar').style.width='0';$('simulate').disabled=false;$('reset').disabled=false;});
    $('sampleValuesDetails').addEventListener('toggle',updateSampleValuesSummary);
    $('langEn').addEventListener('click',()=>applyLanguage('en'));
    $('langHu').addEventListener('click',()=>applyLanguage('hu'));
    $('controlsForm').addEventListener('submit',async e=>{
      e.preventDefault();const c=readConfig(),err=validate(c);if(err){setStatus(err,{},'error');return;}
      clearResults(false);setStatus('generating',{R:c.R,n:c.n},'running');$('simulate').disabled=true;$('reset').disabled=false;$('progressBar').style.width='0';
      const result=await runSimulation(c);if(!result)return;
      state.results=result;renderResult(result);$('simulate').disabled=false;$('progressBar').style.width='100%';setStatus('complete',{R:c.R,dist:c.dist},'ready');
    });

    applyLanguage('en');
  })();
