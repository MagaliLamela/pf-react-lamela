import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js"

const productos = [
    {
        id: "royal-canin-mini-puppy-3kg",
        nombre: "Royal Canin Mini Puppy 3 Kg",
        imagen: "/img/promo3.png",
        stock: 2,
        precioAnterior: 11250,
        precio: 10125,
        categorias: [
            "perros",
            "promociones"
        ],
        info: "Alimento para perros cachorros de talla pequeña (peso adulto menor a 10 kg), desde los 2 hasta los 10 meses de edad. Royal Canin Mini Puppy ayuda a reforzar las defensas naturales del cachorro gracias a un exclusivo complejo de antioxidantes, incluyendo vitamina E. Esto se debe a que mientras crece, el cachorro experimenta grandes cambios y nuevos descubrimientos, y durante este periodo clave, su sistema inmunológico sigue desarrollándose gradualmente. Su fórmula con proteínas de alta calidad (L.I.P.) y prebióticos (FOS) ayuda a favorecer la salud digestiva y el equilibrio de la flora intestinal, contribuyendo a la buena calidad de las heces. Cubre las necesidades energéticas de los cachorros de razas pequeñas durante el período de crecimiento y satisface su apetito caprichoso."
    },
    {
        id: "royal-canin-mother-and-babycat-1-5kg",
        nombre: "Royal Canin Mother & Babycat 1,5 Kg",
        imagen: "/img/rcmotherandbabycat.png",
        stock: 4,
        precio: 9100,
        categorias: [
            "gatos"
        ],
        info: "Alimento seco para gatitos en su primera etapa de crecimiento (de 1 a 4 meses de edad) y durante el período de destete. También indicado para gatas gestantes o en período de lactancia. Royal Canin Mother & Babycat es especial para facilitar el destete, ya que presenta una croqueta adaptada que se rehidrata rápidamente para colaborar a la transición de la leche al alimento seco. Ayuda a reforzar las defensas naturales del gatito en su primera etapa de crecimiento, gracias a un exclusivo complejo de antioxidantes, que incluye vitamina E. Esto se debe a que entre las 4 y las 12 semanas después del nacimiento, la inmunidad proporcionada de forma natural por el calostro de la madre disminuye progresivamente. Además, brinda una tolerancia digestiva reforzada gracias a proteínas de alta digestibilidad (L.I.P.) y prebióticos (incluye FOS)."
    },
    {
        id: "royal-canin-kitten-1-5kg",
        nombre: "Royal Canin Kitten 1,5 Kg",
        imagen: "/img/rckitten.png",
        stock: 5,
        precio: 9100,
        categorias: [
            "gatos"
        ],
        info: "Alimento para gatos, especial para gatitos en su segunda etapa de crecimiento, desde los 4 hasta los 12 meses de edad. Royal Canin Kitten brinda una tolerancia digestiva reforzada gracias a proteínas de alta digestibilidad (L.I.P.) y prebióticos (incluyendo FOS). Ayuda a reforzar las defensas naturales del gatito en su segunda etapa de crecimiento, gracias a un complejo patentado de antioxidantes, que incluye vitamina E. Esto se debe a que durante este período clave, el sistema inmunológico del gatito se desarrolla progresivamente. Además, contribuye a un crecimiento saludable, ya que presenta un contenido adaptado de proteínas, vitaminas y minerales incluyendo vitamina D y calcio, y un elevado contenido energético que se adapta a este período de crecimiento intenso del gatito."
    },
    {
        id: "royal-canin-gato-indoor-1-5kg",
        nombre: "Royal Canin Gato Indoor 1,5 Kg",
        imagen: "/img/promo4.png",
        stock: 10,
        precioAnterior: 8100,
        precio: 7290,
        categorias: [
            "gatos",
            "promociones"
        ],
        info: "Alimento para gatos adultos que viven en el interior del hogar, a partir del año de edad. Royal Canin Indoor ayuda a reducir el olor y la cantidad de las heces gracias a su contenido de proteínas de alta digestibilidad (L.I.P.), ya que la falta de ejercicio puede conducir a un tránsito intestinal más lento y dar lugar a una mala calidad de heces muy olorosas. Presenta un tenor moderado de grasa que ayuda a mantener un peso saludable, adaptado a las necesidades de los gatos con niveles bajos de actividad que viven en el interior del hogar; y gracias a fibras específicas, ayuda a estimular el tránsito intestinal y a eliminar los pelos ingeridos."
    },
    {
        id: "royal-canin-mini-adult-3kg",
        nombre: "Royal Canin Mini Adult 3 Kg",
        imagen: "/img/promo1.png",
        stock: 8,
        precioAnterior: 10300,
        precio: 9270,
        categorias: [
            "perros",
            "promociones"
        ],
        info: "Alimento para perros adultos de talla pequeña (peso adulto hasta 10 kg), de 10 meses a 8 años de edad. Royal Canin Mini Adulto contribuye a mantener un peso saludable en perros de talla pequeña, cubriendo sus elevadas necesidades energéticas, debido al aporte de L-carnitina que ayuda a promover el metabolismo graso. Gracias a su fórmula y una selección de aromas exclusivos, satisface el apetito caprichoso de los perros de talla pequeña. Enriquecido con EPA & DHA, contiene nutrientes que ayudan a mantener una piel y un pelaje saludable."
    },
    {
        id: "royal-canin-gato-fit-1-5kg",
        nombre: "Royal Canin Gato Fit 1,5 Kg",
        imagen: "/img/promo2.png",
        stock: 3,
        precioAnterior: 8100,
        precio: 7290,
        categorias: [
            "gatos",
            "promociones"
        ],
        info: "Alimento para gatos adultos con peso ideal, actividad física moderada y que poseen acceso al exterior, de 1 a 7 años de edad. Royal Canin Fit es un alimento completo y balanceado que contiene un nivel adecuado de nutrientes beneficiosos para mantener la buena salud de los gatos adultos. Esto se debe a que, para satisfacer las necesidades nutricionales específicas en la fase adulta, los gatos necesitan una nutrición de alta calidad. Además, su fórmula proporciona un aporte calórico adaptado que ayuda a mantener el peso ideal de gatos adultos con un nivel de actividad moderado."
    },
    {
        id: "royal-canin-medium-puppy-3kg",
        nombre: "Royal Canin Medium Puppy 3 Kg",
        imagen: "/img/rcperromediumpuppy.png",
        stock: 9,
        precio: 10999,
        categorias: [
            "perros"
        ],
        info: "Alimento balanceado completo para caninos cachorros de talla mediana (peso adulto entre 11 y 25 kg), de 2 a 12 meses de edad. Royal Canin Medium Puppy ayuda a promover una óptima seguridad digestiva y una buena conformación de las heces gracias a la incorporación de proteínas de alta digestibilidad (L.I.P.) con limitada fermentación en el colon. Además, contribuye a favorecer a un ecosistema intestinal equilibrado gracias a la presencia de prebióticos (FOS, MOS) que ayudan a estimular el desarrollo de la flora bacteriana benéfica y limitan el crecimiento de la flora patógena. Esto se debe a que el sistema digestivo del cachorro se irá desarrollando paulatinamente, pero es más delicado y con menor capacidad que el de un perro adulto. Esta situación debe ser tenida en cuenta especialmente cuando el cachorro se enfrente a enfermedades infecciosas y/o parasitarias o en situaciones de estrés. Ayuda a reforzar las defensas naturales del cachorro gracias a un complejo de antioxidantes patentado (Vitamina E, vitamina C, luteína y taurina) y a los manano-oligosacáridos para promover el desarrollo de anticuerpos, ya que la protección transmitida por la madre a través del calostro comienza a declinar entre la 4ta. y 12va. semana de vida, y con su propio sistema inmune aún inmaduro, el cachorro se vuelve susceptible al contagio de enfermedades infecciosas y parasitarias."
    },
    {
        id: "royal-canin-medium-adult-3kg",
        nombre: "Royal Canin Medium Adult 3 Kg",
        imagen: "/img/rcperromediumadult.png",
        stock: 7,
        precio: 9850,
        categorias: [
            "perros"
        ],
        info: "Alimento completo para perros adultos de talla mediana (de 11 a 25 kg), desde los 12 meses hasta los 7 años de edad. Royal Canin Medium Adulto ayuda a dar soporte a las defensas naturales gracias a un complejo de antioxidantes y a los manano-oligosacáridos. Contribuye a a mantener una óptima digestibilidad gracias a una fórmula exclusiva que incluye proteínas de alta calidad y un aporte balanceado de fibras dietarias. Su fórmula enriquecida con ácidos grasos Omega 3 (EPA & DHA) ayuda a mantener una piel saludable."
    },
    {
        id: "royal-canin-maxi-puppy-3kg",
        nombre: "Royal Canin Maxi Puppy 3 Kg",
        imagen: "/img/rcperromaxipuppy.png",
        stock: 6,
        precio: 10999,
        categorias: [
            "perros"
        ],
        info: "Alimento balanceado completo para caninos cachorros de talla grande (peso adulto entre 26 y 44 kg), de 2 a 15 meses de edad. Royal Canin Maxi Puppy contribuye a promover una óptima seguridad digestiva y una buena conformación de las heces gracias a la incorporación de proteínas de alta digestibilidad (L.I.P.) con limitada fermentación en el colon, y favorece a un ecosistema intestinal equilibrado gracias a la presencia de prebióticos (FOS, MOS) que ayudan a estimular el desarrollo de la flora bacteriana benéfica y limitan el crecimiento de la flora patógena. Ayuda a reforzar las defensas naturales del cachorro gracias a un complejo de antioxidantes patentado (vitamina E, vitamina C, luteína y taurina) y a los manano-oligosacáridos para promover el desarrollo de anticuerpos. Ayuda a promover el crecimiento armonioso del esqueleto gracias al aporte adecuado de calcio, a un contenido energético moderado (EM: 4052 kcal/kg) perfectamente adaptado a los requerimientos del cachorro durante el período de crecimiento, limitando el riesgo de sobrepeso; y a un elevado nivel proteico (30%) que favorece, además, el buen desarrollo de la masa muscular."
    },
    {
        id: "royal-canin-maxi-adult-3kg",
        nombre: "Royal Canin Maxi Adult 3 Kg",
        imagen: "/img/rcperromaxiadult.png",
        stock: 12,
        precio: 9799,
        categorias: [
            "perros"
        ],
        info: "Alimento completo para perros adultos de talla grande (de 26 a 44 kg), desde los 15 meses hasta los 5 años de edad. Royal Canin Maxi Adulto ayuda a mantener una digestibilidad óptima gracias a una fórmula exclusiva que contiene proteínas de alta calidad y un aporte balanceado de fibras dietarias. Además, contribuye a mantener huesos y articulaciones saludables en perros de talla grande, las cuales pueden estar sometidas a estrés debido a su peso corporal. Su fórmula se encuentra enriquecida con ácidos grasos Omega 3 (EPA y DHA) para ayudar a mantener una piel saludable."
    },
    {
        id: "proplan-perro-mini-puppy-3kg",
        nombre: "Pro Plan Cachorro Raza Pequeña 3 Kg",
        imagen: "/img/proplanperrominipuppy.png",
        stock: 13,
        precio: 12800,
        categorias: [
            "perros"
        ],
        info: "Los cachorros de tallas pequeñas crecen rápidamente y su metabolismo es más acelerado. Requieren de una alimentación especial, con altos niveles de energía y una concentración de nutrientes en partículas más pequeñas, adecuadas a sus mandíbulas. El DHA y EPA del aceite de pescado estimulan el desarrollo del cerebro y la maduración de la visión. Formulado con anticuerpos naturales provenientes del calostro y proteínas de la carne fresca de pollo, altamente digeribles para estimular el desarrollo de un sistema inmunológico fuerte, protege a los cachorros contra patógenos y enfermedades. Con croquetas de menor tamaño y una nutrición concentrada, además de contener altos niveles de proteínas y calorías para satisfacer las necesidades metabólicas únicas de los cachorros de talla pequeña. Una relación balanceada de calcio y fósforo ayudan a desarrollar huesos y dientes fuertes en los cachorros en crecimiento. Elaborado con ingredientes de la mejor calidad, incluyendo carne fresca de pollo."
    },
    {
        id: "proplan-perro-mini-adult-3kg",
        nombre: "Pro Plan Adulto Raza Pequeña 3 Kg",
        imagen: "/img/proplanperrominiadult.png",
        stock: 11,
        precio: 11100,
        categorias: [
            "perros"
        ],
        info: "Provee nutrición de avanzada que ayuda a los perros de razas pequeñas a mantenerse fuertes y llenos de vitalidad. Para satisfacer las necesidades nutricionales específicas de los perros de razas pequeñas, PRO PLAN® ha desarrollado OptiHealth Razas Pequeñas, una fórmula que ofrece nutrición concentrada con óptimos niveles de proteínas (29%) y grasas (17%). Formulado con la tecnología OptiHealth que ayuda a fortalecer el sistema inmune y digestivo, principalmente a través de la incorporación de Spirulina en su fórmula cuya efectividad ha sido científicamente probada. Con carne fresca de pollo, fuente de proteínas de calidad, que son altamente digestible y presentan alto valor biológico, reduciendo la generación de residuos proteicos. Altamente palatable. Óptimo balance de calcio y fósforo para mantener dientes sanos y fuertes. Desarrollado con la cantidad de energía que los perros de razas pequeñas necesitan para mantenerse sanos y activos."
    },
    {
        id: "proplan-perro-medium-puppy-3kg",
        nombre: "Pro Plan Cachorro Raza Mediana 3 Kg",
        imagen: "/img/proplanperromediumpuppy.png",
        stock: 5,
        precio: 12200,
        categorias: [
            "perros"
        ],
        info: "Protección durante su primer año de vida. Formulado con carne fresca de pollo como ingrediente principal, además de vitaminas y minerales esenciales, PRO PLAN® Puppy Razas Medianas ofrece una óptima nutrición para cachorros en crecimiento. Ayuda a fortalecer el sistema inmunológico. Contiene anticuerpos naturales del calostro y proteínas de alta calidad que extienden la protección del cachorro en su primer año. Optimiza la absorción de nutrientes. Formulado con calostro, contiene prebióticos y anticuerpos naturales que promueven un sistema digestivo estable, para que el cachorro pueda absorber una mayor cantidad de nutrientes. Estimula un crecimiento óptimo. Una exclusiva combinación de ingredientes, que incluye micro-nutrientes, factores de crecimiento del calostro y minerales esenciales que ayuda a estimular el crecimento apropiado y el desarrollo de los huesos de los cachorros, para que crezcan saludables."
    },
    {
        id: "proplan-perro-medium-adult-3kg",
        nombre: "Pro Plan Adulto Raza Mediana 3 Kg",
        imagen: "/img/proplanperromediumadult.png",
        stock: 3,
        precio: 11100,
        categorias: [
            "perros"
        ],
        info: "Provee nutrición de avanzada que ayuda a los perros de razas medianas de 1 a 7 años de edad a mantenerse fuertes y llenos de vitalidad. Con carne de pollo como ingrediente #1, fuente de proteína de alto valor biológico y elevada digestibilidad que entrega un óptimo nivel de nutrientes de manera eficaz. Con Optihealth, tecnología exclusiva compuesto por una mezcla de nutrientes que incluye spirulina, una microalga natural con beneficiosas propiedades para la salud general de los perros, cuya eficacia ha sido científicamente probada. Refuerza el sistema inmune. Vitamina A y E, que ayuda a mantener las defensas naturales del sistema inmunológico, asegurando una mejor respuesta a los desafios externos. Fortalece la microflora intestinal. Ayuda a optimizar la absorción de nutrientes clave, fortaleciendo y estabilizando la microflora intestinal y, por lo tanto, mejorando la salud del sistema digestivo. Refuerza la barrera cutánea. Contiene ácidos grasos Omega 6 y vitamina A, que sumados a ácidos grasos Omega 3 y minerales, promueven una piel flexible y un pelaje resistente y brillante, actuando como la primera linea de defensa que tiene un perro contra amenazas externas."
    },
    {
        id: "proplan-perro-maxi-puppy-3kg",
        nombre: "Pro Plan Cachorro Raza Grande 3 Kg",
        imagen: "/img/proplanperromaxipuppy.png",
        stock: 7,
        precio: 12200,
        categorias: [
            "perros"
        ],
        info: "Protección durante su primer año de vida. Los cachorros de razas grandes pueden tener un crecimiento anormal si no se les brinda una nutrición adecuada a sus necesidades específicas. Durante la etapa de desarrollo la inmunidad del cachorro permanecerá baja, aumentando su vulnerabilidad.Ayuda a fortalecer el sistema inmunológico. Contiene anticuerpos naturales del calostro y proteínas de alta calidad que extienden la protección del cachorro en su primer año. Optimiza la absorción de nutrientes. Formulado con calostro, contiene prebióticos y anticuerpos naturales que promueven un sistema digestivo estable, para que el cachorro pueda absorber una mayor cantidad de nutrientes. Estimula un crecimiento óptimo. Una exclusiva combinación de ingredientes, que incluye micro-nutrientes, factores de crecimiento del calostro y minerales esenciales que ayuda a estimular el crecimento apropiado y el desarrollo de los huesos de los cachorros, para que crezcan saludables."
    },
    {
        id: "proplan-perro-maxi-adult-3kg",
        nombre: "Pro Plan Adulto Raza Grande 3 Kg",
        imagen: "/img/proplanperromaxiadult.png",
        stock: 4,
        precio: 11100,
        categorias: [
            "perros"
        ],
        info: "Provee nutrición de avanzada que ayuda a los perros de razas grandes a mantenerse fuertes y llenos de vitalidad. Utilizando como ingrediente principal carne fresca de pollo, esta fórmula ofrece, a través de croquetas más grandes, una nutrición con alto contenido de proteínas (26%) de calidad y menos calorías provenientes de la grasa (12%). Refuerza el sistema inmune. Vitamina A y E, que ayuda a mantener las defensas naturales del sistema inmunológico, asegurando una mejor respuesta a los desafios externos. Fortalece la microflora intestinal. Ayuda a optimizar la absorción de nutrientes clave, fortaleciendo y estabilizando la microflora intestinal y, por lo tanto, mejorando la salud del sistema digestivo. Refuerza la barrera cutánea. Contiene ácidos grasos Omega 6 y vitamina A, que sumados a ácidos grasos Omega 3 y minerales, promueven una piel flexible y un pelaje resistente y brillante, actuando como la primera linea de defensa que tiene un perro contra amenazas externas."
    },
    {
        id: "royal-canin-gato-castrado-1-5kg",
        nombre: "Royal Canin Gato Castrado 1,5 Kg",
        imagen: "/img/rcgatocastrado.png",
        stock: 2,
        precio: 7450,
        categorias: [
            "gatos"
        ],
        info: "Royal Canin Gatos Castrados Weight Control es un alimento para gato adulto castrado o con tendencia al aumento de peso, desde la castración hasta los 7 años. Fórmula probada para reducir la ingesta energética espontánea, gracias a las fibras que ayudan a regular el apetito. Los niveles moderados de grasas y calorías ayudan a los gatos a mantener el peso ideal. Los niveles de proteína adaptados ayudan a mantener la masa muscular. Esta dieta promueve un ambiente urinario desfavorable para la formación de de cristales de estruvita y oxalato de calcio."
    },
    {
        id: "royal-canin-gato-ageing-2kg",
        nombre: "Royal Canin Gato Ageing +12 2 Kg",
        imagen: "/img/rcgatoageing.png",
        stock: 9,
        precio: 12700,
        categorias: [
            "gatos"
        ],
        info: "Alimento balanceado para gatos maduros, a partir de los 12 años de edad. Royal Canin Ageing 12+ ayuda a estimular el apetito de los gatos gerontes gracias a una croqueta muy palatable, con doble textura y fácil de masticar. Esto se debe a que, en algunos gatos gerontes, los sentidos del gusto y el olfato declinan con la edad, lo que conduce a una menor ingesta de alimento. Además, presenta un complejo sinérgico de antioxidantes que incluye licopenos y ácidos grasos Omega 3, que contribuye a dar soporte al organismo frente a los signos del envejecimiento, y ayuda a preservar la función renal gracias a su nivel moderado de fósforo."
    },
    {
        id: "royal-canin-gato-urinary-1-5kg",
        nombre: "Royal Canin Gato Urinary 1,5 Kg",
        imagen: "/img/rcgatourinary.png",
        stock: 8,
        precio: 9299,
        categorias: [
            "gatos"
        ],
        info: "Alimento para gatos adultos recomendado para ayudar a mantener la salud del tracto urinario. Royal Canin Urinary Care ayuda a mantener una concentración urinaria saludable al regular el balance de minerales así como a mantener un PH bajo, lo que produce una orina menos concentrada. Su exclusiva fórmula ayuda a promover un ambiente urinario menos favorable para la formación de cálculos urinarios. El uso exclusivo de Urinary Care produce efectos a partir de los 10 días: 2x* reducción del riesgo de formación de cálculos urinarios. Especialmente comprobado para los cristales (cálculos) de estruvita."
    },
    {
        id: "royal-canin-gato-renal-2kg",
        nombre: "Royal Canin Gato Renal 2 Kg",
        imagen: "/img/rcgatorenal.png",
        stock: 7,
        precio: 9550,
        categorias: [
            "gatos"
        ],
        info: "Alimento para gatos formulado para el soporte de la función renal en caso de insuficiencia renal crónica, que contribuye también a reducir la formación de cálculos de oxalato cuando la función renal está comprometida. Royal Canin Renal Feline contiene EPA y DHA, un complejo de antioxidantes y un bajo nivel de fósforo; y un perfil aromático especialmente diseñado para ayudar a responder a la preferencia específica de cada gato."
    },
    {
        id: "proplan-kitten-3kg",
        nombre: "Pro Plan Kitten 3 Kg",
        imagen: "/img/proplankitten.png",
        stock: 4,
        precio: 17499,
        categorias: [
            "gatos"
        ],
        info: "Alimento balanceado para gatitos en crecimiento de hasta 12 meses de edad y hembras gestantes o lactantes. Formulado con una mezcla innovadora de nutrientes, como el calostro rico en anticuerpos naturales. Esta mezcla única ayuda a extender la protección que empezó con la leche materna, reforzando la salud intestinal del gatito y ayudando a reducir el riesgo de trastornos digestivos."
    },
    {
        id: "proplan-gato-adulto-3kg",
        nombre: "Pro Plan Gato Adulto 3 Kg",
        imagen: "/img/proplangatoadulto.png",
        stock: 5,
        precio: 15899,
        categorias: [
            "gatos"
        ],
        info: "Alimento completo y balanceado para gatos adultos de todas las razas. Tecnología OptiPrebio®. Optimiza la absorción de nutrientes. Incluye prebióticos naturales que estabilizan la flora intestinal ayudando a optimizar la digestión y la absorción de nutrientes clave para una mejor salud digestiva. Tecnología STONE NEUTRAL combinacion exclusiva de nutrientes que ayuda a prevenir la formación de cristales de estruvita y oxalato, manteniendo y protegiendo la salud del tracto urinario inferior de los gatos adultos. Tecnología TARTAR CONTROL que ayuda a reducir el sarro dental en un 41% con respecto a fórmula PRO PLAN® Adult Cat sin pirofosfato tetrasódico, promoviendo dientes saludables y más fuertes."
    },
    {
        id: "proplan-gato-castrado-3kg",
        nombre: "Pro Plan Gato Castrado 3 Kg",
        imagen: "/img/proplangatocastrado.png",
        stock: 3,
        precio: 18299,
        categorias: [
            "gatos"
        ],
        info: "Alimento completo y balanceado para gatos adultos castrados o esterilizados. Formulado con menos calorías que el alimento para gatos adultos, ayuda a que los gatos castrados mantengan su peso. Incluye en su fórmula la tecnología OptiRenal®, una mezcla de nutrientes específica que ayuda a proteger la función renal. Con fuentes de fibras que ayudan a controlar la formación de bolas de pelo. Contiene altos niveles de proteínas y fibras, además de niveles reducidos en grasas, que ayudan a reducir las calorías y a mantener la condición corporal ideal. La inclusión de minerales quelados ayuda a asegurar una óptima absorción y disponibilidad de nutrientes clave para la salud."
    },
    {
        id: "proplan-gato-urinary-3kg",
        nombre: "Pro Plan Gato Urinary 3 Kg",
        imagen: "/img/proplangatourinary.png",
        stock: 10,
        precio: 18200,
        categorias: [
            "gatos"
        ],
        info: "Alimento completo y balanceado para gatos adultos. Es una tecnología exclusiva, que incluye una combinación de nutrientes que ayuda a prevenir la formación de cristales de estruvita y de oxalato, manteniendo y protegiendo la salud del tracto urinario inferior de los gatos adultos. Especialmente formulado para obtener un pH en la orina ligeramente más ácido para ayudar a disolver los cálculos de estruvita. Con una proporción adecuada de sodio para fomentar el consumo de agua, lo que ayuda a reducir la formación de cristales urinarios de estruvita y oxalato. Con Tecnología Optitract with Dual Stone Protection. Es una combinación exclusiva de nutrientes que ayuda a prevenir la formación de cristales de estruvita y oxalato, manteniendo y protegiendo la salud del tracto urinario inferior de los gatos adultos. La inclusión de minerales quelatados ayuda a asegurar una óptima absorción y disponibilidad de micro-minerales clave para la salud."
    }
]

const seedProducts = () => {
    productos.map(({ id, ...rest }) => {
        const productosRef = collection(db, "productos")
        addDoc(productosRef, rest)
    })
    console.log("productos subidos correctamente")
}

seedProducts()