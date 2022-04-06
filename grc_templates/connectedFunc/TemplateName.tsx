import { connect } from "react-redux";
import style from "./TemplateName.module.scss";

interface I_TemplateNameProps {
    func: Function;
}

const TemplateName: React.FC<I_TemplateNameProps> = (props) => {
    return (
        <div className={style.TemplateName}  data-testid="TemplateName">TemplateName</div>
    );
}

function mapStateToProps(s: any, p: any) {
    return {};
}

function mapDispatchToProps(dispatch: Function) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateName);