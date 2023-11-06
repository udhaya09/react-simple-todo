export class TodoModel {
  id: number;
  description: string;
  assigned: string;

  constructor(rowNumber: number, rowDescription: string, rowAssigned: string) {
    this.id = rowNumber;
    this.description = rowDescription;
    this.assigned = rowAssigned;
}

}
