import { IComment } from "../../entities/comment.interface";

export interface ILoadCommentRepository {
    getCommentForAPost(post_id: number, is_desc?: boolean): Promise<Omit<IComment,"id_post" | "id_user">[] | null>
}