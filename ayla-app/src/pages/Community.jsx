import React from 'react';
import './Community.css';

// Import your icon images here
import sendIcon from '../assets/send_icon.svg';
import linkIcon from '../assets/link_icon.svg';
import smileIcon from '../assets/smile_icon.svg';
import heartIcon from '../assets/heart_icon.svg';
import messageIcon from '../assets/message_icon.svg';

const Community = () => {
  const posts = [
    {
      id: 1,
      author: "Sarah Ahmed",
      type: "ask",
      content: "What activities help your ADHD kids focus better?",
      helpful: 12,
      comments: 3
    },
    {
      id: 2,
      author: "Sarah Ahmed",
      type: "ask",
      content: "My toddler throws food on the floor every time he eats. Is he doing it on purpose?",
      helpful: 42,
      comments: 22
    }
  ];

  return (
    <div className="community_page">
      <div className="toggle_container">
        <button className="toggle_btn">Experts</button>
        <button className="toggle_btn active">Moms Stories</button>
      </div>

      <div className="community_content">
        <section className="todays_question">
          <h3>Today’s Question</h3>
          <div className="question_card">
            <p>Share your most awkward (but hilarious) kid moment in public!!</p>
          </div>
        </section>

        <section className="create_post">
          <h3>Create your post</h3>
          <div className="input_wrapper">
            <input type="text" placeholder="Type..." />
            <div className="input_icons">
              <img src={sendIcon} alt="send" className="input_img_icon" />
              <img src={linkIcon} alt="link" className="input_img_icon" />
              <img src={smileIcon} alt="smile" className="input_img_icon" />
            </div>
          </div>
        </section>

        <section className="story_section">
          <h3>Story of the day</h3>
          <div className="story_card">
            <div className="card_header">
              <div className="user_info">
                <div className="avatar_small"></div>
                <span className="author_name">Sarah Ahmed</span>
              </div>
              <span className="tag_ask">ask</span>
            </div>
            <p className="story_text">
              "Today I understood my son better." This morning my son refused to wear his shoes...
            </p>
            <div className="card_footer">
              <span className="footer_item">
                <img src={heartIcon} alt="heart" className="footer_icon" /> 120 find this helpful
              </span>
              <span className="footer_item">
                <img src={messageIcon} alt="message" className="footer_icon" /> 22
              </span>
            </div>
          </div>
        </section>

        <section className="recent_posts">
          <h3>Recent Posts</h3>
          {posts.map(post => (
            <div key={post.id} className="post_card_small">
              <div className="card_header">
                <div className="user_info">
                  <div className="avatar_small"></div>
                  <span className="author_name">{post.author}</span>
                </div>
                <span className="tag_ask">{post.type}</span>
              </div>
              <p className="post_content">{post.content}</p>
              <div className="card_footer">
                <span className="footer_item">
                  <img src={heartIcon} alt="heart" className="footer_icon" /> {post.helpful}
                </span>
                <span className="footer_item">
                  <img src={messageIcon} alt="message" className="footer_icon" /> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Community;