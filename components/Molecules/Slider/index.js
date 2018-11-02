import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderDefault from './slick.css';

const SliderWrapper = styled.div`
    ${SliderDefault};
`;

class SimpleSlider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
    }
    // componentDidMount() {
    //   setTimeout(() => {
    //     this.setState({ autoplay: false });
    //     console.log('5秒たったよ');
    //   }, 5000);
    // }
    render() {
      return (
        <SliderWrapper>
          <Slider {...this.state}>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
          </Slider>
        </SliderWrapper>
      );
    }
  }
  
  export default SimpleSlider;
  