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
  {
    question: ``,
    solution: ``,
    steps: ``,
    tags: [  ],
    source: ["", ""],
  },
  */
  {
    question: `Pro nějaké $a>0$ máme náhodnou veličinu X s hustotou:
              $$f(x) = \\left \\{ \\begin{array}{rcl} (x-1)(x-2) & \\mbox{pro} & 0 \\leq x \\leq 1 \\\\ a & \\mbox{pro} & 1 \\leq x \\leq 2 \\\\ 0 & \\, & \\text{jinak} \\end{array} \\right.$$

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
    steps: `$P(1M | 3M \\bigcap 4M) = \\frac{P(3M \\bigcap 4M | 1M) \\cdot P(1M)}{P(3M \\bigcap 4M)} = \\frac{\\frac{9}{14} \\cdot \\frac{8}{13} \\cdot \\frac{10}{15}}{\\frac{9}{14} \\cdot \\frac{10}{15}} = \\frac{8}{13}$`,
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
    steps: `a)
    $\\int_x^\\infty f_{X,Y}(x,y) dy = \\int_x^\\infty \\lambda^2 e^{-\\lambda y} dy = \\lambda^2 [\\frac{e^{-\\lambda y}}{-\\lambda}]_x^\\infty = \\lambda^2 (0 - \\frac{e^{-\\lambda x}}{-\\lambda}) = \\lambda e^{-\\lambda x}$

    b)
    $f(y|x) = \\frac{f(y,x)}{f(x)} = \\frac{\\lambda^2 e^{-\\lambda y}}{\\lambda e^{-\\lambda x}} = \\lambda \\frac{e^{-\\lambda y}}{e^{\\lambda x}}$`,
    source: ["fitwiki 14. 1. 2015", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2015-01-14#příklad_3"],
    tags: [ "sdružená hustota" ],
  },

  {
    question: `Buď $X_1, ..., X_n$ náhodný výběr nezávislých stejně rozdělených náhodných veličin s hustotou:
    $$f_\\theta(x) = \\frac{3}{3 - \\theta} (1 - \\theta x^2), x \\in (0, 1)$$ $$f_\\theta(x) = 0, jinak$$
    závislou na neznámém parametru $\\theta$. Najděte odhad $\\widehat{\\theta}_n$ parametru $\\theta$ momentovou metodou.`,
    solution: `$\\widehat{\\theta}_n = \\frac{12 \\widehat{X}_n - 6}{4 \\widehat{X}_n - 3}$`,
    steps: `$\\mu = \\int_0^1 x \\frac{3}{3 - \\theta} (1 - \\theta x^2) dx = \\frac{3}{3 - \\theta} ([\\frac{x^2}{2}]_0^1 - \\theta [\\frac{x^4}{4}]_0^1) = \\frac{3}{3-\\theta} \\cdot \\frac{2-\\theta}{4}$
    $\\mu = \\frac{3}{4} \\cdot \\frac{2-\\theta}{3-\\theta}$
    $\\frac{12\\mu - 6}{4\\mu - 3} = \\theta$
    $\\widehat{\\theta}_n = \\frac{12\\overline{X_n} - 6}{4\\overline{X_n} - 3}$`,
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
    $z_{0.005} = 2.575$ (z tabulek)
    <hr>
    Interval je: $(\\overline{X} - \\frac{\\sigma}{\\sqrt{n}} z_{\\frac{\\alpha}{2}}; \\overline{X} + \\frac{\\sigma}{\\sqrt{n}} z_{\\frac{\\alpha}{2}})$
    $2 \\cdot \\frac{\\sigma}{\\sqrt{n}} \\cdot z_{\\frac{\\alpha}{2}} = 2.524$
    $2 \\cdot \\frac{\\sqrt{6}}{\\sqrt{n}} \\cdot 2.575 = 2.524$
    $n = (\\frac{12 \\cdot 2.575}{2.524})^2$`,
    tags: [ "intervalové odhady", "náhodný výběr" ],
  },

  {
    question: `Bezpečnostní senzor pravidelně monitoruje počítačovou učebnu. Pokud se v učebně nikdo nepohybuje, senzor vrací signál $X = W$, kde $W$ je normálně rozdělená veličina se střední hodnotou $0$ a rozptylem $\\sigma^2 = 1.63$. V případě pohybu zařízení vrací signál $X = W + \\theta$, kde $\\theta > 0$ je neznámá konstanta. Na základě $n = 49$ nezávislých pozorování jsme spočetli konfidenční intervaly pro $\\mu = EX$ takto:

    90% interval A: (0.0569, 0.6033)
    95% interval B: (0.0026, 0.6576)

    a) Otestujte hypotézu $H_0: \\mu = 0$ versus alternativa $H_A: \\mu > 0$ pomocí těchto intervalů tak, aby pravděpodobnost chyby prvního druhu (tedy chybné zamítnutí $H_0$) byla 5%. Popiště přesně jak a proč jste se rozhodli.`,
    solution: `$\\alpha = 5\\%$
    Chceme vědět, zda $\\mu = 0$
    Na 90% víme, že $\\mu \\in (0.0569, 0.6033)$ a na 95% víme, že $\\mu \\in (0.0569, \\infty)$
    <a href="http://imgur.com/8uSJnMR"><img src="http://i.imgur.com/8uSJnMR.png" title="source: imgur.com" /></a>

    $0 \\notin (0.0569, \\infty)$ => $H_0$ zamítáme s konf. 95%.
    `,
    tags: [ "hypotézy", "intervalové odhady" ],
  },

  {
    question: `Systém Windows používá 80 % uživatelů, systém Linux 40 % uživatelů. Dále 5 % uživatelů nepoužívá ani Windows ani Linux. Jaká je pravděpodobnost, že uživatel používá zároveň Windows a Linux?`,
    solution: `25%`,
    steps: `$P(W) = 0.8, P(L) = 0.4, P(other) = 0.05$
    $P(W \\bigcup L) = P(W) + P(L) - P(W \\bigcap L)$
    $P(other) = 1 - P(W \\bigcup L)$
    $1 - P(W \\bigcup L) = 1 - (P(W) + P(L) - (P(W \\bigcap L))$
    $0.05 = -0.2 + P(W \\bigcap L)$
    $P(W \\bigcap L) = 0.25$`,
    tags: [ "bayesova věta", "stromy" ],
    source: ["fitwiki 8. 1. 2015", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2015-01-08"],
  },

  {
    question: `Mějme $f(x) = \\frac{3}{2}(x^2 + (1+p) x^3)$ na intervalu $<-1, 1>$. Najděte odhad parametru $p$ momentovou metodou.`,
    solution: `$p = \\frac{5}{3} \\mu - 1$`,
    steps: `Parametr $p$ lze vyjádřit pouze pomocí $E(X)$, není nutné počítat $E(X^2)$.
    $\\mu = \\int_{-1}^1 x \\cdot \\frac{3}{2} (x^2 + (1+p) x^3) = \\frac{3}{2} [(\\frac{1}{4} + \\frac{(1+p)}{5}) - (\\frac{1}{4} - \\frac{(1+p)}{5})]_{-1}^1 = \\frac{3(1+p)}{5}$
    $p = \\frac{5}{3} \\mu - 1$`,
    tags: [ "momentová metoda" ],
    source: ["fitwiki 8. 1. 2015", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2015-01-08"],
  },

  {
    question: `Mějme $f(x) = a x$ pro $(0, 1)$ a $f(x) = 0$ jinde.

    a) Určete parametr $a$
    b) Najděte distribuční funkci $F(x)$
    c) Spočítejte $P(x \\in (\\frac{1}{2}, \\frac{2}{3}))$`,
    solution: `a) $a = 2$

    b)
    $
    F(x) = \\left\\{
      \\begin{array}{lcl}
        0 &:& x \\in (-\\infty, 0) \\\\
        x^2 &:& x \\in \\left<0, 1\\right> \\\\
        1 &:& x \\in (1, \\infty)
    \\end{array}
    \\right.
    $

    c) $\\frac{7}{36}$
    `,
    steps: `a) Je třeba výraz zintegrovat a poté položit rovný 1:

    $\\int_{-\\infty}^{\\infty} f(x) = \\int_{0}^{1} a\\cdot x_{dx} = a \\cdot \\left[\\frac{x^2}{2}\\right]_0^1 = \\frac{a}{2}$
    $\\int_{-\\infty}^{\\infty} f(x) = 1 \\Rightarrow \\frac{a}{2} = 1 \\Rightarrow a = 2$

    b) integrace po intervalech
    $(-\\infty, 0):$
    $F(x) = \\int_{-\\infty}^x f(t)\\,dt = \\int_{-\\infty}^x 0\\,dt = 0$
    $(0, 1):$
    $F(x) = \\int_{-\\infty}^0 0\\,dx + \\int_0^x f(t)\\,dt = 0 + \\int_0^x 2t\\,dt = \\left[ t^2 \\right]_0^x = x^2$
    $(1,\\infty):$
    $F(x) = \\int_{-\\infty}^0 0\\,dx + \\int_0^1 2x\\,dx + \\int_1^x f(t)\\,dt = 0 + \\left[ x^2 \\right]_0^1 + 0 =
    1$
    $
    F(x) = \\left\\{
      \\begin{array}{lcl}
        0 &:& x \\in (-\\infty, 0) \\\\
        x^2 &:& x \\in \\left<0, 1\\right> \\\\
        1 &:& x \\in (1, \\infty)
    \\end{array}
    \\right.
    $

    c)
    $P\\left(x \\in \\left(\\frac{1}{2}, \\frac{2}{3}\\right)\\right) = P\\left(\\frac{1}{2} \\lt x \\lt \\frac{2}{3}\\right) = F(\\frac{2}{3}) - F(\\frac{1}{2}) = \\left(\\frac{2}{3}\\right)^2 - \\left(\\frac{1}{2}\\right)^2 = \\frac{7}{36}$`,
    tags: [ "integrace" ],
    source: ["fitwiki 8. 1. 2015", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2015-01-08"],
  },

  {
    question: `Mějme náhodnou veličinu $X$ s normálním rozdělením a rozptylem $\\sigma^2 = 9$.

    a) Určete $n$ takové, aby krajní bod od $\\overline{X}$ byl vzdálen 0.84 s pravděpodobností 97.5%.
    b) Určete pravostranný interval pro $\\overline{X}$ = 2.`,
    solution: `a) $n = 49$
    b) $(1.16, \\infty)$`,
    steps: `a)
    Protože neznáme n(které tedy chceme zjistit), musíme použít z rozdělení. $ \\bar{x} + z \\cdot \\frac{s}{\\sqrt{n}}$
    Protože víme, že krajní bod je od střední hodnoty vzdálen 0.84, tak už stačí jen řešit rovnici.
    $ z \\cdot \\frac{s}{\\sqrt{n}} = 0.84$
    $ \\frac{s \\cdot 100 \\cdot z}{84} = \\sqrt{n}$
    $ \\frac{s \\cdot 100 \\cdot 1.96}{84} = \\sqrt{n}$
    $ 7 = \\sqrt{n}$
    $ n = 49$

    b)
    Víme, že krajní bod intervalu leží 0.84 od střední hodnoty, takže stačí pouze odečíst od střední hodnoty vzdálenost a dostaneme krajní bod intervalu.
    Výsledný interval je tedy $(1.16, +inf)$`,
    tags: [ "intervalové odhady" ],
    source: ["fitwiki 21. 5. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-05-21"],
  },

  {
    question: `Na třech výrobních linkách jsou vyráběny výrobky. První linka zajišťuje 50% produkce a pravděpodobnost vyrobení vadného výrobku je 1%, druhá linka zajišťuje 30% produkce a pravděpodobnost vyrobení vadného výrobku je 2% a třetí linka zajišťuje 20% produkce a pravděpodobnost vyrobení vadného výrobku je 3.5%. Určete pravděpodobnost, že náhodně vybraný vadný výrobek pochází z druhé linky.`,
    solution: `$\\frac{1}{3}$`,
    steps: `$P(1L)=\\frac{5}{10}$
$P(2L)=\\frac{3}{10}$
$P(3L)=\\frac{2}{10}$
$P(V|1L)=\\frac{1}{100}$
$P(V|2L)=\\frac{2}{100}$
$P(V|3L)=\\frac{35}{1000}$
$P(2L|V)=\\frac{P(2L)P(V|2L)}{P(1L)P(V|1L)+P(2L)P(V|2L)+P(3L)P(V|3L)}$
$P(2L|V)=\\frac{\\frac{3}{10}.\\frac{2}{100}}{\\frac{5}{10}.\\frac{1}{100}+\\frac{3}{10}.\\frac{2}{100}+\\frac{2}{10}.\\frac{35}{1000}} = \\frac{6}{18} = \\frac{1}{3}$
`,
    tags: [ "bayesova věta", "stromy" ],
    source: ["fitwiki 12. 6. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-06-12"],
  },

  {
    question: `Nechť $X$ a $Y$ jsou stejně rozdělené nezávislé náhodné veličiny s geometrickým rozdělením s parametrem $p \\in (0, 1)$

    a) Najděte rozdělení $min\\{X, Y\\}$. O jaké rozdělení se jedná (jaký má název)?
    b) Spočtěte pravděpodobnost $P(X > Y)$.`,
    solution: `$P(X>k) * P(Y>k) = \\left[1-\\left(2p-p^2\\right)\\right]^k \\rightarrow Geom(2p - p^2)$
    $P(X>Y) = \\frac{(1-p)}{(2-p)}$`,
    tags: [ "druhy rozdělení", "minimální rozdělení" ],
    source: ["fitwiki 12. 6. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-06-12"],
  },

]

// (4) Hm tak dík, na zbytek už asi nešahej, pokud nevíš, co děláš.


store.totalQuestions = store.questions.length
