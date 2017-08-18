import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import LinkList from './LinksList';
import { Meteor } from 'meteor/meteor';

export default class Link extends React.Component {
    onLogout() {
      Accounts.logout(); 
    }

    onSubmit(e) {
        const url = this.refs.url.value.trim();
        e.preventDefault();

        if(url) {
            Meteor.call('links.insert', url);
            this.refs.url.value = '';
        }
    }
    render() {
        return (
            <div>
                <h1>Your Links</h1>
                <button onClick={this.onLogout.bind(this)}> Logout </button>
                <LinkList/>
                <p> Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Add Link</button>
                </form>    
            </div>
        )
  };
};