import { createClientFactory } from 'nice-grpc';
import { GreeterService } from './helloworld'; // assuming helloworld is your proto file

const clientFactory = createClientFactory();

const client = clientFactory.create(GreeterService, 'localhost:50051');

async function main() {
  const response = await client.sayHello({ name: 'world' });

  console.log(response.message); // Hello, world
}

main().catch(console.error);
