import {Observable,Observer} from 'rxjs';

const observable$ = new Observable<string>(subscribe => {
    subscribe.next('Hola');
    subscribe.next('Mundo');
    subscribe.next('Hola2');
    subscribe.next('Mundo2');
    subscribe.next('Hola3');
    subscribe.next('Mundo3');

    /* Forzar el un error */
   /*  const a  = undefined;
    a.nombre = 'Alex'; */

    subscribe.complete();// se acompleta el
    subscribe.next('Hola---->');
});

/* Existe 3 posibles valores que pueden pasar
    valor = mostrar el valor
    error = Si existe algun error
    completado = Si se a completado
*/
/*
    PRIMERA FORMA
    observable$.subscribe(
    valor => console.log('next:',valor),
    error => console.error('error---->',error),
    () =>console.info('Completado')
); */


/*
    SEGUNDA FORMA
    Este es un objecto independiente el observer es una interfaz */
const observadora: Observer <any>={
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: ()=> console.info('completado [obs]:')
};


observable$.subscribe(observadora)