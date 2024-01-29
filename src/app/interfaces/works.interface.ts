import { Affiliates } from "./affiliates.interface";
import { BookDetails } from "./book-details.interface";

export interface Works {
    _id: string;
    title: string;
    subtitle: string;
    releaseDate: Date;
    details: BookDetails;
    affiliateLinks: Affiliates[];
    photoUrl: string;
}