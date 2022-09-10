import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  jest.setTimeout(30000);

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to Kyra Media Server API');
  });

  describe('searchPlaces', () => {
    it('Returns an array containing photourl and the name of the venue', async () => {
      const response = await request(app.getHttpServer()).get(
        '/search-places?ll=41.8781,-87.6298',
      );

      expect(response.status).toEqual(200);
    });
  });
});
