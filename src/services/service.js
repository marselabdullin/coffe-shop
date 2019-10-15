export default class Service {

    constructor() {
        this.data = require('./db.json');
    }

    getCoffee() {
        return this.data.coffee;
    }

    getBestsellers() {
        return this.data.bestsellers;
    }

    getGoods() {
        return this.data.goods;
    }

    getItem(name) {
        return this.data.coffee.filter(item => item.name.replace(/ /g, '-') === name)
    }
}