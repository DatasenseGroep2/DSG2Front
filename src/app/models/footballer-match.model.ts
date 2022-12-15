export class FootballerMatch {
    footballerId: number;
    matchId: number;
    redCard: boolean;
    yellowCards: number;
    dateOfMatch: Date;
    opponent: string;
    opponentScore: number;
    score: number


    constructor( footballerId: number, matchId: number, redCard: boolean, yellowCards: number,
        dateOfMatch:Date, opponent: string, opponentScore:number, score:number){
        this.footballerId = footballerId,
        this.matchId = matchId,
        this.redCard = redCard,
        this.yellowCards = yellowCards;
        this.dateOfMatch = dateOfMatch;
        this.opponent = opponent;
        this.opponentScore = opponentScore;
        this.score = score;
    }
}
