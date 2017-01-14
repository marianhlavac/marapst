// (1) Se sem nejprve přidej asi
store.contributors = [
  ["Marián Hlaváč", "marian.hlavac@fit.cvut.cz"],
]

// (2) Asi bys měl updatnout tohle, ale je mi to jedno
store.lastUpdate = "2017-01-14"

// (3) Nasyp sem co nejvíc otázek co máš, podle tvaru co je naznačenej níž,
//     úplně dolů, neprohazuj pořadí, nedělej chyby, před PR ověř správnost syntax
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
              $$f(x)=(x-1)(x-2), 0\\leq x\\leq 1$$ $$f(x)=a, 1\\leq x\\leq 2$$ $$f(x)=0, jinak$$
              a) Pro jaké a je $f$ hustotou náhodné veličiny X?
              b) Najděte $EX$
              c) Spočtěte $P(X<\\frac{4}{3})$`,
    solution: `a) $a=\\frac{1}{6}$
              b) $EX=\\frac{1}{2}$
              c) $P(X<\\frac{4}{3})=\\frac{8}{9}$`,
    steps: `To tu popisu pak`,
    source: ["fitwiki nekde", "http://top.kek"],
    tags: [ "spojité", "integrace" ],
  },
  {
    question: "asdf",
    solution: "Nice.",
    tags: [ "momentova metoda" ],
    source: ["fitwiki nekde", "http://top.kek"],
  },
]

// (4) Hm tak dík, na zbytek už asi nešahej, pokud nevíš, co děláš.


store.totalQuestions = store.questions.length
