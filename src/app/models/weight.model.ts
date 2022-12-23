export class Weight {
  weightId: number;
  footballerId: number;
  weight: number;
  dateOfWeight: Date;

  constructor(
    weightId: number,
    footballerId: number,
    weight: number,
    dateOfWeight: Date
  ) {
    this.weightId = weightId;
    this.footballerId = footballerId;
    this.weight = weight;
    this.dateOfWeight = dateOfWeight;
  }
}
