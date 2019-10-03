import { Role } from "../enum/Role";

export class User {

  id: number;
  nom: string;
  prenom: string;
  codeCommune: string;
  mail: string;
  password: string;
  adresse: string;
  telephone:string;
  message:string;

  active: boolean;

  role: string;

  constructor(){
      this.active = true;
      this.role = Role.Customer;
  }
}
