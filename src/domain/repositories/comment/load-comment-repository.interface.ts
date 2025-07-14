import { IComment } from "../../entities/comment.interface";

export interface ILoadCommentRepository {
    getCommentForAPost(post_id: number, is_desc?: boolean): Promise<IComment[] | null>
}