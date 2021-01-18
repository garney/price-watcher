
import shortId from 'shortid';
import Items from './items';
export default class Socket {
  constructor(col) {

  }

  static init(server) {
    console.log(Items.loadItems());
    const io = require('socket.io')(server);
    io.on('connection', function(socket){
      console.log('connection established');
      socket.emit(`connected`, shortId.generate());
      socket.on('disconnect', function(){
        // logger.info(`session disconnected: test`);
      });

      socket.on('roll', (num) => {
        const dice = [];
        for(let i = 0; i < num; i++) {
          dice.push(Math.ceil(Math.random()*6))
        }
        socket.emit('rolled', dice)
      })
    });
    return io;
  }

}
