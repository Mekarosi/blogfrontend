import React, { Component } from 'react';
import Layout from '../components/layout';
import chessBoard from '../components/asset/chessBoard.jpg';

export default class Homepage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h4 align='center'>CHESS WORLD</h4>
          <h5 align='center'>
            This is a platform where chess player all around the world come
            together to get to know each other and organise chess tournaments.
          </h5>

          <img
            src={chessBoard}
            alt='chess board'
            height='700px'
            width='1400px'
          ></img>
        </div>
      </Layout>
    );
  }
}
