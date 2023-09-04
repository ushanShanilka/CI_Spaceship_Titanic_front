export class ApprovalDialogConfig {
  message = '';
  image:boolean;

  constructor(message: string, image: boolean) {
    this.message = message;
    this.image = image;
  }
}
