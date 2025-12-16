import type { ComponentType, CSSProperties, ReactElement } from "react";

type WithStyleHOCProps = {
  // You can extend this if you want to pass extra props to the HOC itself later
};

export default function withStyleHOC<P>(
  WrappedComponent: ComponentType<P>,
  customStyle: CSSProperties
) {
  // Inner component gets whatever props WrappedComponent expects
  return function WithStyleInner(props: P & WithStyleHOCProps): ReactElement {
    console.log("hoc, inner props: ", props);
    console.log("hoc, customStyle: ", customStyle);

    return (
      <div style={customStyle}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
