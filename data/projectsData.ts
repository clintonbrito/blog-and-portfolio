interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'IBM Bootcamp Project',
    description: `Financial Transaction Manager web application developed from scratch as the final project of an IBM Bootcamp using Java with Spring Boot for back-end and Angular TypeScript framework for front-end.`,
    imgSrc: '/static/images/ibm.jpeg',
    href: 'https://github.com/clintonbrito/ibm-bootcamp-project',
  },
  {
    title: 'E-Commerce RESTful API',
    description: `Backend challenge project for a job application. It is a RESTful API built with AdonisJS (Node.js) and MySQL for managing users, clients, products, and sales. The project follows the MVC architecture and includes user authentication with JWT.`,
    imgSrc: '/static/images/api-ecommerce.jpeg',
    href: 'https://github.com/clintonbrito/restful-api-ecommerce',
  },
]

export default projectsData
