import { server } from './server/Server'

server.listen(process.env.PORT || 3333, () =>
  console.log(`🚀 Server in running on port ${process.env.PORT || 3333}`),
)
