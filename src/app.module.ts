import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tags/tag.entity';
import { Tool } from './tools/tool.entity';
import { ToolsModule } from './tools/tools.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ToolsModule,
    TagsModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_db',
      entities: [Tool,Tag,User],
      // entities: [__dirname + './**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
      
    }),
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
