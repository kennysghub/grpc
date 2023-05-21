import { createServer, Server } from 'nice-grpc';
import { GreeterService } from './helloworld'; // assuming helloworld is your proto file

const server = createServer({
  services: [
    GreeterService.definition({
      async sayHello(req) {
        return {
          message: 'Hello, ' + req.name,
        };
      },
    }),
  ],
});

server.listen('0.0.0.0:50051');
