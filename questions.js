// (1) Se sem nejprve přidej asi
store.contributors = [
  ["Marián Hlaváč", "marian.hlavac@fit.cvut.cz"],
  ["Matěj Pokorný", "pokorm11@fit.cvut.cz"],
]

// (2) Asi bys měl updatnout tohle, ale je mi to jedno
store.lastUpdate = "2017-01-24"

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
    tags: [ "druhy rozdělení", "CLV" ],
  },

  {
    question: `Uvažujme náhodnou veličinu $X$ mající normální rozdělení s rozptylem $\\sigma^2 = 6$. Chceme odhadnout její střední hodnotu $\\mu$ s pomocí oboustranného 99% konfidenčního intervalu délky $2.524$.

    a) Jak velký náhodný výběr budeme potřebovat?
    b) Předpokládejme, že náhodným výběrem o velikosti určené v předchozím bodě jste spočetli výběrový průměr jako $\\widehat{X} = 1.5$. Najděte oboustranný 90% konfidenční interval pro $\\mu$.`,
    solution: `a) $n = 25$
    b) $(0.69, 2.3)$`,
    steps: `
    $ \\alpha = (1 - p) = (1 - 0.99) = 0.01 $
    $z_{0.005} = 2.575$ (z tabulek)
    <hr>
    Interval je: $(\\overline{X} - \\frac{\\sigma}{\\sqrt{n}} z_{\\frac{\\alpha}{2}}; \\overline{X} + \\frac{\\sigma}{\\sqrt{n}} z_{\\frac{\\alpha}{2}})$
    $2 \\cdot \\frac{\\sigma}{\\sqrt{n}} \\cdot z_{\\frac{\\alpha}{2}} = 2.524$
    $2 \\cdot \\frac{\\sqrt{6}}{\\sqrt{n}} \\cdot 2.575 = 2.524$
    $n = 25$
    <hr>
    $ \\alpha = (1 - p) = (1 - 0.9) = 0.1 $
    $|z(\\frac{0.1}{2})| = 1.65$ (z tabulek)
    
    $\\left(\\widehat{X}-z(\\frac{\\alpha}{2})\\frac{\\sigma}{\\sqrt{n}}, \\widehat{X}+z(\\frac{\\alpha}{2})\\frac{\\sigma}{\\sqrt{n}}\\right) = \\left(1.5-1.65\\cdot\\frac{\\sqrt{6}}{5}, 1.5+1.65\\cdot\\frac{\\sqrt{6}}{5}\\right)=\\left(0.69, 2.3\\right)$`,
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
    source: [ "fitwiki", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2015-01-14#příklad_7" ]
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

    a) Najděte rozdělení $\\min\\{X, Y\\}$. O jaké rozdělení se jedná (jaký má název)?
    b) Spočtěte pravděpodobnost $P(X > Y)$.`,
    solution: `$P(X>k) * P(Y>k) = \\left[1-\\left(2p-p^2\\right)\\right]^k \\rightarrow Geom(2p - p^2)$
    $P(X>Y) = \\frac{(1-p)}{(2-p)}$`,
    tags: [ "druhy rozdělení", "rozdělení minima" ],
    source: ["fitwiki 12. 6. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-06-12"],
  },

  {
    question: `Automat generuje číslice 0 až 9, každou se stejnou pravděpodobností.

    a) Spočtěte střední hodnotu a rozptyl počtu sudých čísel mezi n generovanými hodnotami (nulu považujeme za sudé číslo).
    b) Kolik čísel musíme generovat, aby se mezi nimi s pravděpodobností 0.975 nacházela alespoň dvě sudá? Použijte CLV!`,
    solution: `a) $E(X) = \\frac{n}{2}, var(x) = \\frac{n}{4}$
    b) Je potřeba vygenerovat alespoň 13 čísel.`,
    steps: `a) Střední hodnota pro binomické rozdělení: $EX = n*p = n * \\frac{1}{2} = \\frac{n}{2}$
    Rozptyl pro binomické rozdělení: $varX = n*p*(1-p) = n * \\frac{1}{2} * \\frac{1}{2} = \\frac{n}{4}$
    <hr>
    b) Rozdělení počtu sudých v n čísel je sice binomické, ale CLV mluví jen o tom, že n i.i.d. výběrů bude mít normální rozdělení.

    Takže nebudeme používat binomické rozdělení pro n jevů, ale vyjdeme z pravděpodobnosti vygenerování sudého čísla (bernouliho rozdělení)

    Pravděpodobnost vytažení sudého čísla je $p$, střední hodnota je $p$, rozptyl je $p(1-p)$.

    V našem případě $EX=\\frac{1}{2}$, $var X=\\frac{1}{4}$.

    CLV říká, že součet n náhodných výběrů bude mít rozdělení $N(n\\cdot E(X), n \\cdot var(X))$.

    $P(\\sum X > \\frac{2-\\frac{n}{2}}{\\sqrt{\\frac{n}{4}}}) = 1 - P(\\sum X < \\frac{2-\\frac{n}{2}}{\\sqrt{\\frac{n}{4}}}) = \\\\ = 1 - \\Phi(\\frac{2-\\frac{n}{2}}{\\sqrt{\\frac{n}{4}}}) = 0.975
    \\Phi(\\frac{2-\\frac{n}{2}}{\\sqrt{\\frac{n}{4}}}) = 0.025$

    $\\frac{2-\\frac{n}{2}}{\\frac{\\sqrt{n}}{2}}= -2.43$(z tabulek)

    $n - 2.43 \\sqrt{n} - 4 = 0$
    $\\sqrt{n} = 3.55$ (druhé řešení je záporné číslo, to je nesmysl)

    $n = 12.6$

    Je tedy potřeba vygenerovat alespoň 13 čísel, aby s pravděpodobností 97.5% mezi nimi byly alespoň 2 sudá.`,
    tags: [ "druhy rozdělení", "CLV" ],
    source: ["fitwiki 12. 6. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-06-12"],
  },

  {
    question: `Uvažujeme náhodný výběr $n = 25$ napozorovaných hodnot z normálního rozdělení. Součet napozorovaných hodnot a součet kvadrátů hodnot jsme spočetli jako
    $$\\sum_{i=1}^{n}x_i = 250 \\quad \\sum_{i=1}^{n}x^2_i = 2509$$

    a) Najděte oboustranný intervalový odhad pro střední hodnotu $\\mu$ s věrohodností 95%.
    b) Najděte oboustranný intervalový odhad pro rozptyl $\\sigma^2$ s věrohodností 95%. `,
    solution: `a) $(10 - 0.253, 10 + 0.253)$
    b) $\\left(\\frac{9}{39.364}\\right), \\left(\\frac{9}{12.401}\\right)$`,
    steps: `a) $\\overline{X}=\\frac{250}{25}=10$
    $n=25$

    Nevíme směrodatnou odchylku.

    $s = \\sqrt{\\frac{1}{n - 1}((\\sum_{i=1}^{n}x_i^2) - n\\overline{x}^2})$
    $s = \\sqrt{\\frac{1}{25 - 1}(2509-25*10^2)}$
    $s=0.6123$

    $\\delta=T_{\\frac{1-p}{2}}^{n-1}\\cdot\\frac{s}{sqrt{n}}$
    $\\delta=T_{\\frac{1-0.95}{2}}^{25-1}\\cdot\\frac{0.6123}{sqrt{25}}$

    T najdeme v T-tabulka (student).

    $\\delta=0.253$
    <hr>
    b) Interval: $(10-0.253;10+0.253)$

    $s=0,6123$ (viz předchozí řešení)

    $\\left[\\left(\\frac{(25-1)\\cdot 0.6123^2}{\\chi_{1-\\frac{1-0.95}{2}}^{2}(25-1)}\\right); \\left(\\frac{(25-1)\\cdot 0.6123^2}{\\chi_{\\frac{1-0.95}{2}}^{2}(25-1)}\\right)\\right]$

    (hledáme v CHI tabulce...)

    $\\left(\\frac{9}{39.364}\\right); \\left(\\frac{9}{12.401}\\right)$`,
    tags: [ "intervalové odhady" ],
    source: ["fitwiki 12. 6. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-06-12"],
  },

  {
    question: `Nechť náhodné veličiny $X, Y$ jsou výsledky dvou nezávislých hodů vyváženou čtyřstěnnou hrací kostkou.

    a) Popište rozdělení náhodné veličiny $Z = \\min\\{X, Y\\}$.
    b) Spočítejte střední hodnotu $Z$.
    c) Jsou $X$ a $Z$ nezávislé? Vysvětlete proč.`,
    solution: `-`,
    tags: [ "rozdělení minima", "tabulka" ],
    source: [ "fitwiki 12. 6. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-06-12" ],
  },

  {
    question: `Rodina má tři malé chlapce, jejichž věk je postupně 6, 21 a 63 měsíců a kteří měří ($ y_i $) 67, 82 a 121 cm. Předpokládejme, že závislost výšky na věku by byla lineární a vezměme model $ y_i = \\beta_0 + \\beta_1 x_i + \\epsilon_i $, $ i = 1...n $ s normálně rozdělenými chybami $\\epsilon_i$.

    Najděte odhady parametrů $\\beta_0$ a $\\beta_1$. Z výše uvedených dat jsme získali:

    $$\\overline{x} = 30 \\quad \\overline{y} = 90$$ $$\\sum_{i=1}^{3}x^2_i = 4446 \\quad \\sum_{i=1}^{3}y^2_i = 25854$$ $$\\sum_{i=1}^{3}x_i y_i = 9747$$
    `,
    solution: `$\\beta_0 = \\frac{5985}{97}$
    $\\beta_1 = \\frac{183}{194}$`,
    steps: `$\\beta_1 = \\frac{S_{X, Y}}{S_X^2}$
    potřebujeme spočítat $S_{X, Y}$ a $S_X^2$
    $S_{X,Y} = \\frac{1}{n-1}\\sum_{i=1}^{n}(x_i-\\overline{x})(y_i-\\overline{y}) =
     \\frac{1}{3-1}\\sum_{i=1}^{3}(x_iy_i-x_i\\overline{y}-\\overline{x}y_i+\\overline{x}\\overline{y}) =
    \\frac{1}{2}(\\sum_{i=1}^3x_iy_i - \\sum_{i=1}^3x_i\\overline{y}-\\sum_{i=1}^3\\overline{x}y_i+\\sum_{i=1}^3\\overline{x}\\overline{y})=
    \\\\$
      * $\\overline{x}$ a $\\overline{y}$ jsou konstanty, ty tedy můžeme vytknout před sumu
      * $x_i$ a $y_i$ se v sumě sčítají přes $_i$
    $
    =\\frac{1}{2}(\\sum_{i=1}^3x_iy_i - \\overline{y}\\sum_{i=1}^3x_i -\\overline{x}\\sum_{i=1}^3y_i+\\overline{x}\\overline{y}\\sum_{i=1}^3 1) =
    \\\\
    $
      * teď se zbavíme několika sum tak, že je nahradíme tímto: $\\overline{x} = \\frac{1}{n}\\sum_{i=1}^n x_i  =>  \\sum_{i=1}^n x_i = \\overline{x} n$
      * $\\sum_{i=1}^n 1 = n$ (je to součet //n// jedniček)
    $ \\frac{1}{2}(\\sum_{i=1}^3x_iy_i - \\overline{x}\\overline{y}n -\\overline{x}\\overline{y}n+\\overline{x}\\overline{y}n)=
    \\frac{1}{2}(\\sum_{i=1}^3x_iy_i - \\overline{x}\\overline{y}n) = \\frac{1}{2}(9747 - 30*90*3) = \\frac{1647}{2}
    $
    $s_x^2=\\frac{1}{n-1}\\sum_{i=1}^n(x_i-\\overline{x})^2=...$
    roznásobit, vytknout konstanty a trik s nahrazením jako výše
    $...=\\frac{1}{2}\\left(\\sum_{i=1}^3x_i^2-2\\overline{x}\\sum_{i=1}^3x_i+\\overline{x}^2*3\\right)=\\frac{1}{2}\\left(4446-2*30*30*3+30^2*3\\right)=873$
    $\\beta_1 = \\frac{S_{X, Y}}{S_X^2}$
    $\\beta_1=\\frac{\\frac{1647}{2}}{873}=\\frac{183}{194}=\\approx0,94$
    $\\beta_0 = \\overline{y} - \\beta_i\\overline{x} $
    $\\beta_0=90-0,94*30=61,8$`,
    tags: [ "lineární regrese", "lineární model" ],
    source: ["", ""],
  },

  {
    question: `Z $n = 25$ hodnot náhodného výběru z normálního rozdělení jsme spočetli průměr $ \\overline{x} = 1.08 $ a směrodatnou odchylku $s_x = 0,5$.

    Otestujte hypotézu  $H_0 $ :  μ = 1 versus $H_A $ :  μ < 1 tak, aby pravděpodobnost chybného zamítnutí $H_0 $ byla 5%. Vysvětlete detailně své rozhodnoutí.`,
    solution: `Nemůžeme zamítnout hypotézu $H_0$.`,
    steps: ` $\\mu \\in (-\\infty ; \\overline{X} + t_{\\alpha;n-1} * \\frac{S_{X}}{\\sqrt{n}}\\rangle$
    $H_a $ je jednostranný interval, chceme u něj 5%.
    $\\alpha = 0.05$
    $t_{\\alpha;n-1} = t_{0.05;24} = 1.711 $
    Spočtený konfidenční jednostranný interval:
    $\\mu \\in (-\\infty ; 1.08 + 1.711 * \\frac{0.5}{\\sqrt{25}}\\rangle$
    $\\mu \\in (-\\infty ; 1.2511\\rangle$
    Protože $\\mu = 1 \\in (-\\infty; 1.2511\\rangle$, nemůžeme zamítnout hypotézu
    $H_0$.`,
    tags: [ "hypotézy" ],
    source: ["", ""],
  },

  {
    question: `Mějme náhodnou veličinu $X$ s normálním rozdělením a s $\\mu = 100$ a $\\sigma^2 = 100$. Dále pak náhodnou veličinu Y kde $Y = 4X - 300$.(15%)

    a) $P(Y > 130)$
    b) $cov(X,Y)$`,
    solution: `a) $0.2266$ (TODO overit)
    b) $400$`,
    steps: `a)
    $E(Y) = 4 * X.\\mu - 300 = 100$
    $var(Y) = var(4X - 300) = var(4X) = 4^2 * var(X) = 16 * 100$  -  podle vzorce $var(aX + b) = a^2 * var(X)$
    $var(Y) = 4^2 * .\\sigma^2 = 1600$
    $P(Y > 130) = P\\left(Y > \\frac{130-100}{\\sqrt{1600}}\\right) = P(Y > 0.75) = 1 - P(Y <= 0.75)$
    $1 - 0.2734 = 0.7266$
    Nema to byt takto?
    $1 - 0.7734 = 0.2266$
    <hr>
    b)
    $cov(X,Y)=E(XY)-E(X)E(Y)$
    $
    \\begin{align*}
    var(X)=E(X^2)-\\left(E(X)\\right)^2 \\rightarrow \\\\ & 100 = E(X^2)-100^2 \\\\ & E(X^2)=10100
    \\end{align*}
    $
    $E(XY)=E(4X^2-300X)=4E\\left(X^2\\right)-300E(X)=4*10100-300*100=10400$
    $cov(X,Y)=10400-100*100=400$`,
    tags: [ "výpočty vlastností", "vzorečky" ],
    source: ["", ""],
  },

  {
    question: `Sdružená hustota pravděpodobnosti náhodných veličin $X$ a $Y$ má tvar
    $f_{X,Y}(x,y)=\\frac{1}{3}(x+y+1)$ pro $x\\in\\left[-1,1\\right]$ a $y\\in\\left[0,1\\right]$

    Najděte korelační koeficient náhodných veličin $X$ a $Y$, tj. $\\rho(X,Y)$`,
    solution: `$-0,081$`,
    steps: `$\\rho(x,y)=\\frac{cov(x,y)}{\\sqrt{var(X)*var(Y)}}$
    $f_X(x)=\\int_0^1 f_{X,Y}(x,y)\\, \\mbox{d}y=\\int_0^1\\frac{1}{3}\\left(x+y+1\\right)\\mbox{d}y=\\frac{1}{6}(2x+3)$
    $f_Y(y)=\\int_{-1}^1 f_{X,Y}(x,y)\\, \\mbox{d}x=\\int_{-1}^1\\frac{1}{3}\\left(x+y+1\\right)\\mbox{d}x=\\frac{2(y+1)}{3}$

    Nyní zjistíme, že veličiny nejsou nezávislé (jinak by se pravá a levá strana rovnaly):
    $f_{X,Y}(x,y)==f_Xx*f_Yy$
    $\\frac{1}{3}\\left(x+y+1\\right) = \\left(\\frac{1}{6}(2x+3)\\right)*\\left(\\frac{2(y+1)}{3}\\right)$
    <div class="uk-card uk-card-default uk-padding">Kdyby byly nezávislé, pak $cov(x,y)==0$ => $\\rho(x,y)==0$.</div>
    $cov(X,Y)=E(XY)-E(X)E(Y)$
    $
    \\begin{align*}
    E(X)=\\int_A^A x*f(x) \\mbox{d}x = \\int_{-1}^1 x*\\frac{1}{6}\\left(2x+3\\right)\\mbox{d}x = \\frac{2}{9}
    \\end{align*}
    $
    $
    \\begin{align*}
    E(Y)=\\int_A^A y*f(y) \\mbox{d}y = \\int_{0}^1 y*\\frac{2(y+1)}{3}\\mbox{d}y = \\frac{5}{9}
    \\end{align*}
    $
    $
    \\begin{align*}
    E(XY)=\\int_0^1 \\int_{-1}^1 \\left(x*y*\\frac{1}{3}(x+y+1)\\right) \\mbox{d}x \\mbox{d}y = \\frac{1}{9}
    \\end{align*}
    $
    $cov(X,Y)=E(XY)-E(X)E(Y)=\\frac{1}{9}-\\frac{2}{9}*\\frac{5}{9}=-\\frac{1}{81}$
    $\\rho(x,y)=\\frac{cov(x,y)}{\\sqrt{var(X)*var(Y)}}=-0,081$`,
    tags: [ "korelační koeficient", "výpočty vlastností" ],
    source: ["fitwiki 18. 6. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-06-18#p%C5%99%C3%ADklad_3"],
  },

  {
    question: `Uvažujme náhodný výběr $n = 16$ napozorovaných hodnot z normálního rozdělení. Výběrový průměr a součet kvadrátů napozorovaných hodnot jsme spočetli jako $$\\overline{X} = 13 \\quad \\text{a} \\quad \\normalsize\\sum\\nolimits_{i=0}^{16}x_i^2 = 2708$$

    V odpovědích níže nemusíte přesně numericky dopočítat krajní body intervalů, ale musíte dosadit správné numerické hodnoty do správných vzorců.

    a) Najděte oboustranný intervalový odhad pro střední hodnotu $\\mu$ s věrohodností 95%.
    b) Najděte oboustranný intervalový odhad pro rozptyl $\\sigma^2$ s věrohodností 95%.`,
    solution: `a) $\\left(13-0,27703; 13+0,27703\\right)$
    b) $ \\left(\\frac{4,056}{27,488};\\frac{4,056}{6,262}\\right)$`,
    steps: `a)
Dopočítáme neznámé $s$.
$s=\\sqrt{\\frac{1}{16-1}*\\left(2708-16*13^2\\right)}=\\frac{2}{\\sqrt{15}}=\\approx0,52$

Používáme T-Table.
$\\delta=T_{\\frac{1-0,95}{2}}^{16-1}*\\frac{s}{\\sqrt{16}}=T_{0,025}^{15}*\\frac{0,52}{4}=2,131*0,13=0,27703$

Výsledný intervalový odhad: $\\left(13-0,27703; 13+0,27703\\right)$
<hr>
b)
Používáme CHI-Square Table.
$\\left(\\frac{(16-1)0,52^2}{\\chi_{\\frac{1-0,95}{2};(16-1)}^{2}};\\frac{(16-1)0,52^2}{\\chi_{1-\\frac{1-0,95}{2};(16-1)}^{2}}\\right) = \\left(\\frac{4,056}{27,488};\\frac{4,056}{6,262}\\right)$
`,
    tags: [ "intervalové odhady" ],
    source: ["fitwiki 28. 5. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-05-28#skupina_b5"],
  },

  {
    question: `Mějme falešnou kostku, z 60 nezávislých hodů kostkou nám padlo 12 šestek. Odhadněte pravděpodobnost šestky v jednom hodu pomocí metody maximální věrohodnosti. Podrobně odvoďte a zdůvodněte výsledek!`,
    solution: `Binomické rozdělení, $p = \\frac{1}{5}$`,
    tags: [ "maximální věrohodnost" ],
    source: [ "fitwiki 26. 1. 2015", "https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2015-01-26#příklad_4" ],
  },

  {
    question: `Buď $X$ náhodná veličina s Poissonovým rozdělením s parametrem $\\lambda$. Metodou maximální věrohodnosti určete odhad parametru $\\lambda$.`,
    solution: `-`,
    tags: [ "maximální věrohodnost" ],
    source: [ "fitwiki 5. 2. 2015", "https://fit-wiki.cz/_detail/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/050215_a_4.jpg?id=%C5%A1kola%3Ap%C5%99edm%C4%9Bty%3Abi-pst%3Apst_zkou%C5%A1ka_2015-02-05" ],
  },

  {
    question: `Nechť X a Y jsou stejně rozdělené nezávislé náhodné veličiny s geometrickým rozdělením s parametrem $p \\in (0, 1)$.

    a) Najděte rozdělení $\\min\\{X, Y\\}$. O jaké rozdělení se jedná?
    b) Spočtěte pravděpodobnost $P(X > Y)$.`,
    solution: `-`,
    tags: [ "druhy rozdělení", "rozdělení minima" ],
    source: [ "fitwiki 12. 6. 2012", "https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/bi-pst/pst_zkou%C5%A1ka_2012-06-12?s[0]=geom#př%C3%ADklad_3" ],
  },

]

// (4) Hm tak dík, na zbytek už asi nešahej, pokud nevíš, co děláš.


store.totalQuestions = store.questions.length
