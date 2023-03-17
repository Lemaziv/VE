// EMISORES EMMITERS
const EventEmitter=require('events');
//console.log(EventEmitter);
const emisorEstudiantes=new EventEmitter;
emisorEstudiantes.on('calificación',(matricula,grupo)=>{
    console.log("se consulta la calificación;");
    console.log(`El alumno es ${matricula}`);
    console.log(`El grupo es ${grupo}`);
});
emisorEstudiantes.emit('calificacion',1234,'IINF');