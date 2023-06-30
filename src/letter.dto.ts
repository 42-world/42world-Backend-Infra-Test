import { ApiProperty } from '@nestjs/swagger';
import {
  관계,
  관계CodeMap,
  군종,
  군종CodeMap,
  성분,
  성분CodeMap,
  입영부대,
  입영부대CodeMap,
} from 'the-camp';

export class LetterDto {
  @ApiProperty({ enum: Object.keys(성분CodeMap), example: '예비군인/훈련병' })
  성분: 성분;

  @ApiProperty({ enum: Object.keys(군종CodeMap), example: '육군' })
  군종: 군종;

  @ApiProperty({ example: '차영훈' })
  이름: string;

  @ApiProperty({
    enum: Object.keys(입영부대CodeMap),
    example: '육군훈련소-논산',
  })
  입영부대: 입영부대;

  @ApiProperty({ enum: Object.keys(관계CodeMap), example: '친구/지인' })
  관계: 관계;

  @ApiProperty({ example: '2000-08-29' })
  생년월일: string;

  @ApiProperty({ example: '2023-07-20' })
  입영일: string;

  @ApiProperty({ example: '01046927506' })
  전화번호: string;

  @ApiProperty({ example: '안녕하세요' })
  제목: string;

  @ApiProperty({ example: '차영훈' })
  작성자: string;

  @ApiProperty({ example: '반갑습니다.' })
  내용: string;
}
