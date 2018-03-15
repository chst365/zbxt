window.addEventListener("load", function () {
    for(var i = 0;Object.getOwnPropertyNames(browserJS.browser)[i];i++)
    {
        var prop = Object.getOwnPropertyNames(browserJS.browser)[i];
        document.body.innerHTML += "<b>" + prop + "</b>: " + "<i>" + browserJS.browser[prop] + "</i><br>";
    }
    document.body.innerHTML += "<br><br>" + navigator.userAgent;
});