export class Customer {
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    email: string;

    address: string;
    city: string;
    package1: string;
    trainer: string;
    phone: number;

    constructor(name: string, address: string, city: string, package1: string, trainer: string, phone: number) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.package1 = package1;
        this.trainer = trainer;
        this.phone = phone;

    }
}
