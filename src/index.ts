import {Observable} from 'rxjs'


const obs$ = new Observable<string>(subscribe=>{

    let nombre: string ='Hola Mundo soy Elias';
    subscribe.next(nombre);
    subscribe.next(nombre);
    subscribe.next(nombre);
    subscribe.next(nombre);
    /* Forzar un error */
    const a = undefined;
    subscribe.next(a);
    subscribe.complete();
    subscribe.next(nombre);
});


obs$.subscribe(
    valor => console.log('next', valor),
    error => console.error('error', error),
    () => console.info('Completado')
);








