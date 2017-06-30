import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IPedido, IDetallePedidos, DP } from './pedido';
import { global } from '../../../global';
import 'rxjs/add/operator/map';

@Injectable()

export class PedidoService {
    public local: string;
    public url: string;
    public prueba: string;
    constructor(private _http: Http) {
        this.local = global.local;
        this.url = global.url;
        this.prueba = 'http://pruebakityplancho.mybluemix.net/api/procesos/';
    }


    postPedido(pedido: IPedido){
       let body = new URLSearchParams();
            body.set('PSTATUS',pedido.PSTATUS);
            body.set('PDIRECCIONR',pedido.PDIRECCIONR);
            body.set('PDIRECCIONE',pedido.PDIRECCIONE);
            body.set('PPRECIOTOTAL',pedido.PPRECIOTOTAL.toString());
            body.set('PPAGADO',pedido.PPAGADO);
            body.set('PFORMA', pedido.PFORMA);
            body.set('COORDENADASR',pedido.COORDENADASR);
            body.set('COORDENADASE',pedido.COORDENADASE);
            body.set('IDCLIENTE',pedido.IDCLIENTE.toString());
            console.log('El pedido');
            console.log(pedido);

            return this._http.post(this.url + 'postpedido', body, {headers : this.getHeaders()})
                  .map((response:Response)=>{
                    JSON.stringify(response);
                  });
            // return console.log('Whop')
    }



  postDetallePedido(detallepedido: IDetallePedidos){

       let body = new URLSearchParams();
            body.set('IDSP',detallepedido.IDSP.toString());
            body.set('CANTIDAD',detallepedido.CANTIDAD.toString());
            body.set('IDPEDIDO',detallepedido.IDPEDIDO.toString());
            body.set('COSTO',detallepedido.COSTO.toString());
            console.log('Datos service');
            console.log(body);
            return this._http.post(this.url + 'postDetallePedido', body, {headers : this.getHeaders()})
                  .map((response:Response)=>{
                    JSON.stringify(response);
                  });
    }

    postDP(dp: DP){

       let body = new URLSearchParams();
            body.set('IDSP',dp.DPIDSP.toString());
            body.set('CANTIDAD',dp.DPCANTIDAD.toString());
            body.set('IDPEDIDO',dp.DPIDPEDIDO.toString());
            body.set('COSTO',dp.DPCOSTO.toString());
            console.log('Datos service');
            console.log(body);
            return this._http.post(this.url + 'postDetallePedido', body, {headers : this.getHeaders()})
                  .map((response:Response)=>{
                    JSON.stringify(response);
                  });
    }

    getSumaP(id){
        let body = new URLSearchParams();
          body.set('IDPEDIDO',id.toString());
          console.log('Datos service');
          console.log(body);
          return this._http.post(this.url + 'getSumaP', body, {headers : this.getHeaders()})
                .map(res => res.json());
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        headers.append('X-Requested-With','XMLHttpRequest');
        headers.append('cache-control','no-cache');
        headers.append('status','OK');
        return headers;
      }

     getlastpedido() {
        return this._http.get(this.url + 'getlastpedido')
            .map(res => res.json());
    }
}
