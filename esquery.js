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

/*
shorthand for the document global

@var const `d`
@returns window.document
*/
const d = window.document;
/*
shorthand for the querySelector function of the document object

@var const `qs`
@returns HTMLDom

@annotation ~ the `.bind` at the end of querySelector binds the context
of the function execution to the document object. Without this, calling
`qs(selector)` would return an Illegal Invocation, because the invocation context
of the call would be to the `window` object, as the `window` object is the default context
to all native function calls. Exempli gratia: window.sessionStorage can be used as just 
`sessionStorage` etc.
@sidebar ~ This is actually important, you know how you can chain querySelector?
like :
```html
<article>
    <section>
        <h1>article header</h1>
    </section>
    <section>
        <h2>different section</h2>
        <p>
            Some text
        </p>
    </section>
</article>
```
```javascript
 var p = document.querySelector("article").children[0].querySelector("p");
```
WELL, the INITAL invocation context is document, like I wrote there. But calling it without
defaults to window object.

For a better explaination, see MDN[1]. Or just, take my word for it.
*/
const qs = d.querySelector.bind(d);
/*
* shorthand for querySelectorAll function of the document object.

@returns HTMLDom
*/
const qsa = d.querySelectorAll.bind(d);
/*
* shorthand for `window.fetch`
* 
* @param {string} URL : the url you are requesting from
* @param {JSON} : specifications for the request, e.g
* @~example :
    ````````````````````````````````````````````````````````
    {
        method: "GET",
        headers: {
            "Authorization": "Bearer fhsgkskdfgkshiojreotherigiojdsga"
        },
        body: JSONObject/FormData/URLSearchParams
    }
    ````````````````````````````````````````````````````````
* 
* @returns new Promise(<fetch request result>);
*/
const f = window.fetch;
/*
opens a new tab

@param {string} URI : the new tab URL
@returns void
*/
const newTab = uri=>window.open(uri, "_target");
/*
changes current URL location

@param {string} URI : the new location URL
@returns void
*/
const redirect = uri=>window.open(uri, "_self");

/*
    *LINKS
    *[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    *[2]:
*/