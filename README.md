```fish
nest new microservcies
nest g app grpc
nest g lib common
```

Open: 
- rpc [regular](`http://localhost:3000/grpc?message=world`), [stream](`http://localhost:3000/grpc/stream?message=world`)