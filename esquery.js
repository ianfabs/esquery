/*
*Hi, I'm @ianfabs, the author of ESQuery
*This is my library, it helps me program things for the web
*
*These are shortcut functions, please don't yell and scream
*because the names of my shortcut functions aren't "meaningful"
*or, easily understandable. I'll tell you right now, what the mean
*
*PAY ATTENTION
*
*
*
*/

const d = window.document;
const qs = d.querySelector.bind(d);
const qsa = d.querySelectorAll.bind(d);
const f = window.fetch;
const newTab = uri=>window.open(uri, "_target");
const redirect = uri=>window.open(uri, "_self");