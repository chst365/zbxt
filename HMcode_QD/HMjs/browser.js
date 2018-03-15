/*

#    Copyright 2014, Viktor Wahlberg.
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

// Main browser.js Object...

var browserJS = new Object;

// browser.js userAgent array for quick and accurate lookup, if userAgent is added...

browserJS.userAgentStringArray = {
    /*
    
    All userAgent strings listed below are incomplete. The object has been
    constructed this way so that multiple versions of the same browser can
    be detected using the same string. These dynamic values of the
    userAgent string are replaced with a underscore followed by a name in
    all caps and ended with another underscore. Each of these variables
    are handled in the init function.
    
    */
    "Mozilla/5.0 (_OS_) Gecko/_GECKO_ Firefox/_VERSION_": {
        "name": "Forefox",
        "userAgentLayout": "os,gecko,version"
    },
    "Mozilla/5.0 (_OS_) AppleWebKit/_WEBKIT_BUILD_ (KHTML, like Gecko) Chrome/_CHROME_VERSION_ Safari/_SAFARI_ OPR/_VERSION_": {
        "name": "Opera",
        "userAgentLayout": "os,webkit_build,chrome_version,safari,version"
    },
    "Mozilla/5.0 (_OS_) AppleWebKit/_WEBKIT_BUILD_ (KHTML, like Gecko) Chrome/_CHROME_VERSION_ Maxthon/_VERSION_ Safari/_SAFARI_": {
        "name": "Maxthon",
        "userAgentLayout": "os,webkit_build,chrome_version,version,safari"
    },
    // Google Chrome 0 to CURRENT
    "Mozilla/5.0 (_OS_) AppleWebKit/_WEBKIT_BUILD_ (KHTML, like Gecko) Chrome/_VERSION_ Safari/_SAFARI_": {
        "name": "Google Chrome",
        "userAgentLayout": "os,webkit_build,version,safari"
    }
};

// Premade object containing all variables of the browser object, when checking browserJS.browser structure and creating browserJS.browser failed state...

browserJS.failedObject = {
    "name": "Unknown",
    "logicalName": "unknown",
    "version": "0",
    "os": "Unknown",
    "logicalOs": "unknown"
};




// Get object size, used in for loops...

browserJS.getObjectSize = function (obj) {
    var size = 0, key;
    for (key in obj)
    {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}



// Declare current userAgent and create browserJS.browser object...

browserJS.UA = navigator.userAgent;
browserJS.browser = browserJS.failedObject;


// Init function, makes calls for other functions and add values to browserJS.browser Object...

browserJS.init = function () {
    // Try to figure out what browser, version, webkit build and os the user is running...
    
    for(var i = 0;browserJS.userAgentStringArray[Object.getOwnPropertyNames(browserJS.userAgentStringArray)[i]];i++)
    {
        // Make a new variable with the value of the test userAgent string...
        var UAUsed = Object.getOwnPropertyNames(browserJS.userAgentStringArray)[i];
        // Make a new variable with the value of the real userAgent string...
        var UAReal = browserJS.UA;
        var skippedVariablesCount = 0;
        
        var userAgentSpecificVariableLayout = browserJS.userAgentStringArray[Object.getOwnPropertyNames(browserJS.userAgentStringArray)[i]]["userAgentLayout"].split(",");
        for(var j = 0;userAgentSpecificVariableLayout[j];j++)
        {
            // Check if UAUsed is string...
            if(typeof UAUsed == "string")
            {
                // Split the string on each userAgent variable and use the first part to split the real userAgent...
                // This will allow us to check the static parts of the userAgent only, so that dynamic variables (such as version numbers) don't matter when checking what browser...
                UAUsed = UAUsed.split("_" + userAgentSpecificVariableLayout[j].toUpperCase() + "_");
                if(typeof(UAUsed != "string"))
                {
                    UAReal = UAReal.split(UAUsed[0]);
                    if(typeof UAReal == "string")
                    {
                        UAReal = browserJS.UA;
                        break;
                    }
                }
                else
                {
                    skippedVariablesCount++;
                    continue;
                }
            }
            else
            {
                // When the UAUsed have been split you cannot use the same method, basically does the same thing as above with a different method...
                UAUsed = UAUsed[UAUsed.length-1];
                UAUsed = UAUsed.split("_" + userAgentSpecificVariableLayout[j].toUpperCase() + "_");
                if(typeof UAUsed != "string" && UAUsed.length == 2)
                {
                    var UARealSplit = UAReal[j-skippedVariablesCount].split(UAUsed[0]);
                    if(UARealSplit.length == 2)
                    {
                        var push_value1 = UARealSplit[0];
                        var push_value2 = UARealSplit[1];
                        UAReal[j-skippedVariablesCount] = push_value1;
                        UAReal.push(push_value2);
                    }
                    else
                    {
                        UAReal = browserJS.UA;
                        break;
                    }
                }
                else
                {
                    skippedVariablesCount++;
                    continue;
                }
            }
        }
        if(UAReal != browserJS.UA)
        {
            browserJS.browser = browserJS.userAgentStringArray[Object.getOwnPropertyNames(browserJS.userAgentStringArray)[i]];
            var userAgentString = browserJS.browser["userAgentLayout"].split(",");
            var UA = Object.getOwnPropertyNames(browserJS.userAgentStringArray)[i];
            for(var k = 0;userAgentString[k];k++)
            {
                console.log(UAReal)
                console.log(userAgentString["userAgentLayout"])
                browserJS.browser[userAgentString[k]] = UAReal[k+1];
            }
            break;
        }
    }
}

// Run the browser.js initiation function. This function will run when the script has been loaded, not when the page is loaded. You might want to change this...

browserJS.init();