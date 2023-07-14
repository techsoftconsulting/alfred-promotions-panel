import ApiRestaurantRepository from '@modules/user/infrastructure/repositories/api-restaurant-repository';
import ApiPromotionRepository from '@modules/user/infrastructure/repositories/api-promotion-repository';
import ApiRestaurantMallRepository from '@modules/user/infrastructure/repositories/api-restaurant-mall-repository';
import ApiAccountsRepository from '@modules/user/infrastructure/repositories/api-accounts-repository';
import ApiProductRepository from '@modules/user/infrastructure/repositories/api-product-repository';

const AppDataProvider = (userTokenId?: string) => {

    const defaultProps = {
        tokenId: userTokenId
    };

    return {
        RestaurantRepository: new ApiRestaurantRepository(defaultProps),
        AccountsRepository: new ApiAccountsRepository(defaultProps),
        ProductRepository: new ApiProductRepository(defaultProps),
        PromotionRepository: new ApiPromotionRepository(defaultProps),
        RestaurantMallRepository: new ApiRestaurantMallRepository(defaultProps)
    };
};

export default AppDataProvider;
