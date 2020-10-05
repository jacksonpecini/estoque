class Controller {

    constructor() {
        this.get = this.get.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async get(req, res) {
        return res.send("get data");
    }

    async insert(req, res) {
        return res.send("insert data");
    }

    async update(req, res) {
        return res.send("update data");
    }

    async delete(req, res) {
        return res.send("delete data");
    }

}

module.exports = Controller