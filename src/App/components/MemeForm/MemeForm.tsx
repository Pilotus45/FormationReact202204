import React, { FC as Render } from 'react'
import style from './MemeForm.module.scss'
import I_Meme, { I_Image } from '../../interfaces/meme'
import Button from '../Button/Button';
import { connect } from 'react-redux';

interface I_MemeFormProps {
  currentMeme: I_Meme;
  images: Array<I_Image>;
  onInputValueChange: Function;
}

const MemeForm: Render<I_MemeFormProps> = (props) => {
  return (
    <div data-testid="MemeForm" className={style.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input type="text" id="f_titre" placeholder="saisir titre" value={props.currentMeme.titre} onChange={
          evt => { props.onInputValueChange({ titre: evt.target.value }) }
        } />
        <hr />
        <h2>Image</h2>
        <select
          value={props.currentMeme.imageId}
          onChange={(evt) => {
            props.onInputValueChange({ imageId: Number(evt.target.value) });
          }}
        >
          <option value="-1">Aucune</option>
          {props.images.map((image, index) => {
            return (<option value={image.id} key={"select-img-" + index}>{image.name}</option>);
          })}
        </select>
        <hr />
        <h2>text</h2>
        <input type="text" value={props.currentMeme.text} onChange={
          evt => { props.onInputValueChange({ text: evt.target.value }) }
        } />
        <div className={style.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={props.currentMeme.x}
              onChange={(evt) => {
                props.onInputValueChange({ x: Number(evt.target.value) });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={props.currentMeme.y}
              onChange={(evt) => {
                props.onInputValueChange({ y: Number(evt.target.value) });
              }}
            />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <input
          type="color"
          id="f_color"
          value={props.currentMeme.color}
          onChange={(evt) => {
            props.onInputValueChange({ color: evt.target.value });
          }}
        />
        <div className={style.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={props.currentMeme.fontSize}
              onChange={(evt) => {
                props.onInputValueChange({
                  fontSize: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_fw">font-weight:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              min="100"
              step="100"
              max="900"
              value={props.currentMeme.fontWeight}
              onChange={(evt) => {
                props.onInputValueChange({ fontWeight: Number(evt.target.value) });
              }}
            />
          </div>
        </div>
        <div className={style.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
              checked={props.currentMeme.underline}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => props.onInputValueChange({ underline: evt.target.checked })}
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
              checked={props.currentMeme.italic}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => props.onInputValueChange({ italic: evt.target.checked })}
            />
          </div>
        </div>
        <div className={style.half}>
          <Button type="reset" bgColor="tomato">
            clear
          </Button>
          <Button type="submit" bgColor="skyblue">
            save
          </Button>
        </div>
      </form>
    </div>
  );
}
function mapStateToProps(storeState:any, ownProps:any) {
  return {
    ...ownProps,
    images: storeState.ressources.images,
    currentMeme: storeState.current
  };
}

function mapDispatchToProps(dispatch:Function) {
  return {
    onInputValueChange:(memeValuesToChange:object) => dispatch({type: 'UPDATE_CURRENT', value:memeValuesToChange})
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MemeForm);
export const unconnectedMemeForm=MemeForm;
