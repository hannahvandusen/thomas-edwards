import "../../App.css"
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap"


function TestimonialCarousel() {
  
  const [ testimonials, setTestimonials ] = useState([]);

    //fetch testimonials
    const fetchTestimonials = async () => {
      const url = 'http://localhost:4000/testimonialsindex'
      const requestOptions = {
        method: 'GET'
      }

      try {
        const res = await fetch(url, requestOptions);
        const data = await res.json();
        console.log(data.testimonials);

        setTestimonials(data.testimonials);

      } catch (err) {
        console.log(err)
      }
    };

  useEffect(() => {
    fetchTestimonials();
    // console.log(testimonials); 
  }, []);

  // const items = [
  //   {
  //     id: 1,
  //     altText: `${testimonials[0].name}`,
  //     caption: `${testimonials[0].quote}`,
  //   },
  //   {
  //     id: 2,
  //     altText: `${testimonials[1].name}`,
  //     caption: `${testimonials[1].quote}`,
  //   }, 
  //   {
  //     id: 3,
  //     altText: `${testimonials[2].name}`,
  //     caption: `${testimonials[2].quote}`,
  //   }, 
  //   {
  //     id: 4,
  //     altText: `${testimonials[3].name}`,
  //     caption: `${testimonials[3].quote}`
  //   }
  // ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = testimonials.map((item) => {
    console.log(item)
    return (

      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item._id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption
          className="text-black"
          captionText={item.name}
          captionHeader={item.quote}
        />
      </CarouselItem>
    )
  })

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 600px;
              background: #ffcd51;
}`}
      </style>
      <Carousel
        className="carouselMedia"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={testimonials}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}

export default TestimonialCarousel
