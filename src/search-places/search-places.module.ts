import { Module } from '@nestjs/common';
import { SearchPlacesService } from './search-places.service';
import { SearchPlacesController } from './search-places.controller';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [SearchPlacesController],
  providers: [SearchPlacesService],
})
export class SearchPlacesModule {}
