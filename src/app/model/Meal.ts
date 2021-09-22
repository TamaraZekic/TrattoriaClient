import { Category } from "./Category";

export class Meal{
    id: number;
    name : string;
    category : Category | undefined;
    price : number;

    constructor(id: number, name: string, category:  Category | undefined, price: number){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
}