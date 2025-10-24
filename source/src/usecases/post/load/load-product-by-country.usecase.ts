import { IPost } from "../../../domain/entities/post.interface";
import { IFormaterService, ILoadPostRepository } from "../../../domain";

export default class LoadProductByCountryUsecase {
    constructor(
        private loadPostRepository: ILoadPostRepository,
        private formaterService: IFormaterService
    ){}

    async exec(userCountry: string){
        const countryCapitalized = this.formaterService.capitalize(userCountry);
        const localProduct: Omit<IPost, "type" | "create_at" | "stock">[] | null = await this.loadPostRepository.getPostByCountryUser(countryCapitalized);
        return localProduct;
    }
}