import {Observable} from 'rxjs'


const obs$ = new Observable<string>(subscribe=>{

    const nombre: string ='Hola Mundo soy Elias';
    subscribe.next(nombre);
    subscribe.next(nombre);
    subscribe.next(nombre);
    subscribe.next(nombre);
    subscribe.complete();
    subscribe.next(nombre);
    subscribe.next(nombre);
});


obs$.subscribe(console.log);








