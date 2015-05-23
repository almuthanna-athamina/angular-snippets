exports.config = {

    seleniumAddress:'http://127.0.0.1:4444/wd/hub',
    specs:[
        './e2e/**/*.js'
    ],
    baseUrl:'http://CHANGE-HOST:CHANGE-PORT/CHANGE-FILENAME.html'
};
