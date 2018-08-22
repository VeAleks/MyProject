import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  modals:any[] = [
    {
      modal: {
        title: 'Lorem ipsum dolor sit.',
        text: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, magni fuga. Repellat odit, cupiditate, optio reiciendis hic recusandae doloribus atque dolorum rerum tempora et temporibus omnis corporis id labore quis.',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, magni fuga. Repellat odit, cupiditate, optio reiciendis hic recusandae doloribus atque dolorum rerum tempora et temporibus omnis corporis id labore quis.',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, magni fuga. Repellat odit, cupiditate, optio reiciendis hic recusandae doloribus atque dolorum rerum tempora et temporibus omnis corporis id labore quis.'
        ]
      }
    }
  ]

  constructor() { }

}
