import { TypePost } from "@prisma/client"

export interface IPost {
    id: number,
    type: TypePost;
    description: string;
    id_user: number;
    create_at: Date; 
    unit_price: number | null;               
    stock: number | null;
    image_url: string | null;
}

