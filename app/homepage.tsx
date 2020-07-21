import * as React from "react";
import * as ReactDOM from "react-dom";

export class HomepageApp extends React.PureComponent<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return <div>Hello! App, go!</div>;
    }
}
ReactDOM.render(<HomepageApp />, document.getElementById("content"));
