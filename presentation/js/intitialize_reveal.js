// More info about initialization & config:
    // - https://revealjs.com/initialization/
    // - https://revealjs.com/config/
    Reveal.initialize({
        hash: true,
    slideNumber: 'h.v',
    transition: 'fade', // none/fade/slide/convex/concave/zoom
    transitionSpeed: 'fast', // default/fast/slow
    navigationMode: 'linear',
    mathjax3: {
        mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
    loader: {load: ['[tex]/textmacros']},
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    macros: texMacros,
    packages: {'[+]': ['textmacros']}
        },
    tags: 'ams',
    packages: {'[+]': ['mathtools']},
    options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
        },
    },
    dependencies: [{
        src: 'plugin/external/external.js', condition: function () {return !!document.querySelector('[data-external]');}
    },
    ]
    ,
    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [RevealMarkdown, RevealHighlight,
    RevealNotes, RevealMath.MathJax3,
    Reveald3
    ]
});
