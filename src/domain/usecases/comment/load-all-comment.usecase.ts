import { LoadCommentRepository } from "../../../infrastructure";
import { IComment } from "../../entities/comment.interface";

export default class LoadAllCommentUsecase {
    constructor(
        private loadCommentRepository: LoadCommentRepository
    ){}

    async exec(id_post: number, is_desc?: boolean): Promise<Omit<IComment,"id_post" | "id_user">[] | null>{
        const allComment = await this.loadCommentRepository.getCommentForAPost(id_post, is_desc);
        return allComment;
    }
}