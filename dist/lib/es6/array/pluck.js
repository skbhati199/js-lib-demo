export var Pluck = function (elements, field) {
    return elements.map(function (element) { return element[field]; });
};
