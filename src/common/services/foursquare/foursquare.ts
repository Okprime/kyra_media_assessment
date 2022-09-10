import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SearchPlaceDto } from '../../../search-places/dto/create-search-place.dto';

@Injectable()
export class FoursquareService {
  async searchPlaces(longitudeAndLatitude: SearchPlaceDto) {
    const { ll } = longitudeAndLatitude;
    try {
      const { data } = await axios.get(`${process.env.SEARCH_URL}${ll}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `${process.env.API_KEY}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPhotoUrl(photoId: string) {
    try {
      const { data } = await axios.get(
        `${process.env.GET_PHOTO_URL}/${photoId}/photos`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `${process.env.API_KEY}`,
          },
        },
      );

      // ensured to handled that data returned from getPhotoUrl is not empty
      if (data.length > 0) {
        // get the full url of the photo
        const photoUrl = `${data[0].prefix}original${data[0].suffix}`;
        return photoUrl;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
