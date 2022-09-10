import { Injectable } from '@nestjs/common';
import { FoursquareService } from '../common/services/foursquare/foursquare';
import { SearchPlaceDto } from './dto/create-search-place.dto';

@Injectable()
export class SearchPlacesService {
  constructor(private foursquareService: FoursquareService) {}

  async searchPlaces(searchPlaceDto: SearchPlaceDto) {
    const places = await this.foursquareService.searchPlaces(searchPlaceDto);
    const arraysOfPhotosAndVenues = [];

    for (const photo of places.results) {
      const photoUrl = await this.getPhotoUrl(photo.fsq_id);

      // return the final object containing the photourl and the name of the venue
      const finalObj = {
        photoUrl,
        nameOfVenue: photo.name,
      };
      arraysOfPhotosAndVenues.push(finalObj);
    }
    return arraysOfPhotosAndVenues;
  }

  async getPhotoUrl(photoId: string) {
    return this.foursquareService.getPhotoUrl(photoId);
  }
}
