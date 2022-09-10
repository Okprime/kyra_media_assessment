import { Controller, Get, Query } from '@nestjs/common';
import { SearchPlacesService } from './search-places.service';
import {
  ArraysOfPhotosAndVenues,
  SearchPlaceDto,
} from './dto/create-search-place.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('search-places')
@Controller('search-places')
export class SearchPlacesController {
  constructor(private readonly searchPlacesService: SearchPlacesService) {}

  @ApiOkResponse({
    description:
      'Return an array containing photourl and the name of the venue',
    type: [ArraysOfPhotosAndVenues],
  })
  @Get()
  searchPlaces(@Query() searchPlaceDto: SearchPlaceDto) {
    return this.searchPlacesService.searchPlaces(searchPlaceDto);
  }
}
