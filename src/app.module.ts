import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [
    CatalogModule,
    TypeOrmModule.forRoot({
      /* 
      ================
      === POSTGRES ===
      ================ 
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5432, // database host
      username: 'postgres', // username
      password: 'pass123', // user password
      database: 'postgres', // name of our database, 
      */
     // mysql://b5aaab334b3cc9:6c3803c5@us-cdbr-east-03.cleardb.com/heroku_86bafe97a000739?reconnect=true
      type: 'mysql',
      host: 'us-cdbr-east-03.cleardb.com',
      port: 3306,
      username: 'b5aaab334b3cc9',
      password: '6c3803c5',
      database: 'heroku_86bafe97a000739',
      autoLoadEntities: true, // models will be loaded automatically (you don't have to explicitly specify the entities: [] array)
      synchronize: true, // your entities will be synced with the database (ORM will map entity definitions to corresponding SQL tabled), every time you run the application (recommended: disable in the production)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
