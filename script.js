// this file is for user no 1

var peer = new Peer();

let conn1;

peer.on("open", function (id) {
  console.log("My peer ID is: " + id);
  const userid = peer.id;
  console.log(id);
  const useridinput = document.getElementById("userid");
  useridinput.value = userid;
});

const btn = document.getElementById("call");


btn.addEventListener("click", () => {
  const remoteid = document.getElementById("remoteid").value;
  console.log(remoteid);

  // to start the connection
  var conn = peer.connect(remoteid);

  const msg = document.getElementById("msg");
const send = document.getElementById("send");

send.addEventListener("click", () => {
    const msgvalue = msg.value;
    console.log(msgvalue)
    conn.send(msgvalue);
    console.log("message sent");
});
  
  conn.on("open", () => {
    conn.send("Hello World! welcome to the first user");
  });
  conn.on("data", (data) => {
    console.log("Received data", data);
  });
});



// to recieve the connection
peer.on("connection", (conn) => {

    conn1 = conn;
  console.log("first user connected to second user");
  console.log(conn);

const msg = document.getElementById("msg");
const send = document.getElementById("send");

send.addEventListener("click", () => {
    const msgvalue = msg.value;
    console.log(msgvalue)
    conn.send(msgvalue);
    console.log("message sent");
});

  
  conn.on("data", (data) => {
    conn.send("i am in the reciever side");
    console.log("Received the data", data);
  });
});

peer.on('error', function(err) {
    console.log(err);
    console.log("ther is some error");
    });


