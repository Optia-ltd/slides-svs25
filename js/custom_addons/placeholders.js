// =================
// CUSTOM TEMPLATING 
// =================

console.log("Doing replacements.")
const placeholder_map = {}; // Fields are placeholder ids, values are functions that take an element with that id and return nothing.

async function fetch_metadata() {
    try {
        const response = await fetch('metadata.json');
        if (!response.ok) {
            console.error('Could not find metadata');
            return {};
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching metadata:", error);
    }
    return {};
}


function create_direct_replacer(replacement) {
    return (element) => element.innerHTML = replacement;
}

// CURRENT DATE PLACEHOLDER
// ------------------------

function format_today() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
}

// DEFINE DEFAULT PLACEHOLDERS 
placeholder_map.date = (element) => { element.innerHTML = format_today(); }

// ............................................................................
// ............................................................................
// ............................................................................

// Apply all the placeholders
async function replace_placeholders(placeholders) {
    const metadata = await fetch_metadata();
    Object.entries(metadata).forEach(([id, replacement]) => placeholders[id] = (e) => { e.innerHTML = replacement; })

    for (const [replacement_id, replacer] of Object.entries(placeholders)) {
        const elements = document.querySelectorAll(`#${replacement_id}`);
        if (elements.length == 0) { console.log(`No element with requested key ${replacement_id}`) }
        elements.forEach((element) => replacer(element));
    }
}


Reveal.on('ready', (event) => {
    replace_placeholders(placeholder_map)
    // event.currentSlide, event.indexh, event.indexv
});
//document.addEventListener("DOMContentLoaded", () => replace_placeholders(placeholder_map));

