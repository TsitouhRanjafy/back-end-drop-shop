import swaggerJsDoc from "swagger-jsdoc";


const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Documentation API DropApp',
        version: '1.0.0',
      },
    },
    apis: ['./src/interfaces/documentation/*.yaml'], // files containing annotations as above
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
};


const swaggerDocs = swaggerJsDoc(options)

export default swaggerDocs;

