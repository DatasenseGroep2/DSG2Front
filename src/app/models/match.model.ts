export class Match {
  matchId: number;
  dateOfMatch: Date;
  opponent: string;
  opponentScore: number;
  score: number;

  constructor(
    matchId: number,
    dateOfMatch: Date,
    opponent: string,
    opponentScore: number,
    score: number
  ) {
    this.matchId = matchId;
    this.dateOfMatch = dateOfMatch;
    this.opponent = opponent;
    this.opponentScore = opponentScore;
    this.score = score;
  }
}
