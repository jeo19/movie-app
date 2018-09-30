import React, { Component } from 'react';
import './Movie.css';
import Movie from './Movie';
class App extends Component {
  state = {
    movies: [
      {
        title: 'Star wars',
        poster:
          'https://c.ndtvimg.com/star-wars-instagram_625x300_1526457978394.jpg?output-quality=70&output-format=webp'
      },
      {
        title: 'The old boys',
        poster:
          'https://m.media-amazon.com/images/M/MV5BOTM5MjEzNDAzN15BMl5BanBnXkFtZTcwNjg1OTk5OA@@._V1_SY1000_CR0,0,706,1000_AL_.jpg'
      },
      {
        title: 'Spider man',
        poster:
          'https://superclub.videotron.com/media/catalog/product/cache/image/500x711/e9c3970ab036de70892d86c6d221abfe/v/a/va_14.png'
      },
      {
        title: 'Bat man',
        poster:
          'https://http2.mlstatic.com/batman-arkham-knight-premium-edition-34-dlcs-envio-imediato-D_NQ_NP_792976-MLB26931079202_022018-F.webp'
      }
    ]
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: 'TrainSpoting',
            poster:
              'https://superclub.videotron.com/media/catalog/product/cache/image/500x711/e9c3970ab036de70892d86c6d221abfe/v/a/va_14.png'
          }
        ]
      });
    }, 5000);
  }
  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
