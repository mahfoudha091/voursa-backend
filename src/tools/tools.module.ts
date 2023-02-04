import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { Tool } from './tool.entity';
import { Tag } from 'src/tags/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tool])],
  controllers: [ToolsController],
  providers: [ToolsService]
})
export class ToolsModule {}
