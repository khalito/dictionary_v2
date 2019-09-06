const { addNewWord, findWord } = require('./dictControllers');

const getTimestamp = require('./timestamp');

const routes = (app) => {
    app.use((req, res, next) => {
        console.log(`${req.method} request made on ${req.originalUrl} at ${getTimestamp()}`);
    next();
    });

    app.route('/')
    .get((req, res, next) => {
        res.render('index');
    });

    app.route('/searchResult')
    .get((req, res, next) => {
        findWord(req, res);
    //     next();
    // }, (req, res, next) => { // diesen Kram mit einer Methode aus dem Controller ersetzen !
        // let word = 'this is a test word';
        // let type = 'this is a test type';
        // let translation = 'this is a test translation';
        // let id = 'this is a test id';
        // res.render('searchResult', {
        //     'q' : req.query.q,
        //     'word' : word,
        //     'type' : type,
        //     'translation' : translation,
        //     '_id' : id
        // });
    });

    app.route('/newWord')
    .post((req, res, next) => {
        addNewWord(req, res);
    });
};

module.exports = routes;
