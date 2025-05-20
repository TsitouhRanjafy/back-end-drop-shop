import { IComment } from "../../entities/comment.type";

export interface ISaveCommentRepository {
    addComment(comment: Omit<IComment,"id" | "date">): Promise<IComment | null>;
}