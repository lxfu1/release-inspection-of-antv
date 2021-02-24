/*
 * @Descripttion: Gallery
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-24 15:42:12
 * @LastEditTime: 2021-02-24 22:17:51
 */
import React, { useEffect } from "react";
import { codes } from "./code";
//@ts-ignore
window.g2plot = require("@antv/g2plot");
//@ts-ignore
window.util = require("@antv/util");
//@ts-ignore
window.insertCss = require("insert-css");
//@ts-ignore
window.dataSet = require("@antv/data-set");

const execute = (code: string, node: HTMLDivElement) => {
  const script = document.createElement("script");
  script.innerHTML = `
    try {
      ${code}
    } catch(e) {
      console.error(e);
    }
  `;
  node.appendChild(script);
};

const PlayGround: React.FC = () => {
  const onCodeChange = (code: string, index: number) => {
    try {
      execute(code, document.querySelector(`#box-${index}`) as HTMLDivElement);
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
      return;
    }
  };

  useEffect(() => {
    codes.forEach((item) => {
      console.log(item.fileName);
      onCodeChange(
        item.code
          .replace(/\(\*\*\)/g, "`")
          .replace(/s1(\S*)s1/g, (_, sign: string) => {
            return "${" + sign + "}";
          }),
        item.fileIndex
      );
    });
  }, []);

  return (
    <div className="charts-container">
      {codes.map((item) => (
        <div key={item.fileName + item.fileIndex} id={`box-${item.fileIndex}`}>
          <div id={`container-${item.fileIndex}`}></div>
        </div>
      ))}
    </div>
  );
};

class ErrorHandlerPlayGround extends React.Component {
  state = {
    error: undefined,
  };

  static getDerivedStateFromError(error: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error) {
      // 你可以自定义降级后的 UI 并渲染
    }
    return <PlayGround {...this.props} />;
  }
}

// export default ErrorHandlerPlayGround;
export default ErrorHandlerPlayGround;
