// (1) Se sem nejprve přidej asi
store.contributors = [
  ["Marián Hlaváč", "marian.hlavac@fit.cvut.cz"],
]

// (2) Asi bys měl updatnout tohle, ale je mi to jedno
store.lastUpdate = "2017-01-14"

// (3) Nasyp sem co nejvíc otázek co máš, podle tvaru co je naznačenej níž,
//     úplně dolů, neprohazuj pořadí, nedělej chyby,
//     před PR ověř správnost syntax, newliny jsou novy radky i v html
store.questions = [
  /*
  {
    question: "Zadání příkladu, matika jde mezi $$. <strong>HTML funguje taky případně.</strong>",
    solution: "Řešení příkladu",
    steps: "Postup příkladu", (nepovinné)
    tags: [ "tagy", "momentová metoda", "integrace" ],
    source: ["Zdroj odkud to je (ideálně dodržujte tvar "fitwiki xx.xx.xxxx")", "a url"], (nepovinné)
  },
  */
  {
    question: `Pro nějaké $a>0$ máme náhodnou veličinu X s hustotou:
              $$f(x) = \\{ \\begin{array}{rcl} (x-1)(x-2) & \\mbox{pro} & 0 \\leq x \\leq 1 \\\\ a & \\mbox{pro} & 1 \\leq x \\leq 2 \\\\ 0 & \\, & \\text{jinak} \\end{array}$$

              a) Pro jaké a je $f$ hustotou náhodné veličiny X?
              b) Najděte $EX$
              c) Spočtěte $P(X<\\frac{4}{3})$`,
    solution: `a) $a=\\frac{1}{6}$
              b) $EX=\\frac{1}{2}$
              c) $P(X<\\frac{4}{3})=\\frac{8}{9}$`,
    steps: `a)
    $$\\begin{align} \\int_{-\\infty}^{\\infty} f(x) dx = 1 \\\\ \\int_0^1 (x-1)(x-2) dx + \\int_1^2 a dx = 1 \\\\ [\\frac{x^3}{3} - \\frac{3x^2}{2} + 2x]_0^1 + a = 1 \\\\ \\frac{5}{6} + a = 1 \\\\ a = \\frac{1}{6} \\end{align}$$
    <hr>
    b)
    $$E(X) = \\int_{-\\infty}^{\\infty} f(x) dx = \\int_0^1 x(x-1)(x-2) dx + \\int_1^2 \\frac{1}{6} dx = \\\\ = [\\frac{x^4}{4} - \\frac{3x^3}{3} + \\frac{2x^2}{2}]_0^1 + \\frac{1}{6} [\\frac{x^2}{2}]_1^2 = \\frac{1}{4} + \\frac{3}{12} = \\frac{1}{2}$$
    <hr>
    c)
    $$P(X < \\frac{4}{3}) = \\int_{-\\infty}^{\\frac{4}{3}} f(x) dx = \\\\ = \\int_0^1 (x-1)(x-2) dx + \\int_1^{\\frac{4}{3}} \\frac{1}{6} dx = \\frac{5}{6} + \\frac{1}{6} \\cdot [x]_1^{\\frac{4}{3}} = \\frac{8}{9} $$
    `,
    source: ["fitwiki 13. 1. 2016", "https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2016-01-13"],
    tags: [ "spojité", "integrace" ],
  },

  {
    question: `Máme krabičku s 10 modrými a 5 červenými kuličkami. Někdo vytáhl 4 a řekl nám, že poslední dvě jsou modré. Jaká je pravděpodobnost, že první vytažená byla modrá?`,
    solution: `$\\frac{8}{13}$`,
    source: ["fitwiki 13. 1. 2016", "https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2016-01-13"],
    tags: [ "kuličky", "bayesova věta", "stromy" ],
  },

  {
    question: `Sdružená hustota pravděpodobnosti náhodných veličin X a Y má tvar
    $$f_{X,Y}(x, y) = \\lambda^2 e^{-\\lambda y} \\quad \\text{pro} \\quad 0 \\leq x \\leq y \\leq +\\infty$$

    a) Najděte marginální hustotu $X$.
    b) Najděte podmíněnou hustotu $Y$ dáno $X$, tj. $f_{Y|X}(y|x)$`,
    solution: `a) $\\lambda e^{-\\lambda x}$
    b) $\\lambda \\frac{e^{-\\lambda y}}{e^{-\\lambda x}}$`,
    source: ["fitwiki 14. 1. 2015", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2015-01-14#příklad_3"],
    tags: [ "sdružená hustota" ],
  },

  {
    question: `Buď $X_1, ..., X_n$ náhodný výběr nezávislých stejně rozdělených náhodných veličin s hustotou:
    $$f_\\theta(x) = \\frac{3}{3 - \\theta} (1 - \\theta x^2), x \\in (0, 1)$$ $$f_\\theta(x) = 0, jinak$$
    závislou na neznámém parametru $\\theta$. Najděte odhad $\\widehat{\\theta}_n$ parametru $\\theta$ momentovou metodou.`,
    solution: `$\\widehat{\\theta}_n = \\frac{12 \\widehat{X}_n - 6}{4 \\widehat{X}_n - 3}$`,
    source: ["fitwiki 14. 1. 2015", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2015-01-14#příklad_4"],
    tags: [ "momentová metoda" ],
  },

  {
    question: `Výletní loď má kapacitu 40 pasažérů. Hmotnost lidí má střední hodnotu $\\mu = 80 kg$ a směrodatnou odchylku $\\sigma = 20 kg$.

    a) Určete střední hodnotu a rozptyl celkové hmotnosti pasažérů při naplnění kapacity lodi.
    b) Na jakou hmotnost je potřeba loď zkonstruovat, aby se na 99 % při plném obsazení nepotopila? Použijte CLV!`,
    solution: `a) $EX = 3 200$, $varX = 16 000$
    b) $n = 3495 kg$`,
    steps: `a)
    $EX = n\\cdot \\mu = 40 \\cdot 80 = 3 200$
    $varX = n \\cdot \\sigma^2 = 40 \\cdot 20^2 = 16 000$
    <hr>
    b) $\\frac{n - 3200}{\\sqrt{16000}} = 2.33$ ( 2.33 je z tabulky normalniho rozdeleni pro 0.99)
    `,
    source: ["fitwiki 4. 6. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-06-04#skupina_a3"],
    tags: [ "momentová metoda" ],
  },

  {
    question: `Uvažujme náhodnou veličinu $X$ mající normální rozdělení s rozptylem $\\sigma^2 = 6$. Chceme odhadnout její střední hodnotu $\\mu$ s pomocí oboustranného 99% konfidenčního intervalu délky $2.524$.

    a) Jak velký náhodný výběr budeme potřebovat?
    b) Předpokládejme, že náhodným výběrem o velikosti určené v předchozím bodě jste spočetli výběrový průměr jako $\\widehat{X} = 1.5$. Najděte oboustranný 90% konfidenční interval pro $\\mu$.`,
    solution: `$n = (\\frac{12 \\cdot 2.575}{2.524})^2$`,
    steps: `
    $ \\alpha = (1 - p) = (1 - 0.99) = 0.01 $
    $2 \\cdot \\frac{\\sigma}{\\sqrt{n}} \\cdot z_{\\frac{\\alpha}{2}} = 2.524$
    $z_{0.005} = 2.575$ (z tabulek)
    <hr>
    $2 \\cdot \\frac{6}{\\sqrt{n}} \\cdot 2.575 = 2.524$
    $n = (\\frac{12 \\cdot 2.575}{2.524})^2$`,
    tags: [ "intervalové odhady" ],
  },

]

// (4) Hm tak dík, na zbytek už asi nešahej, pokud nevíš, co děláš.


store.totalQuestions = store.questions.length
