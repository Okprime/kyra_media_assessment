import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class SearchPlaceDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ll: string;
}

export class ArraysOfPhotosAndVenues {
  @Expose()
  @ApiProperty()
  photoUrl: string;

  @Expose()
  @ApiProperty()
  nameOfVenue: string;
}
