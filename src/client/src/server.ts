import { createServer, Factory, Model, Response } from 'miragejs';
import { faker } from '@faker-js/faker';
import {Todo} from './model/Todo';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
      todo: Model.extend<Partial<Todo>>({})    ,
    },
    factories: {      
      todo: Factory.extend<Partial<Todo>>({    
        id(i) {
          return faker.random.alpha(10);
        }, 
        body() {
          return faker.lorem.sentence();
        },
        completed() {
          return false      
        } 
      })    
    },
    seeds(server) {
      server.createList("todo", 10);
    },
    routes() {
      this.post('/login', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        if (attrs.username == "admin@admin.com" && attrs.password == 'password') {
          return new Response(200, { some: 'header' }, { token: [ 'admin-token'] });
        } else {
          return new Response(401, { some: 'header' }, { errors: [ 'unauthorized'] });
        }    
     });
      this.get('/api/todos', (schema, request) => {
        return schema.all("todo");      
      });
      this.get('/api/todos/:id', (schema, request) => {
        let keyid = request.params.id;        
        return schema.findBy("todo", {id: keyid})  
      });
      this.post('/api/todos', (schema, request) => {
         let attrs = JSON.parse(request.requestBody);
         schema.create("todo", attrs);        
         return schema.all("todo");      
      });
      // this.put('/api/todos/:id', (schema, request: any) => {
      //   let attrs = JSON.parse(request.requestBody);
      //   let keyid = request.params.id;        
      //   let post = schema.findBy("todo", {id: keyid})
      //   return post?.update(attrs);
      // });
      this.delete('/api/todos/:id', (schema, request) => {
         let keyid = request.params.id;        
         let post = schema.findBy("todo", {id: keyid})       
         if(post !== null)          
              post.destroy();       
         return schema.all("todo");      
      });
    },
  });
  return server;
}