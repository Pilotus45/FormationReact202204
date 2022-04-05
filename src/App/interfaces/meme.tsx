export default interface I_Meme {
    id?:number
    titre:string
    text:string
    x:number
    y:number
    fontWeight:string
    fontSize:number
    underline:boolean
    italic:boolean
    imageId:number
    color:string
};

export const DummyMeme:I_Meme={
    text:"Hello World",
    titre:"Bender",
    x:50,
    y:100,
    fontWeight:'900',
    fontSize:30,
    underline:true,
    italic:false,
    imageId:0,
    color:'#ACEBA0'
};

export interface I_Image {
    id:number
    url:string
    w:number
    h:number
    name:string
};