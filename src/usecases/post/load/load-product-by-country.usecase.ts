import { LoadPostRepository, FormaterService } from "../../../infrastructure";
import { IPost } from "../../../domain/entities/post.interface";

export default class LoadProductByCountryUsecase {
    constructor(
        private loadPostRepository: LoadPostRepository,
        private formaterService: FormaterService
    ){}

    async exec(userCountry: string){
        const countryCapitalized = this.formaterService.capitalize(userCountry);
        const localProduct: Omit<IPost, "type" | "create_at" | "stock">[] | null = await this.loadPostRepository.getPostByCountryUser(countryCapitalized);
        return localProduct;
    }
}