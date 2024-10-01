import { format } from "date-fns";

export interface ComprobantePago{
    idComprobante:number;
    fechaEmision:string;
    detalles:string;
}

export class ComprobantePagoResponse{
    idComprobante=0;
    fechaEmision=format(new Date(),'yyyy-MM-dd');
    detalles='';
}