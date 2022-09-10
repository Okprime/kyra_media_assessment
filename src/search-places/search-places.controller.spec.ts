import { Test, TestingModule } from '@nestjs/testing';
import { SearchPlacesController } from './search-places.controller';
import { SearchPlacesService } from './search-places.service';

describe('SearchPlacesController', () => {
  let controller: SearchPlacesController;
  let service: SearchPlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchPlacesController],
      providers: [
        SearchPlacesService,
        {
          provide: SearchPlacesService,
          useValue: {
            searchPlaces: jest.fn(),
            getPhotoUrl: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SearchPlacesController>(SearchPlacesController);
    service = module.get<SearchPlacesService>(SearchPlacesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('searchPlaces', () => {
    it('should return an object containing a photourl and its venue name', async () => {
      const searchPlaceDto = {
        ll: '222222, -122333',
      };
      const result = [
        {
          photoUrl: 'string',
          nameOfVenue: 'string',
        },
      ];

      jest
        .spyOn(service, 'searchPlaces')
        .mockImplementation(async () => result as any);

      jest.enableAutomock();

      const response = await controller.searchPlaces(searchPlaceDto);
      expect(response).toEqual(result);
    });
  });
});
