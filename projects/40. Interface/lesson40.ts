interface IPerson {
    readonly firstName: string;
    lastName?: string;
    address: string
}

type Person = {
    firstName: string;
    lastName: string
}

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName} ${person.address}`;
}

let person = {
    firstName: 'Dev',
    lastName: 'L',
    address: 'Ha Noi'
};

console.log(getFullName(person)); // Dev L Ha Noi