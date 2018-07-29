import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    data: Product[] = [];

    constructor(){ }

    loadProduct(): Observable<Product[]>{
        return timer(500)
        .pipe(
            map(() => {
                if(this.data.length === 0){
                    this.data = [
                        {title:'Chivas 12', price: '$25.000',
                        img:'http://www.tuckshop.sg/wp-content/uploads/2015/12/Chivas-12-300x300.jpg'},
                        {title:'Poker lata',price: '$2.500',
                        img:'https://i1.wp.com/supertiendaslidl.com/wp-content/uploads/2017/11/0000111_cerveza-poker-lata-330-cc_550.png?fit=300%2C300&ssl=1'},
                        {title:'Ron veijo de caldas',price: '$32.000',
                        img:'https://media-verticommnetwork1.netdna-ssl.com/wines/ron-viejo-de-caldas-3-anos-new-1238411-s209_p.jpg'},
                        {title:'Paspas margarita', price:'$2.000',
                        img:'http://www.tumercado.co/1268/papas-margarita-pollo-110gr.jpg'},
                        {title:'hersheys', price:'$5.000',
                        img:'http://www.cvs.com/bizcontent/merchandising/productimages/large/3400017013.jpg'}
                    ];
                }
                return this.data
            })
        );
       
    }
}
export class Product{
    constructor(
        public img:String,
        public title:String,
        public price: String
    ) {}
}