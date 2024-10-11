import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2Canvas from 'html2canvas';
import autoTable from 'jspdf-autotable';
import { Aula } from '../interface/Aula';
import { Pago } from '../interface/Pago';
import { Alumno } from '../interface/Alumno';

@Injectable({
  providedIn: 'root'
})

export class GeneratePDFService{

  comprobantePagoPDF(dataPago: Pago, dataEstudiante:Alumno, fecha:string){
    const doc = new jsPDF('p', 'pt', 'a5');
  
    this.encabezado(doc);

    let yPosition = 120;
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold'); doc.text('Comprobante de Pago', pageWidth / 2, yPosition, {align: 'center'});
    yPosition += 30;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal'); doc.text(`Número de Comprobante: #${dataPago.idComprobante}`, 20, yPosition);
    yPosition += 20;
    doc.text(`Fecha de Emisión: ${fecha}`, 20, yPosition);
    yPosition += 20;

    
    doc.setLineWidth(0.5);
    doc.line(20, yPosition, pageWidth - 20, yPosition); 
    yPosition += 20;
    

    doc.setFont('helvetica', 'bold'); doc.text(`Estudiante:`, 20, yPosition);
    doc.setFont('helvetica', 'normal'); doc.text(`${dataEstudiante.nombres} ${dataEstudiante.apePaterno} ${dataEstudiante.apeMaterno}`, 110, yPosition);
    yPosition += 20;
    
    doc.setFont('helvetica', 'bold'); doc.text('ID Pago:', 20, yPosition);
    doc.setFont('helvetica', 'normal'); doc.text(`${dataPago.idPago}`, 110, yPosition);
    yPosition += 20;
    
    doc.setFont('helvetica', 'bold'); doc.text('Monto Pagado:', 20, yPosition);
    doc.setFont('helvetica', 'normal'); doc.text(`S/.${dataPago.monto.toFixed(2)}`, 110, yPosition);
    yPosition += 20;

    doc.setFont('helvetica', 'bold'); doc.text('Tipo de Pago:', 20, yPosition);
    doc.setFont('helvetica', 'normal'); doc.text(`${dataPago.tipoPago}`, 110, yPosition);
    yPosition += 30;

  
    doc.setLineWidth(0.5);
    doc.line(20, yPosition, pageWidth - 20, yPosition); 
    yPosition += 15;

    
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal'); doc.text('Gracias por su pago', pageWidth / 2, yPosition, { align: 'center' });
    
    doc.save(`comprobante_pago_${dataPago.idComprobante}.pdf`);
  }
  
  reportePDF(data: any, dataAula:Aula){
    const doc = new jsPDF('p', 'pt', 'a4');
  
    this.encabezado(doc);
    const pageWidth = doc.internal.pageSize.getWidth();

    const head = [['Nombre','Apellido Paterno','Apellido Materno']];  
    const body = data.map((item: any) => [item.Nombre, item.ApellidoPaterno,item.ApellidoMaterno]); 
    const aula = dataAula.gradoActual+" - "+dataAula.seccion +" - "+ dataAula.nivel

    doc.setFontSize(14);  
    const aulaW = doc.getTextWidth(aula);
    const aulaXPos = (pageWidth - aulaW) / 2;
    doc.text(aula, aulaXPos, 100); 

    autoTable(doc, {
      head: head,
      body: body,
      startY: 120,  
    });

    doc.save(`${new Date().toISOString()}_datos.pdf`);
  }

  private encabezado(doc:jsPDF){
    const imgData = 'assets/png/pinLogo.png';

    
    doc.addImage(imgData, 'PNG', 20, 15, 42, 60); 

    const title1 = 'POLICIA NACIONAL DEL PERÚ';
    const title2 = 'INSTITUCIÓN EDUCATIVA PNP';
    const title3 = '"PRECURSORES DE LA INDEPENDENCIA"';

    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(14);  
    const title1Width = doc.getTextWidth(title1);
    const title1XPosition = (pageWidth - title1Width) / 2;
    doc.text(title1, title1XPosition, 40); 
    
    doc.setFontSize(9); 
    const title2Width = doc.getTextWidth(title2);
    const title2XPosition = (pageWidth - title2Width) / 2;
    doc.text(title2, title2XPosition, 55); 
    
    doc.setFontSize(9);  
    const title3Width = doc.getTextWidth(title3);
    const title3XPosition = (pageWidth - title3Width) / 2;
    doc.text(title3, title3XPosition, 65); 
      
    doc.setFontSize(8);
    doc.text("Fecha: " + new Date().toLocaleDateString(), 15, 85);
  }

}
