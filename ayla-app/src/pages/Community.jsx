import React, { useState, useEffect } from 'react';
import { Supabase } from '../Supabase'; 
import './Community.css';

import sendIcon from '../assets/send_icon.svg';
import linkIcon from '../assets/link_icon.svg';
import smileIcon from '../assets/smile_icon.svg';
import heartIcon from '../assets/heart_icon.svg';
import messageIcon from '../assets/message_icon.svg';

import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const fetchPosts = async () => {
    const { data, error } = await Supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) console.error('Error fetching:', error);
    else setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSendPost = async () => {
    if (!newPost.trim()) return;

    const { error } = await Supabase
      .from('posts')
      .insert([{ 
        post: newPost, 
        author: "Nada Yahia", 
        likes: 0 
      }]);

    if (error) {
      console.error('Error saving:', error);
    } else {
      setNewPost(""); 
      fetchPosts(); 
    }
  };

  const handleLike = async (id, currentLikes) => {
    const { error } = await Supabase
      .from('posts')
      .update({ likes: currentLikes + 1 })
      .eq('id', id);

    if (!error) {
      setPosts(posts.map(p => p.id === id ? { ...p, likes: currentLikes + 1 } : p));
    }
  };

  return (
    <div className="community_page">
      <div className="toggle_container">
        <button className="toggle_btn"  onClick={() => navigate('/experts')}>Experts</button>
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
            <input 
              type="text" 
              placeholder="Type..." 
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <div className="input_icons">
              <img src={sendIcon} alt="send" className="input_img_icon" onClick={handleSendPost} style={{cursor: 'pointer'}} />
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
                <span className="author_name">May Essam</span>
              </div>
              <span className="tag_ask">ask</span>
            </div>
            <p className="story_text">
              “Today I understood my son better.”
This morning my son refused to wear his shoes and started crying. I was about to get frustrated, but I remembered something I learned here about children with Attention Deficit Hyperactivity Disorder needing extra time to switch activities.
So instead of rushing him, I sat with him and gave him two choices:
• The blue shoes • The red shoes
He chose the red ones and suddenly everything became easier.
Sometimes they don’t want to say “no”… they just want control over small decisions.
            </p>
            <div className="card_footer">
              <span className="footer_item"><img src={heartIcon} className="footer_icon" alt="heart" /> 120 find this helpful</span>
              <span className="footer_item"><img src={messageIcon} className="footer_icon" alt="message" /> 22</span>
            </div>
          </div>
        </section>

        <section className="recent_posts">
          <h3>Recent Posts</h3>
          {loading ? (
            <p style={{ textAlign: 'center', color: '#AD335A' }}>Loading community posts...</p>
          ) : (
            posts.map((item) => (
              <div key={item.id} className="post_card_small">
                <div className="card_header">
                  <div className="user_info">
                    <div className="avatar_small"></div>
                    <span className="author_name">{item.author}</span>
                  </div>
                  <span className="tag_ask">ask</span>
                </div>
                <p className="post_content">{item.post}</p>
                <div className="card_footer">
                  <span className="footer_item" onClick={() => handleLike(item.id, item.likes || 0)} style={{cursor: 'pointer'}}>
                    <img src={heartIcon} alt="heart" className="footer_icon" /> 
                    {item.likes || 0} find this helpful
                  </span>
                  <span className="footer_item">
                    <img src={messageIcon} alt="message" className="footer_icon" /> 0
                  </span>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
      <Navbar />
    </div>
  );
};

export default Community;