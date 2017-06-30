export interface Pedidos {
  IDPEDIDO: number;
  CNOMBRE: string;
  CAPELLIDOS: string;
  PPRECIOTAL: number;
  PFECHA: string;
  PPAGADO: string;
  PFORMA: string;
  PSTATUS: string
}

export interface Notify {
  IDPEDIDO: number;
  CNOMBRE: string;
  CAPELLIDOS: string;
  PPRECIOTAL: number;
  PFECHA: string;
  PPAGADO: string;
  PFORMA: string;
  PSTATUS: string
}

export interface IPedidos{
  IDPEDIDO: number;
  PPRECIOTOTAL: number;
  PSTATUS: string;
  PFECHA: string;
  PPAGADO: string;
  PFORMA: string;
  PDIRECCION_R: string;
  PDIRECCION_E: string;
  COORDENADAS_R: string;
  LAT?: string;
  LNG?: string;
  COORDENADAS_E: string;
  IDCLIENTE: number;
}

export interface CR{
  IDPEDIDO:number;
  STATUS: string;
  COORDENADA:string;
  LAT?: string;
  LNG?: string;
}

export interface CE{
  IDPEDIDO:number;
  STATUS: string;
  COORDENADA:string;
  LATE?: string;
  LNGE?: string;
}
