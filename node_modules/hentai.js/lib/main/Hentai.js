class HentaiJS {
    constructor(options={}) {
        this.useragent = options.useragent || `Hentai.JS/Production/${this.version}`;

        this._snek = require("snekfetch");
    }

    /**
    * Gives some hentai (NSFW) :^)
    */
    hentai() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/hentai")
                    .set("User-Agent", this.useragent)
                    .then((r) => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(err.stack));
            }
        });
    }

    /**
    * Gives some anime :^)
    */
    anime() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/anime")
                    .set("User-Agent", this.useragent)
                    .then((r) => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(err.stack));
            }
        });
    }

    /**
    * Gives some D.VA (some NSFW) :^)
    */
    dva() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/dva")
                    .set("User-Agent", this.useragent)
                    .then((r) => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(err.stack));
            }
        });
    }

    /**
    * Gives some traps (some NSFW) :^)
    */
    trap() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/trap")
                    .set("User-Agent", this.useragent)
                    .then((r) => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(err.stack));
            }
        });
    }

    /**
    * Gives some hugs :^)
    */
    hug() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/hug")
                    .set("User-Agent", this.useragent)
                    .then((r) => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(err.stack));
            }
        });
    }

    /**
    * Get some baguettes :^) 
    */
    baguette() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/baguette")
                    .set("User-Agent", this.useragent)
                    .then((r) => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(err.stack));
            }
        });
    }

    get version() {
        return require("./package.json").version;
    }
}


module.exports = HentaiJS;