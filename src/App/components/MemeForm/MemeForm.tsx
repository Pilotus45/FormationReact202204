import {FC as Render} from 'react'
import style from './MemeForm.module.scss'
import I_Meme, { I_Image } from '../../interfaces/meme'
import Button from '../Button/Button';

interface I_MemeFormProps {
  currentMeme: I_Meme;
  images: Array<I_Image>;
  onInputValueChange:Function;
}

const MemeForm:Render<I_MemeFormProps> = (props) => {
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
        <form onSubmit={(evt) => evt.preventDefault()}>
          <input type="text" name="" id="" placeholder="Texte du meme" value={props.currentMeme.text} onChange={(evt)=>{props.onInputValueChange({text:evt.target.value})}} />
          <div className="flexCol">
            <Button type="submit" bgColor="skyblue">Valider</Button>
            <Button type="reset" bgColor="tomato">Reset</Button>
          </div>
        </form>
    </div>
  );
}

export default MemeForm;
