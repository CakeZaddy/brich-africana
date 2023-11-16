import Creation from './Creation'
import Creative from './Creative'
import './portfolio.scss'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='wrapper'>
        <Creative />
        <Creation />
      </div>
    </div>
  )
}

export default Portfolio
