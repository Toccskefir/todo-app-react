import Card from "./Card";
import {ReactNode} from "react";

interface SplitPanelProps {
    left: ReactNode;
    right: ReactNode;
}

function SplitPanel({left, right}: SplitPanelProps) {
    return(
        <div style={{display: 'flex'}}>
            <Card>
                {left}
            </Card>
            <Card>
                {right}
            </Card>
        </div>
    );
}

export default SplitPanel;