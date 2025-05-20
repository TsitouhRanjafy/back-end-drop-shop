import { IComment } from "../../entities/comment.type";

export interface ILoadCommentRepository {
    getCommentForAPost(post_id: number): Promise<IComment[] | null>
}