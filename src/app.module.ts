import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchPlacesModule } from './search-places/search-places.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SearchPlacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
