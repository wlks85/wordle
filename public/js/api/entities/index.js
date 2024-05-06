(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mongoose"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WordModel = void 0;
    var mongoose_1 = require("mongoose");
    // Define the Mongoose schema
    var wordSchema = new mongoose_1.Schema({
        word: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            default: "",
        },
        synonyms: {
            type: [String],
            default: [],
        },
        antonyms: {
            type: [String],
            default: [],
        },
        image: { type: String, default: "" },
    }, {
        timestamps: true,
        autoCreate: true,
        strict: true,
    });
    // Create the Word model
    exports.WordModel = (0, mongoose_1.model)('words', wordSchema);
});
