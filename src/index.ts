import {Observable,Observer} from 'rxjs';

const observadora: Observer <any>={
    next: value => console.log('next', value),
    error: error => console.warn('error:', error),
    complete: ()=> console.info('completado')
};


const intervalo$ = new  Observable((subscribe)=>{
    /* Creando un contador cada segundo*/
    let contador= 0;
    /* setInterval(()=>{
        subscribe.next(contador)
        contador ++;
    },1000); */
});

intervalo$.subscribe((num)=>console.log('Num:', num));