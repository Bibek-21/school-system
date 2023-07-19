"use strict";
(() => {
    module.exports = {
        createAuthor: require("./createAuthors.js"),
        readAuthor: require("./readAuthor.js"),
        updateAuthor:require("./updateAuthor.js"),
        deleteAuthor: require("./deleteAuthor.js"),
        findAuthorByBookId:require("./findAuthorByBookId.js")


    }
})();