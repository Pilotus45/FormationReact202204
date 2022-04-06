import {
    Document,
    Page,
    PDFDownloadLink,
    PDFViewer,
    Text,
    View,
} from "@react-pdf/renderer";
import React from "react";
import { connect } from "react-redux";
import I_Meme, { I_Image } from "../../interfaces/meme";
import style from "./ListPdf.module.scss";
interface I_ListPdfProps {
    // func:Function;
    memes: Array<I_Meme>;
    images: Array<I_Image>;
}
const ListPdf: React.FC<I_ListPdfProps> = (props) => {
    return (
        <div className={style.ListPdf}>
            <PDFDownloadLink
                document={<DocumentPDF memes={props.memes} images={props.images} />}
                fileName="memes.pdf"
            >
                liens de DL
            </PDFDownloadLink>
            <br />
            <PDFViewer showToolbar={true}>
                <DocumentPDF memes={props.memes} images={props.images} />
            </PDFViewer>
        </div>
    );
};

const mapStateToProps = (state: any, own: any) => {
    return {
        ...own,
        ...state.ressources,
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        // func:()=>{dispatch({})}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPdf);

interface I_PDFDocumentProps {
    memes: Array<I_Meme>;
    images: Array<I_Image>;
}

const DocumentPDF: React.FC<I_PDFDocumentProps> = (props) => {
    return (
        <Document>
            <Page size={"A4"}>
                <View>
                    <Text>Hello world</Text>
                </View>
            </Page>
        </Document>
    );
};