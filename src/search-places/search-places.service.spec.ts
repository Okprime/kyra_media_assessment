import { Test, TestingModule } from '@nestjs/testing';
import { FoursquareService } from '../common/services/foursquare/foursquare';
import { SearchPlacesService } from './search-places.service';

describe('SearchPlacesService', () => {
  let service: SearchPlacesService;
  let foursquareService: FoursquareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchPlacesService,
        {
          provide: SearchPlacesService,
          useValue: {
            searchPlaces: jest.fn(),
            getPhotoUrl: jest.fn(),
          },
        },
        {
          provide: FoursquareService,
          useValue: {
            searchPlaces: jest.fn(),
            getPhotoUrl: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SearchPlacesService>(SearchPlacesService);
    foursquareService = module.get<FoursquareService>(FoursquareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('searchPlaces', () => {
    it('should return an object containing a photourl and its venue name', async () => {
      const searchPlaceDto = {
        ll: '222222, -122333',
      };
      const result1 = [
        {
          photoUrl: 'string',
          nameOfVenue: 'string',
        },
      ];

      const d = {
        results: [
          {
            fsq_id: '4adfca6df964a520777d21e3',
            categories: [],
            chains: [],
            distance: 443,
            geocodes: [],
            link: '/v3/places/4adfca6df964a520777d21e3',
            location: [],
            name: 'Symphony Center (Chicago Symphony Orchestra)',
            related_places: [],
            timezone: 'America/Chicago',
          },
          {
            fsq_id: '4ae786a5f964a52019ac21e3',
            categories: [],
            chains: [],
            distance: 435,
            geocodes: [],
            link: '/v3/places/4ae786a5f964a52019ac21e3',
            name: 'Auditorium Theatre',
            timezone: 'America/Chicago',
          },
        ],
      };

      const photoUrl = 'string';

      jest
        .spyOn(foursquareService, 'searchPlaces')
        .mockImplementation(async () => d as any);

      jest
        .spyOn(service, 'getPhotoUrl')
        .mockImplementation(async () => photoUrl);

      jest
        .spyOn(service, 'searchPlaces')
        .mockImplementation(async () => result1 as any);

      jest.enableAutomock();

      const result = await service.searchPlaces(searchPlaceDto);
      expect(result).toEqual(result1);
    });
  });
});
