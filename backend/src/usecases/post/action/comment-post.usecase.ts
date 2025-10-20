import { IComment } from "../../../domain/entities/comment.interface";
import { ISaveCommentRepository } from "../../../domain";

export default class CommentPostUsecase {
    constructor(
        private saveCommentRepository: ISaveCommentRepository
    ){}

    async exec(comment: Omit<IComment,"id" | "date">): Promise<IComment | null>{
        const newComment = await this.saveCommentRepository.addComment(comment);
        return newComment;
    }
}