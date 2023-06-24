// Write your code here
import {useState} from 'react'

const ReadMore = props => {
  const {reactHooksDescription} = props

  //   const [initialPara, setPara] = useState(reactHooksDescription.slice(0, 100))
  const [fullPara, setFullPara] = useState(false)

  const onBtnClick = () => {
    setFullPara(prevState => !prevState)
    // setPara(prevState => !prevState)
  }

  const btnTxt = fullPara ? 'Read Less' : 'Read More'
  const paraTxt = fullPara
    ? reactHooksDescription.slice(0, reactHooksDescription.length)
    : `${reactHooksDescription.slice(0, 200)}...`

  return (
    <div>
      <div>
        <h1>React Hooks</h1>
        <p>Hooks are new addition to react</p>
        <img
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <p>{paraTxt}</p>
        <button type="button" onClick={onBtnClick}>
          {btnTxt}
        </button>
      </div>
    </div>
  )
}

export default ReadMore
