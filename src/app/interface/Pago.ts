export interface Pago{
    idPago :number;
    idEstudiante:number;
    idComprobante:number;
    monto:number;
    tipoPago:string;
    estado:string;
}


export class PagoResponse{
    idPago=0;
    idEstudiante=0;
    idComprobante=0;
    monto=0;
    tipoPago='';
    estado='';
}