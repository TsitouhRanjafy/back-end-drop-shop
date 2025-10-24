import { IComment } from "../../../domain/entities/comment.interface";
import { ILoadPostRepository, ILoadUserRepository, ISaveCommentRepository } from "../../../domain";

export default class CommentPostUsecase {
    constructor(
        private saveCommentRepository: ISaveCommentRepository,
        private loadPostRepository: ILoadPostRepository,
        private loadUserRepository: ILoadUserRepository
    ){}

    async exec(comment: Omit<IComment,"id" | "date">): Promise<IComment | null>{
        try {
            const thisPostExist = await this.loadPostRepository.getPostById(comment.id_post);
            if (!thisPostExist) return null;

            const thisUserExist = await this.loadUserRepository.getUserById(comment.id_user, false);
            if  (!thisUserExist) return null;
    
            const newComment = await this.saveCommentRepository.addComment(comment);
            return newComment;
        } catch (error) {
            return null;
        }
    }
}