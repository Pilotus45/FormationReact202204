import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import I_Meme, { I_Image } from "../../interfaces/meme";
import {unconnectedMemeViewer as UCMemeViewer} from "../MemeViewer/MemeViewer";
import style from './MemeThumbnail.module.scss'
interface I_MemeThumbnailProps {
  memes: Array<I_Meme>;
  images: Array<I_Image>;
}

export const MemeThumbnail: React.FC<I_MemeThumbnailProps> = (props) => {
  return (
    <div className={style.MemeThumbnail}>
      {props.memes.map((e, i) => {
        return (
          <Link to={`/editor/${e.id}`} key={`thumbnail-meme-viewer-${i}`}>
            <div>
              <h3>{e.titre}</h3>
              <UCMemeViewer
                meme={e}
                image={props.images.find((ii) => ii.id === e.imageId)}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

function mapStateToProps(storeState:any, ownProps:any) {
  return {
    ...ownProps,
    memes:storeState.ressources.memes,
    images:storeState.ressources.images,
  };
}

function mapDispatchToProps(dispatch:Function) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemeThumbnail));
export const unconnectedMemeThumbnail=MemeThumbnail;
