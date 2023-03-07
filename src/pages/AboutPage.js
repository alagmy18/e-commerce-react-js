import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'


const AboutPage = () => {
  return <main>
    <PageHero title="about"/>
      <Wrapper className="page section section-center ">
          <img src={aboutImg} alt="aboutimg"/> 
          <article>
              <div className='title'>
                <h2>our story</h2> 
                <div className='underline'></div>
              </div> 
              <p>
               Lorem ipsum dolor sit amet, movet sanctus ad per, sale scripta recteque eu vix. Ius ei eripuit invidunt. Duo possit liberavisse ut. Vix alterum inermis deterruisset ei, ius at libris salutatus. Per sale dictas sensibus ei. Ei suas concludaturque duo, recusabo sadipscing eum ad. Elitr deleniti mea ex, eum laudem dissentias ea. Nam recusabo posidonium vituperatoribus an, qui viris quaestio at. Usu causae appetere periculis ne, duo ei posse vivendum inimicus. Has an ocurreret posidonium argumentum, vix eu dolor molestie accommodare.
              </p>
          </article>
      </Wrapper>

  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
