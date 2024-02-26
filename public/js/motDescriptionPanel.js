(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MotDeDescriptionPanel = /** @class */ (function () {
        function MotDeDescriptionPanel(datePartie, panelManager, gestionnaire) {
            var _this = this;
            this._datePartie = new Date(datePartie);
            this._panelManager = panelManager;
            this._gestionnaire = gestionnaire;
            this._motDescButton = document.getElementById("mot-description-button");
            console.log("Button Mot", this._motDescButton);
            this._motDescButton
                .addEventListener("click", (function () {
                _this.afficher();
            }).bind(this));
        }
        MotDeDescriptionPanel.prototype.afficher = function () {
            alert("Show Description");
        };
        return MotDeDescriptionPanel;
    }());
    exports.default = MotDeDescriptionPanel;
});
