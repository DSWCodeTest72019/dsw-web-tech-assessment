import { Color } from "./color";

export interface Product {
    id: number;
    brand: string;
    name: string;
    price: number;
    compValue: number | null;
    rating: number | null;
    activeColor: number;
    colors: Color[]
}