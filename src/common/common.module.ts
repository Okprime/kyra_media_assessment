import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FoursquareService } from './services/foursquare/foursquare';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [FoursquareService],
  exports: [FoursquareService],
})
export class CommonModule {}
