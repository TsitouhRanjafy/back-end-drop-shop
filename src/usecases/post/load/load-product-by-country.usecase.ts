import { LoadPostRepository, TransformService } from "../../../infrastructure";
import { IPost } from "../../../domain/entities/post.interface";

export default class LoadProductByCountryUsecase {
    constructor(
        private loadPostRepository: LoadPostRepository,
        private transformService: TransformService
    ){}

    async exec(userCountry: string){
        const countryCapitalized = this.transformService.capitalize(userCountry);
        const localProduct: Omit<IPost, "type" | "create_at" | "stock">[] | null = await this.loadPostRepository.getPostByCountryUser(countryCapitalized);
        return localProduct;
    }
}