import { IComment } from "../../entities/comment.interface";

export interface ILoadCommentRepository {
    getCommentForAPost(post_id: number): Promise<IComment[] | null>
}