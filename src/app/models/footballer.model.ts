export class Footballer {
    footballerId : number;
    firstName : string;
    lastName : string;
    gender : string;
    team : string;
    position : string;
    playerStatus : number;
    dateOfBirth : Date;
    length : number;
    dominantFoot: string

    constructor(footballerId : number, firstName : string,lastName : string,gender : string,team : string,position : string,
        playerStatus : number,dateOfBirth : Date,length : number, dominantFoot: string)
    {
        this.footballerId = footballerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.team = team;
        this.position = position;
        this.playerStatus = playerStatus;
        this.dateOfBirth = dateOfBirth;
        this.length = length; 
        this.dominantFoot = dominantFoot;
    }
}
