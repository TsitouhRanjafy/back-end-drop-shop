import { SaveCommentRepository } from "../../../../infrastructure";
import { IComment } from "../../../domain/entities/comment.interface";

export default class CommentPostUsecase {
    constructor(
        private saveCommentRepository: SaveCommentRepository
    ){}

    async exec(comment: Omit<IComment,"id" | "date">): Promise<IComment | null>{
        const newComment = await this.saveCommentRepository.addComment(comment);
        return newComment;
    }
}