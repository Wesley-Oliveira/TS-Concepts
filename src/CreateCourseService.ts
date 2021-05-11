
/**
 * name - string
 * duration - number
 * educator - string
 */

// Uma casca para poder utilizar como parâmetros de entrada/saída
interface Course {
    name: string;
    duration?: number; // O ?: define que é um atributo opcional, pode ser passado ou não
    educator: string;
}

class CreateCourseService {

    // a desestruturação é feita para permitir que independente da ordem dos atributos que forem passados no chamado da função
    // eu consiga pegar os dados e com isso fazer o que tenho que fazer
             /*_ aqui é possível definir o valor default caso o campo seja opcional*/
    execute( { duration = 8, educator, name } : Course) {
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();