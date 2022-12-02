export class Footballer {
    id: string;
    firstName: string;
    lastName: string
    height: number;
    weight: number;
    team: string;
    dominantLeg: string;
    position: string;
    birthdate: Date;
    gender: boolean;
    age: number;

    constructor(id: string, firstName: string, lastName: string, height: number, weight: number,
        team: string, dominantLeg: string, position: string, birthdate: Date,
        gender: boolean, age: number){
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.height = height;
            this.weight = weight;
            this.team = team;
            this.dominantLeg = dominantLeg;
            this.position = position;
            this.birthdate = birthdate;
            this.gender = gender;
            this.age = age;
        }
}
