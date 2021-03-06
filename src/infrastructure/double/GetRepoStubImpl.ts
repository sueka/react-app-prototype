import { injectable } from 'inversify'

import GetRepo, { GetRepoOutput } from '~/useCase/GetRepo'
import { asUrl } from '~/validators/stringValidators'

@injectable()
export default class GetRepoStubImpl implements GetRepo {
  public async apply(): Promise<GetRepoOutput> {
    return {
      successful: true,
      response: {
        status: 200,
        body: {
          full_name: 'anonymous/foobar',
          html_url: asUrl('https://github.com/anonymous/foobar.git'),
        },
      },
    }
  }
}
