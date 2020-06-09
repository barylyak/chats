import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConversationService {
  public conversations = [
    {
      adrresedPerson: 'Alice Freeman',
      icon: '../../assets/pic/aliceFreeman.jpeg',
      dataGeneral: 'Jun 12, 2017',
      messages: [
        {
          message: ['Hi'],
          owner: 'Alice Freeman',
          icon: '../../assets/pic/aliceFreeman.jpeg',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Hi, what are you doing?'],
          owner: 'Oleh',
          icon: '',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['You are the worst!'],
          owner: 'Alice Freeman',
          icon: '../../assets/pic/aliceFreeman.jpeg',
          data: '06/06',
          time: '18:00'
        }
      ]
    },
    {
      adrresedPerson: 'Josefina',
      icon: '../../assets/pic/Josefina.jpg',
      dataGeneral: 'Feb 18, 2017',
      messages: [
        {
          message: ['Hi', 'how are you?'],
          owner: 'Josefina',
          icon: '../../assets/pic/Josefina.jpg',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Hi, what are you doing?'],
          owner: 'Oleh',
          icon: 'https://i.pinimg.com/originals/24/b2/f5/24b2f56e2592ffb68ad9eb0e21c6965b.jpg',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['We are losing money! Quick!'],
          owner: 'Josefina',
          icon: '../../assets/pic/Josefina.jpg',
          data: '06/06',
          time: '18:00'
        },
      ]
    },
    {
      adrresedPerson: 'Velazquez',
      icon: '../../assets/pic/Velazquez.jpeg',
      dataGeneral: 'Mar 18, 2017',
      messages: [
        {
          message: ['Hi', 'how are you?'],
          owner: 'Velazquez',
          icon: '../../assets/pic/Velazquez.jpeg',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Hi, what are you doing?'],
          owner: 'Oleh',
          icon: '',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Quickly come to the meeting room 1B, we have a big server issue'],
          owner: 'Velazquez',
          icon: '../../assets/pic/Velazquez.jpeg',
          data: '06/06',
          time: '18:00'
        },
      ]
    }, {
      adrresedPerson: 'Barrera',
      icon: '../../assets/pic/Barrera.jpg',
      dataGeneral: 'Feb 12, 2017',
      messages: [
        {
          message: ['Hi', 'how are you?'],
          owner: 'Barrera',
          icon: '../../assets/pic/Barrera.jpg',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Hi, what are you doing?'],
          owner: 'Oleh',
          icon: '',
          data: '06/06',
          time: '18:00'
        },
        {
          message: ['Yes, i understand you! Come to me!'],
          owner: 'Barrera',
          icon: '../../assets/pic/Barrera.jpg',
          data: '06/06',
          time: '18:00'
        },
      ]
    }
  ];

  constructor() {
  }

  getAllChats(): Array<any> {
    return this.conversations.map(item => {
      return {
        adrresedPerson: item.adrresedPerson,
        icon: item.icon,
        dataGeneral: item.dataGeneral,
        message: item.messages[item.messages.length - 1].message[item.messages[item.messages.length - 1].message.length - 1]
      };
    });
  }
}
