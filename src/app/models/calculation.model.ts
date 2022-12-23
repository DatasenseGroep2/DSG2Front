export class Calculation {
  footballerId: number;
  voTwoMax: number;
  masHundredProcent: number;
  totalDistance: number;
  singleDistance: number;

  constructor(
    footballerId: number,
    voTwoMax: number,
    masHundredProcent: number,
    totalDistance: number,
    singleDistance: number
  ) {
    this.footballerId = footballerId;
    this.voTwoMax = voTwoMax;
    this.masHundredProcent = masHundredProcent;
    this.totalDistance = totalDistance;
    this.singleDistance = singleDistance;
  }
}
