import { IComment } from "../../domain/entities/comment.interface";
import { ILoadCommentRepository } from "../../domain";

export default class LoadAllCommentUsecase {
    constructor(
        private loadCommentRepository: ILoadCommentRepository
    ){}

    async exec(id_post: number, is_desc?: boolean): Promise<Omit<IComment,"id_post" | "id_user">[] | null>{
        const allComment = await this.loadCommentRepository.getCommentForAPost(id_post, is_desc);
        return allComment;
    }
}