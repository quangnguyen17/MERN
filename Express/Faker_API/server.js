// importing Express & Faker
const express = require("express");
const faker = require("faker");

const app = express();

class User {
    constructor() {
        this.__id = 0;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.firstName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Address {
    constructor() {
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

class Company {
    constructor() {
        this.__id = 0;
        this.name = faker.company.companyName();
        this.address = new Address();
    }
}

app.get("/api/users/new", (req, res) => {
    const user = new User();
    return res.json(user);
});

app.get("/api/companies/new", (req, res) => {
    const company = new Company();
    return res.json(company);
});

app.get("/api/user/company", (req, res) => {
    const company = new Company();
    const user = new User();
    return res.json({ user: user, company: company });
});

const server = app.listen(69, () => {
    console.log(`API is running on port: ${69}`);
});