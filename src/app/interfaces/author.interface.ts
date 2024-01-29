import { Quote } from "./quote.interface";
import { Socials } from "./socials.interface";

export interface Author {
    _id: string;
    name: string;
    bio: string;
    email: string;
    socials: Socials[];
    quote: Quote;
    photoUrl: string;
}