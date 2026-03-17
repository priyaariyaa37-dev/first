const config = (function () {

    let appName = "MyApp";
    let version = "1.0";
    let debug = true;

    return {
        appName: appName,
        version: version,
        debug: debug
    };

})();

console.log(config.appName);  // MyApp
console.log(config.version);  // 1.0
console.log(config.debug);    // true
