import { AboutMe } from '../model/aboutme';
import { Project } from '../model/project';

export const mockLogin = (userName: string, password: string) =>
  new Promise<TokenResponse>(function (resolve, rejected) {
    setTimeout(() => {
      if (userName === 'sergioivan2006@outlook.com' && password === '123456789') {
        resolve(
          JSON.parse(
            `{"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODg0YmJiM2Q0YTRkNDk1ZDYyNGJhYyIsImVtYWlsIjoibHVjYXNmZXJuYW5kZXphcmFnb25AZ21haWwuY29tIiwiaWF0IjoxNjM2MzIyMzA3LCJleHAiOjE2MzYzMjU5MDd9.yxy7uKWXJx5rY8znRBTg5182llyH8Rs9R8C6_SM4LIg" }`
          )
        );
      } else {
        rejected(new Unauthorized());
      }
    }, 2000);
  });
export interface TokenResponse {
  token: string;
}
export interface ApiError {
  description?: string;
}
export class Unauthorized implements ApiError {}

export interface DashboardInfo {
  aboutMe: AboutMe;
  projects: Project[];
}

export const mockFetchDashboard = () =>
  Promise.all([mockAboutme(), mockProjects()]).then(([aboutMe, projects]) => {
    return {
      aboutMe,
      projects
    };
  });

export const mockAboutme = () =>
  new Promise<AboutMe>(function (resolve) {
    setTimeout(() => {
      resolve(
        JSON.parse(
          `{
            "id":"12389asdfasf8",
            "name":"Sergio Ivan Pedraza Gutierrez",
            "birthday":961559200000,
            "nationality":"Colombia",
            "job":"Ideea Soluciones",
            "github":"https://github.com/SergioIPG00"
            }`
        )
      );
    }, 500);
  });

export const mockProjects = () =>
  new Promise<Project[]>(function (resolve) {
    setTimeout(() => {
      resolve(
        JSON.parse(
          `[
            
              {
                  "id": "12349as8df90",
                  "title": "actividad-01",
                  "description": "Proyecto de actividad 1 de clase frontend framework master fullsatck",
                  "version": "1.2",
                  "link": "https://github.com/SergioIPG00/actividad-01-",
                  "tag": "Git, nodeJS, react",
                  "timestamp": 765817712000
              },
              {
                  "id": "12349as8df91",
                  "title": "proyectoMongoose",
                  "description": "Proyectio de implementacion de mongo en un proyeco con nodeJS y react",
                  "version": "1.4",
                  "link": "https://github.com/proyectoMongoose",
                  "tag": "Git, mongo, javascript, react",
                  "timestamp": 765817712001
              },
              {
                  "id": "12349as8df92",
                  "title": "proyecto-nodeJS",
                  "description": "proyecto de prueba parmanejo de react y nodeJS",
                  "version": "1.1",
                  "link": "https://github.com/SergioIPG00/proyecto-nodeJS",
                  "tag": "Git, nodeJS, react",
                  "timestamp": 765817712002
              },
              {
                  "id": "12349as8df93",
                  "title": "BACK",
                  "description": "Proyecto de desarrollo del backend del proyecto final master fullstack",
                  "version": "1.12",
                  "link": "https://github.com/tfmshreuhouse/BACK",
                  "tag": "Git, react, typeScript, sql",
                  "timestamp": 765817712003
              },
              {
                  "id": "12349as8df94",
                  "title": "Proyecto-react",
                  "description": "React es el Framework web basado en componentes de Facebook. Cuenta con una curva de aprendizaje corta y mucha flexibilidad",
                  "version": "17.0.1",
                  "link": "https://reactjs.org/docs/hello-world.html",
                  "tag": "JavaScript, Typescript, React",
                  "timestamp": 765817712004
              }          
            ]`
        )
      );
    }, 500);
  });

  export const newProject = () =>
  new Promise<Project[]>(function (resolve) {
    setTimeout(() => {
      resolve(
        JSON.parse(
          `[
            
              {
                  "id": "12349as8df90",
                  "title": "actividad-01",
                  "description": "Proyecto de actividad 1 de clase frontend framework master fullsatck",
                  "version": "1.2",
                  "link": "https://github.com/SergioIPG00/actividad-01-",
                  "tag": "Git, nodeJS, react",
                  "timestamp": 765817712000
              },
              {
                  "id": "12349as8df91",
                  "title": "proyectoMongoose",
                  "description": "Proyectio de implementacion de mongo en un proyeco con nodeJS y react",
                  "version": "1.4",
                  "link": "https://github.com/proyectoMongoose",
                  "tag": "Git, mongo, javascript, react",
                  "timestamp": 765817712001
              },
              {
                  "id": "12349as8df92",
                  "title": "proyecto-nodeJS",
                  "description": "proyecto de prueba parmanejo de react y nodeJS",
                  "version": "1.1",
                  "link": "https://github.com/SergioIPG00/proyecto-nodeJS",
                  "tag": "Git, nodeJS, react",
                  "timestamp": 765817712002
              },
              {
                  "id": "12349as8df93",
                  "title": "BACK",
                  "description": "Proyecto de desarrollo del backend del proyecto final master fullstack",
                  "version": "1.12",
                  "link": "https://github.com/tfmshreuhouse/BACK",
                  "tag": "Git, react, typeScript, sql",
                  "timestamp": 765817712003
              },
              {
                  "id": "12349as8df94",
                  "title": "Proyecto-react",
                  "description": "React es el Framework web basado en componentes de Facebook. Cuenta con una curva de aprendizaje corta y mucha flexibilidad",
                  "version": "17.0.1",
                  "link": "https://reactjs.org/docs/hello-world.html",
                  "tag": "JavaScript, Typescript, React",
                  "timestamp": 765817712004
              }          
            ]`
        )
      );
    }, 500);
  });

  export const displayFormData = (formData: any): string => {
    return `
      Title: ${formData.title}
      Description: ${formData.description}
      Version: ${formData.version}
      Link: ${formData.link}
      Tag: ${formData.tag}
    `;
  };