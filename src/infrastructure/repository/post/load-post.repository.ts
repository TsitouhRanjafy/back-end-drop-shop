import { ILoadPostRepository, IPost, IReaction } from "../../../domain";
import { DataBaseAccessError } from "../../error/repositories.error";
import prisma from "../prismaClient";

export default class LoadPostRepository implements ILoadPostRepository {
    async getPostByUserId(id_user: number): Promise<Pick<IReaction, "id_post">[] | []> {
        try {
            const posts: Pick<IReaction,"id_post">[] = await prisma.reaction.findMany({
                where: { id_user },
                select: {
                    id_post: true
                }
            });
            return posts;
        } catch (error) {
            throw new DataBaseAccessError("getPostByUserId",error);
        }
    }

    async getPostByCountryUser(userCountry: string): Promise<Omit<IPost, "type" | "create_at" | "stock">[] | null> {
        try {
            const post: Omit<IPost, "type" | "create_at" | "stock">[] | null = await prisma.post.findMany({
                where: { 
                    type: "ARTICLE",
                    user: { 
                        pays: userCountry 
                    }
                },
                omit: {
                    type: true,
                    create_at: true,
                    stock: true
                },
                include: {
                    user: {
                        select: {
                            lastname: true,
                            profile_url: true
                        }
                    }
                }
            })
            return post;
        } catch (error) {
            throw new DataBaseAccessError("getPostByCountryUser",error);
        }
    }

    async getPostById(postId: number): Promise<IPost | null> {
        try {
            const post: IPost | null = await prisma.post.findUnique({where: {id: postId }})
            return post;
        } catch (error) {
            throw new DataBaseAccessError("getPostById",error);
        }
    }

    async getAllPost(skip: number,take: number): Promise<IPost[] | null> {
        try {
            const posts: IPost[] | null = await prisma.post.findMany({ 
                skip,
                take, 
                include: {
                    _count: {
                        select: {
                            comment: true,
                            reaction: true
                        }
                    },
                    user: {
                        select: {
                            firstname: true,
                            lastname: true,
                            region: true,
                            pays: true,
                            profile_url: true
                        }
                    }
                },
            });
            return posts;
        } catch (error) {
            throw new DataBaseAccessError("LoadPostRepository",error);
        }
    }
}