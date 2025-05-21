import { IComment } from "../../entities/comment.interface";

export interface ISaveCommentRepository {
    addComment(comment: Omit<IComment,"id" | "date">): Promise<IComment | null>;
}