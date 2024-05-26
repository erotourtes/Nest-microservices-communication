```fish
nest new microservcies
nest g lib common
```

## GRPC
```fish
nest g app grpc
```

Open [regular](http://localhost:3000/grpc?message=world), [stream](http://localhost:3000/grpc/stream?message=world)


## RabbitMQ
```fish
nest g app rabbitmq
```

Open [regular](http://localhost:3000/rmq?msg="hello")


## CQRS
```fish
pnpm run start:dev cqrs
```

Open [create](http://localhost:3005/cqrs?msg="hello"), [get](http://localhost:3005/cqrs/0)