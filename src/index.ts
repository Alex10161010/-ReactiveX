import {Observable,Observer} from 'rxjs'

/* Segunda forma para ver los metodos de un observable */
const observer: Observer <any> = {
    next:value=>console.log('Siguiente [next]:', value),
    error:error=>console.error('Error [obs]',error),
    complete:()=>console.info('Completado [obs]')
};

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

obs$.subscribe(observer);
/* Primera forma para ver los metodos de un observable */
//obs$.subscribe(
//    valor => console.log('next', valor),
//    error => console.error('error', error),
//    () => console.info('Completado')
//);








