/**
 * Add content to an DOM element
 * @param {string} content The content that will be inserted
 * @param {string} element The element that the content will be inserted to. Use '#' for an id, and use ',' for an element.
 */
function addElementToDOM(content, element) {
    const $element = document.querySelector(element);
    $element.innerHTML = content;
}


/**
 * Add eventlistener to DOM element
 * @param {string} onElement The DOM element to add an eventlistener. Use '#' for an id, and use ',' for an element.
 * @param {string} onEvent The event that triggers the callback
 * @param {Function} callback The action to execute when the event is triggered
 */
function addEventlistenerToElement(onElement, onEvent, callback) {
    const $element = document.querySelector(onElement);
    $element.addEventListener(onEvent, callback)
}


/**
 * Add eventlistener to DOM elements with the same id/class
 * @param {string} onClass The DOM class to add an eventlistener. Use '#' for an id, and use ',' for an element.
 * @param {string} onEvent The event that triggers the callback
 * @param {Function} callback The action to execute when the event is triggered
 */
function addEventlistenerToElements(onClass, onEvent, callback) {
    const $elements = document.querySelectorAll(onClass);
    $elements.forEach((elem) => {
        elem.addEventListener(onEvent, callback)
    })
}


/**
 * Toggle class in the DOM element classlist
 * @param {string} onElement The DOM element where the class need to be toggled
 * @param {string} className The class to toggle
 */
function toggleClassToClasslistOfElement(onElement, className) {
    const $element = document.querySelector(onElement);
    $element.classList.toggle(className)
}


/**
 * Toggle class in the DOM element classlist
 * @param {string} onElement The DOM class name where the new class needs to be toggled
 * @param {string} className The class to toggle
 */
function toggleClassToClasslistOfElements(onElements, className) {
    const $elements = document.querySelectorAll(onElements);
    $elements.forEach((elem) => {
        elem.classList.toggle(className)
    })
}


/**
 * The function give back the path to go back to the root of the folder. Use example: src="${backToRoot()}static/img/img01.jpg"
 * @returns E.g. './../../'
 */
function backToRoot() {
    const path = location.pathname
    let pathSlashes = 0
    for (let i = 0; i < path.length; i++) {
        if (path[i] === '/') { pathSlashes++ }
    }

    let number2 = 0
    let pathToRoot = ''
    for (let i = 1; i < path.length; i++) {
        if (path[i] === '/' && i != pathSlashes - 1) {
            switch (number2) {
                case 0: pathToRoot += './'; number2++; break;
                default: pathToRoot += '../'; break;
            }
        }
    }
    return pathToRoot
}


/**
 * Gives an random number back.
 * @param {number} limit Max number to return
 * @returns {number} Random number between 0 and 1 or the limit if provided
 */
function randomNumber(limit) {
    return (limit ? Math.floor(Math.random() * limit) : Math.random())
}


/**
 * Returnes the first 2 letters of a Dayname in uppercase.
 * @param {string} dayname 
 * @returns E.g. 'SA'
 */
function fullDaynameToShortForm(dayname) {
    return (dayname[0] + dayname[1]).toUpperCase()
}


/**
 * 
 * @param {string} param The param to get back from the URL 
 * @returns Search param from URL
 */
function getSearchParamsFromURL(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param)
}

/**
 * Convert a string to lowercase and snake case. E.g. 'Hello World' => 'hello_world'
 * @param {string} string The string to convert to lowercase and snake case
 * @returns An string in lowercase and snake case
 */
function stringToLowercaseSnakeCase(string) {
    return string.replace(/\W+/g, " ").toLowerCase().split(" ").join("_")
}


/**
 * Check if an DOM element exists
 * @param {string} elem The DOM element to check
 * @returns True if the element exists, false if not
 */
function checkDOMElementExistence(elem) {
    if (document.querySelector(elem)) {
        return true
    } else {
        return false
    }
}


/**
 * The function checks if the current page URL matches the specified page name and returns 'active' if
 * it does, otherwise it returns an empty string.
 * @param page - The `page` parameter is a string representing the name of the page you want to check.
 * @returns either 'active' if the current page URL matches the provided page name with the '.html'
 * extension, or an empty string if they do not match.
 */
function checkPageURL(page) {
    const fileName = location.pathname.split("/").slice(-1)[0]
    if (fileName === (page + '.html')) {
        return 'active'
    } else return ''
}


/**
 * The function checks if the value of the 'day' parameter in the URL matches the provided day, and
 * returns 'active' if it does, otherwise it returns an empty string.
 * @param day - The `day` parameter is a string that represents a specific day.
 * @returns either the string 'active' if the value of the 'day' parameter in the URL matches the
 * provided 'day' argument, or an empty string if they do not match.
 */
function checkDayFromURL(day) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('day') === day) {
        return 'active'
    } else return ''
}




export {
    addElementToDOM,
    backToRoot,
    randomNumber,
    addEventlistenerToElement,
    addEventlistenerToElements,
    toggleClassToClasslistOfElement,
    toggleClassToClasslistOfElements,
    fullDaynameToShortForm,
    getSearchParamsFromURL,
    stringToLowercaseSnakeCase,
    checkDOMElementExistence,
    checkPageURL,
    checkDayFromURL,
}