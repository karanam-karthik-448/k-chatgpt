
import './App.css';
import gptLogo from './asserts/logo.png';
import add from './asserts/add.png';
import message from './asserts/message.png';
import home from './asserts/home.png';
import saved from './asserts/saved.png';
import rocket from './asserts/rocket.png';
import send from './asserts/send.png';
import chatgpt2 from './asserts/chatgpt2.jpeg';
import user from './asserts/profile.jpg'

function App() {
  return (
    <div div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="uppersideTop"><img src={gptLogo} height={30} width={30} alt="" className="logo" /><span className="brand">K-CHATGPT</span></div>
          <div className="midbtn">  <button><img src={add} height={30} width={30} alt="" />New chat</button></div>

          <div className="uppersidebottem">
            <button className="querry"><img src={message} height={30} width={30} alt="" />What is programming ?</button>
            <button className="querry"><img src={message} height={30} width={30} alt="" />How to use an Api  ?</button>
          </div>
        </div>
        <div className="lowerside">
          <div className="list"><img src={home} height={22} width={26} alt="" className="listImg" />Home</div>
          <div className="list"><img src={saved} height={22} width={26} alt="" className="listImg" />Saved</div>
          <div className="list"><img src={rocket} height={22} width={26} alt="" className="listImg" />Upgrade</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat bot1">
            <img className='imgchat' src={user} height={32} width={30} /><p className="user">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque aspernatur saepe quae ipsa explicabo numquam officiis minus hic expedita necessitatibus. Hic veniam tenetur esse error?</p>
          </div>
          <div className="chat bot">
          <img className='imgchat' src={chatgpt2} height={32} width={30} /><p className="Gpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque aspernatur saepe quae ipsa explicabo numquam officiis minus hic expedita necessitatibus. Hic veniam tenetur esse error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cumque accusantium dignissimos nam voluptatibus delectus aperiam perspiciatis esse aspernatur assumenda doloremque, est tempore quod rerum sunt quia accusamus molestias natus voluptates enim facere in! Voluptate vitae esse maiores aperiam quam. Eum aliquam earum doloribus distinctio mollitia consectetur expedita nulla. Tempora nemo velit enim vitae ducimus voluptatum corrupti eveniet, optio rerum sit sapiente itaque cum, quos quo autem ut necessitatibus. Eius officiis temporibus ipsa repellat earum ea odio quo! Ea voluptas obcaecati ut minima deserunt saepe fugiat numquam eveniet, voluptates aut explicabo quod amet, exercitationem suscipit, laborum aliquam officiis autem ex!</p>
        </div>
        </div>
        <div className="chatfooter">
          <div className="inp">
            <input type="text" placeholder='send the message' /><button className="send"><img src={send} height={25.2} width={24} /></button>
          </div>
          <div className="para">
          <p>This K-chatgpt provides  easy and simplified solution for your querries . so , Use it for all kinds of tasks</p></div>
        </div>
      </div>
    </div>
  );
};

export default App;
