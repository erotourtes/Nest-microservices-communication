```fish
nest new microservcies
nest g lib common
nest g app grpc
```

## GRPC
```fish
pnpm run start:dev microservices
pnpm run start:dev grpc
```

Open [regular](http://localhost:3000/grpc?message=world), [stream](http://localhost:3000/grpc/stream?message=world)


## RabbitMQ
```fish
pnpm run start:dev microservices
pnpm run start:dev rabbitmq
```

Open [regular](http://localhost:3000/rmq?msg="hello")


## CQRS
```fish
pnpm run start:dev cqrs
```

Open [create](http://localhost:3005/cqrs?msg="hello"), [get](http://localhost:3005/cqrs/0)


## GraphQL
```fish
pnpm run start:dev graphql
```

Open [editor](http://localhost:3000/graphql)