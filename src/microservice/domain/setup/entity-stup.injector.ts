// import { User, UsersSchema } from '../schemas/users.schema';
import { DependencyEntityTokens } from 'src/microservice/application/app.constants';
import { ModelEntityTokens } from '@devseeder/nestjs-microservices-commons';
import { Country, CountrySchema } from '../schemas/countries.schema';
import { State, StateSchema } from '../schemas/states.schema';
import { City, CitySchema } from '../schemas/cities.schema';

export const EntitySetupConfig: ModelEntityTokens = {
  countries: {
    modelName: Country.name,
    schema: CountrySchema,
    collection: DependencyEntityTokens.COUNTRIES
  },
  states: {
    modelName: State.name,
    schema: StateSchema,
    collection: DependencyEntityTokens.STATES
  },
  cities: {
    modelName: City.name,
    schema: CitySchema,
    collection: DependencyEntityTokens.CITIES
  }
  // users: {
  //   modelName: User.name,
  //   schema: UsersSchema,
  //   collection: DependencyEntityTokens.USER,
  //   customProvider: {
  //     create: {
  //       className: CreateUserService,
  //       injectArgs: [ClientAuthService.name]
  //     }
  //   }
  // }
};
