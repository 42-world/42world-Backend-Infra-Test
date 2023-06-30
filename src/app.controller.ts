import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LetterDto } from './letter.dto';

@ApiTags('Comment')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(
    @Query('성분') 성분: LetterDto['성분'],
    @Query('군종') 군종: LetterDto['군종'],
    @Query('이름') 이름: LetterDto['이름'],
    @Query('입영부대') 입영부대: LetterDto['입영부대'],
    @Query('관계') 관계: LetterDto['관계'],
    @Query('생년월일') 생년월일: LetterDto['생년월일'],
    @Query('입영일') 입영일: LetterDto['입영일'],
    @Query('전화번호') 전화번호: LetterDto['전화번호'],
    @Query('제목') 제목: LetterDto['제목'],
    @Query('작성자') 작성자: LetterDto['작성자'],
    @Query('내용') 내용: LetterDto['내용'],
  ): Promise<string> {
    try {
      const body = {
        성분,
        군종,
        이름,
        입영부대,
        관계,
        생년월일,
        입영일,
        전화번호,
        제목,
        작성자,
        내용,
      };
      console.log('body', body);

      return await this.appService.get(body);
    } catch (e: any) {
      console.log('error: ', e);

      return `에러가 발생했습니다. ${e.message}`;
    }
  }
}
