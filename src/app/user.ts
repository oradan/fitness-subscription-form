import { Plan } from './plan';

export class User {
    id: number = null;
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    plan:Plan=new Plan()
}
