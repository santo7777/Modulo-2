
class Alumno {
    public nombre: string;
    public edad: number;
    public correo: string;
    public promedio: number;
  
    constructor(nombre: string, edad: number, correo: string, promedio: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.correo = correo;
      this.promedio = promedio;
    }
}


const alumnos: Array<Alumno> = [
    { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
    { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
    { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
    { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
    { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
    { nombre: "Maria Contreras", edad: 20, correo: "mariaC@gmail.com", promedio: 10 },
    { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
    { nombre: "Angelica Galindo", edad: 19, correo: "angelica@galindo.com", promedio: 7 },
    { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
    { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
    { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
    { nombre: "Daniela Medina", edad: 20, correo: "danielamedinaC@gmail.com", promedio: 7 },
]




/* *********Ejercicio1*********** */

// Devuelva una arreglo que contenga todos los estudiantes cuyo promedio es mayor a 6 puntos.

const alumDatos = ((student: Alumno[]) => {
    
    let promedio = student.filter(prom => prom.promedio > 6 )
    return promedio
})

console.log(alumDatos(alumnos))






/* *********Ejercicio2*********** */

// Devuelva una lisita de los estudiantes cuyo promedio es menor a 6 puntos y la edad es mayor a 19 años.

const studentAgePro = ((student: Alumno[]) => {

    let ageProm = student.filter(proAge=>  proAge.edad > 19 && proAge.promedio < 6 )
    return ageProm
})

console.log(studentAgePro(alumnos))






/* *********Ejercicio3*********** */

// Devuelva un arreglo ordenado segun el promedio de forma ascendente

const proAscendente = (student: Alumno[])=>{

    let listaAlum = [...student];
    // let listaAlum = Array.from(student);


    let stuAscend = listaAlum.sort((a,b) => {
        return a.promedio - b.promedio
    })
    return stuAscend
}

console.log(proAscendente(alumnos))





/* *********Ejercicio4*********** */

// El profesor decidio otorgar 2 puntos a todos los estudiantes cuya nota es menor o igual a 4, devuelva un arreglo que cumpla con esta condición

const regaloNota = ((student:Alumno[])=>{


    // const regalo = student.filter(nota => nota.promedio >= 4 ? (nota.promedio + 2) : 0)
    // return regalo

    const regalo = student.map(alumno => {


/*         let sumaPro = {
            ...alumno,
            promedio: alumno.promedio <=4 ? alumno.promedio += 2 : alumno.promedio,
        
        }
        return sumaPro  */
        // return {
        //     ...alumno,
        //     promedio: alumno.promedio <=4 ? alumno.promedio += 2 : alumno.promedio,
        
        // }

        return {
            nombre: alumno.nombre,
            edad : alumno.edad,
            correo: alumno.correo,
            promedio: alumno.promedio <=4 ? alumno.promedio += 2 : alumno.promedio,
        }

    } )
    return regalo
})

console.log(regaloNota(alumnos))





/* *********Ejercicio5*********** */

// Devuelva el promedio general de todos los alumnos


const proGeneral = ((student:Alumno[])=> {

    // const regalo =student.forEach(nota => nota.promedio)
    // return regalo


    const prom = student.reduce((total, value) => total + value.promedio, 0)

    let total = (prom/12).toFixed(1)
    return `El promedio general del grupo es de ${total}`;


})

console.log(proGeneral(alumnos))




