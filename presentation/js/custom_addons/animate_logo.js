//import { SVG } from '@svgdotjs/svg.js'

Reveal.on('slidechanged', (event) => {
    let timeline = animate_logo();
    if (event.currentSlide.classList.contains("animate-logo")) {
        //timeline.stop()
        timeline.play()
    } else {
        console.log("REVERTING")
    }
});

var original = false;

function reset_logo() {
    if (original) {
        console.log(original);
        // Clear current drawing
        original
    }
}

function animate_logo() {

    let drawing = SVG("#optia-logo")
    let timeline = new SVG.Timeline()
    if (!original) {
        original = drawing.clone();
    }
    // Start times of animations in milliseconds
    var endDotStart = 300
    var iDotStart = 1100
    var lineStart = 100
    var lineDuration = 2500
    var textStart = 200
    var letterFadeTime = 4000
    var letterDelay = 100

    animate_line(drawing, timeline)
    animate_dot_i(drawing)
    animate_dot_begin(drawing)
    animate_dot_end(drawing)
    animate_letters(drawing)

    function animate_line(drawing) {
        let path = drawing.findOne("#linePath")
        //console.log("Found a line ", path)
        let length = path.node.getTotalLength()
        //console.log(length)
        path.timeline(timeline)

        path.css({
            "stroke-dasharray": length + ' ' + length,
            "stroke-dashoffset": length,
            "stroke-linecap": "round"
        })
        let runner = path.animate(
            {
                duration: lineDuration,
                delay: lineStart,
                when: 'now',

            }
        ).ease(expoInOut).css({ "stroke-dashoffset": 0 })
    }

    function popIntoExistence(obj, delay, easing = quartOut) {
        obj.animate({ duration: 0, delay: 0, when: 'now' }).ease(jump).scale(0.01);
        return obj.animate({
            duration: 500,
            delay: delay,
            when: 'now'
        }).ease(easing).scale(100)
    }

    function animate_dot_end(drawing) {
        let path = drawing.findOne("#dotEnd")
        path.timeline(timeline)
        popIntoExistence(path, endDotStart)
    }

    function animate_dot_begin(drawing) {
        let path = drawing.findOne("#oDot")
        path.timeline(timeline)
        popIntoExistence(path, 0)
    }

    function animate_dot_i(drawing) {
        let path = drawing.findOne("#iDotPath")
        //console.log("Found the dot ", path)
        path.timeline(timeline)
        popIntoExistence(path, iDotStart, easeOutExpo)
    }

    function animate_letters(drawing) {
        let pathGroups = [
            "oBody",
            "pUnder",
            "tBody",
            "iBodyPath",
            "aUnderPath",
        ]

        let delay = 1300;
        for (let pathId of pathGroups) {
            let path = drawing.findOne("#" + pathId)
            path.timeline(timeline)
            path.opacity(0)
                //popIntoExistence(path, delay)
                .animate({ duration: letterFadeTime, delay: delay, when: "now" })
                .ease(quartOut)
                .opacity(1)
            delay += letterDelay
        }
    }

    function quartOut(pos) {
        return -(Math.pow((pos - 1), 4) - 1)
    }

    function elastic(pos) {
        if (pos == !!pos) return pos
        return Math.pow(2, -10 * pos) * Math.sin((pos - 0.075) * (2 * Math.PI) / .3) + 1
    }

    function expoInOut(pos) {
        if (pos == 0) return 0
        if (pos == 1) return 1
        if ((pos /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (pos - 1))
        return 0.5 * (-Math.pow(2, -10 * --pos) + 2)
    }

    function easeOutExpo(x) {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }
    function jump(x) {
        return 1.

    }

    return timeline;
}

