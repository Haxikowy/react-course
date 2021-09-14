import './scss/PostList.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="post-list--item" key={post.id}>
          <div className="col">
            <div className="post-list--item__avatar">
              <img width="100px" height="150px" alt="user avatar" />
            </div>
          </div>
          <div className="col">
            <h2 className="post-list--item__title">{post.title}</h2>
            <p className="post-list--item__text">{post.body}</p>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="post-list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
