import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2Canvas from 'html2canvas';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})

export class GeneratePDFService{

  createDataPDF(data: any){
    // const doc_list = new jsPDF()
    //Posición -> X, Y 
    // doc_list.text("HOLA MUNDOS DESDE ANGULAR", 10, 150)
    // doc_list.save()
    const DATA: any = document.getElementById('htmlData')
    const doc = new jsPDF('p', 'pt', 'a4')
    doc.text("HOla mundo", 10, 0)
    const options = {
      background: 'white',
      scale: 3
    };
    html2Canvas(DATA, options)
      .then((canvas) => {
        const img = canvas.toDataURL('image/PNG')

        const bufferX = 15
        const bufferY = 15
        const imgProps = (doc as any).getImageProperties(img)
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      })
      .then((docResult) =>{
        docResult.save(`${new Date().toISOString()}_tutorial.pdf`)
      });
  }

  reportePDF(data: any){
    const doc = new jsPDF('p', 'pt', 'a4');
  

    doc.text("Reporte de Datos", 40, 50);
    
    const head = [['Estudiante', 'Aula']];  
    const body = data.map((item: any) => [item.Estudiante, item.Aula]); 
 
    autoTable(doc, {
      head: head,
      body: body,
      startY: 70,  
    });
    doc.save(`${new Date().toISOString()}_datos.pdf`);
  }

}
