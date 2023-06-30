import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TheCampClient } from 'the-camp';
import { LetterDto } from './letter.dto';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  async get(letter: LetterDto): Promise<string> {
    const [id, password] = this.configService
      .get('THE_CAMP_CREDENTIAL', ':')
      .split(':');

    const theCampClient = new TheCampClient({ id, password });

    console.log('letter', letter);

    const { soldierId } = await theCampClient.registerSoldier({
      성분: letter.성분, //'예비군인/훈련병',
      군종: letter.군종, //'육군',
      이름: letter.이름, //'이현준',
      입영부대: letter.입영부대, //'육군훈련소-논산',
      관계: letter.관계, //'팬',
      생년월일: letter.생년월일, //'2001-11-17',
      입영일: letter.입영일, //'2023-03-02',
      전화번호: letter.전화번호, //'01029602307',
    });

    await theCampClient.sendLetter(soldierId, {
      제목: letter.제목,
      작성자: letter.작성자,
      내용: letter.내용 + '\n<br>작성일: ' + '2023-07-01',
    });

    return '전송 완료 감사합니다!!';
  }
}
