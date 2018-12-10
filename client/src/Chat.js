import React from "react";

import { saveMess, clearMess, getLoggedUsers } from "../actions";
import { connect } from "react-redux";
import io from "socket.io-client";
import "./Chat.css";

export class Chat extends React.Component {
  constructor(props) {
    super(props);

    const Chat = this;
    this.onSubmit = this.onSubmit.bind(this);

    this.socket = io("https://popcorn-capstone-node.herokuapp.com");

    // dispatch action when socket announces user sent message
    this.socket.on("RECEIVE_MESSAGE", function(data) {
      Chat.props.dispatch(saveMess(data));
      Chat.refs.chatbox.scrollTo(0, document.body.scrollHeight * 10);
      if (Chat.refs.chatbox.scrollHeight > document.body.scrollHeight) {
        Chat.props.dispatch(clearMess(data));
      }
    });

    if (this.props.user) {
      this.socket.emit("USER_LOGGEDIN", {
        user: this.props.user
      });
      this.socket.on("LOG_USER", function(user) {
        Chat.props.dispatch(getLoggedUsers());
      });
    }
  }

  // close socket when user leaves
  componentWillUnmount() {
    this.socket.close();
  }

  // emit chat message on Submit
  onSubmit(e) {
    e.preventDefault();
    this.socket.emit("SEND_MESSAGE", {
      text: this.textInput.value,
      user: this.props.user
    });
    this.textInput.value = "";
  }

  render() {
    const messages = this.props.chatHistory.map((data, index) => {
      const watchTogether = (e, data) => {
        e.preventDefault();
        this.props.dispatch(
          selectVideo(
            data.currentVideo,
            data.currentVideo.id.videoId,
            data.time
          )
        );
      };

      // if time is included, add a button to watch with other users
      function addShareButton() {
        if (data.hasOwnProperty("time")) {
          return (
            <button
              className="sync-with"
              type="button"
              onClick={e => watchTogether(e, data)}
            >
              Watch
            </button>
          );
        }
      }

      return (
        <li key={index}>
          <span className="user">{data.user}</span>{" "}
          <span className="msg">
            {data.text} {addShareButton()}
          </span>
        </li>
      );
    });
    return (
      <div className="chat-container">
        <div className="chat-box">
          <ul id="messages" ref="chatbox">
            {messages}
          </ul>
          <form id="chat-form" onSubmit={this.onSubmit}>
            <input
              type="text"
              ref={input => (this.textInput = input)}
              placeholder="Start chatting..."
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  chatHistory: state.chatHistory,
  time: state.time
});

export default connect(mapStateToProps)(Chat);
